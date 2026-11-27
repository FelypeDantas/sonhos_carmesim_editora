
"use client";

import { useEffect, useRef, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  rotation: number;
  opacity: number;
  delay: number;
}

const MAX_PETALS = 28;
const SPAWN_INTERVAL = 600;

export function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [motionAllowed, setMotionAllowed] = useState(false);

  const idRef = useRef(0);

  const timeoutsRef = useRef(
    new Map<number, ReturnType<typeof setTimeout>>()
  );

  // Monitora a preferência de movimento do dispositivo
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setMotionAllowed(!mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  // Gerencia a criação e remoção das pétalas
  useEffect(() => {
    if (!motionAllowed) {
      setPetals([]);
      return;
    }

    let interval: ReturnType<typeof setInterval>;

    const createPetal = (): Petal => ({
      id: idRef.current++,
      left: Math.random() * 100,
      size: 10 + Math.random() * 14,
      duration: 8 + Math.random() * 4,
      rotation: Math.random() * 360,
      opacity: 0.35 + Math.random() * 0.4,
      delay: Math.random() * 0.5,
    });

    const spawnPetal = () => {
      const petal = createPetal();

      setPetals((previous) => [
        ...previous.slice(-(MAX_PETALS - 1)),
        petal,
      ]);

      const timeout = setTimeout(() => {
        timeoutsRef.current.delete(petal.id);

        setPetals((previous) =>
          previous.filter((item) => item.id !== petal.id)
        );
      }, (petal.duration + petal.delay) * 1000);

      timeoutsRef.current.set(petal.id, timeout);
    };

    interval = setInterval(spawnPetal, SPAWN_INTERVAL);

    return () => {
      clearInterval(interval);

      timeoutsRef.current.forEach((timeout) => {
        clearTimeout(timeout);
      });

      timeoutsRef.current.clear();
    };
  }, [motionAllowed]);

  if (!motionAllowed) return null;

  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        z-[1]
        overflow-hidden
        select-none
      "
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="
            petal
            absolute
            top-[-30px]
            will-change-transform
          "
          style={{
            left: `${petal.left}vw`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.4}px`,
            opacity: petal.opacity,
            rotate: `${petal.rotation}deg`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
