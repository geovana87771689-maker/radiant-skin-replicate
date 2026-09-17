export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-center px-4">
        <a href="/" aria-label="CozyBand — accueil" className="flex h-20 w-[280px] items-center justify-center font-display text-3xl font-extrabold tracking-normal text-foreground">
          CozyBand
        </a>
      </div>
    </header>
  );
}