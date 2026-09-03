import { variants, formatPrice } from "@/data/product";

type VariantId = "1kit" | "2kits";

export function StickyCta({
  selectedVariantId,
  onSelectVariant,
}: {
  selectedVariantId: VariantId;
  onSelectVariant: (id: VariantId) => void;
}) {
  const variant =
    variants.find((v) => v.id === selectedVariantId) ?? variants[0]!;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-2.5 backdrop-blur lg:hidden">
      {/* Offer selector */}
      <div className="grid grid-cols-2 gap-2">
        {variants.map((v) => {
          const isSelected = v.id === selectedVariantId;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => onSelectVariant(v.id)}
              className={`rounded-sm border px-2 py-1.5 text-left leading-tight transition-colors ${
                isSelected
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-border"
              }`}
            >
              <span className="block text-[11px] font-bold">{v.qtyLabel}</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold">
                  {formatPrice(v.price)}
                </span>
                {v.compareAt && (
                  <span className="text-[10px] text-muted-foreground line-through">
                    {formatPrice(v.compareAt)}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("acheter")
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        className="mt-2 w-full rounded-sm bg-primary py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase"
      >
        Commander — {formatPrice(variant.price)}
      </button>
    </div>
  );
}
