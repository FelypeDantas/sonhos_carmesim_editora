"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Petals } from "@/components/petals";
import { ParticlesBG } from "@/components/particles-bg";
import { ThemeTransition } from "@/components/theme-transition";
import { Transition } from "framer-motion";

export default function Home() {
  const transition: Transition = {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <main className="ignore-system-dark relative min-h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-700">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBG />

        {/* aura vermelha */}
        <div className="absolute inset-0 opacity-20 dark:opacity-40">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.25),transparent)]" />
        </div>
      </div>

      {/* 🌹 EFEITOS */}
      <Petals />
      <ThemeTransition />

      {/* 🧭 NAVBAR */}
      <Navbar />

      {/* 🎬 HERO */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
      
          <div className="grid lg:grid-cols-2 gap-12 items-center">
      
            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 text-sm mb-6">
                🌹 Editora Independente
              </span>
      
              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-black
                  leading-tight
                "
              >
                Histórias que
                <span className="block text-red-500">
                  merecem existir.
                </span>
              </h1>
      
              <p
                className="
                  mt-6
                  text-lg
                  md:text-xl
                  max-w-2xl
                  text-zinc-600
                  dark:text-zinc-400
                "
              >
                A Sonhos Carmesim transforma manuscritos
                em livros, escritores em autores e sonhos
                em legados.
              </p>
      
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  className="
                    px-8 py-4
                    rounded-xl
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-semibold
                    transition
                  "
                >
                  Publicar minha obra
                </button>
      
                <button
                  className="
                    px-8 py-4
                    rounded-xl
                    border
                    border-zinc-300
                    dark:border-zinc-700
                    hover:bg-zinc-100
                    dark:hover:bg-zinc-900
                    transition
                  "
                >
                  Explorar catálogo
                </button>
              </div>
            </motion.div>
      
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div
                className="
                  absolute
                  w-[500px]
                  h-[500px]
                  rounded-full
                  bg-red-500/10
                  blur-3xl
                "
              />
      
              <Image
                src="/logo.png"
                alt="Sonhos Carmesim"
                width={450}
                height={450}
                priority
                className="
                  relative
                  object-contain
                  drop-shadow-[0_0_60px_rgba(220,38,38,0.35)]
                "
              />
            </motion.div>
      
          </div>
      
          {/* DIFERENCIAIS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="
              grid
              md:grid-cols-3
              gap-6
              mt-24
            "
          >
            <div className="rounded-2xl border p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold mb-2">
                Publicação
              </h3>
              <p className="text-sm opacity-70">
                Transformamos ideias em obras prontas
                para alcançar leitores.
              </p>
            </div>
      
            <div className="rounded-2xl border p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="font-bold mb-2">
                Comunidade
              </h3>
              <p className="text-sm opacity-70">
                Conectamos autores, leitores e amantes
                da literatura.
              </p>
            </div>
      
            <div className="rounded-2xl border p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold mb-2">
                Legado
              </h3>
              <p className="text-sm opacity-70">
                Histórias não são apenas escritas.
                Elas permanecem.
              </p>
            </div>
          </motion.div>
      
        </div>
      </section>
    </main>
  );
}
