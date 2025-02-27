# 📌 XIP Telecom - Odoo 18 avec Docker

Ce projet contient la configuration nécessaire pour exécuter **Odoo 18**, **PostgreSQL** et d'autres services liés en utilisant **Docker**.

## 🚀 Installation et Lancement du Projet

### 1️⃣ **Cloner le projet**
```bash
# Cloner le dépôt depuis GitLab
git clone ssh://git@git.uha4point0.fr:22222/UHA40/xip-telecom.git
cd xip-telecom
```

### 2️⃣ **Configurer les permissions**
Assurez-vous que les répertoires critiques ont les bonnes permissions :
```bash
sudo chmod -R 777 config addons logs
```

### 3️⃣ **Démarrer les services Docker**
Exécutez la commande suivante pour démarrer **Odoo, PostgreSQL, Backend et Frontend** :
```bash
./run.sh
```

### 4️⃣ **Accéder aux services**
| Service    | URL |
|------------|--------------------------------|
| **Odoo**  | [http://localhost:8069](http://localhost:8069) |
| **pgAdmin** | [http://localhost:5050](http://localhost:5050) |
| **Backend (Express)** | [http://localhost:1337](http://localhost:1337) |
| **Frontend (Next.js)** | [http://localhost:3000](http://localhost:3000) |

---
## 🛠 Configuration de pgAdmin 4

1. Accédez à **pgAdmin** :
   - URL : [http://localhost:5050](http://localhost:5050)
   - Identifiants :
     - **Email** : `admin@admin.com`
     - **Mot de passe** : `admin`

2. Ajouter un **nouveau serveur PostgreSQL** :
   - **Nom du serveur** : `Xip PostgreSQL`
   - **Host name/address** : `postgres_db`
   - **Port** : `5432`
   - **Maintenance Database** : `postgres`
   - **Username** : `postgres`
   - **Password** : `password`
   - ✅ **Cocher "Save password"**

3. Cliquez sur **Save** et accédez aux bases de données `xiptelecom` et `odoo`.

---
## 📌 Vérifier et Gérer les Conteneurs

### Voir les conteneurs actifs
```bash
docker ps
```

### Voir les logs d'Odoo
```bash
docker logs -f odoo
```

### Arrêter les conteneurs
```bash
docker compose down
```

### Supprimer les volumes (⚠️ Attention, cela efface les données !) 
```bash
docker compose down -v
```

### Relancer après un nettoyage
```bash
docker compose up -d --build
```

---
## 📜 Création de la Base de Données (Manuel)
Si la base de données Odoo n'est pas créée automatiquement, suivez ces étapes :
1. Accédez à PostgreSQL via pgAdmin.
2. Exécutez la requête suivante :
   ```sql
   CREATE DATABASE odoo OWNER odoo_user;
   GRANT ALL PRIVILEGES ON DATABASE odoo TO odoo_user;
   ```
3. Relancez Odoo avec :
   ```bash
   docker-compose restart odoo
   ```

---
## 📢 Support & Développement
Si vous rencontrez des problèmes, ouvrez une **issue** sur GitLab ou contactez l'équipe de développement.

🚀 Bon développement !

---


# Odoo 18 - Création d'un Module Personnalisé

Ce guide explique comment créer un **module personnalisé** pour **Odoo 18** en utilisant Docker.

## 📌 1. Préparer l'Environnement

Avant de commencer, assurez-vous que :
- Odoo tourne dans Docker :
  ```bash
  docker ps | grep odoo
  ```
- Vous avez un dossier **`addons/`** monté dans votre conteneur Odoo.

## 📌 2. Créer la Structure du Module

Exécutez ces commandes pour créer un module nommé `mon_module` :

```bash
mkdir -p addons/mon_module/models addons/mon_module/views addons/mon_module/security

# Fichiers obligatoires
touch addons/mon_module/__init__.py
      addons/mon_module/__manifest__.py
      addons/mon_module/models/__init__.py
      addons/mon_module/models/mon_model.py
      addons/mon_module/views/mon_model_views.xml
      addons/mon_module/views/module_info.xml
      addons/mon_module/security/ir.model.access.csv
```

## 📌 3. Configurer les Fichiers du Module

### `__init__.py` (Initialisation du module)
```python
from . import models
```

### `models/__init__.py` (Initialisation des modèles)
```python
from . import mon_model
```

### `__manifest__.py` (Description du module)
```python
{
    'name': 'Mon Module Personnalisé',
    'version': '1.0',
    'category': 'Custom',
    'summary': 'Un module Odoo personnalisé',
    'description': 'Ce module ajoute une nouvelle fonctionnalité à Odoo.',
    'author': 'Mon Nom',
    'website': 'https://mon-site.com',
    'depends': ['base'],
    'data': [
        'security/ir.model.access.csv',
        'views/mon_model_views.xml',
        'views/module_info.xml',
    ],
    'installable': True,
    'auto_install': False,
    'application': True,
}
```

### `models/mon_model.py` (Définition du modèle)
```python
from odoo import models, fields

class MonModel(models.Model):
    _name = 'mon.module'
    _description = 'Mon Modèle Personnalisé'

    name = fields.Char(string="Nom", required=True)
    description = fields.Text(string="Description")
    active = fields.Boolean(string="Actif", default=True)
    version = fields.Char(string="Version")

class IrModuleModule(models.Model):
    _inherit = 'ir.module.module'

    version = fields.Char(string="Version")
```

### `views/mon_model_views.xml` (Interface utilisateur)
```xml
<?xml version="1.0" encoding="utf-8"?>
<odoo>
    <record id="view_mon_model_form" model="ir.ui.view">
        <field name="name">mon.model.form</field>
        <field name="model">mon.module</field>
        <field name="arch" type="xml">
            <form string="Mon Modèle">
                <sheet>
                    <group>
                        <field name="name"/>
                        <field name="description"/>
                        <field name="active"/>
                        <field name="version"/>
                    </group>
                </sheet>
            </form>
        </field>
    </record>

    <record id="view_mon_model_list" model="ir.ui.view">
        <field name="name">mon.model.list</field>
        <field name="model">mon.module</field>
        <field name="arch" type="xml">
            <list string="Mon Modèle">
                <field name="name"/>
                <field name="description"/>
                <field name="active"/>
                <field name="version"/>
            </list>
        </field>
    </record>

    <record id="action_mon_model" model="ir.actions.act_window">
        <field name="name">Mon Modèle</field>
        <field name="res_model">mon.module</field>
        <field name="view_mode">list,form</field>
        <field name="help" type="html">
            <p class="oc_view_nocontent_create">
                Cliquez pour ajouter un nouvel élément dans Mon Module
            </p>
        </field>
    </record>

    <menuitem id="menu_mon_model" name="Mon Module" sequence="10"/>
    <menuitem id="menu_mon_model_main" name="Mon Modèle" parent="menu_mon_model" action="action_mon_model" sequence="20"/>
</odoo>
```

### `views/module_info.xml`
```xml
<?xml version="1.0" encoding="utf-8"?>
<odoo>
    <record id="view_module_info_form" model="ir.ui.view">
        <field name="name">mon.module.info.form</field>
        <field name="model">ir.module.module</field>
        <field name="arch" type="xml">
            <form string="Information du Module">
                <sheet>
                    <group>
                        <field name="name"/>
                        <field name="summary"/>
                        <field name="description"/>
                        <field name="author"/>
                        <field name="website"/>
                        <field name="category_id"/>
                        <field name="version"/>
                    </group>
                </sheet>
            </form>
        </field>
    </record>

    
</odoo>
```



### `security/ir.model.access.csv` (Permissions d’accès)
```csv
id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
access_mon_model,Access Mon Module,mon_module.model_mon_module,,1,1,1,1
```

## 📌 4. Mettre à Jour et Installer le Module

### 1️⃣ Mettre à jour les modules dans Odoo
```bash
docker exec -it odoo bash -c "odoo -u all --stop-after-init"
```

### 2️⃣ Redémarrer le conteneur Odoo
```bash
docker-compose restart odoo
```

### 3️⃣ Installer le module via l'interface Odoo
1. Aller dans **Apps** (`http://localhost:8069`)
2. Activer **le mode développeur**
3. Mettre à jour la liste des applications
4. Rechercher **Mon Module Personnalisé** et cliquer sur "Installer"

---

## ✅ Résumé des étapes
1️⃣ **Créer la structure du module** dans `addons/mon_module/`
2️⃣ **Écrire les fichiers du module** (`models`, `views`, `security`)
3️⃣ **Mettre à jour Odoo** avec `odoo -u all --stop-after-init`
4️⃣ **Installer le module via l’interface Odoo**

🚀 Félicitations ! Votre module Odoo est prêt à être utilisé 🎉

## 🛠 Résolution du problème "Warn: Can't find .pfb for face 'Courier'"

Si lors du lancement d'Odoo, vous voyez l'avertissement suivant :

```
Warn: Can't find .pfb for face 'Courier'
```

Cela signifie que la police **Courier** manque dans le conteneur Odoo. Pour corriger cela, suivez ces étapes :

### 📌 **1. Se connecter au conteneur Odoo en mode root**
Ouvrez un terminal et exécutez :

```bash
docker exec -it --user root odoo bash
```

### 📌 **2. Installer les polices manquantes**
Dans le terminal du conteneur, exécutez :

```bash
apt-get update && apt-get install -y gsfonts
```

### 📌 **3. Quitter et redémarrer le conteneur Odoo**
Après l’installation, quittez le conteneur :

```bash
exit
```

Puis, redémarrez Odoo :

```bash
docker-compose restart odoo
```

Après cela, l'avertissement ne devrait plus apparaître, et le système Odoo fonctionnera normalement. 🚀
# XIP-Telecom
# XIP-Telecom
