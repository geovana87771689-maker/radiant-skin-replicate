export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 text-center">
        <strong className="text-xl">lépuremaison</strong>
        <p className="text-xs text-primary-foreground/70">© {new Date().getFullYear()} lépuremaison. Tous droits réservés.</p>
      </div>
    </footer>
  );
}