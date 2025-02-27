"use client";

import Head from "next/head";

export default function MissionAudit() {
  return (
    <>
      <Head>
        <title>Études stratégiques - XIP Telecom</title>
      </Head>

      {/* Section : Nos Missions d'Audit */}
      <section className="bg-xip-indigo-50 py-12 pt-28">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Nos Missions d&#39;audit
          </h1>
        </div>
      </section>

      {/* Section : Présentation des audits */}
      <section className="bg-background py-12 px-4 sm:px-8 lg:px-16 lg:mx-64">
        <h1 className="text-3xl font-bold text-white-800 mb-6">
          Audit XIP TELECOM : <br />
          Accompagnement stratégique et opérationnel pour vos télécommunications
        </h1>
        <div className="text-white-700 text-lg leading-relaxed">
          <p>
            Chez XIP TELECOM, nos missions d’audit sont conçues pour vous offrir une vision claire et précise
            de vos besoins en télécommunications et réseaux. Nous analysons vos infrastructures, vos coûts, et
            vos besoins afin de vous proposer des solutions optimales et sur-mesure. Voici le détail de nos
            prestations d’audit.
          </p>
        </div>
      </section>

      {/* Section : Études stratégiques */}
      <section id="strategiques" className="bg-xip-indigo-50 py-20 px-4 sm:px-8 lg:px-16">
        <div className="lg:px-64">
          <h1 className="text-xip-blanc text-3xl md:text-4xl font-bold mb-10 bord">
            1. LES ÉTUDES STRATÉGIQUES : <br /> Concevoir l’avenir de vos télécoms et réseaux
          </h1>
          <p className="text-xip-blanc mb-8">
            Nos études stratégiques vous permettent de définir les orientations techniques et fonctionnelles
            nécessaires pour moderniser et optimiser vos télécommunications.
            <br />
            <br />
            Exemples de prestations :
            <br />
          </p>

          {/* Prestations : Études stratégiques */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-xip-blanc">
                Réalisation de schéma directeur
              </h2>
              <p className="text-xip-blanc">
                Élaboration d’un plan directeur structurant l’évolution de vos télécoms et réseaux sur plusieurs années.
              </p>
              <ul className="list-disc list-inside text-xip-blanc mt-2 space-y-1">
                <li>Analyse de vos besoins actuels et futurs.</li>
                <li>Identification des technologies adaptées (VoIP, fibre, cloud, etc.).</li>
                <li>Planification budgétaire et technique pour une mise en œuvre progressive.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-xip-blanc">
                Études d&#39;évolution VoIP
              </h2>
              <p className="text-xip-blanc">
                Analyse de la transition de votre téléphonie traditionnelle vers la VoIP :
              </p>
              <ul className="list-disc list-inside text-xip-blanc mt-2 space-y-1">
                <li>Évaluation de la compatibilité de vos infrastructures existantes.</li>
                <li>Proposition de solutions (Trunk SIP, Centrex).</li>
                <li>Impact financier et gain opérationnel.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-xip-blanc">
                Études de faisabilité
              </h2>
              <ul className="list-disc list-inside text-xip-blanc mt-2 space-y-1">
                <li>Évaluation des contraintes techniques pour des projets spécifiques.</li>
                <p>(implantation de fibre, extension de réseaux, etc...)</p>
                <li>Analyse des environnements physiques et technologiques pour garantir la réussite du projet.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-xip-blanc">
                Études d&#39;interconnexion
              </h2>
              <p className="text-xip-blanc">
                Optimisation des échanges entre vos sites :
              </p>
              <ul className="list-disc list-inside text-xip-blanc mt-2 space-y-1">
                <li>Conception de réseaux interconnectés (VPN, MPLS, SD-WAN).</li>
                <li>
                  Sécurisation des communications entre vos bureaux, sites distants, ou partenaires.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-xip-blanc">
                Implantation de systèmes de vidéosurveillance
              </h2>
              <ul className="list-disc list-inside text-xip-blanc mt-2 space-y-1">
                <li>Audit des infrastructures existantes pour accueillir des caméras IP.</li>
                <li>Sélection et positionnement des équipements pour une couverture optimale.</li>
                <li>Intégration aux réseaux existants sans perturber les flux de données.</li>
              </ul>
            </div>
          </div>
          <a
            href="/contact"
            className="bg-orange-500 text-white mt-9 py-3 px-6 rounded-md transition-colors duration-300 hover:bg-orange-600 font-medium inline-block"
          >
            Demander un audit
          </a>
        </div>
      </section>

      {/* Section : Études opérationnelles */}
      <section id="operationnelles" className="bg-background py-20 px-4 lg:mx-64 sm:px-8 lg:px-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-10">
            2. LES ÉTUDES OPÉRATIONNELLES : <br /> Moderniser et optimiser vos infrastructures
          </h1>
          <p className="text-white-700 mb-6">
            Nos études opérationnelles se concentrent sur la mise en œuvre pratique et l&#39;amélioration
            continue de vos outils télécoms et réseaux.
          </p>
          <p>Exemples de prestations :</p>
          <br />
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white-800">
                Évolution ou remplacement de matériel télécom et réseaux
              </h2>
              <ul className="list-disc list-inside text-white-700 mt-2 space-y-1">
                <li>
                  Diagnostic des équipements existants (standards téléphoniques, routeurs, commutateurs).
                </li>
                <li>Préconisation de matériels modernes et adaptés à vos besoins.</li>
                <li>
                  Réduction des coûts de maintenance grâce à des équipements performants.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white-800">
                Évolution des réseaux câblés
              </h2>
              <ul className="list-disc list-inside text-white-700 mt-2 space-y-1">
                <li>État des lieux des infrastructures physiques (câblage cuivre, fibre optique).</li>
                <li>
                  Proposition d&#39;évolution pour répondre aux exigences de débit et de sécurité.
                </li>
                <li>Mise en conformité avec les standards actuels.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white-800">
                Évolution des réseaux Data (LAN, MAN, WAN)
              </h2>
              <ul className="list-disc list-inside text-white-700 mt-2 space-y-1">
                <li>
                  Optimisation des performances réseau pour supporter des applications critiques
                  (visioconférences, ERP).
                </li>
                <li>
                  Transition vers des solutions avancées telles que SD-WAN pour une gestion intelligente des flux.
                </li>
                <li>
                  Sécurisation des réseaux locaux et métropolitains contre les cybermenaces.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white-800">
                Optimisation des coûts et de l&#39;accueil
              </h2>
              <ul className="list-disc list-inside text-white-700 mt-2 space-y-1">
                <li>
                  Analyse des coûts liés à l&#39;accueil téléphoniques, aux standards, et aux services opérateurs.
                </li>
                <li>
                  Proposition d&#39;automatisation (messagerie interactive, solutions cloud).
                </li>
                <li>
                  Amélioration de l&#39;expérience client grâce à des outils performants.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white-800">
                Mise en concurrence des services opérateurs
              </h2>
              <ul className="list-disc list-inside text-white-700 mt-2 space-y-1">
                <li>
                  Étude comparative des offres des principaux opérateurs pour vos besoins spécifiques.
                </li>
                <li>
                  Analyse des avantages financiers et techniques de chaque solution.
                </li>
                <li>
                  Accompagnement dans la négociation et la transition vers un nouveau prestataire si nécessaire.
                </li>
              </ul>
            </div>

            <a
              href="/contact"
              className="bg-orange-500 text-white mt-9 py-3 px-6 rounded-md transition-colors duration-300 hover:bg-orange-600 font-medium inline-block"
            >
              Demander un audit
            </a>
          </div>
        </div>
      </section>

      {/* Section : Études financières */}
      <section id="financieres" className="bg-xip-indigo-50 py-20 px-4 sm:px-8 lg:px-16">
        <div className="lg:px-64">
          <h1 className="text-xip-blanc text-3xl md:text-4xl font-bold mb-10">
            3. LES ÉTUDES FINANCIÈRES : <br /> Comprendre et réduire vos coûts
          </h1>
          <p className="text-xip-blanc mb-6">
            Nos études financières sont conçues pour analyser vos dépenses en télécommunications et
            optimiser vos budgets, tout en assurant une meilleure gestion de vos ressources.
          </p>
          <p className="text-xip-blanc">
            Exemples de prestations :
          </p>
          <br />
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-xip-blanc">
                Analyse des coûts de communication interne et externe
              </h2>
              <ul className="list-disc list-inside text-xip-blanc mt-2 space-y-1">
                <li>
                  Étude détaillée des dépenses liées à vos communications vocales, data, et IoT.
                </li>
                <li>
                  Identification des postes de coûts excessifs ou non optimisés.
                </li>
                <li>
                  Recommandations pour une réduction significative des dépenses, sans compromettre la qualité.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-xip-blanc">
                Audit des contrats opérateurs
              </h2>
              <ul className="list-disc list-inside text-xip-blanc mt-2 space-y-1">
                <li>
                  Analyse des termes contractuels pour vérifier leur adéquation avec vos besoins actuels.
                </li>
                <li>
                  Identification des clauses pénalisantes ou peu avantageuses.
                </li>
                <li>
                  Recommandations pour renégocier ou modifier vos contrats.
                </li>
              </ul>
            </div>
          </div>
          <a
            href="/contact"
            className="bg-orange-500 text-white mt-9 py-3 px-6 rounded-md transition-colors duration-300 hover:bg-orange-600 font-medium inline-block"
          >
            Demander un audit
          </a>
        </div>
      </section>

      {/* Section : Pourquoi choisir XIP TELECOM pour vos audits ? */}
      <section className="bg-background py-12 px-4 lg:mx-64 sm:px-8 lg:px-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-10">
            Pourquoi choisir XIP TELECOM pour vos audits ?
          </h1>
          <ol className="list-decimal list-inside text-white-700 mt-2 space-y-1">
            <li>
              Étude détaillée des dépenses liées à vos communications vocales, data, et IoT.
            </li>
            <li>
              Identification des postes de coûts excessifs ou non optimisés.
            </li>
            <li>
              Recommandations pour une réduction significative des dépenses, sans compromettre la qualité.
            </li>
          </ol>
        </div>
      </section>

      {/* Section : Sécurité et conformité */}
      <section className="text-xip-blanc bg-xip-indigo-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="lg:px-64">
          <p>
            Avec XIP TELECOM, vos audits deviennent une opportunité d&#39;évolution, de rationalisation, et
            de succès.
          </p>
          <br />
          <p>
            Contactez-nous dès aujourd&#39;hui pour entamer une analyse complète de vos télécommunications.
          </p>
          <a
            href="/contact"
            className="bg-orange-500 text-white mt-9 py-3 px-6 rounded-md transition-colors duration-300 hover:bg-orange-600 font-medium inline-block"
          >
            Je demander un audit
          </a>
        </div>
      </section>
    </>
  );
}
