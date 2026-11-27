
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { PortfolioHero } from "@/components/PortfolioPage/Hero";
import { StoryImage } from "@/components/StoryImage";

const transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

const sections = [
  {
    icon: "📕",
    number: "01",
    title: "Capas de livros",
    subtitle: "A primeira impressão de uma história.",
    description:
      "Cada capa é desenvolvida para traduzir a essência da obra, respeitando seu gênero, atmosfera e identidade.",
    images: [
      "/portfolio/capa-1.jpeg",
      "/portfolio/capa-2.png",
      "/portfolio/capa-3.png",
      "/portfolio/capa-4.jpeg",
    ],
    featured: true,
  },
  {
    icon: "🎨",
    number: "02",
    title: "Artes e ilustrações",
    subtitle: "A imaginação também merece forma.",
    description:
      "Criamos ilustrações, materiais promocionais, concept arts e elementos visuais que ampliam o universo de cada projeto.",
    images: [
      "/portfolio/arte-01.jpeg",
      "/portfolio/arte-02.jpeg",
      "/portfolio/arte-03.jpeg",
      "/portfolio/arte04.jpeg",
    ],
    featured: false,
  },
];

const steps = [
  {
    number: "01",
    title: "Conversa",
    icon: "💬",
    description: "Conhecemos suas ideias, referências e objetivos.",
  },
  {
    number: "02",
    title: "Planejamento",
    icon: "📋",
    description: "Estruturamos a narrativa e definimos os caminhos.",
  },
  {
    number: "03",
    title: "Escrita",
    icon: "✍️",
    description: "Damos forma à história preservando sua essência.",
  },
  {
    number: "04",
    title: "Revisão",
    icon: "🔍",
    description: "Aprimoramos o texto e refinamos os detalhes.",
  },
  {
    number: "05",
    title: "Entrega",
    icon: "📖",
    description: "Sua história ganha forma e está pronta para seguir.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf9f7] text-zinc-950 dark:bg-[#080808] dark:text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_10%,rgba(153,27,27,0.09),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_50%_10%,rgba(153,27,27,0.15),transparent_60%)]" />
      </div>

      {/* HERO */}
      <div className="relative z-10">
        <PortfolioHero />
      </div>

      {/* INTRODUÇÃO */}
      <section className="relative z-10 px-6 pb-20 pt-10">

        <motion.div
          {...reveal}
          transition={transition}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-red-700 dark:text-red-500">
            Nosso trabalho
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Cada detalhe conta
            <span className="block text-red-700 dark:text-red-500">
              uma história.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
            Por trás de cada obra existe uma identidade, uma ideia
            e alguém que sonhou em transformá-la em realidade.
            Conheça um pouco do que construímos.
          </p>
        </motion.div>

      </section>

      {/* GALERIAS */}
      <section
        id="portfolio-content"
        className="relative z-10 container mx-auto space-y-28 px-6 pb-28"
      >

        {sections.map((section, index) => (

          <motion.div
            key={section.number}
            {...reveal}
            transition={{
              ...transition,
              delay: 0.1,
            }}
            className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.5fr]"
          >

            {/* DESCRIÇÃO */}
            <div className="relative">

              <span className="text-sm font-bold tracking-[0.3em] text-red-700/60 dark:text-red-500/60">
                {section.number} / 02
              </span>

              <div className="mb-6 mt-6 text-5xl">
                {section.icon}
              </div>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                {section.title}
              </h2>

              <p className="mt-4 font-semibold text-red-700 dark:text-red-500">
                {section.subtitle}
              </p>

              <p className="mt-5 max-w-md leading-8 text-zinc-600 dark:text-zinc-400">
                {section.description}
              </p>

              <div className="mt-8 h-[2px] w-16 bg-red-700 dark:bg-red-500" />

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-zinc-400">
                Sonhos Carmesim
              </p>

            </div>

            {/* GALERIA */}
            <div className="grid grid-cols-2 gap-4 md:gap-5">

              {section.images.map((image, imageIndex) => (

                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ...transition,
                    delay: imageIndex * 0.1,
                  }}
                  className={`
                    group relative aspect-[3/4] overflow-hidden
                    rounded-2xl border border-zinc-200
                    bg-zinc-100 shadow-sm
                    dark:border-zinc-800 dark:bg-zinc-900
                    ${imageIndex === 1 || imageIndex === 2
                      ? "md:translate-y-8"
                      : ""}
                  `}
                >

                  {image === "/portfolio/capa-4.jpeg" ? (
                    <StoryImage />
                  ) : (
                    <Image
                      src={image}
                      alt={`${section.title} ${imageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute bottom-4 left-4 translate-y-3 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Sonhos Carmesim
                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        ))}

      </section>

      {/* GHOST WRITER */}
      <section className="relative z-10 border-y border-zinc-200 bg-white/60 py-28 dark:border-zinc-800 dark:bg-zinc-950/50">

        <div className="container mx-auto px-6">

          <motion.div
            {...reveal}
            transition={transition}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-red-700 dark:text-red-500">
              Sua ideia, nossa dedicação
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Ghost
              <span className="text-red-700 dark:text-red-500">
                {" "}Writer.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
              Você tem uma história para contar, mas precisa
              de ajuda para escrevê-la? Trabalhamos lado a lado
              com você para transformar suas ideias em uma narrativa
              completa, preservando sua voz e identidade.
            </p>

          </motion.div>

          {/* ETAPAS */}
          <div className="relative mt-20">

            <div className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-transparent via-red-700/40 to-transparent md:block" />

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">

              {steps.map((step, index) => (

                <motion.div
                  key={step.number}
                  {...reveal}
                  transition={{
                    ...transition,
                    delay: index * 0.1,
                  }}
                  className="relative text-center"
                >

                  <div className="relative z-10 mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-full border border-red-700/20 bg-[#faf9f7] text-3xl shadow-[0_0_30px_rgba(153,27,27,0.06)] dark:bg-[#111010]">
                    {step.icon}
                  </div>

                  <span className="mt-5 block text-xs font-bold tracking-[0.3em] text-red-700 dark:text-red-500">
                    ETAPA {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[190px] text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                    {step.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl border border-red-700/30 px-7 py-4 font-semibold text-red-700 transition-all hover:bg-red-700 hover:text-white dark:text-red-500"
            >
              Converse sobre seu projeto
              <span>→</span>
            </Link>
          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 px-6 py-28">

        <motion.div
          {...reveal}
          transition={transition}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-red-500/20 bg-gradient-to-br from-[#35090f] via-[#78151e] to-[#a51f29] px-8 py-20 text-center text-white shadow-[0_25px_80px_rgba(100,10,20,0.18)] md:px-16"
        >

          {/* DECORAÇÃO */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative z-10">

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-red-200">
              Sua história começa aqui
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              O próximo livro
              <span className="block text-red-200">
                pode ser o seu.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/75">
              Toda grande obra começou com uma ideia.
              Dê o primeiro passo para transformar a sua
              em algo que poderá alcançar muitas pessoas.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-9 py-4 font-bold text-red-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-50"
            >
              Vamos criar sua obra
              <span>→</span>
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}
