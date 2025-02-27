import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose"; // Utilise 'jose' pour la vérification du token

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    // Redirige vers l'erreur si le token est manquant avec un code 401
    return NextResponse.redirect(new URL("/error?code=401&error=Merci de vous connecter pour accéder à cette ressource.", req.url));
  }

  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    const userRole = (payload as { role: number }).role;

    if (![1, 2].includes(userRole)) {
      // Redirige vers l'erreur si le rôle est invalide avec un code 403
      return NextResponse.redirect(new URL("/error?code=403&error=Accès refusé: Rôle incorrect", req.url));
    }
  } catch (err) {
    console.error("Erreur de décodage du token:", err);
    // Redirige vers l'erreur en cas de problème interne avec un code 500
    return NextResponse.redirect(new URL("/error?code=500&error=Erreur réseau", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/validation-bdi", // Applique le middleware uniquement sur cette route
};