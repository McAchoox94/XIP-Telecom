"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ComboBoxResponsive } from "@/components/RegionsList/RegionsList";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [regionError, setRegionError] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);
    const hasMinLength = password.length >= 8;

    if (!hasUpperCase) return "Le mot de passe doit contenir au moins une majuscule.";
    if (!hasDigit) return "Le mot de passe doit contenir au moins un chiffre.";
    if (!hasSpecialChar) return "Le mot de passe doit contenir au moins un caractère spécial.";
    if (!hasMinLength) return "Le mot de passe doit contenir au moins 8 caractères.";
    return "";
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setConfirmPasswordError(value !== password ? "Les mots de passe ne correspondent pas." : "");
  };

  const handleRegionSelect = (selectedRegionId: string) => {
    setRegion(selectedRegionId);
    console.log("ID de la région sélectionnée mis à jour:", selectedRegionId);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setRegionError("");

    if (!region) {
      setRegionError("La région est obligatoire.");
      return;
    }


    console.log("Valeur de la région envoyée :", region);

    if (!passwordError && !confirmPasswordError) {
      try {
        const response = await fetch("http://localhost:1337/api/db/create-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password, region }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Une erreur est survenue");
        }

        setSuccessMessage("Compte créé avec succès ! Redirection en cours...");
        setTimeout(() => {
          router.push("/log");
        }, 2000);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erreur inconnue");
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="flex flex-col justify-center md:flex-row h-[calc(100vh-4rem)]">
        <div className="hidden md:flex md:w-1/2 bg-gray-50 dark:bg-gray-800 items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Bienvenue chez XIP Telecom
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Commencez votre expérience XIP Telecom
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Création de compte
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Rejoignez notre communauté professionnelle
              </p>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

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
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Région
                </label>
                <ComboBoxResponsive onRegionSelect={handleRegionSelect} />


                {regionError && <p className="text-red-500 text-sm mt-1">{regionError}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  required
                />
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  required
                />
                {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
              </div>

              <button type="submit" className="w-full py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
                Créer mon compte
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}