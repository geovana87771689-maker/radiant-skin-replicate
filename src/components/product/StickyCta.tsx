import { variants, formatPrice } from "@/data/product";
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
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
      <Button
        type="button"
        onClick={() =>
          document
            .getElementById("acheter")
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        className="h-12 w-full rounded-md text-xs font-extrabold uppercase shadow-lg"
      >
        Commander avec -45% · {formatPrice(variant.price)}
      </Button>
    </div>
  );
}
