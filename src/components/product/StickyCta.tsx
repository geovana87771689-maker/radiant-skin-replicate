import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { CheckoutColor, CheckoutQuantity } from "@/config/checkout";
import { formatPrice, quantities } from "@/data/product";
import { buildCheckoutUrl } from "@/lib/checkout";

export function StickyCta({ selectedColorId, selectedQuantity }: { selectedColorId: CheckoutColor; selectedQuantity: CheckoutQuantity }) {
  const offer = quantities.find((item) => item.quantity === selectedQuantity) ?? quantities[1];
  if (!offer) return null;

  const handleCheckout = () => {
    const checkoutUrl = buildCheckoutUrl(selectedColorId, selectedQuantity);
    if (checkoutUrl.includes("REMPLACER_VARIANT_ID")) {
      toast.error("Identifiant Shopify à compléter avant la mise en ligne");
      return;
    }
    window.location.href = checkoutUrl;
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-2 backdrop-blur lg:hidden">
      <Button type="button" onClick={handleCheckout} className="h-12 w-full rounded-md font-extrabold">AJOUTER AU PANIER · {formatPrice(offer.total)}</Button>
    </div>
  );
}