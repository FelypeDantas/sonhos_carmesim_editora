"use client";

import { useTheme } from "next-themes";
import { motion, type Transition } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    if (!resolvedTheme) return;
    setTheme(isDark ? "light" : "dark");
  };

  const transition: Transition = useMemo(
    () => ({
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    }),
    []
  );

  if (!mounted || !resolvedTheme) return null;

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema"
      aria-pressed={isDark}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.04 }}
      className={`
        group relative px-5 py-2 rounded-xl border
        backdrop-blur-md overflow-hidden
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-red-600/40

        ${
          isDark
            ? "border-red-700 text-red-300 hover:bg-red-900/30"
            : "border-black/70 text-black hover:bg-black hover:text-white"
        }
      `}
    >
      {/* 🌫️ sweep light effect (simplificado e mais suave) */}
      <span
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      >
        <span
          className="
            block w-[140%] h-full
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            translate-x-[-120%] group-hover:translate-x-[120%]
            transition-transform duration-700 ease-out
          "
        />
      </span>

      {/* 🌑 glow controlado (sem exagero visual) */}
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-red-900/10 blur-xl"
        animate={{ opacity: isDark ? 0.55 : 0 }}
        transition={transition}
      />

      {/* 🎭 content layer */}
      <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
        {/* 🌗 icon */}
        <motion.span
          key={resolvedTheme}
          initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={transition}
        >
          {isDark ? "🌑" : "☀️"}
        </motion.span>

        {/* 📝 label */}
        <motion.span
          key={resolvedTheme + "-label"}
          initial={{ y: 4, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? "Dark Ritual" : "Modo Claro"}
        </motion.span>
      </span>
    </motion.button>
  );
}