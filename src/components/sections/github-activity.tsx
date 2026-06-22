"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
}

export function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Shohibun")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => {});
  }, []);

  const stats = data
    ? [
        { label: "Repositories", value: data.public_repos },
        { label: "Followers", value: data.followers },
        { label: "Following", value: data.following },
      ]
    : [];

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="My Contributions & Activity"
          subtitle="A snapshot of my open source journey on GitHub"
        />

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-8 overflow-hidden"
        >
          <div className="w-full overflow-x-auto">
            <Image
              src="https://ghchart.rshah.org/0ea5e9/Shohibun"
              alt="GitHub Contribution Graph"
              width={800}
              height={120}
              className="w-full h-auto min-w-[600px]"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Stats */}
        {data && (
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-foreground-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
