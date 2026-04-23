"use client";

import "./globals.css";
import { AppThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Petals } from "@/components/petals";
import { ParticlesBG } from "@/components/particles-bg";
import PageTransition from "@/components/pageTransition";

import { Playfair_Display } from "next/font/google";

// 🔤 Fonte base (corpo)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={playfair.variable}
      suppressHydrationWarning
    >
      <body className="antialiased overflow-x-hidden">

        <AppThemeProvider>

          {/* 🌌 CAMADA DE FUNDO */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <ParticlesBG />
          </div>

          {/* 🌹 CAMADA DE EFEITOS */}
          <div className="relative z-0">
            <Petals />
          </div>

          {/* 🧭 NAVEGAÇÃO */}
          <header className="relative z-20">
            <Navbar />
          </header>

          {/* 📖 CONTEÚDO PRINCIPAL */}
          <PageTransition>
            <main className="relative z-10 pt-24 min-h-screen">
              {children}
            </main>
          </PageTransition>

        </AppThemeProvider>
      </body>
    </html>
  );
}