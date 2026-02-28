# Daylora — Document de Spécifications Produit (PRD)
## Site Marketing & Vitrine de Conversion

**Version** : 1.0
**Date** : 18 Février 2026
**Auteur** : Product Team — Daylora
**Statut** : Approuvé pour développement

---

## 1. Résumé Exécutif

Daylora est une plateforme SaaS tout-en-un permettant aux couples de créer, personnaliser et publier un site de mariage complet avec backoffice. Le produit est développé et opérationnel.

Ce PRD concerne exclusivement le **site marketing** (daylora.app) dont la mission est de :
- Communiquer la proposition de valeur en moins de 5 secondes
- Convertir les visiteurs en utilisateurs inscrits
- Éduquer sur les fonctionnalités clés
- Générer des upgrades vers le plan Premium

L'application SaaS vit sur app.daylora.app. Le site marketing est le point d'entrée unique du funnel d'acquisition.

---

## 2. Énoncé du Problème

### 2.1 Complexité de l'organisation d'un mariage

Organiser un mariage en France implique en moyenne la coordination de **15 à 20 prestataires**, la gestion de **80 à 150 invités**, et un budget moyen de **15 000 € à 35 000 €** (source : Mariages.net, 2025). Le couple passe en moyenne **250 à 400 heures** sur l'organisation.

### 2.2 Fragmentation des outils

Aujourd'hui, les couples jonglent entre :
- **Google Sheets** ou Excel pour la liste d'invités
- **WhatsApp / SMS** pour les confirmations RSVP
- **Lydia / PayPal** pour la cagnotte (sans suivi structuré)
- **Canva** pour les invitations
- **Wix / WordPress** pour un site basique (sans fonctionnalités mariage)
- **Tableaux papier** pour les plans de table

Résultat : perte de temps, erreurs, stress inutile, expérience invité médiocre.

### 2.3 Besoin de centralisation digitale

Les couples modernes attendent une **expérience unifiée et élégante** qui reflète la qualité de leur événement. Ils veulent un outil qui :
- Crée un site beau sans compétences techniques
- Gère les RSVP automatiquement
- Centralise la cagnotte avec sécurité
- Envoie des invitations numériques professionnelles
- Fonctionne en français ET en anglais (mariages internationaux)

### 2.4 Données de marché

| Indicateur | France | International |
|---|---|---|
| Mariages / an | 230 000 | 6,5 millions (US + EU) |
| Budget moyen | 15 000 – 35 000 € | 28 000 – 45 000 $ (US) |
| Pénétration digitale mariage | ~25% | ~55% (US) |
| Croissance marché WeddingTech | +18% / an | +22% / an |
| TAM France (SaaS mariage) | ~45M € | ~2,8Mds $ (global) |
| SAM (couples digitaux FR) | ~15M € | — |

Le marché français est **sous-pénétré** par rapport aux US/UK, avec aucun acteur dominant francophone offrant une solution tout-en-un premium.

---

## 3. Persona Marketing

### Marie, 29 ans — "La mariée organisée"

| Attribut | Détail |
|---|---|
| **Âge** | 25 – 35 ans |
| **Situation** | En couple, fiancée, CSP+ |
| **Revenus foyer** | 50K – 90K € / an |
| **Budget mariage** | 10 000 – 40 000 € |
| **Profil digital** | Digital native, utilise Notion, Canva, Instagram quotidiennement |
| **Sensibilité design** | Élevée — veut un rendu "Pinterest-worthy" |
| **Capacité à payer** | 29 – 49 € pour un outil qui lui fait gagner du temps |
| **Frustrations** | Outils moches, processus fragmentés, peur du "site amateur" |
| **Motivations** | Impressionner ses invités, gagner du temps, tout centraliser |
| **Canaux d'acquisition** | Instagram, Pinterest, Google ("site mariage gratuit"), recommandations |
| **Objections potentielles** | "Est-ce que c'est vraiment beau ?", "C'est sécurisé pour l'argent ?", "C'est compliqué ?" |

### Parcours décisionnel

