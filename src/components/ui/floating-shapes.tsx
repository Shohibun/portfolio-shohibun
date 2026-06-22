"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large ring */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -right-20 w-64 h-64 rounded-full border border-[var(--color-primary-400)]/10"
      />

      {/* Filled circle */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[10%] w-3 h-3 rounded-full bg-[var(--color-primary-400)]/30"
      />

      {/* Small ring */}
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-60 right-[20%] w-6 h-6 rounded-full border border-[var(--color-primary-400)]/20"
      />

      {/* Dot */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-[25%] w-2 h-2 rounded-full bg-[var(--color-primary-500)]/20"
      />

      {/* Medium ring */}
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 right-[10%] w-40 h-40 rounded-full border border-[var(--color-primary-500)]/10"
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--color-primary-500)]/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-[var(--color-primary-400)]/5 blur-3xl" />
    </div>
  );
}
