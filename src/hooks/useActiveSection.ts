"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certificates",
  "services",
  "contact",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      // If user has scrolled near the bottom of the page, activate contact
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "home";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
