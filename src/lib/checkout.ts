import { CHECKOUT_BASE, PACK_VARIANT_ID } from "@/data/product";
import { appendTrackingParams } from "@/lib/tracking";

/**
 * Construit l'URL de checkout Shopify pour la variante sélectionnée
 * (+ éventuel order bump), puis y ajoute TOUS les paramètres de la page
 * courante (UTM, fbclid, gclid, sck...) pour préserver l'attribution.
 */
export function buildCheckoutUrl(variantId: string, withPack: boolean): string {
  const items = withPack
    ? `${variantId}:1,${PACK_VARIANT_ID}:1`
    : `${variantId}:1`;

  const base = appendTrackingParams(`${CHECKOUT_BASE}/cart/${items}?checkout`);

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
