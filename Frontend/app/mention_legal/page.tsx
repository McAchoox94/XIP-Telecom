import Head from "next/head";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>XIP TELECOM - Mentions Légales</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* PAGE CONTAINER */}
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* MAIN CONTENT */}
        <main className="container mx-auto px-6 py-12 pt-28">
          {/* TITRE PRINCIPAL */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Retrouvez ici toutes les informations légales liées à XIP TELECOM.
            </p>
          </section>

          {/* CONTENU */}
          <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
              Éditeur du Site
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              XIP TELECOM est une marque déposée de la société{" "}
              <span className="font-semibold">CATHÉDRALE CONSEILS SARL</span>, au capital de 1000 €.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              RCS Colmar B 838 115 269
              <br />
              Siège social : 36 Rue des Romains, 68600 Biesheim, France
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Directeur de la Publication : Patrick Biechel
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
              Hébergeur du Site
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              OVH SAS
              <br />
              2 rue Kellermann, 59100 Roubaix, France
              <br />
              RCS Lille Métropole 424 761 419
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
              Droits d’auteur et Propriété Intellectuelle
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tous les éléments figurant sur le présent site internet (images, bases
              de données, marques, logos, dessins, etc.) sont protégés par la législation
              française et internationale sur le droit d’auteur.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>
                Toute reproduction, représentation ou adaptation, totale ou partielle,
                est interdite sans autorisation écrite de l&apos;Éditeur.
              </li>
              <li>
                La reproduction d’une citation est autorisée sous certaines conditions :
                <ul className="list-disc pl-6">
                  <li>
                    Elle doit être courte et justifiée par un caractère critique, pédagogique
                    ou informatif.
                  </li>
                  <li>
                    Elle doit mentionner clairement XIP TELECOM en tant que source.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
              Protection des Données Personnelles
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Les informations personnelles collectées par XIP TELECOM sont traitées dans le respect des lois en vigueur.
              <br />
              Conformément à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, et de suppression de vos données.
              <br />
              Pour exercer ces droits, contactez-nous à :
              <span className="block font-semibold">gdpr@xip-telecom.com</span>
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
