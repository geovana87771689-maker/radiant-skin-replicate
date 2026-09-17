type StoreLogoProps = {
  imageSrc?: string;
};

/**
 * Pour utiliser le futur fichier logo en une seule ligne :
 * import logo from "@/assets/logo-lepuremaison.png.asset.json";
 * puis remplacez `const DEFAULT_LOGO_IMAGE = null` par `const DEFAULT_LOGO_IMAGE = logo.url`.
 */
const DEFAULT_LOGO_IMAGE: string | null = null;

export function StoreLogo({ imageSrc = DEFAULT_LOGO_IMAGE ?? undefined }: StoreLogoProps) {
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