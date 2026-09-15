import { useCallback, useEffect, useRef, useState } from "react";
import { PLACEHOLDER_IMAGE } from "@/data/product";

/**
 * <img> sémantique avec ratio défini et repli automatique sur le placeholder
 * tant que la photo officielle n'a pas été déposée dans /public/images.
 */
export function ProductImage({
  src,
  alt,
  className = "",
  ratio = "aspect-square",
  eager = false,
  width = 1000,
  height = 1000,
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  eager?: boolean;
  width?: number;
  height?: number;
}) {
  const [current, setCurrent] = useState(src);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setCurrent(src);
  }, [src]);

  const fallback = useCallback(() => {
    setCurrent((prev) => (prev === PLACEHOLDER_IMAGE ? prev : PLACEHOLDER_IMAGE));
  }, []);

  // L'erreur peut survenir avant l'hydratation : on revérifie au montage.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) fallback();
  }, [current, fallback]);

  return (
    <img
      ref={ref}
      src={current}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={fallback}
      className={`${ratio} w-full bg-muted object-cover ${className}`}
    />
  );
}
