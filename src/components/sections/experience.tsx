"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { TimelineItem } from "@/components/ui/timeline-item";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All" },
  { key: "education", label: "Education" },
  { key: "internship", label: "Internship" },
  { key: "organization", label: "Organization" },
  { key: "course", label: "Courses" },
] as const;

export function Experience() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? experiences
    : experiences.filter((e) => e.category === filter);

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="My journey through education, work, and growth"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                filter === cat.key
                  ? "bg-[var(--color-primary-500)] text-white shadow-[0_0_20px_var(--glow)]"
                  : "glass text-foreground-muted hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-[5px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary-400)]/50 via-[var(--color-primary-500)]/30 to-transparent" />

          {filtered.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
