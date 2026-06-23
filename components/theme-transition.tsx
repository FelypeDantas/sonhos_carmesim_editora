"use client";

import {
AnimatePresence,
motion,
useReducedMotion,
type Transition,
} from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

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
darkGradient = "radial-gradient(circle at center, rgba(120,0,0,0.45), transparent 70%)",
lightGradient = "radial-gradient(circle at center, rgba(0,0,0,0.18), transparent 70%)",
opacity = 0.28,
scale = 1,
duration = 0.65,
blur = 6,
}: ThemeTransitionProps) {
const { resolvedTheme } = useTheme();
const [mounted, setMounted] = useState(false);

const prefersReducedMotion = useReducedMotion();

useEffect(() => {
setMounted(true);
}, []);

const isDark = resolvedTheme === "dark";

const transition = useMemo<Transition>(
() => ({
duration: prefersReducedMotion ? 0 : duration,
ease: EASE,
}),
[duration, prefersReducedMotion]
);

const backgroundStyle = useMemo(
() => ({
background: isDark ? darkGradient : lightGradient,
}),
[isDark, darkGradient, lightGradient]
);

const blurStyle = useMemo(
() => ({
backdropFilter: `blur(${blur}px)`,
WebkitBackdropFilter: `blur(${blur}px)`,
}),
[blur]
);

if (!mounted || !resolvedTheme) {
return null;
}

return ( <AnimatePresence mode="wait">
<motion.div
key={resolvedTheme}
initial={{
opacity: 0,
scale: scale * 1.08,
}}
animate={{
opacity,
scale,
}}
exit={{
opacity: 0,
scale: scale * 0.98,
}}
transition={transition}
className="
fixed
inset-0
z-50
pointer-events-none
overflow-hidden
will-change-transform
"
>
{/* Glow principal */} <div
       className="absolute inset-0"
       style={backgroundStyle}
     />

    {/* Desfoque suave */}
    <div
      className="absolute inset-0"
      style={blurStyle}
    />

    {/* Profundidade cinematográfica */}
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

    {/* Halo central */}
    <div
      className="
        absolute
        left-1/2
        top-1/2
        h-[40rem]
        w-[40rem]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-red-500/5
        blur-3xl
        dark:bg-red-500/10
      "
    />
  </motion.div>
</AnimatePresence>
);
}
