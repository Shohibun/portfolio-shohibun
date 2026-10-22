"use client";

import Image from "next/image";
import { personalInfo, navItems, socialLinks } from "@/lib/data";
import { FiGithub, FiLinkedin, FiInstagram, FiGitlab, FiArrowUp } from "react-icons/fi";

const socialIconMap: Record<string, React.ElementType> = {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiGitlab,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface py-12 text-sm text-text-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border">
          {/* Brand Info with Logo Icon */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5 mb-1 group">
              <div className="relative w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-border bg-surface p-0.5">
                <Image
                  src={personalInfo.logo}
                  alt={personalInfo.name}
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-base text-text-primary group-hover:text-accent transition-colors">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-xs text-text-muted">
              {personalInfo.headline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-border bg-background-secondary hover:bg-surface hover:text-accent hover:border-accent text-text-secondary flex items-center justify-center transition-colors"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-text-primary transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
