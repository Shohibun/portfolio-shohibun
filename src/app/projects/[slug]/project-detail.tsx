"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { projects } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

export function ProjectDetail({ project }: { project: Project }) {
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#projects"
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground-muted hover:text-[var(--color-primary-400)] transition-colors"
          aria-label="Back to projects"
        >
          <FiArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--color-primary-400)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-foreground-muted max-w-2xl">
              {project.description}
            </p>
            <div className="mt-6 flex gap-4">
              {project.link && project.link !== "#" && (
                <MagneticButton variant="primary" href={project.link}>
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </MagneticButton>
              )}
              {project.github && (
                <MagneticButton variant="outline" href={project.github}>
                  <FiGithub className="w-4 h-4" />
                  GitHub
                </MagneticButton>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* Overview */}
        {project.longDescription && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold gradient-text mb-4">Project Overview</h2>
            <p className="text-foreground-muted leading-relaxed">{project.longDescription}</p>
          </motion.div>
        )}

        {/* Problem & Solution */}
        {(project.problem || project.solution) && (
          <div className="grid md:grid-cols-2 gap-8">
            {project.problem && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">🔍 Problem</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{project.problem}</p>
              </motion.div>
            )}
            {project.solution && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">💡 Solution</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{project.solution}</p>
              </motion.div>
            )}
          </div>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold gradient-text mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-4 flex items-start gap-3"
                >
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-[var(--color-primary-400)] shrink-0" />
                  <span className="text-sm text-foreground-secondary">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl glass text-sm font-medium text-[var(--color-primary-400)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related Projects */}
        <div>
          <h2 className="text-2xl font-bold gradient-text mb-6">More Projects</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedProjects.map((p) => (
              <Link key={p.id} href={`/projects/${p.slug}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card overflow-hidden group"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-[var(--color-primary-400)] transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass-card p-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Interested in working together?
          </h2>
          <p className="text-foreground-muted mb-8">
            Let&apos;s build something amazing.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <MagneticButton variant="primary" href={`mailto:${project.link !== "#" ? "shohibunnajam@gmail.com" : "shohibunnajam@gmail.com"}`}>
              Contact Me
            </MagneticButton>
            <MagneticButton variant="outline" href="/#projects">
              View More Projects
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
