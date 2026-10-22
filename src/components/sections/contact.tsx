"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiGitlab,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from "react-icons/fi";

const socialIconMap: Record<string, React.ElementType> = {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiGitlab,
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
          subject: formData.subject || "New Inquiry from Developer Portfolio",
          message: formData.message,
          to: personalInfo.email,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-(--background-secondary)/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Get in Touch"
          title="Let's Build Something Meaningful."
          subtitle="Have a project in mind or want to discuss a development opportunity? Feel free to send a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs"
          >
            <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-text-primary mb-1.5"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    autoComplete="name"
                    suppressHydrationWarning
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background-secondary text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-text-primary mb-1.5"
                  >
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    autoComplete="email"
                    suppressHydrationWarning
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background-secondary text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-text-primary mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  autoComplete="off"
                  suppressHydrationWarning
                  value={formData.subject}
                  onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                  placeholder="Project Collaboration / Job Inquiry"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background-secondary text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-text-primary mb-1.5"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  suppressHydrationWarning
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about your project, timeline, or open role..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background-secondary text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>

              {/* Status Feedback */}
              {status === "sent" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  <FiCheckCircle className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-medium">
                  <FiAlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Unable to send message via form. Please email directly to{" "}
                    <a href={`mailto:${personalInfo.email}`} className="underline font-semibold">
                      {personalInfo.email}
                    </a>
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <FiLoader className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">
                    Direct Email
                  </h4>
                  <p className="text-xs text-text-muted mb-2">
                    Feel free to send an email anytime:
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">
                    Location
                  </h4>
                  <p className="text-xs text-text-muted mb-1">
                    Available for remote work worldwide & on-site collaboration:
                  </p>
                  <p className="text-sm font-semibold text-text-primary">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs">
              <h4 className="text-sm font-bold text-text-primary mb-3">
                Professional & Social Profiles
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-lg border border-border bg-background-secondary hover:bg-surface hover:border-accent hover:text-accent text-text-secondary text-xs font-medium transition-colors"
                    >
                      {Icon && <Icon className="w-4 h-4 text-accent" />}
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
