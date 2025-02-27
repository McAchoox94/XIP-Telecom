const crypto = require('crypto');
const pool = require('../db.js');
const { connectToOdoo, createUserInOdoo, connectUserToOdoo } = require('../odoo.js');
const { generateJWT, verifyJWT } = require('../utils/auth/jwt.js');
const result = require("pg/lib/query");

// Générer un hash de mot de passe (Même hashage que Odoo)
function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
    return `${salt}$${hash}`;
}

// Créer un utilisateur dans XipTelecom et Odoo
exports.insertUser = async (req, res) => {
    const { name, email, password , region } = req.body;

    // Validation des données
    if (!name || !email || !password || !region) {
        return res.status(400).json({ error: 'Tous les champs sont requis (name, email, password , region )' });
    }

    console.log('Données reçues pour création d\'utilisateur:', { name, email , region });

    try {
        // Étape 1 : Vérifier si l'e-mail existe déjà dans XipTelecom
        const emailCheckQuery = 'SELECT id FROM users WHERE email = $1;';
        const emailCheckResult = await pool.query(emailCheckQuery, [email]);

        if (emailCheckResult.rowCount > 0) {
            console.log('L\'email est déjà utilisé dans XipTelecom.');
            return res.status(400).json({ error: 'L\'email est déjà utilisé. Veuillez en choisir un autre.' });
        }

        // Étape 2 : Création dans Odoo
        await connectToOdoo();
        const userData = {
            name: name,
            login: email,
            email: email,
            password: password,
        };

        const userIdOdoo = await createUserInOdoo(userData); // ID généré par Odoo
        console.log(`Utilisateur créé dans Odoo avec l'ID : ${userIdOdoo}`);

        // Étape 3 : Création dans la base de données de XipTelecom
        const hashedPassword = hashPassword(password);
        const query = 'INSERT INTO users (id, name, email, password, region_id) VALUES ($1, $2, $3, $4, $5);';
        const values = [userIdOdoo, name, email, hashedPassword, region];
        await pool.query(query, values);

        console.log(`Utilisateur créé dans XipTelecom avec l'ID : ${userIdOdoo}`);

        // Réponse en cas de succès
        res.status(201).json({
            message: 'Utilisateur créé avec succès dans XipTelecom et Odoo.',
            user: {
                id: userIdOdoo,
                name,
                email,
                login: name,
                region,
            },
        });
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error);

        // Gestion des erreurs spécifiques
        if (error.code === '23505') {
            res.status(400).json({
                error: 'L\'email ou le login est déjà utilisé. Veuillez en choisir un autre.',
            });
        } else {
            res.status(500).json({
                error: 'Erreur lors de la création de l\'utilisateur.',
                details: error.message,
            });
        }
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

  function validatePassword(inputPassword, storedPassword) {
      const [salt, hash] = storedPassword.split('$');
      const hashToVerify = crypto.pbkdf2Sync(inputPassword, salt, 100000, 64, 'sha512').toString('hex');
      return hash === hashToVerify;
  }

  if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe sont requis.' });
  }

  try {
      // --- 1. Vérification de l'utilisateur dans la BDD XipTelecom ---
      const userQuery = 'SELECT * FROM users WHERE email = $1;';
      const result = await pool.query(userQuery, [email.toLowerCase()]);

      if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Utilisateur non trouvé.' });
      }

      const user = result.rows[0];

      if (!user.isverified) {
          return res.status(403).json({
              error: 'Votre compte n\'est pas encore vérifié. Veuillez attendre qu\'un administrateur le valide.'
          });
      }

      const isPasswordValid = validatePassword(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ error: 'Mot de passe incorrect.' });
      }

      // --- 2. Génération du token JWT ---
      const token = generateJWT(user.id, user.email, user.name, user.role);

      // --- 3. Connexion automatique à Odoo ---
      let odooUserId = null;
      let sessionCookie = null;
      try {
          const odooAuthData = await connectUserToOdoo(email, password);
          odooUserId = odooAuthData.odooUserId;
          sessionCookie = odooAuthData.sessionCookie;
          console.log(`Utilisateur connecté à Odoo avec UID : ${odooUserId}`);
      } catch (odooError) {
          console.error("Connexion à Odoo échouée :", odooError);
      }

      // --- 4. Envoi de la réponse avec le cookie Odoo ---
      const response = {
          message: 'Connexion réussie.',
          token,  // Token JWT pour XipTelecom
          odooUserId: odooUserId > 0 ? odooUserId : null,
      };

      if (sessionCookie) {
          res.setHeader("Set-Cookie", sessionCookie);
      }

      res.status(200).json(response);
  } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
};

