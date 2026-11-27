
"use client";

import { motion, useReducedMotion } from "framer-motion";

interface PortfolioHeroProps {
  title?: string;
  subtitle?: string;
}

const STATS = [
  {
    value: "+50",
    label: "Artes Criadas",
  },
  {
    value: "+20",
    label: "Projetos Editoriais",
  },
  {
    value: "100%",
    label: "Personalizados",
  },
];

export function PortfolioHero({
  title = "Obras que ganharam vida.",
  subtitle = "Conheça alguns exemplos de capas, projetos editoriais, diagramações, artes e serviços criativos produzidos pela Sonhos Carmesim.",
}: PortfolioHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const words = title.split(" ");
  const highlight = "ganharam";
  const highlightIndex = words.findIndex(
    (word) => word.toLowerCase().replace(/[.,!?]/g, "") === highlight
  );

  const hasHighlight = highlightIndex !== -1;

  const renderTitle = () => {
    if (!hasHighlight) return title;

    const firstPart = words.slice(0, highlightIndex).join(" ");
    const highlightedPart = words.slice(highlightIndex).join(" ");

    return (
      <>
        {firstPart && <>{firstPart} </>}
        <span className="block text-red-600 dark:text-red-500">
          {highlightedPart}
        </span>
      </>
    );
  };

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
      {/* Aura de fundo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-red-500/10
            blur-[100px]
            md:h-[700px]
            md:w-[700px]
          "
        />

        <div className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_65%)]
        " />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-6">
        <div className="mx-auto max-w-5xl text-center">

          {/* Identificação */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="
              mb-8
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
              text-red-600
              dark:text-red-400
            "
          >
            <span aria-hidden="true">📚</span>
            Nosso Portfólio
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
            "
          >
            {renderTitle()}
          </motion.h1>

          {/* Descrição */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{
              ...transition,
              delay: shouldReduceMotion ? 0 : 0.25,
            }}
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-base
              leading-relaxed
              text-zinc-600
              dark:text-zinc-400
              sm:text-lg
              md:text-xl
            "
          >
            {subtitle}
          </motion.p>

          {/* Estatísticas */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
            className="
              mx-auto
              mt-14
              grid
              max-w-3xl
              grid-cols-1
              gap-4
              sm:grid-cols-3
              sm:gap-6
            "
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white/40
                  px-4
                  py-6
                  backdrop-blur-sm
                  transition-colors
                  hover:border-red-500/30
                  dark:border-zinc-800
                  dark:bg-zinc-900/30
                "
              >
                <div
                  className="
                    text-3xl
                    font-black
                    text-red-600
                    dark:text-red-500
                    md:text-4xl
                  "
                >
                  {stat.value}
                </div>

                <p className="
                  mt-2
                  text-sm
                  text-zinc-600
                  dark:text-zinc-400
                ">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Indicador de rolagem */}
          <motion.a
            href="#portfolio-content"
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, 10, 0] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="
              mt-14
              inline-flex
              flex-col
              items-center
              gap-2
              rounded-lg
              text-sm
              tracking-wide
              text-zinc-500
              transition-colors
              hover:text-red-500
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-red-500
              focus-visible:ring-offset-4
              dark:text-zinc-400
            "
          >
            <span>Explorar trabalhos</span>
            <span className="text-2xl" aria-hidden="true">
              ⌄
            </span>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
