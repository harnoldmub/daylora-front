# Nocely Marketing

## Overview
Nocely is a French-language wedding website platform marketing/landing page. This is a frontend-only Vite + React + TypeScript project that serves as the public-facing marketing site.

## Project Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS v3 with custom theme, tailwindcss-animate, @tailwindcss/typography
- **UI Components**: Radix UI primitives + shadcn/ui pattern
- **Routing**: wouter
- **State Management**: @tanstack/react-query
- **Animation**: framer-motion
- **Structure**:
  - `client/` — Frontend source (index.html, src/)
  - `client/src/pages/` — Page components (LandingPage, PublicProxyPage, etc.)
  - `client/src/components/` — Reusable UI components
  - `client/src/layouts/` — Layout components
  - `client/src/hooks/` — Custom React hooks
  - `client/src/lib/` — Utility functions
  - `packages/shared/` — Shared types/utilities
  - `attached_assets/` — Static images and assets
  - `dist/public/` — Build output

## Development
- **Dev server**: `npm run dev` (Vite on port 5000, host 0.0.0.0)
- **Build**: `npm run build` (outputs to dist/public/)
- **API Proxy**: `/api` routes proxy to backend at `VITE_API_PROXY_TARGET` (default: http://127.0.0.1:3000)

## Deployment
- Static deployment serving `dist/public/`

## Recent Changes
- 2026-02-18: Configured Vite for Replit environment (host 0.0.0.0, port 5000, allowedHosts: true)