1. **Découverte** (Instagram / Google) → Landing page
2. **Évaluation** (< 60s) → Hero + templates preview
3. **Réassurance** → Témoignages + FAQ
4. **Décision** → Pricing clair + CTA "Commencer gratuitement"
5. **Activation** → Redirect vers app.daylora.app/signup
6. **Upgrade** → Après création du site, in-app

---

## 4. Analyse Concurrentielle

### 4.1 Cartographie

| Critère | WithJoy | Zola | The Knot | Wix Wedding | SayYes | **Daylora** |
|---|---|---|---|---|---|---|
| **Marché** | US | US | US | Global | FR | **FR + International** |
| **Langue FR** | Non | Non | Non | Partiel | Oui | **Oui (natif)** |
| **Positionnement** | Free + Donations | Registry-first | Marketplace | DIY Website | Site mariage FR | **Tout-en-un premium** |
| **Messaging** | "Free wedding website" | "Your wedding, your way" | "Plan your wedding" | "Build your site" | "Votre site de mariage" | **"Votre mariage mérite le meilleur"** |
| **Pricing** | Gratuit + tips | Gratuit + registry fees | Gratuit + ads | 14–39 $/mois | 29–59 € | **Gratuit + 29 € Premium** |
| **RSVP** | Oui | Oui | Oui | Plugin | Oui | **Oui (avancé)** |
| **Cagnotte** | Via Venmo | Via registry | Non | Non | Oui | **Oui (Stripe)** |
| **QR Code invitations** | Non | Non | Non | Non | Non | **Oui** |
| **Live experience** | Non | Non | Non | Non | Non | **Oui** |
| **Design quality** | Moyen | Bon | Daté | Variable | Correct | **Premium** |

### 4.2 Où ils échouent visuellement

- **WithJoy** : Interface datée, templates génériques, aucun effort sur le branding premium. Conversion flow long (6+ étapes).
- **Zola** : Très centré registry US, landing page encombrée, pas de focus mariage international. UX excellente mais non adaptée au marché FR.
- **The Knot** : Surchargé de publicités et d'offres partenaires. L'expérience utilisateur est noyée dans le bruit. Design 2018.
- **Wix Wedding** : Templates génériques non spécialisés mariage. Aucune fonctionnalité RSVP/cagnotte native. Courbe d'apprentissage élevée.
- **SayYes** : Seul concurrent FR direct. Design correct mais pas premium. Pas de live experience, pas de QR codes. Pricing élevé sans justification visuelle.

### 4.3 Avantage concurrentiel Daylora

Daylora est le **seul acteur francophone** combinant :
1. Design premium (templates créés par designers)
2. RSVP intelligent avec QR codes
3. Cagnotte sécurisée Stripe
4. Expérience live pendant le mariage
5. Bilingue FR/EN natif
6. Offre gratuite généreuse

---

## 5. Proposition de Valeur

> **"Créez un site de mariage élégant, gérez vos invités et recevez des contributions — le tout en quelques minutes."**

Déclinaisons marketing :
- Hero : "Votre mariage mérite le meilleur"
- Sous-titre : Créez, gérez, recevez — en quelques minutes.
- CTA : "Commencer gratuitement"

---

## 6. Priorisation MoSCoW — Site Marketing

### Must Have (V1) ✅

| ID | Fonctionnalité | Justification |
|---|---|---|
| M1 | Hero section avec CTA principal | Premier écran = 80% de la décision |
| M2 | Section fonctionnalités (6 features) | Éducation produit |
| M3 | Section cinématique (showcase features) | Différenciation visuelle |
| M4 | Démo RSVP interactive | Preuve tangible du produit |
| M5 | Section pricing (Free vs Premium) | Transparence = confiance |
| M6 | FAQ (6+ questions) | Réduction des objections |
| M7 | Footer avec liens légaux | Conformité RGPD |
| M8 | Navigation fixe avec CTA | Conversion permanente |
| M9 | Responsive design (mobile-first) | 70%+ du trafic est mobile |
| M10 | Redirect vers app.daylora.app | Funnel d'activation |
| M11 | Section témoignages | Social proof |
| M12 | Bandeau stats (social proof) | Crédibilité |

