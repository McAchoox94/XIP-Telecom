const Odoo = require('odoo-xmlrpc');
const axios = require('axios');

// Configuration d'Odoo via XML-RPC
const odoo = new Odoo({
    url: 'http://odoo:8069',  // URL de ton instance Odoo
    db: 'odoo',               // Nom de la base de données
    username: 'admin',        // Nom d'utilisateur Odoo
    password: 'admin',        // Mot de passe de l'utilisateur
});

// Fonction pour se connecter à Odoo via XML-RPC
const connectToOdoo = async () => {
    return new Promise((resolve, reject) => {
        odoo.connect((err) => {
            if (err) {
                console.error('Erreur de connexion à Odoo :', err);
                reject(err);
            } else {
                console.log('Connexion réussie à Odoo !');
                resolve();
            }
        });
    });
};

// Fonction pour créer un utilisateur dans Odoo via XML-RPC
const createUserInOdoo = async (userData) => {
    try {
        console.log("Vérification de la connexion à Odoo...");
        await connectToOdoo();
        console.log("Connexion à Odoo réussie !");

        console.log('Tentative de création de l\'utilisateur avec les données suivantes :', userData);

        const params = [{
            "name": userData.name,
            "login": userData.login,
            "email": userData.email,
            "password": userData.password,
        }];

        const response = await new Promise((resolve, reject) => {
            odoo.execute_kw('res.users', 'create', [params], (err, value) => {
                if (err) {
                    console.error('Erreur lors de la création de l\'utilisateur :', err);
                    reject(new Error(`Erreur lors de la création de l'utilisateur : ${err.message || err}`));
                } else {
                    console.log('Utilisateur créé avec succès, réponse d\'Odoo:', value);
                    resolve(value);
                }
            });
        });

        return response;
    } catch (err) {
        console.error('Erreur interne dans createUserInOdoo :', err);
        throw new Error(`Erreur lors de la création de l'utilisateur : ${err.message || err}`);
    }
};

const connectUserToOdoo = async (email, password) => {
    return new Promise((resolve, reject) => {
        const odooAuth = new Odoo({
            url: "http://odoo:8069",
            db: "odoo",
            username: email,
            password: password,
        });

        console.log("Tentative d'authentification sur Odoo pour :", email);

        odooAuth.connect(async (err) => {
            if (err) {
                console.error("Erreur d'authentification :", err);
                return reject("Échec de l'authentification à Odoo");
            }

            console.log("Authentification Odoo réussie !");
            
            // Étape 2 : Récupérer la session Odoo en HTTP
            try {
                const sessionResponse = await axios.post("http://odoo:8069/web/session/authenticate", {
                    jsonrpc: "2.0",
                    method: "call",
                    params: {
                        db: "odoo",
                        login: email,
                        password: password,
                    },
                    id: Math.floor(Math.random() * 100000),
                }, { withCredentials: true });

                const sessionCookie = sessionResponse.headers["set-cookie"];
                if (sessionCookie) {
                    console.log("Session Odoo récupérée avec succès !");
                    resolve({ odooUserId: odooAuth.uid, sessionCookie });
                } else {
                    console.error("Impossible de récupérer le cookie de session Odoo");
                    reject("Échec de la récupération de la session Odoo");
                }
            } catch (sessionError) {
                console.error("Erreur lors de la récupération de la session Odoo :", sessionError);
                reject("Erreur de session Odoo");
            }
        });
    });
};

module.exports = {
    odoo,
    connectToOdoo,
    createUserInOdoo,
    connectUserToOdoo
};