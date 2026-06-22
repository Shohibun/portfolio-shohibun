"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  FiGithub,
  FiLinkedin,
  FiInstagram,
};

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link, i) => {
        const Icon = iconMap[link.icon];
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full glass flex items-center justify-center text-foreground-muted hover:text-[var(--color-primary-400)] hover:border-[var(--color-primary-400)] hover:shadow-[0_0_20px_var(--glow)] transition-all duration-300"
            aria-label={link.name}
          >
            {Icon && <Icon className="w-5 h-5" />}
          </motion.a>
        );
      })}
    </div>
  );
}
