"use client";

import {
useCallback,
useEffect,
useRef,
useState,
} from "react";

interface Petal {
id: number;
left: number;
size: number;
duration: number;
rotation: number;
opacity: number;
delay: number;
}

const MAX_PETALS = 40;
const SPAWN_INTERVAL = 450;

export function Petals() {
const [petals, setPetals] = useState<Petal[]>([]);

const idRef = useRef(0);
const timeoutsRef = useRef<number[]>([]);

const clearAllTimeouts = useCallback(() => {
timeoutsRef.current.forEach(window.clearTimeout);
timeoutsRef.current = [];
}, []);

const createPetal = useCallback((): Petal => {
return {
id: idRef.current++,
left: Math.random() * 100,

  size: 10 + Math.random() * 14,

  duration: 6 + Math.random() * 4,

  rotation: Math.random() * 360,

  opacity: 0.4 + Math.random() * 0.5,

  delay: Math.random() * 0.5,
};

}, []);

useEffect(() => {
const reducedMotion = window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;
if (reducedMotion) {
  return;
}

const interval = window.setInterval(() => {
  const petal = createPetal();

  setPetals((prev) => {
    const next = [...prev, petal];

    if (next.length > MAX_PETALS) {
      return next.slice(-MAX_PETALS);
    }

    return next;
  });

  const timeout = window.setTimeout(() => {
    setPetals((prev) =>
      prev.filter((p) => p.id !== petal.id)
    );
  }, petal.duration * 1000);

  timeoutsRef.current.push(timeout);
}, SPAWN_INTERVAL);

return () => {
  clearInterval(interval);
  clearAllTimeouts();
};

}, [createPetal, clearAllTimeouts]);

return ( <div
   className="
     fixed
     inset-0
     z-10
     overflow-hidden
     pointer-events-none
   "
   aria-hidden="true"
 >
{petals.map((petal) => (
<div
key={petal.id}
className="petal absolute top-[-30px] will-change-transform"
style={{
left: `${petal.left}vw`,
        width: `${petal.size}px`,
        height: `${petal.size * 1.4}px`,

        opacity: petal.opacity,

        transform: `rotate(${petal.rotation}deg)`,

        animationDuration: `${petal.duration}s`,
        animationDelay: `${petal.delay}s`,
      }}
    />
  ))}
</div>
);
}
