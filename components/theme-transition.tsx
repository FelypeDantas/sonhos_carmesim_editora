
"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";

import { useTheme } from "next-themes";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface ThemeTransitionProps {
  darkGradient?: string;
  lightGradient?: string;
  opacity?: number;
  scale?: number;
  duration?: number;
  blur?: number;
}

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

export function ThemeTransition({
  darkGradient = "radial-gradient(circle at center, rgba(153,27,27,0.35), transparent 70%)",
  lightGradient = "radial-gradient(circle at center, rgba(153,27,27,0.12), transparent 70%)",
  opacity = 0.8,
  scale = 1.5,
  duration = 0.8,
  blur = 12,
}: ThemeTransitionProps) {

  const { resolvedTheme } = useTheme();

  const prefersReducedMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState<string | undefined>();

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  // Montagem
  useEffect(() => {
    setMounted(true);
  }, []);

  // Limpeza
  const clearTransition = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearTransition();
  }, [clearTransition]);

  // Detecta mudança de tema
  useEffect(() => {
    if (!mounted || !resolvedTheme) return;

    if (!theme) {
      setTheme(resolvedTheme);
      return;
    }

    if (theme === resolvedTheme) return;

    setTheme(resolvedTheme);

    if (prefersReducedMotion) return;

    clearTransition();

    setActive(true);

    timeoutRef.current = setTimeout(() => {
      setActive(false);
      timeoutRef.current = null;
    }, duration * 1000);

  }, [
    resolvedTheme,
    mounted,
    theme,
    duration,
    prefersReducedMotion,
    clearTransition,
  ]);

  if (!mounted || !resolvedTheme || prefersReducedMotion) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  const background = isDark
    ? darkGradient
    : lightGradient;

  return (
    <AnimatePresence>
      {active && (

        <motion.div
          key={resolvedTheme}
          initial={{
            opacity: 0,
            scale: scale * 0.7,
          }}
          animate={{
            opacity,
            scale,
          }}
          exit={{
            opacity: 0,
            scale: scale * 1.1,
          }}
          transition={{
            duration: duration,
            ease: EASE,
          }}
          className="
            pointer-events-none
            fixed
            inset-0
            z-[100]
            overflow-hidden
            will-change-transform
          "
          style={{
            background,
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
          }}
        >

          {/* SOMBRA CINEMATOGRÁFICA */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/5
              via-transparent
              to-black/20
              dark:from-black/20
              dark:to-black/40
            "
          />

          {/* HALO CARMESIM */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: duration * 0.8,
              ease: EASE,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[35rem]
              w-[35rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-red-600/10
              blur-[100px]
            "
          />

          {/* BRILHO CENTRAL */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_65%)]
            "
          />

        </motion.div>

      )}
    </AnimatePresence>
  );
}
