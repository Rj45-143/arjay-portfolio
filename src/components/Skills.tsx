"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel index="04" label="Skills" />
        <h2 className="mt-6 font-display font-bold text-3xl sm:text-4xl">What I work with</h2>

        <div className="mt-14 grid sm:grid-cols-3 gap-8 sm:gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="font-mono-tag text-xs uppercase tracking-widest text-accent">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-foreground/90 font-display font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
