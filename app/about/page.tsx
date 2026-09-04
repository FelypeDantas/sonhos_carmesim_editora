"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Transition, type Variants } from "framer-motion";

const transition: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition,
  },
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
    text: "Aqui cada autor é uma centelha única, e cada história, um universo em construção. Valorizamos a criatividade individual, guiada com clareza, estrutura e presença real em cada etapa.",
  },
];

const team = [
  {
    name: "Maria Eduarda Benjamin Batista",
    image: "/equipe/duda.jpeg",
    href: "https://cartao-visitas-duda-benjamin.vercel.app/",
    description:
      "Atua na interseção entre técnica e arte, unindo precisão e criatividade para dar forma às ideias. Sua visão transita entre o digital e o ambiental, trazendo profundidade estética e consciência aos projetos.",
    skills: [
      "Segurança do Trabalho",
      "Design Gráfico",
      "Animação",
      "Ilustração Digital",
      "Audiovisual",
      "Modelagem 3D",
      "Ecologia",
    ],
  },
  {
    name: "Elim Cardoso Nascimento",
    image: "/equipe/elim.jpeg",
    href: "https://cartao-visitas-elim-nascimento.vercel.app/",
    description:
      "Entre palavras e mente, constrói pontes entre o que é sentido e o que pode ser escrito. Sua atuação une linguagem, ensino e cognição, trazendo profundidade, clareza e intenção para cada texto desenvolvido.",
    skills: [
      "Letras",
      "Pedagogia",
      "Neuropsicopedagogia",
      "Escrita Criativa",
      "Revisão Textual",
      "Psicolinguística",
    ],
  },
];

function SectionDivider() {
  return (
    <div
      className="h-px w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
      aria-hidden="true"
    />
  );
}

