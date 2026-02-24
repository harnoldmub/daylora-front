import { Button } from "@/components/ui/button";
import {
  Heart,
  Sparkles,
  Gift,
  CheckCircle2,
  ArrowRight,
  Users,
  MessageCircle,
  Layout,
  QrCode,
  Play,
  ShieldCheck,
  Wand2,
  Crown,
  PartyPopper,
  Star,
  Zap,
  Camera,
  ChevronDown,
  Quote,
  Check,
  X,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const APP_URL = "https://app.nocely.app";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const SCENES = [
  {
    kicker: "Site de mariage",
    title: "Votre site prêt en quelques minutes",
    desc: "Choisissez un modèle, changez les textes, les couleurs et les photos — tout se fait simplement, sans rien y connaître en informatique.",
    image: "/cinematic/scene_creation_express_v2_png_1770982391605.png",
    icon: <Wand2 className="h-5 w-5" />,
  },
  {
    kicker: "Invitations & Réponses",
    title: "Vos invités répondent en un clic",
    desc: "Chaque invité reçoit son propre lien avec une belle invitation, un QR code et un bouton pour confirmer sa présence.",
    image: "/cinematic/scene_rsvp_intelligent_v2_png_1770982414436.png",
    icon: <Users className="h-5 w-5" />,
  },
  {
    kicker: "Cagnotte & Cadeaux",
    title: "Recevez des contributions et proposez des cadeaux",
    desc: "Vos proches peuvent vous envoyer de l'argent en toute sécurité ou réserver un cadeau dans votre liste — simple et rapide.",
    image: "/cinematic/scene_payments_secure_png_1770982456771.png",
    icon: <Gift className="h-5 w-5" />,
  },
  {
    kicker: "Animation en direct",
    title: "Animez votre soirée en direct",
    desc: "Affichez les messages et contributions de vos invités sur grand écran pendant la fête, avec des blagues et des animations.",
    image: "/cinematic/scene_live_experience_v2_png_1770982504994.png",
    icon: <PartyPopper className="h-5 w-5" />,
  },
];

const TESTIMONIALS = [
  {
    name: "Sophie & Marc",
    location: "Paris, France",
    quote: "Nocely a transformé notre mariage. Nos invités étaient bluffés par la qualité du site. La cagnotte en ligne a simplifié tout le processus.",
    image: "/images/testimonial-1.jpg",
    rating: 5,
  },
  {
    name: "Amélie & James",
    location: "Lyon, France",
    quote: "Le live pendant la soirée était magique ! Les messages des invités s'affichaient en direct avec des confettis. Un moment inoubliable.",
    image: "/images/testimonial-2.jpg",
    rating: 5,
  },
  {
    name: "Fatou & Olivier",
    location: "Bordeaux, France",
    quote: "Créer notre site a pris 5 minutes. Le résultat est digne d'un studio professionnel. Nos invités ont confirmé via le RSVP en un instant.",
    image: "/images/testimonial-3.jpg",
    rating: 5,
  },
];

const STATS = [
  { value: "2 500+", label: "couples heureux" },
  { value: "98%", label: "de satisfaction" },
  { value: "3 min", label: "pour créer votre site" },
  { value: "150k+", label: "invités gérés" },
];

const FAQ_ITEMS = [
  {
    q: "Combien de temps faut-il pour créer mon site ?",
    a: "En moyenne 3 minutes. On vous pose quelques questions, et votre site est prêt à être partagé.",
  },
  {
    q: "Mes invités ont-ils besoin de créer un compte ?",
    a: "Non, jamais. Votre site est accessible à tout le monde, sans inscription. Vos invités confirment leur présence en un seul clic.",
  },
  {
    q: "Comment fonctionne la cagnotte ?",
    a: "Les paiements passent par Stripe, le système de paiement le plus utilisé au monde. Chaque don est accompagné d'un message et vous voyez les montants en direct.",
  },
  {
    q: "Puis-je modifier mon site après la création ?",
    a: "Bien sûr. Couleurs, polices, images, textes — vous pouvez tout changer à tout moment depuis votre espace. Vous pouvez même changer de modèle.",
  },
  {
    q: "Puis-je récupérer la liste de mes invités ?",
    a: "Oui, vous pouvez télécharger un fichier avec tous les détails : noms, emails, réponses, régimes alimentaires — tout y est.",
  },
  {
    q: "Comment fonctionne le parrainage ?",
    a: "Vous recevez un code à partager avec vos amis. Chaque ami qui l'utilise obtient 10 € de réduction sur le Premium.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#2b2320] selection:bg-primary/20 overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto rounded-full px-5 md:px-8 py-3 flex items-center justify-between bg-white/80 backdrop-blur-xl border border-[#E9DFD2]/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
          <a href="/" className="flex items-center group cursor-pointer">
            <img src="/images/logo.png" alt="Nocely" className="h-10 md:h-12 w-auto transition-all group-hover:scale-105" />
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#7A6B5E]">
            <a href="#features" className="hover:text-primary transition-colors relative group">
              Fonctionnalités
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
            </a>
            <a href="#cinema" className="hover:text-primary transition-colors relative group">
              Expérience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
            </a>
            <a href="#testimonials" className="hover:text-primary transition-colors relative group">
              Témoignages
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors relative group">
              Tarifs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
            </a>
            <a href="#faq" className="hover:text-primary transition-colors relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <a href={`${APP_URL}/login`} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest text-[#7A6B5E] hover:text-[#2b2320] transition-colors hidden md:inline-flex">
                Connexion
              </Button>
            </a>
            <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full px-5 md:px-8 h-10 md:h-12 bg-[#2b2320] text-white hover:bg-black transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 border-none text-sm md:text-base">
                Créer mon site
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src="/images/wedding-hero.png"
            alt="Wedding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#F6F1EA]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F6F1EA] to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 pt-24"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase text-white border border-white/20 shadow-2xl">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              La plateforme mariage n°1 en France
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-extrabold leading-[0.85] tracking-tighter text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              Votre mariage
              <br />
              <span className="text-gradient">mérite le meilleur</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md"
            >
              Créez votre site de mariage, gérez vos invités et recevez de l'argent — en quelques minutes.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-10 md:px-14 h-14 md:h-16 text-lg md:text-xl bg-primary hover:bg-primary/90 group border-none shadow-[0_15px_40px_rgba(200,169,106,0.5)] transition-all hover:-translate-y-1 w-full sm:w-auto">
                  Commencer gratuitement
                  <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 md:px-14 h-14 md:h-16 text-lg md:text-xl border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/20 shadow-xl transition-all hover:-translate-y-1">
                <a href="#cinema">
                  <Play className="mr-3 h-5 w-5 fill-white" />
                  Découvrir
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 md:gap-6 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
                <Heart className="h-3.5 w-3.5 text-white" />
                <span className="text-white text-xs font-medium">100% gratuit pour démarrer</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
                <Zap className="h-3.5 w-3.5 text-white" />
                <span className="text-white text-xs font-medium">Site prêt en 3 min</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="h-3.5 w-3.5 text-white" />
                <span className="text-white text-xs font-medium">Paiements sécurisés</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-[#7A6B5E]/60" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-white/50 border-y border-[#E9DFD2]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center space-y-2">
                <div className="text-3xl md:text-5xl font-serif font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-[#7A6B5E] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center space-y-5"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.2em] uppercase text-primary border border-primary/20">
              <Sparkles className="h-3.5 w-3.5" />
              Tout-en-un
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Tout ce qu'il vous faut,
              <br className="hidden md:block" />
              <span className="text-gradient">au même endroit</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#7A6B5E] max-w-2xl mx-auto">
              Plus besoin de jongler entre 10 outils. Votre site, vos invités, votre cagnotte — tout est ici.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Wand2 className="h-5 w-5" />,
                title: "Site sur mesure",
                desc: "3 modèles élégants à personnaliser : couleurs, polices, photos — aucune compétence technique nécessaire.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Réponses & Invités",
                desc: "Voyez qui vient en temps réel. Filtrez par statut, gérez les accompagnants et téléchargez la liste.",
              },
              {
                icon: <QrCode className="h-5 w-5" />,
                title: "Invitations QR Code",
                desc: "Chaque invité reçoit son propre lien avec une invitation à son nom et un QR code.",
              },
              {
                icon: <Gift className="h-5 w-5" />,
                title: "Cagnotte & Cadeaux",
                desc: "Recevez de l'argent en toute sécurité et proposez une liste de cadeaux à réserver.",
              },
              {
                icon: <PartyPopper className="h-5 w-5" />,
                title: "Écran live & Blagues",
                desc: "Affichez les dons et messages sur grand écran pendant la soirée, avec des blagues en direct.",
              },
              {
                icon: <Layout className="h-5 w-5" />,
                title: "Programme & Lieux",
                desc: "Montrez le déroulé de la journée, les adresses et les hôtels à proximité.",
              },
              {
                icon: <Camera className="h-5 w-5" />,
                title: "Photos & Histoire",
                desc: "Partagez vos plus belles photos et racontez votre histoire de couple.",
              },
              {
                icon: <MessageCircle className="h-5 w-5" />,
                title: "Emails & Pages",
                desc: "Envoyez des invitations ou des rappels par email. Ajoutez des pages à votre site.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="group p-6 rounded-2xl bg-white border border-[#E9DFD2] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(200,169,106,0.12)] hover:-translate-y-0.5 relative overflow-hidden"
              >
                <div className="relative z-10 space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-serif font-bold">{feature.title}</h3>
                  <p className="text-[#7A6B5E] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cinema" className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center space-y-5 mb-14 md:mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.2em] uppercase text-primary border border-primary/20">
              <Camera className="h-3.5 w-3.5" />
              Visite guidée
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Comment ça
              <br />
              <span className="text-gradient">fonctionne</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#7A6B5E] max-w-2xl mx-auto">
              En quelques étapes simples, votre mariage prend vie en ligne.
            </motion.p>
          </motion.div>

          <div className="space-y-14 md:space-y-20">
            {SCENES.map((scene, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={scene.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={stagger}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? "lg:direction-rtl" : ""}`}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: isEven ? -50 : 50 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                    }}
                    className={`relative group ${!isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#E9DFD2] bg-white">
                      <div className="relative overflow-hidden">
                        <img
                          src={scene.image}
                          alt={scene.title}
                          className="w-full h-[260px] md:h-[340px] object-cover transition-transform ease-out group-hover:scale-105"
                          style={{ transitionDuration: "1.2s" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/20">
                          <span className="text-white">{scene.icon}</span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">{scene.kicker}</span>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 text-[10px] font-bold text-white/80">
                          {String(index + 1).padStart(2, "0")} / {String(SCENES.length).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: isEven ? 50 : -50 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.15 } },
                    }}
                    className={`space-y-6 ${!isEven ? "lg:order-1 lg:text-right" : ""}`}
                  >
                    <div className={`flex items-center gap-3 ${!isEven ? "lg:justify-end" : ""}`}>
                      <span className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/10">
                        {scene.icon}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">{scene.kicker}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{scene.title}</h3>
                    <p className="text-[#7A6B5E] text-lg leading-relaxed max-w-lg">{scene.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center space-y-5"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.2em] uppercase text-primary border border-primary/20">
              <Heart className="h-3.5 w-3.5" />
              Témoignages
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Ils ont dit <span className="text-gradient italic">oui</span> à Nocely
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#7A6B5E] max-w-xl mx-auto">
              Des couples comme vous nous font confiance pour leur plus beau jour.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="group p-8 rounded-3xl bg-[#F6F1EA]/60 border border-[#E9DFD2] hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(200,169,106,0.12)] transition-all duration-500"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-[#5D5147] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-[#2b2320]">{t.name}</div>
                    <div className="text-xs text-[#7A6B5E]">{t.location}</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center space-y-5"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.2em] uppercase text-primary border border-primary/20">
              <Crown className="h-3.5 w-3.5" />
              Tarifs
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold">
              Simple, transparent,
              <br />
              <span className="text-gradient italic">sans surprise</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#7A6B5E] max-w-xl mx-auto">
              Commencez gratuitement. Passez au Premium quand vous êtes prêt.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-10 rounded-[2.5rem] bg-white border border-[#E9DFD2] space-y-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="space-y-6">
                <div className="text-primary font-bold tracking-widest uppercase text-xs">Gratuit</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-bold font-serif">0€</span>
                </div>
                <p className="text-[#7A6B5E]">Parfait pour essayer Nocely et créer votre premier site.</p>
                <ul className="space-y-4">
                  {[
                    { text: "1 template (Classique)", included: true },
                    { text: "30 RSVP maximum", included: true },
                    { text: "Cagnotte en ligne", included: true },
                    { text: "6 photos en galerie", included: true },
                    { text: "Branding Nocely", included: true },
                    { text: "Liste cadeaux", included: false },
                    { text: "Page live & blagues", included: false },
                    { text: "Pages personnalisées", included: false },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      {item.included ? (
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-[#C4B8AA] flex-shrink-0" />
                      )}
                      <span className={item.included ? "text-[#5D5147]" : "text-[#B6A796]"}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full rounded-full h-14 bg-white text-[#2b2320] font-bold hover:bg-[#F3EBE1] border-2 border-[#E6DCCF] text-base transition-all hover:border-primary/40">
                  Démarrer gratuitement
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#2b2320] to-[#3D332B] relative overflow-hidden space-y-8 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform"
            >
              <div className="absolute top-4 right-6 px-4 py-1.5 bg-primary rounded-full text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                <Star className="h-3 w-3 fill-white" />
                Best seller
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

              <div className="space-y-6 relative z-10">
                <div className="text-primary font-bold tracking-widest uppercase text-xs">Premium</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-white font-serif">23,99€</span>
                  <span className="text-white/60 text-sm">/mois</span>
                </div>
                <p className="text-white/70">ou 149€/an — tout ce qu'il faut pour un mariage parfait.</p>
                <ul className="space-y-4">
                  {[
                    "3 templates (Classique, Modern, Minimal)",
                    "RSVP illimités",
                    "Liste de cadeaux avec réservation",
                    "Page live et blagues",
                    "Pages personnalisées",
                    "50 photos en galerie",
                    "Sans branding Nocely",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer" className="block relative z-10">
                <Button className="w-full rounded-full h-14 bg-primary text-white hover:bg-primary/90 font-bold border-none text-base shadow-[0_10px_30px_rgba(200,169,106,0.3)] transition-all hover:shadow-[0_15px_40px_rgba(200,169,106,0.5)]">
                  Choisir Premium
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </div>

          <p className="text-center text-sm text-[#8C7A6B]">
            Aucune carte requise pour commencer. Passez au Premium quand vous êtes prêt.
          </p>
        </div>
      </section>

      <section id="faq" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center space-y-5"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.2em] uppercase text-primary border border-primary/20">
              <MessageCircle className="h-3.5 w-3.5" />
              FAQ
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold">
              Questions fréquentes
            </motion.h2>
          </motion.div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="rounded-2xl border border-[#E9DFD2] bg-[#F6F1EA]/40 overflow-hidden transition-all hover:border-primary/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <h4 className="font-serif font-bold text-lg pr-4 group-hover:text-primary transition-colors">{faq.q}</h4>
                  <ChevronDown className={`h-5 w-5 text-[#7A6B5E] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                  <p className="px-8 text-[#7A6B5E] leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/feature-guests.jpg"
            alt="Wedding celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b2320]/90 to-[#2b2320]/80" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Prêt à créer
              <br />
              <span className="text-primary italic">quelque chose de beau ?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
              Rejoignez les couples qui ont choisi Nocely pour leur plus beau jour.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-12 md:px-16 h-16 text-xl bg-primary hover:bg-primary/90 border-none shadow-[0_15px_40px_rgba(200,169,106,0.5)] transition-all hover:-translate-y-1 group w-full sm:w-auto">
                  Commencer maintenant
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 text-white/50 text-sm">
              <span>Gratuit pour démarrer</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>Aucune carte requise</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>Site prêt en 3 min</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 border-t border-[#E6DCCF] px-6 bg-[#F6F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <a href="/" className="flex items-center">
                <img src="/images/logo.png" alt="Nocely" className="h-10 w-auto" />
              </a>
              <p className="text-sm text-[#7A6B5E] leading-relaxed">
                La nouvelle génération de sites de mariage. Créé avec amour en France.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A6B5E]">Produit</h4>
              <div className="space-y-3">
                <a href="#features" className="block text-sm text-[#5D5147] hover:text-primary transition-colors">Fonctionnalités</a>
                <a href="#pricing" className="block text-sm text-[#5D5147] hover:text-primary transition-colors">Tarifs</a>
                <a href="#cinema" className="block text-sm text-[#5D5147] hover:text-primary transition-colors">Visite guidée</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A6B5E]">Support</h4>
              <div className="space-y-3">
                <a href="#faq" className="block text-sm text-[#5D5147] hover:text-primary transition-colors">FAQ</a>
                <a href="mailto:contact@nocely.app" className="block text-sm text-[#5D5147] hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A6B5E]">Légal</h4>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-[#5D5147] hover:text-primary transition-colors">Confidentialité</a>
                <a href="#" className="block text-sm text-[#5D5147] hover:text-primary transition-colors">CGV</a>
                <a href="#" className="block text-sm text-[#5D5147] hover:text-primary transition-colors">Mentions légales</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#E6DCCF] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#B6A796] text-xs">
              © 2026 Nocely. Tous droits réservés.
            </div>
            <div className="flex items-center gap-2 text-[#B6A796] text-xs">
              <span>Fait avec</span>
              <Heart className="h-3 w-3 text-primary fill-primary" />
              <span>en France</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
