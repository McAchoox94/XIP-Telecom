const { Pool } = require('pg');

const pool = new Pool({
    host: 'postgres_db', // Nom du service défini dans docker-compose
    port: 5432,
    user: 'postgres', // Correspond à POSTGRES_USER
    password: 'password', // Correspond à POSTGRES_PASSWORD
    database: 'xiptelecom' // Correspond à POSTGRES_DB
});

module.exports = pool;
