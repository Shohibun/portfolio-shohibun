"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  FiGlobe,
  FiSmartphone,
  FiMonitor,
  FiLayout,
  FiServer,
  FiGitBranch,
} from "react-icons/fi";

const serviceIconMap: Record<string, React.ElementType> = {
  FiGlobe,
  FiSmartphone,
  FiMonitor,
  FiLayout,
  FiServer,
  FiGitBranch,
};

export function Services() {
  const servicesRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(
      ".service-interactive-card",
      servicesRef.current
    );
    if (!cards.length) return;

    cards.forEach((card) => {
      const glow = card.querySelector(".ease-reverse-glow");
      const iconContainer = card.querySelector(".service-icon-box");

      const tl = gsap
        .timeline({ paused: true })
        .to(card, {
          y: -6,
          boxShadow: "0 14px 30px -10px rgba(0, 0, 0, 0.12)",
          duration: 0.38,
          ease: "power2.out",
        })
        .to(
          glow,
          {
            opacity: 1,
            duration: 0.38,
            ease: "power2.out",
          },
          0
        )
        .to(
          iconContainer,
          {
            scale: 1.12,
            rotate: 3,
            duration: 0.35,
            ease: "back.out(1.7)",
          },
          0
        );

      const onEnter = () => tl.timeScale(1).play();
      const onLeave = () => tl.timeScale(1.5).reverse();

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
    });
  }, { scope: servicesRef });

  return (
    <section ref={servicesRef} id="services" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Capabilities"
          title="What I Can Build"
          subtitle="Specialized software engineering services across web platforms, multiplatform mobile applications, and system integrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = serviceIconMap[svc.icon] || FiGlobe;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="service-interactive-card relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-xs flex flex-col justify-between"
              >
                {/* EaseReverse Radial Ambient Glow */}
                <div
                  className="ease-reverse-glow absolute -inset-px rounded-2xl pointer-events-none opacity-0 transition-opacity bg-radial from-accent/15 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="service-icon-box w-10 h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-4 will-change-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1.5">
                    {svc.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-background-secondary text-text-secondary border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
