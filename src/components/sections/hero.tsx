"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SocialIcons } from "@/components/ui/social-icons";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { FiDownload, FiArrowRight } from "react-icons/fi";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="gradient-mesh" />
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-foreground-muted text-lg mb-4"
            >
              Hello, I&apos;m {personalInfo.firstName} 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-xl sm:text-2xl font-medium text-foreground-secondary"
            >
              {personalInfo.titles.join(" & ")}
            </motion.p>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-foreground-muted text-lg leading-relaxed max-w-lg"
            >
              {personalInfo.valueProposition}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <MagneticButton
                variant="primary"
                href={personalInfo.cvUrl}
                download
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </MagneticButton>
              <MagneticButton variant="outline" href="#projects">
                View Projects
                <FiArrowRight className="w-4 h-4" />
              </MagneticButton>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10"
            >
              <SocialIcons />
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-full bg-[var(--color-primary-500)]/10 blur-3xl scale-110" />

              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] rounded-full border border-dashed border-[var(--color-primary-400)]/20"
              />

              {/* Code block visual */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl glass overflow-hidden flex items-center justify-center">
                <div className="p-6 font-mono text-sm space-y-2 text-left w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-foreground-muted"
                  >
                    <span className="text-[var(--color-primary-400)]">const</span>{" "}
                    <span className="text-amber-400">developer</span> = {"{"}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="pl-4 text-foreground-muted"
                  >
                    name: <span className="text-green-400">&quot;Shohibun&quot;</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pl-4 text-foreground-muted"
                  >
                    role: <span className="text-green-400">&quot;Developer&quot;</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="pl-4 text-foreground-muted"
                  >
                    skills: [<span className="text-orange-400">&quot;React&quot;</span>, <span className="text-orange-400">&quot;Flutter&quot;</span>],
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    className="pl-4 text-foreground-muted"
                  >
                    passion: <span className="text-green-400">&quot;Building&quot;</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                    className="text-foreground-muted"
                  >
                    {"}"};
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 1.3, duration: 1, repeat: Infinity }}
                    className="mt-2 w-2 h-5 bg-[var(--color-primary-400)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
