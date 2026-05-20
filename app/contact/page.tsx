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

      if (error) setError(null);
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

      if (error) setError(null);
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
✍️ *Já passou por revisão?* ${form.revisado}
🎨 *Possui capa?* ${form.possuiCapa}

🎯 *Objetivo com a publicação:*
${form.objetivo}

📎 Arquivo enviado:
${form.arquivo?.name || "Não enviado"}`;
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

        const phone = "553182221360";

        /**
         * Aqui você pode futuramente:
         * - enviar arquivo para Supabase Storage
         * - Cloudinary
         * - UploadThing
         * - Firebase Storage
         */

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
    <main className="min-h-screen px-6 py-20">
      <section className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Atendimento Editorial
          </h1>

          <p className="mt-4 text-black/60 dark:text-white/60">
            Envie as informações da sua obra para agilizar a análise editorial.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
            space-y-6
            rounded-3xl
            border border-black/10 dark:border-white/10
            bg-black/5 dark:bg-white/5
            backdrop-blur-xl
            p-8
          "
        >
          {error && (
            <div className="rounded-xl bg-red-500/10 p-4 text-sm text-red-500">
              {error}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Seu nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            />

            <Input
              label="Seu email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <Input
            label="Qual é o gênero do livro?"
            name="genero"
            value={form.genero}
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
            onChange={handleChange}
          />

          {/* 📎 FILE */}
          <div className="space-y-2">
            <label className="text-sm text-black/60 dark:text-white/60">
              Arquivo editável da obra
            </label>

            <input
              type="file"
              accept=".doc,.docx,.odt"
              onChange={handleFile}
              className="
                w-full rounded-xl border border-dashed
                border-black/20 dark:border-white/20
                p-4 text-sm
              "
            />

            <p className="text-xs text-black/50 dark:text-white/50">
              Envie um arquivo Word, DOCX ou ODT.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full rounded-xl bg-green-500 py-4
              font-semibold text-black
              transition-all duration-300
              hover:bg-green-400
              disabled:opacity-50
            "
          >
            {loading
              ? "Enviando..."
              : "Enviar atendimento via WhatsApp 💬"}
          </button>
        </form>
      </section>
    </main>
  );
}

/* =========================================================
   🧩 COMPONENTS
========================================================= */

type InputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function Input({
  label,
  name,
  value,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-black/60 dark:text-white/60">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full rounded-xl border
          border-black/10 dark:border-white/10
          bg-white dark:bg-zinc-900
          p-3
          outline-none
          transition-all duration-300
          focus:ring-2 focus:ring-rose-500/30
        "
      />
    </div>
  );
}

type TextareaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

function Textarea({
  label,
  name,
  value,
  onChange,
}: TextareaProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-black/60 dark:text-white/60">
        {label}
      </label>

      <textarea
        rows={5}
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full resize-none rounded-xl border
          border-black/10 dark:border-white/10
          bg-white dark:bg-zinc-900
          p-3
          outline-none
          transition-all duration-300
          focus:ring-2 focus:ring-rose-500/30
        "
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
    <div className="space-y-2">
      <label className="text-sm text-black/60 dark:text-white/60">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full rounded-xl border
          border-black/10 dark:border-white/10
          bg-white dark:bg-zinc-900
          p-3
          outline-none
          transition-all duration-300
          focus:ring-2 focus:ring-rose-500/30
        "
      >
        <option value="">
          Selecione
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
