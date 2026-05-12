# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # production build (also used to verify no TS/lint errors)
npm run lint      # ESLint
npm run start     # serve production build
```

> No test suite exists in this project.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — configured via `@theme inline` in `globals.css` (no `tailwind.config.ts`)
- **Motion (`motion/react`)** — framer-motion successor; use `import { motion } from "motion/react"`
- **shadcn/ui patterns** — components were created manually (do NOT use `npx shadcn add`; the CLI has npx cache issues on this machine)
- **Fonts**: `Inter` (display, `font-display`) · `DM_Sans` (body, `font-body`) — loaded via `next/font/google` in `layout.tsx`
- **Custom cursor**: `<Pointer>` component renders a custom cursor; `cursor-none` is set on `<body>`

## Architecture

### Page structure

`src/app/page.tsx` composes nine section components in order:
`Hero → Problems → Features → HowItWorks → Partners → Metrics → Testimonials → FAQ → FinalCTA`

`Hero` is eagerly imported; all other sections use `next/dynamic` for lazy loading and are wrapped in `<div className="content-auto">` for CSS containment.

`src/app/layout.tsx` wraps everything with `<Navbar>` and `<Footer>`.

### Component layers

| Directory | Purpose |
|---|---|
| `src/components/ui/` | Primitives: `button`, `badge`, `accordion`, `marquee`, `number-ticker`, `rainbow-button`, `magic-card`, `shine-border`, `blur-fade`, `text-animate`, `animated-grid-pattern`, `dot-pattern`, `meteors`, `particles`, `pointer` |
| `src/components/layout/` | `navbar.tsx`, `footer.tsx` |
| `src/components/sections/` | One file per homepage section (matches the list above) |
| `src/lib/utils.ts` | `cn()` — `clsx` + `tailwind-merge` helper |

### Styling conventions

- All brand tokens are CSS custom properties defined in `globals.css` and exposed to Tailwind via `@theme inline`. Use `text-brand-green`, `bg-brand-blue`, etc.
- Utility classes `.glass`, `.glow-green`, `.glow-green-text` are defined in `globals.css`.
- Background gradient blobs follow the pattern: `absolute` div with `bg-brand-*/opacity`, large `blur-[Npx]`, `pointer-events-none`, `rounded-full`.
- Sections use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for consistent horizontal padding.

### Animation patterns

All section entry animations use Motion with `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}` and staggered `delay` values. Scroll-triggered sections use `whileInView` with `viewport={{ once: true }}`.

## Marketing copy

`COPY-HOME.md` is the canonical source of truth for all text on the homepage. When updating copy in section components, sync from this file.
