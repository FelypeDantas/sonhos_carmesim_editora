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
    <main className="relative min-h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-700">

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
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">

        {/* 🌹 Logo como marca d'água */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <Image
            src="/logo.png"
            alt="Logo Sonhos Carmesim"
            width={420}
            height={420}
            priority
            className="
              object-contain
              blur-[2px]
              opacity-20
              dark:opacity-30
              transition-transform duration-[4000ms]
            "
          />
        </motion.div>

        {/* ✍️ TÍTULO */}
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...transition, duration: 1.2 }}
          className="
            relative
            text-4xl md:text-6xl lg:text-7xl
            font-bold tracking-widest
          "
        >
          SONHOS CARMESIM 🌹
        </motion.h1>

        {/* 🖋️ SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ ...transition, delay: 0.3 }}
          className="
            relative
            mt-4
            text-base md:text-lg lg:text-xl
            max-w-xl
          "
        >
          Escreva seu sonho com tinta carmesim.
        </motion.p>

        {/* ⚙️ CONTROLES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative mt-6"
        >
          <ThemeToggle />
        </motion.div>

        {/* 🌫️ leve fade inferior (cinematográfico) */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />

      </section>
    </main>
  );
}