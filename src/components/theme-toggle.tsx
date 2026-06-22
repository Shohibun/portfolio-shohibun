"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer hover:border-[var(--color-primary-400)] transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      >
        {theme === "dark" ? (
          <FiMoon className="w-5 h-5 text-[var(--color-primary-400)]" />
        ) : (
          <FiSun className="w-5 h-5 text-amber-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
