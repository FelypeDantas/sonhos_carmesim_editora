"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Petal {
  id: number;
  left: number;
  duration: number;
  size: number;
}

const MAX_PETALS = 40;
const SPAWN_INTERVAL = 400;

export function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const idRef = useRef(0);
  const timeouts = useRef<number[]>([]);

  /**
   * 🧹 limpa todos os timers ativos
   */
  const clearAllTimeouts = useCallback(() => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  }, []);

  /**
   * 🌸 cria pétala com valores aleatórios
   */
  const createPetal = useCallback((): Petal => {
    return {
      id: idRef.current++,
      left: Math.random() * 100,
      duration: 5.5 + Math.random() * 3.5,
      size: 8 + Math.random() * 10,
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const petal = createPetal();

      setPetals((prev) => {
        const next = [...prev, petal];

        // 🧠 mantém limite de performance
        if (next.length > MAX_PETALS) {
          next.splice(0, next.length - MAX_PETALS);
        }

        return next;
      });

      // 🌬️ remoção individual sincronizada com duração
      const timeout = window.setTimeout(() => {
        setPetals((prev) => prev.filter((p) => p.id !== petal.id));
      }, petal.duration * 1000);

      timeouts.current.push(timeout);
    }, SPAWN_INTERVAL);

    return () => {
      clearInterval(interval);
      clearAllTimeouts();
    };
  }, [createPetal, clearAllTimeouts]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal absolute top-[-20px]"
          style={{
            left: `${petal.left}vw`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.4}px`,
            animationDuration: `${petal.duration}s`,
          }}
        />
      ))}
    </div>
  );
}