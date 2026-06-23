"use client";

import Image from "next/image";
import { motion, Transition } from "framer-motion";

import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Petals } from "@/components/petals";
import { ParticlesBG } from "@/components/particles-bg";
import { ThemeTransition } from "@/components/theme-transition";

export default function Home() {
const transition: Transition = {
duration: 1,
ease: [0.22, 1, 0.36, 1],
};

return ( <main className="ignore-system-dark relative min-h-screen overflow-x-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-700">

```
  {/* BACKGROUND */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <ParticlesBG />

    <div className="absolute inset-0 opacity-20 dark:opacity-40">
      <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.25),transparent)]" />
    </div>
  </div>

  {/* EFEITOS */}
  <Petals />
  <ThemeTransition />

  {/* NAVBAR */}
  <Navbar />

  {/* TOGGLE */}
  <div className="fixed right-6 top-24 z-50">
    <ThemeToggle />
  </div>

  {/* HERO */}
  <section className="relative z-10 min-h-screen flex items-center">
    <div className="container mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* CONTEÚDO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
          className="text-center lg:text-left"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-500/20
              bg-red-500/5
              px-4
              py-2
              text-sm
              font-medium
              mb-6
            "
          >
            🌹 Editora Independente
          </span>

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-red-500
              text-sm
              font-semibold
              mb-4
            "
          >
            Sonhos Carmesim
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
            "
          >
            Transformando
            <span
              className="
                block
                bg-gradient-to-r
                from-red-700
                via-red-500
                to-rose-400
                bg-clip-text
                text-transparent
              "
            >
              sonhos em livros.
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
            A Sonhos Carmesim nasceu para transformar
            manuscritos em obras, escritores em autores
            e histórias em legados que atravessam gerações.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            <button
              className="
                px-8
                py-4
                rounded-xl
                bg-red-600
                hover:bg-red-700
                text-white
                font-semibold
                transition-all
                shadow-[0_0_30px_rgba(220,38,38,0.35)]
                hover:scale-105
              "
            >
              Publicar minha obra
            </button>

            <button
              className="
                px-8
                py-4
                rounded-xl
                border
                border-zinc-300
                dark:border-zinc-700
                hover:bg-zinc-100
                dark:hover:bg-zinc-900
                transition-all
              "
            >
              Explorar catálogo
            </button>
          </div>

          {/* MÉTRICAS */}
          <div className="grid grid-cols-3 gap-6 mt-12 text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-bold text-red-500">+100</h3>
              <p className="text-sm opacity-70">
                Sonhos apoiados
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500">+50</h3>
              <p className="text-sm opacity-70">
                Autores
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500">∞</h3>
              <p className="text-sm opacity-70">
                Histórias
              </p>
            </div>
          </div>
        </motion.div>

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ...transition,
            delay: 0.3,
          }}
          className="relative flex justify-center"
        >
          <div
            className="
              absolute
              w-[350px]
              md:w-[500px]
              aspect-square
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
              w-[250px]
              md:w-[350px]
              lg:w-[450px]
              h-auto
              object-contain
              drop-shadow-[0_0_60px_rgba(220,38,38,0.35)]
            "
          />
        </motion.div>
      </div>

      {/* INDICADOR */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-sm
          opacity-60
          hidden md:block
        "
      >
        ↓ Descubra mais
      </motion.div>
    </div>
  </section>

  {/* DIFERENCIAIS */}
  <section className="relative z-10 py-24">
    <div className="container mx-auto px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">
          Por que escolher a
          <span className="text-red-500">
            {" "}Sonhos Carmesim?
          </span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
          Mais do que publicar livros, construímos pontes
          entre autores e leitores.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">

        <motion.div
          whileHover={{ y: -8 }}
          className="
            rounded-2xl
            border
            border-zinc-200/50
            dark:border-zinc-800
            bg-white/50
            dark:bg-zinc-950/40
            backdrop-blur-md
            p-8
          "
        >
          <div className="text-4xl mb-4">📖</div>

          <h3 className="font-bold text-xl mb-3">
            Publicação
          </h3>

          <p className="opacity-70">
            Transformamos manuscritos em obras prontas
            para alcançar leitores e deixar sua marca.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="
            rounded-2xl
            border
            border-zinc-200/50
            dark:border-zinc-800
            bg-white/50
            dark:bg-zinc-950/40
            backdrop-blur-md
            p-8
          "
        >
          <div className="text-4xl mb-4">🌹</div>

          <h3 className="font-bold text-xl mb-3">
            Comunidade
          </h3>

          <p className="opacity-70">
            Conectamos escritores, leitores e sonhadores
            apaixonados por literatura.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="
            rounded-2xl
            border
            border-zinc-200/50
            dark:border-zinc-800
            bg-white/50
            dark:bg-zinc-950/40
            backdrop-blur-md
            p-8
          "
        >
          <div className="text-4xl mb-4">✨</div>

          <h3 className="font-bold text-xl mb-3">
            Legado
          </h3>

          <p className="opacity-70">
            Cada livro publicado é uma história que
            continuará viva muito além de sua última página.
          </p>
        </motion.div>

      </div>
    </div>
  </section>

</main>
```

);
}
