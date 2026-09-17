import logoAsset from "@/assets/logo-lepuremaison.webp.asset.json";

type StoreLogoProps = {
  imageSrc?: string;
};

/**
 * Logo de la boutique lépuremaison.
 * Le fichier image est chargé depuis le CDN via le pointeur
 * `@/assets/logo-lepuremaison.webp.asset.json`.
 * Pour le remplacer : recréez l'asset (lovable-assets create --file <nouveau.webp>
 * --filename logo-lepuremaison.webp > src/assets/logo-lepuremaison.webp.asset.json)
 * puis supprimez l'ancien asset.
 */
const DEFAULT_LOGO_IMAGE: string = logoAsset.url;

export function StoreLogo({ imageSrc = DEFAULT_LOGO_IMAGE }: StoreLogoProps) {
  return (
    <div className="flex h-20 w-[280px] items-center justify-center lg:h-[92px] lg:w-[322px]">
      {imageSrc ? (
        <img src={imageSrc} alt="lépuremaison" className="max-h-full max-w-full object-contain" />
      ) : (
        <span className="font-display text-3xl font-extrabold text-foreground">lépuremaison</span>
      )}
    </div>
  );
}