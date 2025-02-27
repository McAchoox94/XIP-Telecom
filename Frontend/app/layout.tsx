import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/context/AuthContext";

const gotham = localFont({
  src: [
    {
      path: "./fonts/gotham-book-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gotham-bookitalic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-gotham",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "XIP-Telecom",
  description: "Bienvenue sur le site web de XIP-Telecom.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`!scroll-smooth ${gotham.variable}`}>
      <body className="antialiased font-gotham">
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <Toaster />
            <Navbar />
            {children}
            <Footer/>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}