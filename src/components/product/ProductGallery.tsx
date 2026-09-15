import { useEffect, useState } from "react";
import { colors, product, productImages } from "@/data/product";
import { ProductImage } from "./ProductImage";

type ColorId = "noir" | "vert" | "gris";

export function ProductGallery({ selectedColorId }: { selectedColorId: ColorId }) {
  const color = colors.find((c) => c.id === selectedColorId) ?? colors[0]!;
  const [active, setActive] = useState(0);

  const items = [
    { src: color.image, label: `Housse ${color.label}` },
    ...productImages
      .filter((src) => src !== color.image)
      .map((src, i) => ({ src, label: `Vue ${i + 1}` })),
  ];

  useEffect(() => {
    setActive(0);
  }, [color.image]);

  return (
    <div className="min-w-0 flex flex-col gap-3 lg:sticky lg:top-28">
      <div className="relative -mx-4 overflow-hidden bg-card sm:mx-0 sm:rounded-2xl sm:border sm:border-border sm:shadow-sm">
        <ProductImage
          src={items[active]?.src ?? color.image}
          alt={`${product.title} — ${items[active]?.label ?? color.label}`}
          eager
          className="object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-card/95 px-3 py-1.5 text-[11px] font-bold text-foreground shadow-sm backdrop-blur">
          {items[active]?.label}
        </span>
      </div>

      <div className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-6 sm:overflow-visible sm:px-0">
        {items.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setActive(i)}
            aria-label={item.label}
            className={`w-16 shrink-0 overflow-hidden rounded-xl border bg-card transition-colors sm:w-auto ${
              i === active
                ? "border-primary ring-1 ring-primary"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <ProductImage src={item.src} alt="" width={200} height={200} eager />
          </button>
        ))}
      </div>
    </div>
  );
}
