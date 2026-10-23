"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { gsap, useGSAP } from "@/lib/gsap";
import { interpolate } from "flubber";

export function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const splashContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const handleFinish = useCallback(() => {
    setIsDone(true);
  }, []);

  // SVG Path Morphing with Flubber + GSAP Engine
  useGSAP(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return;

    // Organic closed SVG shapes
    const shapeSquircle =
      "M50,10 C74,10 90,26 90,50 C90,74 74,90 50,90 C26,90 10,74 10,50 C10,26 26,10 50,10 Z";
    const shapeFluidBlob =
      "M50,6 C78,10 94,30 90,58 C86,84 66,94 44,90 C22,86 8,68 10,40 C12,18 24,4 50,6 Z";
    const shapeHexagon =
      "M50,10 L88,32 L88,68 L50,90 L12,68 L12,32 Z";

    const interpolator1 = interpolate(shapeSquircle, shapeFluidBlob, {
      maxSegmentLength: 2,
    });
    const interpolator2 = interpolate(shapeFluidBlob, shapeHexagon, {
      maxSegmentLength: 2,
    });
    const interpolator3 = interpolate(shapeHexagon, shapeSquircle, {
      maxSegmentLength: 2,
    });

    const proxy = { val1: 0, val2: 0, val3: 0 };

    const morphTl = gsap.timeline({ repeat: -1 });

    morphTl
      .to(proxy, {
        val1: 1,
        duration: 2.2,
        ease: "sine.inOut",
        onUpdate: () => {
          pathEl.setAttribute("d", interpolator1(proxy.val1));
        },
      })
      .to(proxy, {
        val2: 1,
        duration: 2.2,
        ease: "sine.inOut",
        onUpdate: () => {
          pathEl.setAttribute("d", interpolator2(proxy.val2));
        },
      })
      .to(proxy, {
        val3: 1,
        duration: 2.2,
        ease: "sine.inOut",
        onUpdate: () => {
          pathEl.setAttribute("d", interpolator3(proxy.val3));
        },
      });

    return () => {
      morphTl.kill();
    };
  }, { scope: splashContainerRef });

  useEffect(() => {
    // Prevent scrolling while splash is active
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const duration = 1800; // 1.8s for a snappy, premium feel

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          handleFinish();
        }, 200);
      }
    }, 20);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
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
          ref={splashContainerRef}
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(8px)",
            transition: {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          onClick={handleFinish}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center select-none bg-[#08090D] text-[#F8FAFC] cursor-pointer"
          role="dialog"
          aria-label="Loading portfolio"
          aria-live="polite"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.18, 0.3, 0.18],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-100 h-100 sm:w-125 sm:h-125 rounded-full bg-linear-to-tr from-indigo-500/20 via-accent/15 to-cyan-400/20 blur-[100px]"
            />
          </div>

          {/* Central Minimalist Card with SVG Shape Morphing */}
          <div className="relative z-10 flex flex-col items-center px-6">
            {/* SVG Morphing Emblem Frame */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-4">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full filter drop-shadow-[0_0_16px_rgba(129,140,248,0.35)]"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="splash-morph-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="50%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
                <path
                  ref={pathRef}
                  d="M50,10 C74,10 90,26 90,50 C90,74 74,90 50,90 C26,90 10,74 10,50 C10,26 26,10 50,10 Z"
                  fill="url(#splash-morph-gradient)"
                  fillOpacity="0.08"
                  stroke="url(#splash-morph-gradient)"
                  strokeWidth="1.8"
                />
              </svg>

              {/* Logo Emblem inside the morphing silhouette */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <Image
                  src={personalInfo.logo}
                  alt={personalInfo.name}
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
                Shohibun Najam Ilma
              </h1>
              <p className="mt-1 text-xs font-mono tracking-widest text-slate-400 uppercase">
                Software Developer
              </p>
            </motion.div>

            {/* Delicate Progress Track */}
            <div className="mt-8 flex flex-col items-center gap-2.5">
              <div className="w-48 sm:w-56 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-linear-to-r from-accent via-indigo-400 to-cyan-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              <span className="font-mono text-xs text-slate-500 tabular-nums">
                {progress}%
              </span>
            </div>
          </div>

          {/* Minimalist Hint at Bottom */}
          <div className="absolute bottom-6 font-mono text-[11px] text-slate-600 tracking-wider">
            Press{" "}
            <kbd className="px-1 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-500">
              ESC
            </kbd>{" "}
            or click to enter
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
