"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { navItems, socialLinks, personalInfo } from "@/lib/data";
import { FiX, FiGithub, FiLinkedin, FiInstagram, FiGitlab, FiDownload } from "react-icons/fi";
import { ThemeToggle } from "./ui/theme-toggle";

const iconMap: Record<string, React.ElementType> = {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiGitlab,
};

interface MobileNavProps {
  activeSection: string;
  onClose: () => void;
}

export function MobileNav({ activeSection, onClose }: MobileNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 26, stiffness: 220 }}
        className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-surface border-l border-border shadow-2xl flex flex-col justify-between"
      >
        {/* Top Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-border bg-surface p-0.5 shadow-2xs">
              <Image
                src={personalInfo.logo}
                alt={personalInfo.name}
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-sm tracking-tight text-text-primary">
              Shohibun Najam
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-colors"
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1.5">
          {navItems.map((item, i) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent-subtle text-accent font-semibold"
                    : "text-text-secondary hover:text-text-primary hover:bg-background-secondary"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
              </motion.a>
            );
          })}

          <div className="pt-4 mt-3 border-t border-border">
            <a
              href={personalInfo.cvUrl}
              download
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors shadow-sm"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Footer & Socials */}
        <div className="px-6 py-5 border-t border-border bg-background-secondary">
          <p className="text-xs text-text-muted mb-3">Connect with me:</p>
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                </a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </motion.div>
  );
}
