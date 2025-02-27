"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, Menu, PhoneCall, Search } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

// Tableau des éléments recherchables
const searchItems = [
  {
    title: "Accueil",
    description: "Retour à la page principale de XIP-Telecom.",
    href: "/",
  },
  // --- Nos missions d'audit ---
  {
    title: "Études financières",
    description: "Analyse des coûts de communication et rapports personnalisés.",
    href: "/nos-missions-d-audit#financieres",
  },
  {
    title: "Études opérationnelles",
    description:
      "Modernisation des infrastructures réseau et optimisation des coûts opérateurs.",
    href: "/nos-missions-d-audit#operationnelles",
  },
  {
    title: "Études stratégiques",
    description:
      "Conception de solutions réseau : schémas, VoIP, interconnexion, vidéosurveillance.",
    href: "/nos-missions-d-audit#strategiques",
  },
  // --- À propos ---
  {
    title: "Mentions légales",
    description: "Informations légales et conditions d'utilisation.",
    href: "/mention_legal",
  },
  {
    title: "Notre ADN",
    description: "Innovation & excellence au cœur de notre travail.",
    href: "/a-propos#ADN",
  },
  {
    title: "Notre approche",
    description: "Agile et collaborative pour des solutions efficaces.",
    href: "/a-propos#approach",
  },
  {
    title: "Notre stratégie pour clients",
    description: "Audit, optimisation, solutions télécoms personnalisées.",
    href: "/a-propos#strategy",
  },
  {
    title: "Nos engagements",
    description: "Des solutions durables pour une transformation réussie.",
    href: "/a-propos#engagements",
  },
  {
    title: "Pourquoi nous ?",
    description: "Une approche humaine et technique pour réussir.",
    href: "/a-propos#pourquoi-nous",
  },
  {
    title: "Qui sommes-nous ?",
    description: "Découvrez l'histoire et les valeurs de XIP-Telecom.",
    href: "/a-propos",
  },
  {
    title: "Recrutement",
    description: "Carrières et opportunités chez XIP-Telecom.",
    href: "/recrutement",
  },
  // --- Nos solutions ---
  {
    title: "Internet & réseaux",
    description: "Fibre optique (FFTH, FFTO), Satellite & Wifi.",
    href: "/INTERNET",
  },
  {
    title: "Téléphonie d'entreprise",
    description: "Trunk SIP & Centrex.",
    href: "/entreprise_possible",
  },
];

