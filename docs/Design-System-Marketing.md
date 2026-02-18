# Nocely — Design System Marketing
## Guide Complet de Design & Composants

**Version** : 1.0
**Date** : 18 Février 2026
**Inspiration** : Apple, Notion, Framer, Webflow
**Philosophie** : Élégant, minimal, premium, moderne

---

## 1. Design Tokens

### 1.1 Couleurs

#### Palette Primaire

| Token | Hex | Usage | CSS Variable |
|---|---|---|---|
| `ink` | `#1C1C1E` | Texte principal, fonds sombres | `--color-ink` |
| `cream` | `#F8F6F2` | Fond principal, surfaces claires | `--color-cream` |
| `gold` | `#C6A75E` | Accent principal, CTA, highlights | `--color-gold` |
| `muted` | `#8E8E93` | Texte secondaire, placeholders | `--color-muted` |

#### Palette Étendue

| Token | Hex | Dérivé de | Usage |
|---|---|---|---|
| `ink-soft` | `#2C2C2E` | ink lighter | Fonds sombres secondaires |
| `ink-muted` | `#3A3A3C` | ink lighter | Bordures sombres |
| `cream-warm` | `#F3EDE3` | cream darker | Surfaces secondaires |
| `cream-cool` | `#EDEAE4` | cream darker | Cards, séparateurs |
| `gold-light` | `#D4BA7A` | gold lighter | Hover states |
| `gold-dark` | `#A8893E` | gold darker | Active states |
| `gold-mist` | `#C6A75E1A` | gold 10% | Backgrounds subtils |
| `gold-glow` | `#C6A75E33` | gold 20% | Glow effects |
| `white` | `#FFFFFF` | — | Cards, overlays |
| `success` | `#34C759` | — | Validations |
| `error` | `#FF3B30` | — | Erreurs |

#### Transparences

| Token | Valeur | Usage |
|---|---|---|
| `glass-light` | `rgba(255,255,255,0.08)` | Glass morphism light |
| `glass-medium` | `rgba(255,255,255,0.15)` | Glass morphism medium |
| `glass-heavy` | `rgba(255,255,255,0.25)` | Glass morphism heavy |
| `overlay-light` | `rgba(28,28,30,0.3)` | Overlay images light |
| `overlay-medium` | `rgba(28,28,30,0.5)` | Overlay images medium |
| `overlay-heavy` | `rgba(28,28,30,0.7)` | Overlay images heavy |

