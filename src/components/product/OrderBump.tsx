import { Check } from "lucide-react";
import { BUMP_COMPARE_AT, BUMP_IMAGE, BUMP_PRICE, formatPrice } from "@/data/product";
import { ProductImage } from "./ProductImage";

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
      className={`block w-full rounded-2xl border-2 border-dashed p-3 text-left transition-all sm:p-4 ${
        selected
          ? "border-primary bg-accent shadow-sm"
          : "border-primary/40 bg-accent/40 hover:border-primary"
      }`}
    >
      <span className="mb-2 block text-[10px] font-extrabold tracking-wide text-primary uppercase">
        ⚡ Recommandé par 98% des clients
      </span>

      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-transform ${
            selected
              ? "scale-110 border-primary bg-primary text-primary-foreground"
              : "border-muted-foreground/40 bg-card"
          }`}
        >
          {selected && <Check className="size-3.5" />}
        </span>

        <div className="size-16 shrink-0 overflow-hidden rounded-xl sm:size-20">
          <ProductImage
            src={BUMP_IMAGE}
            alt="Kit de bâtons fixateurs antidérapants"
            width={200}
            height={200}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-extrabold leading-snug text-foreground">
            OUI ! Ajouter le Kit de Bâtons Fixateurs Antidérapants pour seulement{" "}
            <span className="text-primary">+{formatPrice(BUMP_PRICE)}</span>{" "}
            <span className="text-xs font-medium text-muted-foreground line-through">
              {formatPrice(BUMP_COMPARE_AT)}
            </span>
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            Évitez que la housse ne bouge quand on s'assoit. Ces bâtons haute
            densité bloquent le tissu au fond des interstices pour un effet lisse
            et sur-mesure toute la journée.
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {["Finition sans plis", "Ne se déforme pas", "Fixation ultra ferme"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground"
                >
                  <Check className="size-3 shrink-0 text-primary" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </button>
  );
}
