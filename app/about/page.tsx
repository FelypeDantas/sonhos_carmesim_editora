"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Transition, Variants } from "framer-motion";

export default function AboutPage() {
  const transition: Transition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  };

  // 🎭 padrão de animação reutilizável
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition },
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const pillars = [
    {
      title: "Missão",
      text: "Ajudar autores a desenvolverem suas histórias com clareza, estrutura e consistência, transformando ideias em livros completos e prontos para publicação.",
    },
    {
      title: "Visão",
      text: "Ser referência em acompanhamento literário e desenvolvimento de autores, oferecendo não apenas serviços editoriais, mas um processo guiado que torne a escrita mais acessível, estratégica e realizável.",
    },
    {
      title: "Essência",
      text: "Aqui cada autor é uma centelha única — e cada história, um universo em construção. Valorizamos a criatividade individual, guiada com clareza, estrutura e presença real em cada etapa.",
    },
  ];

  return (
    <main className="min-h-screen transition-colors duration-700">

      {/* 🎬 HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">

        {/* 🌄 imagem */}
        <div
          className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center scale-105 opacity-40"
          aria-hidden="true"
        />

        {/* 🌑 overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest">
            SONHOS CARMESIM
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/70">
            Onde histórias florescem na escuridão e cada palavra carrega um segredo.
          </p>
        </motion.div>
      </section>

      {/* 📖 SOBRE */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 max-w-5xl mx-auto text-center space-y-6"
      >
        <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-semibold">
          Sobre Nós
        </motion.h2>

        <motion.p variants={fadeUp} className="text-[color:var(--foreground)]/70 leading-relaxed text-base md:text-lg">
          A Sonhos Carmesim nasceu para ajudar ideias a se tornarem livros completos.
          Somos uma editora focada no desenvolvimento de autores, oferecendo acompanhamento próximo e personalizado em cada etapa da escrita. Trabalhamos com quem está começando e também com quem já iniciou um projeto, mas precisa de direção para avançar.
          Acreditamos que escrever não precisa ser um processo solitário. Com orientação certa, é possível transformar uma ideia em uma obra estruturada, consistente e pronta para publicação.
        </motion.p>

        <motion.p variants={fadeUp} className="text-[color:var(--foreground)]/70 leading-relaxed text-base md:text-lg">
          Do encontro de três mulheres que compartilharam o sonho de publicar — e que
          enfrentaram a dura realidade do setor editorial como obstáculo — nasceu o grupo
          Sonhos Carmesim.
          Entre os autores que nos procuram, o talento quase nunca é o problema, mas sim a falta
          de conhecimento sobre o processo editorial. É justamente nesse ponto que atuamos:
          orientando, esclarecendo e guiando cada escritor ao longo do caminho.
          Hoje, somos uma editora independente especializada em transformar ideias, rascunhos e
          projetos engavetados em livros prontos para publicação.
        </motion.p>
      </motion.section>

      {/* 🌹 DIVIDER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      {/* 👩‍🎨 COLABORADORAS */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center space-y-10">

          <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-semibold">
            Quem Constrói a Sonhos Carmesim?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD */}
            <motion.a
              href="https://cartao-visitas-duda-benjamin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="
          relative p-6 rounded-xl border
          border-black/10 dark:border-white/10
          backdrop-blur-sm
          overflow-hidden
          group text-left
        "
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-900/20 via-transparent to-transparent" />

              <h3 className="relative z-10 text-lg font-semibold">
                Maria Eduarda Benjamin Batista
              </h3>

              <p className="relative z-10 mt-2 text-sm text-[color:var(--foreground)]/60 leading-relaxed">
                Atua na interseção entre técnica e arte, unindo precisão e criatividade para dar forma às ideias.
                Sua visão transita entre o digital e o ambiental, trazendo profundidade estética e consciência aos projetos.
              </p>

              <div className="relative z-10 mt-4 flex flex-wrap gap-2 text-xs">
                {[
                  "Segurança do Trabalho",
                  "Design Gráfico",
                  "Animação",
                  "Ilustração Digital",
                  "Audiovisual",
                  "Modelagem 3D",
                  "Ecologia",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.a>

            <motion.a
              href="https://cartao-visitas-elim-nascimento.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="
    relative p-6 rounded-xl border
    border-black/10 dark:border-white/10
    backdrop-blur-sm
    overflow-hidden
    group text-left
  "
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-900/20 via-transparent to-transparent" />

              <h3 className="relative z-10 text-lg font-semibold">
                Elim Cardoso Nascimento
              </h3>

              <p className="relative z-10 mt-2 text-sm text-[color:var(--foreground)]/60 leading-relaxed">
                Entre palavras e mente, constrói pontes entre o que é sentido e o que pode ser escrito.
                Sua atuação une linguagem, ensino e cognição, trazendo profundidade, clareza e intenção
                para cada texto desenvolvido.
              </p>

              <div className="relative z-10 mt-4 flex flex-wrap gap-2 text-xs">
                {[
                  "Letras",
                  "Pedagogia",
                  "Neuropsicopedagogia",
                  "Escrita Criativa",
                  "Revisão Textual",
                  "Psicolinguística",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.a>

            <motion.a
              href="https://cartao-visitas-samanta-alves.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="
    relative p-6 rounded-xl border
    border-black/10 dark:border-white/10
    backdrop-blur-sm
    overflow-hidden
    group text-left
  "
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-900/20 via-transparent to-transparent" />

              <h3 className="relative z-10 text-lg font-semibold">
                Samanta Natalir de Souza Alves
              </h3>

              <p className="relative z-10 mt-2 text-sm text-[color:var(--foreground)]/60 leading-relaxed">
                Entre números, ciência e organização, transforma ideias em estruturas viáveis.
                Sua atuação conecta sensibilidade humana com lógica e gestão, garantindo que
                cada projeto não apenas exista, mas se sustente e evolua.
              </p>

              <div className="relative z-10 mt-4 flex flex-wrap gap-2 text-xs">
                {[
                  "Técnica de Enfermagem",
                  "Gestão Financeira",
                  "Fluxo de Caixa",
                  "Diagramação",
                  "Biomedicina (em curso)",
                  "Ciência da Computação (em curso)",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.a>

          </div>
        </div>
      </motion.section>

      {/* 🌹 DIVIDER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      {/* 🧠 PILARES */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          {pillars.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="
                relative p-6 rounded-xl border
                border-black/10 dark:border-white/10
                backdrop-blur-sm
                overflow-hidden
                group
              "
            >
              {/* 🌫️ glow sutil */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-900/20 via-transparent to-transparent" />

              <h3 className="relative z-10 text-lg md:text-xl font-semibold">
                {item.title}
              </h3>

              <p className="relative z-10 mt-2 text-[color:var(--foreground)]/60">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* 🌹 DIVIDER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      {/* ORÇAMENTO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 max-w-4xl mx-auto text-center space-y-4"
      >
        <h2 className="text-2xl md:text-4xl font-semibold">
          Quer transformar sua ideia em um livro?
        </h2>

        <p className="text-[color:var(--foreground)]/70 leading-relaxed text-base md:text-lg">
          Entre em contato para um orçamento personalizado. Estamos aqui para ajudar a dar vida à sua história.
        </p>
      </motion.section>

      {/* 🌹 DIVIDER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />


      {/* ✍️ AUTOR */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 max-w-4xl mx-auto text-center space-y-4"
      >
        <h2 className="text-2xl md:text-4xl font-semibold">
          O Criador
        </h2>

        <p className="text-[color:var(--foreground)]/70 leading-relaxed text-base md:text-lg">
          Por trás do SONHOS CARMESIM existem 3 mentes criativas que transformam ideias em mundos.
          Cada história nasce de um desejo de explorar o desconhecido e dar vida
          ao que antes era apenas imaginação.
        </p>
      </motion.section>

      {/* 🎯 CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <h2 className="text-xl md:text-3xl mb-6 font-semibold">
          Pronto para entrar nesse universo?
        </h2>

        <Link
          href="https://www.instagram.com/sonhoscarmesimeditorial/"
          className="
            group relative inline-block px-8 py-3 rounded-lg border
            border-black dark:border-white
            overflow-hidden
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* ✨ efeito de luz */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <span className="block w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </span>

          <span className="relative z-10 transition-colors duration-300 group-hover:text-red-500">
            Siga-nos no Instagram
          </span>
        </Link>
      </motion.section>

    </main>
  );
}