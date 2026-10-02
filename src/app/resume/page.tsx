"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Mail, Phone, MapPin } from "lucide-react";
import {
  profile,
  experience,
  skillGroups,
  education,
  eligibility,
  trainings,
  recognitions,
} from "@/lib/data";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-10 print:bg-white print:py-0">
      {/* Screen-only toolbar — hidden entirely when printing */}
      <div className="print:hidden mx-auto max-w-[850px] px-5 mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 bg-accent text-black font-semibold text-sm px-4 py-2.5 rounded-full hover:brightness-110 transition"
        >
          <Printer size={16} />
          Print / Save as PDF
        </button>
      </div>

      {/* The "paper" — white and black on purpose, even in the dark theme.
          This is the document a recruiter prints or forwards, so clarity
          beats brand flavor here. */}
      <div className="mx-auto max-w-[850px] bg-white text-neutral-900 rounded-xl shadow-2xl p-10 sm:p-14 print:rounded-none print:shadow-none print:p-0 print:max-w-none">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-neutral-900 pb-5">
          <div>
            <h1 className="font-display font-extrabold text-4xl tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-1 text-lg font-medium text-orange-600">{profile.title}</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-1.5">
              <Mail size={14} /> {profile.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={14} /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>
        </header>

        <p className="mt-5 text-[15px] leading-relaxed text-neutral-700">{profile.summary}</p>

        <Section title="Experience">
          <div className="space-y-5">
            {experience.map((job) => (
              <div key={job.company} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold text-[15px]">
                    {job.role} <span className="font-normal text-neutral-500">— {job.company}</span>
                  </h3>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">{job.period}</span>
                </div>
                <ul className="mt-1.5 space-y-1">
                  {job.points.map((point) => (
                    <li key={point} className="text-[13.5px] leading-snug text-neutral-700 pl-4 relative">
                      <span className="absolute left-0 top-[7px] w-1 h-1 rounded-full bg-neutral-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="space-y-1.5">
            {skillGroups.map((group) => (
              <p key={group.label} className="text-[13.5px] leading-snug">
                <span className="font-semibold">{group.label}:</span>{" "}
                <span className="text-neutral-700">{group.skills.join(" · ")}</span>
              </p>
            ))}
          </div>
        </Section>

        <Section title="Education & Eligibility">
          <div className="space-y-1.5">
            {education.map((item) => (
              <p key={item.title} className="text-[13.5px] leading-snug">
                <span className="font-semibold">{item.title}</span>
                <span className="text-neutral-500"> — {item.org}, {item.period}</span>
              </p>
            ))}
            <p className="text-[13.5px] leading-snug">
              <span className="font-semibold">{eligibility.title}</span>
              <span className="text-neutral-500"> — {eligibility.detail}</span>
            </p>
          </div>
        </Section>

        <Section title="Learning & Development">
          <div className="space-y-1.5">
            {trainings.map((item) => (
              <p key={item.title} className="text-[13.5px] leading-snug">
                <span className="font-semibold">{item.title}</span>
                <span className="text-neutral-500"> — {item.org}, {item.period}</span>
              </p>
            ))}
          </div>
        </Section>

        <Section title="Recognitions">
          <p className="text-[13.5px] leading-snug text-neutral-700">{recognitions.join(" · ")}</p>
        </Section>
      </div>

      <p className="print:hidden mx-auto max-w-[850px] px-5 mt-4 text-xs text-muted">
        This page is the resume — print or save it as a PDF with the button above. It's generated
        from the same data as the rest of the site, so it's always in sync.
      </p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6 break-inside-avoid">
      <h2 className="font-display font-bold text-xs uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1.5 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
