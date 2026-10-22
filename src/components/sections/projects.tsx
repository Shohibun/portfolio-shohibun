"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { FiExternalLink, FiCheck, FiLayers } from "react-icons/fi";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-(--background-secondary)/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          subtitle="Real-world production applications and commercial platforms I have built and contributed to."
        />

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
                      {/* Gradient overlay for contrast */}
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
      </div>
    </section>
  );
}