#### Tailwind Config

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1C1C1E',
          soft: '#2C2C2E',
          muted: '#3A3A3C',
        },
        cream: {
          DEFAULT: '#F8F6F2',
          warm: '#F3EDE3',
          cool: '#EDEAE4',
        },
        gold: {
          DEFAULT: '#C6A75E',
          light: '#D4BA7A',
          dark: '#A8893E',
          mist: 'rgba(198,167,94,0.1)',
          glow: 'rgba(198,167,94,0.2)',
        },
        muted: '#8E8E93',
      },
    },
  },
};
```

### 1.2 Typographie

#### Police Stack

| Rôle | Font | Fallback | Weight |
|---|---|---|---|
| **Heading** (Serif) | `Instrument Serif` | `Georgia, 'Times New Roman', serif` | 400 (regular) |
| **Body** (Sans) | `Inter` | `system-ui, -apple-system, sans-serif` | 400, 500, 600, 700 |
| **Mono** | `JetBrains Mono` | `'Courier New', monospace` | 400 |

#### Échelle Typographique

| Token | Taille | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|
| `display-xl` | 96px / 6rem | 0.85 | -0.04em | Hero H1 desktop |
| `display-lg` | 72px / 4.5rem | 0.88 | -0.03em | Hero H1 tablet |
| `display-md` | 56px / 3.5rem | 0.90 | -0.03em | Hero H1 mobile |
| `heading-1` | 48px / 3rem | 0.92 | -0.02em | Section H2 desktop |
| `heading-2` | 36px / 2.25rem | 0.95 | -0.02em | Section H2 mobile |
| `heading-3` | 28px / 1.75rem | 1.0 | -0.01em | Card H3 |
| `heading-4` | 22px / 1.375rem | 1.1 | -0.01em | Sub-headings |
| `body-lg` | 18px / 1.125rem | 1.65 | 0 | Lead paragraphs |
| `body-md` | 16px / 1rem | 1.6 | 0 | Body text |
| `body-sm` | 14px / 0.875rem | 1.5 | 0 | Secondary text |
| `caption` | 12px / 0.75rem | 1.4 | 0.02em | Captions, labels |
| `overline` | 11px / 0.6875rem | 1.2 | 0.2em | Kickers, badges (uppercase) |

#### Tailwind Typography Classes

```css
/* styles/typography.css */
.text-display-xl {
  @apply text-[6rem] leading-[0.85] tracking-[-0.04em] font-serif;
}
.text-display-lg {
  @apply text-[4.5rem] leading-[0.88] tracking-[-0.03em] font-serif;
}
.text-display-md {
  @apply text-[3.5rem] leading-[0.90] tracking-[-0.03em] font-serif;
}
.text-heading-1 {
  @apply text-[3rem] leading-[0.92] tracking-[-0.02em] font-serif font-bold;
}
.text-heading-2 {
  @apply text-[2.25rem] leading-[0.95] tracking-[-0.02em] font-serif font-bold;
}
.text-heading-3 {
  @apply text-[1.75rem] leading-tight tracking-[-0.01em] font-serif font-bold;
}
.text-body-lg {
  @apply text-lg leading-relaxed;
}
.text-overline {
  @apply text-[0.6875rem] leading-tight tracking-[0.2em] uppercase font-bold;
}
```

### 1.3 Spacing

#### Échelle (base 4px)

| Token | Valeur | Usage |
|---|---|---|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Icon gaps, inline spacing |
| `space-3` | 12px | Compact padding |
| `space-4` | 16px | Default gap |
| `space-5` | 20px | Card padding mobile |
| `space-6` | 24px | Section internal gaps |
| `space-8` | 32px | Card padding desktop |
| `space-10` | 40px | Between components |
| `space-12` | 48px | Section vertical mobile |
| `space-16` | 64px | Section gaps |
| `space-20` | 80px | Major section spacing |
| `space-24` | 96px | Section vertical desktop |
| `space-32` | 128px | Between major sections |
| `space-40` | 160px | Hero vertical padding |

#### Section Rhythm

```
Mobile :  py-16 (64px) entre sections
Tablet :  py-24 (96px) entre sections
Desktop : py-32 (128px) entre sections principales
          py-24 (96px) entre sous-sections
