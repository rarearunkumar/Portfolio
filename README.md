# Arunkumar — Portfolio

Editorial / minimal portfolio site for Arunkumar, Staff Product Designer (Bangalore).

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Entry animations use `IntersectionObserver` + CSS — no JS animation library.

## Run locally

You need Node 18.18+ installed. If you don't have it:

```bash
# macOS — install Node via Homebrew (recommended)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node

# or use nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
```

Then, from this directory:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & deploy

```bash
npm run build
npm start
```

For Vercel: push this folder to GitHub, "New Project" on vercel.com, import — zero config needed.

## Editing content

All copy and links live in [`lib/content.ts`](lib/content.ts) — name, role, bio, case studies, community entries, contact links. Update there, save, hot reload picks it up.

## Structure

```
app/
  layout.tsx        fonts, metadata, theme bootstrap script
  page.tsx          single-page composition
  globals.css       Tailwind v4 + design tokens (light/dark)
  robots.ts         /robots.txt route
components/
  Nav, Hero, About, Work, Community, Contact, Footer
  ThemeToggle       light/dark with localStorage
  Reveal            IntersectionObserver-driven entry animation
  SectionHeading    shared eyebrow + serif heading
lib/content.ts      single source of truth for all copy + links
public/favicon.svg
```

## Notes for Arunkumar

- **Email** in `lib/content.ts` is currently a placeholder (`hello@arunkumar.design`). Replace with your real email.
- **Hero tagline** can be tuned — I started with "Designing B2B, B2C, and 0‑to‑1 products for the past 12+ years." Edit `components/Hero.tsx` to change it.
- **OG image** — Next.js auto-generates one from your metadata. For a custom version, drop `public/og.png` (1200×630) and reference it in `app/layout.tsx`.
- **Theme defaults** to system preference. Toggle saves to `localStorage`.
