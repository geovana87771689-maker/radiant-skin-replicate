import { BUMP_VARIANT_ID } from "@/data/product";
import { appendTrackingParams } from "@/lib/tracking";

export function buildCheckoutUrl(variantId: string, withBump: boolean): string {
  const items = withBump
    ? `${variantId}:1,${BUMP_VARIANT_ID}:1`
    : `${variantId}:1`;
  return appendTrackingParams(
    `https://checkout.beautymedicube.fr/cart/${items}?checkout`,
  );
}
