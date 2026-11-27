
import "./globals.css";

import type { ReactNode } from "react";

import { AppThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Petals } from "@/components/petals";
import { ParticlesBG } from "@/components/particles-bg";
import PageTransition from "@/components/pageTransition";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={playfair.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden antialiased">

        <AppThemeProvider>

          {/* FUNDO GLOBAL */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              fixed
              inset-0
              z-0
              overflow-hidden
            "
          >
            <ParticlesBG />
          </div>

          {/* ELEMENTOS DECORATIVOS */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              fixed
              inset-0
              z-[1]
              overflow-hidden
            "
          >
            <Petals />
          </div>

          {/* NAVEGAÇÃO */}
          <header className="relative z-50">
            <Navbar />
          </header>

          {/* CONTEÚDO */}
          <div className="relative z-10">
            <PageTransition>
              <main className="min-h-screen pt-24">
                {children}
              </main>
            </PageTransition>
          </div>

        </AppThemeProvider>

      </body>
    </html>
  );
}
