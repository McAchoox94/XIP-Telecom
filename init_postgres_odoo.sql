-- Création de l'utilisateur Odoo avec les droits nécessaires
CREATE USER odoo_user WITH PASSWORD 'odoo_password';

-- Donne le droit de créer des bases de données
ALTER ROLE odoo_user CREATEDB;

-- Accorde tous les privilèges sur la base de données xiptelecom à odoo_user
GRANT ALL PRIVILEGES ON DATABASE xiptelecom TO odoo_user;

-- Créer la base de données Odoo avec odoo_user comme propriétaire
CREATE DATABASE odoo OWNER odoo_user;

-- Accorde tous les privilèges sur la base de données Odoo à odoo_user
GRANT ALL PRIVILEGES ON DATABASE odoo TO odoo_user;
