import { variants, formatPrice } from "@/data/product";

export function StickyCta({
  selectedVariantId,
}: {
  selectedVariantId: "1kit" | "2kits";
}) {
  const variant = variants.find((v) => v.id === selectedVariantId) ?? variants[0]!;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <div className="flex min-w-0 flex-col leading-tight">
          <span className="truncate text-xs font-bold">{variant.qtyLabel}</span>
          <span className="text-sm font-bold">{formatPrice(variant.price)}</span>
        </div>
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("acheter")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="flex-1 rounded-sm bg-primary py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase"
        >
          Commander — {formatPrice(variant.price)}
        </button>
      </div>
    </div>
  );
}
