"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import {
  FiGlobe,
  FiSmartphone,
  FiMonitor,
  FiLayout,
  FiServer,
  FiGitBranch,
} from "react-icons/fi";

const serviceIconMap: Record<string, React.ElementType> = {
  FiGlobe,
  FiSmartphone,
  FiMonitor,
  FiLayout,
  FiServer,
  FiGitBranch,
};

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Capabilities"
          title="What I Can Build"
          subtitle="Specialized software engineering services across web platforms, multiplatform mobile applications, and system integrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = serviceIconMap[svc.icon] || FiGlobe;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-6 shadow-xs hover:border-border-hover hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1.5">
                    {svc.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-background-secondary text-text-secondary border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
