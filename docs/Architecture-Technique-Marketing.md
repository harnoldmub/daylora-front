# Daylora Marketing — Architecture Technique
## Document d'Architecture Production

**Version** : 1.0
**Date** : 18 Février 2026
**Niveau** : Staff Engineer
**Statut** : Prêt pour implémentation

---

## 1. Décision Architecturale : CSR vs SSR vs SSG

### 1.1 Analyse comparative

| Critère | CSR (Vite + React) | SSR (Next.js / Remix) | SSG (Astro / Next export) |
|---|---|---|---|
| **LCP** | 2.5–4s (mauvais) | 1.0–2.0s (bon) | 0.5–1.5s (excellent) |
| **FCP** | 1.5–3s | 0.8–1.5s | 0.3–0.8s |
| **SEO** | Faible (JS-dependent) | Excellent | Excellent |
| **TTI** | Lent (bundle JS complet) | Moyen (hydration) | Rapide (minimal JS) |
| **Coût infra** | Statique (CDN) | Serveur requis | Statique (CDN) |
| **Complexité** | Faible | Élevée | Moyenne |
| **A/B testing** | Client-side only | Server + Client | Client-side + Edge |
| **Scaling** | Infini (CDN) | Scaling serveur | Infini (CDN) |

### 1.2 Recommandation

**Phase actuelle (V1)** : Rester sur **Vite + React (CSR)** avec optimisations agressives.

Justification :
- Le site est déjà développé et fonctionnel
- Un seul page (landing) = pas de routing complexe
- Migration vers SSR/SSG = refactoring coûteux sans ROI immédiat
- Les optimisations ci-dessous permettent d'atteindre des scores Lighthouse > 90

**Phase V2 (si trafic > 50K/mois)** : Migration vers **Astro + React Islands**.

Justification :
- Astro envoie 0 KB de JS par défaut, hydrate seulement les composants interactifs
- Compatible avec les composants React existants (via `client:visible`)
- Build statique = CDN = scaling infini
- SEO natif (HTML statique)

### 1.3 Migration path V1 → V2

```
V1 (actuel)          V1.5 (optimisé)         V2 (Astro)
Vite + React    →    Vite + React +      →    Astro + React Islands
CSR complet          Code splitting           SSG + Hydration partielle
                     Lazy loading             Multi-page (/blog, /pricing)
                     Prerender plugin         SEO natif
```

---

## 2. Optimisation Lighthouse (V1)

### 2.1 Performance (objectif : > 90)

#### Images

```
Stratégie :
1. Convertir toutes les images en WebP (fallback PNG/JPG)
2. Générer des srcset pour responsive (640w, 1024w, 1920w)
3. Lazy loading natif (loading="lazy") sauf hero (eager)
4. Dimensions explicites (width/height) sur chaque <img>
5. Placeholder LQIP (Low Quality Image Placeholder) pour le hero
```

**Implémentation Vite** :
```typescript
// vite.config.ts — plugin imagemin
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    viteImagemin({
      webp: { quality: 80 },
      optipng: { optimizationLevel: 7 },
    }),
  ],
});
```

**Composant Image optimisé** :
```tsx
// components/OptimizedImage.tsx
interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({ src, alt, width, height, priority, className }: Props) {
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/, '.webp');
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
```

#### Bundle JS

```
Stratégie :
1. Code splitting par route (React.lazy)
2. Tree shaking agressif (sideEffects: false)
3. Externaliser framer-motion en chunk séparé
4. Preload des chunks critiques
5. Compression Brotli + Gzip
```

