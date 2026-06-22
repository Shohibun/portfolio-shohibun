"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, suffix, label, delay = 0 }: StatCardProps) {
  const { count, ref } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-6 text-center"
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="mt-2 text-foreground-muted text-sm font-medium">
        {label}
      </div>
    </motion.div>
  );
}
