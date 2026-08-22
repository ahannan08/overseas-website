# Liberty Overseas Website

Premium Next.js website for **Liberty Overseas** — visa consultancy and test preparation academy in Hyderabad.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Embla Carousel
- Radix UI / shadcn-style components

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Pages (28 total)

| Route | Description |
|-------|-------------|
| `/` | Home — cinematic hero, services, destinations |
| `/overseas` | Visa services hub |
| `/overseas/visit-visa` | Visit visa |
| `/overseas/student-visa` | Student visa |
| `/overseas/business-visa` | Business visa |
| `/academy` | Academy hub |
| `/academy/ielts` | IELTS coaching |
| `/academy/pte` | PTE coaching |
| `/academy/gre` | GRE preparation |
| `/study-abroad` | Study abroad journey |
| `/destinations` | Destinations hub |
| `/destinations/[slug]` | 10 country pages |
| `/about` | About, mission, founders |
| `/success-stories` | Client testimonials |
| `/faq` | FAQ by category |
| `/contact` | Contact form & map |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms |
| `/disclaimer` | Disclaimer |

## Content

All business copy lives in `src/content/`:

- `site.ts` — contact info, stats, USPs
- `navigation.ts` — nav links
- `overseas.ts` — visa services
- `academy.ts` — IELTS/PTE/GRE data
- `destinations.ts` — country pages
- `faq.ts`, `founders.ts`, `success-stories.ts`, `study-abroad.ts`

Update these files to change site content without touching components.

## Images

Placeholder images use Unsplash URLs. Replace with Liberty's own assets in `public/images/` and update content files.

## Lead Form

The contact/lead form is UI-only for now. Work Permit selections show a rejection message and block submission. Wire up a backend (email API, CRM) in `src/components/forms/lead-form.tsx` when ready.

## SEO

- Per-page metadata via `createPageMetadata()` in `src/lib/utils.ts`
- `src/app/sitemap.ts` — auto-generated sitemap
- `src/app/robots.ts` — robots.txt
