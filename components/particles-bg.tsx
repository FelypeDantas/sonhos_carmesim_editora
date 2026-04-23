"use client";

import { useMemo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import type { ISourceOptions } from "@tsparticles/engine";

// 🔥 Carrega só no client (ESSENCIAL)
const Particles = dynamic(() => import("@tsparticles/react"), {
  ssr: false,
});

export function ParticlesBG() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 🧠 evita hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const options = useMemo<ISourceOptions>(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },

    fpsLimit: 60,

    particles: {
      number: {
        value: isDark ? 45 : 25,
        density: {
          enable: true,
          area: 900,
        },
      },

      color: {
        value: isDark ? "#ff0033" : "#111111",
      },

      opacity: {
        value: isDark ? 0.35 : 0.15,
      },

      size: {
        value: { min: 1, max: isDark ? 3 : 2 },
      },

      move: {
        enable: true,
        speed: isDark ? 0.35 : 0.15,
        random: true,
        outModes: {
          default: "out",
        },
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 70,
          duration: 0.4,
        },
      },
    },

    detectRetina: true,
  }), [isDark]);

  // 🧠 bloqueia render até client estar pronto
  if (!mounted || !resolvedTheme) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0"
    />
  );
}