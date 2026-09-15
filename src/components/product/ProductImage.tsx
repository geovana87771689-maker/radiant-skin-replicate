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
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={(e) => {
        const img = e.currentTarget;
        if (!img.src.endsWith(PLACEHOLDER_IMAGE)) img.src = PLACEHOLDER_IMAGE;
      }}
      className={`${ratio} w-full bg-muted object-cover ${className}`}
    />
  );
}
