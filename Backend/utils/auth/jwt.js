const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

/**
 * Générer un token JWT
 * @param {number} userId - ID de l'utilisateur dans XipTelecom
 * @param {number} odooUserId - ID de l'utilisateur dans Odoo
 * @param {string} email - Email de l'utilisateur
 * @param {string} name - Nom de l'utilisateur
 * @returns {string} Token JWT signé
 */

function generateJWT(userId, email, name, role) {
    return jwt.sign(
        { userId, email, name, role },
        SECRET_KEY,
        { expiresIn: '12h' }
    );
}

/**
 * Vérifier un token JWT
 * @param {string} token - Token JWT à vérifier
 * @returns {object|null} Données du token ou null si invalide
 */
function verifyJWT(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null; // ⚠️ Token invalide ou expiré
    }
}

module.exports = { generateJWT, verifyJWT };