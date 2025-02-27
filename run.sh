#!/usr/bin/env bash

# Installation des packages et des dépendances pour le Backend
cd Backend
npm install

# Installation des packages et des dépendances pour le Frontend
cd ../Frontend
npm install

# Retour à la racine du projet et lancement des containers Docker
cd ..

docker-compose up -d --build

# Attente de quelques secondes pour s'assurer qu'Odoo est bien démarré
#echo "Attente de 10 secondes pour le démarrage d'Odoo..."
#sleep 10

# Lancement de la mise à jour des modules
#docker exec -t odoo odoo -u all --stop-after-init

# Création du dossier des logs s'il n'existe pas
mkdir -p logs
sudo chmod -R 777 logs

# Taille max en octets (10MB)
MAX_SIZE=$((10 * 1024 * 1024))

# Rotation des logs si nécessaire
if [[ -f logs/app.log && $(stat -c%s logs/app.log) -ge $MAX_SIZE ]]; then
    mv logs/app.log logs/app-$(date +"%Y%m%d%H%M%S").log  # Renommer le fichier
    touch logs/app.log  # Créer un nouveau fichier de log
fi

docker-compose logs -f >> logs/app.log &
echo "Odoo et PostgreSQL démarrés avec succès"