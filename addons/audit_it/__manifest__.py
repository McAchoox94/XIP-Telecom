# Ce fichier définit les métadonnées du module audit_it :
# son nom, sa version, ses dépendances, ses fichiers à charger
# Grâce à ce fichier, Odoo peut reconnaître et installer le module correctement

{
    'name': 'Audit projet IT',
    'version': '1.0',
    'category': 'Custom',
    'summary': 'Un module Odoo pour réaliser des audits telecom',
    'description': 'Ce module permet de réaliser un audit pour un client ou un prospect, pour l\'ensemble de son projet IT.',
    'author': 'UHA4.0',
    'website': 'https://mon-site.com',
    'depends': ['base', 'contacts', 'crm'],  # Dépend du module de base
    'data': [
       #'views/res_partner_view.xml',
        'security/ir.model.access.csv',
        'views/mon_model_views.xml',
        'views/module_info.xml',
        'report/audit_report.xml',
        'report/audit_template.xml'
    ],
    'installable': True,
    'auto_install': False,
    'application': True,
}

