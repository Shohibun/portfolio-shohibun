"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { Lightbox } from "@/components/ui/lightbox";
import { FiMaximize2, FiCalendar } from "react-icons/fi";

export function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Credentials"
          title="Certifications & Honors"
          subtitle="Formal academic recognitions, professional bootcamps, and institutional certifications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedImage(cert.image)}
              className="group rounded-2xl border border-border bg-surface overflow-hidden shadow-xs hover:border-border-hover hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-background-secondary border-b border-border">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2 rounded-full bg-white/90 text-slate-900 shadow-md">
                    <FiMaximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-(--surface)/90 backdrop-blur-xs border border-border text-[11px] font-medium text-text-secondary flex items-center gap-1 shadow-2xs">
                  <FiCalendar className="w-3 h-3 text-accent" />
                  <span>{cert.year}</span>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-accent font-medium">
                    {cert.issuer}
                  </p>
                </div>
                <p className="mt-2 text-xs text-text-muted line-clamp-2">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            src={selectedImage}
            alt="Certificate Preview"
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
