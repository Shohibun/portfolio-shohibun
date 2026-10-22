"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

const STATUS_LOGS = [
  "INITIALIZING SYSTEM ARCHITECTURE...",
  "LOADING CORE DESIGN TOKENS...",
  "CONFIGURING MULTIPLATFORM RUNTIMES...",
  "ESTABLISHING SECURE CONNECTION...",
  "SYSTEM DEPLOYED. WELCOME.",
];

export function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);

  const handleFinish = useCallback(() => {
    setIsDone(true);
  }, []);

  useEffect(() => {
    // Prevent scrolling while splash screen is active
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0 to 100
    const startTime = Date.now();
    const duration = 2100; // 2.1 seconds for an optimal cinematic experience

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      // Advance status log based on milestones
      if (current >= 85) setStatusIndex(4);
      else if (current >= 60) setStatusIndex(3);
      else if (current >= 38) setStatusIndex(2);
      else if (current >= 15) setStatusIndex(1);
      else setStatusIndex(0);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          handleFinish();
        }, 280);
      }
    }, 24);

    // Keyboard shortcut to skip (ESC or Space)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleFinish]);

  useEffect(() => {
    if (isDone) {
      document.body.style.overflow = "";
    }
  }, [isDone]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(14px)",
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-between select-none bg-[#090B10] text-[#F8FAFC] overflow-hidden"
          role="dialog"
          aria-label="Loading portfolio"
          aria-live="polite"
        >
          {/* Ambient Radiant Glow Background Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-600/30 via-accent/20 to-cyan-500/25 blur-[120px]"
            />
            {/* Tech grid mask */}
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              }}
            />
          </div>

          {/* Top HUD Bar */}
          <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between font-mono text-[11px] text-slate-400">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wider uppercase font-medium text-slate-300">
                SYS_ONLINE // V2.6
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-slate-500 text-[10px] tracking-widest uppercase">
              <span>LAT: -8.1724° S</span>
              <span>•</span>
              <span>LON: 113.7007° E</span>
              <span>•</span>
              <span className="text-accent font-semibold">JEMBER, ID</span>
            </div>

            <button
              type="button"
              onClick={handleFinish}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer text-[10px] tracking-wider uppercase font-mono"
            >
              <span>SKIP</span>
              <kbd className="px-1 py-0.5 rounded bg-slate-800 border border-slate-700 text-[9px]">ESC</kbd>
            </button>
          </header>

          {/* Centerpiece: Emblem, HUD Ring & Brand Reveal */}
          <main className="relative z-10 flex flex-col items-center justify-center my-auto px-6">
            {/* Animated Logo Container with Concentric Radar Rings */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Outer Orbiting Segmented Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-dashed border-indigo-400/30"
              />

              {/* Reverse Rotating Thin Accent Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-cyan-400/20"
              />

              {/* Pulsing Glow Ring */}
              <motion.div
                animate={{
                  scale: [0.95, 1.08, 0.95],
                  opacity: [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-indigo-500/25 blur-xl"
              />

              {/* Central Logo Box */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-900/90 border border-indigo-500/40 shadow-[0_0_40px_rgba(79,70,229,0.35)] p-3 flex items-center justify-center backdrop-blur-md"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={personalInfo.logo}
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Name & Headline with Reveal Motion */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white font-sans">
                Shohibun Najam Ilma
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm font-mono tracking-widest text-indigo-300/80 uppercase">
                Software Developer // Portfolio
              </p>
            </motion.div>

            {/* Progress Percentage Display */}
            <div className="mt-8 flex items-baseline gap-1 font-mono">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white tabular-nums">
                {String(progress).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold text-accent">%</span>
            </div>

            {/* Futuristic Gradient Progress Track */}
            <div className="mt-4 w-60 sm:w-72 h-1.5 rounded-full bg-slate-800/80 overflow-hidden p-0.5 border border-slate-700/60 shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-indigo-300 relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              >
                {/* Glowing Leading Head */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              </motion.div>
            </div>

            {/* Typewriter Status Message */}
            <div className="mt-5 h-5 flex items-center justify-center font-mono text-[11px] text-slate-400 tracking-wider">
              <span className="text-accent font-semibold mr-1.5">&gt;</span>
              <span className="uppercase">{STATUS_LOGS[statusIndex]}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-3 bg-indigo-400 ml-1"
              />
            </div>
          </main>

          {/* Bottom Footer Info Bar */}
          <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-slate-900/60">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                NEXT.JS 16
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                REACT 19
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                TAILWIND 4
              </span>
            </div>

            <div className="text-right tracking-widest uppercase">
              <span>INITIALIZING DIGITAL EXPERIENCE</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
