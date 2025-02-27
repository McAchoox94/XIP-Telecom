"use client";

import Head from "next/head";

export default function InternetNetworksPage() {
  return (
    <>
      <Head>
        <title>XIP Telecom - Internet & Réseaux</title>
      </Head>

      {/* HERO */}
      <section className="bg-[#0A1733] dark:bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Internet & Réseaux</h1>
          <p className="text-lg md:text-xl font-light max-w-[600px] mx-auto">
            Découvrez nos solutions pour rester connecté et performant,
            partout et à tout moment.
          </p>
        </div>
      </section>

      {/* SECTION POURQUOI CHOISIR */}
      <section className="bg-white dark:bg-gray-800 text-[#333] dark:text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pourquoi choisir XIP Telecom ?</h2>
          <p className="font-light leading-7">
            Des offres fiables, un support réactif, et une équipe de spécialistes
            à votre écoute pour répondre à vos besoins en réseau. Grâce à nos
            partenariats avec des opérateurs 100% français, nous vous offrons une
            connectivité optimale, que vous soyez PME, ETI ou grand compte.
          </p>
        </div>
      </section>

      {/* FIBRE OPTIQUE */}
      <section className="bg-[#0A1733] dark:bg-gray-900 text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">Fibre Optique</h2>
          <p className="font-light leading-7 mb-6">
            Profitez d’un débit ultra-rapide et d’une connexion stable
            pour booster la productivité de votre entreprise. Nous proposons :
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>FTTH :</strong> Fibre mutualisée pour un excellent rapport qualité/prix.</li>
            <li><strong>FTTO :</strong> Fibre dédiée, avec des débits garantis et un SLA optimal.</li>
            <li><strong>Haute disponibilité :</strong> Évitez toute interruption critique grâce à une architecture solide.</li>
          </ul>
        </div>
      </section>

      {/* SATELLITE */}
      <section className="bg-white dark:bg-gray-800 text-[#333] dark:text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">Satellite</h2>
          <p className="font-light leading-7 mb-6">
            Idéal pour les zones mal desservies par la fibre ou l’ADSL,
            l’internet par satellite garantit un accès haut débit où que vous soyez.
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Couverture quasi-totale :</strong> Restez connecté même en zones rurales ou isolées.</li>
            <li><strong>Débit constant :</strong> Des offres évolutives pour répondre à vos besoins en bande passante.</li>
            <li><strong>Installation simplifiée :</strong> Une parabole, un modem, et vous êtes opérationnel.</li>
          </ul>
        </div>
      </section>

      {/* WIFI */}
      <section className="bg-[#0A1733] dark:bg-gray-900 text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">WiFi</h2>
          <p className="font-light leading-7 mb-6">
            Offrez à vos collaborateurs et visiteurs un accès sans-fil rapide et sécurisé.
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Hotspots professionnels :</strong> Des points d’accès puissants pour de nombreux utilisateurs.</li>
            <li><strong>Sécurité avancée :</strong> Cryptage WPA2/WPA3, portail captif, gestion des invités.</li>
            <li><strong>Gestion centralisée :</strong> Surveillez et administrez toutes vos bornes wifi à distance.</li>
          </ul>
          <div className="text-center mt-8">
            <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-medium shadow-lg">
              Demander un audit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}