"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import {
  FiMapPin,
  FiBriefcase,
  FiAward,
  FiDownload,
  FiArrowRight,
  FiCode,
} from "react-icons/fi";

export function About() {
  return (
    <section id="about" className="section-padding bg-(--background-secondary)/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Background"
          title="About Me"
          subtitle="A disciplined software developer dedicated to building responsive interfaces and robust digital applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center sm:items-start"
          >
            <div className="relative w-full rounded-2xl border border-border bg-surface p-6 shadow-xs overflow-hidden">
              {/* Profile Image with subtle border */}
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-border mb-5 bg-background-secondary">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-(--surface)/90 backdrop-blur-md border border-border text-xs font-medium text-text-primary shadow-2xs">
                  Software Developer
                </div>
              </div>

              {/* Metadata Highlights */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-background-secondary border border-border">
                  <FiMapPin className="w-4 h-4 text-accent shrink-0" />
                  <div>
                    <span className="text-text-muted block">Based in:</span>
                    <span className="font-semibold text-text-primary">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-background-secondary border border-border">
                  <FiBriefcase className="w-4 h-4 text-accent shrink-0" />
                  <div>
                    <span className="text-text-muted block">Current Employment:</span>
                    <span className="font-semibold text-text-primary">
                      Full Stack Developer at PT. Senyum Media Utama
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-background-secondary border border-border">
                  <FiAward className="w-4 h-4 text-accent shrink-0" />
                  <div>
                    <span className="text-text-muted block">Education:</span>
                    <span className="font-semibold text-text-primary">
                      S1 Informatika, UNEJ • Cum Laude (3.74)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Bio & Detailed Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary tracking-tight mb-4">
                Turning complex problems into clean, accessible digital experiences.
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base mb-4">
                Saya adalah seorang Software Developer yang berfokus pada pengembangan aplikasi Web,
                Mobile, dan Desktop. Dengan latar belakang akademis di bidang Teknik Informatika dan
                pengalaman langsung di industri, saya terbiasa membangun arsitektur antarmuka yang
                modular, mudah dirawat, dan cepat diakses oleh pengguna.
              </p>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Di <strong>PT. Senyum Media Utama</strong>, saya berkontribusi dalam perancangan
                web platform e-commerce dan aplikasi mobile cross-platform. Sebelumnya di{" "}
                <strong>PT. Central AI</strong>, saya berkontribusi pada pengembangan web
                perusahaan dan integrasi antarmuka dengan layanan kecerdasan buatan.
              </p>
            </div>

            {/* Quick Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl border border-border bg-surface text-left">
                <span className="text-2xl font-bold text-accent block">3.74</span>
                <span className="text-xs text-text-muted font-medium">
                  IPK Cum Laude (UNEJ)
                </span>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface text-left">
                <span className="text-2xl font-bold text-accent block">3+</span>
                <span className="text-xs text-text-muted font-medium">
                  Platforms (Web, App, Desk)
                </span>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface text-left col-span-2 sm:col-span-1">
                <span className="text-2xl font-bold text-accent block">9</span>
                <span className="text-xs text-text-muted font-medium">
                  Certifications & Honors
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white hover:bg-accent-hover font-medium text-sm transition-colors shadow-xs"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-surface hover:bg-background-secondary text-text-primary font-medium text-sm transition-colors"
              >
                <FiCode className="w-4 h-4 text-accent" />
                <span>Explore Technical Skills</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
