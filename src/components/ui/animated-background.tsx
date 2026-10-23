"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  baseAlpha: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize, { passive: true });

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Palette per theme
    const isDark = resolvedTheme === "dark";
    const particleColors = isDark
      ? ["#818cf8", "#38bdf8", "#c084fc", "#67e8f9", "#a5b4fc"]
      : ["#6366f1", "#0284c7", "#9333ea", "#0d9488", "#4f46e5"];

    // Generate balanced amount of particles
    const particleCount = Math.min(Math.floor((width * height) / 28000), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.45 + 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        alpha: baseAlpha,
        baseAlpha,
      });
    }

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with subtle glowing lines
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * (isDark ? 0.12 : 0.08);
            ctx.strokeStyle = isDark
              ? `rgba(129, 140, 248, ${lineAlpha})`
              : `rgba(79, 70, 229, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      const mouse = mouseRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Gentle mouse interaction (particles push away subtly)
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          const force = (1 - mdist / 140) * 0.8;
          p.x += (mdx / mdist) * force * 1.5;
          p.y += (mdy / mdist) * force * 1.5;
        }

        // Breathing opacity
        const pulse = Math.sin(tick * 0.02 + i) * 0.15;
        const currentAlpha = Math.max(0.1, Math.min(1, p.baseAlpha + pulse));

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = isDark ? 6 : 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [resolvedTheme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Aurora Ambient Orb 1: Indigo & Electric Blue (Top-Left / Center) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-150 sm:w-212.5 h-150 sm:h-212.5 rounded-full bg-indigo-500/25 dark:bg-indigo-600/35 blur-[120px] sm:blur-[160px]"
      />

      {/* Aurora Ambient Orb 2: Vivid Cyan & Turquoise (Top-Right) */}
      <motion.div
        animate={{
          x: [0, -90, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/6 -right-40 w-137.5 sm:w-187.5 h-137.5 sm:h-187.5 rounded-full bg-cyan-400/25 dark:bg-cyan-500/30 blur-[110px] sm:blur-[150px]"
      />

      {/* Aurora Ambient Orb 3: Purple / Violet / Magenta (Middle-Left) */}
      <motion.div
        animate={{
          x: [0, 70, -50, 0],
          y: [0, 50, -70, 0],
          scale: [0.95, 1.15, 0.95, 0.95],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 -left-48 w-125 sm:w-175 h-125 sm:h-175 rounded-full bg-purple-500/20 dark:bg-purple-600/30 blur-[120px] sm:blur-[160px]"
      />

      {/* Aurora Ambient Orb 4: Rose / Pink Sunrise Warmth (Bottom-Right) */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.88, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute bottom-10 -right-28 w-125 sm:w-175 h-125 sm:h-175 rounded-full bg-rose-500/18 dark:bg-rose-600/25 blur-[120px] sm:blur-[150px]"
      />

      {/* Aurora Ambient Orb 5: Emerald & Mint Fresh Accent (Center-Bottom) */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 40, 0],
          scale: [0.9, 1.1, 0.95, 0.9],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
        className="absolute bottom-1/3 left-1/4 w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-emerald-500/15 dark:bg-emerald-600/20 blur-[130px] sm:blur-[170px]"
      />

      {/* Interactive Floating Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle Geometric Dot/Grid Mask */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.20]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 50%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 50%, transparent 85%)",
        }}
      />
    </div>
  );
}