### Should Have

| ID | Fonctionnalité | Justification |
|---|---|---|
| S1 | Preview templates interactive | Permet de "se projeter" avant inscription |
| S2 | Animation scroll cinématique | Engagement + temps passé sur page |
| S3 | Section comparatif "Avant / Après Daylora" | Problème → Solution narrative |
| S4 | Micro-interactions et hover effects | Perception premium |
| S5 | Badge de confiance (Stripe, RGPD, SSL) | Réassurance sécurité |

### Could Have

| ID | Fonctionnalité | Justification |
|---|---|---|
| C1 | Simulateur de mariage (calculateur) | Lead magnet + SEO |
| C2 | Blog SEO intégré | Acquisition organique long terme |
| C3 | Vidéo de présentation produit | Engagement élevé |
| C4 | Chat support intégré | Conversion assistée |
| C5 | A/B testing sur CTA | Optimisation continue |

### Won't Have (hors scope marketing)

| ID | Fonctionnalité | Raison |
|---|---|---|
| W1 | Création de compte sur le site marketing | Vit sur app.daylora.app |
| W2 | Backoffice ou dashboard | Produit SaaS séparé |
| W3 | Paiement / checkout | Géré in-app |
| W4 | Gestion des invités | Fonctionnalité produit |

---

## 7. User Stories Marketing

### Conversion

| # | User Story | Critère d'acceptation |
|---|---|---|
| US1 | En tant que visiteur, je veux comprendre ce que fait Daylora en < 5 secondes pour décider si je continue. | Hero + sous-titre lisibles, message clair. |
| US2 | En tant que visiteur, je veux voir un CTA visible sans scroller pour pouvoir m'inscrire immédiatement. | CTA "Commencer gratuitement" above the fold. |
| US3 | En tant que visiteur, je veux voir le pricing avant de m'inscrire pour savoir si c'est dans mon budget. | Section pricing accessible en 1 clic depuis la nav. |
| US4 | En tant que visiteur, je veux cliquer sur "Commencer" et être redirigé vers l'app pour créer mon compte. | Redirect vers app.daylora.app/app/signup. |
| US5 | En tant que visiteur mobile, je veux une expérience fluide pour ne pas quitter la page. | Responsive, touch-friendly, < 3s de chargement. |

### Compréhension

| # | User Story | Critère d'acceptation |
|---|---|---|
| US6 | En tant que visiteur, je veux voir les fonctionnalités principales pour comprendre la valeur. | 6 features cards avec icônes et descriptions. |
| US7 | En tant que visiteur, je veux voir un aperçu du RSVP pour comprendre comment ça marche. | Démo RSVP interactive (non fonctionnelle). |
| US8 | En tant que visiteur, je veux voir des screenshots du produit pour me projeter. | Section cinématique avec 8 scènes illustrées. |
| US9 | En tant que visiteur, je veux comprendre la différence Free vs Premium pour choisir. | Tableau comparatif clair avec check/cross. |
| US10 | En tant que visiteur, je veux savoir si le site est bilingue pour mon mariage international. | Mention FR/EN dans le hero ou les features. |

### Réassurance

| # | User Story | Critère d'acceptation |
|---|---|---|
| US11 | En tant que visiteur, je veux lire des témoignages de vrais couples pour être rassuré. | 3+ témoignages avec nom, photo, lieu, note. |
| US12 | En tant que visiteur, je veux savoir si la cagnotte est sécurisée pour faire confiance. | Mention Stripe + badges sécurité. |
| US13 | En tant que visiteur, je veux lire une FAQ pour lever mes derniers doutes. | 6+ questions/réponses couvrant les objections principales. |
| US14 | En tant que visiteur, je veux voir des chiffres (utilisateurs, satisfaction) pour valider la crédibilité. | Bandeau stats : 2 500+ couples, 98% satisfaction, etc. |
| US15 | En tant que visiteur, je veux savoir que c'est gratuit pour démarrer sans risque. | "100% gratuit pour démarrer" visible dans le hero. |

