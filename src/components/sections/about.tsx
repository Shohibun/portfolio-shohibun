"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo, stats } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="The Person Behind The Code"
          subtitle="Get to know me better and my journey in tech"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-primary-600)] blur-2xl opacity-20 scale-110" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden glass-card p-1">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 grid grid-cols-3 gap-2 opacity-30">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[var(--color-primary-400)]" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-foreground-secondary text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              Actively participated in student organizations as Head of the Public Relations Division at HMIF, 
              and also served as a Teaching Assistant for the Artificial Intelligence course, enhancing technical 
              communication, teamwork, and collaboration skills in both academic and professional settings.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              I&apos;m passionate about creating impactful digital experiences and continuously learning new 
              technologies to stay at the forefront of web and mobile development.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
