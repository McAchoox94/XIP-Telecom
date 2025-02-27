"use client";

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>À propos de XIP Telecom</title>
        <meta name="description" content="XIP Telecom - Conseils et courtage en télécommunications" />
      </Head>

      {/* Bande de titre principal */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>À propos de XIP Telecom</h1>
          <p>Votre partenaire stratégique en télécommunications</p>
          <a href="/contact" className="audit-button hero-button">Demander un audit</a>
        </div>
      </section>

      {/* Contenu "Notre Histoire" */}
      <section id="about" className="content-section">
        <div className="container">
          <h2>Notre Histoire</h2>
          <div className="grid">
            <div className="text">
              <p>
                Chez XIP TELECOM, notre aventure a débuté avec une mission claire : simplifier et optimiser les solutions télécom pour les entreprises françaises. Fondée à Colmar, au cœur de l’Alsace, notre entreprise est née de la volonté d’unir expertise technique et indépendance pour offrir des solutions innovantes dans un secteur en constante évolution.
              </p>
              <p>
                Dès nos débuts, nous avons bâti des partenariats solides avec les principaux opérateurs et fournisseurs de services télécom, tout en conservant une indépendance totale dans nos recommandations. Cette approche nous permet de toujours prioriser les besoins de nos clients.
              </p>
              <p>
                Au fil des années, nous avons accompagné des centaines de PME, ETI, et grands comptes dans la modernisation de leurs infrastructures télécom et IT. Notre engagement envers l’excellence nous a permis de devenir une référence incontournable, non seulement en Alsace, mais également sur tout le territoire national.
              </p>
              <p>
                Avec une équipe passionnée et experte, nous continuons d&apos;innover pour anticiper les évolutions technologiques et proposer des solutions sur-mesure à nos clients. Notre histoire, c’est aussi celle de nos clients et partenaires, qui nous inspirent chaque jour à aller plus loin pour transformer leurs défis en opportunités.
              </p>
            </div>
          </div>
          <div id="strategy"></div>
        </div>
      </section>

      {/* Contenu "Notre stratégie pour nos clients" */}
      <section id="services" className="content-section light-bg">
        <div className="container">
          <h2>Notre stratégie pour nos clients</h2>
          <div className="grid">
            <div className="text">
              <p>
                Une fois que nous décidons de nous associer avec vous, un premier audit sera réalisé afin d’analyser les axes d’améliorations qui peuvent être possibles au niveau de votre connexion internet, de votre téléphonie fixe et mobile.
              </p>
              <p>
                Ces solutions peuvent varier en fonction de la zone dans laquelle vous vous trouvez. Par exemple, la technologie que nous utilisons ou qui nous permet de vous connecter sera adaptée à celles auxquelles vous êtes éligible.
              </p>
              <p>
                Une fois que cet audit est réalisé, nous vous faisons part des axes d’améliorations et nous vous conseillons sur les meilleures solutions que vous devriez adapter selon votre besoin.
              </p>
              <p>
                En général, les solutions peuvent se décomposer en 3 grands axes qui vont être la fibre, la téléphonie fixe liée et mutualisée, la téléphonie mobile ainsi que les autres solutions de téléphonie fixe. Nous utilisons plusieurs opérateurs d’infrastructure et nous travaillons avec plusieurs opérateurs de services, selon votre besoin.
              </p>
            </div>
          </div>
          <div id="pourquoi-nous"></div>
        </div>
      </section>

      {/* Contenu "Pourquoi nous ?" */}
      <section id="why-us" className="content-section">
        <div className="container">
          <h2>Pourquoi nous ?</h2>
          <div className="grid">
            <div className="text">
              <p>
                Face à vos besoins télécoms, la multiplicité des offres vous amène plus de questions que de réponses ?
              </p>
              <p>
                En effet, il est difficile pour le profane de faire le tri dans le jargon technologique : PABX, voix sur IP (VoIP), téléphonie sur IP (ToIP), IPBX, Centrex, Trunk SIP, etc.
              </p>
              <p>
                Le nombre important des acteurs et des offres ainsi que les discours marketing des uns et des autres sont autant d’autres raisons de s’y perdre.
              </p>
              <p>
                Notre prestation d’audit et de courtage télécom peuvent vous aider à y voir plus clair !
              </p>
            </div>
          </div>

          {/* Sous-sections E-courtage et Audit */}
          <div className="sub-sections">
            <div className="sub-section">
              <h3>E-courtage</h3>
              <p>
                Un e-courtier est un courtier utilisant le canal internet comme moyen de communication (principal).
              </p>
              <p>
                Indépendant, il (ou la société de courtage) conseille et oriente ses clients vers l’offre, le produit ou le service qui lui convient le mieux, en comparant et en négociant pour compte du client auprès de plusieurs partenaires selon le domaine d’activité.
              </p>
              <p>
                Dans notre cas nous avons un panel de partenaires afin d’obtenir toujours le meilleur ROI.
              </p>
            </div>

            <div className="sub-section">
              <h3>Audit</h3>
              <p>
                L’audit télécommunication & réseau est aujourd’hui un « must » des services d’audit. En effet, les auditeurs ne peuvent plus faire l’impasse sur une technologie qui s’est considérablement développée dans les entreprises et qui représente des risques importants à tous points de vue.
              </p>
              <p>
                Cet audit est devenu indispensable et doit donner lieu à des missions répétitives car, au vu des technologies en perpétuelle croissance, l’informatique est devenue un outil obligatoire permettant une croissance et une fiabilité pour les entreprises désireuses de poursuivre leur activité.
              </p>
              <ul>
                <li>Les télécoms sont devenus un critère important de la compétitivité des PME.</li>
                <li>Les télécoms arrivent dans le TOP 5 des frais généraux des entreprises.</li>
                <li>Les télécoms sont devenus un élément de la rémunération des salariés.</li>
                <li>Les télécoms sont devenus une matière complexe à gérer pour l’entreprise seule.</li>
                <li>Les entreprises sont lassées de voir défiler les vendeurs des opérateurs chacun à leur tour avec chacun leurs arguments de vente.</li>
              </ul>
              <p>
                Dans le cadre de nos audits, et afin de vous accompagner pour créer et faire évoluer vos infrastructures et services télécom et maîtriser vos coûts, nous vous proposons des prestations d’Assistance dans trois domaines de compétences :
              </p>
              <ul>
                <li>Les études stratégiques</li>
                <li>Les études opérationnelles</li>
                <li>Les études financières</li>
              </ul>
            </div>
          </div>
          <div id="approach"></div>
        </div>
      </section>

      {/* Contenu "Notre approche" */}
      <section className="content-section light-bg">
        <div className="container">
          <h2>Notre approche</h2>
          <div className="flex">
            <div className="text">
              <p>
                Pour satisfaire pleinement nos clients, nous avons adopté une identité et une approche profondément
                inspirées par les valeurs fondamentales du judo, dont la première est &quot;la voie de la
                souplesse&quot;. Cette philosophie guide notre manière de penser et d’agir : rester flexibles, ouverts,
                et toujours prêts à nous adapter.
              </p>
              <p>
                Cette approche est directement en lien avec notre ADN et nos engagements :
              </p>
              <ul className="values-list">
                <li><strong>Écoute et Transparence :</strong> Nous remettons constamment en question nos idées et
                  solutions pour garantir qu’elles répondent parfaitement aux besoins spécifiques de nos clients.
                </li>
                <li><strong>Courage et Réactivité :</strong> Comme dans le judo, nous affrontons chaque défi avec
                  dynamisme et détermination, en proposant des réponses rapides et pertinentes.
                </li>
                <li><strong>Respect et Constance :</strong> Notre engagement sur le long terme nous pousse à rester
                  vigilants et proactifs pour anticiper les évolutions de vos besoins et du marché.
                </li>
              </ul>
              <p>
                À chaque instant de la journée, nous appliquons ces principes en cultivant une approche agile et
                personnalisée. Grâce à notre indépendance et notre liberté d’action, nous vous offrons des solutions sur
                mesure, totalement alignées avec votre environnement.
              </p>
              <p>
                Chez XIP TELECOM, la souplesse n’est pas qu’une valeur : c’est notre manière de bâtir un partenariat
                solide et durable.
              </p>
            </div>
          </div>
          <div id="ADN"></div>
        </div>
      </section>

      {/* Contenu "Notre ADN" */}
      <section className="content-section">
        <div className="container">
          <h2>Notre ADN</h2>
          <p>Courtier en télécommunications avec un engagement d’excellence, de respect et d’adaptabilité.</p>

          <div className="grid">
            <div className="adn-card">
              <h3>Politesse (Rei) : Le respect avant tout</h3>
              <p>
                Chez XIP TELECOM, nous valorisons le respect mutuel entre nos clients, partenaires et collaborateurs.
                Chaque interaction est guidée par l’écoute, la considération et la bienveillance. Nous croyons que la
                politesse est le socle des relations de confiance.
              </p>
            </div>

            <div className="adn-card">
              <h3>Courage (Yuuki) : Oser relever les défis</h3>
              <p>
                Dans un secteur en constante évolution, nous avons le courage de proposer des solutions innovantes, de
                sortir des sentiers battus et de négocier pour obtenir les meilleures offres.
              </p>
              <p>
                Nous n’avons pas peur d’affronter les complexités du marché pour protéger les intérêts de nos clients.
              </p>
            </div>

            <div className="adn-card">
              <h3>Sincérité (Makoto) : Transparence et honnêteté</h3>
              <p>
                Nous plaçons l’honnêteté au cœur de nos actions. Nos clients méritent une information claire et des
                conseils impartiaux. XIP TELECOM s’engage à toujours proposer des solutions qui répondent véritablement
                aux besoins des entreprises.
              </p>
            </div>

            <div className="adn-card">
              <h3>Contrôle de soi (Jisei) : L’équilibre dans nos actions</h3>
              <p>
                En tant que courtier, nous restons neutres et maîtrisons nos émotions pour toujours fournir des
                recommandations professionnelles et objectives. L’équilibre entre écoute et action est essentiel dans
                toutes nos démarches.
              </p>
            </div>

            <div className="adn-card">
              <h3>Honneur (Meiyo) : Respecter nos engagements</h3>
              <p>
                Nous faisons preuve d’un professionnalisme irréprochable en tenant nos promesses envers nos clients et
                partenaires. L’honneur guide notre travail pour représenter la fiabilité et la crédibilité dans le
                secteur des télécommunications.
              </p>
            </div>

            <div className="adn-card">
              <h3>Modestie (Kenkyo) : Apprendre chaque jour</h3>
              <p>
                Nous reconnaissons que le marché des télécommunications évolue rapidement. Chez XIP TELECOM, nous
                apprenons constamment pour rester à jour et continuer à offrir des solutions pertinentes. La modestie
                nous pousse à écouter avant de proposer.
              </p>
            </div>

            <div className="adn-card">
              <h3>Amitié (Yuujou) : Créer des relations durables</h3>
              <p>
                Nous croyons en l’importance de relations de qualité avec nos clients et partenaires. Notre approche
                collaborative est fondée sur l’entraide, le partage et la recherche de bénéfices mutuels.
              </p>
            </div>

            <div className="adn-card">
              <h3>Respect de l’environnement</h3>
              <p>
                Dans une démarche responsable, nous nous engageons à réduire notre empreinte écologique et à promouvoir
                des solutions télécom durables et économes en énergie.
              </p>
            </div>
            <div id="engagements"></div>
          </div>
        </div>
      </section>

      {/* Contenu "Nos engagements" */}
      <section className="content-section light-bg">
        <div className="container">
          <h2>Nos engagements</h2>
          <div className="encadre-economies">
            <h3>LES ÉCONOMIES : Réduire vos coûts, optimiser vos performances</h3>
            <p>
              Le marché des télécoms évolue rapidement, et depuis 2013, les tarifs ont significativement baissé. Nous nous engageons à vous aider à réaliser des économies tangibles, allant de <span className="highlight">5 à 40%</span>, grâce à une analyse approfondie de vos factures actuelles et une mise à jour régulière de vos contrats.
            </p>
            <p>
              Au-delà des économies financières, nous visons également à améliorer votre productivité en modernisant vos outils de télécommunication : débit internet, matériel téléphonique et smartphones.
            </p>
            <p>
              Notre mission : toujours améliorer votre situation existante.
            </p>
          </div>

          <h3>XIP TELECOM : L’écoute, la maîtrise et l’engagement au service de vos ambitions</h3>
          <p>
            Nous sommes bien plus qu’un courtier en télécommunications. Nous sommes votre partenaire stratégique, dédié à optimiser vos coûts, à simplifier vos choix et à vous accompagner dans vos projets.
          </p>
          <p>
            Faites le choix de l’excellence avec XIP TELECOM.
          </p>
        </div>
      </section>

      {/* Footer avec bouton "Demander un audit" */}
      <footer id="contact">
        <div className="container">
          <a href="/contact" className="audit-button">Demander un audit</a>
          <p></p>
        </div>
      </footer>

      {/* Styles CSS */}
      <style jsx>{`
        /* Reset des marges et des paddings */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Styles globaux */
        body {
          font-family: 'Roboto', Arial, sans-serif;
          background-color: #F5F5F5;
          color: #333333; /* Couleur de texte par défaut */
          line-height: 1.6;
        }

        h1, h2, h3 {
          margin-bottom: 50px;
          font-family: 'Open Sans', sans-serif;
        }

        h1 {
          font-size: 2.5em;
          font-weight: 700;
        }

        h2 {
          font-size: 2em;
          color: #2B3674;
        }

        h3 {
          font-size: 1.5em;
          color: #2B3674;
        }

        p {
          margin-bottom: 15px;
          color: inherit; /* Hérite de la couleur définie par le conteneur */
        }

        ul {
          margin-left: 20px;
          margin-bottom: 15px;
          list-style-type: disc;
          color: inherit; /* Hérite de la couleur définie par le conteneur */
        }

        a {
          text-decoration: none;
          color: #FFFFFF;
        }

        .audit-button {
          background-color: #FF7F32;
          color: #FFFFFF;
          padding: 10px 25px;
          border-radius: 30px;
          font-weight: 600;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .audit-button:hover {
          background-color: #e06b29;
          transform: translateY(-2px);
        }

        /* Bande de titre principal (Hero Section) */
        .hero-section {
          padding: 160px 20px 60px 20px; /* Ajustez le padding-top si nécessaire */
          padding-top: 80px; /* Correspond à la hauteur de votre navbar globale */
          background: url('/images/hero-bg.jpg') center center/cover no-repeat;
          color: #FFFFFF;
          text-align: center;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(43, 54, 116, 0.6);
          z-index: -1; /* Place l'overlay derrière le contenu */
          pointer-events: none; /* Permet les interactions via l'overlay */
        }

        .hero-content {

          z-index: 1;
        }

        .hero-section h1 {
          font-size: 3em;
          margin-bottom: 20px;
        }

        .hero-section p {
          font-size: 1.2em;
          margin-bottom: 30px;
        }

        .hero-button {
          font-size: 1em;
        }

        /* Sections de contenu */
        .content-section {
          padding: 60px 20px;
          background-color: #FFFFFF;
          color: #333333; /* Texte sombre pour les sections à fond clair */
        }

        .content-section.light-bg {
          background-color: #F0F0F0;
          color: #333333; /* Texte sombre pour les sections à fond clair */
        }

        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-top: 30px;
        }

        .sub-sections {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 40px;
        }

        .sub-section {
          background-color: #312E7F; /* Couleur sombre */
          padding: 20px 30px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          color: #FFFFFF; /* Texte blanc sur fond sombre */
        }

        .sub-section h3 {
          color: #FFFFFF; /* Assurer que les titres sont blancs */
        }

        /* Encadré "Les Économies" */
        .encadre-economies {
          background-color: #312E7F; /* Couleur sombre */
          padding: 30px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
          transition: transform 0.3s ease;
          color: #FFFFFF; /* Texte blanc sur fond sombre */
        }

        .encadre-economies h3 {
          color: #FFFFFF; /* Assurer que les titres sont blancs */
        }


        .highlight {
          font-weight: bold;
          color: #FFFFFF; /* Texte blanc sur fond sombre */
        }

        /* Section "Notre ADN" */
        .adn-card {
          background-color: #312E7F; /* Couleur sombre */
          padding: 20px 25px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          color: #FFFFFF; /* Texte blanc sur fond sombre */
        }

        .adn-card h3 {
          color: #FFFFFF; /* Assurer que les titres sont blancs */
        }

        /* Liste des valeurs */
        .values-list li {
          margin-bottom: 10px;
        }

        /* Footer */
        footer {
          background-color: #2B3674;
          color: #FFFFFF;
          text-align: center;
          padding: 40px 20px;
        }

        footer p {
          margin-top: 20px;
          font-size: 0.9em;
        }

        footer .audit-button {
          margin-top: 20px;
        }

      `}</style>

      {/*
        ============================
        Surcharges "globales" pour le mode sombre
        ()
        ============================
      */}
      <style jsx global>{`
        html.dark, body.dark {
          background-color: #111 ;
          color: #ddd ;
        }

        /* forcer toutes sections en mode sombre */
        .dark .content-section,
        .dark .content-section.light-bg,
        .dark footer {
          background-color: #111 ; 
          color: #ddd ;
        }
        .dark h1,
        .dark h2,
        .dark h3 {
          color: #fff;
        }
      `}</style>

    <style jsx>{`
  /* =========================
     BLOCS RESPONSIVE CONCIS 
     ========================= */

  /* Écrans <= 992px (tablettes/PC réduits) */
  @media (max-width: 992px) {
    .grid {
      grid-template-columns: 1fr !important; 
      gap: 20px !important;
    }
    .flex {
      flex-direction: column !important; 
      align-items: flex-start !important;
    }
  }

  /* Écrans <= 768px (tablettes/smartphones) */
  @media (max-width: 768px) {
    .hero-section {
      padding: 100px 15px 40px 15px !important;
    }
    .hero-section h1 {
      font-size: 2.2em !important;
      margin-bottom: 15px !important;
    }
    .hero-section p {
      font-size: 1.1em !important;
    }
  }

  /* Écrans <= 480px (petits smartphones) */
  @media (max-width: 480px) {
    .hero-section h1 {
      font-size: 1.8em !important;
    }
    .audit-button {
      padding: 8px 16px !important;
      font-size: 0.9em !important;
    }
  }
`}</style>
    </>
  );
}