import { CHECKOUT_URLS, type CheckoutColor, type CheckoutQuantity } from "@/config/checkout";
import { appendTrackingParams } from "@/lib/tracking";

export function buildCheckoutUrl(color: CheckoutColor, quantity: CheckoutQuantity): string {
  return appendTrackingParams(CHECKOUT_URLS[color][quantity]);
}