### Engagement

| # | User Story | Critère d'acceptation |
|---|---|---|
| US16 | En tant que visiteur, je veux une expérience visuelle premium pour associer Daylora à la qualité. | Animations fluides, design soigné, images HD. |
| US17 | En tant que visiteur, je veux pouvoir naviguer facilement entre les sections. | Nav fixe avec ancres smooth scroll. |
| US18 | En tant que visiteur, je veux accéder à mon compte si j'en ai déjà un. | Bouton "Connexion" dans la nav → app.daylora.app/app/login. |
| US19 | En tant que visiteur, je veux voir les templates disponibles pour me projeter. | Section templates avec aperçu visuel. |
| US20 | En tant que visiteur sur Google, je veux que la page soit bien référencée pour trouver Daylora facilement. | Meta tags, title, description optimisés. |

---

## 8. Métriques de Succès

### KPIs Primaires

| Métrique | Objectif V1 | Objectif V2 (6 mois) |
|---|---|---|
| **Taux de conversion Landing → Signup** | 4 – 6% | 8 – 12% |
| **CTR CTA principal** (hero) | 8 – 12% | 15%+ |
| **Scroll depth** (% atteignant pricing) | 40%+ | 55%+ |
| **Bounce rate** | < 55% | < 40% |
| **Temps moyen sur page** | > 90s | > 120s |
| **Conversion Signup → Premium** | 5 – 8% | 12 – 18% |

### KPIs Secondaires

| Métrique | Objectif |
|---|---|
| Mobile conversion rate | > 3% |
| Pages / session | > 1.5 |
| Taux de clic FAQ | > 20% des visiteurs |
| Partage social (si trackable) | > 2% |
| Core Web Vitals (LCP) | < 2.5s |

### Outils de mesure recommandés

- **Analytics** : Plausible ou PostHog (RGPD-friendly)
- **Heatmaps** : Hotjar ou Microsoft Clarity
- **A/B Testing** : PostHog ou GrowthBook
- **Performance** : Lighthouse CI

---

## 9. Scope MVP Marketing (V1)

### Structure de page

```
┌─────────────────────────────────────┐
│           NAV FIXE                  │
│  Logo | Liens | Connexion | CTA     │
├─────────────────────────────────────┤
│           HERO                      │
│  Badge + H1 + Sous-titre + 2 CTA   │
│  Background: Photo mariage HD       │
├─────────────────────────────────────┤
│         TRUST BAR                   │
│  4 badges (Paiements, 3min, FR/EN,  │
│  Gratuit)                           │
├─────────────────────────────────────┤
│          STATS                      │
│  2500+ couples | 98% | 3 min | 150k │
├─────────────────────────────────────┤
│      FONCTIONNALITÉS (6 cards)      │
│  Création | RSVP | QR | Cagnotte   │
│  Live | Templates                   │
├─────────────────────────────────────┤
│      RSVP DEMO INTERACTIVE         │
│  Texte gauche + Carte RSVP droite   │
├─────────────────────────────────────┤
│     CINÉMATIQUE (8 scenes)          │
│  Alternance image/texte gauche-     │
│  droite avec animations             │
├─────────────────────────────────────┤
│       TÉMOIGNAGES (3 cards)         │
│  Photo + Nom + Lieu + Quote + Note  │
├─────────────────────────────────────┤
│         PRICING                     │
│  Free vs Premium + comparatif       │
├─────────────────────────────────────┤
│           FAQ                       │
│  6 questions en accordéon           │
├─────────────────────────────────────┤
│      CTA FINAL                      │
│  "Prêt à commencer ?" + bouton     │
├─────────────────────────────────────┤
│          FOOTER                     │
│  Logo + Liens + Légal + Social      │
└─────────────────────────────────────┘
```

### Sections V1 détaillées

