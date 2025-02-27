# Ici, on définit un modèle de données personnalisé pour Odoo
# La classe correspond à une table dans la bdd (champs, type de données)...

from odoo import models, fields

class Audit(models.Model):
    _name = 'audit_it.audit'  # Nom technique du modèle
    _description = 'Audit IT'
    _rec_name = 'raison_sociale'

    # ajout d'un champ issu du module contact pour pouvoir sélectionner une personne présente dans la liste des contacts sur l'audit
    contact_individual_id = fields.Many2one(
        "res.partner", 
        string="Contact",
        domain="[('is_company', '=', False)]"
        )
    
    name = fields.Char(string="Nom")
    description = fields.Text(string="Description")
    active = fields.Boolean(string="Actif", default=True)
    version = fields.Char(string="Version")     


# Onglet Identité
##################
    contact_prospection_physique = fields.Boolean(string="Prospection physique", default=False)
    contact_phoning = fields.Boolean(string="Phoning", default=False)
    contact_rdv_perso = fields.Boolean(string="Rendez-vous personnel", default=False)
    contact_rdv_callcenter = fields.Boolean(string="Rendez-vous call center", default=False)
    contact_autre = fields.Char(string="Autre")
    raison_sociale = fields.Char(string="Raison Sociale *", required=True)
    adresse = fields.Char(string="Adresse")
    cp = fields.Char(string="Code Postal")
    ville = fields.Char(string="Ville")
    telephone = fields.Char(string="Téléphone")
    telecopie = fields.Char(string="Télécopie")
    email = fields.Char(string="Adresse email")
    site_web = fields.Char(string="Site internet")
    effectif = fields.Char(string="Effectif")
    eff_1_9 = fields.Boolean(string="1 à 9", default=False)
    eff_10_24 = fields.Boolean(string="10 à 24", default=False)
    eff_25_49 = fields.Boolean(string="25 à 49", default=False)
    eff_50_99 = fields.Boolean(string="50 à 99", default=False)
    eff_100_500 = fields.Boolean(string="100 à 500", default=False)   
    nom_contact = fields.Char(string="Nom du contact")
    fonction = fields.Char(string="Fonction")
    telephone_contact = fields.Char(string="Téléphone (ligne directe)")
    email_contact = fields.Char(string="Adresse email")


# Onglet Téléphone
##################

# Infrastructure télécom
    is_install_telephonique = fields.Boolean(string="Avez-vous une installation téléphonique", default=False)
    inst_tel_pabx = fields.Boolean(string="PABX", default=False)
    inst_tel_ipbx = fields.Boolean(string="IPBX", default=False)
    inst_tel_centrex = fields.Boolean(string="CENTREX", default=False)
    is_telecom_prop = fields.Boolean(string="Etes-vous propriétaire de votre installation", default=False)
    is_telecom_loc = fields.Boolean(string="Etes-vous locataire de votre installation", default=False)
    loc_telecom_depuis = fields.Char(string="Si locataire, depuis quand")    
    loc_telecom_duree = fields.Char(string="Quelle est la durée de votre contrat de location")
    loc_telecom_marque = fields.Char(string="Quelle est la marque / le modèle de votre installation")
    loc_telecom_mensualite = fields.Char(string="Quel est le montant de vos mensualités")
    loc_telecom_installateur = fields.Char(string="Quel est le nom de votre installateur")
    nb_poste = fields.Char(string="Combien de postes téléphoniques (fax inclus) avez-vous")    
    nb_poste_analogique = fields.Char(string="Analogiques")
    nb_poste_numerique = fields.Char(string="Numériques")
    nb_poste_ip = fields.Char(string="IP")
    nb_poste_fax = fields.Char(string="FAX")
    obj_remplacer_inst_tel = fields.Boolean(string="Remplacer votre installation téléphonique (standard + postes)", default=False)
    obj_remplacer_standard_tel = fields.Boolean(string="Remplacer votre standard téléphonique en conservant vos postes", default=False)
    obj_ajouter_standard = fields.Boolean(string="Mettre en place un contrat de maintenance pour votre installation actuelle", default=False)
    obj_cablage = fields.Boolean(string="Faut-il prévoir le câblage de vos locaux", default=False)

