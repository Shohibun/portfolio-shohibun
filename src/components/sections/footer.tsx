"use client";

import { motion } from "framer-motion";
import { navItems, socialLinks, personalInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  FiGithub, FiLinkedin, FiInstagram,
};

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)]">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-400)]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold gradient-text">
              {personalInfo.name}
            </h3>
            <blockquote className="mt-4 text-sm text-foreground-muted italic border-l-2 border-[var(--color-primary-400)]/30 pl-4">
              &ldquo;The decree of Allah will surely come, so do not ask for it to be hastened.&rdquo;
              <footer className="mt-2 text-xs font-medium text-[var(--color-primary-400)] not-italic">
                — Qur&apos;an Surah An-Nahl: 1
              </footer>
            </blockquote>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-foreground-muted hover:text-[var(--color-primary-400)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground-muted hover:text-[var(--color-primary-400)] hover:border-[var(--color-primary-400)] transition-all"
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-center text-sm text-foreground-muted">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
