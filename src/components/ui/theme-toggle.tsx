"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-lg border border-border bg-surface opacity-70"
        aria-hidden="true"
      />
    );
  }

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getIcon = () => {
    if (theme === "system") {
      return <FiMonitor className="w-4 h-4 text-accent" />;
    }
    if (resolvedTheme === "dark") {
      return <FiMoon className="w-4 h-4 text-indigo-400" />;
    }
    return <FiSun className="w-4 h-4 text-amber-500" />;
  };

  const getLabel = () => {
    if (theme === "system") {
      return `Theme: System (${resolvedTheme || "auto"}). Click to switch to ${
        resolvedTheme === "dark" ? "Light" : "Dark"
      }.`;
    }
    if (theme === "light") {
      return "Theme: Light. Click to switch to Dark.";
    }
    return "Theme: Dark. Click to switch to System.";
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={getLabel()}
      title={getLabel()}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-surface hover:bg-background-secondary hover:border-border-hover text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
    >
      {getIcon()}
    </button>
  );
}