# Téléphonie fixe et abonnements
    operateur_nb_abonnement = fields.Char(string="Opérateur (Abonnements)")
    operateur_cout_conso = fields.Char(string="Opérateur (Consommations)")
    cout_minute_local = fields.Char(string="Local :")
    cout_minute_national = fields.Char(string="National :")
    cout_minute_mobile = fields.Char(string="Mobile :")
    cout_minute_international = fields.Char(string="International :")
    is_forfait_local = fields.Boolean(string="Local", default=False)
    is_forfait_national = fields.Boolean(string="National", default=False)
    is_forfait_mobile = fields.Boolean(string="Mobile", default=False)
    duree_forfait_local = fields.Char(string="Durée :")
    duree_forfait_national = fields.Char(string="Durée :")
    duree_forfait_mobile = fields.Char(string="Durée :")
    montant_forfait_local = fields.Char(string="Montant :")
    montant_forfait_national = fields.Char(string="Montant :")
    montant_forfait_mobile = fields.Char(string="Montant :")        

# Téléphonie mobile
    is_telephonie_mobile = fields.Boolean(string="Téléphonie mobile", default=False)
    is_flotte_mobile = fields.Boolean(string="Flotte", default=False)
    operateur_sfr = fields.Boolean(string="SFR", default=False)
    operateur_orange = fields.Boolean(string="ORANGE", default=False)
    operateur_bouygues = fields.Boolean(string="BOUYGUES", default=False)
    operateur_free = fields.Boolean(string="FREE", default=False)
    operateur_coriolis = fields.Boolean(string="CORIOLIS", default=False)
    operateur_credit_mutuel = fields.Boolean(string="CREDIT MUTUEL", default=False)
    operateur_autre = fields.Char(string="AUTRE")
    nb_lignes_mobiles = fields.Char(string="Nombre de lignes :")
    echeance_contrat_mobile = fields.Char(string="Echéance (date de fin de contrat)")
    nb_go_data_par_ligne = fields.Char(string="Forfait DATA par ligne mobile en GO :")


# Onglet Internet
##################

# Internet
    is_internet = fields.Boolean(string="Internet", default=False)
    mono_site = fields.Boolean(string="Mono site", default=False)
    multi_sites = fields.Boolean(string="Multi sites", default=False)
    is_projet_internet = fields.Boolean(string="Projet", default=False)
    lien_internet_adsl = fields.Boolean(string="ADSL", default=False)
    lien_internet_vdsl = fields.Boolean(string="VDSL", default=False) 
    lien_internet_sdsl = fields.Boolean(string="SDSL", default=False) 
    lien_internet_ftto = fields.Boolean(string="FTTO", default=False) 
    lien_internet_ftth = fields.Boolean(string="FTTH", default=False) 
    lien_internet_fttb = fields.Boolean(string="FTTB", default=False) 
    lien_internet_ls = fields.Boolean(string="LS", default=False) 
    lien_internet_numeris = fields.Boolean(string="NUMERIS", default=False) 
    lien_internet_rtc = fields.Boolean(string="RTC", default=False) 
    lien_internet_blr = fields.Boolean(string="BLR", default=False)
    fournisseur_internet = fields.Char(string="Fournisseur :")
    is_backup_liens_internet = fields.Boolean(string="Backup des liens", default=False)
    type_liens_internet = fields.Char(string="Type de liens :")
    is_wifi = fields.Boolean(string="WIFI", default=False)
    wifi_ouvert_avec_securite = fields.Boolean(string="Ouvert avec sécurité", default=False)
    wifi_ouvert_sans_securite = fields.Boolean(string="Ouvert sans sécurité", default=False)

# VPN
    is_vpn = fields.Boolean(string="VPN", default=False)
    is_interet_vpn = fields.Boolean(string="Intéressé", default=False)
    fournisseur_vpn = fields.Char(string="Fournisseur :")
    solution_vpn_mpls = fields.Boolean(string="MPLS", default=False)
    solution_vpn_ipsec = fields.Boolean(string="IP sec", default=False) 
    solution_vpn_ssl = fields.Boolean(string="SSL", default=False)
    lien_vpn_adsl = fields.Boolean(string="ADSL", default=False)
    lien_vpn_vdsl = fields.Boolean(string="VDSL", default=False) 
    lien_vpn_sdsl = fields.Boolean(string="SDSL", default=False) 
    lien_vpn_ftto = fields.Boolean(string="FTTO", default=False) 
    lien_vpn_ftth = fields.Boolean(string="FTTH", default=False) 
    lien_vpn_fttb = fields.Boolean(string="FTTB", default=False) 
    lien_vpn_ls = fields.Boolean(string="LS", default=False) 
    lien_vpn_numeris = fields.Boolean(string="NUMERIS", default=False) 
    lien_vpn_rtc = fields.Boolean(string="RTC", default=False) 
    lien_vpn_blr = fields.Boolean(string="BLR", default=False)
    is_backup_liens_vpn = fields.Boolean(string="Backup des liens", default=False)
    nb_liens_vpn = fields.Char(string="Combien de liens :")
    qos = fields.Char(string="Qos :")
    nb_classes_services = fields.Char(string="Combien de classes de services :")    
    gestion_firewall = fields.Char(string="Gestion du Firewall :")
    sortie_internet_coeur_reseau = fields.Char(string="Sortie Internet en coeur de réseau :")
    debit_vpn = fields.Char(string="Débit :")
    collecte_ip_sec_postes_nomades = fields.Boolean(string="Collecte IP sec depuis des postes nomades", default=False)     
                    
