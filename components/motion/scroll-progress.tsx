"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* 4-Stripe Heath Color Indicator Bar (Black / Gray / Cream / Cadmium Orange) */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-editorial-gray via-editorial-cream to-editorial-orange origin-left shadow-[0_0_8px_rgba(241,77,5,0.4)]"
        style={{ scaleX }}
        aria-hidden="true"
      />
    </div>
  );
}
