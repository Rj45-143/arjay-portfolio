"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel index="03" label="Projects" />
        <h2 className="mt-6 font-display font-bold text-3xl sm:text-4xl">
          Things I&apos;ve shipped
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group h-full flex flex-col justify-between rounded-2xl border border-line bg-surface/40 p-6 transition-colors hover:border-accent/60 hover:bg-surface"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-bold text-xl">{project.name}</h3>
                    {project.href && (
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-muted transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}
                  </div>
                  <span className="mt-2 inline-block font-mono-tag text-[10px] uppercase tracking-widest text-accent">
                    {project.status}
                  </span>
                  <p className="mt-4 text-sm text-muted leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-tag text-[11px] text-foreground/70 border border-line rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );

            return project.href ? (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {Card}
              </a>
            ) : (
              <div key={project.name}>{Card}</div>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-muted">
          Plus private/enterprise work under NDA — happy to walk through it on a call.
        </p>
      </div>
    </section>
  );
}