# Messagerie collaborative
    is_messagerie_collab = fields.Boolean(string="Messagerie collaborative", default=False)
    is_interet_msg_collab = fields.Boolean(string="Intéressé", default=False)
    type_msg_mx = fields.Boolean(string="MX", default=False)
    type_msg_zimbra = fields.Boolean(string="ZIMBRA", default=False)
    type_msg_lotus = fields.Boolean(string="LOTUS", default=False)
    type_msg_autre = fields.Char(string="Autre")             
    mode_msg_interne = fields.Boolean(string="Interne", default=False)
    mode_msg_saas = fields.Boolean(string="SAAS", default=False)
    msg_saas_budget = fields.Char(string="Budget annuel :") 
    nb_bal = fields.Char(string="Nombre de BAL :") 
    fournisseur_msg_collab = fields.Char(string="Fournisseur :") 
    msg_collab_ssii = fields.Char(string="SSII :")   
    msg_collab_partage = fields.Boolean(string="Partage", default=False)  
    type_msg_utilisation_mail = fields.Boolean(string="Mail", default=False)    
    type_msg_utilisation_contact = fields.Boolean(string="Contact", default=False)   
    type_msg_utilisation_agenda = fields.Boolean(string="Agenda", default=False)
    type_msg_utilisation_document = fields.Boolean(string="Document", default=False) 
    type_msg_utilisation_autre = fields.Char(string="Autre")                                        

# Site web
    is_site_web = fields.Boolean(string="Site web", default=False)
    is_interet_site_web = fields.Boolean(string="Intéressé", default=False)
    mode_site_web_interne = fields.Boolean(string="Interne", default=False)
    mode_site_web_agence = fields.Boolean(string="Agence web", default=False)
    site_web_nom_agence = fields.Char(string="Nom de l'agence :")
    is_intranet = fields.Boolean(string="Intranet", default=False)
    is_interet_intranet = fields.Boolean(string="Intéressé", default=False)
    mep_intranet_date = fields.Char(string="Quand :")
    is_extranet = fields.Boolean(string="Extranet", default=False)
    is_interet_extranet = fields.Boolean(string="Intéressé", default=False)
    mep_extranet_date = fields.Char(string="Quand :")


# Onglet Infra
##################

# Sauvegarde
    is_sauvegarde = fields.Boolean(string="Sauvegarde", default=False)
    is_interet_sauvegarde = fields.Boolean(string="Intéressé", default=False)
    is_sauvegarde_pra = fields.Boolean(string="PRA", default=False)
    is_interet_sauvegarde_pra = fields.Boolean(string="Intéressé", default=False)
    mep_sauvegarde_pra_date = fields.Char(string="Quand :")
    is_sauvegarde_pca = fields.Boolean(string="PCA", default=False)
    is_interet_sauvegarde_pca = fields.Boolean(string="Intéressé", default=False)
    mep_sauvegarde_pca_date = fields.Char(string="Quand :")
    sauvegarde_budget_annuel = fields.Char(string="Budget annuel :")
    sauvegarde_solution_actuelle = fields.Char(string="Solution de sauvegarde en place :")