| Section | Contenu | Objectif |
|---|---|---|
| Nav | Logo, 5 ancres, Connexion, CTA | Navigation + conversion permanente |
| Hero | Photo full-screen, H1, sous-titre, 2 boutons | Capturer l'attention, premier CTA |
| Trust Bar | 4 icônes de réassurance | Crédibilité immédiate |
| Stats | 4 métriques clés | Social proof quantitative |
| Features | 6 cartes avec icône, titre, description | Éducation produit |
| RSVP Demo | Carte RSVP interactive (mockup) | Preuve tangible |
| Cinématique | 8 scènes image + texte alternées | Showcase produit premium |
| Témoignages | 3 cartes avec photo et citation | Social proof qualitative |
| Pricing | 2 plans côte à côte | Transparence + conversion |
| FAQ | 6 questions/réponses accordéon | Lever les objections |
| CTA Final | Headline + bouton | Dernière chance de conversion |
| Footer | Logo, liens, légal | Navigation secondaire + conformité |

---

## 10. Scope V2 Marketing (6 mois)

| Fonctionnalité | Impact attendu | Effort |
|---|---|---|
| **Démo interactive** (créer un mini-site en live) | +30% conversion | Élevé |
| **Témoignages vidéo** (courts, type Reels) | +20% confiance | Moyen |
| **Comparatif concurrents** (tableau détaillé) | +15% SEO + décision | Faible |
| **Blog SEO** (articles mariage, guides) | +50% trafic organique à 12 mois | Élevé |
| **Simulateur mariage** (calculateur budget/invités) | Lead magnet, +25% emails collectés | Moyen |
| **Programme de parrainage** (widget referral) | Acquisition virale | Moyen |
| **Galerie de vrais mariages** (showcase clients) | Social proof avancée | Faible |
| **Multi-langue** (ES, IT, DE) | Expansion marché | Élevé |
| **Page "Comment ça marche"** (3 étapes illustrées) | Réduction bounce rate | Faible |
| **Intégration avis Google / Trustpilot** | Réassurance externe | Faible |

---

## 11. Wireframes Détaillés

### 11.1 Hero Section

```
┌──────────────────────────────────────────────────────────┐
│  [Photo mariage plein écran — bouquet, cérémonie, lumière]│
│  Overlay gradient sombre → fond page                     │
│                                                          │
│        ┌─────────────────────────────────┐               │
│        │ ✨ La plateforme mariage N°1    │               │
│        │    en France                    │               │
│        └─────────────────────────────────┘               │
│                                                          │
│         Votre mariage                                    │
│         mérite le meilleur                               │
│         (Serif, 8xl, blanc, italique sur ligne 2)        │
│                                                          │
│     Créez un site élégant, gérez vos invités             │
│     et recevez des contributions — en quelques minutes.  │
│                                                          │
│     ┌─────────────────────┐  ┌──────────────────┐        │
│     │ Commencer           │  │  ▶ Découvrir     │        │
│     │ gratuitement    →   │  │                  │        │
│     └─────────────────────┘  └──────────────────┘        │
│          (Noir, rounded)       (Glass, ghost)            │
│                                                          │
│                    ↓ (chevron animé)                     │
│                                                          │
│  ✓ Paiements  ⚡ 3 min  🌐 FR/EN  ♥ 100% gratuit       │
└──────────────────────────────────────────────────────────┘
```

**Spécifications** :
- Background : Image HD mariage (fleurs, cérémonie, lumière dorée)
- Parallax : Léger zoom au scroll (scale 1 → 1.1)
- Opacity : Fade out au scroll
- Typographie H1 : Serif, extrabold, 8xl desktop / 5xl mobile
- Ligne 2 du H1 : Gradient doré (text-gradient), italique
- CTA principal : Fond noir, texte blanc, rounded-full, shadow
- CTA secondaire : Glass morphism, icône play
- Badge : Rounded-full, backdrop-blur, border subtle
- Trust bar : 4 icônes + texte, espacement régulier

### 11.2 Section Problème (Stats + Trust)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│     2 500+        98%         3 min        150k+         │
│     couples     de satis-    pour créer   invités        │
│     heureux     faction      votre site   gérés          │
│                                                          │
│  (Serif bold, gradient doré pour les chiffres)           │
│  (Texte small, couleur muted)                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Spécifications** :
- Layout : 4 colonnes, centré
- Chiffres : font-serif, bold, gradient doré
- Labels : text-sm, couleur secondaire
- Animation : Fade up au scroll, staggered

