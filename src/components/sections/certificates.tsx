"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { Lightbox } from "@/components/ui/lightbox";

export function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Certificates"
          subtitle="Recognition of my learning journey and achievements"
        />

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(cert.image)}
              className="glass-card overflow-hidden cursor-pointer group"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent opacity-40" />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-foreground line-clamp-2">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-[var(--color-primary-400)] font-medium">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            src={selectedImage}
            alt="Certificate"
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
