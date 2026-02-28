import { ArrowLeft } from "lucide-react";

export default function LegalPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Mentions légales</h1>
          <p className="text-[#7A6B5E] text-sm mb-12">Dernière mise à jour : 28 février 2026</p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">1. Éditeur du site</h2>
          <p>
            Le site <strong>daylora.co</strong> et l'application <strong>daylora.app</strong> sont édités par :
          </p>
          <ul>
            <li><strong>Raison sociale</strong> : Daylora</li>
            <li><strong>Email</strong> : <a href="mailto:contact@daylora.co" className="text-primary hover:underline">contact@daylora.co</a></li>
            <li><strong>Directeur de la publication</strong> : Le représentant légal de Daylora</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">2. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <ul>
            <li><strong>Raison sociale</strong> : Replit, Inc.</li>
            <li><strong>Adresse</strong> : 1100 Grundy Lane, Suite 220, San Bruno, CA 94066, États-Unis</li>
            <li><strong>Site web</strong> : <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">replit.com</a></li>
          </ul>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu du site Daylora (textes, images, graphismes, logo, icônes, logiciels, etc.)
            est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des
            éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation
            écrite préalable de Daylora.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">4. Données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
            et Libertés, vous disposez de droits sur vos données personnelles.
          </p>
          <p>
            Pour en savoir plus, consultez notre{" "}
            <a href="/confidentialite" className="text-primary hover:underline">Politique de confidentialité</a>.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">5. Cookies</h2>
          <p>
            Le site utilise des cookies strictement nécessaires au fonctionnement du service.
            Pour en savoir plus sur notre utilisation des cookies, consultez notre{" "}
            <a href="/confidentialite" className="text-primary hover:underline">Politique de confidentialité</a>.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">6. Limitation de responsabilité</h2>
          <p>
            Daylora s'efforce de fournir des informations aussi précises que possible sur le site.
            Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des
            carences dans la mise à jour, qu'elles soient de son fait ou du fait de tiers partenaires
            qui lui fournissent ces informations.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">7. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d'autres sites internet. Daylora ne dispose d'aucun
            contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">8. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige,
            les tribunaux français seront seuls compétents.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">9. Contact</h2>
          <p>
            Pour toute question concernant ces mentions légales :{" "}
            <a href="mailto:contact@daylora.co" className="text-primary hover:underline">contact@daylora.co</a>
          </p>
        </div>
      </main>
    </div>
  );
}
