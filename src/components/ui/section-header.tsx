"use client";

import { motion } from "framer-motion";

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[var(--color-primary-400)] to-[var(--color-primary-600)]" />
    </motion.div>
  );
}
