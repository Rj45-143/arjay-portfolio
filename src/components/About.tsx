"use client";

import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel index="01" label="About" />

        <div className="mt-10 grid lg:grid-cols-5 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="font-display text-2xl sm:text-3xl leading-snug text-foreground/95">
              {profile.summary}
            </p>
            <p className="mt-6 text-muted leading-relaxed max-w-prose">
              I started out keeping networks and workstations running, then moved into
              software — now I design, build, and ship full stack products end-to-end,
              from a public transport platform used by real commuters to mission-critical
              backend systems for an American banking client.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border border-line rounded-2xl p-5 bg-surface/50">
                <p className="font-display font-bold text-3xl text-accent">{stat.value}</p>
                <p className="mt-1.5 text-xs text-muted leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono-tag text-xs uppercase tracking-widest text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" />
      {label}
    </div>
  );
}
