import { toast } from "sonner";
import {
  BUMP_PRICE,
  COMPARE_AT,
  PRICE,
  colors,
  formatPrice,
  getVariantId,
  product,
  sizes,
} from "@/data/product";
import { Button } from "@/components/ui/button";
import { buildCheckoutUrl } from "@/lib/checkout";
import { trackCheckoutEvents } from "@/lib/pixel";

type SizeId = "2p" | "3p" | "4p";
type ColorId = "noir" | "vert" | "gris";

export function StickyCta({
  selectedSizeId,
  selectedColorId,
  bumpSelected,
}: {
  selectedSizeId: SizeId;
  selectedColorId: ColorId;
  bumpSelected: boolean;
}) {
  const size = sizes.find((s) => s.id === selectedSizeId) ?? sizes[0]!;
  const color = colors.find((c) => c.id === selectedColorId) ?? colors[0]!;
  const variantId = getVariantId(size.id, color.id);

  const total = PRICE + (bumpSelected ? BUMP_PRICE : 0);
  const totalCompareAt = COMPARE_AT + (bumpSelected ? 49.9 : 0);

  const handleCheckout = () => {
    toast.success(`${size.label} · ${color.label} — redirection vers le paiement`);
    const checkoutUrl = buildCheckoutUrl(variantId, bumpSelected);
    trackCheckoutEvents({
      title: `${product.title} — ${size.label} / ${color.label}`,
      variantId,
      value: total,
      source: "sticky_cta",
    });
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 300);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-3 py-2.5 backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold text-foreground">
            {size.label} · {color.label}
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-extrabold text-primary">
              {formatPrice(total)}
            </span>
            <span className="text-[10px] text-muted-foreground line-through">
              {formatPrice(totalCompareAt)}
            </span>
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
