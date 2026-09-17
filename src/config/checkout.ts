export type CheckoutColor = "noir" | "gris";
export type CheckoutQuantity = 1 | 2 | 3 | 4;

/**
 * Remplacez uniquement REMPLACER_VARIANT_ID sur chaque ligne lorsque les
 * variantes Shopify seront créées. Un identifiant distinct est prévu pour
 * chaque combinaison couleur + quantité.
 */
export const CHECKOUT_URLS: Record<
  CheckoutColor,
  Record<CheckoutQuantity, string>
> = {
  noir: {
    1: "https://checkout.lepuremaison.fr/cart/REMPLACER_VARIANT_ID_NOIR_1:1",
    2: "https://checkout.lepuremaison.fr/cart/REMPLACER_VARIANT_ID_NOIR_2:1",
    3: "https://checkout.lepuremaison.fr/cart/REMPLACER_VARIANT_ID_NOIR_3:1",
    4: "https://checkout.lepuremaison.fr/cart/REMPLACER_VARIANT_ID_NOIR_4:1",
  },
  gris: {
    1: "https://checkout.lepuremaison.fr/cart/REMPLACER_VARIANT_ID_GRIS_1:1",
    2: "https://checkout.lepuremaison.fr/cart/REMPLACER_VARIANT_ID_GRIS_2:1",
    3: "https://checkout.lepuremaison.fr/cart/REMPLACER_VARIANT_ID_GRIS_3:1",
    4: "https://checkout.lepuremaison.fr/cart/REMPLACER_VARIANT_ID_GRIS_4:1",
  },
};