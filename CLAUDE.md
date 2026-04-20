# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sebastian Siedler. Built with Astro, React, Tailwind CSS v4, and Base UI. Hosted on Cloudflare Pages. Supports English (default) and German, dark and light mode.

## Architecture

- **`src/pages/index.astro`** — English page (served at `/`)
- **`src/pages/de/index.astro`** — German page (served at `/de`)
- **`src/layouts/Layout.astro`** — base layout: `<html>`, head, theme init script, header, footer
- **`src/components/`** — section components (Hero, Experience, Education, Research, Contact, Footer, Header) as Astro; ThemeToggle as React (needs `client:load`)
- **`src/i18n/en.ts` / `de.ts`** — all UI strings; `Translations` type enforces parity
- **`src/data/`** — typed content arrays: `experience.ts`, `education.ts`, `research.ts`
- **`src/lib/utils.ts`** — `cn()` helper (clsx + tailwind-merge)
- **`src/lib/dates.ts`** — `formatDate(dateStr, lang)` formats `"YYYY-MM"` strings to localized month/year
- **`public/assets/logos/`** — company/institution logos (PNG)
- **`public/assets/headshot.png`** — profile photo
- **`cv.md`** — source of truth for CV content (not rendered directly; data is in `src/data/`)

## Tech Stack

| Tool | Purpose |
|---|---|
| Astro 5 | Static site framework, i18n routing |
| React 19 | Interactive islands (ThemeToggle) |
| Tailwind CSS v4 | Styling via `@tailwindcss/vite` Vite plugin |
| `@base-ui/react` | Accessible headless primitives (Tooltip on ThemeToggle) |
| lucide-react | Icons (used in Astro components — renders as static SVG) |
| clsx + tailwind-merge | Conditional class merging |

## Commands

```bash
pnpm dev       # start dev server at localhost:4321
pnpm build     # build to dist/
pnpm preview   # preview dist/ locally
```

## Key Conventions

- **Dark mode**: Tailwind `dark:` variant with class strategy. `<html class="dark">` is set by an inline script in Layout.astro before hydration (no FOUC). ThemeToggle persists choice to `localStorage`.
- **i18n**: Add keys to both `src/i18n/en.ts` and `src/i18n/de.ts`. The `Translations` type (from `en.ts`) ensures both files stay in sync.
- **Content edits**: Update `src/data/` files — no changes to components needed. `cv.md` is for human reference only.
- **New sections**: Create an Astro component in `src/components/`, add it to both page files, and add a nav key to both i18n files.
- **Base UI imports**: The tooltip path re-exports as a namespace — use `import { Tooltip } from '@base-ui/react/tooltip'`, then `Tooltip.Root`, `Tooltip.Trigger`, etc.
- **Tailwind config**: Tailwind v4 has no `tailwind.config.js`. Configuration is in `src/styles/globals.css` using `@custom-variant` and CSS `@theme`.

## Deployment

Cloudflare Pages. Build command: `pnpm build`. Output directory: `dist/`. No server-side logic — fully static.
