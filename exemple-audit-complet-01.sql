--
-- PostgreSQL database dump
--

-- Dumped from database version 15.10 (Debian 15.10-1.pgdg120+1)
-- Dumped by pg_dump version 15.10

-- Started on 2025-02-12 17:31:56 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4359 (class 0 OID 23881)
-- Dependencies: 686
-- Data for Name: audit_it_audit; Type: TABLE DATA; Schema: public; Owner: odoo_user
--

COPY public.audit_it_audit (id, contact_individual_id, create_uid, write_uid, name, version, contact_autre, raison_sociale, adresse, cp, ville, telephone, telecopie, email, site_web, effectif, nom_contact, fonction, telephone_contact, email_contact, loc_telecom_depuis, loc_telecom_duree, loc_telecom_marque, loc_telecom_mensualite, loc_telecom_installateur, nb_poste, nb_poste_analogique, nb_poste_numerique, nb_poste_ip, nb_poste_fax, operateur_nb_abonnement, operateur_cout_conso, cout_minute_local, cout_minute_national, cout_minute_mobile, cout_minute_international, duree_forfait_local, duree_forfait_national, duree_forfait_mobile, montant_forfait_local, montant_forfait_national, montant_forfait_mobile, operateur_autre, nb_lignes_mobiles, echeance_contrat_mobile, nb_go_data_par_ligne, fournisseur_internet, type_liens_internet, fournisseur_vpn, nb_liens_vpn, qos, nb_classes_services, gestion_firewall, sortie_internet_coeur_reseau, debit_vpn, type_msg_autre, msg_saas_budget, nb_bal, fournisseur_msg_collab, msg_collab_ssii, type_msg_utilisation_autre, site_web_nom_agence, mep_intranet_date, mep_extranet_date, mep_sauvegarde_pra_date, mep_sauvegarde_pca_date, sauvegarde_budget_annuel, sauvegarde_solution_actuelle, parc_informatique_fournisseurs, parc_informatique_marques, loc_parc_inf_depuis, loc_parc_inf_duree, loc_parc_inf_mensualite, loc_parc_inf_ssii, mep_desktop_pc, mep_desktop_mac, mep_portable_pc, mep_portable_mac, mep_tablette, mep_serveur, mep_clients_legers, fournisseur_video_surveillance, nb_sites_video_surveillance, video_surveillance_autre, video_surveillance_type_camera, video_surveillance_nb_camera, video_surveillance_evolution_volume, video_surveillance_evolution_date, fournisseur_visio_conference, nb_sites_visio_conference, fournisseur_affichage_dynamique, nb_sites_affichage_dynamique, affichage_dynamique_autre, description, notes_complementaires, active, contact_prospection_physique, contact_phoning, contact_rdv_perso, contact_rdv_callcenter, eff_1_9, eff_10_24, eff_25_49, eff_50_99, eff_100_500, is_install_telephonique, inst_tel_pabx, inst_tel_ipbx, inst_tel_centrex, is_telecom_prop, is_telecom_loc, obj_remplacer_inst_tel, obj_remplacer_standard_tel, obj_ajouter_standard, obj_cablage, is_forfait_local, is_forfait_national, is_forfait_mobile, is_telephonie_mobile, is_flotte_mobile, operateur_sfr, operateur_orange, operateur_bouygues, operateur_free, operateur_coriolis, operateur_credit_mutuel, is_internet, mono_site, multi_sites, is_projet_internet, lien_internet_adsl, lien_internet_vdsl, lien_internet_sdsl, lien_internet_ftto, lien_internet_ftth, lien_internet_fttb, lien_internet_ls, lien_internet_numeris, lien_internet_rtc, lien_internet_blr, is_backup_liens_internet, is_wifi, wifi_ouvert_avec_securite, wifi_ouvert_sans_securite, is_vpn, is_interet_vpn, solution_vpn_mpls, solution_vpn_ipsec, solution_vpn_ssl, lien_vpn_adsl, lien_vpn_vdsl, lien_vpn_sdsl, lien_vpn_ftto, lien_vpn_ftth, lien_vpn_fttb, lien_vpn_ls, lien_vpn_numeris, lien_vpn_rtc, lien_vpn_blr, is_backup_liens_vpn, collecte_ip_sec_postes_nomades, is_messagerie_collab, is_interet_msg_collab, type_msg_mx, type_msg_zimbra, type_msg_lotus, mode_msg_interne, mode_msg_saas, msg_collab_partage, type_msg_utilisation_mail, type_msg_utilisation_contact, type_msg_utilisation_agenda, type_msg_utilisation_document, is_site_web, is_interet_site_web, mode_site_web_interne, mode_site_web_agence, is_intranet, is_interet_intranet, is_extranet, is_interet_extranet, is_sauvegarde, is_interet_sauvegarde, is_sauvegarde_pra, is_interet_sauvegarde_pra, is_sauvegarde_pca, is_interet_sauvegarde_pca, is_parc_inf_prop, is_parc_inf_loc, is_virtualisation, is_anti_virus, is_interet_mep_parc_info, is_video_surveillance, is_interet_video_surveillance, video_surveillance_ip, video_surveillance_evolution, is_visio_conference, is_interet_visio_conference, visio_conference_ip, visio_conference_numeris, visio_conference_ecrans_plasma, visio_conference_ecrans_lcd, visio_conference_ecrans_video_proj, visio_conference_partage_documents, is_affichage_dynamique, is_interet_affichage_dynamique, affichage_dynamique_ip, affichage_dynamique_ecrans_plasma, affichage_dynamique_ecrans_lcd, affichage_dynamique_ecrans_video, create_date, write_date) FROM stdin;
1	\N	2	2	\N	\N	\N	Raison Sociale	Adresse	Code Postal	Ville	0122365478	2366587422	email@email.com	siteweb.com	\N	Nom Contact	Fonction	0422998853	email@contact.com	02/03/6532	4 ans	ma marque	333€	Installateur	63	1	77	4	5	Abonnements	3621	0.63€	0.98€	0.96€	1.65€	2 ans	2 ans	2 ans	25€/mois	35€/mois	42€/mois	\N	652	16/07/2985	652	Fournisseur	TypeLiens	Fournisseur	514	priorisation des paquets	63	Firewall	6 nœuds cœur de réseau	10 Gbps	\N	2136€	544	Fournisseur	\N	Autre	AgenceWeb	02/09/9624	31/01/6325	22/04/3256	01/02/6587	6325€	MaSolution	Fournisseurs	Marques	01/01/3651	2 ans	632€	NomSSII	4	52	4	882	54	4	7	Fournisseur	51	\N	camérasexemple	44	36	27/02/1236	Fournisseur	63	Fournisseur	36	\N	\N	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	t	f	f	f	f	t	f	f	f	f	t	f	f	t	f	t	t	t	f	f	t	t	t	t	t	f	f	f	f	t	f	t	f	t	t	f	f	t	f	f	f	f	f	f	f	t	t	t	f	t	t	f	f	t	f	f	t	f	f	f	f	f	f	f	t	t	f	t	f	t	f	f	t	t	t	t	t	f	f	t	f	t	f	t	f	t	t	t	t	t	t	t	f	t	t	t	t	t	t	t	t	f	t	t	t	t	f	t	t	t	t	t	t	t	f	2025-02-12 15:58:45.028356	2025-02-12 17:29:56.711832
\.


--
-- TOC entry 4578 (class 0 OID 0)
-- Dependencies: 685
-- Name: audit_it_audit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: odoo_user
--

SELECT pg_catalog.setval('public.audit_it_audit_id_seq', 1, true);


-- Completed on 2025-02-12 17:31:56 UTC

--
-- PostgreSQL database dump complete
--

