"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface User {
  id: string;
  name: string;
  email: string;
  role: string; // "bdi", "directeur agence", "président"
  region : string;
}

interface AuthContextType {
  user: User | null;
  fetchUserProfile: () => Promise<void>;
  logout: () => void; // Ajout de la fonction logout
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Convertit le rôle (int) en texte
  const roleMapping: Record<number, string> = {
    0: "bdi",
    1: "directeur_agence",
    2: "president",
  };

  // Récupère le profil utilisateur
  const fetchUserProfile = async () => {
    const token = Cookies.get("token");

    if (!token) {
      console.warn("Aucun token trouvé dans les cookies.");
      return;
    }

    try {
      const response = await fetch("http://localhost:1337/api/db/user-profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (response.ok) {
        setUser({
          id: data.id,
          name: data.name,
          email: data.email,
          role: roleMapping[data.role] || "inconnu",
          region: data.region,
        });
      } else {
        console.error("Erreur de profil :", data.error);
      }
    } catch (err) {
      console.error("Erreur de connexion au serveur :", err);
    }
  };

  // Fonction de déconnexion
  const logout = async () => {
    try {
        const response = await fetch("http://localhost:1337/api/db/logout", {
            method: "POST",
            credentials: "include", // Nécessaire pour envoyer les cookies au serveur
        });

        if (response.ok) {
            setUser(null); // Supprime l'utilisateur du state
            Cookies.remove("token", { path: "/" });
            Cookies.remove("session_id", { path: "/" });
            console.log("Déconnexion réussie");
        } else {
            console.error("Erreur lors de la déconnexion");
        }
    } catch (err) {
        console.error("Erreur serveur :", err);
    }
};

  // Charge l'utilisateur au démarrage
  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, fetchUserProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser l'authentification
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth doit être utilisé dans un AuthProvider");
  return context;
};