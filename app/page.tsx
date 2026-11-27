
"use client";

import Image from "next/image";
import { motion, Transition } from "framer-motion";
import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { Petals } from "@/components/petals";
import { ParticlesBG } from "@/components/particles-bg";
import { ThemeTransition } from "@/components/theme-transition";

const transition: Transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition,
};

const differentials = [
  {
    icon: "📖",
    number: "01",
    title: "Publicação",
    description:
      "Transformamos manuscritos em livros, oferecendo aos escritores caminhos acessíveis para tirar seus projetos do papel.",
    link: "/contact",
    label: "Publique sua obra",
  },
  {
    icon: "🌹",
    number: "02",
    title: "Comunidade",
    description:
      "Criamos conexões entre autores e leitores, incentivando a troca de experiências, feedbacks e crescimento coletivo.",
    link: "/portfolio",
    label: "Conheça nossos projetos",
  },
  {
    icon: "✨",
    number: "03",
    title: "Desenvolvimento",
    description:
      "Acreditamos que ninguém precisa construir sua trajetória literária sozinho. Incentivamos talentos e novas possibilidades.",
    link: "/contact",
    label: "Faça parte",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf9f7] text-zinc-950 transition-colors duration-700 dark:bg-[#080808] dark:text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <ParticlesBG />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(153,27,27,0.09),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_20%,rgba(153,27,27,0.16),transparent_65%)]" />

        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] bg-[url('/noise.png')]" />
      </div>

      <Petals />
      <ThemeTransition />
      <Navbar />

      {/* HERO */}
      <section className="relative z-10 flex min-h-[95vh] items-center py-28 lg:py-20">

        <div className="container mx-auto px-6">

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
              className="text-center lg:text-left"
            >

              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-red-700/20 bg-red-700/[0.04] px-5 py-2.5 text-sm">
                <span className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
                <span className="tracking-wide">
                  Editora independente • Comunidade literária
                </span>
              </div>

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.5em] text-red-700 dark:text-red-500">
                SONHOS CARMESIM
              </p>

              <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.5rem]">

                Histórias que
                <span className="block bg-gradient-to-r from-red-800 via-red-600 to-rose-400 bg-clip-text text-transparent">
                  merecem existir.
                </span>

              </h1>

              <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-400 md:text-lg lg:mx-0">
                Acreditamos que toda história merece a oportunidade
                de ganhar vida. Criamos caminhos para escritores
                transformarem seus sonhos em livros e encontrarem
                pessoas que valorizem suas palavras.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

                <Link
                  href="/contact"
                  className="group rounded-xl bg-red-700 px-8 py-4 text-center font-semibold text-white shadow-[0_10px_35px_rgba(185,28,28,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-[0_15px_40px_rgba(185,28,28,0.35)]"
                >
                  Publique sua história
                  <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/portfolio"
                  className="rounded-xl border border-zinc-300 px-8 py-4 text-center font-semibold transition-all duration-300 hover:border-red-600 hover:bg-red-600/5 dark:border-zinc-800 dark:hover:border-red-500"
                >
                  Conheça nossos livros
                </Link>

              </div>

              {/* INDICADORES */}
              <div className="mt-16 grid grid-cols-3 gap-5 border-t border-zinc-200 pt-8 dark:border-zinc-800">

                <div>
                  <h3 className="text-3xl font-black text-red-700 dark:text-red-500">
                    +100
                  </h3>
                  <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
                    Sonhos apoiados
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-red-700 dark:text-red-500">
                    +7
                  </h3>
                  <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
                    Autores
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-red-700 dark:text-red-500">
                    ∞
                  </h3>
                  <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
                    Possibilidades
                  </p>
                </div>

              </div>

            </motion.div>

            {/* IDENTIDADE VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ ...transition, delay: 0.2 }}
              className="relative mx-auto flex w-full max-w-[520px] items-center justify-center"
            >

              <div className="absolute aspect-square w-[85%] rounded-full bg-red-700/10 blur-[90px]" />

              <div className="absolute aspect-square w-[78%] rounded-full border border-red-700/10" />

              <div className="absolute aspect-square w-[65%] rounded-full border border-red-700/10" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/logo.png"
                  alt="Logo da Sonhos Carmesim"
                  width={550}
                  height={550}
                  priority
                  className="h-auto w-[280px] object-contain drop-shadow-[0_0_55px_rgba(185,28,28,0.3)] sm:w-[380px] lg:w-[470px]"
                />
              </motion.div>

            </motion.div>

          </div>

              <div className="absolute bottom-[8%] left-[5%] hidden rounded-xl border border-red-700/20 bg-white/70 px-5 py-3 shadow-xl backdrop-blur-xl dark:bg-zinc-950/70 sm:block">
                <p className="text-xs uppercase tracking-[0.2em] text-red-600">
                   Nossa essência
                </p>
                 <p className="mt-1 text-sm font-semibold">
                   Sonhos não têm limites.
                 </p>
              </div>

          {/* SCROLL */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-zinc-400 md:flex"
          >
            <span>DESCUBRA MAIS</span>
            <span className="text-lg">↓</span>
          </motion.div>

        </div>

      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="relative z-10 py-28">

        <div className="container mx-auto px-6">

          <motion.div
            {...reveal}
            className="mx-auto mb-20 max-w-2xl text-center"
          >

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-red-600">
              O que nos move
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Muito além de
              <span className="text-red-600"> publicar livros.</span>
            </h2>

            <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
              Queremos construir um ambiente onde a literatura
              seja o ponto de partida para conexões, oportunidades
              e crescimento.
            </p>

          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">

            {differentials.map((item, index) => (

              <motion.div
                key={item.number}
                {...reveal}
                transition={{ ...transition, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/60 p-8 backdrop-blur-xl transition-colors duration-300 hover:border-red-700/40 dark:border-zinc-800 dark:bg-zinc-950/50"
              >

                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-red-700/5 blur-3xl transition-all group-hover:bg-red-700/15" />

                <div className="relative">

                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-4xl">
                      {item.icon}
                    </span>

                    <span className="text-sm font-bold tracking-widest text-red-600/60">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="min-h-[100px] leading-7 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>

                  <Link
                    href={item.link}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-all group-hover:gap-4 dark:text-red-500"
                  >
                    {item.label}
                    <span>→</span>
                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* MANIFESTO */}
      <section className="relative z-10 overflow-hidden border-y border-red-900/10 bg-red-950/[0.03] py-28 dark:bg-red-950/10">

        <div className="container mx-auto px-6">

          <motion.div
            {...reveal}
            className="mx-auto max-w-4xl text-center"
          >

            <span className="text-5xl text-red-600">“</span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Não queremos apenas
              <span className="text-red-600"> publicar histórias.</span>
              <br />
              Queremos ajudar a escrevê-las.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
              Cada escritor carrega um universo dentro de si.
              Nosso propósito é ajudar esses universos a encontrarem
              espaço, leitores e novas possibilidades.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-red-700/40 px-8 py-4 font-semibold text-red-700 transition-all hover:bg-red-700 hover:text-white dark:text-red-500"
              >
                Faça parte dessa história
                <span>→</span>
              </Link>
            </div>

          </motion.div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-center text-sm text-zinc-500 md:flex-row md:text-left">

          <p>
            © {new Date().getFullYear()} Sonhos Carmesim.
            Todos os direitos reservados.
          </p>

          <p className="tracking-widest uppercase text-xs">
            Feito para quem tem histórias a contar.
          </p>

        </div>
      </footer>

    </main>
  );
}
