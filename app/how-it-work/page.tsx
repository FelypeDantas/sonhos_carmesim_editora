
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  ClipboardList,
  PenTool,
  SearchCheck,
  BookOpen,
  CalendarDays,
  Wallet,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Conversa",
    text: "Conhecemos você, sua obra e seus objetivos. Queremos entender o que imaginou para seu livro.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Planejamento",
    text: "Definimos os serviços necessários, organizamos as etapas e apresentamos uma proposta personalizada.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Produção",
    text: "Começamos a dar forma ao projeto, trabalhando nos elementos editoriais e visuais contratados.",
  },
  {
    number: "04",
    icon: SearchCheck,
    title: "Revisão",
    text: "Conferimos os materiais produzidos e realizamos os ajustes previstos no projeto.",
  },
  {
    number: "05",
    icon: BookOpen,
    title: "Entrega",
    text: "Você recebe os materiais finais conforme o escopo contratado, pronto para seguir com os próximos passos da publicação.",
  },
];

const differentials = [
  {
    title: "Atendimento próximo",
    description:
      "Você não é apenas mais um projeto. Valorizamos a comunicação e o acompanhamento.",
  },
  {
    title: "Liberdade criativa",
    description:
      "Cada livro possui sua identidade. Buscamos respeitar a essência de cada autor.",
  },
  {
    title: "Propostas acessíveis",
    description:
      "Trabalhamos com valores pensados para tornar a produção editorial mais acessível.",
  },
  {
    title: "Processo transparente",
    description:
      "Explicamos as etapas, os serviços e os custos antes de iniciar o trabalho.",
  },
];

export default function HowItWorksPage() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-900 dark:bg-black dark:text-white">

      {/* HERO */}
      <section className="relative isolate overflow-hidden pb-24 pt-36">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[120px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-red-900/10 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
                <Sparkles size={15} />
                COMO FUNCIONA
              </div>

              <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Seu livro começa com uma
                <span className="mt-2 block text-red-600 dark:text-red-500">
                  ideia.
                </span>
                Nós ajudamos a dar forma a ela.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Da primeira conversa à finalização do projeto editorial,
                acompanhamos sua jornada com atenção, transparência e
                serviços pensados para as necessidades da sua obra.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-red-700 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-red-800"
                >
                  Quero publicar meu livro
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="#etapas"
                  className="inline-flex items-center rounded-xl border border-zinc-300 px-7 py-4 font-semibold transition-colors hover:border-red-500 hover:text-red-600 dark:border-zinc-700 dark:hover:text-red-400"
                >
                  Conhecer as etapas
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 0.9, rotate: 3 }
              }
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex items-center justify-center"
            >
              <div
                className="absolute h-[380px] w-[380px] rounded-full bg-red-600/10 blur-[90px] md:h-[500px] md:w-[500px]"
                aria-hidden="true"
              />

              <div className="relative flex aspect-square w-full max-w-[430px] items-center justify-center rounded-[3rem] border border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent p-10">
                <Image
                  src="/logo.png"
                  alt="Identidade visual da Sonhos Carmesim"
                  width={420}
                  height={420}
                  priority
                  className="relative z-10 h-auto w-full object-contain drop-shadow-2xl"
                />

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-red-500/20 bg-white/80 px-5 py-2 text-sm font-medium text-red-700 shadow-lg backdrop-blur-md dark:bg-zinc-950/80 dark:text-red-400">
                  Histórias merecem existir.
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section id="etapas" className="scroll-mt-28 py-24">
        <div className="container mx-auto px-6">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-400">
              O caminho da sua obra
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Cinco etapas.
              <span className="block text-red-600 dark:text-red-500">
                Uma grande história.
              </span>
            </h2>

            <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Cada projeto tem suas particularidades, mas nosso processo
              segue uma estrutura para manter tudo organizado e transparente.
            </p>
          </motion.div>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -8 }
                  }
                  className="group relative rounded-3xl border border-zinc-200 bg-white/60 p-7 backdrop-blur-md transition-colors hover:border-red-500/40 dark:border-zinc-800 dark:bg-zinc-900/30"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white dark:text-red-400">
                      <Icon size={25} />
                    </div>

                    <span className="text-3xl font-black text-zinc-200 dark:text-zinc-800">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRAZOS E ORÇAMENTO */}
      <section className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">

            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[2rem] border border-zinc-200 bg-white p-8 md:p-10 dark:border-zinc-800 dark:bg-black"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400">
                <CalendarDays size={27} />
              </div>

              <h3 className="text-3xl font-bold">
                E quanto tempo leva?
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                O prazo depende da complexidade do projeto, do volume
                de trabalho e dos serviços escolhidos.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  ["Projetos simples", "15 a 30 dias"],
                  ["Projetos intermediários", "30 a 60 dias"],
                  ["Projetos completos", "60 a 120 dias"],
                ].map(([name, time]) => (
                  <div
                    key={name}
                    className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-800"
                  >
                    <span className="font-medium">{name}</span>
                    <span className="font-semibold text-red-600 dark:text-red-400">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-zinc-500">
                Os prazos são estimativas e podem variar conforme
                o escopo, a disponibilidade e o andamento de cada projeto.
              </p>
            </motion.article>

            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[2rem] border border-zinc-200 bg-white p-8 md:p-10 dark:border-zinc-800 dark:bg-black"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400">
                <Wallet size={27} />
              </div>

              <h3 className="text-3xl font-bold">
                E quanto custa?
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                Não acreditamos em soluções engessadas. O orçamento
                é elaborado considerando o que sua obra realmente precisa.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Extensão e características do manuscrito",
                  "Objetivos da publicação",
                  "Serviços editoriais desejados",
                  "Complexidade e prazo do projeto",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-red-600 dark:text-red-400"
                    />
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-red-700 dark:text-red-400">
                Você conhece a proposta antes de decidir seguir conosco.
              </p>
            </motion.article>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-400">
              Nossa essência
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Publicar pode ser
              <span className="block text-red-600 dark:text-red-500">
                mais acessível.
              </span>
            </h2>

            <p className="mt-5 text-zinc-600 dark:text-zinc-400">
              Queremos aproximar autores do universo editorial,
              oferecendo uma experiência acolhedora e transparente.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item, index) => (
              <motion.article
                key={item.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className="rounded-3xl border border-zinc-200 p-7 transition-colors hover:border-red-500/40 dark:border-zinc-800"
              >
                <div className="mb-6 text-3xl text-red-600 dark:text-red-400">
                  <Sparkles size={28} />
                </div>

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-24">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-red-950 via-red-800 to-red-700 px-7 py-16 text-center text-white md:px-16 md:py-20"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <Sparkles className="mx-auto mb-6 text-red-200" size={32} />

            <h2 className="text-4xl font-black md:text-6xl">
              Sua história merece existir.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-red-100">
              Toda grande obra começa com alguém disposto a acreditar
              nela. Que tal dar o primeiro passo?
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-red-800 transition-all hover:-translate-y-1 hover:bg-red-50"
            >
              Conversar com a editora
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
