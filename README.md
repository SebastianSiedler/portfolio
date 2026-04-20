# sebastiansiedler.com

Personal portfolio website for [Sebastian Siedler](https://sebastiansiedler.com).

## Stack

- [Astro 5](https://astro.build) — static site framework
- [React 19](https://react.dev) — interactive islands
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Base UI](https://base-ui.com) — accessible headless components
- [lucide-react](https://lucide.dev) — icons
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting

## Features

- English (default) and German versions (`/` and `/de`)
- Dark and light mode (system preference + manual toggle, no flash)
- Fully responsive (mobile + desktop)
- Static build — no server-side logic

## Development

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build
pnpm preview
```

## Content

- Work experience, education, and research data live in `src/data/`
- UI translations live in `src/i18n/en.ts` and `src/i18n/de.ts`
- Logos and headshot are in `public/assets/`
