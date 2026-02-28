const CONSENT_KEY = "daylora_cookie_consent";
const CONSENT_VERSION = 1;

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentPreferences {
  version: number;
  timestamp: number;
  categories: Record<ConsentCategory, boolean>;
}

const DEFAULT_PREFERENCES: ConsentPreferences = {
  version: CONSENT_VERSION,
  timestamp: Date.now(),
  categories: {
    necessary: true,
    analytics: false,
    marketing: false,
  },
};

export function getConsent(): ConsentPreferences | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentPreferences;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(categories: Record<ConsentCategory, boolean>): void {
  const preferences: ConsentPreferences = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    categories: { ...categories, necessary: true },
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(preferences));
  applyConsent(preferences);
}

export function hasConsented(): boolean {
  return getConsent() !== null;
}

export function hasConsentFor(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  const consent = getConsent();
  if (!consent) return false;
  return consent.categories[category] === true;
}

export function acceptAll(): void {
  setConsent({ necessary: true, analytics: true, marketing: true });
}

export function rejectAll(): void {
  setConsent({ necessary: true, analytics: false, marketing: false });
}

export function resetConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
}

function applyConsent(preferences: ConsentPreferences): void {
  if (preferences.categories.analytics) {
    loadAnalyticsScripts();
  }
  if (preferences.categories.marketing) {
    loadMarketingScripts();
  }
}

function loadAnalyticsScripts(): void {
}

function loadMarketingScripts(): void {
}

export function initConsent(): void {
  const consent = getConsent();
  if (consent) {
    applyConsent(consent);
  }
}
