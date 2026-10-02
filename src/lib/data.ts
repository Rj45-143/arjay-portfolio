// Single source of truth for the portfolio's content. Edit here — the
// components just render whatever lives in this file.

export const profile = {
  name: "Arjay Garalde",
  firstName: "Arjay",
  title: "Full Stack Developer",
  tagline:
    "I build and ship full stack products end-to-end — from architecture to production.",
  summary:
    "6+ years progressing from hands-on IT support into full stack software engineering. Enterprise banking systems, public-facing booking platforms, and independent web apps — built, shipped, and maintained end-to-end.",
  location: "San Isidro, Rodriguez, Rizal, Philippines",
  email: "arjaygaralde45@gmail.com",
  phone: "0985 449 5444",
  // TODO(Arjay): drop in your real GitHub / LinkedIn handles when ready —
  // left blank on purpose instead of a fake/dead link.
  social: {
    github: "",
    linkedin: "",
  },
};

export const stats = [
  { label: "Years of experience", value: "6+" },
  { label: "Production platforms shipped", value: "3" },
  { label: "Companies worked with", value: "4" },
  { label: "Civil Service rating", value: "82.15%" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "iPick Booking Services / TNC",
    period: "Sep 2025 — Present",
    points: [
      "Built and shipped web and mobile applications from the ground up using React, Next.js, NestJS, TypeScript, and Ionic.",
      "Contributed as a developer on the iPickOfficial.com booking platform, working under the project's main developer.",
      "Developed iKomyut.com from the ground up, a public transport platform serving real commuters.",
      "Built a kiosk-mode ticketing POS app for iKomyut using Ionic, printing commuter tickets on demand, paired with a native Android launcher written in Kotlin to lock the kiosk hardware into that app.",
      "Designed and independently built FreeTapTools.com as a standalone web application.",
      "Engineered RESTful APIs and integrated frontend/backend services end-to-end.",
      "Owned deployment, maintenance, and continuous system enhancement across the full SDLC.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Accenture Inc.",
    period: "Oct 2023 — Jul 2025",
    points: [
      "Developed and maintained mission-critical backend systems for a major American banking client using COBOL, Natural, and Adabas.",
      "Translated complex business requirements into robust technical solutions and design documentation.",
      "Delivered system enhancements and production fixes under strict SDLC standards.",
      "Executed unit and integration testing, resolving defects to keep production systems stable.",
      "Collaborated across business analysts, QA, and development teams to push enhancements live.",
    ],
  },
  {
    role: "Property Custodian",
    company: "J.C. Rodriguez Construction Corp.",
    period: "May 2018 — Mar 2023",
    points: [
      "Managed and monitored company IT equipment and physical assets as the core of the role.",
      "Built Python tools for inventory tracking and analysis, filling the gap where no IT system existed yet in the company.",
      "Occasionally assisted the IT team with hardware/network troubleshooting and network setup.",
    ],
  },
  {
    role: "Service Crew / Crew Trainer",
    company: "McDonald's (Golden Arches Dev. Corp.), Montalban",
    period: "May 2015 — May 2018",
    points: [
      "Trained incoming crew members on service standards and store operations.",
      "Recognized as Employee of the Month and Crew of the Year (2015) for consistent performance.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  status: "Live" | "In development" | "Private";
};

export const projects: Project[] = [
  {
    name: "iPickOfficial.com",
    description:
      "Booking platform for iPick's ride and service bookings — contributed as a developer on the web app, mobile app, and backend APIs under the project's main developer.",
    tags: ["Next.js", "NestJS", "React", "Ionic", "TypeScript"],
    href: "https://ipickofficial.com",
    status: "Live",
  },
  {
    name: "iKomyut.com",
    description:
      "A public transport platform developed from the ground up for real commuters — fleet, dispatch, and operations tooling behind a public-facing commuter experience.",
    tags: ["Next.js", "NestJS", "MongoDB", "TypeScript"],
    href: "https://ikomyut.com",
    status: "Live",
  },
  {
    name: "FreeTapTools.com",
    description:
      "An independent, standalone web app designed and built solo — from idea to a working product in the wild.",
    tags: ["React", "Next.js", "TypeScript"],
    href: "https://freetaptools.com",
    status: "Live",
  },
  {
    name: "iKomyut Ticket Kiosk",
    description:
      "A kiosk-mode POS ticketing app for iKomyut, built with Ionic — prints commuter tickets on demand. Paired with a native Android launcher written in Kotlin that locks the kiosk hardware into the app.",
    tags: ["Ionic", "Kotlin", "Android", "POS"],
    status: "Live",
  },
];

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Ionic", "TypeScript", "JavaScript", "Kotlin (Android)"],
  },
  {
    label: "Backend",
    skills: ["NestJS", "REST API design & integration", "Python", "COBOL", "Natural", "Adabas"],
  },
  {
    label: "Tooling & Practice",
    skills: [
      "AI-Assisted Development",
      "Mobile App Development",
      "Network & Hardware Troubleshooting",
      "Technical Documentation",
    ],
  },
];

export type EducationItem = {
  title: string;
  org: string;
  period: string;
};

export const education: EducationItem[] = [
  { title: "BS Computer Engineering", org: "Colegio De Montalban", period: "2018" },
  { title: "NC II, Computer System Servicing", org: "TESDA Region 4-A", period: "2018" },
];

export const eligibility = {
  title: "Career Service Professional",
  detail: "Rating: 82.15% | 2023",
};

export const trainings: { title: string; org: string; period: string }[] = [
  {
    title: "Generative AI for Software Development: Best Practices in AI-Assisted Coding",
    org: "Accenture (In-house Certification)",
    period: "2025 · 72 hrs.",
  },
  {
    title: "Construction Occupation Safety and Health Training",
    org: "J.C. Rodriguez Construction Corp.",
    period: "2018 · 40 hrs.",
  },
  {
    title: "On-the-Job Training, Career Executive Service Board",
    org: "Colegio De Montalban",
    period: "2017 · 300 hrs.",
  },
];

export const recognitions: string[] = [
  "Employee of the Month — McDonald's",
  "Crew of the Year 2015 — McDo Philippines",
  "All-Star Market Wide Champion 2015",
];
