"use client";

import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiShadcnui, SiFlutter, SiDart, SiGit, SiGithub,
  SiFigma, SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { Skill } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiShadcnui, SiFlutter, SiDart, SiGit, SiGithub,
  SiFigma, SiPostman, VscVscode,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = iconMap[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="glass-card p-5 flex flex-col items-center gap-3 cursor-default group"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--glow)] group-hover:bg-[var(--glow-strong)] transition-colors">
        {Icon && <Icon className="w-6 h-6 text-[var(--color-primary-400)]" />}
      </div>
      <span className="text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}
