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
  clearAnalyticsCookies();
}

export function resetConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
  clearAnalyticsCookies();
}

function clearAnalyticsCookies(): void {
  const cookiesToClear = ["_ga", "_gid", "_gat", "_gcl_au"];
  const hostname = window.location.hostname;
  const domains = [hostname, "." + hostname, "." + hostname.split(".").slice(-2).join(".")];

  for (const name of cookiesToClear) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}

function applyConsent(preferences: ConsentPreferences): void {
  if (preferences.categories.analytics) {
    loadAnalyticsScripts();
  }
  if (preferences.categories.marketing) {
    loadMarketingScripts();
  }
}

const GTM_ID = "GTM-N4622HDZ";

let gtmLoaded = false;

function loadAnalyticsScripts(): void {
  if (gtmLoaded) return;
  gtmLoaded = true;

  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.insertBefore(script, document.head.firstChild);

  const noscript = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
}

function loadMarketingScripts(): void {
}

export function initConsent(): void {
  const consent = getConsent();
  if (consent) {
    applyConsent(consent);
  }
}