// Normalisation de la chaîne (pour une recherche insensible aux accents et à la casse)
const normalizeString = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  // États pour gérer l'ouverture des sous-menus du Dropdown mobile
  const [isAproposOpen, setIsAproposOpen] = useState(false);
  const [isNosSolutionsOpen, setIsNosSolutionsOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  // États pour la recherche
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const filteredResults = searchItems.filter(
    (item) =>
      normalizeString(item.title).includes(normalizeString(searchQuery)) ||
      normalizeString(item.description).includes(normalizeString(searchQuery))
  );

  // Fermer la liste des suggestions si l'utilisateur clique en dehors (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSelectSuggestion = (href: string) => {
    setSearchQuery("");
    setShowSuggestions(false);
    setIsMobileSearchOpen(false);
    router.push(href);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filteredResults.length === 1) {
      handleSelectSuggestion(filteredResults[0].href);
    }
  };

  return (
    <>
      {/* NAVBAR PRINCIPALE */}
      <nav className="fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between h-20 px-4 md:px-6 bg-xip-indigo-50 border-b border-border shadow-sm z-40 max-[467px]:justify-center">
        {/* Partie gauche : Logo et menu de navigation (affiché sur écrans ≥1282px) */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold text-xip-blanc hover:cursor-pointer">
            <h2>XIP-Telecom</h2>
          </Link>
        </div>

        <NavigationMenu>
            <NavigationMenuList className="hidden min-[1282px]:flex">
              <NavigationMenuLink
                href="/"
                className="group inline-flex h-9 items-center rounded-md bg-transparent text-xip-blanc px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium"
              >
                Accueil
              </NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-xip-blanc">
                  À propos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="grid grid-cols-2 gap-3 p-4 min-[1235px]:w-[500px]">
                  <ListItem href="/a-propos" title="Qui sommes-nous ?">
                    Découvrez l&apos;histoire et les valeurs de XIP-Telecom.
                  </ListItem>
                  <ListItem href="/a-propos#strategy" title="Notre stratégie pour clients">
                    Audit, optimisation, solutions télécoms personnalisées.
                  </ListItem>
                  <ListItem href="/a-propos#pourquoi-nous" title="Pourquoi nous ?">
                    Une approche humaine et technique pour réussir.
                  </ListItem>
                  <ListItem href="/a-propos#approach" title="Notre approche">
                    Agile et collaborative pour des solutions efficaces.
                  </ListItem>
                  <ListItem href="/a-propos#ADN" title="Notre ADN">
                    Innovation &amp; excellence au cœur de notre travail.
                  </ListItem>
                  <ListItem href="/a-propos#engagements" title="Nos engagements">
                    Des solutions durables pour une transformation réussie.
                  </ListItem>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-xip-blanc">
                  Nos solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="grid gap-3 p-4 min-[1235px]:w-[500px] min-[1235px]:grid-cols-[.75fr_1fr]">
                  <ListItem href="/entreprise_possible" title="Téléphonie d'entreprise">
                    Trunk SIP &amp; Centrex.
                  </ListItem>
                  <ListItem href="/INTERNET" title="Internet &amp; réseaux">
                    Fibre optique (FFTH, FFTO), Satellite &amp; Wifi.
                  </ListItem>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-xip-blanc">
                  Nos missions d&apos;audit
                </NavigationMenuTrigger>
                <NavigationMenuContent className="grid gap-3 p-4 min-[1235px]:w-[500px]">
                  <ListItem href="/nos-missions-d-audit#strategiques" title="Études stratégiques">
                    Conception de solutions réseau : schémas, VoIP, interconnexion, vidéosurveillance.
                  </ListItem>
                  <ListItem href="/nos-missions-d-audit#operationnelles" title="Études opérationnelles">
                    Modernisation des infrastructures réseau et optimisation des coûts opérateurs.
                  </ListItem>
                  <ListItem href="/nos-missions-d-audit#financieres" title="Études financières">
                    Analyse des coûts de communication et rapports personnalisés.
                  </ListItem>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

        {/* Partie droite (affichée sur écrans ≥1235px) : Barre de recherche, Profil & Contact */}
        <div className="hidden min-[1282px]:flex items-center gap-4">
          {/* Barre de recherche */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="relative w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => setShowSuggestions(true)}
                className="block w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
            {showSuggestions && searchQuery && filteredResults.length > 0 && (
              <div
                ref={suggestionsRef}
                className="absolute top-full left-0 w-80 bg-white dark:bg-gray-800 shadow-lg border mt-2 rounded-md z-50 overflow-hidden"
              >
                {filteredResults.map((item) => (
                  <div
                    key={item.href}
                    className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleSelectSuggestion(item.href)}
                  >
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{item.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <ProfileMenu />
          <Link href="/contact" className="flex-shrink-0">
            <Button className="border-none bg-xip-orange-50 text-xip-blanc" variant="outline">
              Contactez-nous <PhoneCall />
            </Button>
          </Link>
        </div>

        {/* Partie mobile (affichée sur écrans <1235px) : Bouton Recherche, Menu burger & Contact */}
        <div className="flex items-center gap-2 min-[1282px]:hidden">
          <ProfileMenu />
          <button onClick={() => setIsMobileSearchOpen(true)} className="p-2 text-xip-blanc">
            <Search className="h-6 w-6" />
          </button>
          <DropdownMenu
            onOpenChange={(isOpen) => {
              if (!isOpen) {
                setIsAproposOpen(false);
                setIsNosSolutionsOpen(false);
                setIsAuditOpen(false);
              }
            }}
          >
            <DropdownMenuTrigger className="flex" asChild>
              <Button className="border-none bg-xip-orange-50 text-xip-blanc z-10" variant="outline" size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 z-[9999999]">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/">Accueil</Link>
                </DropdownMenuItem>
                {/* Sous-menu "À propos" */}
                <DropdownMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAproposOpen(!isAproposOpen);
                  }}
                  className="flex justify-between items-center"
                >
                  À propos{" "}
                  {isAproposOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </DropdownMenuItem>
                {isAproposOpen && (
                  <div className="ml-4 space-y-2">
                    <DropdownMenuItem asChild onClick={() => setIsAproposOpen(false)}>
                      <Link href="/a-propos">Qui sommes-nous ?</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild onClick={() => setIsAproposOpen(false)}>
                      <Link href="/a-propos#strategy">Notre stratégie</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild onClick={() => setIsAproposOpen(false)}>
                      <Link href="/a-propos#pourquoi-nous">Pourquoi nous ?</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild onClick={() => setIsAproposOpen(false)}>
                      <Link href="/a-propos#approach">Notre approche</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild onClick={() => setIsAproposOpen(false)}>
                      <Link href="/a-propos#ADN">Notre ADN</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild onClick={() => setIsAproposOpen(false)}>
                      <Link href="/a-propos#engagements">Nos engagements</Link>
                    </DropdownMenuItem>
                  </div>
                )}
                {/* Sous-menu "Nos solutions" */}
                <DropdownMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNosSolutionsOpen(!isNosSolutionsOpen);
                  }}
                  className="flex justify-between items-center"
                >
                  Nos solutions{" "}
                  {isNosSolutionsOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </DropdownMenuItem>
                {isNosSolutionsOpen && (
                  <div className="ml-4 space-y-2">
                    <DropdownMenuItem asChild onClick={() => setIsNosSolutionsOpen(false)}>
                      <Link href="/entreprise_possible">Téléphonie d&apos;entreprise</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild onClick={() => setIsNosSolutionsOpen(false)}>
                      <Link href="/INTERNET">Internet &amp; réseaux</Link>
                    </DropdownMenuItem>
                  </div>
                )}
                {/* Sous-menu "Nos missions d'audit" */}
                <DropdownMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAuditOpen(!isAuditOpen);
                  }}
                  className="flex justify-between items-center"
                >
                  Nos missions d&apos;audit{" "}
                  {isAuditOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </DropdownMenuItem>
                {isAuditOpen && (
                  <div className="ml-4 space-y-2">
                    <DropdownMenuItem asChild onClick={() => setIsAuditOpen(false)}>
                      <Link href="/nos-missions-d-audit#strategiques">Les études stratégiques</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild onClick={() => setIsAuditOpen(false)}>
                      <Link href="/nos-missions-d-audit#operationnelles">Les études opérationnelles</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild onClick={() => setIsAuditOpen(false)}>
                      <Link href="/nos-missions-d-audit#financieres">Les études financières</Link>
                    </DropdownMenuItem>
                  </div>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  {user ? (
                    <div onClick={logout}>Se déconnecter</div>
                  ) : (
                    <Link href={`/log?redirect=${encodeURIComponent(pathname)}`}>
                      Connexion
                    </Link>
                  )}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/contact">
            <Button className="border-none bg-xip-orange-50 text-xip-blanc" variant="outline">
              Contactez-nous <PhoneCall />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Overlay de recherche pour mobile (<1235px) */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 p-4 overflow-auto">
          <div className="flex items-center mb-4">
            <button onClick={() => setIsMobileSearchOpen(false)} className="p-2">
              <ChevronUp className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            <div className="relative flex-1 ml-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {searchQuery && filteredResults.length > 0 && (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredResults.map((item) => (
                <div
                  key={item.href}
                  className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelectSuggestion(item.href)}
                >
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{item.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string; title: string }
>(({ className, title, children, ...props }, ref) => (
  <div className="list-none p-0 m-0">
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </div>
));
ListItem.displayName = "ListItem";

export default Navbar;
