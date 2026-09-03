import { variants, formatPrice } from "@/data/product";

type VariantId = "1kit" | "2kits";

export function StickyCta({
  selectedVariantId,
}: {
  selectedVariantId: VariantId;
}) {
  const variant =
    variants.find((v) => v.id === selectedVariantId) ?? variants[0]!;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
      <button
        type="button"
        onClick={() =>
          document
            .getElementById("acheter")
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        className="w-full rounded-sm bg-primary py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase"
      >
        Commander maintenant
      </button>
    </div>
  );
}
