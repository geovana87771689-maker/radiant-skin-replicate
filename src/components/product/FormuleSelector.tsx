import { Check } from "lucide-react";
import { formatPrice, formules } from "@/data/product";

type FormuleId = "simple" | "complet";

export function FormuleSelector({
  selected,
  onSelect,
}: {
  selected: FormuleId;
  onSelect: (id: FormuleId) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {formules.map((f) => {
        const isSelected = f.id === selected;
        const isPack = f.id === "complet";
        return (
          <button
            key={f.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(f.id)}
            className={`relative w-full rounded-2xl px-4 py-3 text-left transition-all ${
              isPack
                ? `border-2 border-dashed ${
                    isSelected
                      ? "border-primary bg-accent shadow-sm"
                      : "border-primary/40 bg-accent/40 hover:border-primary"
                  }`
                : `border ${
                    isSelected
                      ? "border-primary bg-accent ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  }`
            }`}
          >
            {f.badge && (
              <span className="mb-2 block text-[10px] font-extrabold tracking-wide text-primary uppercase">
                {f.badge}
              </span>
            )}
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/40 bg-card"
                }`}
              >
                {isSelected && <Check className="size-3" />}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-extrabold leading-snug">{f.label}</p>
                  <span className="shrink-0 text-base font-extrabold">
                    {formatPrice(f.price)}
                  </span>
                </div>
                {f.detail && (
                  <p className="mt-1 text-xs text-muted-foreground">{f.detail}</p>
                )}
                {f.note && (
                  <p className="mt-1 text-[11px] font-bold text-primary">{f.note}</p>
                )}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
