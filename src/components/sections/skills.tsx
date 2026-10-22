"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiSvelte,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiGreensock,
  SiCssmodules,
  SiFlutter,
  SiDart,
  SiElectron,
  SiTauri,
  SiPython,
  SiFlask,
  SiPostman,
  SiSupabase,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiLayout, FiSmartphone, FiServer, FiGlobe, FiTool } from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiSvelte,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiGreensock,
  SiCssmodules,
  SiFlutter,
  SiDart,
  SiElectron,
  SiTauri,
  SiPython,
  SiFlask,
  SiPostman,
  SiSupabase,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiVercel,
  SiNetlify,
  SiFigma,
  VscVscode,
  FiLayout,
  FiSmartphone,
};

const categoryIconMap: Record<string, React.ElementType> = {
  frontend: FiGlobe,
  ui: FiLayout,
  "mobile-desktop": FiSmartphone,
  backend: FiServer,
  tools: FiTool,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Expertise"
          title="Technical Skills"
          subtitle="A comprehensive overview of programming languages, frameworks, UI libraries, and development tools I use to deliver software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = categoryIconMap[cat.id] || FiTool;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-2xl border border-border bg-surface p-6 shadow-xs flex flex-col justify-between hover:border-border-hover hover:shadow-sm transition-all ${
                  idx === 0 || idx === 1 ? "md:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-primary">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-text-muted">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips / Grid */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {cat.skills.map((skill) => {
                      const Icon = iconMap[skill.icon];
                      return (
                        <div
                          key={skill.name}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                            skill.highlight
                              ? "bg-background-secondary border-border text-text-primary hover:border-accent/50"
                              : "bg-surface border-border text-text-secondary hover:text-text-primary"
                          }`}
                        >
                          {Icon && (
                            <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
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
