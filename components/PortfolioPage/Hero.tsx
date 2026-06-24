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
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
          text-sm
          mb-8
        "
      >
        📚 Nosso Portfólio
      </motion.div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-5xl
          md:text-7xl
          font-black
          leading-tight
        "
      >
        Obras que
        <span className="block text-red-600">
          ganharam vida.
        </span>
      </motion.h1>

      {/* Descrição */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          mt-8
          text-lg
          md:text-xl
          text-zinc-600
          dark:text-zinc-400
          max-w-3xl
          mx-auto
        "
      >
        Conheça alguns exemplos de capas,
        projetos editoriais, diagramações,
        artes e serviços criativos produzidos
        pela Sonhos Carmesim.
      </motion.p>

      {/* Estatísticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="
          mt-14
          grid
          grid-cols-3
          gap-6
          max-w-2xl
          mx-auto
        "
      >
        <div>
          <div className="text-3xl font-bold text-red-600">
            +50
          </div>
          <p className="text-sm opacity-70">
            Artes Criadas
          </p>
        </div>

        <div>
          <div className="text-3xl font-bold text-red-600">
            +20
          </div>
          <p className="text-sm opacity-70">
            Projetos Editoriais
          </p>
        </div>

        <div>
          <div className="text-3xl font-bold text-red-600">
            100%
          </div>
          <p className="text-sm opacity-70">
            Personalizados
          </p>
        </div>
      </motion.div>

      {/* Indicador */}
      <motion.a
        href="#portfolio-content"
        animate={{ y: [0, 10, 0] }}
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
          text-zinc-500
          dark:text-zinc-400
          hover:text-red-500
          transition-colors
        "
      >
        <span>Explorar trabalhos</span>
        <span className="text-xl">⌄</span>
      </motion.a>

    </div>
  </div>
</section>