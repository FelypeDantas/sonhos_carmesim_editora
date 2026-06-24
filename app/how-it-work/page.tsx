"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-600 font-medium tracking-widest uppercase">
                Como Funciona
              </span>

              <h1 className="mt-4 text-5xl md:text-6xl font-black leading-tight">
                Transformamos
                <span className="block text-red-600">
                  ideias em livros.
                </span>
              </h1>

              <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                Da primeira conversa até a publicação,
                acompanhamos cada etapa para transformar
                seu manuscrito em uma obra pronta para
                alcançar leitores.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    px-8
                    py-4
                    rounded-xl
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-semibold
                    transition-all
                    hover:scale-105
                  "
                >
                  Publicar minha obra
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center"
            >
              <div className="absolute w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />

              <Image
                src="/logo.png"
                alt="Sonhos Carmesim"
                width={420}
                height={420}
                className="relative"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Sua jornada como autor
            </h2>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Cinco etapas para transformar sua história
              em um livro publicado.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              {
                number: "01",
                icon: "💬",
                title: "Conversa",
                text: "Conhecemos sua obra, seus objetivos e entendemos como podemos ajudar."
              },
              {
                number: "02",
                icon: "📋",
                title: "Planejamento",
                text: "Definimos cronograma, serviços necessários e próximos passos."
              },
              {
                number: "03",
                icon: "✒️",
                title: "Produção",
                text: "Diagramação, preparação textual e construção visual da obra."
              },
              {
                number: "04",
                icon: "🔍",
                title: "Revisão",
                text: "Ajustes finais para garantir qualidade, clareza e consistência."
              },
              {
                number: "05",
                icon: "📖",
                title: "Publicação",
                text: "Seu livro fica pronto para impressão, distribuição ou lançamento."
              },
            ].map((step) => (
              <motion.div
                key={step.number}
                whileHover={{ y: -6 }}
                className="
                  rounded-3xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  p-6
                  bg-white/50
                  dark:bg-zinc-900/30
                  backdrop-blur
                "
              >
                <div className="text-4xl">
                  {step.icon}
                </div>

                <span className="text-red-600 text-sm font-bold">
                  {step.number}
                </span>

                <h3 className="mt-2 font-bold text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PRAZOS E ORÇAMENTO */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-8">

            <div
              className="
                rounded-3xl
                border
                border-zinc-200
                dark:border-zinc-800
                p-8
              "
            >
              <h3 className="text-3xl font-bold mb-6">
                📅 Prazos
              </h3>

              <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <li>Projetos simples: 15 a 30 dias</li>
                <li>Projetos intermediários: 30 a 60 dias</li>
                <li>Projetos completos: 60 a 120 dias</li>
              </ul>

              <p className="mt-6 text-sm opacity-70">
                O cronograma varia conforme o tamanho da obra
                e os serviços contratados.
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-zinc-200
                dark:border-zinc-800
                p-8
              "
            >
              <h3 className="text-3xl font-bold mb-6">
                💰 Orçamento Personalizado
              </h3>

              <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <li>Quantidade de páginas</li>
                <li>Objetivos da publicação</li>
                <li>Serviços desejados</li>
                <li>Prazo pretendido</li>
              </ul>

              <p className="mt-6">
                Cada obra é única. Por isso elaboramos
                propostas personalizadas para cada autor.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Por que publicar conosco?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Atendimento próximo",
              "Equipe apaixonada por literatura",
              "Projeto personalizado",
              "Acompanhamento completo",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  p-6
                  text-center
                "
              >
                <div className="text-3xl mb-4">
                  🌹
                </div>

                <p>{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6">
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
            Sua história merece existir.
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Cada grande livro começou com uma ideia.
            Vamos transformar a sua?
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
            Falar com a Editora
          </Link>
        </div>
      </section>

    </main>
  );
}