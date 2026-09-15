import logoAsset from "@/assets/logo-lepure-maison.png.asset.json";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-card">
      <div className="animate-pulse-soft bg-primary px-4 py-2 text-center text-[11px] font-extrabold tracking-wide text-primary-foreground uppercase">
        🔥 Déstockage + livraison offerte partout en France — aujourd'hui seulement !
      </div>
      <div className="flex items-center justify-center gap-2 bg-foreground px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-background uppercase">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 3h15v13H1z" />
          <path d="M16 8h4l3 3v5h-7z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
        <span>Livraison offerte & suivie sur toutes les commandes</span>
      </div>
      <div className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-center px-4">
      <a href="/" aria-label="L'ÉPURE MAISON — accueil" className="flex items-center">
            <img
              src={logoAsset.url}
              alt="L'ÉPURE MAISON"
              className="h-9 w-auto rounded-[4px]"
              loading="eager"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
