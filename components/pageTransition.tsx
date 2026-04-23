"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import "./pageTransition.css";

interface PageTransitionProps {
  children: React.ReactNode;
  duration?: number;
}

export default function PageTransition({
  children,
  duration = 650,
}: PageTransitionProps) {
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [renderedChildren, setRenderedChildren] =
    useState<React.ReactNode>(children);

  const timers = useRef<number[]>([]);
  const firstRender = useRef(true);

  /**
   * 🧹 limpa todos os timers ativos
   */
  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  /**
   * ⏱️ agenda timers de forma controlada
   */
  const setSafeTimeout = useCallback((fn: () => void, delay: number) => {
    const id = window.setTimeout(fn, delay);
    timers.current.push(id);
    return id;
  }, []);

  useEffect(() => {
    // 🚫 ignora primeira renderização
    if (firstRender.current) {
      firstRender.current = false;
      setRenderedChildren(children);
      return;
    }

    clearTimers();
    setIsTransitioning(true);

    const midPoint = duration * 0.5;

    // 🌗 troca de conteúdo no “meio do flip”
    setSafeTimeout(() => {
      setRenderedChildren(children);
    }, midPoint);

    // 🎭 finaliza transição
    setSafeTimeout(() => {
      setIsTransitioning(false);
    }, duration);

    return () => {
      clearTimers();
    };
  }, [pathname, children, duration, clearTimers, setSafeTimeout]);

  return (
    <>
      {/* 🎬 BOOK LAYER */}
      <div
        className={`transition-overlay ${
          isTransitioning ? "active" : ""
        }`}
        style={{
          transitionDuration: `${duration}ms`,
        }}
      />

      {/* 📄 CONTENT LAYER */}
      <div className="page-content">
        {renderedChildren}
      </div>
    </>
  );
}