```

### 1.4 Border Radius

| Token | Valeur | Usage |
|---|---|---|
| `radius-sm` | 8px | Inputs, small elements |
| `radius-md` | 12px | Buttons, tags |
| `radius-lg` | 16px | Cards internes |
| `radius-xl` | 24px | Cards principales |
| `radius-2xl` | 32px | Feature cards |
| `radius-3xl` | 48px | Hero cards, image containers |
| `radius-full` | 9999px | Pills, avatars, badges |

### 1.5 Shadows

| Token | Valeur | Usage |
|---|---|---|
| `shadow-subtle` | `0 1px 2px rgba(0,0,0,0.04)` | Hover states légers |
| `shadow-card` | `0 4px 20px rgba(0,0,0,0.06)` | Cards au repos |
| `shadow-elevated` | `0 12px 40px rgba(0,0,0,0.08)` | Cards hover |
| `shadow-hero` | `0 20px 60px rgba(0,0,0,0.12)` | Éléments hero |
| `shadow-gold` | `0 8px 30px rgba(198,167,94,0.25)` | CTA gold |
| `shadow-gold-lg` | `0 16px 50px rgba(198,167,94,0.35)` | CTA gold hover |
| `shadow-nav` | `0 4px 30px rgba(0,0,0,0.06)` | Navigation bar |

### 1.6 Z-Index Scale

| Token | Valeur | Usage |
|---|---|---|
| `z-base` | 0 | Default |
| `z-above` | 10 | Elements above flow |
| `z-sticky` | 20 | Sticky elements |
| `z-overlay` | 30 | Overlays, image badges |
| `z-modal` | 40 | Modals (future) |
| `z-nav` | 50 | Navigation |
| `z-toast` | 60 | Toasts, notifications |

---

## 2. Composants React + Tailwind

### 2.1 Hero Section Premium

```tsx
// components/marketing/Hero.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <img
          src="/images/wedding-hero.webp"
          alt="Cérémonie de mariage élégante"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-cream" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Kicker badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
            bg-white/10 backdrop-blur-md border border-white/20
            text-overline text-white shadow-hero mb-8">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            La plateforme mariage N°1 en France
          </div>

          {/* Heading */}
          <h1 className="text-display-md md:text-display-lg lg:text-display-xl text-white
            drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            Votre mariage
            <br />
            <span className="italic bg-gradient-to-r from-gold via-gold-light to-gold
              bg-clip-text text-transparent">
              mérite le meilleur
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-white/80 max-w-2xl mx-auto mt-6">
            Créez un site de mariage élégant, gérez vos invités et
            recevez des contributions — le tout en quelques minutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="https://app.nocely.app/app/signup?utm_source=marketing&utm_content=hero_primary">
              <button className="group flex items-center gap-3 px-8 h-14
                bg-ink text-white rounded-full font-semibold text-base
                shadow-hero hover:bg-black hover:-translate-y-0.5
                transition-all duration-300">
                Commencer gratuitement
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
            <a href="#cinema">
              <button className="flex items-center gap-3 px-8 h-14
                bg-white/10 backdrop-blur-md text-white rounded-full
                font-semibold text-base border border-white/20
                hover:bg-white/20 transition-all duration-300">
                <Play className="h-4 w-4" />
                Découvrir
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
```

### 2.2 Section Badge (Kicker)

```tsx
// components/shared/SectionBadge.tsx
import { type ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  children: ReactNode;
  variant?: 'light' | 'dark';
}

