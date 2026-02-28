import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Politique de confidentialité</h1>
          <p className="text-[#7A6B5E] text-sm mb-12">Dernière mise à jour : 28 février 2026</p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">1. Responsable du traitement</h2>
          <p>
            La société Daylora, éditrice du site <strong>daylora.co</strong> et de l'application <strong>app.daylora.app</strong>,
            est responsable du traitement des données personnelles collectées sur ses plateformes.
          </p>
          <p>Contact : <a href="mailto:contact@daylora.co" className="text-primary hover:underline">contact@daylora.co</a></p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">2. Données collectées</h2>
          <p>Nous collectons les données suivantes :</p>
          <ul>
            <li><strong>Données d'identification</strong> : nom, prénom, adresse email</li>
            <li><strong>Données de connexion</strong> : adresse IP, logs de connexion, type de navigateur</li>
            <li><strong>Données d'utilisation</strong> : pages visitées, interactions avec le service</li>
            <li><strong>Données événementielles</strong> : informations relatives à vos événements (noms des invités, RSVP, photos uploadées)</li>
            <li><strong>Données de paiement</strong> : traitées exclusivement par notre prestataire de paiement Stripe. Nous ne stockons aucune donnée bancaire.</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">3. Finalités du traitement</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Créer et gérer votre compte utilisateur</li>
            <li>Fournir et améliorer nos services</li>
            <li>Traiter les paiements et abonnements</li>
            <li>Envoyer des communications relatives à votre compte</li>
            <li>Assurer la sécurité de la plateforme</li>
            <li>Respecter nos obligations légales</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">4. Base légale</h2>
          <p>Le traitement de vos données repose sur :</p>
          <ul>
            <li><strong>L'exécution du contrat</strong> : pour la fourniture de nos services</li>
            <li><strong>Le consentement</strong> : pour les communications marketing</li>
            <li><strong>L'intérêt légitime</strong> : pour l'amélioration de nos services et la sécurité</li>
            <li><strong>L'obligation légale</strong> : pour la conservation des données de facturation</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">5. Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées pendant la durée de votre utilisation du service,
            puis supprimées dans un délai de 3 ans après la dernière activité sur votre compte.
            Les données de facturation sont conservées 10 ans conformément aux obligations légales.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">6. Partage des données</h2>
          <p>Vos données peuvent être partagées avec :</p>
          <ul>
            <li><strong>Stripe</strong> : pour le traitement des paiements</li>
            <li><strong>Nos hébergeurs</strong> : pour le stockage sécurisé des données</li>
            <li><strong>Les autorités compétentes</strong> : en cas d'obligation légale</li>
          </ul>
          <p>Nous ne vendons jamais vos données à des tiers.</p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">7. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:contact@daylora.co" className="text-primary hover:underline">contact@daylora.co</a>.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">8. Cookies</h2>
          <p>
            Notre site utilise des cookies strictement nécessaires au fonctionnement du service.
            Aucun cookie publicitaire ou de suivi n'est utilisé sans votre consentement explicite.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">9. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
            vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">10. Contact</h2>
          <p>
            Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à{" "}
            <a href="mailto:contact@daylora.co" className="text-primary hover:underline">contact@daylora.co</a>.
          </p>
          <p>
            Vous pouvez également adresser une réclamation à la CNIL :{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
          </p>
        </div>
      </main>
    </div>
  );
}
