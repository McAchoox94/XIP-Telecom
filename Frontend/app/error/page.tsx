"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // On utilise `window` seulement côté client
    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get("code");
    const message = urlSearchParams.get("error");

    setErrorCode(code);
    setErrorMessage(message);
  }, []); // Ce code sera exécuté une fois que le composant est monté côté client

  return (
    <div className="flex flex-col gap-4 items-center justify-center text-center min-h-screen">
      <h1 className="text-5xl font-bold text-destructive">
        ERREUR {errorCode || "Inconnue"}
      </h1>
      {errorMessage && <p className="text-lg">{errorMessage}</p>}
      <Button
        className=""
        variant="outline"
        onClick={() => window.location.href = '/'} // Retour à l'accueil
      >
        Retourner à l&apos;accueil
      </Button>
    </div>
  );
}