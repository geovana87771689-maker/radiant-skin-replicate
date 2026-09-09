import { Check } from "lucide-react";
import { formatPrice, BUMP_PRICE } from "@/data/product";

export function OrderBump({
  selected,
  onToggle,
}: {
  selected: boolean;
  onToggle: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onToggle(!selected)}
      className={`block w-full rounded-lg border-2 border-dashed p-3 text-left transition-colors sm:p-4 ${
        selected
          ? "border-primary bg-accent"
          : "border-primary/40 bg-accent/40 hover:border-primary"
      }`}
    >
      <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-wide text-primary">
        Offre spéciale · Complétez votre routine
      </span>

      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2 ${
            selected
              ? "border-primary bg-primary text-primary-foreground"
              : "border-muted-foreground/40 bg-background"
          }`}
        >
          {selected && <Check className="size-3.5" />}
        </span>

        <img
          src="/images/egf-nad-serum.jpg?v=2"
          alt="Sérum Raffermissant EGF + NAD+"
          loading="eager"
          referrerPolicy="no-referrer"
          className="size-16 shrink-0 rounded-md bg-background object-contain sm:size-20"
        />

        <div className="min-w-0 flex-1">
          <p className="text-sm font-extrabold leading-snug text-foreground">
            Sérum Raffermissant EGF + NAD+ (Anti-Âge & Éclat)
          </p>
          <div className="mt-1 flex flex-wrap items-baseline gap-2">
            <span className="text-base font-extrabold text-primary">
              +{formatPrice(BUMP_PRICE)}
            </span>
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(39)}
            </span>
          </div>
          <ul className="mt-2 space-y-1">
            {[
              "Testé non comédogène & non irritant",
              "Cible rides du front, contour des yeux et cou",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-1.5 text-[11px] font-medium text-muted-foreground"
              >
                <Check className="mt-0.5 size-3 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
}
