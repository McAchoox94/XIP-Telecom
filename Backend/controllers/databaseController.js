const pool = require('../db.js');

exports.setupTables = async (req, res) => {
    try {
        // Suppression des tables sans dépendance
        await pool.query(`DROP TABLE IF EXISTS users, regions CASCADE;`);

        // Création des tables sans FOREIGN KEY
        await pool.query(`
            CREATE TABLE regions (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                director_id INT
            );

            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(100) UNIQUE NOT NULL,
                name VARCHAR(100) NOT NULL,
                password TEXT NOT NULL,
                region_id INT NOT NULL,
                role INT NOT NULL DEFAULT 0,
                isVerified BOOLEAN DEFAULT false,
                created_at TIMESTAMP DEFAULT now()
            );
        `);

        // Ajout des contraintes FOREIGN KEY après la création des tables
        await pool.query(`
            ALTER TABLE users ADD CONSTRAINT fk_region FOREIGN KEY (region_id) REFERENCES regions(id) ON DELETE CASCADE;
            ALTER TABLE regions ADD CONSTRAINT fk_director FOREIGN KEY (director_id) REFERENCES users(id) ON DELETE SET NULL;
        `);

        res.status(200).json({ message: "Les tables users et regions ont été créées avec succès." });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

// Ajouter la fonction pour insérer les régions de France dans la table regions
exports.insertRegionsData = async (req, res) => {
    try {
        await pool.query(`
            INSERT INTO regions (name, email) VALUES
                ('Auvergne-Rhône-Alpes', 'auvergne-rhone-alpes@example.com'),
                ('Bourgogne-Franche-Comté', 'bourgogne-franche-comte@example.com'),
                ('Bretagne', 'bretagne@example.com'),
                ('Centre-Val de Loire', 'centre-val-de-loire@example.com'),
                ('Corse', 'corse@example.com'),
                ('Grand Est', 'grand-est@example.com'),
                ('Hauts-de-France', 'hauts-de-france@example.com'),
                ('Île-de-France', 'ile-de-france@example.com'),
                ('Normandie', 'normandie@example.com'),
                ('Nouvelle-Aquitaine', 'nouvelle-aquitaine@example.com'),
                ('Occitanie', 'occitanie@example.com'),
                ('Pays de la Loire', 'pays-de-la-loire@example.com'),
                ('Provence-Alpes-Côte d''Azur', 'provence-alpes-cote-dazur@example.com');
        `);
        res.status(200).json({ message: "Les régions de France ont été insérées." });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};
