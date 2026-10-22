"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navItems, personalInfo } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./ui/theme-toggle";
import { FiMenu, FiDownload } from "react-icons/fi";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-(--surface)/90 backdrop-blur-md border-b border-border shadow-xs py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-border bg-surface p-0.5 shadow-2xs group-hover:border-accent transition-colors">
              <Image
                src={personalInfo.logo}
                alt={personalInfo.name}
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-text-primary leading-tight group-hover:text-accent transition-colors">
                Shohibun Najam
              </span>
              <span className="text-[11px] text-text-muted leading-none hidden sm:inline">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-(--surface-elevated)/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-border shadow-xs">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-white shadow-xs"
                      : "text-text-secondary hover:text-text-primary hover:bg-background-secondary"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Resume CTA + Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href={personalInfo.cvUrl}
              download
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border bg-surface hover:bg-background-secondary hover:border-border-hover text-xs font-medium text-text-primary transition-colors shadow-xs"
            >
              <FiDownload className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-xs font-medium text-white transition-colors shadow-xs"
            >
              Contact
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-surface text-text-primary hover:bg-background-secondary transition-colors"
              aria-label="Open navigation menu"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileNav
            activeSection={activeSection}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
