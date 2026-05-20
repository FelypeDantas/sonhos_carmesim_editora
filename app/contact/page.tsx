"use client";

import { useCallback, useMemo, useState } from "react";

/* =========================================================
   🧠 TYPES
========================================================= */

type PublishFormat = "Físico" | "E-book" | "Ambos";

type FormState = {
  nome: string;
  email: string;
  genero: string;
  statusLivro: string;
  paginas: string;
  formato: PublishFormat;
  revisado: string;
  possuiCapa: string;
  objetivo: string;
  arquivo: File | null;
};

type FieldProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
};

const INITIAL_STATE: FormState = {
  nome: "",
  email: "",
  genero: "",
  statusLivro: "",
  paginas: "",
  formato: "Ambos",
  revisado: "",
  possuiCapa: "",
  objetivo: "",
  arquivo: null,
};

const INPUT_STYLES = `
  w-full rounded-2xl border
  border-black/10 dark:border-white/10

  bg-white/80 dark:bg-zinc-950/80
  backdrop-blur-xl

  text-black dark:text-white
  placeholder:text-black/40 dark:placeholder:text-white/40

  px-4 py-3

  outline-none
  transition-all duration-300

  focus:border-rose-500/40
  focus:ring-4
  focus:ring-rose-500/10

  hover:border-black/20
  dark:hover:border-white/20
`;

