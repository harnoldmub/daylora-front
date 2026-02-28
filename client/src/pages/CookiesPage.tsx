import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resetConsent } from "@/lib/cookie-consent";

export default function CookiesPage() {
  function handleResetConsent() {
    resetConsent();
    window.location.reload();
  }

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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Politique de cookies</h1>
          <p className="text-[#7A6B5E] text-sm mb-12">Dernière mise à jour : 28 février 2026</p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone)
            lors de votre visite sur un site web. Il permet au site de mémoriser certaines informations
            pour améliorer votre expérience de navigation.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">2. Cookies utilisés par Daylora</h2>

          <h3 className="text-xl font-serif font-bold mt-6 mb-3">Cookies strictement nécessaires</h3>
          <p>
            Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.
            Ils ne collectent aucune donnée à caractère personnel à des fins publicitaires.
          </p>
          <div className="overflow-x-auto">
            <table className="text-sm">
              <thead>
                <tr>
                  <th className="text-left font-bold">Cookie</th>
                  <th className="text-left font-bold">Finalité</th>
                  <th className="text-left font-bold">Durée</th>
                  <th className="text-left font-bold">Tiers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>daylora_cookie_consent</td>
                  <td>Stocke vos préférences de consentement cookies</td>
                  <td>1 an</td>
                  <td>Non (localStorage)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-serif font-bold mt-6 mb-3">Cookies analytics</h3>
          <p>
            Daylora n'utilise actuellement <strong>aucun cookie analytics</strong>. Si nous en ajoutons à l'avenir,
            ils ne seront activés qu'après votre consentement explicite.
          </p>

          <h3 className="text-xl font-serif font-bold mt-6 mb-3">Cookies marketing</h3>
          <p>
            Daylora n'utilise actuellement <strong>aucun cookie marketing ou publicitaire</strong>. Si nous en ajoutons
            à l'avenir, ils ne seront activés qu'après votre consentement explicite.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">3. Gestion de vos préférences</h2>
          <p>
            Vous pouvez à tout moment modifier vos préférences de cookies en utilisant le bouton ci-dessous,
            qui réinitialise vos choix et réaffiche la bannière de consentement.
          </p>
          <div className="not-prose my-6">
            <Button
              onClick={handleResetConsent}
              variant="outline"
              className="rounded-full border-[#E9DFD2] text-[#7A6B5E] hover:bg-white hover:text-primary"
            >
              Réinitialiser mes préférences cookies
            </Button>
          </div>
          <p>
            Vous pouvez également gérer les cookies via les paramètres de votre navigateur. Notez que la
            désactivation de certains cookies peut affecter votre expérience sur le site.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">4. Cookies tiers</h2>
          <p>
            Notre plateforme peut interagir avec des services tiers dans le cadre de ses fonctionnalités :
          </p>
          <ul>
            <li>
              <strong>Stripe</strong> (paiement) — Stripe peut déposer ses propres cookies lors du processus de paiement.
              Ces cookies sont strictement nécessaires au traitement sécurisé des transactions.
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Politique Stripe</a>
            </li>
            <li>
              <strong>Google Fonts</strong> — Nous chargeons des polices depuis Google Fonts. Google peut collecter
              l'adresse IP du visiteur.
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Politique Google</a>
            </li>
          </ul>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">5. Base légale</h2>
          <p>
            Conformément à la directive européenne 2002/58/CE (ePrivacy) et au RGPD, les cookies
            strictement nécessaires sont exemptés du recueil de consentement. Tout autre cookie
            nécessite votre accord préalable.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">6. Contact</h2>
          <p>
            Pour toute question relative à notre utilisation des cookies :{" "}
            <a href="mailto:contact@daylora.co" className="text-primary hover:underline">contact@daylora.co</a>
          </p>
        </div>
      </main>
    </div>
  );
}
