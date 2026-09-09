import { useEffect, useState } from "react";
import { productImages, product, variants } from "@/data/product";

const FALLBACK_IMAGE = productImages[0] ?? "";

function handleImageError(e: React.SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  if (img.src !== FALLBACK_IMAGE) {
    img.src = FALLBACK_IMAGE;
  }
}

type VariantId = "1kit" | "2kits";

export function ProductGallery({
  selectedVariantId,
}: {
  selectedVariantId: VariantId;
}) {
  const [active, setActive] = useState(0);

  const variant = variants.find((v) => v.id === selectedVariantId) ?? variants[0];
  if (!variant) return null;
  // The hero image (index 0) follows the selected variant; the rest are the
  // standard product gallery shots.
  const galleryItems = [
    { src: variant.image, label: "Le coffret complet" },
    { src: productImages[1] ?? FALLBACK_IMAGE, label: "Étape 1 : Corps & Zones Rugueuses" },
    { src: productImages[2] ?? FALLBACK_IMAGE, label: "Étape 2 : Visage & Teint Net" },
    { src: "/images/gant-exfoliant-offert.jpg", label: "Gant Exfoliant Offert" },
    ...productImages.slice(3).map((src) => ({ src, label: "Voir le résultat" })),
  ];

  // Reset to the hero whenever the variant (and thus the hero image) changes.
  useEffect(() => {
    setActive(0);
  }, [variant.image]);

  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-28">
      <div className="relative overflow-hidden rounded-lg border border-border bg-background shadow-sm">
        <img
          src={galleryItems[active]?.src || FALLBACK_IMAGE}
          alt={product.title || "Photo du produit"}
          width={1200}
          height={1200}
          loading="eager"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="aspect-square w-full object-cover"
        />
        <span className="absolute bottom-3 left-3 max-w-[85%] rounded-md bg-background/95 px-3 py-2 text-xs font-bold text-foreground shadow-sm backdrop-blur">
          {galleryItems[active]?.label}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
        {galleryItems.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setActive(i)}
            aria-label={item.label}
            className={`overflow-hidden rounded-sm border transition-colors ${
              i === active ? "border-primary ring-1 ring-primary" : "border-border hover:border-muted-foreground"
            }`}
          >
            <img
              src={item.src}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={handleImageError}
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-foreground">
        <div className="rounded-md border border-border bg-background px-3 py-2">Étape 1 · Corps & zones rugueuses</div>
        <div className="rounded-md border border-border bg-background px-3 py-2">Étape 2 · Visage & teint net</div>
      </div>
    </div>
  );
}
