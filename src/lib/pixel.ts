/**
 * Centralized Meta Pixel checkout tracking with a click-lock so the
 * AddToCart/InitiateCheckout pair fires at most once per checkout intent,
 * even if the user double-clicks or both CTAs are triggered.
 */

let checkoutTrackedAt = 0;
const LOCK_MS = 1500;

export function trackCheckoutEvents({
  title,
  variantId,
  value,
}: {
  title: string;
  variantId: string;
  value: number;
}) {
  if (typeof window === "undefined") return;
  const fbq = (window as any).fbq;
  if (!fbq) return;

  const now = Date.now();
  if (now - checkoutTrackedAt < LOCK_MS) return;
  checkoutTrackedAt = now;

  fbq("track", "AddToCart", {
    content_name: title,
    content_ids: [variantId],
    content_type: "product",
    value,
    currency: "EUR",
  });
  fbq("track", "InitiateCheckout", {
    content_name: title,
    currency: "EUR",
    value,
  });
}
