"use client";

import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <section className="bg-xip-indigo-50 md:bg-home text-white flex items-center text-center md:text-start justify-center w-screen py-2 md:py-12 h-[450px] md:h-auto">
        <div className="container mx-auto flex items-center md:justify-between justify-center pt-20">
          <div className="hero-text px-4 md:max-w-[50%] max-w-[calc(100% - 50px)]">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              Élevez vos Télécommunications
            </h1>
            <p className="text-lg md:text-xl font-light mb-8">
              Des solutions modernes, performantes et conçues pour votre succès.
            </p>
            <a
              href="#solutions"
              className="bg-orange-500 text-white py-3 px-6 rounded-md transition-colors duration-300 hover:bg-orange-600 font-medium"
            >
              Découvrez nos services
            </a>
          </div>
        </div>
      </section>

      {/* Section Nos solutions */}
      <section id="solutions" className="py-16 px-4 bg-background text-primary text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Nos Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="bg-border py-6 px-4 rounded-lg shadow-md flex flex-col items-center justify-between h-full">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Téléphonie d&apos;entreprise</h3>
              <p className="mb-4">Des solutions adaptées pour vos télécommunications professionnelles.</p>
            </div>
            <div className="bg-border py-6 px-4 rounded-lg shadow-md flex flex-col items-center justify-between h-full">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Internet & Réseaux</h3>
              <p className="mb-4">Connectez votre entreprise avec des solutions performantes.</p>
            </div>
            <div className="bg-border py-6 px-4 rounded-lg shadow-md flex flex-col items-center justify-between h-full">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Audits Télécoms</h3>
              <p className="mb-4">Analysez et optimisez vos infrastructures pour réduire vos coûts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="bg-xip-indigo-50 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-0 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Témoignages
          </h2>
          <div className="w-full md:max-w-[80%] max-w-[calc(100% - 50px)]">
            <div className="bg-background text-primary p-6 rounded-lg shadow-md mb-6">
              <p className="font-light mb-4">
              &quot;Grâce à cette solution, notre entreprise a pu augmenter son efficacité de manière significative. Les résultats sont impressionnants !&quot;
              </p>
              <p className="font-bold">Jean Dupont</p>
              <p className="text-sm text-gray-600">CEO de l&apos;Entreprise X</p>
            </div>
            <div className="bg-background text-primary p-6 rounded-lg shadow-md">
              <p className="font-light mb-4">
                &quot;L&apos;expérience a été incroyable. L&apos;équipe a été très réactive et les résultats ont dépassé nos attentes.&quot;
              </p>
              <p className="font-bold">Jhon Doe</p>
              <p className="text-sm text-gray-600">Responsable Marketing, Entreprise Y</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <ContactForm />
      </section>

    </div>
  );
}