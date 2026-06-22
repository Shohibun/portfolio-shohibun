"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { FiSend, FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const socialIconMap: Record<string, React.ElementType> = {
  FiGithub, FiLinkedin, FiInstagram,
};

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1c388c91-347d-4e12-80d8-4862fa076ae3",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: personalInfo.email,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's create something amazing"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                suppressHydrationWarning
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-[var(--background-secondary)] border border-[var(--border)] text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-[var(--color-primary-400)] focus:ring-1 focus:ring-[var(--color-primary-400)] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                suppressHydrationWarning
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-[var(--background-secondary)] border border-[var(--border)] text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-[var(--color-primary-400)] focus:ring-1 focus:ring-[var(--color-primary-400)] transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                suppressHydrationWarning
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-[var(--background-secondary)] border border-[var(--border)] text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-[var(--color-primary-400)] focus:ring-1 focus:ring-[var(--color-primary-400)] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_var(--glow-strong)] transition-all disabled:opacity-60 cursor-pointer"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent! ✓" : (
                <>
                  <FiSend className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Email card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card p-6 flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--glow)] flex items-center justify-center group-hover:bg-[var(--glow-strong)] transition-colors">
                <FiMail className="w-6 h-6 text-[var(--color-primary-400)]" />
              </div>
              <div>
                <p className="text-sm text-foreground-muted">Email</p>
                <p className="font-medium text-foreground">{personalInfo.email}</p>
              </div>
            </a>

            {/* Social Cards */}
            {socialLinks.map((link, i) => {
              const Icon = socialIconMap[link.icon];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card p-6 flex items-center gap-4 group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--glow)] flex items-center justify-center group-hover:bg-[var(--glow-strong)] transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-[var(--color-primary-400)]" />}
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">{link.name}</p>
                    <p className="font-medium text-foreground text-sm">{link.url.replace("https://", "").split("/").slice(0, 2).join("/")}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