function PersonCard({
  person,
  variants,
}: {
  person: (typeof team)[number];
  variants: Variants;
}) {
  return (
    <motion.a
      href={person.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
      aria-label={`Conheça mais sobre ${person.name}`}
      className="
        group relative block overflow-hidden rounded-2xl
        border border-black/10 dark:border-white/10
        bg-black/[0.02] dark:bg-white/[0.02]
        backdrop-blur-sm
        transition-all duration-500
        hover:-translate-y-2
        hover:border-red-500/30
        hover:shadow-[0_20px_60px_rgba(120,0,20,0.15)]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none absolute inset-0 z-0
          bg-gradient-to-br
          from-red-900/20
          via-transparent
          to-transparent
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Foto */}
      <div className="relative aspect-[4/5] overflow-hidden bg-black/10 dark:bg-white/5">
        <Image
          src={person.image}
          alt={`Foto profissional de ${person.name}`}
          fill
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="
            object-cover
            object-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Gradiente sobre a foto */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
            opacity-80
          "
        />

        {/* Pequeno indicador */}
        <div
          className="
            absolute bottom-4 right-4
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-white/20
            bg-black/30
            text-white
            backdrop-blur-md
            transition-all duration-300
            group-hover:translate-x-1
            group-hover:border-red-400/50
          "
          aria-hidden="true"
        >
          →
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 p-6">
        <h3 className="text-xl font-semibold tracking-tight">
          {person.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[color:var(--foreground)]/60">
          {person.description}
        </p>

        {/* Especialidades */}
        <div className="mt-5 flex flex-wrap gap-2">
          {person.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-md
                border border-black/5
                bg-black/5
                px-2.5 py-1
                text-[11px]
                text-[color:var(--foreground)]/65
                dark:border-white/5
                dark:bg-white/5
              "
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Link visual */}
        <div
          className="
            mt-6 flex items-center gap-2
            text-xs font-medium
            uppercase tracking-[0.2em]
            text-red-500/70
            transition-colors duration-300
            group-hover:text-red-400
          "
        >
          Conhecer perfil
          <span
            className="
              transition-transform duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen transition-colors duration-700">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex h-[60vh] min-h-[500px] items-center justify-center overflow-hidden text-center">
        {/* Background */}
        <div
          className="
            absolute inset-0
            scale-105
            bg-[url('/about-bg.png')]
            bg-cover
            bg-center
            opacity-40
          "
          aria-hidden="true"
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/70
            via-black/60
            to-black/95
          "
          aria-hidden="true"
        />

        {/* Conteúdo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 px-6"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-red-400/80">
            Editora independente
          </p>

          <h1
            className="
              text-4xl font-extrabold
              tracking-[0.15em]
              md:text-6xl
              md:tracking-[0.2em]
            "
          >
            SONHOS CARMESIM
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Onde histórias florescem na escuridão e cada palavra carrega um
            segredo.
          </p>
        </motion.div>
      </section>

      {/* =========================================================
          SOBRE
      ========================================================== */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-5xl space-y-7 px-6 py-20 text-center"
      >
        <motion.div variants={fadeUp}>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-red-500/70">
            Nossa história
          </span>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Sobre Nós
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-base leading-relaxed text-[color:var(--foreground)]/70 md:text-lg"
        >
          A Sonhos Carmesim nasceu para ajudar ideias a se tornarem livros
          completos. Somos uma editora focada no desenvolvimento de autores,
          oferecendo acompanhamento próximo e personalizado em cada etapa da
          escrita.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-base leading-relaxed text-[color:var(--foreground)]/70 md:text-lg"
        >
          Trabalhamos com quem está começando e também com quem já iniciou um
          projeto, mas precisa de direção para avançar. Acreditamos que escrever
          não precisa ser um processo solitário. Com a orientação certa, é
          possível transformar uma ideia em uma obra estruturada, consistente e
          pronta para publicação.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-base leading-relaxed text-[color:var(--foreground)]/70 md:text-lg"
        >
          Do encontro de três mulheres que compartilharam o sonho de publicar,
          e que enfrentaram a dura realidade do setor editorial como obstáculo,
          nasceu o grupo Sonhos Carmesim.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-base leading-relaxed text-[color:var(--foreground)]/70 md:text-lg"
        >
          Entre os autores que nos procuram, o talento quase nunca é o
          problema, mas sim a falta de conhecimento sobre o processo editorial.
          É justamente nesse ponto que atuamos: orientando, esclarecendo e
          guiando cada escritor ao longo do caminho.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-base leading-relaxed text-[color:var(--foreground)]/70 md:text-lg"
        >
          Hoje, somos uma editora independente especializada em transformar
          ideias, rascunhos e projetos engavetados em livros prontos para
          publicação.
        </motion.p>
      </motion.section>

      <SectionDivider />

      {/* =========================================================
          EQUIPE
      ========================================================== */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">

          {/* Título */}
          <motion.div
            variants={fadeUp}
            className="mb-12 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-red-500/70">
              Por trás das histórias
            </span>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Quem constrói a Sonhos Carmesim?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--foreground)]/60 md:text-base">
              Três trajetórias diferentes, reunidas pelo mesmo propósito:
              transformar ideias em histórias que encontrem seu caminho até o
              leitor.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <PersonCard
                key={person.name}
                person={person}
                variants={fadeUp}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <SectionDivider />

      {/* =========================================================
          PILARES
      ========================================================== */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="px-6 py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {pillars.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-black/10
                bg-black/[0.02]
                p-7
                text-center
                backdrop-blur-sm
                transition-all duration-500
                hover:-translate-y-1
                hover:border-red-500/20
                dark:border-white/10
                dark:bg-white/[0.02]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-red-900/15
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
                aria-hidden="true"
              />

              <div className="relative z-10">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-red-500/60">
                  {item.title}
                </span>

                <p className="mt-4 text-sm leading-relaxed text-[color:var(--foreground)]/60 md:text-base">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <SectionDivider />

      {/* =========================================================
          CTA
      ========================================================== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-6 py-20 text-center"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-red-500/70">
          Vamos conversar?
        </span>

        <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
          Pronto para entrar nesse universo?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--foreground)]/60">
          Acompanhe nosso trabalho, conheça nossos projetos e descubra o que
          podemos construir juntos.
        </p>

        <Link
          href="https://www.instagram.com/sonhoscarmesimeditorial/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative mt-8 inline-flex
            items-center gap-3
            overflow-hidden
            rounded-lg
            border border-black dark:border-white
            px-8 py-3
            text-sm font-medium
            transition-all duration-300
            hover:border-red-500
          "
        >
          {/* Efeito de luz */}
          <span
            className="
              absolute inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-transform duration-1000
              group-hover:translate-x-full
            "
            aria-hidden="true"
          />

          <span className="relative z-10 transition-colors duration-300 group-hover:text-red-500">
            Siga-nos no Instagram
          </span>

          <span
            className="
              relative z-10
              transition-transform duration-300
              group-hover:translate-x-1
            "
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </motion.section>
    </main>
  );
}
