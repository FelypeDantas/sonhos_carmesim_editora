
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/portfolio/capa-4.jpeg",
  "/portfolio/capa-4_1.jpeg",
];

const INTERVAL = 3000;

export function StoryImage() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    let interval: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (interval !== null) return;

      setProgress(true);

      interval = setInterval(() => {
        setCurrent((previous) => (previous + 1) % IMAGES.length);
      }, INTERVAL);
    };

    const stop = () => {
      if (interval !== null) {
        clearInterval(interval);
        interval = null;
      }

      setProgress(false);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    const handleMotionChange = () => {
      if (reducedMotion.matches) {
        stop();
      } else if (
        container.getBoundingClientRect().bottom > 0 &&
        container.getBoundingClientRect().top < window.innerHeight
      ) {
        start();
      }
    };

    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
      stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        h-full
        overflow-hidden
        bg-zinc-950
      "
      aria-label="Prévia de duas versões da capa"
    >
      {/* IMAGENS */}
      {IMAGES.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Versão ${index + 1} da capa`}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`
            absolute
            inset-0
            object-cover
            transition-opacity
            duration-700
            motion-reduce:transition-none
            ${
              current === index
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />
      ))}

      {/* INDICADORES DE PROGRESSO */}
      <div
        className="
          absolute
          top-3
          left-3
          right-3
          z-20
          flex
          gap-1.5
        "
        aria-hidden="true"
      >
        {IMAGES.map((_, index) => (
          <div
            key={index}
            className="
              relative
              flex-1
              h-1
              rounded-full
              overflow-hidden
              bg-white/35
            "
          >
            <div
              className={`
                absolute
                inset-y-0
                left-0
                bg-white
                rounded-full
                transition-[width]
                ${
                  current > index
                    ? "w-full duration-300"
                    : current === index && progress
                      ? "w-full duration-[3000ms]"
                      : "w-0 duration-300"
                }
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
