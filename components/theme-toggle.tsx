
"use client";

import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) return null;

  const isDark = resolvedTheme === "dark";

  const transition = {
    duration: prefersReducedMotion ? 0 : 0.35,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={`Ativar ${isDark ? "modo claro" : "modo sombrio"}`}
      aria-pressed={isDark}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
      transition={transition}
      className={`
        ignore-system-dark
        group relative isolate overflow-hidden
        inline-flex items-center justify-center
        min-h-11 px-5 py-2.5
        rounded-xl border
        backdrop-blur-md
        font-medium tracking-wide
        transition-colors duration-300
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-red-600/60
        focus-visible:ring-offset-2
        ${
          isDark
            ? "border-red-800/80 bg-red-950/20 text-red-300 hover:bg-red-900/30"
            : "border-black/70 bg-white/60 text-black hover:bg-black hover:text-white"
        }
      `}
    >
      {/* Brilho que atravessa o botão */}
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-y-0 -left-full
            z-0 w-2/3 skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent via-white/25 to-transparent
          "
          animate={{ left: ["-100%", "180%"] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Brilho carmesim */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 bg-red-800/15 blur-xl"
        animate={{ opacity: isDark ? 0.8 : 0 }}
        transition={transition}
      />

      {/* Conteúdo */}
      <span className="relative z-10 flex items-center gap-2">
        <motion.span
          key={resolvedTheme}
          initial={
            prefersReducedMotion
              ? false
              : { rotate: -90, scale: 0.7, opacity: 0 }
          }
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={transition}
          aria-hidden="true"
        >
          {isDark ? "🌑" : "☀️"}
        </motion.span>

        <motion.span
          key={`${resolvedTheme}-label`}
          initial={prefersReducedMotion ? false : { y: 4, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
        >
          {isDark ? "Modo Sombrio" : "Modo Claro"}
        </motion.span>
      </span>
    </motion.button>
  );
}
