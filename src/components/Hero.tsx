"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

const STACK = ["React", "Next.js", "NestJS", "TypeScript", "Ionic", "MongoDB"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      <div className="absolute inset-0 glow pointer-events-none" style={{ ["--y" as string]: "-10%" }} />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-tag text-xs uppercase tracking-[0.2em] text-accent mb-6"
        >
          {"// "}Available for side projects &amp; freelance work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-extrabold text-[13vw] leading-[0.95] sm:text-7xl lg:text-8xl tracking-tight"
        >
          {profile.firstName}
          <br />
          <span className="text-gradient">Garalde</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-xl"
        >
          <p className="text-lg sm:text-xl text-foreground/90">
            <span className="font-display font-semibold">{profile.title}.</span>{" "}
            {profile.tagline}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} className="text-accent shrink-0" />
            {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-black font-semibold px-6 py-3.5 rounded-full hover:brightness-110 transition"
          >
            <Mail size={17} />
            Let&apos;s build something
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-line px-6 py-3.5 rounded-full font-semibold hover:border-accent hover:text-accent transition"
          >
            View work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <span className="font-mono-tag text-[11px] uppercase tracking-widest text-muted">
            Core stack
          </span>
          {STACK.map((item) => (
            <span key={item} className="font-mono-tag text-xs text-foreground/70">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 0.8, duration: 0.6 }, y: { duration: 1.8, repeat: Infinity } }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full border border-line text-muted hover:text-accent hover:border-accent transition-colors"
      >
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