# Parc informatique           
    parc_informatique_fournisseurs = fields.Char(string="Fournisseurs :")
    parc_informatique_marques = fields.Char(string="Marques :")
    is_parc_inf_prop = fields.Boolean(string="Etes-vous propriétaire :", default=False)
    is_parc_inf_loc = fields.Boolean(string="Etes-vous locataire :", default=False)
    loc_parc_inf_depuis = fields.Char(string="Si locataire, depuis quand")    
    loc_parc_inf_duree = fields.Char(string="Quelle est la durée de votre contrat de location")
    loc_parc_inf_mensualite = fields.Char(string="Quel est le montant de vos mensualités")
    loc_parc_inf_ssii = fields.Char(string="Quel est le nom de votre SSII") 
    is_virtualisation = fields.Boolean(string="Virtualisation", default=False)
    is_anti_virus = fields.Boolean(string="Anti-virus", default=False)
    is_interet_mep_parc_info = fields.Boolean(string="Intéressé par une mise en place de :", default=False)
    mep_desktop_pc = fields.Char(string="Desktop PC")  
    mep_desktop_mac = fields.Char(string="Desktop MAC") 
    mep_portable_pc = fields.Char(string="Portable PC")                   
    mep_portable_mac = fields.Char(string="Portable MAC") 
    mep_tablette = fields.Char(string="Tablette") 
    mep_serveur = fields.Char(string="Serveur") 
    mep_clients_legers = fields.Char(string="Clients légers")  


# Onglet Vidéo
##################

# Vidéo surveillance
    is_video_surveillance = fields.Boolean(string="Vidéo surveillance", default=False)
    is_interet_video_surveillance = fields.Boolean(string="Intéressé", default=False)    
    fournisseur_video_surveillance = fields.Char(string="Fournisseur :") 
    nb_sites_video_surveillance = fields.Char(string="Nombre de sites :")                           
    video_surveillance_ip = fields.Boolean(string="IP", default=False)  
    video_surveillance_autre = fields.Char(string="Autre")         
    video_surveillance_type_camera = fields.Char(string="Type de caméras :")     
    video_surveillance_nb_camera = fields.Char(string="Nombre de caméras :")   
    video_surveillance_evolution = fields.Boolean(string="Evolution", default=False)         
    video_surveillance_evolution_volume = fields.Char(string="Volumes :")     
    video_surveillance_evolution_date = fields.Char(string="Date de mise en place :")

# Visio conférence      
    is_visio_conference = fields.Boolean(string="Visio conférence", default=False)
    is_interet_visio_conference = fields.Boolean(string="Intéressé", default=False)    
    fournisseur_visio_conference = fields.Char(string="Fournisseur :") 
    nb_sites_visio_conference = fields.Char(string="Nombre de sites :")                           
    visio_conference_ip = fields.Boolean(string="IP", default=False)  
    visio_conference_numeris = fields.Boolean(string="Numéris", default=False)      
    visio_conference_ecrans_plasma = fields.Boolean(string="Plasma", default=False)   
    visio_conference_ecrans_lcd = fields.Boolean(string="LCD", default=False) 
    visio_conference_ecrans_video_proj = fields.Boolean(string="Vidéo projecteur", default=False)   
    visio_conference_partage_documents = fields.Boolean(string="Partage de documents", default=False)      

# Affichage dynamique      
    is_affichage_dynamique = fields.Boolean(string="Affichage dynamique", default=False)
    is_interet_affichage_dynamique = fields.Boolean(string="Intéressé", default=False)    
    fournisseur_affichage_dynamique = fields.Char(string="Fournisseur :") 
    nb_sites_affichage_dynamique = fields.Char(string="Nombre de sites :")                           
    affichage_dynamique_ip = fields.Boolean(string="IP", default=False)  
    affichage_dynamique_autre = fields.Char(string="Autre")          
    affichage_dynamique_ecrans_plasma = fields.Boolean(string="Plasma", default=False)   
    affichage_dynamique_ecrans_lcd = fields.Boolean(string="LCD", default=False) 
    affichage_dynamique_ecrans_video = fields.Boolean(string="Vidéo", default=False)   


# Actions / Schémas / Notes
###########################

    notes_complementaires = fields.Text(string="notes complémentaires")


#######################################################################################
#######################################################################################

#                           FIN DE LA CLASSE AUDIT

#######################################################################################
#######################################################################################




###### ajout d'un champ manquant dans le module de base
class IrModuleModule(models.Model):
    _inherit = 'ir.module.module'

    version = fields.Char(string="Version")     


###### ajout d'un champ "Audit" dans le modèle res.partner pour afficher l'audit sur une fiche contact
class ResPartner(models.Model)    :
    _inherit = 'res.partner'

    audit_id = fields.Many2one(
        'audit_it.audit',
        string="Audit",
        help="Audit lié à ce contact"
         )

