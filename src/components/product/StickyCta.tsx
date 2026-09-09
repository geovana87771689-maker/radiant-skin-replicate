import { product, variants, formatPrice } from "@/data/product";
import { Button } from "@/components/ui/button";

type VariantId = "1kit" | "2kits";

export function StickyCta({
  selectedVariantId,
}: {
  selectedVariantId: VariantId;
}) {
  const variant = variants.find((v) => v.id === selectedVariantId) ?? variants[0];
  if (!variant) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold text-foreground">
            {product.title}
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-extrabold text-primary">
              {formatPrice(variant.price)}
            </span>
            {variant.compareAt && (
              <span className="text-[10px] text-muted-foreground line-through">
                {formatPrice(variant.compareAt)}
              </span>
            )}
          </div>
        </div>
        <Button
          type="button"
          onClick={() =>
            document
              .getElementById("acheter")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="h-11 shrink-0 rounded-full px-5 text-xs font-extrabold uppercase shadow-lg"
        >
          Commander
        </Button>
      </div>
    </div>
  );
}