### 11.3 Section Solution (Fonctionnalités)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│            ✨ Tout-en-un                                 │
│                                                          │
│     Tout ce dont vous avez besoin,                       │
│     réuni en un seul endroit                             │
│     (gradient doré sur ligne 2)                          │
│                                                          │
│  Fini les dizaines d'outils. Daylora centralise...        │
│                                                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│  │ 🪄          │ │ 👥          │ │ 📱          │        │
│  │ Création    │ │ Gestion     │ │ Invitations │        │
│  │ guidée      │ │ RSVP        │ │ QR Code     │        │
│  │             │ │             │ │             │        │
│  │ Description │ │ Description │ │ Description │        │
│  └─────────────┘ └─────────────┘ └─────────────┘        │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│  │ 🎁          │ │ 🎉          │ │ 🎨          │        │
│  │ Cagnotte    │ │ Mode Live   │ │ Templates   │        │
│  │ Stripe      │ │             │ │ premium     │        │
│  │             │ │             │ │             │        │
│  │ Description │ │ Description │ │ Description │        │
│  └─────────────┘ └─────────────┘ └─────────────┘        │
│                                                          │
│  Hover : gradient blur bg, icône bg → primary,          │
│  card lift (-translate-y-1), border primary              │
└──────────────────────────────────────────────────────────┘
```

**Spécifications** :
- Grid : 3 colonnes desktop, 1 colonne mobile
- Cards : rounded-3xl, bg-white, border subtle
- Icône : 56px, rounded-2xl, bg-primary/10, hover → bg-primary + text-white
- Hover : Shadow 20px, translate-y -1, gradient blur dans le coin
- Titre : font-serif, bold, xl
- Description : text-muted, leading-relaxed
- Animation : Fade up staggered au scroll

### 11.4 Section RSVP Demo

```
┌──────────────────────────────────────────────────────────┐
│  [Fond sombre : #2b2320 → #3D332B + orbes primary]      │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐        │
│  │                     │  │                     │        │
│  │  ✓ RSVP intelligent │  │   ┌─────────────┐   │        │
│  │                     │  │   │ INVITATION  │   │        │
│  │  Vos invités        │  │   │             │   │        │
│  │  confirment         │  │   │ Marie &     │   │        │
│  │  en un instant      │  │   │ Thomas      │   │        │
│  │  (primary gold)     │  │   │             │   │        │
│  │                     │  │   │ 21 Juin 2026│   │        │
│  │  Description...     │  │   │ Château     │   │        │
│  │                     │  │   │             │   │        │
│  │  ✓ Confirmation     │  │   │ [Nom]       │   │        │
│  │    en 1 clic        │  │   │ ┌────┐┌────┐│   │        │
│  │  ✓ QR Codes         │  │   │ │ ✓  ││ ✗  ││   │        │
│  │    personnalisés    │  │   │ └────┘└────┘│   │        │
│  │  ✓ Tableau de       │  │   │ Nb: 4      │   │        │
│  │    bord en direct   │  │   │             │   │        │
│  │                     │  │   │ [Confirmer] │   │        │
│  └─────────────────────┘  │   └─────────────┘   │        │
│                           └─────────────────────┘        │
└──────────────────────────────────────────────────────────┘
```

**Spécifications** :
- Fond : Gradient sombre avec orbes dorées blur
- Layout : 2 colonnes, texte gauche, card droite
- Card RSVP : rounded-3rem, bg-white, border gradient primary
- Boutons Présent/Absent : Primary filled / outlined
- Check items : icônes primary dans cercles
- Texte : blanc, muted pour descriptions
- Animation : Scale in pour la card

### 11.5 Section Cinématique

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│            📷 Visite guidée                              │
│                                                          │
│     Chaque fonctionnalité                                │
│     est une scène                                        │
│                                                          │
│  Scène 1 (image gauche, texte droite) :                  │
│  ┌───────────────────┐  ┌─────────────────────┐          │
│  │                   │  │ 🪄 Création express │          │
│  │   [IMAGE]         │  │                     │          │
│  │   Scene creation  │  │ Votre site en       │          │
│  │                   │  │ 3 minutes           │          │
│  │   01 / 08         │  │                     │          │
│  └───────────────────┘  │ Description...      │          │
│                         │                     │          │
│                         │ Découvrir →         │          │
│                         └─────────────────────┘          │
│                                                          │
│  Scène 2 (texte gauche, image droite) :                  │
│  ┌─────────────────────┐  ┌───────────────────┐          │
│  │ 👥 RSVP intelligent │  │                   │          │
│  │                     │  │   [IMAGE]         │          │
│  │ Gérez vos invités   │  │   Scene RSVP      │          │
│  │ sans effort         │  │                   │          │
│  │                     │  │   02 / 08         │          │
│  │ Description...      │  └───────────────────┘          │
│  │                     │                                 │
│  │          Découvrir →│                                 │
│  └─────────────────────┘                                 │
│                                                          │
│  [... alternance pour les 8 scènes ...]                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Spécifications** :
- Layout : 2 colonnes alternées (image/texte, texte/image)
- Images : rounded-2rem, shadow-2xl, border subtle, hover zoom 1.05
- Overlay : Gradient bottom sur image + badge catégorie en glass
- Numérotation : "01 / 08" en badge glass
- Animation : Slide in depuis le côté de l'image (gauche ou droite)
- Texte : Kicker + H3 serif bold + description + lien "Découvrir"
- Espacement : 32px entre scènes (mobile), 128px (desktop)

### 11.6 Pricing

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│            💎 Tarifs                                     │
│                                                          │
│     Un prix simple,                                      │
│     transparent                                          │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐        │
│  │                     │  │  ★ RECOMMANDÉ       │        │
│  │      Gratuit        │  │                     │        │
│  │                     │  │      Premium        │        │
│  │     0 € / mois      │  │                     │        │
│  │                     │  │    29 € / mois      │        │
│  │  ✓ Site basique     │  │                     │        │
│  │  ✓ 1 template       │  │  ✓ Tout Gratuit +   │        │
│  │  ✓ RSVP (50 inv.)   │  │  ✓ Templates illimités│      │
│  │  ✓ Cagnotte         │  │  ✓ Invités illimités │        │
│  │  ✗ Domaine custom   │  │  ✓ Domaine custom   │        │
│  │  ✗ QR Codes         │  │  ✓ QR Codes         │        │
│  │  ✗ Mode Live        │  │  ✓ Mode Live        │        │
│  │  ✗ Support prioritaire│ │  ✓ Support prioritaire│     │
│  │  ✗ Analytics        │  │  ✓ Analytics avancés │        │
│  │                     │  │                     │        │
│  │  [Commencer]        │  │  [Passer Premium]   │        │
│  │  (outline)          │  │  (filled, shadow)   │        │
│  └─────────────────────┘  └─────────────────────┘        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Spécifications** :
- 2 cartes côte à côte, Premium mise en avant (badge, border primary, shadow)
- Check/Cross avec couleurs (primary / muted)
- Prix : font-serif, 5xl, bold
- CTA Gratuit : outline, secondary
- CTA Premium : filled primary, shadow, hover scale
- Animation : Scale in, staggered

### 11.7 FAQ

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│            ❓ FAQ                                        │
│                                                          │
│     Questions fréquentes                                 │
│                                                          │
│  ┌──────────────────────────────────────────────┐        │
│  │ ▸ Combien de temps pour créer mon site ?     │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ▸ Mes invités doivent-ils créer un compte ?  │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ▾ Comment fonctionne la cagnotte ?           │        │
│  │                                              │        │
│  │   La cagnotte est sécurisée par Stripe,      │        │
│  │   le leader mondial du paiement en ligne...  │        │
│  │                                              │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ▸ Puis-je modifier le design après ?         │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ▸ Le site est-il bilingue ?                  │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ▸ Puis-je exporter la liste d'invités ?      │        │
│  └──────────────────────────────────────────────┘        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Spécifications** :
- Accordéon : Un seul ouvert à la fois
- Icône : Chevron rotation 180° au clic
- Animation : Height transition smooth
- Style : bg-white, rounded-2xl, border subtle
- Padding généreux : p-6 à p-8

### 11.8 Footer

```
┌──────────────────────────────────────────────────────────┐
│  [Fond sombre : #2b2320]                                 │
│                                                          │
│  ♥ Daylora                    Produit     Légal           │
│  WEDDING PLATFORM            Features    CGU             │
│                              Pricing     Confidentialité │
│  Votre mariage mérite        FAQ         Mentions légales│
│  le meilleur.                Témoignages                 │
│                                                          │
│  ─────────────────────────────────────────────────        │
│                                                          │
│  © 2026 Daylora. Tous droits réservés.                    │
│  Fait avec ♥ à Paris                                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 11.9 Flow d'inscription

```
  Visiteur arrive sur daylora.app
           │
           ▼
  ┌─────────────────┐
  │  Landing page   │
  │  (Hero visible) │
  └────────┬────────┘
           │
     Clic CTA "Commencer"
     ou "Créer mon site"
           │
           ▼
  ┌─────────────────────────┐
  │  Redirect 302           │
  │  → app.daylora.app       │
  │    /app/signup           │
  └────────┬────────────────┘
           │
           ▼
  ┌─────────────────────────┐
  │  Formulaire inscription │
  │  (sur app.daylora.app)   │
  └────────┬────────────────┘
           │
           ▼
  ┌─────────────────────────┐
  │  Wizard création site   │
  │  (in-app)               │
  └────────┬────────────────┘
           │
           ▼
  ┌─────────────────────────┐
  │  Site publié            │
  │  → Upsell Premium      │
  └─────────────────────────┘
```

---

## 12. Contraintes Techniques

| Contrainte | Détail |
|---|---|
| **Stack** | React 18 + TypeScript + Vite 5 + Tailwind CSS v3 |
| **Hébergement** | Déploiement statique (dist/public/) |
| **Domaine** | daylora.app (marketing) / app.daylora.app (SaaS) |
| **Performance** | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| **SEO** | Meta tags, Open Graph, sitemap.xml, robots.txt |
| **Accessibilité** | WCAG 2.1 AA minimum |
| **RGPD** | Pas de cookies tiers, analytics RGPD-friendly |
| **Responsive** | Mobile-first, breakpoints : sm/md/lg/xl |
| **Animations** | framer-motion, scroll-triggered, performantes (GPU) |
| **Images** | WebP/AVIF avec fallback, lazy loading |

---

## 13. Risques et Mitigations

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| Temps de chargement élevé (images HD) | Moyenne | Élevé | Compression, lazy load, CDN |
| Bounce rate mobile élevé | Moyenne | Élevé | Mobile-first design, CTA above fold |
| Confusion Free vs Premium | Faible | Moyen | Pricing clair, FAQ dédiée |
| Concurrence SEO (termes génériques) | Élevée | Moyen | Focus long-tail FR, blog V2 |
| Taux de conversion faible | Moyenne | Élevé | A/B testing CTA, heatmaps |

---

## 14. Roadmap

| Phase | Timeline | Contenu |
|---|---|---|
| **V1 — MVP Marketing** | Semaine 1-2 | Hero, Features, RSVP Demo, Cinématique, Témoignages, Pricing, FAQ, Footer |
| **V1.1 — Optimisation** | Semaine 3-4 | Performance, SEO meta, analytics, mobile polish |
| **V2 — Croissance** | Mois 2-6 | Blog SEO, démo interactive, vidéo, comparatif, simulateur |
| **V3 — Scale** | Mois 6-12 | Multi-langue, programme referral, galerie clients, intégrations |

---

*Document préparé pour présentation investisseur. Toutes les métriques et données de marché sont basées sur des estimations sectorielles 2025-2026.*
