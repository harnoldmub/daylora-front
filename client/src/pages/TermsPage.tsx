import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#2b2320]">
      <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto rounded-full px-5 md:px-8 py-3 flex items-center justify-between bg-white/80 backdrop-blur-xl border border-[#E9DFD2]/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
          <a href="/" className="flex items-center group cursor-pointer">
            <img src="/images/logo.png" alt="Daylora" className="h-10 md:h-12 w-auto transition-all group-hover:scale-105" />
          </a>
          <a href="/" className="flex items-center gap-2 text-sm text-[#7A6B5E] hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-stone">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Conditions Générales de Vente</h1>
          <p className="text-[#7A6B5E] text-sm mb-12">Dernière mise à jour : 28 février 2026</p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
            la société Daylora, éditrice de la plateforme accessible à l'adresse <strong>daylora.co</strong> et <strong>daylora.app</strong>,
            et tout utilisateur souhaitant utiliser ses services.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">2. Services proposés</h2>
          <p>Daylora propose une plateforme d'orchestration d'événements permettant :</p>
          <ul>
            <li>La création et personnalisation de sites d'événements</li>
            <li>La gestion des invités et des RSVP</li>
            <li>La mise en place d'une cagnotte en ligne via Stripe</li>
            <li>La création de listes de cadeaux</li>
            <li>L'hébergement de galeries photos</li>
            <li>La page live et les fonctionnalités interactives</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">3. Offres et tarifs</h2>
          <h3 className="text-xl font-serif font-bold mt-6 mb-3">Offre Gratuite — 0€</h3>
          <ul>
            <li>1 template (Classique)</li>
            <li>RSVP limité</li>
            <li>Cagnotte en ligne</li>
            <li>6 photos en galerie</li>
            <li>Branding Daylora visible</li>
          </ul>

          <h3 className="text-xl font-serif font-bold mt-6 mb-3">Offre Premium — 149€ (paiement unique, 12 mois d'accès)</h3>
          <ul>
            <li>3 templates au choix</li>
            <li>RSVP illimités</li>
            <li>Liste de cadeaux avec réservation</li>
            <li>Page live et blagues</li>
            <li>Pages personnalisées</li>
            <li>50 photos en galerie</li>
            <li>Sans branding Daylora</li>
          </ul>
          <p>Les prix sont indiqués en euros TTC.</p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">4. Inscription et compte</h2>
          <p>
            L'utilisation des services nécessite la création d'un compte. L'utilisateur s'engage à fournir
            des informations exactes et à maintenir la confidentialité de ses identifiants de connexion.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">5. Paiement</h2>
          <p>
            Les paiements sont traités de manière sécurisée par Stripe. L'offre Premium est un paiement
            unique de 149€ donnant accès à toutes les fonctionnalités pendant 12 mois. Aucun prélèvement
            automatique ni reconduction tacite.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">6. Droit de rétractation</h2>
          <p>
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut
            être exercé pour les services pleinement exécutés avant la fin du délai de rétractation et dont
            l'exécution a commencé avec l'accord exprès du consommateur.
          </p>
          <p>
            Pour les abonnements non encore utilisés, vous disposez d'un délai de 14 jours à compter de la
            souscription pour exercer votre droit de rétractation en contactant{" "}
            <a href="mailto:contact@daylora.co" className="text-primary hover:underline">contact@daylora.co</a>.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">7. Résiliation</h2>
          <p>
            L'utilisateur peut résilier son abonnement à tout moment. La résiliation prend effet à la fin
            de la période en cours. Les données de l'utilisateur sont conservées pendant 30 jours après
            la résiliation, puis supprimées définitivement.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">8. Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments de la plateforme Daylora (design, textes, logos, fonctionnalités) sont
            protégés par le droit de la propriété intellectuelle. Toute reproduction sans autorisation est interdite.
          </p>
          <p>
            L'utilisateur conserve l'intégralité des droits sur les contenus qu'il publie sur la plateforme
            (textes, photos, informations).
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">9. Responsabilité</h2>
          <p>
            Daylora s'engage à fournir un service de qualité mais ne saurait être tenu responsable des
            interruptions temporaires du service, des contenus publiés par les utilisateurs, ni des
            dommages indirects liés à l'utilisation de la plateforme.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">10. Droit applicable</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent
            à rechercher une solution amiable avant de saisir les tribunaux compétents.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">11. Contact</h2>
          <p>
            Pour toute question relative aux présentes CGV :{" "}
            <a href="mailto:contact@daylora.co" className="text-primary hover:underline">contact@daylora.co</a>
          </p>
        </div>
      </main>
    </div>
  );
}