exports.logoutUser = (req, res) => {
    res.clearCookie("token", { httpOnly: true, path: "/" });  // Supprime le cookie token
    res.clearCookie("session_id", { httpOnly: true, path: "/" });  // Supprime le cookie session_id

    return res.status(200).json({ message: "Déconnexion réussie" });
};

/*Get les utilisateurs pour se connecter*/
exports.getUser = async (req, res) => {
    try {
        // Récupération du token de l'en-tête
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Token manquant ou invalide." });
        }

        const token = authHeader.split(" ")[1];
        const decoded = verifyJWT(token);

        if (!decoded) {
            return res.status(401).json({ error: "Token invalide." });
        }

        // Recherche de l'utilisateur dans la base de données
        const userQuery = "SELECT id, name, email, role FROM users WHERE id = $1;";
        const result = await pool.query(userQuery, [decoded.userId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Utilisateur non trouvé." });
        }

        const user = result.rows[0];

        res.status(200).json(user);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        res.status(500).json({ error: "Erreur interne du serveur." });
    }
};

/* Get les utilisateurs en attente avec le nom de leur région */
exports.getPendingUsers = async (req, res) => {
    try {
        // Vérification du token JWT
        const token = req.headers.authorization?.split(" ")[1];
        const user = verifyJWT(token);
        if (!user) return res.status(401).json({ error: "Non autorisé" });

        let query = `
            SELECT users.id, users.name, users.role, users.email, regions.name AS region_name
            FROM users
            LEFT JOIN regions ON users.region_id = regions.id
            WHERE users.isVerified = FALSE
        `;
        const values = [];

        // Si c'est un directeur d'agence, on filtre sa région
        if (user.role === 1) {
            query += " AND users.region_id = (SELECT region_id FROM users WHERE id = $1)";
            values.push(user.userId);
        }

        const result = await pool.query(query, values);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs en attente :", error);
        res.status(500).json({ error: "Erreur interne du serveur." });
    }
};

/* Get les utilisateurs acceptés avec le nom de leur région */
exports.getVerifiedUsers = async (req, res) => {
    try {
        // Vérification du token JWT
        const token = req.headers.authorization?.split(" ")[1];
        const user = verifyJWT(token);
        if (!user) return res.status(401).json({ error: "Non autorisé" });

        let query = `
            SELECT users.id, users.name, users.role, regions.name AS region_name
            FROM users
            JOIN regions ON users.region_id = regions.id
            WHERE users.isVerified = TRUE
        `;
        const values = [];

        // Filtrage pour les directeurs d'agence
        if (user.role === 1) {
            query += " AND users.region_id = (SELECT region_id FROM users WHERE id = $1)";
            values.push(user.userId);
        }

        const result = await pool.query(query, values);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs vérifiés :", error);
        res.status(500).json({ error: "Erreur interne du serveur." });
    }
};

/*Accepte les utilisateurs*/
exports.verifiedUser = async (req, res) => {
    try {
        const { id } = req.body;
        const query = 'UPDATE users SET isVerified = TRUE WHERE id = $1';
        await pool.query(query, [id]);
    } catch (error) {
        if (error.status !== 401) {
            res.status(200).json({
                message: 'User verified'
            });
        } else {
            console.error("Erreur lors de la verification :", error);
        }
    }
}
