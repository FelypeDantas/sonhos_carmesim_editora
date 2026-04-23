"use client";

import { useState, useCallback } from "react";

/* =========================
   🧠 TYPES
========================= */
type FormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  message: "",
};

/* =========================
   🌹 PAGE
========================= */
export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* =========================
     ✅ VALIDATION
  ========================= */
  const validate = useCallback(() => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Preencha todos os campos.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return "Digite um email válido.";
    }

    if (form.message.trim().length < 10) {
      return "A mensagem deve ter pelo menos 10 caracteres.";
    }

    return null;
  }, [form]);

  /* =========================
     ✏️ CHANGE
  ========================= */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setForm((prev) => ({ ...prev, [name]: value }));
      if (error) setError(null);
    },
    [error]
  );

  /* =========================
     🚀 SUBMIT (WHATSAPP)
  ========================= */
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const validationError = validate();
      if (validationError) {
        setError(validationError);
        return;
      }

      setLoading(true);

      const phone = "553182221360";

      const text = `🌹 *Novo contato - Sonhos Carmesim*

👤 Nome: ${form.name}
📧 Email: ${form.email}

💬 Mensagem:
${form.message}`;

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

      setTimeout(() => {
        window.open(url, "_blank");

        setForm(INITIAL_STATE);
        setLoading(false);
      }, 400);
    },
    [form, validate]
  );

  return (
    <main className="min-h-screen flex flex-col transition-colors duration-500">

      {/* 🎬 HERO */}
      <section className="h-[40vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          Entre em Contato
        </h1>

        <p className="mt-4 text-[color:var(--foreground)]/60 max-w-xl">
          Sua mensagem será entregue… sem intermediários.
        </p>
      </section>

      {/* 📩 FORM */}
      <section className="flex-1 flex justify-center px-6 pb-20">
        <form
          onSubmit={handleSubmit}
          className="
            w-full max-w-xl space-y-6
            bg-black/5 dark:bg-white/5
            backdrop-blur-md
            p-8 rounded-2xl
            border border-black/10 dark:border-white/10
          "
        >
          {/* ❗ ERROR */}
          {error && (
            <div className="text-sm text-red-500 bg-red-500/10 p-3 rounded-md animate-pulse">
              {error}
            </div>
          )}

          {/* INPUTS */}
          <Input
            label="Nome"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={!!error && !form.name}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={!!error && !form.email}
          />

          <Textarea
            label="Mensagem"
            name="message"
            value={form.message}
            onChange={handleChange}
            error={!!error && !form.message}
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-lg font-semibold
              bg-green-500 text-black
              hover:bg-green-400
              disabled:opacity-60 disabled:cursor-not-allowed

              transition-all duration-300
              focus:outline-none
              focus:ring-2 focus:ring-green-400/50
            "
          >
            {loading ? "Enviando..." : "Enviar via WhatsApp 💬"}
          </button>
        </form>
      </section>
    </main>
  );
}

/* =========================
   🧩 INPUT COMPONENT
========================= */

type BaseProps = {
  label: string;
  name: string;
  value: string;
  error?: boolean;
};

type InputProps = BaseProps & {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-[color:var(--foreground)]/60">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Digite seu ${label.toLowerCase()}`}
        className={`
          w-full mt-2 p-3 rounded-lg

          bg-white dark:bg-zinc-900
          text-black dark:text-white

          placeholder:text-black/40 dark:placeholder:text-white/40

          border ${error
            ? "border-red-500"
            : "border-black/20 dark:border-white/20"
          }

          focus:outline-none
          focus:ring-2
          ${error ? "focus:ring-red-500/40" : "focus:ring-red-500/20"}

          caret-red-500
          transition-all duration-300
        `}
      />
    </div>
  );
}

/* =========================
   🧩 TEXTAREA COMPONENT
========================= */

type TextareaProps = BaseProps & {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function Textarea({
  label,
  name,
  value,
  onChange,
  error,
}: TextareaProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-[color:var(--foreground)]/60">
        {label}
      </label>

      <textarea
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        placeholder="Escreva sua mensagem..."
        className={`
          w-full mt-2 p-3 rounded-lg

          bg-white dark:bg-zinc-900
          text-black dark:text-white

          placeholder:text-black/40 dark:placeholder:text-white/40

          border ${error
            ? "border-red-500"
            : "border-black/20 dark:border-white/20"
          }

          focus:outline-none
          focus:ring-2
          ${error ? "focus:ring-red-500/40" : "focus:ring-red-500/20"}

          caret-red-500
          resize-none

          transition-all duration-300
        `}
      />
    </div>
  );
}