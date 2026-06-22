"use client";

import { useEffect, type ReactNode } from "react";
import { useTheme } from "@/hooks/useTheme";
import Lenis from "lenis";

function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}

function ThemeInitializer({ children }: { children: ReactNode }) {
  // Initialize theme from hook (which reads localStorage)
  useTheme();
  return <>{children}</>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeInitializer>
      <LenisProvider>{children}</LenisProvider>
    </ThemeInitializer>
  );
}
