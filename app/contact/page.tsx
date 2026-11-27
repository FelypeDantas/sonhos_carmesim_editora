
"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import type {
  ChangeEvent,
  FormEvent,
} from "react";

/* =========================================================
   TYPES
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
};

type BaseFieldProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: boolean;
};

type InputProps = BaseFieldProps & {
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TextareaProps = BaseFieldProps & {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

type SelectProps = {
  label: string;
  name: string;
  value: string;
  options: string[];
  error?: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

/* =========================================================
   STYLES
========================================================= */

const FIELD_STYLES = `
  w-full rounded-2xl border

  border-black/10
  dark:border-white/10

  bg-white/80
  dark:bg-zinc-950/80

  text-black
  dark:text-white

  placeholder:text-black/40
  dark:placeholder:text-white/40

  px-4 py-3

  outline-none

  transition-all duration-300

  focus:border-rose-500/40
  focus:ring-4
  focus:ring-rose-500/10

  hover:border-black/20
  dark:hover:border-white/20

  aria-[invalid=true]:border-red-500
  aria-[invalid=true]:focus:ring-red-500/10
`;

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
};

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [error, setError] = useState<string | null>(null);

  /* =========================================================
     VALIDATION
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

    if (requiredFields.some((field) => !field.trim())) {
      return "Preencha todos os campos antes de continuar.";
    }

    const email = form.email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Digite um endereço de e-mail válido.";
    }

    return null;
  }, [form]);

  /* =========================================================
     CHANGE
  ========================================================= */

  const handleChange = useCallback(
    (
      e:
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLTextAreaElement>
        | ChangeEvent<HTMLSelectElement>
    ) => {
      const { name, value } = e.target;

      setForm((previous) => ({
        ...previous,
        [name]: value,
      }));

      setError(null);
    },
    []
  );

  /* =========================================================
     WHATSAPP MESSAGE
  ========================================================= */

  const whatsappMessage = useMemo(() => {
    return `🌹 *Novo atendimento editorial*

👤 *Nome:* ${form.nome.trim()}

📧 *Email:* ${form.email.trim()}

📚 *Gênero do livro:* ${form.genero}

🛠️ *Status da obra:* ${form.statusLivro}

📄 *Quantidade de páginas/palavras:* ${form.paginas}

📦 *Formato desejado:* ${form.formato}

✍️ *Já passou por revisão profissional?*
${form.revisado}

🎨 *Possui capa?*
${form.possuiCapa}

🎯 *Objetivo com a publicação:*
${form.objetivo.trim()}

📎 *Observação:*
O autor será orientado posteriormente sobre o envio do arquivo da obra.
`;
  }, [form]);

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validationError = validate();

      if (validationError) {
        setError(validationError);
        return;
      }

      // Número no formato internacional:
      // código do país + DDD + número.
      const phone = "555195885293";

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      const whatsappWindow = window.open(url, "_blank");

      if (!whatsappWindow) {
        setError(
          "O navegador bloqueou a abertura do WhatsApp. Permita pop-ups e tente novamente."
        );
        return;
      }

      // Impede acesso à página original pela nova janela.
      whatsappWindow.opener = null;

      // Só limpa os campos quando a janela é aberta.
      setForm(INITIAL_STATE);
      setError(null);
    },
    [validate, whatsappMessage]
  );

  /* =========================================================
     UI
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
              text-sm font-medium
              text-rose-500
            "
          >
            🌹 Atendimento Editorial
          </div>

          <h1
            className="
              mt-6
              text-4xl font-black
              tracking-tight
              text-black
              dark:text-white
              md:text-6xl
            "
          >
            Vamos publicar sua obra.
          </h1>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-base leading-relaxed
              text-black/60
              dark:text-white/60
            "
          >
            Responda às perguntas abaixo para
            agilizar a avaliação editorial da
            sua obra.
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
              role="alert"
              aria-live="assertive"
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

          {/* IDENTIFICAÇÃO */}
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

          {/* OBRA */}
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

          {/* SERVIÇOS */}
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

          {/* INFORMATION */}
          <div
            className="
              rounded-2xl
              border border-amber-500/20
              bg-amber-500/10
              px-5 py-4
              text-sm leading-relaxed
              text-amber-600
              dark:text-amber-400
            "
          >
            📎 O envio do arquivo da obra será solicitado
            posteriormente durante o atendimento editorial.
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              group relative overflow-hidden
              w-full rounded-2xl
              bg-gradient-to-r
              from-rose-500
              to-pink-500
              px-6 py-4
              font-bold text-white
              transition-all duration-300
              hover:scale-[1.01]
              hover:shadow-2xl
              hover:shadow-rose-500/20
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-rose-500/30
            "
          >
            <span className="relative z-10">
              Enviar atendimento 💬
            </span>

            <div
              aria-hidden="true"
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
   INPUT
========================================================= */

function Input({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
}: InputProps) {
  const id = `field-${name}`;

  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        className="
          block text-sm font-medium
          text-black/70
          dark:text-white/70
        "
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        autoComplete={
          name === "nome"
            ? "name"
            : name === "email"
              ? "email"
              : "off"
        }
        className={FIELD_STYLES}
      />
    </div>
  );
}

/* =========================================================
   TEXTAREA
========================================================= */

function Textarea({
  label,
  name,
  value,
  placeholder,
  onChange,
}: TextareaProps) {
  const id = `field-${name}`;

  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        className="
          block text-sm font-medium
          text-black/70
          dark:text-white/70
        "
      >
        {label}
      </label>

      <textarea
        id={id}
        rows={6}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        className={`${FIELD_STYLES} resize-none`}
      />
    </div>
  );
}

/* =========================================================
   SELECT
========================================================= */

function SelectField({
  label,
  name,
  value,
  options,
  onChange,
}: SelectProps) {
  const id = `field-${name}`;

  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        className="
          block text-sm font-medium
          text-black/70
          dark:text-white/70
        "
      >
        {label}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
        className={FIELD_STYLES}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="
              bg-white text-black
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
