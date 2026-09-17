import { toast } from "sonner";
import {
  formules,
  colors,
  formatPrice,
  getVariantId,
  product,
  sizes,
} from "@/data/product";
import { Button } from "@/components/ui/button";
import { buildCheckoutUrl } from "@/lib/checkout";


type SizeId = "2p" | "3p" | "4p";
type ColorId = "noir" | "vert" | "gris";
type FormuleId = "simple" | "complet";

export function StickyCta({
  selectedSizeId,
  selectedColorId,
  selectedFormuleId,
}: {
  selectedSizeId: SizeId;
  selectedColorId: ColorId;
  selectedFormuleId: FormuleId;
}) {
  const size = sizes.find((s) => s.id === selectedSizeId) ?? sizes[0]!;
  const color = colors.find((c) => c.id === selectedColorId) ?? colors[0]!;
  const variantId = getVariantId(size.id, color.id);

  const formule = formules.find((f) => f.id === selectedFormuleId) ?? formules[0]!;
  const total = size.price;
  const totalCompareAt = size.compareAt;

  const handleCheckout = () => {
    toast.success(`${size.label} · ${color.label} — redirection vers le paiement`);
    const checkoutUrl = buildCheckoutUrl(variantId, formule.id === "complet");
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
