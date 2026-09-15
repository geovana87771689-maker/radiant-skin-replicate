/**
 * Couche de tracking unifiée : dataLayer (GTM), Meta Pixel et TikTok Pixel.
 * Un verrou empêche les doublons d'événements de checkout en cas de
 * double-clic ou de déclenchement simultané des deux CTA.
 */

type Params = Record<string, unknown>;

export function trackEvent(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as any;

  // Google Tag Manager / GA4
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });

  // Meta Pixel
  if (typeof w.fbq === "function") {
    const standard = [
      "PageView",
      "ViewContent",
      "AddToCart",
      "InitiateCheckout",
      "Purchase",
    ];
    w.fbq(standard.includes(event) ? "track" : "trackCustom", event, params);
  }

  // TikTok Pixel
  if (w.ttq && typeof w.ttq.track === "function") {
    w.ttq.track(event, params);
  }
}

let checkoutTrackedAt = 0;
const LOCK_MS = 1500;

export function trackCheckoutEvents({
  title,
  variantId,
  value,
  source = "buybox",
}: {
  title: string;
  variantId: string;
  value: number;
  source?: string;
}) {
  if (typeof window === "undefined") return;

  const now = Date.now();
  if (now - checkoutTrackedAt < LOCK_MS) return;
  checkoutTrackedAt = now;

  const base = {
    content_name: title,
    content_ids: [variantId],
    content_type: "product",
    currency: "EUR",
    value,
    cta_source: source,
  };

  trackEvent("AddToCart", base);
  trackEvent("InitiateCheckout", base);
}
