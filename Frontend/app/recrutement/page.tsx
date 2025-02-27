"use client";

import Head from "next/head";

export default function RecrutementPage() {
  return (
    <>
      <Head>
        <title>XIP TELECOM - Recrutement</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-[#221C59] dark:bg-gray-900 text-white text-center min-h-screen flex flex-col justify-center items-center px-4"
      >
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Recrutement</h1>
          <p className="text-lg md:text-xl font-light max-w-[600px] mx-auto">
            Rejoignez XIP TELECOM et devenez acteur de la transformation
            des télécommunications.
          </p>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="bg-white dark:bg-gray-800 text-[#333] dark:text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
          <p className="font-light leading-7 mb-6 text-gray-700 dark:text-gray-300">
            Chez <span className="font-bold">XIP TELECOM</span>, notre aventure a débuté il y a 5 ans
            avec une mission claire : simplifier et optimiser les solutions télécom
            pour les entreprises françaises. Fondée à Colmar, au cœur de l’Alsace,
            notre entreprise est née de la volonté d’unir expertise technique et
            indépendance pour offrir des solutions innovantes dans un secteur en
            constante évolution.
          </p>
          <p className="font-light leading-7 text-gray-700 dark:text-gray-300">
            Dès nos débuts, nous avons bâti des partenariats solides avec les
            principaux opérateurs et fournisseurs de services télécom, tout en
            conservant une indépendance totale dans nos recommandations. Cette
            approche nous permet de toujours prioriser les besoins de nos clients.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#221C59] dark:bg-gray-900 text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Rejoignez XIP TELECOM en tant que Business Developer Indépendant !
          </h2>
          <p className="mb-6 font-light">
            Vous êtes auto-entrepreneur, indépendant ou dirigez une société ? Vous
            cherchez une activité principale ou complémentaire ? Vous souhaitez
            vous lancer en tant qu’auto-entrepreneur ou créer votre propre SARL ?
          </p>
          <p className="font-light">
            Chez <span className="font-bold">XIP TELECOM</span>, nous vous offrons
            l’opportunité de devenir un acteur clé dans le secteur des
            télécommunications, avec un accompagnement sur-mesure pour développer
            votre activité.
          </p>
        </div>
      </section>

      {/* POURQUOI NOUS REJOINDRE */}
      <section className="bg-white dark:bg-gray-800 text-[#333] dark:text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pourquoi nous rejoindre ?</h2>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              Un métier passionnant et orienté client
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Grâce à nos partenariats avec tous les opérateurs, nous définissons
                précisément les besoins des clients pour leur proposer LA solution
                sur-mesure qui leur correspond.
              </li>
              <li>
                Chez <span className="font-bold">XIP TELECOM</span>, ce ne sont plus
                les opérateurs qui décident, mais les clients qui choisissent.
              </li>
              <li>
                Vous conseillez vos clients en toute transparence et indépendance,
                sans contraintes commerciales imposées.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              Un partenariat durable et évolutif
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Nous accompagnons nos clients sur le long terme, même lorsqu’ils
                souhaitent changer d’opérateur. Votre rôle sera clé dans leur
                satisfaction et leur fidélité.
              </li>
              <li>
                Vous bénéficierez d’une grande liberté d’action, grâce à notre
                indépendance vis-à-vis des opérateurs télécoms.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* LES AVANTAGES POUR VOUS */}
      <section className="bg-[#221C59] dark:bg-gray-900 text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Les avantages pour vous</h2>
          <ul className="list-decimal list-inside space-y-4">
            <li>
              <strong>Un potentiel commercial immense</strong> : Avec 7 millions
              d’entreprises en France, les opportunités sont infinies.
            </li>
            <li>
              <strong>Une activité flexible</strong> : Idéale pour compléter une
              activité existante ou comme activité principale.
            </li>
            <li>
              <strong>Un accompagnement sur-mesure</strong> : Nous vous conseillons
              et vous guidons dans vos démarches pour devenir auto-entrepreneur ou
              créer votre structure.
            </li>
            <li>
              <strong>Une rémunération attractive</strong> : Profitez de commissions
              motivantes grâce à vos performances.
            </li>
            <li>
              <strong>Un métier valorisant</strong> : Vous contribuerez à
              simplifier la vie de vos clients tout en leur faisant réaliser des
              économies.
            </li>
          </ul>
        </div>
      </section>

      {/* PROFIL RECHERCHÉ */}
      <section className="bg-white dark:bg-gray-800 text-[#333] dark:text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Profil recherché</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
            <li>Vous êtes dynamique, motivé et avez le goût du contact humain.</li>
            <li>Vous avez une sensibilité pour le conseil et la négociation.</li>
            <li>
              Vous souhaitez évoluer en tant qu’indépendant tout en bénéficiant
              d’un partenariat solide.
            </li>
            <li>
              Une première expérience en vente ou télécommunications est un atout,
              mais nous sommes avant tout à la recherche de talents motivés.
            </li>
          </ul>
        </div>
      </section>

      {/* APPEL À L’ACTION */}
      <section className="bg-[#221C59] dark:bg-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-[1000px] mx-auto">
          <p className="mb-4 font-bold">
            Rejoignez une équipe qui valorise l’indépendance, la transparence et
            le succès.
          </p>
          <p className="mb-6">
            Contactez-nous dès maintenant pour discuter de votre projet et
            découvrir comment <span className="font-bold">XIP TELECOM</span> peut
            devenir un levier de croissance pour votre activité.
          </p>
          <p className="mb-8 font-bold">
            Faites le choix de l’indépendance, tout en profitant d’un cadre
            structuré et motivant !
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-medium shadow-lg">
            Je candidate
          </button>
        </div>
      </section>

      {/* FOOTER AVEC LIGNE ORANGE */}
      {/* 
          On retire le fond blanc et on applique le même fond (#221C59) 
          pour enlever la bande blanche, 
          puis on insère la ligne orange "hr" sans espace superflu 
      */}
      <footer className="bg-[#221C59]">
        {/* La ligne orange */}
        <hr className="border-t border-orange-500 mx-auto" />
      </footer>
    </>
  );
}
