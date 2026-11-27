
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

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
  const prefersReducedMotion = useReducedMotion();

  const [isTransitioning, setIsTransitioning] = useState(false);

  const previousPathname = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Limpa qualquer transição anterior
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Controla as transições entre rotas
  useEffect(() => {
    if (previousPathname.current === pathname) {
      return;
    }

    previousPathname.current = pathname;

    // Cancela uma transição anterior, caso haja navegação rápida
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Respeita a preferência de movimento reduzido
    if (prefersReducedMotion) {
      setIsTransitioning(false);
      return;
    }

    const safeDuration = Math.max(0, duration);

    if (safeDuration === 0) {
      setIsTransitioning(false);
      return;
    }

    setIsTransitioning(true);

    timerRef.current = setTimeout(() => {
      setIsTransitioning(false);
      timerRef.current = null;
    }, safeDuration);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [pathname, duration, prefersReducedMotion]);

  return (
    <div
      className="page-transition-root"
      aria-busy={isTransitioning}
    >
      {/* Camada cinematográfica */}
      <div
        className={`transition-overlay ${
          isTransitioning ? "active" : ""
        }`}
        style={{
          transitionDuration: `${Math.max(0, duration)}ms`,
        }}
        aria-hidden="true"
      />

      {/* Conteúdo da página */}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
