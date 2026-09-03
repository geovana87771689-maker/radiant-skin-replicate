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

  const variant =
    variants.find((v) => v.id === selectedVariantId) ?? variants[0]!;
  // The hero image (index 0) follows the selected variant; the rest are the
  // standard product gallery shots.
  const galleryImages = [variant.image, ...productImages.slice(1)];

  // Reset to the hero whenever the variant (and thus the hero image) changes.
  useEffect(() => {
    setActive(0);
  }, [variant.image]);

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-sm bg-muted">
        <img
          src={galleryImages[active] || FALLBACK_IMAGE}
          alt={product.title || "Photo du produit"}
          width={1200}
          height={1200}
          loading="eager"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {galleryImages.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            aria-label={`Afficher l’image ${i + 1}`}
            className={`overflow-hidden rounded-sm border transition-colors ${
              i === active ? "border-foreground" : "border-border hover:border-muted-foreground"
            }`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={handleImageError}
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
