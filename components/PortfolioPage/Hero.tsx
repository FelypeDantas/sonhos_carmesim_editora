"use client";

import { motion, type Transition } from "framer-motion";

interface PortfolioHeroProps {
  title?: string;
  subtitle?: string;
}

export function PortfolioHero({
  title = "Obras que ganharam vida.",
  subtitle = "Conheça alguns exemplos de capas, projetos editoriais, diagramações, artes e serviços criativos produzidos pela Sonhos Carmesim.",
}: PortfolioHeroProps) {
  const transition: Transition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  };

  const stats = [
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

  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[700px]
            rounded-full
            bg-red-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_65%)]
          "
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-red-500/20
              bg-red-500/5
              text-red-600
              dark:text-red-400
              text-sm
              font-medium
              mb-8
            "
          >
            📚 Nosso Portfólio
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: 0.1,
            }}
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-[0.95]
              tracking-tight
            "
          >
            {title.split("ganharam").length > 1 ? (
              <>
                Obras que
                <span className="block text-red-600 dark:text-red-500">
                  ganharam vida.
                </span>
              </>
            ) : (
              title
            )}
          </motion.h1>

          {/* Texto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{
              ...transition,
              delay: 0.25,
            }}
            className="
              mt-8
              text-lg
              md:text-xl
              max-w-3xl
              mx-auto
              text-zinc-600
              dark:text-zinc-400
              leading-relaxed
            "
          >
            {subtitle}
          </motion.p>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: 0.4,
            }}
            className="
              mt-16
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-6
              max-w-3xl
              mx-auto
            "
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  rounded-2xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-white/40
                  dark:bg-zinc-900/30
                  backdrop-blur-sm
                  py-6
                  px-4
                "
              >
                <div
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    text-red-600
                    dark:text-red-500
                  "
                >
                  {stat.value}
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Scroll */}
          <motion.a
            href="#portfolio-content"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              inline-flex
              flex-col
              items-center
              mt-16
              gap-2

              text-sm
              tracking-wide

              text-zinc-500
              dark:text-zinc-400

              hover:text-red-500
              transition-colors
            "
          >
            <span>Explorar trabalhos</span>

            <span className="text-2xl">
              ⌄
            </span>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
