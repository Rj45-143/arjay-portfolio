"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionLabel } from "./About";
import GithubMark from "./GithubMark";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-line overflow-hidden">
      <div className="absolute inset-0 glow pointer-events-none" style={{ ["--y" as string]: "100%" }} />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel index="06" label="Contact" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 font-display font-extrabold text-4xl sm:text-6xl leading-tight max-w-3xl"
        >
          Got a project in mind?{" "}
          <span className="text-gradient">Let&apos;s build it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-xl text-muted"
        >
          Open to freelance and side projects — web apps, mobile apps, and backend
          systems. Reach out and let&apos;s talk about what you&apos;re building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center justify-between gap-6 bg-accent text-black font-semibold px-6 py-4 rounded-full hover:brightness-110 transition"
          >
            <span className="inline-flex items-center gap-2">
              <Mail size={18} />
              {profile.email}
            </span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 border border-line px-6 py-4 rounded-full font-semibold hover:border-accent hover:text-accent transition"
          >
            <Phone size={18} />
            {profile.phone}
          </a>
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-6 py-4 rounded-full font-semibold hover:border-accent hover:text-accent transition"
            >
              <GithubMark size={18} />
              GitHub
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
