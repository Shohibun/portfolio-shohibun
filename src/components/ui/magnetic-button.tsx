"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
}

export function MagneticButton({
  children,
  variant = "primary",
  href,
  download,
  onClick,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white hover:shadow-[0_0_30px_var(--glow-strong)] hover:from-[var(--color-primary-400)] hover:to-[var(--color-primary-500)]",
    outline:
      "border border-[var(--border)] text-foreground hover:border-[var(--color-primary-400)] hover:text-[var(--color-primary-400)] hover:shadow-[0_0_20px_var(--glow)]",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} download={download} target={!download ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="cursor-pointer">
      {content}
    </button>
  );
}
