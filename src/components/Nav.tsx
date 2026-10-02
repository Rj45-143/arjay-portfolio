"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          AG<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono-tag text-xs uppercase tracking-wider text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/resume"
            className="group inline-flex items-center gap-1.5 text-xs font-mono-tag uppercase tracking-wider border border-line px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Resume
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-background px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1 font-mono-tag text-sm uppercase tracking-wider text-muted">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 border-b border-line/60 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/resume"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono-tag uppercase tracking-wider border border-line px-4 py-2 rounded-full"
          >
            Resume
            <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
    </header>
  );
}
