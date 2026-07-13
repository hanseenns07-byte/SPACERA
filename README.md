# SPACERA — Interior Design Studio

A modern, elegant, premium and fully responsive website for **SPACERA**, an
interior design studio specialising in small‑space, Japandi (Japanese ×
Scandinavian) interiors.

Built to feel like a premium international architecture / interior studio —
spacious layout, soft shadows, rounded corners, warm neutral palette, smooth
Framer Motion animations, and elegant dark mode.

## Tech Stack

| Layer     | Tech                                                        |
| --------- | ----------------------------------------------------------- |
| Framework | **Next.js 14** (App Router) — pages **+** API routes        |
| UI        | **React 18**, **Tailwind CSS**, **Framer Motion**           |
| Icons     | **React Icons**                                             |
| Sliders   | **Swiper.js**                                               |
| Data      | **JSON‑shaped JS modules** (CMS/API‑ready, easy to migrate) |
| Fonts     | **Poppins** via `next/font` (self‑hosted, zero CLS)         |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project Structure

```
src/
├─ app/                      # App Router (pages, layouts, API, SEO)
│  ├─ layout.js              # Root layout: fonts, metadata, JSON‑LD, chrome
│  ├─ template.js            # Page‑transition animation wrapper
│  ├─ page.js                # Home
│  ├─ about/page.js          # About
│  ├─ portfolio/page.js      # Portfolio (filters + search)
│  ├─ portfolio/[slug]/page.js  # Dynamic project detail (SSG)
│  ├─ contact/page.js        # Contact (cards + form + map)
│  ├─ api/contact/route.js   # POST /api/contact (validation)
│  ├─ sitemap.js             # /sitemap.xml
│  ├─ robots.js              # /robots.txt
│  ├─ manifest.js            # PWA manifest
│  └─ icon.svg               # Favicon
├─ components/               # Reusable UI + section components
│  └─ sections/              # Home‑page section blocks
├─ data/                     # JSON‑shaped content (site, content, projects)
├─ hooks/                    # useTheme (dark mode), useCountUp (stats)
├─ utils/                    # icon lookup, motion variants
└─ app/globals.css           # Tailwind layers + brand styles
```

## Content & CMS Readiness

All content lives in `src/data/` as plain JS modules exporting JSON‑shaped
objects — designed so it can be swapped for a headless CMS or API later without
touching component code:

- `site.js` — company info, contact, social links, stats
- `content.js` — features, services, process, testimonials, FAQs, mission
- `projects.js` — the full portfolio (add a project by appending one object)

## Premium Features

- Interactive **Before / After** drag slider
- **Design Process** timeline (7 steps)
- Animated **statistics** counters (fire on scroll)
- **Instagram‑style** gallery
- Elegant **FAQ** accordion
- Floating **WhatsApp** button + sticky **Book Consultation** CTA
- Full **project detail** pages (overview, moodboard, before/after, gallery,
  3D renders, material palette, testimonial, related projects, CTA)
- **Search & category filters** on the portfolio
- **Dark mode** with persisted preference
- Scroll progress bar, page transitions, skeleton image loading, click‑to‑zoom
  lightbox, scroll‑reveal animations, parallax hero

## SEO & Performance

- Dynamic metadata + canonical URLs per page
- Open Graph + Twitter cards
- **JSON‑LD** structured data (business + per‑project)
- `sitemap.xml`, `robots.txt`, web manifest
- `next/image` optimisation, lazy loading, code splitting, SSG project pages

## Brand

| Token      | Value     |
| ---------- | --------- |
| Primary    | `#8A6645` |
| Secondary  | `#D9C6B3` |
| Accent     | `#B68C5A` |
| Background | `#F8F6F3` |
| Text       | `#2C2C2C` |
| Font       | Poppins   |

---

© SPACERA — Designing better spaces, creating better experiences.
