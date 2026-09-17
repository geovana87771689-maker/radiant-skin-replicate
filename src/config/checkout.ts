export type CheckoutColor = "noir" | "gris";
export type CheckoutQuantity = 1 | 2 | 3 | 4;

/** Une URL Shopify distincte par combinaison couleur + quantité. */
export const CHECKOUT_URLS: Record<
  CheckoutColor,
  Record<CheckoutQuantity, string>
> = {
  noir: {
    1: "https://checkout.lepuremaison.fr/cart/55045872386414:1",
    2: "https://checkout.lepuremaison.fr/cart/55045872419182:1",
    3: "https://checkout.lepuremaison.fr/cart/55045872451950:1",
    4: "https://checkout.lepuremaison.fr/cart/55045872484718:1",
  },
  gris: {
    1: "https://checkout.lepuremaison.fr/cart/55045872517486:1",
    2: "https://checkout.lepuremaison.fr/cart/55045872550254:1",
    3: "https://checkout.lepuremaison.fr/cart/55045872583022:1",
    4: "https://checkout.lepuremaison.fr/cart/55045872615790:1",
  },
};