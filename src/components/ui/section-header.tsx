"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  align = "center",
}: SectionHeaderProps) {
  const sub = subtitle || description;
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 sm:mb-16 ${isCenter ? "text-center" : "text-left"}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-subtle border border-accent/20 text-accent font-mono text-xs font-medium tracking-wide uppercase mb-3">
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>

      {sub && (
        <p
          className={`mt-3 text-text-secondary text-base sm:text-lg leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {sub}
        </p>
      )}
    </motion.div>
  );
}
