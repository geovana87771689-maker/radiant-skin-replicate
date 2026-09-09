import { toast } from "sonner";
import { product, variants, formatPrice, BUMP_PRICE } from "@/data/product";
import { Button } from "@/components/ui/button";
import { buildCheckoutUrl } from "@/lib/checkout";

type VariantId = "1kit" | "2kits";

export function StickyCta({
  selectedVariantId,
  bumpSelected,
}: {
  selectedVariantId: VariantId;
  bumpSelected: boolean;
}) {
  const variant = variants.find((v) => v.id === selectedVariantId) ?? variants[0];
  if (!variant) return null;

  const totalValue = variant.price + (bumpSelected ? BUMP_PRICE : 0);
  const totalCompareAt = variant.compareAt
    ? variant.compareAt + (bumpSelected ? 39 : 0)
    : undefined;

  const handleCheckout = () => {
    toast.success(`${variant.title} — redirection vers le paiement`);
    const checkoutUrl = buildCheckoutUrl(variant.variantId, bumpSelected);
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "AddToCart", {
        content_name: variant.title,
        content_ids: [variant.variantId],
        content_type: "product",
        value: totalValue,
        currency: "EUR",
      });
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: variant.title,
        currency: "EUR",
        value: totalValue,
      });
    }
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 350);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold text-foreground">
            {product.title}
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-extrabold text-primary">
              {formatPrice(totalValue)}
            </span>
            {totalCompareAt && (
              <span className="text-[10px] text-muted-foreground line-through">
                {formatPrice(totalCompareAt)}
              </span>
            )}
          </div>
        </div>
        <Button
          type="button"
          onClick={handleCheckout}
          className="h-11 shrink-0 rounded-full px-5 text-xs font-extrabold uppercase shadow-lg"
        >
          Commander
        </Button>
      </div>
    </div>
  );
}
