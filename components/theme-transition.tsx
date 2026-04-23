"use client";

import { motion, AnimatePresence, type Transition } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";

interface ThemeTransitionProps {
  darkGradient?: string;
  lightGradient?: string;
  opacity?: number;
  scale?: number;
  duration?: number;
  blur?: number;
}

export function ThemeTransition({
  darkGradient = "radial-gradient(circle at center, rgba(120,0,0,0.45), transparent 70%)",
  lightGradient = "radial-gradient(circle at center, rgba(0,0,0,0.22), transparent 70%)",
  opacity = 0.28,
  scale = 1,
  duration = 0.65,
  blur = 6,
}: ThemeTransitionProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const transition: Transition = useMemo(
    () => ({
      duration,
      ease: [0.22, 1, 0.36, 1],
    }),
    [duration]
  );

  if (!mounted || !resolvedTheme) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={resolvedTheme}
        initial={{ opacity: 0, scale: scale * 1.12 }}
        animate={{ opacity, scale }}
        exit={{ opacity: 0, scale: scale * 0.96 }}
        transition={transition}
        className="fixed inset-0 pointer-events-none z-50 will-change-transform"
      >
        {/* 🌌 Base gradient layer */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark ? darkGradient : lightGradient,
          }}
        />

        {/* 🌫️ Blur layer (isolada para GPU-friendly compositing) */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
          }}
        />

        {/* 🌗 Depth vignette (unificada em uma camada só) */}
        <div
          className="absolute inset-0 opacity-70 dark:opacity-90 bg-gradient-to-b from-black/10 via-transparent to-black/25 dark:from-black/30 dark:to-black/45"
        />
      </motion.div>
    </AnimatePresence>
  );
}