**Vite config optimisée** :
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-ui': ['@radix-ui/react-tooltip', '@radix-ui/react-toast'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
    },
  },
});
```

**Budget cible** :
| Asset | Taille max (gzip) |
|---|---|
| HTML | < 15 KB |
| CSS (Tailwind purged) | < 20 KB |
| JS (main) | < 80 KB |
| JS (vendor-react) | < 45 KB |
| JS (vendor-motion) | < 35 KB |
| Images hero | < 200 KB (WebP) |
| Images scenes | < 100 KB chacune |
| **Total First Load** | **< 400 KB** |

#### Fonts

```
Stratégie :
1. Preload des fonts critiques (serif heading)
2. font-display: swap (éviter FOIT)
3. Subset unicode-range (latin only)
4. Self-host (pas de Google Fonts CDN)
```

```html
<!-- index.html -->
<link rel="preload" href="/fonts/serif-heading.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/sans-body.woff2" as="font" type="font/woff2" crossorigin>
```

#### CSS

```
Stratégie :
1. Tailwind purge en production (automatique)
2. Critical CSS inline dans <head>
3. CSS non-critique en async
4. Suppression des classes inutilisées
```

### 2.2 Accessibility (objectif : > 95)

```
Checklist :
- [ ] Contraste texte/fond > 4.5:1 (AA)
- [ ] Tous les <img> ont un alt descriptif
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Landmarks ARIA (main, nav, footer)
- [ ] Skip to content link
- [ ] Boutons avec aria-label si icône seule
- [ ] Heading hierarchy (h1 > h2 > h3, pas de skip)
- [ ] Reduced motion support (@media prefers-reduced-motion)
```

**Reduced motion** :
```tsx
// Wrapper framer-motion
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fadeUp = shouldReduceMotion
  ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
  : { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
```

### 2.3 Best Practices (objectif : 100)

```
- HTTPS forcé
- Cache-Control headers optimisés
- No console.log en production
- No document.write
- CSP headers configurés
- Pas de bibliothèques vulnérables
```

### 2.4 Caching Strategy

```
Assets statiques (JS, CSS, images, fonts) :
  Cache-Control: public, max-age=31536000, immutable
  (Vite ajoute des hash dans les noms de fichiers)

HTML :
  Cache-Control: no-cache, must-revalidate
  (Toujours servir la dernière version)

API responses (si applicable) :
  Cache-Control: no-store
```

---

## 3. SEO Technique

### 3.1 Meta Tags

```tsx
// lib/seo.ts
export const SEO_CONFIG = {
  default: {
    title: "Daylora — Créez votre site de mariage en 3 minutes",
    description: "La plateforme tout-en-un pour créer un site de mariage élégant, gérer vos invités, envoyer des invitations QR code et recevoir des contributions. Gratuit pour démarrer.",
    keywords: "site mariage, mariage en ligne, RSVP mariage, cagnotte mariage, invitation mariage, site de mariage gratuit, daylora",
    canonical: "https://daylora.app",
    locale: "fr_FR",
    siteName: "Daylora",
    type: "website",
  },
  openGraph: {
    title: "Daylora — Votre mariage mérite le meilleur",
    description: "Créez un site de mariage premium en 3 minutes. RSVP intelligent, cagnotte Stripe, invitations QR code et expérience live.",
    image: "https://daylora.app/og/og-default.png", // 1200x630
    imageAlt: "Daylora — Plateforme de mariage tout-en-un",
    url: "https://daylora.app",
  },
  twitter: {
    card: "summary_large_image",
    site: "@daylora_app",
    creator: "@daylora_app",
  },
};
```

**Composant Head** :
```tsx
// components/SEOHead.tsx
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '@/lib/seo';

interface Props {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function SEOHead({ title, description, path = '', image }: Props) {
  const t = title || SEO_CONFIG.default.title;
  const d = description || SEO_CONFIG.default.description;
  const url = `${SEO_CONFIG.default.canonical}${path}`;
  const img = image || SEO_CONFIG.openGraph.image;

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta name="keywords" content={SEO_CONFIG.default.keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SEO_CONFIG.default.siteName} />
      <meta property="og:locale" content={SEO_CONFIG.default.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content={SEO_CONFIG.twitter.card} />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:site" content={SEO_CONFIG.twitter.site} />
    </Helmet>
  );
}
```

### 3.2 Schema.org (Structured Data)

```tsx
// components/StructuredData.tsx
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Daylora",
    "url": "https://daylora.app",
    "description": "Plateforme de création de sites de mariage tout-en-un",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Web",
    "offers": [
      {
        "@type": "Offer",
        "name": "Gratuit",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "Site de mariage basique avec RSVP"
      },
      {
        "@type": "Offer",
        "name": "Premium",
        "price": "29",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "billingDuration": "P1M"
        },
        "description": "Toutes les fonctionnalités premium"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2500",
      "bestRating": "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Daylora",
    "url": "https://daylora.app",
    "logo": "https://daylora.app/logo.png",
    "sameAs": [
      "https://instagram.com/daylora_app",
      "https://twitter.com/daylora_app"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 3.3 Fichiers SEO statiques

**robots.txt** :
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://daylora.app/sitemap.xml
```

**sitemap.xml** :
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemedia.org/schemas/sitemap/0.9">
  <url>
    <loc>https://daylora.app/</loc>
    <lastmod>2026-02-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3.4 Prerender pour CSR

```typescript
// vite.config.ts — avec vite-plugin-prerender
import { VitePluginPrerender } from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    VitePluginPrerender({
      routes: ['/'],
      renderer: 'puppeteer',
      renderAfterTime: 3000,
      postProcess(route) {
        route.html = route.html.replace(
          /<script\b[^>]*>([\s\S]*?)<\/script>/gm,
          (match) => match // keep scripts but add prerendered HTML
        );
      },
    }),
  ],
});
```

---

## 4. Architecture Pages

### 4.1 Structure des routes

```
daylora.app/                    → Landing Page (marketing)
daylora.app/#features           → Ancre fonctionnalités
daylora.app/#cinema             → Ancre visite guidée
daylora.app/#testimonials       → Ancre témoignages
daylora.app/#pricing            → Ancre tarifs
daylora.app/#faq                → Ancre FAQ

daylora.app/login               → Redirect → daylora.app/app/login
daylora.app/signup              → Redirect → daylora.app/app/signup

daylora.app/:slug               → Proxy public wedding site (SSR via app backend)

--- V2 ---
daylora.app/blog                → Blog SEO
daylora.app/blog/:slug          → Article
daylora.app/comparatif          → Page comparatif concurrents
daylora.app/templates           → Galerie templates
daylora.app/pricing             → Page pricing détaillée
daylora.app/a-propos            → Page about
daylora.app/contact             → Page contact
```

### 4.2 Gestion des redirections CTA

```typescript
// lib/cta.ts
const APP_BASE = "https://daylora.app";

export const CTA = {
  signup: `${APP_BASE}/app/signup`,
  login: `${APP_BASE}/app/login`,
  signupWithSource: (source: string) =>
    `${APP_BASE}/app/signup?utm_source=marketing&utm_medium=cta&utm_content=${source}`,
} as const;

// Usage dans les composants :
// <a href={CTA.signupWithSource('hero_primary')}>Commencer</a>
// <a href={CTA.signupWithSource('pricing_premium')}>Passer Premium</a>
// <a href={CTA.signupWithSource('nav_button')}>Créer mon site</a>
```

**UTM tracking sur chaque CTA** :
| CTA | utm_content |
|---|---|
| Nav "Créer mon site" | `nav_button` |
| Hero "Commencer gratuitement" | `hero_primary` |
| Hero "Découvrir" | `hero_secondary` |
| Scene "Découvrir" | `scene_{index}` |
| Pricing Free | `pricing_free` |
| Pricing Premium | `pricing_premium` |
| CTA Final | `footer_cta` |
| Nav "Connexion" | `nav_login` |

---

## 5. Structure Dossiers

```
apps/marketing/
├── public/
│   ├── fonts/
│   │   ├── serif-heading.woff2
│   │   └── sans-body.woff2
│   ├── images/
│   │   ├── wedding-hero.webp
│   │   ├── wedding-hero.jpg          (fallback)
│   │   ├── testimonial-1.webp
│   │   ├── testimonial-2.webp
│   │   └── testimonial-3.webp
│   ├── cinematic/
│   │   ├── scene-creation.webp
│   │   ├── scene-rsvp.webp
│   │   ├── scene-invitations.webp
│   │   ├── scene-cagnotte.webp
│   │   ├── scene-live.webp
│   │   ├── scene-gifts.webp
│   │   ├── scene-templates.webp
│   │   └── scene-publish.webp
│   ├── og/
│   │   └── og-default.png            (1200x630)
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── ui/                        # shadcn/ui primitives
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── marketing/                 # Marketing-specific components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── RSVPDemo.tsx
│   │   │   ├── CinematicShowcase.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── shared/                    # Shared/utility components
│   │   │   ├── OptimizedImage.tsx
│   │   │   ├── SEOHead.tsx
│   │   │   ├── StructuredData.tsx
│   │   │   ├── AnimatedSection.tsx
│   │   │   └── CTAButton.tsx
│   │   └── analytics/
│   │       ├── TrackingProvider.tsx
│   │       ├── useTrack.ts
│   │       └── ab-test.ts
│   │
│   ├── pages/
│   │   ├── LandingPage.tsx            # Compose marketing components
│   │   ├── PublicProxyPage.tsx
│   │   └── not-found.tsx
│   │
│   ├── lib/
│   │   ├── cta.ts                     # CTA URLs + UTM
│   │   ├── seo.ts                     # SEO config
│   │   ├── utils.ts                   # cn(), etc.
│   │   └── queryClient.ts
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useInView.ts
│   │   └── useABTest.ts
│   │
│   ├── data/
│   │   ├── scenes.ts                  # SCENES array
│   │   ├── testimonials.ts
│   │   ├── features.ts
│   │   ├── pricing.ts
│   │   ├── faq.ts
│   │   └── stats.ts
│   │
│   ├── styles/
│   │   └── index.css                  # Tailwind + custom styles
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .env.production
```

### 5.1 Principe de séparation

```
Règle : Le fichier LandingPage.tsx ne contient QUE la composition.
Chaque section = 1 composant autonome dans marketing/.
Les données (SCENES, FAQ, etc.) vivent dans data/.
Les utilitaires partagés dans shared/.
```

**LandingPage.tsx refactoré** :
```tsx
// pages/LandingPage.tsx — Composition only
import { SEOHead } from '@/components/shared/SEOHead';
import { WebsiteSchema, FAQSchema, OrganizationSchema } from '@/components/shared/StructuredData';
import { Navbar } from '@/components/marketing/Navbar';
import { Hero } from '@/components/marketing/Hero';
import { TrustBar } from '@/components/marketing/TrustBar';
import { Stats } from '@/components/marketing/Stats';
import { Features } from '@/components/marketing/Features';
import { RSVPDemo } from '@/components/marketing/RSVPDemo';
import { CinematicShowcase } from '@/components/marketing/CinematicShowcase';
import { Testimonials } from '@/components/marketing/Testimonials';
import { Pricing } from '@/components/marketing/Pricing';
import { FAQ } from '@/components/marketing/FAQ';
import { FinalCTA } from '@/components/marketing/FinalCTA';
import { Footer } from '@/components/marketing/Footer';
import { FAQ_ITEMS } from '@/data/faq';

export default function LandingPage() {
  return (
    <>
      <SEOHead />
      <WebsiteSchema />
      <OrganizationSchema />
      <FAQSchema items={FAQ_ITEMS} />

      <div className="min-h-screen bg-[#F6F1EA] text-[#2b2320]">
        <Navbar />
        <Hero />
        <TrustBar />
        <Stats />
        <Features />
        <RSVPDemo />
        <CinematicShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
```

---

## 6. Routing Optimisé

### 6.1 Configuration wouter

```tsx
// App.tsx
import { Switch, Route } from 'wouter';
import { lazy, Suspense } from 'react';

const LandingPage = lazy(() => import('@/pages/LandingPage'));
const NotFound = lazy(() => import('@/pages/not-found'));

function ExternalRedirect({ href }: { href: string }) {
  window.location.href = href;
  return null;
}

function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/login">
          <ExternalRedirect href={CTA.login} />
        </Route>
        <Route path="/signup">
          <ExternalRedirect href={CTA.signup} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
```

### 6.2 Prefetch strategy

```tsx
// Preload critical assets dans index.html
<link rel="preload" href="/images/wedding-hero.webp" as="image" type="image/webp">
<link rel="preconnect" href="https://daylora.app">
<link rel="dns-prefetch" href="https://daylora.app">
```

---

## 7. Plan Scaling Trafic

### 7.1 Architecture CDN

```
                    ┌──────────────┐
   Visiteur    →    │  Cloudflare  │    ← CDN Edge (cache HTML + assets)
                    │  CDN / WAF   │
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    │   Origin     │    ← Replit Static Deployment
                    │  (Replit)    │       ou Object Storage
                    └──────────────┘
```

### 7.2 Niveaux de scaling

| Trafic | Infrastructure | Coût estimé |
|---|---|---|
| < 10K/mois | Replit Static Deploy | ~0 € (inclus) |
| 10K–100K/mois | Replit + Cloudflare Free | ~0 € |
| 100K–1M/mois | Replit + Cloudflare Pro | ~20 €/mois |
| > 1M/mois | S3/R2 + Cloudflare | ~50 €/mois |

### 7.3 Optimisation CDN

```
Cloudflare Page Rules :
1. Cache Everything pour /*.js, /*.css, /images/*, /fonts/*
   Edge TTL: 1 mois
   Browser TTL: 1 an

2. Cache Everything pour /
   Edge TTL: 1 heure
   Browser TTL: no-cache

3. Polish: WebP auto-conversion
4. Minify: JS + CSS + HTML
5. Brotli: On
6. Early Hints: On
7. Rocket Loader: Off (conflit avec React)
```

### 7.4 Image CDN

```
Option A (V1) : Images statiques optimisées dans /public/
  - Pré-générées en WebP via build script
  - Servies directement par CDN
  - Suffisant jusqu'à 100K/mois

Option B (V2) : Cloudflare Images ou imgproxy
  - Transformation à la volée (resize, format, quality)
  - URL : /cdn-cgi/image/w=800,f=webp/images/hero.jpg
  - Cache automatique par dimensions

Option C (Scale) : R2 + Cloudflare Images
  - Stockage objet illimité
  - Transformation edge
  - Coût : ~0.015$/GB stocké + 0.50$/1000 transformations
```

---

## 8. Plan Analytics

### 8.1 Stack recommandée

| Outil | Rôle | RGPD | Coût |
|---|---|---|---|
| **PostHog** (recommandé) | Analytics + A/B + Heatmaps | Oui (self-host possible) | Free < 1M events |
| Plausible | Analytics simple | Oui (EU) | 9 €/mois |
| Mixpanel | Event tracking avancé | Config requise | Free < 100K |
| GA4 | Analytics (Google) | Non (sans consent) | Gratuit |

**Recommandation** : PostHog (tout-en-un : analytics, A/B, heatmaps, session replay).

### 8.2 Événements à tracker

```typescript
// analytics/events.ts
export const EVENTS = {
  // Page views
  PAGE_VIEW: 'page_view',

  // CTA clicks
  CTA_HERO_PRIMARY: 'cta_click_hero_primary',
  CTA_HERO_SECONDARY: 'cta_click_hero_secondary',
  CTA_NAV_SIGNUP: 'cta_click_nav_signup',
  CTA_NAV_LOGIN: 'cta_click_nav_login',
  CTA_PRICING_FREE: 'cta_click_pricing_free',
  CTA_PRICING_PREMIUM: 'cta_click_pricing_premium',
  CTA_FOOTER: 'cta_click_footer_cta',
  CTA_SCENE: 'cta_click_scene',

  // Engagement
  SCROLL_25: 'scroll_depth_25',
  SCROLL_50: 'scroll_depth_50',
  SCROLL_75: 'scroll_depth_75',
  SCROLL_100: 'scroll_depth_100',

  // Sections viewed
  SECTION_VIEWED: 'section_viewed',

  // FAQ
  FAQ_OPENED: 'faq_question_opened',

  // Pricing
  PRICING_VIEWED: 'pricing_section_viewed',
  PRICING_COMPARED: 'pricing_plans_compared',
} as const;
```

### 8.3 Tracking Provider

```tsx
// analytics/TrackingProvider.tsx
import posthog from 'posthog-js';
import { createContext, useContext, useEffect } from 'react';

const AnalyticsContext = createContext<typeof posthog | null>(null);

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (import.meta.env.PROD && import.meta.env.VITE_POSTHOG_KEY) {
      posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
        api_host: 'https://eu.posthog.com', // EU instance for RGPD
        capture_pageview: true,
        capture_pageleave: true,
        autocapture: false, // Manual events only
        persistence: 'localStorage',
        respect_dnt: true,
      });
    }
  }, []);

  return (
    <AnalyticsContext.Provider value={posthog}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useTrack() {
  const ph = useContext(AnalyticsContext);
  return {
    track: (event: string, properties?: Record<string, unknown>) => {
      ph?.capture(event, properties);
    },
    identify: (id: string, traits?: Record<string, unknown>) => {
      ph?.identify(id, traits);
    },
  };
}
```

### 8.4 Scroll Depth Tracking

```tsx
// hooks/useScrollDepth.ts
import { useEffect, useRef } from 'react';
import { useTrack } from '@/components/analytics/useTrack';
import { EVENTS } from '@/components/analytics/events';

export function useScrollDepth() {
  const { track } = useTrack();
  const fired = useRef(new Set<number>());

  useEffect(() => {
    function handleScroll() {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      [25, 50, 75, 100].forEach((threshold) => {
        if (scrollPercent >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          track(`scroll_depth_${threshold}`, { percent: threshold });
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [track]);
}
```

### 8.5 Section Visibility Tracking

```tsx
// hooks/useSectionTracking.ts
import { useEffect, useRef } from 'react';
import { useTrack } from '@/components/analytics/useTrack';

export function useSectionTracking(sectionId: string) {
  const ref = useRef<HTMLElement>(null);
  const { track } = useTrack();
  const tracked = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          track('section_viewed', { section: sectionId });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionId, track]);

  return ref;
}
```

---

## 9. Stratégie A/B Testing

### 9.1 Framework

```
PostHog Feature Flags (recommandé) :
- Évaluation côté client (pas de serveur requis)
- Intégré à l'analytics
- Multi-variant support
- Objectifs de conversion trackables
- Rollout progressif
```

### 9.2 Implémentation

```tsx
// hooks/useABTest.ts
import { useEffect, useState } from 'react';
import posthog from 'posthog-js';

type Variant = string | boolean;

export function useABTest(flagKey: string, defaultValue: Variant = false): Variant {
  const [variant, setVariant] = useState<Variant>(defaultValue);

  useEffect(() => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
      posthog.onFeatureFlags(() => {
        const value = posthog.getFeatureFlag(flagKey);
        if (value !== undefined) setVariant(value);
      });
    }
  }, [flagKey]);

  return variant;
}

// Usage :
function Hero() {
  const ctaText = useABTest('hero-cta-text', 'Commencer gratuitement');

  return (
    <Button>{ctaText}</Button>
  );
}
```

### 9.3 Tests A/B prioritaires

| Test | Variantes | Métrique | Priorité |
|---|---|---|---|
| **Hero CTA text** | "Commencer gratuitement" vs "Créer mon site gratuit" vs "Essayer maintenant" | CTR hero → signup | P0 |
| **Hero layout** | Centré vs Left-aligned | Scroll depth + CTR | P1 |
| **Pricing emphasis** | Free first vs Premium first | Conversion Premium | P1 |
| **Social proof position** | Above features vs Below | Scroll depth | P2 |
| **CTA color** | Noir vs Primary gold | CTR tous CTAs | P2 |
| **FAQ presence** | Avec FAQ vs Sans FAQ | Bounce rate | P2 |
| **Testimonials format** | Cards vs Carousel | Engagement section | P3 |
| **Scene count** | 8 scenes vs 4 top scenes | Scroll completion | P3 |

### 9.4 Règles de testing

```
1. Un seul test actif par section à la fois
2. Minimum 1000 visiteurs par variante avant conclusion
3. Significativité statistique > 95% (p < 0.05)
4. Durée minimale : 2 semaines (couvrir weekdays + weekends)
5. Pas de test pendant les pics saisonniers (mai-juin = saison mariage)
6. Documenter chaque test : hypothèse → résultat → décision
```

---

## 10. Variables d'Environnement

```bash
# .env.production
VITE_APP_BASE_URL=https://daylora.app
VITE_SITE_URL=https://daylora.app
VITE_POSTHOG_KEY=phc_xxxxxxxxxxxx
VITE_POSTHOG_HOST=https://eu.posthog.com
VITE_ENV=production
```

```bash
# .env.development
VITE_APP_BASE_URL=https://daylora.app
VITE_SITE_URL=http://localhost:5000
VITE_ENV=development
```

---

## 11. Checklist Pré-Production

### Performance
- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle JS < 160 KB (gzip total)
- [ ] Images en WebP avec fallback
- [ ] Fonts preloaded + font-display: swap
- [ ] Critical CSS inline

### SEO
- [ ] Meta title + description sur chaque page
- [ ] Open Graph tags (title, description, image 1200x630)
- [ ] Twitter Card tags
- [ ] Schema.org (WebApplication, FAQPage, Organization)
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] Canonical URLs
- [ ] Heading hierarchy valide (h1 > h2 > h3)
- [ ] Alt text sur toutes les images
- [ ] Prerender HTML pour crawlers

### Conversion
- [ ] CTA visible above the fold
- [ ] Tous les CTA redirigent vers daylora.app
- [ ] UTM parameters sur chaque CTA
- [ ] Analytics events configurés
- [ ] Scroll depth tracking
- [ ] Section visibility tracking
- [ ] A/B testing framework prêt

### Infrastructure
- [ ] Déploiement statique configuré
- [ ] Cache headers optimisés
- [ ] CDN configuré (Cloudflare)
- [ ] HTTPS forcé
- [ ] Compression Brotli activée
- [ ] Error pages (404)
- [ ] Monitoring uptime

### Accessibilité
- [ ] WCAG 2.1 AA
- [ ] Contraste vérifié
- [ ] Navigation clavier
- [ ] Screen reader compatible
- [ ] Reduced motion support

---

## 12. Monitoring Production

```
Stack monitoring :
1. Cloudflare Analytics — Trafic, cache hit ratio, latence edge
2. PostHog — Events, funnels, session replay
3. Sentry — Error tracking frontend (JS errors)
4. UptimeRobot — Monitoring disponibilité (ping /health)
5. Lighthouse CI — Score automatisé à chaque déploiement

Alertes :
- LCP > 3s → Slack alert
- Error rate > 1% → PagerDuty
- Bounce rate > 60% → Weekly review
- Conversion < 3% → A/B test review
```

---

*Document prêt pour implémentation. Architecture validée pour production Replit avec scaling progressif.*
