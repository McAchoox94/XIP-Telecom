const express = require('express');
const axios = require('axios'); // Importer axios
const cors = require('cors');

const port = 1337;
const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000", // Autorise uniquement le frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
}));

const databaseRoutes = require('./routes/database.js');
app.use('/api/db', databaseRoutes);

const { connectToOdoo } = require('./odoo.js');
const pool = require("./db");

// Fonction pour exécuter les requêtes au démarrage
async function initializeDatabase() {
    try {
        console.log("Création des tables...");
        await axios.post('http://localhost:1337/api/db/create-db-tables', {}, { headers: { 'Content-Type': 'application/json' } });
        console.log("Table 'users' créée/vérifiée avec succès.");

        console.log("Insertion des régions...");
        await axios.post('http://localhost:1337/api/db/fill-region-table', {}, { headers: { 'Content-Type': 'application/json' } });
        console.log("Table 'regions' remplie avec succès.");
    } catch (err) {
        console.error("Erreur lors de l'initialisation de la base de données :", err.message);
    }
}

// Exécuter la création des tables au démarrage
initializeDatabase();

app.get('/users', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM users');
        res.status(200).send(data.rows);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get('/regions', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM regions');
        res.status(200).send(data.rows);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get('/connectOdoo', async (req, res) => {
    try {
        await connectToOdoo();
        res.status(200).json({ message: 'Connexion à Odoo réussie !' });
    } catch (err) {
        res.status(500).json({ error: 'Connexion à Odoo échouée.', details: err.message });
    }
});

app.listen(port, () => console.log(`Le backend a démarré sur le port : ${port}`));
