"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel index="02" label="Experience" />
        <h2 className="mt-6 font-display font-bold text-3xl sm:text-4xl">
          Where I&apos;ve built things
        </h2>

        <div className="mt-14 relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-line" />
          <ol className="space-y-12">
            {experience.map((job, i) => (
              <motion.li
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-8 sm:pl-10"
              >
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full bg-background border-2 border-accent" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display font-bold text-xl sm:text-2xl">{job.role}</h3>
                  <span className="font-mono-tag text-xs text-muted uppercase tracking-wider">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-accent font-medium">{job.company}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted/70 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
