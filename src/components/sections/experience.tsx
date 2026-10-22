"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Career History"
          title="Work Experience"
          subtitle="My professional journey in software engineering, frontend development, and technical collaboration."
        />

        <div className="relative border-l-2 border-border ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot Indicator */}
              <div
                className={`absolute -left-7.75 sm:-left-9.75 top-1.5 w-4 h-4 rounded-full border-2 border-surface ${
                  exp.isCurrent
                    ? "bg-accent ring-4 ring-accent-subtle"
                    : "bg-border"
                }`}
              />

              {/* Card Surface */}
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs hover:border-border-hover hover:shadow-sm transition-all">
                {/* Header Row: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                  <h3 className="text-xl font-bold text-text-primary">
                    {exp.role}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent-subtle px-2.5 py-1 rounded-full w-fit">
                    <FiCalendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Company & Location */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-text-secondary mb-4">
                  <span className="text-text-primary font-semibold text-sm">
                    {exp.company}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-text-muted">
                    <FiMapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Short Summary Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Responsibilities / Key Achievements */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Key Responsibilities & Contributions:
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary leading-normal"
                      >
                        <FiCheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
