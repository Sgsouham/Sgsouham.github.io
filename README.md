# Sgsouham.github.io — Personal Portfolio

The personal portfolio of **Souham Ghosh** — AI Engineering Lead specializing in
model optimization, on-device AI enablement, and engineering leadership.

Built with **Next.js 15** (App Router) + **Tailwind CSS v4** + TypeScript, statically
exported to `out/` and deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
```

## Deployment

The repo auto-deploys to `https://sgsouham.github.io` on every push to `master`
via `.github/workflows/deploy.yml`.

> GitHub Pages must be configured to use **"GitHub Actions"** as the source
> (Settings → Pages → Source → GitHub Actions).

## Content

All content lives in **`lib/data.ts`** — profile, experience, projects, skills,
publications, and education. Edit that one file to update the site.
The resume PDF lives at `public/resume.pdf` (replace it with an updated version
when needed).

## Project status tags

Projects are tagged **Published** / **In Progress** / **Planned** in `lib/data.ts`.
When a planned project ships, add its links and change the status — the site
grows with you.
