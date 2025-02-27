const express = require('express');
const router = express.Router();

const { setupTables, insertRegionsData } = require('../controllers/databaseController');
const { insertUser, loginUser, getUser, verifiedUser, getPendingUsers, getVerifiedUsers, logoutUser} = require('../controllers/userController');

// {====== ROUTES CONERNANT LES UTILISATEURS - DÉBUT ======}

// Routes pour gérer la base de données
router.post('/create-db-tables', setupTables);
router.post('/fill-region-table', insertRegionsData);

// Routes pour créer un utilisateur
router.post('/create-user', insertUser);

// Routes pour identifer un utilisateur et lui donner les tokens dont il a besoin
router.post('/login-user', loginUser);

// Routes pour déconnecter un utilisateur
router.post('/logout', logoutUser);

// Routes pour fetch les utilisateurs
router.get('/user-profile', getUser);

// Routes POST pour validé et vérifier un compte utilisateur
router.post('/verified-user', verifiedUser);

// Routes pour fetch les utilisateurs PAS ENCORE vérifiés
router.get('/pending-users', getPendingUsers);

// Routes pour fetch les utilisateurs vérifiés
router.get('/verified-users', getVerifiedUsers);

// {====== ROUTES CONERNANT LES RÉGIONS - DÉBUT ======}



module.exports = router;