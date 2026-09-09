export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="bg-primary px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-primary-foreground uppercase">
        Vous êtes sur la boutique officiale Medicube
      </div>
      <div className="flex items-center justify-center gap-2 bg-black px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-white uppercase">
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
        <span>Livraison offerte sur toutes les commandes</span>
      </div>
      <div className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-center px-4">
          <a href="/" className="flex items-center" aria-label="medicube">
            <img
              src="/images/logotipo.png"
              alt="medicube K-Beauty Tech"
              className="h-9 w-auto"
              width={120}
              height={40}
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
