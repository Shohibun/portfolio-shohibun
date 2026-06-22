"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Experience } from "@/lib/data";

interface TimelineItemProps {
  item: Experience;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative flex w-full",
        "md:justify-center",
        "mb-8 md:mb-12"
      )}
    >
      {/* Desktop: alternating layout */}
      <div className={cn(
        "w-full md:w-[45%] flex",
        isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      )}>
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-card p-6 w-full"
        >
          {/* Date badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-primary-500)]/10 text-[var(--color-primary-400)] border border-[var(--color-primary-400)]/20 mb-3">
            {item.startDate} — {item.endDate}
          </div>

          <h3 className="text-lg font-bold text-foreground">
            {item.title}
          </h3>
          <p className="text-sm text-[var(--color-primary-400)] font-medium mt-1">
            {item.position} • {item.organization}
          </p>
          <p className="text-foreground-muted text-sm mt-3 leading-relaxed">
            {item.description}
          </p>

          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <ul className="mt-3 space-y-1">
              {item.achievements.map((a, i) => (
                <li key={i} className="text-xs text-foreground-muted flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-primary-400)] shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      {/* Center dot (desktop only) */}
      <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-[var(--color-primary-500)] border-4 border-[var(--background)] shadow-[0_0_10px_var(--glow)]" />
      </div>

      {/* Mobile left dot */}
      <div className="md:hidden absolute left-0 top-8 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[var(--color-primary-500)]" />
      </div>
    </motion.div>
  );
}
