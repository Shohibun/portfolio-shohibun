"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiGitlab,
  FiCode,
  FiCheckCircle,
  FiCopy,
  FiCheck,
  FiAward,
  FiBriefcase,
  FiCpu,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";

const socialIconMap: Record<string, React.ElementType> = {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiGitlab,
};

const ROLES = [
  "Software Developer",
  "Web Platform Engineer",
  "Cross-Platform Mobile Developer",
  "Desktop Solutions Engineer",
];

const FLOATING_TECH = [
  { name: "Next.js 16", icon: SiNextdotjs, color: "text-indigo-400" },
  { name: "Flutter", icon: SiFlutter, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React 19", icon: SiReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Python", icon: SiPython, color: "text-amber-400" },
];

type ActiveTab = "profile" | "stack" | "console";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<ActiveTab>("profile");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const copyCode = () => {
    const textToCopy = `// Shohibun Najam Ilma - Software Developer
const developer = {
  name: "Shohibun Najam Ilma",
  role: "Software Developer",
  education: "S1 Informatika, Universitas Jember (Cum Laude 3.74)",
  experience: "PT. Senyum Media Utama & Central AI",
  platforms: ["Web", "Mobile (Flutter)", "Desktop"],
  contact: "${personalInfo.email}"
};`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & Dynamic Rotator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Availability Pill with Radar Pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/20 text-accent text-xs font-medium mb-5 shadow-2xs hover:border-accent/40 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>Available for Full-time Roles & Contracts</span>
            </motion.div>

            {/* Greeting */}
            <p className="text-base sm:text-lg font-medium text-text-secondary mb-1">
              {personalInfo.greeting}
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1] mb-3">
              {personalInfo.name}
            </h1>

            {/* Dynamic Animated Role Rotator with glowing prompt */}
            <div className="flex items-center gap-2.5 h-10 sm:h-12 mb-4 overflow-hidden">
              <span className="text-accent font-mono text-base sm:text-lg font-bold">
                &gt;
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 26, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -26, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold bg-linear-to-r from-accent via-indigo-500 to-cyan-500 bg-clip-text text-transparent"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="w-2 h-6 bg-accent animate-pulse ml-0.5 rounded-xs" />
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg font-medium text-text-primary mb-3">
              &ldquo;{personalInfo.valueProposition}&rdquo;
            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl mb-6">
              {personalInfo.supportingParagraph}
            </p>

            {/* Fast Credentials Bar */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-lg mb-8">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface/70 border border-border backdrop-blur-xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <FiAward className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-text-primary leading-tight">
                    3.74 GPA
                  </span>
                  <span className="text-[10px] text-text-muted truncate">
                    Cum Laude UNEJ
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface/70 border border-border backdrop-blur-xs">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-accent flex items-center justify-center shrink-0">
                  <FiBriefcase className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-text-primary leading-tight">
                    2+ Years
                  </span>
                  <span className="text-[10px] text-text-muted truncate">
                    Production Exp
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface/70 border border-border backdrop-blur-xs">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <FiCpu className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-text-primary leading-tight">
                    Full-Stack
                  </span>
                  <span className="text-[10px] text-text-muted truncate">
                    Web & Flutter
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-surface hover:bg-background-secondary hover:border-border-hover text-text-primary font-medium text-sm transition-all shadow-xs"
              >
                <FiDownload className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
              >
                <FiMail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-border w-full sm:max-w-md">
              <span className="text-xs font-medium text-text-muted mr-2">
                Find me on:
              </span>
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-background-secondary hover:border-accent hover:text-accent text-text-secondary flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Interactive Animated Code & System Terminal (No Photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Outer Ambient Glow Aura */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-accent/30 via-indigo-500/20 to-cyan-500/30 blur-lg opacity-60 animate-pulse pointer-events-none" />

              {/* Terminal Window Card */}
              <div className="relative rounded-2xl border border-border bg-surface/90 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-background-secondary/80">
                  {/* Traffic Light Dots */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block hover:opacity-100 transition-opacity" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block hover:opacity-100 transition-opacity" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Interactive Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("profile")}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                        activeTab === "profile"
                          ? "bg-surface text-text-primary font-semibold shadow-2xs border border-border"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      developer.ts
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("stack")}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                        activeTab === "stack"
                          ? "bg-surface text-text-primary font-semibold shadow-2xs border border-border"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      stack.json
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("console")}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                        activeTab === "console"
                          ? "bg-surface text-text-primary font-semibold shadow-2xs border border-border"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      terminal.sh
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={copyCode}
                    className="flex items-center gap-1 text-[11px] font-mono text-text-muted hover:text-accent transition-colors px-2 py-0.5 rounded border border-transparent hover:border-border"
                    title="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="w-3 h-3" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Animated Tab Body */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[290px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {activeTab === "profile" && (
                      <motion.div
                        key="profile"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1.5 text-text-secondary"
                      >
                        <p className="text-text-muted italic">
                          {"// Software Developer profile descriptor"}
                        </p>
                        <p>
                          <span className="text-purple-500 font-semibold">
                            export const
                          </span>{" "}
                          <span className="text-blue-500 font-semibold">
                            developer
                          </span>{" "}
                          = &#123;
                        </p>
                        <p className="pl-4">
                          <span className="text-text-primary">name:</span>{" "}
                          <span className="text-emerald-500">
                            &quot;Shohibun Najam Ilma&quot;
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          <span className="text-text-primary">role:</span>{" "}
                          <span className="text-emerald-500">
                            &quot;Software Developer&quot;
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          <span className="text-text-primary">degree:</span>{" "}
                          <span className="text-emerald-500">
                            &quot;S1 Informatika (Cum Laude 3.74)&quot;
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          <span className="text-text-primary">experience:</span>{" "}
                          <span className="text-cyan-500">
                            &quot;PT. Senyum Media Utama & Central AI&quot;
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          <span className="text-text-primary">platforms:</span> [
                          <span className="text-amber-500">&quot;Web&quot;</span>,{" "}
                          <span className="text-amber-500">
                            &quot;Mobile&quot;
                          </span>
                          ,{" "}
                          <span className="text-amber-500">
                            &quot;Desktop&quot;
                          </span>
                          ],
                        </p>
                        <p className="pl-4">
                          <span className="text-text-primary">status:</span>{" "}
                          <span className="text-emerald-500 font-semibold">
                            &quot;ready_to_deploy&quot;
                          </span>
                          ,
                        </p>
                        <p>&#125;;</p>
                      </motion.div>
                    )}

                    {activeTab === "stack" && (
                      <motion.div
                        key="stack"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1.5 text-text-secondary"
                      >
                        <p className="text-text-muted italic">
                          {"// Production technology architectures"}
                        </p>
                        <p>&#123;</p>
                        <p className="pl-4">
                          <span className="text-blue-500 font-semibold">
                            &quot;frontend&quot;
                          </span>
                          : [&quot;Next.js 16&quot;, &quot;React 19&quot;,
                          &quot;TypeScript&quot;, &quot;Tailwind CSS v4&quot;],
                        </p>
                        <p className="pl-4">
                          <span className="text-blue-500 font-semibold">
                            &quot;mobile&quot;
                          </span>
                          : [&quot;Flutter&quot;, &quot;Dart&quot;,
                          &quot;Riverpod&quot;, &quot;Bloc&quot;],
                        </p>
                        <p className="pl-4">
                          <span className="text-blue-500 font-semibold">
                            &quot;backend_api&quot;
                          </span>
                          : [&quot;Node.js&quot;, &quot;Python&quot;,
                          &quot;FastAPI&quot;, &quot;REST APIs&quot;],
                        </p>
                        <p className="pl-4">
                          <span className="text-blue-500 font-semibold">
                            &quot;databases&quot;
                          </span>
                          : [&quot;PostgreSQL&quot;, &quot;MySQL&quot;,
                          &quot;Supabase&quot;, &quot;Firebase&quot;],
                        </p>
                        <p className="pl-4">
                          <span className="text-blue-500 font-semibold">
                            &quot;tooling&quot;
                          </span>
                          : [&quot;Git&quot;, &quot;Docker&quot;,
                          &quot;Vercel&quot;, &quot;Linux&quot;]
                        </p>
                        <p>&#125;</p>
                      </motion.div>
                    )}

                    {activeTab === "console" && (
                      <motion.div
                        key="console"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 text-text-secondary"
                      >
                        <p className="text-text-muted">
                          <span className="text-accent">$</span> pnpm
                          build:portfolio --production
                        </p>
                        <p className="text-emerald-500 flex items-center gap-1.5">
                          <FiCheckCircle className="w-3.5 h-3.5" />
                          <span>Compiled successfully in 1.42s</span>
                        </p>
                        <p className="text-text-muted pl-4">
                          Route (app): <span className="text-text-primary">/</span>{" "}
                          (Static 24.8 kB)
                        </p>
                        <p className="text-text-muted">
                          <span className="text-accent">$</span> pnpm test --passWithNoTests
                        </p>
                        <p className="text-emerald-500 flex items-center gap-1.5">
                          <FiCheckCircle className="w-3.5 h-3.5" />
                          <span>All unit & lint checks passed (0 errors)</span>
                        </p>
                        <p className="text-cyan-500 flex items-center gap-1.5 pt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                          <span>Status: Online & Ready for Deployment</span>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Floating Tech Pill Row inside card */}
                  <div className="pt-3 mt-3 border-t border-border">
                    <p className="text-[11px] text-text-muted mb-2 flex items-center gap-1.5">
                      <FiCode className="w-3 h-3 text-accent" />
                      <span>Production Stack:</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {FLOATING_TECH.map((t, idx) => {
                        const TechIcon = t.icon;
                        return (
                          <motion.div
                            key={t.name}
                            animate={{
                              y: [0, -4, 0],
                            }}
                            transition={{
                              duration: 3 + idx * 0.4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: idx * 0.15,
                            }}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background-secondary border border-border text-[11px] text-text-primary shadow-2xs hover:border-accent hover:scale-105 transition-all cursor-default"
                          >
                            <TechIcon className={`w-3.5 h-3.5 ${t.color}`} />
                            <span>{t.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom Status Ribbon */}
                <div className="px-5 py-2.5 border-t border-border bg-background-secondary/80 flex items-center justify-between text-[11px] text-text-muted">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <FiCheckCircle className="w-3.5 h-3.5" />
                    <span>Next.js 16 • React 19 Engine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_#10b981]" />
                    <span>Live v2.4</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
