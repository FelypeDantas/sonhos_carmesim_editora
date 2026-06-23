"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import type { ISourceOptions } from "@tsparticles/engine";

const Particles = dynamic(
() => import("@tsparticles/react"),
{ ssr: false }
);

export function ParticlesBG() {
const { resolvedTheme } = useTheme();

const [mounted, setMounted] = useState(false);
const [reducedMotion, setReducedMotion] = useState(false);

useEffect(() => {
setMounted(true);

const media = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

setReducedMotion(media.matches);

const listener = (event: MediaQueryListEvent) => {
  setReducedMotion(event.matches);
};

media.addEventListener("change", listener);

return () => {
  media.removeEventListener("change", listener);
};

}, []);

const isDark = resolvedTheme === "dark";

const options = useMemo<ISourceOptions>(() => {
const particleColor = isDark
? "#dc2626"
: "#18181b";

return {
  fullScreen: {
    enable: false,
  },

  background: {
    color: "transparent",
  },

  detectRetina: true,

  fpsLimit: 30,

  particles: {
    number: {
      value: isDark ? 40 : 20,
      density: {
        enable: true,
        area: 1000,
      },
    },

    color: {
      value: particleColor,
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: isDark ? 0.25 : 0.12,
    },

    size: {
      value: {
        min: 1,
        max: isDark ? 2.5 : 2,
      },
    },

    move: {
      enable: !reducedMotion,

      speed: isDark ? 0.25 : 0.12,

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

}, [isDark, reducedMotion]);

if (!mounted || !resolvedTheme) {
return null;
}

return ( <Particles
   id="particles-bg"
   className="absolute inset-0"
   options={options}
 />
);
}
