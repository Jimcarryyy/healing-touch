# Healing Touch

A portfolio-grade marketing site for an independent family medicine practice. Built as a multi-page React application with intentional typography, a cohesive design system, and production-ready Vercel deployment.

**Live demo:** [healing-touch-design](https://github.com/Jimcarryyy/healing-touch-design) *(add your Vercel URL after deploy)*

---

## Overview

Healing Touch is a fictional healthcare practice site designed to demonstrate client-quality web development — clear information architecture, real UX patterns, and copy that reads specific rather than template-generated.

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Positioning, featured services, patient quotes |
| About | `/about` | Practice story, values, facility |
| Services | `/services` | Full service catalog |
| Service detail | `/services/:slug` | Deep-dive for primary care, pediatrics, integrative medicine |
| Team | `/team` | Clinician bios and photos |
| Contact | `/contact` | Appointment request form, hours, FAQ |

---

## Tech stack

- **Vite 5** + **React 18** + **TypeScript**
- **React Router 6** — client-side multi-page routing
- **Tailwind CSS 3** — sage/stone design tokens via CSS variables
- **shadcn/ui** — accessible form, navigation, and layout primitives
- **react-hook-form** + **zod** — contact form validation
- **TanStack Query** — app-level data layer (ready for API integration)

---

## Getting started

### Prerequisites

- Node.js 18 or 20
- npm

### Install and run

```bash
git clone https://github.com/Jimcarryyy/healing-touch-design.git
cd healing-touch-design
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Deployment (Vercel)

This project is configured for Vercel out of the box.

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

[`vercel.json`](vercel.json) includes SPA rewrites so all routes (`/about`, `/services/primary-care`, etc.) resolve correctly.

### Optional environment variables

| Variable | Description |
|----------|-------------|
| `VITE_FORM_ENDPOINT` | Formspree or Web3Forms URL for live contact form submission. Without it, the form validates and shows a success state client-side. |

---

## Project structure

```
src/
├── components/
│   ├── layout/       # SiteNav, SiteFooter, SiteLogo, Section, PageHeader
│   └── ui/           # shadcn/ui primitives
├── data/             # Site config, services, team, testimonials
├── hooks/            # usePageMeta, etc.
└── pages/            # Route-level page components
public/
├── logo.svg          # Header lockup
├── logo-mark.svg     # Icon mark
├── favicon.svg       # Browser tab icon
└── og-image.svg      # Open Graph preview
```

---

## Design system

- **Typography:** Fraunces (headings) + DM Sans (body/UI)
- **Palette:** Sage primary (`--primary: 158 32% 28%`) on warm stone backgrounds
- **Components:** Semantic tokens only — no hardcoded gradient utility classes

Content and configuration live in [`src/data/`](src/data/) for easy editing without touching layout code.

---

## Author

**Jimcarry Omambak** — [GitHub](https://github.com/Jimcarryyy)

Site designed and built as a portfolio demonstration of healthcare web development.

---

## License

This project is provided for portfolio and demonstration purposes.
