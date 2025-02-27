import React from 'react';
import Image from 'next/image';
import logo from '@/public/xip-logo-blanc.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#221C59] py-12 px-8 text-xip-blanc">
      <div className="max-w-7xl mx-auto">
        
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/">
              <Image src={logo} alt="XIP Telecom" className="w-40" />
            </Link>
            <p className="text-sm">
              Votre partenaire en solutions de télécommunication innovantes.
            </p>
          </div>

          {/* À propos */}
          <div className="space-y-4">
            <h3 className="font-semibold border-b-2 border-orange-500 w-fit pb-1">À propos</h3>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="hover:text-gray-300">Qui sommes-nous ?</Link></li>
              <li><Link href="/a-propos#pourquoi-nous" className="hover:text-gray-300">Pourquoi nous ?</Link></li>
              <li><Link href="/a-propos#ADN" className="hover:text-gray-300">Notre ADN</Link></li>
            </ul>
          </div>

          {/* Nos Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold border-b-2 border-orange-500 w-fit pb-1">Nos solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/entreprise_possible" className="hover:text-gray-300">Téléphonie d&apos;entreprise</Link></li>
              <li><Link href="/INTERNET" className="hover:text-gray-300">Réseaux d&apos;entreprise</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div className="space-y-4">
            <h3 className="font-semibold border-b-2 border-orange-500 w-fit pb-1">Informations</h3>
            <ul className="space-y-2">
              <li><Link href="/mention_legal" className="hover:text-gray-300">Mentions légales</Link></li>
              <li><Link href="/recrutement" className="hover:text-gray-300">Recrutement</Link></li>
            </ul>
          </div>

        </div>

        {/* Barre de copyright */}
        <div className="border-t border-xip-blanc/20 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} XIP Telecom. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}