/* =========================================================
   🌹 PAGE
========================================================= */

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  /* =========================================================
     ✅ VALIDATION
  ========================================================= */

  const validate = useCallback(() => {
    const requiredFields = [
      form.nome,
      form.email,
      form.genero,
      form.statusLivro,
      form.paginas,
      form.revisado,
      form.possuiCapa,
      form.objetivo,
    ];

    const hasEmptyField = requiredFields.some(
      (field) => !field.trim()
    );

    if (hasEmptyField) {
      return "Preencha todos os campos.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      return "Digite um email válido.";
    }

    if (!form.arquivo) {
      return "Envie o arquivo editável da obra.";
    }

    const allowedTypes = [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.oasis.opendocument.text",
    ];

    if (!allowedTypes.includes(form.arquivo.type)) {
      return "Envie um arquivo Word (.doc, .docx) ou ODT.";
    }

    return null;
  }, [form]);

  /* =========================================================
     ✏️ CHANGE
  ========================================================= */

  const clearError = () => {
    if (error) setError(null);
  };

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => {
      const { name, value } = e.target;

      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));

      clearError();
    },
    [error]
  );

  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;

      setForm((prev) => ({
        ...prev,
        arquivo: file,
      }));

      clearError();
    },
    [error]
  );

  /* =========================================================
     📦 WHATSAPP MESSAGE
  ========================================================= */

  const whatsappMessage = useMemo(() => {
    return `🌹 *Novo atendimento editorial*

👤 *Nome:* ${form.nome}
📧 *Email:* ${form.email}

📚 *Gênero do livro:* ${form.genero}

🛠️ *Status da obra:* ${form.statusLivro}

📄 *Quantidade de páginas/palavras:* ${form.paginas}

📦 *Formato desejado:* ${form.formato}

✍️ *Já passou por revisão profissional?*
${form.revisado}

🎨 *Possui capa?*
${form.possuiCapa}

🎯 *Objetivo com a publicação:*
${form.objetivo}

📎 *Arquivo enviado:*
${form.arquivo?.name || "Não enviado"}
`;
  }, [form]);

  /* =========================================================
     🚀 SUBMIT
  ========================================================= */

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const validationError = validate();

      if (validationError) {
        setError(validationError);
        return;
      }

      try {
        setLoading(true);

        const phone = "555195885293";

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        window.open(url, "_blank");

        setForm(INITIAL_STATE);
      } catch {
        setError("Erro ao enviar formulário.");
      } finally {
        setLoading(false);
      }
    },
    [validate, whatsappMessage]
  );

  /* =========================================================
     🎨 UI
  ========================================================= */

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-b
        from-white
        via-zinc-50
        to-zinc-100

        dark:from-black
        dark:via-zinc-950
        dark:to-black

        px-6 py-20
      "
    >
      <section className="mx-auto max-w-4xl">
        {/* HERO */}
        <div className="mb-14 text-center">
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-rose-500/20
              bg-rose-500/10
              px-4 py-2

              text-sm text-rose-500
            "
          >
            🌹 Atendimento Editorial
          </div>

          <h1
            className="
              mt-6
              text-4xl font-black tracking-tight
              text-black dark:text-white

              md:text-6xl
            "
          >
            Vamos publicar sua obra.
          </h1>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-base leading-relaxed
              text-black/60 dark:text-white/60
            "
          >
            Preencha as informações abaixo para agilizar
            a avaliação editorial da sua obra.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            space-y-7

            rounded-[2rem]

            border border-black/10
            dark:border-white/10

            bg-white/70
            dark:bg-zinc-900/40

            p-8 md:p-10

            shadow-2xl
            shadow-black/5

            backdrop-blur-2xl
          "
        >
          {/* ERROR */}
          {error && (
            <div
              className="
                rounded-2xl
                border border-red-500/20
                bg-red-500/10
                px-4 py-4

                text-sm font-medium
                text-red-500
              "
            >
              {error}
            </div>
          )}

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Seu nome"
              name="nome"
              value={form.nome}
              placeholder="Ex: Ana Clara"
              onChange={handleChange}
            />

            <Input
              label="Seu email"
              name="email"
              type="email"
              value={form.email}
              placeholder="voce@email.com"
              onChange={handleChange}
            />
          </div>

          <Input
            label="Qual é o gênero do livro?"
            name="genero"
            value={form.genero}
            placeholder="Fantasia, Romance, Suspense..."
            onChange={handleChange}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <SelectField
              label="A obra está finalizada?"
              name="statusLivro"
              value={form.statusLivro}
              onChange={handleChange}
              options={[
                "Finalizada",
                "Em andamento",
              ]}
            />

            <Input
              label="Quantidade de páginas ou palavras"
              name="paginas"
              value={form.paginas}
              placeholder="Ex: 320 páginas"
              onChange={handleChange}
            />
          </div>

          <SelectField
            label="Formato desejado"
            name="formato"
            value={form.formato}
            onChange={handleChange}
            options={[
              "Físico",
              "E-book",
              "Ambos",
            ]}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <SelectField
              label="Já passou por revisão profissional?"
              name="revisado"
              value={form.revisado}
              onChange={handleChange}
              options={[
                "Sim",
                "Não",
              ]}
            />

            <SelectField
              label="Você já possui capa?"
              name="possuiCapa"
              value={form.possuiCapa}
              onChange={handleChange}
              options={[
                "Sim",
                "Não",
              ]}
            />
          </div>

          <Textarea
            label="Qual seu objetivo com a publicação?"
            name="objetivo"
            value={form.objetivo}
            placeholder="Conte um pouco sobre sua meta com o livro..."
            onChange={handleChange}
          />

          {/* FILE */}
          <div className="space-y-3">
            <label
              className="
                text-sm font-medium
                text-black/70 dark:text-white/70
              "
            >
              Arquivo editável da obra
            </label>

            <div
              className="
                rounded-2xl border border-dashed
                border-black/15 dark:border-white/15

                bg-white/50 dark:bg-zinc-950/40

                p-6

                transition-all duration-300

                hover:border-rose-500/30
              "
            >
              <input
                type="file"
                accept=".doc,.docx,.odt"
                onChange={handleFile}
                className="
                  w-full

                  text-sm
                  text-black dark:text-white

                  file:mr-4
                  file:rounded-xl
                  file:border-0

                  file:bg-rose-500
                  file:px-4
                  file:py-2

                  file:text-sm
                  file:font-semibold
                  file:text-white

                  hover:file:bg-rose-400
                "
              />

              <p
                className="
                  mt-3 text-xs
                  text-black/50 dark:text-white/50
                "
              >
                Aceitamos arquivos .DOC, .DOCX e .ODT
              </p>

              {form.arquivo && (
                <div
                  className="
                    mt-4 rounded-xl
                    border border-emerald-500/20
                    bg-emerald-500/10
                    px-4 py-3

                    text-sm
                    text-emerald-500
                  "
                >
                  📎 {form.arquivo.name}
                </div>
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              group relative overflow-hidden

              w-full rounded-2xl

              bg-gradient-to-r
              from-rose-500
              to-pink-500

              px-6 py-4

              font-bold
              text-white

              transition-all duration-300

              hover:scale-[1.01]
              hover:shadow-2xl
              hover:shadow-rose-500/20

              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            <span className="relative z-10">
              {loading
                ? "Enviando..."
                : "Enviar atendimento 💬"}
            </span>

            <div
              className="
                absolute inset-0
                translate-y-full
                bg-white/10

                transition-transform duration-300

                group-hover:translate-y-0
              "
            />
          </button>
        </form>
      </section>
    </main>
  );
}

/* =========================================================
   🧩 COMPONENTS
========================================================= */

type InputProps = FieldProps & {
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function Input({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <div className="space-y-3">
      <label
        className="
          text-sm font-medium
          text-black/70 dark:text-white/70
        "
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={INPUT_STYLES}
      />
    </div>
  );
}

type TextareaProps = FieldProps & {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

function Textarea({
  label,
  name,
  value,
  placeholder,
  onChange,
}: TextareaProps) {
  return (
    <div className="space-y-3">
      <label
        className="
          text-sm font-medium
          text-black/70 dark:text-white/70
        "
      >
        {label}
      </label>

      <textarea
        rows={6}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${INPUT_STYLES} resize-none`}
      />
    </div>
  );
}

type SelectProps = {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

function SelectField({
  label,
  name,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <div className="space-y-3">
      <label
        className="
          text-sm font-medium
          text-black/70 dark:text-white/70
        "
      >
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={INPUT_STYLES}
      >
        <option value="">
          Selecione uma opção
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="
              bg-white
              text-black

              dark:bg-zinc-950
              dark:text-white
            "
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
