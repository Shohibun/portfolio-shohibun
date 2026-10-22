"use client";

import { motion } from "framer-motion";
import { organizations } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { FiUsers, FiCalendar, FiCheckCircle } from "react-icons/fi";

export function Organization() {
  return (
    <section id="organization" className="section-padding bg-(--background-secondary)/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Leadership"
          title="Organization & Community"
          subtitle="Leadership and collaborative initiatives within student organizations and technology communities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org, idx) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-border bg-surface p-6 shadow-xs hover:border-border-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                    <FiUsers className="w-4 h-4" />
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted bg-background-secondary px-2.5 py-1 rounded-full border border-border">
                    <FiCalendar className="w-3 h-3 text-accent" />
                    <span>{org.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {org.role}
                </h3>
                <p className="text-xs font-semibold text-accent mb-3">
                  {org.organization}
                </p>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  {org.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-border">
                {org.responsibilities.map((resp, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex items-start gap-2 text-xs text-text-secondary"
                  >
                    <FiCheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{resp}</span>
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
