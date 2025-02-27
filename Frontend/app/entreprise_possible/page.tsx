"use client";

import Head from "next/head";

export default function TelephonieEntreprisePage() {
  return (
    <>
      <Head>
        <title>Téléphonie d&apos;Entreprise - XIP Telecom</title>
      </Head>

      {/* HEADER */}
      <header className="bg-[#221C59] dark:bg-gray-900 text-white py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4">
          <div className="text-xl font-semibold">XIP Telecom</div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="#home" className="hover:underline">
                </a>
              </li>
              <li>
                <a href="#apropos" className="hover:underline">
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:underline">
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#audit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium shadow-md"
          >
            Demander un audit
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-[#221C59] dark:bg-gray-900 text-white text-center min-h-screen flex flex-col justify-center items-center px-4"
      >
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Téléphonie d&apos;Entreprise
          </h1>
          <p className="text-lg md:text-xl font-light max-w-[600px] mx-auto">
            Découvrez nos solutions de téléphonie fixe et mobile pour accompagner
            votre entreprise dans sa transformation et son efficacité au quotidien.
          </p>
        </div>
      </section>

      {/* SECTION POURQUOI CHOISIR */}
      <section className="bg-white dark:bg-gray-800 text-[#333] dark:text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pourquoi choisir XIP Telecom ?
          </h2>
          <p className="font-light leading-7 mb-6">
            Spécialisés dans le conseil et le courtage en télécommunications, nous
            vous aidons à optimiser vos coûts et à adopter des solutions fixes
            et mobiles performantes. Nous vous offrons un accompagnement
            sur-mesure, quelle que soit la taille de votre structure.
          </p>
        </div>
      </section>

      {/* TÉLÉPHONIE FIXE */}
      <section className="bg-[#0A1733] dark:bg-gray-900 text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">Téléphonie Fixe</h2>
          <p className="font-light leading-7 mb-6">
            La téléphonie fixe reste un pilier des communications professionnelles.
            Nos solutions incluent :
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Standards téléphoniques</strong>: Communications centralisées
              pour les appels et conférences.
            </li>
            <li>
              <strong>Numéros géographiques</strong>: Améliorez votre accessibilité
              avec des numéros locaux.
            </li>
            <li>
              <strong>Forfaits adaptés</strong>: Tarifs ajustés aux besoins spécifiques.
            </li>
            <li>
              <strong>Migration vers la VoIP</strong>: Préparez-vous à la fin du RTC
              avec des solutions IP.
            </li>
          </ul>
        </div>
      </section>

      {/* TRUNK SIP */}
      <section className="bg-[#221C59] dark:bg-gray-900 text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">Trunk SIP</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Interopérabilité complète</strong>: Connectez vos systèmes existants.
            </li>
            <li>
              <strong>Réduction des coûts</strong>: Diminuez vos dépenses téléphoniques.
            </li>
            <li>
              <strong>Flexibilité des lignes</strong>: Ajustez le nombre de canaux selon vos besoins.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white dark:bg-gray-800 text-[#333] dark:text-white py-16 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Envie d&apos;aller plus loin ?</h2>
          <p className="font-light leading-7 mb-8">
            Contactez-nous pour un audit complet de votre infrastructure
            téléphonique. Nous saurons vous proposer la meilleure offre
            pour moderniser et optimiser vos communications.
          </p>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-medium shadow-lg"
          >
            Demander un audit
          </a>
        </div>
      </section>
    </>
  );
}
