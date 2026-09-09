import { BUMP_VARIANT_ID } from "@/data/product";
import { appendTrackingParams } from "@/lib/tracking";

/**
 * Builds the Shopify checkout URL for the selected variant (+ optional bump),
 * then appends ALL current-page query params (UTMs, fbclid, gclid, etc.) so
 * UTMify attribution survives the redirect to the checkout subdomain.
 */
export function buildCheckoutUrl(variantId: string, withBump: boolean): string {
  const items = withBump
    ? `${variantId}:1,${BUMP_VARIANT_ID}:1`
    : `${variantId}:1`;

  // Start from the cart URL with its `?checkout` flag, then layer in any
  // params persisted from earlier landings (sessionStorage merge).
  const base = appendTrackingParams(
    `https://checkout.beautymedicube.fr/cart/${items}?checkout`,
  );

  // Force-pass the ENTIRE current query string from the landing page so
  // nothing (utm_*, fbclid, gclid, ttclid, sck, src, ref, ...) is dropped.
  if (typeof window !== "undefined") {
    const currentParams = window.location.search;
    if (currentParams) {
      const clean = currentParams.startsWith("?")
        ? currentParams.substring(1)
        : currentParams;
      if (clean) {
        return base + (base.includes("?") ? "&" : "?") + clean;
      }
    }
  }

  return base;
}
