"use client";

import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import Link from "next/link";

const sections = [
  {
    icon: "📕",
    title: "Exemplares de Capa",
    description:
      "Capas desenvolvidas para diferentes gêneros, públicos e estilos literários.",
    images: [
      "/portfolio/capas/capa-1.jpg",
      "/portfolio/capas/capa-2.jpg",
      "/portfolio/capas/capa-3.jpg",
      "/portfolio/capas/capa-4.jpg",
    ],
  },

  {
    icon: "📖",
    title: "Diagramação",
    description:
      "Projeto gráfico, paginação e organização visual para uma experiência de leitura agradável.",
    images: [
      "/portfolio/diagramacao/1.jpg",
      "/portfolio/diagramacao/2.jpg",
      "/portfolio/diagramacao/3.jpg",
      "/portfolio/diagramacao/4.jpg",
    ],
  },

  {
    icon: "🏛️",
    title: "Editorial",
    description:
      "Planejamento editorial completo, estruturação de conteúdo e identidade da obra.",
    images: [
      "/portfolio/editorial/1.jpg",
      "/portfolio/editorial/2.jpg",
      "/portfolio/editorial/3.jpg",
      "/portfolio/editorial/4.jpg",
    ],
  },

  {
    icon: "🎨",
    title: "Artes",
    description:
      "Ilustrações, materiais promocionais, concept arts e elementos visuais exclusivos.",
    images: [
      "/portfolio/artes/1.jpg",
      "/portfolio/artes/2.jpg",
      "/portfolio/artes/3.jpg",
      "/portfolio/artes/4.jpg",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">

      <PortfolioHero />

      {/* PORTFÓLIO */}
      <section
        id="portfolio-content"
        className="container mx-auto px-6 pb-24"
      >
        <div className="space-y-10">

          {sections.map((section) => (
            <div
              key={section.title}
              className="
                grid
                lg:grid-cols-[300px_1fr]
                gap-6
                items-stretch
              "
            >
              {/* DESCRIÇÃO */}
              <div
                className="
                  rounded-3xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-white/60
                  dark:bg-zinc-900/40
                  backdrop-blur-sm
                  p-8
                "
              >
                <div className="text-4xl mb-4">
                  {section.icon}
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  {section.title}
                </h2>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* GALERIA */}
              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-4
                "
              >
                {section.images.map((image) => (
                  <div
                    key={image}
                    className="
                      aspect-[3/4]
                      rounded-2xl
                      overflow-hidden
                      border
                      border-zinc-200
                      dark:border-zinc-800
                      bg-zinc-100
                      dark:bg-zinc-900
                      hover:scale-[1.02]
                      transition-transform
                    "
                  >
                    {/* substituir pela imagem real */}
                    <div
                      className="
                        w-full
                        h-full
                        flex
                        items-center
                        justify-center
                        text-xs
                        opacity-50
                      "
                    >
                      {image}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* GHOST WRITER */}
      <section className="container mx-auto px-6 pb-24">
        <div
          className="
            rounded-[32px]
            border
            border-zinc-200
            dark:border-zinc-800
            p-10
          "
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Ghost Writer
            </h2>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Transformamos ideias em histórias completas,
              preservando sua essência, voz e identidade.
            </p>
          </div>

          <div
            className="
              mt-14
              grid
              md:grid-cols-5
              gap-6
            "
          >
            {[
              {
                title: "Conversa",
                icon: "💬",
              },
              {
                title: "Planejamento",
                icon: "📋",
              },
              {
                title: "Escrita",
                icon: "✍️",
              },
              {
                title: "Revisão",
                icon: "🔍",
              },
              {
                title: "Entrega",
                icon: "📖",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="
                  rounded-2xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  p-6
                  text-center
                "
              >
                <div className="text-4xl mb-4">
                  {step.icon}
                </div>

                <h3 className="font-semibold">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div
          className="
            max-w-6xl
            mx-auto
            rounded-[32px]
            bg-gradient-to-r
            from-red-900
            to-red-700
            text-white
            p-12
            text-center
          "
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Seu livro pode ser o próximo.
          </h2>

          <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
            Transformamos ideias em obras que permanecem.
            Vamos criar algo extraordinário juntos?
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              mt-8
              px-8
              py-4
              rounded-xl
              bg-white
              text-red-700
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            Publicar minha obra
          </Link>
        </div>
      </section>

    </main>
  );
}
