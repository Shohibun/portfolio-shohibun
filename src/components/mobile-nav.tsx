"use client";

import { motion } from "framer-motion";
import { navItems, socialLinks } from "@/lib/data";
import { FiX, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  FiGithub, FiLinkedin, FiInstagram,
};

interface MobileNavProps {
  onClose: () => void;
}

export function MobileNav({ onClose }: MobileNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-[75%] max-w-sm bg-[var(--card)] border-l border-[var(--border)] flex flex-col"
      >
        {/* Close */}
        <div className="flex justify-end p-6">
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer"
            aria-label="Close menu"
          >
            <FiX className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col justify-center px-8 gap-2">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={onClose}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="text-2xl font-semibold py-3 text-foreground-muted hover:text-[var(--color-primary-400)] transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 flex gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground-muted hover:text-[var(--color-primary-400)] transition-colors"
                aria-label={link.name}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </a>
            );
          })}
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}
