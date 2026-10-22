"use client";

import { motion } from "framer-motion";
import { educationList } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { FiBookOpen, FiAward, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";

export function Education() {
  return (
    <section id="education" className="section-padding bg-(--background-secondary)/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Academics & Training"
          title="Education & Bootcamps"
          subtitle="Formal university education and specialized industry bootcamps that shaped my engineering foundation."
        />

        <div className="space-y-6">
          {educationList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs hover:border-border-hover transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                      {item.type === "degree" ? (
                        <FiAward className="w-4 h-4" />
                      ) : (
                        <FiBookOpen className="w-4 h-4" />
                      )}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-text-secondary pl-10">
                    <span className="font-semibold text-sm text-text-primary">
                      {item.institution}
                    </span>
                    {item.location && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-text-muted">
                          <FiMapPin className="w-3 h-3" />
                          <span>{item.location}</span>
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted bg-background-secondary px-3 py-1 rounded-full border border-border shrink-0 self-start">
                  <FiCalendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              {item.achievement && (
                <div className="my-3 pl-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <FiAward className="w-3.5 h-3.5" />
                    <span>{item.achievement}</span>
                  </span>
                </div>
              )}

              <p className="text-sm text-text-secondary leading-relaxed pl-10 mb-4">
                {item.description}
              </p>

              <div className="pl-10 space-y-1.5 pt-3 border-t border-border">
                {item.highlights.map((h, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-start gap-2 text-xs text-text-secondary"
                  >
                    <FiCheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
