"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { gsap, useGSAP } from "@/lib/gsap";
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
  const skillsRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const container = skillsRef.current;
    if (!container) return;

    // Hanya aktif pada pointer presisi (Desktop / Laptop)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const badges = gsap.utils.toArray<HTMLElement>(".proximity-badge", container);
    const maxRadius = 135; // radius pengaruh proximity dalam pixel
    const maxScale = 1.15;  // puncak scaling dock effect

    const handleMouseMove = (e: MouseEvent) => {
      badges.forEach((badge) => {
        const rect = badge.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        if (distance < maxRadius) {
          const intensity = 1 - distance / maxRadius;
          const targetScale = 1 + (maxScale - 1) * Math.pow(intensity, 1.4);

          gsap.to(badge, {
            scale: targetScale,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(badge, {
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });
    };

    const handleMouseLeave = () => {
      gsap.to(badges, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: skillsRef });

  return (
    <section ref={skillsRef} id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Expertise"
          title="Technical Skills"
          subtitle="A comprehensive overview of programming languages, frameworks, UI libraries, and development tools I use to deliver software."
        />

        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = categoryIconMap[cat.id] || FiTool;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border border-border bg-surface p-6 shadow-xs flex flex-col justify-between hover:border-border-hover hover:shadow-sm transition-all"
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

                  {/* Skills Chips / Grid with Proximity Scale */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {cat.skills.map((skill) => {
                      const Icon = iconMap[skill.icon];
                      return (
                        <div
                          key={skill.name}
                          className={`proximity-badge will-change-transform inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-default ${
                            skill.highlight
                              ? "bg-background-secondary border-border text-text-primary"
                              : "bg-surface border-border text-text-secondary"
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
