"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  // Keep server-rendered routes readable even before hydration so static content
  // never ships hidden behind an inline opacity style.
  const animation = prefersReducedMotion
    ? {}
    : {
        initial: false,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: {
          duration: 0.65,
          delay,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <motion.div className={className} {...animation}>
      {children}
    </motion.div>
  );
}
