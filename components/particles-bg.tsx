
"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import type { ISourceOptions } from "@tsparticles/engine";

const Particles = dynamic(
  () => import("@tsparticles/react"),
  { ssr: false }
);

// Evita inicializações repetidas do motor
let enginePromise: Promise<void> | null = null;

function initializeEngine() {
  if (!enginePromise) {
    enginePromise = initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }

  return enginePromise;
}

export function ParticlesBG() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [engineReady, setEngineReady] = useState(false);

  // Verifica o dispositivo e acompanha mudanças na preferência
  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => {
      setReducedMotion(media.matches);
    };

    updatePreference();
    setMounted(true);

    media.addEventListener("change", updatePreference);

    return () => {
      media.removeEventListener("change", updatePreference);
    };
  }, []);

  // Inicializa o motor somente quando a animação é permitida
  useEffect(() => {
    let cancelled = false;

    if (!mounted || reducedMotion) {
      setEngineReady(false);
      return;
    }

    initializeEngine()
      .then(() => {
        if (!cancelled) {
          setEngineReady(true);
        }
      })
      .catch((error) => {
        console.error("Erro ao inicializar partículas:", error);
      });

    return () => {
      cancelled = true;
    };
  }, [mounted, reducedMotion]);

  const isDark = resolvedTheme === "dark";

  const options = useMemo<ISourceOptions>(() => {
    return {
      fullScreen: {
        enable: false,
      },

      background: {
        color: {
          value: "transparent",
        },
      },

      detectRetina: true,

      fpsLimit: 30,

      pauseOnBlur: true,
      pauseOnOutsideViewport: true,

      particles: {
        number: {
          value: isDark ? 28 : 14,
          density: {
            enable: true,
            width: 1000,
            height: 1000,
          },
        },

        color: {
          value: isDark ? "#dc2626" : "#18181b",
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: {
            min: isDark ? 0.12 : 0.05,
            max: isDark ? 0.3 : 0.14,
          },
        },

        size: {
          value: {
            min: 1,
            max: isDark ? 2.5 : 1.8,
          },
        },

        move: {
          enable: true,
          speed: isDark ? 0.3 : 0.15,
          random: true,
          direction: "none",
          outModes: {
            default: "out",
          },
        },

        links: {
          enable: false,
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
        },
      },
    };
  }, [isDark]);

  if (
    !mounted ||
    !resolvedTheme ||
    reducedMotion ||
    !engineReady
  ) {
    return null;
  }

  return (
    <Particles
      id="particles-bg"
      className="
        pointer-events-none
        absolute inset-0
        overflow-hidden
      "
      options={options}
    />
  );
}
