import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Settings, X } from "lucide-react";
import {
  hasConsented,
  acceptAll,
  rejectAll,
  setConsent,
  getConsent,
  initConsent,
  type ConsentCategory,
} from "@/lib/cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [categories, setCategories] = useState<Record<ConsentCategory, boolean>>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    initConsent();
    if (!hasConsented()) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAcceptAll() {
    acceptAll();
    setVisible(false);
  }

  function handleRejectAll() {
    rejectAll();
    setVisible(false);
  }

  function handleSavePreferences() {
    setConsent(categories);
    setVisible(false);
    setShowPreferences(false);
  }

  function handleOpenPreferences() {
    const existing = getConsent();
    if (existing) {
      setCategories(existing.categories);
    }
    setShowPreferences(true);
  }

  if (!visible) return null;

  return (
    <>
      {showPreferences && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-[#E9DFD2]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-serif font-bold text-[#2b2320]">Préférences cookies</h3>
              <button onClick={() => setShowPreferences(false)} className="text-[#7A6B5E] hover:text-[#2b2320] transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-[#F6F1EA] border border-[#E9DFD2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-[#2b2320]">Strictement nécessaires</p>
                    <p className="text-xs text-[#7A6B5E] mt-1">Indispensables au fonctionnement du site.</p>
                  </div>
                  <div className="text-xs text-primary font-bold">Toujours actifs</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F1EA] border border-[#E9DFD2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-[#2b2320]">Analytics</p>
                    <p className="text-xs text-[#7A6B5E] mt-1">Nous aident à comprendre comment vous utilisez le site.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={categories.analytics}
                      onChange={(e) => setCategories({ ...categories, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#E9DFD2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F1EA] border border-[#E9DFD2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-[#2b2320]">Marketing</p>
                    <p className="text-xs text-[#7A6B5E] mt-1">Permettent de vous proposer des publicités pertinentes.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={categories.marketing}
                      onChange={(e) => setCategories({ ...categories, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#E9DFD2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleRejectAll} variant="outline" className="flex-1 rounded-full border-[#E9DFD2] text-[#7A6B5E] hover:bg-[#F6F1EA]">
                Tout refuser
              </Button>
              <Button onClick={handleSavePreferences} className="flex-1 rounded-full bg-primary hover:bg-primary/90 border-none">
                Enregistrer
              </Button>
            </div>

            <p className="text-[10px] text-[#B6A796] text-center mt-4">
              <a href="/cookies" className="hover:text-primary transition-colors underline">Politique de cookies</a>
              {" · "}
              <a href="/confidentialite" className="hover:text-primary transition-colors underline">Confidentialité</a>
            </p>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E9DFD2] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] p-5 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Shield className="h-8 w-8 text-primary flex-shrink-0 hidden md:block" />
            <div className="flex-1">
              <p className="text-sm font-bold text-[#2b2320] mb-1">Nous respectons votre vie privée</p>
              <p className="text-xs text-[#7A6B5E] leading-relaxed">
                Nous utilisons des cookies strictement nécessaires au fonctionnement du site. Aucun cookie de suivi ou publicitaire n'est déposé sans votre accord.{" "}
                <a href="/cookies" className="text-primary hover:underline">En savoir plus</a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto flex-shrink-0">
              <Button onClick={handleOpenPreferences} variant="outline" size="sm" className="rounded-full border-[#E9DFD2] text-[#7A6B5E] hover:bg-[#F6F1EA] text-xs gap-1.5">
                <Settings className="h-3.5 w-3.5" />
                Personnaliser
              </Button>
              <Button onClick={handleRejectAll} variant="outline" size="sm" className="rounded-full border-[#E9DFD2] text-[#7A6B5E] hover:bg-[#F6F1EA] text-xs">
                Refuser
              </Button>
              <Button onClick={handleAcceptAll} size="sm" className="rounded-full bg-primary hover:bg-primary/90 border-none text-xs">
                Accepter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