export function SectionBadge({ icon, children, variant = 'light' }: Props) {
  const styles = {
    light: 'bg-gold-mist text-gold border-gold/20',
    dark: 'bg-white/10 text-gold border-white/10',
  };

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full
      text-overline border ${styles[variant]}`}>
      {icon}
      {children}
    </div>
  );
}
```

### 2.3 Section Heading

```tsx
// components/shared/SectionHeading.tsx
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface Props {
  badge?: ReactNode;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  theme?: 'light' | 'dark';
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export function SectionHeading({ badge, title, subtitle, align = 'center', theme = 'light' }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={stagger}
      className={`space-y-5 ${align === 'center' ? 'text-center' : ''}`}
    >
      {badge && <motion.div variants={fadeUp}>{badge}</motion.div>}
      <motion.h2
        variants={fadeUp}
        className={`text-heading-2 md:text-heading-1 leading-tight
          ${theme === 'dark' ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-body-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}
            ${theme === 'dark' ? 'text-white/70' : 'text-muted'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
```

### 2.4 Feature Card

```tsx
// components/marketing/FeatureCard.tsx
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string; // e.g. "from-amber-500/20 to-orange-500/20"
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export function FeatureCard({ icon, title, description, gradient }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="group p-8 rounded-2xl bg-white border border-cream-cool
        hover:border-gold/30 transition-all duration-500
        hover:shadow-elevated hover:-translate-y-1
        relative overflow-hidden"
    >
      {/* Hover glow */}
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl
        ${gradient} rounded-full blur-3xl
        opacity-0 group-hover:opacity-100 transition-opacity duration-700
        -translate-y-10 translate-x-10`}
      />

      <div className="relative z-10 space-y-4">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gold-mist border border-gold/10
          flex items-center justify-center text-gold
          group-hover:bg-gold group-hover:text-white
          transition-all duration-300
          group-hover:shadow-gold">
          {icon}
        </div>

        {/* Text */}
        <h3 className="text-heading-4 font-serif">{title}</h3>
        <p className="text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
```

### 2.5 Cinematic Scene Card

```tsx
// components/marketing/SceneCard.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { type ReactNode } from 'react';

interface Props {
  image: string;
  kicker: string;
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
  total: number;
  reversed?: boolean;
  ctaHref: string;
}

export function SceneCard({ image, kicker, icon, title, description, index, total, reversed, ctaHref }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      {/* Image */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: reversed ? 50 : -50 },
          show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
        }}
        className={`relative group ${reversed ? 'lg:order-2' : ''}`}
      >
        <div className="absolute -inset-4 bg-gradient-to-br from-gold-mist via-transparent to-gold-mist
          rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative rounded-3xl overflow-hidden shadow-hero border border-cream-cool bg-white">
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-[320px] md:h-[420px] object-cover
                transition-transform ease-out group-hover:scale-105"
              style={{ transitionDuration: '1.2s' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom overlay badges */}
          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full
              bg-white/15 backdrop-blur-xl border border-white/20">
              <span className="text-white">{icon}</span>
              <span className="text-overline text-white" style={{ fontSize: '10px' }}>{kicker}</span>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/20
              text-overline text-white/80" style={{ fontSize: '10px' }}>
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: reversed ? -50 : 50 },
          show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 } },
        }}
        className={`space-y-6 ${reversed ? 'lg:order-1 lg:text-right' : ''}`}
      >
        <div className={`flex items-center gap-3 ${reversed ? 'lg:justify-end' : ''}`}>
          <span className="p-3 rounded-2xl bg-gold-mist text-gold border border-gold/10">{icon}</span>
          <span className="text-overline text-gold/70">{kicker}</span>
        </div>
        <h3 className="text-heading-3 md:text-heading-2">{title}</h3>
        <p className="text-muted text-body-lg leading-relaxed max-w-lg">{description}</p>
        <div className={reversed ? 'lg:flex lg:justify-end' : ''}>
          <a href={ctaHref} className="group/btn inline-flex items-center gap-2 text-gold font-semibold
            hover:text-ink transition-colors">
            Découvrir
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
```

### 2.6 Pricing Table (Conversion-Optimized)

```tsx
// components/marketing/PricingCard.tsx
import { Check, X, Crown } from 'lucide-react';

interface Feature {
  text: string;
  included: boolean;
}

interface Props {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: Feature[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}

export function PricingCard({ name, price, period, description, features, cta, ctaHref, highlighted }: Props) {
  return (
    <div className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500
      ${highlighted
        ? 'bg-ink text-white border-2 border-gold/30 shadow-hero scale-[1.02]'
        : 'bg-white text-ink border border-cream-cool hover:shadow-elevated'
      }`}
    >
      {/* Recommended badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2
          px-5 py-1.5 rounded-full bg-gold text-ink
          text-overline font-bold shadow-gold
          flex items-center gap-2">
          <Crown className="h-3 w-3" />
          Recommandé
        </div>
      )}

      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-heading-4 font-serif">{name}</h3>
          <p className={`text-body-sm ${highlighted ? 'text-white/60' : 'text-muted'}`}>
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-[3.5rem] font-serif font-bold leading-none">{price}</span>
          {period && (
            <span className={`text-body-sm ${highlighted ? 'text-white/50' : 'text-muted'}`}>
              {period}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className={`h-px ${highlighted ? 'bg-white/10' : 'bg-cream-cool'}`} />

        {/* Features */}
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature.text} className="flex items-start gap-3">
              {feature.included ? (
                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                  ${highlighted ? 'bg-gold/20 text-gold' : 'bg-gold-mist text-gold'}`}>
                  <Check className="w-3 h-3" />
                </div>
              ) : (
                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                  ${highlighted ? 'bg-white/5 text-white/20' : 'bg-cream-cool text-muted/40'}`}>
                  <X className="w-3 h-3" />
                </div>
              )}
              <span className={`text-body-sm ${
                !feature.included
                  ? highlighted ? 'text-white/30' : 'text-muted/50'
                  : highlighted ? 'text-white/90' : 'text-ink'
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={ctaHref} className="block">
          <button className={`w-full h-14 rounded-2xl font-semibold text-base
            transition-all duration-300
            ${highlighted
              ? 'bg-gold text-ink hover:bg-gold-light shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5'
              : 'bg-cream text-ink border border-cream-cool hover:bg-cream-warm hover:border-gold/20'
            }`}>
            {cta}
          </button>
        </a>
      </div>
    </div>
  );
}
```

**Usage Pricing Section** :
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  <PricingCard
    name="Gratuit"
    price="0 €"
    description="Parfait pour découvrir Nocely"
    features={[
      { text: 'Site de mariage basique', included: true },
      { text: '1 template', included: true },
      { text: 'RSVP (50 invités)', included: true },
      { text: 'Cagnotte', included: true },
      { text: 'Domaine personnalisé', included: false },
      { text: 'QR Codes invitations', included: false },
      { text: 'Mode Live', included: false },
      { text: 'Support prioritaire', included: false },
      { text: 'Analytics avancés', included: false },
    ]}
    cta="Commencer gratuitement"
    ctaHref="https://app.nocely.app/app/signup?utm_content=pricing_free"
  />
  <PricingCard
    name="Premium"
    price="29 €"
    period="/ mois"
    description="Pour un mariage inoubliable"
    highlighted
    features={[
      { text: 'Tout du plan Gratuit', included: true },
      { text: 'Templates illimités', included: true },
      { text: 'Invités illimités', included: true },
      { text: 'Cagnotte sans commission', included: true },
      { text: 'Domaine personnalisé', included: true },
      { text: 'QR Codes invitations', included: true },
      { text: 'Mode Live', included: true },
      { text: 'Support prioritaire', included: true },
      { text: 'Analytics avancés', included: true },
    ]}
    cta="Passer Premium"
    ctaHref="https://app.nocely.app/app/signup?utm_content=pricing_premium"
  />
</div>
```

### 2.7 FAQ Accordion

```tsx
// components/marketing/FAQItem.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: Props) {
  return (
    <div className={`rounded-2xl border transition-all duration-300 overflow-hidden
      ${isOpen
        ? 'bg-white border-gold/20 shadow-card'
        : 'bg-white/60 border-cream-cool hover:border-gold/10 hover:bg-white'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left
          group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className={`text-heading-4 font-serif pr-4 transition-colors
          ${isOpen ? 'text-ink' : 'text-ink/80 group-hover:text-ink'}`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`h-5 w-5 transition-colors
            ${isOpen ? 'text-gold' : 'text-muted'}`} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <div className="h-px bg-cream-cool mb-5" />
              <p className="text-muted text-body-md leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

### 2.8 Footer

```tsx
// components/marketing/Footer.tsx
import { Heart } from 'lucide-react';

const FOOTER_LINKS = {
  Produit: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Templates', href: '#cinema' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Légal: [
    { label: 'CGU', href: '/cgu' },
    { label: 'Confidentialité', href: '/privacy' },
    { label: 'Mentions légales', href: '/legal' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark
                rounded-xl flex items-center justify-center shadow-gold">
                <Heart className="h-5 w-5 text-white fill-white" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-serif font-bold text-white">Nocely</span>
                <span className="text-overline text-gold/60" style={{ fontSize: '7px' }}>
                  Wedding platform
                </span>
              </div>
            </div>
            <p className="text-body-sm text-white/50 max-w-xs leading-relaxed">
              La plateforme tout-en-un pour créer un site de mariage élégant et gérer votre événement.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-overline text-white/40">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-body-sm text-white/60 hover:text-gold transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10
          flex flex-col md:flex-row items-center justify-between gap-4 text-caption text-white/30">
          <span>&copy; {new Date().getFullYear()} Nocely. Tous droits réservés.</span>
          <span className="flex items-center gap-1.5">
            Fait avec <Heart className="h-3 w-3 text-gold fill-gold" /> à Paris
          </span>
        </div>
      </div>
    </footer>
  );
}
```

### 2.9 Navigation Bar

```tsx
// components/marketing/Navbar.tsx
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Expérience', href: '#cinema' },
  { label: 'Témoignages', href: '#testimonials' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-3">
      <div className={`max-w-7xl mx-auto rounded-full px-5 md:px-8 py-3
        flex items-center justify-between
        transition-all duration-500
        ${scrolled
          ? 'bg-white/90 backdrop-blur-xl border border-cream-cool shadow-nav'
          : 'bg-white/60 backdrop-blur-md border border-white/20'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold to-gold-dark
            rounded-2xl flex items-center justify-center shadow-gold
            transition-all group-hover:scale-110 group-hover:rotate-3">
            <Heart className="h-5 w-5 md:h-7 md:w-7 text-white fill-white" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-ink">
              Nocely
            </span>
            <span className="text-overline text-gold/60 ml-0.5" style={{ fontSize: '7px' }}>
              Wedding platform
            </span>
          </div>
        </a>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-body-sm font-medium text-muted">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}
              className="hover:text-gold transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold
                transition-all group-hover:w-full rounded-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <a href="https://app.nocely.app/app/login"
            className="hidden md:inline-flex text-overline text-muted hover:text-ink transition-colors">
            Connexion
          </a>
          <a href="https://app.nocely.app/app/signup?utm_content=nav_button">
            <button className="rounded-full px-5 md:px-8 h-10 md:h-12
              bg-ink text-white hover:bg-black
              transition-all shadow-card hover:shadow-elevated
              hover:-translate-y-0.5 text-body-sm font-semibold">
              Créer mon site
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
```

### 2.10 Testimonial Card

```tsx
// components/marketing/TestimonialCard.tsx
import { Star, Quote } from 'lucide-react';

interface Props {
  name: string;
  location: string;
  quote: string;
  image: string;
  rating: number;
}

export function TestimonialCard({ name, location, quote, image, rating }: Props) {
  return (
    <div className="group p-8 rounded-3xl bg-white border border-cream-cool
      hover:shadow-elevated transition-all duration-500
      hover:-translate-y-1 relative overflow-hidden">

      {/* Decorative quote */}
      <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/10
        group-hover:text-gold/20 transition-colors" />

      <div className="relative z-10 space-y-5">
        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 text-gold fill-gold" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-body-md text-ink/80 leading-relaxed italic">
          "{quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-2">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-cream-cool
              group-hover:border-gold/30 transition-colors"
            loading="lazy"
          />
          <div>
            <p className="text-body-sm font-bold text-ink">{name}</p>
            <p className="text-caption text-muted">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 3. Micro-Interactions

### 3.1 Catalogue

| Interaction | Déclencheur | Animation | Durée |
|---|---|---|---|
| **Button lift** | Hover | translate-y -2px + shadow increase | 300ms |
| **Button press** | Active | scale 0.97 | 100ms |
| **Card lift** | Hover | translate-y -4px + shadow-elevated | 500ms |
| **Icon morph** | Card hover | bg change + scale 1.05 | 300ms |
| **Link underline** | Hover | width 0 → 100% (left to right) | 300ms |
| **Nav blur** | Scroll > 20px | backdrop-blur intensify | 500ms |
| **Badge pulse** | Load | subtle scale pulse | 2s infinite |
| **Arrow slide** | Button hover | translate-x 4px | 300ms |
| **Image zoom** | Card hover | scale 1.05 | 1200ms |
| **FAQ chevron** | Toggle | rotate 180deg | 300ms |
| **Scroll mouse** | Idle | bounce y 8px | 2s infinite |
| **Gold glow** | CTA hover | shadow-gold → shadow-gold-lg | 300ms |

### 3.2 Tailwind Transition Classes

```css
/* Preset transition classes */
.transition-micro {
  @apply transition-all duration-300 ease-out;
}
.transition-smooth {
  @apply transition-all duration-500 ease-out;
}
.transition-slow {
  @apply transition-all duration-700 ease-out;
}

/* Hover lift preset */
.hover-lift {
  @apply hover:-translate-y-0.5 hover:shadow-elevated transition-all duration-300;
}

/* Hover glow preset */
.hover-glow-gold {
  @apply hover:shadow-[0_8px_30px_rgba(198,167,94,0.25)] transition-shadow duration-300;
}
```

### 3.3 Composant Button avec micro-interactions

```tsx
// components/shared/CTAButton.tsx
import { ArrowRight } from 'lucide-react';
import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  size?: 'md' | 'lg';
  arrow?: boolean;
}

const variants = {
  primary: `bg-ink text-white hover:bg-black shadow-card hover:shadow-elevated`,
  secondary: `bg-white text-ink border border-cream-cool hover:border-gold/20 hover:bg-cream`,
  ghost: `bg-transparent text-gold hover:text-ink`,
  gold: `bg-gold text-ink hover:bg-gold-light shadow-gold hover:shadow-gold-lg`,
};

const sizes = {
  md: 'h-11 px-6 text-body-sm',
  lg: 'h-14 px-8 text-base',
};

export function CTAButton({ children, href, variant = 'primary', size = 'md', arrow }: Props) {
  return (
    <a href={href}>
      <button className={`group inline-flex items-center gap-2 rounded-full font-semibold
        hover:-translate-y-0.5 active:scale-[0.97]
        transition-all duration-300
        ${variants[variant]} ${sizes[size]}`}>
        {children}
        {arrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300
            group-hover:translate-x-1" />
        )}
      </button>
    </a>
  );
}
```

---

## 4. Animations

### 4.1 Scroll-triggered Variants

```typescript
// lib/animations.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export const staggerSlow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};
```

### 4.2 AnimatedSection Wrapper

```tsx
// components/shared/AnimatedSection.tsx
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { stagger } from '@/lib/animations';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        ...stagger,
        show: {
          ...stagger.show,
          transition: { ...stagger.show.transition, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### 4.3 Reduced Motion Support

```tsx
// hooks/useReducedMotion.ts
import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

// Usage:
// const reduced = useReducedMotion();
// const variants = reduced ? noMotionVariants : fullMotionVariants;
```

---

## 5. Dark Mode (Optionnel)

### 5.1 Token Mapping

| Token | Light Mode | Dark Mode |
|---|---|---|
| `--bg-primary` | `#F8F6F2` (cream) | `#1C1C1E` (ink) |
| `--bg-secondary` | `#FFFFFF` | `#2C2C2E` (ink-soft) |
| `--bg-tertiary` | `#EDEAE4` (cream-cool) | `#3A3A3C` (ink-muted) |
| `--text-primary` | `#1C1C1E` | `#F8F6F2` |
| `--text-secondary` | `#8E8E93` | `#8E8E93` |
| `--accent` | `#C6A75E` | `#D4BA7A` (gold-light) |
| `--border` | `#EDEAE4` | `#3A3A3C` |
| `--card-bg` | `#FFFFFF` | `#2C2C2E` |
| `--card-border` | `#EDEAE4` | `#3A3A3C` |

### 5.2 Tailwind Dark Mode

```typescript
// tailwind.config.ts
export default {
  darkMode: 'class', // or 'media' for system preference
  theme: {
    extend: {
      // tokens mapped above
    },
  },
};
```

### 5.3 Theme Provider

```tsx
// hooks/useTheme.ts
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('nocely-theme') as Theme) || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', isDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
    localStorage.setItem('nocely-theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
```

### 5.4 Composant avec Dark Mode

```tsx
// Exemple: Card adaptative
<div className="bg-white dark:bg-ink-soft
  border border-cream-cool dark:border-ink-muted
  text-ink dark:text-cream
  rounded-3xl p-8 transition-colors duration-300">
  <h3 className="font-serif font-bold">Titre</h3>
  <p className="text-muted">Description</p>
</div>
```

---

## 6. Responsive Design (Mobile-First)

### 6.1 Breakpoints

| Breakpoint | Min-width | Target | Columns |
|---|---|---|---|
| `base` | 0px | Mobile portrait | 1 |
| `sm` | 640px | Mobile landscape | 1–2 |
| `md` | 768px | Tablet | 2 |
| `lg` | 1024px | Desktop | 2–3 |
| `xl` | 1280px | Large desktop | 3 |
| `2xl` | 1536px | Ultra-wide | 3 (max-width capped) |

### 6.2 Container

```
Max-width par section :
- Nav : max-w-7xl (1280px)
- Content : max-w-6xl (1152px)
- Text blocks : max-w-2xl (672px)
- Pricing : max-w-4xl (896px)
```

### 6.3 Responsive Patterns

```tsx
// Hero H1
className="text-display-md md:text-display-lg lg:text-display-xl"
// → 56px mobile, 72px tablet, 96px desktop

// Section H2
className="text-heading-2 md:text-heading-1"
// → 36px mobile, 48px desktop

// Section padding
className="py-16 md:py-24 lg:py-32 px-6"
// → 64px mobile, 96px tablet, 128px desktop

// Feature grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// → 1 col mobile, 2 cols tablet, 3 cols desktop

// Cinema scenes
className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16"
// → Stacked mobile, side-by-side desktop

// Pricing
className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
// → Stacked mobile, side-by-side tablet+

// Nav links
className="hidden lg:flex"
// → Hidden mobile/tablet, visible desktop
```

### 6.4 Mobile-Specific Adaptations

```
Hero :
- H1 : text-display-md (56px) au lieu de 96px
- Subtitle : text-body-md au lieu de body-lg
- CTAs : stack vertical (flex-col) au lieu de horizontal
- Trust bar : grid 2x2 au lieu de 4 colonnes

Features :
- Cards : single column, full width
- Padding : p-6 au lieu de p-8

Cinema :
- Image + text stacked (pas d'alternance)
- Image height : h-[280px] au lieu de h-[420px]

Pricing :
- Cards stacked, Premium au-dessus
- Badge "Recommandé" visible

FAQ :
- Padding réduit : p-5 au lieu de p-8
- Font heading plus petit

Footer :
- Single column, stacked
- Copyright centré
```

### 6.5 Touch Targets

```
Règle : Minimum 44x44px pour tous les éléments interactifs.

Buttons : h-11 (44px) minimum, h-14 (56px) pour CTA principaux
Links nav : py-3 (48px tap area)
FAQ items : p-6 (spacieux, easy tap)
Pricing CTA : h-14 (56px)
```

---

## 7. Résumé des Principes

```
1. MINIMAL     — Chaque élément a un but. Pas de décoration gratuite.
2. PREMIUM     — Finitions soignées. Détails qui comptent (spacing, shadows, transitions).
3. FLUIDE      — Animations douces, transitions naturelles, jamais brusques.
4. COHÉRENT    — Tokens partout. Pas de valeurs magiques.
5. ACCESSIBLE  — Contraste, focus, motion-safe, touch targets.
6. PERFORMANT  — Lazy load, GPU animations, minimal repaints.
7. MOBILE-FIRST— Conçu pour mobile, enrichi pour desktop.
```

---

*Design system prêt pour implémentation. Tous les composants sont fonctionnels avec React + Tailwind.*
