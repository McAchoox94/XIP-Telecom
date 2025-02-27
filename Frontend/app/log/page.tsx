"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const COOKIE_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000;
  const { toast } = useToast();
  const { user, fetchUserProfile } = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
  
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setError("Le temps de connexion a expiré.");
    }, 10000); // Timeout après 10 secondes
  
    try {
      const response = await fetch("http://localhost:1337/api/db/login-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }
  
      // Stocke le token dans un cookie
      Cookies.set("token", data.token, { expires: new Date(Date.now() + COOKIE_EXPIRATION_TIME) });
  
      // Raffraîchir les données utilisateur immédiatement
      await fetchUserProfile();
  
      // Supprimer le timeout lorsque la connexion est réussie
      clearTimeout(timeout);
      
      // Afficher un toast et rediriger l'utilisateur
      toast({
        variant: "success",
        title: "Connecté(e) avec succès !",
        description: `Bienvenue, ${user?.name}`,
      });
  
      // Attendre un court instant avant la redirection
      setTimeout(() => {
        router.push(redirect);
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      setIsLoading(false);
      clearTimeout(timeout); // Annuler le timeout en cas d'erreur
    }
  };

  useEffect(() => {
    if (user?.name) {
      toast({
        variant: "success",
        title: "Connecté(e) avec succès !",
        description: `Vous êtes désormais connecté(e) en tant que : ${user.name}`,
      });

      // Attendre un court instant avant la redirection
      setTimeout(() => {
        router.push(redirect);
      }, 1000);
    }
  }, [user, toast, router, redirect]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">
        <div className="hidden md:flex md:w-1/2 bg-gray-50 dark:bg-gray-800 items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Bienvenue chez XIP Telecom
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Accédez à votre espace professionnel
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center h-screen justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Connexion</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Utilisez vos identifiants XIP Telecom
              </p>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jean.dupont@entreprise.fr"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-900 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 transition-colors duration-200 flex justify-center items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Se connecter"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Pas encore de compte ?{" "}
              <Link
                href="/creation_compte"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium underline"
              >
                Créez votre compte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}