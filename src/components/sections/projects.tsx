"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { gsap, useGSAP } from "@/lib/gsap";
import { FiExternalLink, FiCheck, FiLayers, FiPlay, FiGrid } from "react-icons/fi";

export function Projects() {
  const [viewMode, setViewMode] = useState<"grid" | "reel">("grid");
  const reelContainerRef = useRef<HTMLDivElement>(null);
  const loopTweenRef = useRef<gsap.core.Tween | null>(null);

  // Repeated array for a perfectly continuous marquee loop
  const reelProjects = [...projects, ...projects, ...projects, ...projects];

  useGSAP(() => {
    if (viewMode !== "reel") return;

    const reel = reelContainerRef.current;
    if (!reel) return;

    const cards = gsap.utils.toArray<HTMLElement>(".infinite-project-card", reel);
    if (!cards.length) return;

    // Reset positions
    gsap.set(cards, { xPercent: 0 });

    const totalCards = cards.length;
    const cardWidthPercent = 100;

    const tween = gsap.to(cards, {
      xPercent: `-=${cardWidthPercent * (totalCards / 2)}`,
      duration: 22,
      ease: "none",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-cardWidthPercent * (totalCards / 2), 0),
      },
    });

    loopTweenRef.current = tween;

    const onEnter = () => gsap.to(tween, { timeScale: 0.15, duration: 0.6 });
    const onLeave = () => gsap.to(tween, { timeScale: 1, duration: 0.6 });

    reel.addEventListener("mouseenter", onEnter);
    reel.addEventListener("mouseleave", onLeave);

    return () => {
      reel.removeEventListener("mouseenter", onEnter);
      reel.removeEventListener("mouseleave", onLeave);
      tween.kill();
    };
  }, { scope: reelContainerRef, dependencies: [viewMode] });

  return (
    <section id="projects" className="section-padding bg-(--background-secondary)/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeader
            badge="Portfolio"
            title="Featured Projects"
            subtitle="Real-world production applications and commercial platforms I have built and contributed to."
          />

          {/* View Mode Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-surface border border-border shadow-2xs self-start sm:self-auto shrink-0 mb-4 sm:mb-8">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-accent text-white shadow-xs"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <FiGrid className="w-3.5 h-3.5" />
              <span>Detailed Case</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("reel")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === "reel"
                  ? "bg-accent text-white shadow-xs"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <FiPlay className="w-3.5 h-3.5" />
              <span>Infinite Reel</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Detailed Deep-Dive Case Studies */}
        {viewMode === "grid" && (
          <div className="space-y-12 sm:space-y-16">
            {projects.map((project, idx) => {
              const isReversed = idx % 2 === 1;
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-border bg-surface shadow-xs hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                    {/* Image Column */}
                    <div
                      className={`lg:col-span-7 relative p-4 sm:p-6 lg:p-8 bg-background-secondary flex items-center justify-center ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-border shadow-md group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 650px"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-xs text-white font-medium flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                            <FiExternalLink className="w-3.5 h-3.5" />
                            <span>View Live Platform</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-subtle text-accent text-xs font-semibold mb-3">
                          <FiLayers className="w-3.5 h-3.5" />
                          <span>{project.category}</span>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mb-3">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-text-secondary leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Key Features List */}
                        <div className="space-y-2 mb-6">
                          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                            Key Capabilities:
                          </p>
                          <ul className="space-y-1.5">
                            {project.features.map((feature, fIdx) => (
                              <li
                                key={fIdx}
                                className="flex items-start gap-2 text-xs text-text-secondary"
                              >
                                <FiCheck className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-background-secondary border border-border text-text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white hover:bg-accent-hover font-medium text-sm transition-all shadow-xs hover:shadow-sm"
                        >
                          <span>Visit Live Website</span>
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* View Mode 2: GSAP Infinite Card Slider Reel */}
        {viewMode === "reel" && (
          <div
            ref={reelContainerRef}
            className="relative w-full py-4 overflow-hidden select-none"
          >
            <div className="flex gap-6 w-max">
              {reelProjects.map((project, idx) => (
                <div
                  key={`${project.id}-reel-${idx}`}
                  className="infinite-project-card w-85 sm:w-105 rounded-3xl border border-border bg-surface shadow-md overflow-hidden flex flex-col justify-between shrink-0 group transition-all"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-background-secondary">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 340px, 420px"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border text-xs font-semibold text-accent">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-background-secondary border border-border text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-accent text-white hover:bg-accent-hover text-xs font-semibold transition-all shadow-xs"
                      >
                        <span>Visit Live Website</span>
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-text-muted mt-6">
              💡 Hover untuk memperlambat laju reel
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
