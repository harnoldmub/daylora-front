# Daylora Marketing

## Overview
Daylora is a French-language event orchestration platform marketing/landing page. This is a frontend-only Vite + React + TypeScript project that serves as the public-facing marketing site at daylora.co.

## Project Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS v3 with custom theme, tailwindcss-animate, @tailwindcss/typography
- **UI Components**: Radix UI primitives + shadcn/ui pattern
- **Routing**: wouter
- **State Management**: @tanstack/react-query
- **Animation**: framer-motion
- **Cookie Consent**: Custom module (`client/src/lib/cookie-consent.ts` + `client/src/components/CookieBanner.tsx`)
- **Structure**:
  - `client/` — Frontend source (index.html, src/)
  - `client/src/pages/` — Page components (LandingPage, PublicProxyPage, legal pages)
  - `client/src/components/` — Reusable UI components (CookieBanner, etc.)
  - `client/src/layouts/` — Layout components
  - `client/src/hooks/` — Custom React hooks
  - `client/src/lib/` — Utility functions (cookie-consent, queryClient, etc.)
  - `packages/shared/` — Shared types/utilities
  - `attached_assets/` — Static images and assets
  - `dist/public/` — Build output
  - `client/public/sitemap.xml` — SEO sitemap
  - `client/public/robots.txt` — Robots configuration

## Development
- **Dev server**: `npm run dev` (Vite on port 5000, host 0.0.0.0)
- **Build**: `npm run build` (outputs to dist/public/)
- **API Proxy**: `/api` routes proxy to backend at `VITE_API_PROXY_TARGET` (default: http://127.0.0.1:3000)

## Deployment
- Static deployment serving `dist/public/`
- Domain: https://daylora.co

## Legal Pages
- `/confidentialite` — Politique de confidentialité (RGPD)
- `/cgv` — Conditions Générales de Vente
- `/mentions-legales` — Mentions légales
- `/cookies` — Politique de cookies (with consent reset button)

## Cookie Consent System
- Module: `client/src/lib/cookie-consent.ts`
- Banner: `client/src/components/CookieBanner.tsx`
- Categories: necessary (always on), analytics, marketing
- Storage: localStorage key `daylora_cookie_consent` with versioning
- Functions: `getConsent()`, `setConsent()`, `hasConsentFor()`, `acceptAll()`, `rejectAll()`, `resetConsent()`, `initConsent()`
- Scripts are loaded conditionally via `loadAnalyticsScripts()` / `loadMarketingScripts()` (currently empty, ready for future use)

## Pricing
- **Gratuit**: 0€ — 1 template (Classique), 30 RSVP max, cagnotte, 6 photos galerie, branding Daylora
- **Premium**: 23,99€/mois ou 149€/an — 3 templates, RSVP illimités, liste cadeaux, page live & blagues, pages perso, 50 photos, sans branding

## CTAs
- All CTA buttons redirect to https://daylora.app/onboarding (new tab)
- Connexion button redirects to https://daylora.app/login (new tab)
- Contact: contact@daylora.co

## SEO
- Canonical URL: https://daylora.co
- OpenGraph configured with title, description, type, url
- sitemap.xml and robots.txt in public directory

## Analytics
- Google Tag Manager: GTM-N4622HDZ (loaded only after analytics consent)
- GA cookies cleared on consent withdrawal: _ga, _gid, _gat, _gcl_au

## Recent Changes
- 2026-02-28: Added RGPD cookie consent system (banner + preferences modal + policy page + consent utilities)
- 2026-02-28: Added legal pages (Confidentialité, CGV, Mentions légales, Cookies)
- 2026-02-28: Rebranding from Nocely to Daylora — all references updated, SEO/OG tags, links to daylora.app, sitemap.xml & robots.txt created
- 2026-02-28: Fixed mobile scroll animations — removed opacity:0 from hidden states to prevent invisible content on Safari
- 2026-02-28: Updated hero image to daytime moody wedding, removed "en France" references, aligned gradient colors with logo
- 2026-02-25: Updated pricing to 23,99€/mois ou 149€/an, updated features to match product spec, removed FR/EN badge, removed templates section, shortened page
- 2026-02-18: Configured Vite for Replit environment (host 0.0.0.0, port 5000, allowedHosts: true)
