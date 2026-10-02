# Arjay Badillo Garalde — Portfolio

Personal portfolio site for Arjay Badillo Garalde, Full Stack Developer.
Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Hero, About, Experience, Projects, Skills, and Education sections
- A `/resume` page generated from the same data as the rest of the
  site, with a print/Save-as-PDF view
- All content lives in one place, [`src/lib/data.ts`](src/lib/data.ts)
  — no need to touch component code to update experience, projects,
  or skills

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll-triggered animation
- [Lucide](https://lucide.dev) icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project structure

```
src/
├── app/            # routes (home, /resume)
├── components/     # one component per homepage section
└── lib/data.ts     # all content — profile, experience, projects, skills, etc.
```
