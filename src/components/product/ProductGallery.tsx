import { useState } from "react";
import { productImages, product } from "@/data/product";

export function ProductGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-sm bg-muted">
        <img
          src={productImages[active]}
          alt={`${product.title} — image ${active + 1}`}
          width={1200}
          height={1200}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {productImages.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            className={`overflow-hidden rounded-sm border transition-colors ${
              i === active ? "border-foreground" : "border-border hover:border-muted-foreground"
            }`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
