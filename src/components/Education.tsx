"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { education, eligibility, trainings, recognitions } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel index="05" label="Education & Credentials" />
        <h2 className="mt-6 font-display font-bold text-3xl sm:text-4xl">Background</h2>

        <div className="mt-14 grid md:grid-cols-3 gap-10">
          <Block icon={GraduationCap} title="Education" delay={0}>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.title}>
                  <p className="font-display font-semibold">{item.title}</p>
                  <p className="text-sm text-muted">
                    {item.org} · {item.period}
                  </p>
                </div>
              ))}
              <div>
                <p className="font-display font-semibold">{eligibility.title}</p>
                <p className="text-sm text-muted">{eligibility.detail}</p>
              </div>
            </div>
          </Block>

          <Block icon={Award} title="Learning & Development" delay={0.08}>
            <div className="space-y-4">
              {trainings.map((item) => (
                <div key={item.title}>
                  <p className="font-display font-semibold leading-snug">{item.title}</p>
                  <p className="text-sm text-muted">
                    {item.org} · {item.period}
                  </p>
                </div>
              ))}
            </div>
          </Block>

          <Block icon={Trophy} title="Recognitions" delay={0.16}>
            <ul className="space-y-3">
              {recognitions.map((item) => (
                <li key={item} className="text-sm text-foreground/90">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>
    </section>
  );
}

function Block({
  icon: Icon,
  title,
  delay,
  children,
}: {
  icon: typeof GraduationCap;
  title: string;
  delay: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-2.5 text-accent">
        <Icon size={18} />
        <h3 className="font-mono-tag text-xs uppercase tracking-widest">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </motion.div>
  );
}
