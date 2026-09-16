import { Check, Ruler, ShieldCheck, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  COMPARE_AT,
  colors,
  formatPrice,
  formules,
  getVariantId,
  product,
  sizeGuide,
  sizes,
} from "@/data/product";
import { buildCheckoutUrl } from "@/lib/checkout";
import { trackCheckoutEvents } from "@/lib/pixel";
import { Stars } from "./Stars";
import { CardBrands } from "./CardBrands";


type SizeId = "2p" | "3p" | "4p";
type ColorId = "noir" | "vert" | "gris";
type FormuleId = "simple" | "complet";

export function BuyBox({
  selectedSizeId,
  onSelectSize,
  selectedColorId,
  onSelectColor,
  selectedFormuleId,
  onSelectFormule,
}: {
  selectedSizeId: SizeId;
  onSelectSize: (id: SizeId) => void;
  selectedColorId: ColorId;
  onSelectColor: (id: ColorId) => void;
  selectedFormuleId: FormuleId;
  onSelectFormule: (id: FormuleId) => void;
}) {
  const size = sizes.find((s) => s.id === selectedSizeId) ?? sizes[0]!;
  const color = colors.find((c) => c.id === selectedColorId) ?? colors[0]!;
  const formule = formules.find((f) => f.id === selectedFormuleId) ?? formules[0]!;
  const variantId = getVariantId(size.id, color.id);

  const total = size.price;
  const totalCompareAt = size.compareAt;
  const reviewCountFmt = new Intl.NumberFormat("fr-FR").format(product.reviewCount);

  const handleCheckout = () => {
    toast.success(`${size.label} · ${color.label} — redirection vers le paiement`);
    const checkoutUrl = buildCheckoutUrl(variantId, formule.id === "complet");
    trackCheckoutEvents({
      title: `${product.title} — ${size.label} / ${color.label} / ${formule.label}`,
      variantId,
      value: total,
      source: "buybox",
    });
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 300);
  };

  return (
    <div
      id="acheter"
      className="min-w-0 flex scroll-mt-24 flex-col gap-4 bg-card px-4 py-4 sm:px-6 lg:rounded-2xl lg:border lg:border-border lg:p-7 lg:shadow-sm"
    >
      <h1 className="text-lg font-bold leading-tight text-foreground sm:text-2xl">
        {product.title}
      </h1>

      <div className="flex items-center gap-1.5">
        <Stars rating={5} size={16} />
        <span className="text-xs font-bold text-foreground">
          {product.rating.toFixed(1)} · {reviewCountFmt} salons transformés
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Tissu chenille Spandex UltraFit · bouclier anti-taches & anti-odeurs ·
        lavable en machine
      </p>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-primary">{formatPrice(total)}</span>
        <span className="text-lg font-medium text-muted-foreground line-through">
          {formatPrice(totalCompareAt)}
        </span>
      </div>

      {/* 1 — TAILLE, avec le guide de mesure à côté */}
      <div>
        <h2 className="mb-2 text-xs font-bold tracking-wide text-foreground uppercase">
          1. Choisissez la taille
        </h2>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="flex flex-col gap-2">
            {sizes.map((s) => {
              const isSelected = s.id === selectedSizeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onSelectSize(s.id)}
                  className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                    isSelected
                      ? "border-primary bg-accent ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border"
                    }`}
                  >
                    {isSelected && <Check className="size-3" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold leading-snug">
                      {s.label}{" "}
                      <span className="font-bold text-muted-foreground">
                        · {s.qualifier}
                      </span>
                    </span>
                    <span className="mt-0.5 block text-sm font-extrabold text-primary">
                      {formatPrice(s.price)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <aside className="rounded-xl border border-border bg-secondary p-3 sm:w-52">
            <p className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase">
              <Ruler className="size-3.5 text-primary" />
              Guide de mesure
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              Mesurez l'assise d'un accoudoir à l'autre, sans les coussins.
            </p>
            <ul className="mt-2 space-y-1">
              {sizeGuide.map((row) => (
                <li
                  key={row.size}
                  className="flex items-baseline justify-between gap-2 text-[11px]"
                >
                  <span className="font-semibold">{row.size.split(" (")[0]}</span>
                  <span className="text-muted-foreground">{row.seat}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[10px] text-muted-foreground">
              Entre deux tailles ? Prenez la taille au-dessus.
            </p>
          </aside>
        </div>
      </div>

      {/* 2 — COULEUR (change la photo principale) */}
      <div>
        <h2 className="mb-2 text-xs font-bold tracking-wide text-foreground uppercase">
          2. Choisissez la couleur : <span className="text-primary">{color.label}</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {colors.map((c) => {
            const isSelected = c.id === selectedColorId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => onSelectColor(c.id)}
                aria-pressed={isSelected}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                  isSelected
                    ? "border-primary bg-accent text-foreground ring-1 ring-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                <span
                  className="size-4 rounded-full border border-border"
                  style={{ backgroundColor: c.swatch }}
                />
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <Button
        onClick={handleCheckout}
        className="h-16 w-full rounded-full bg-primary text-primary-foreground shadow-lg"
      >
        <span className="flex w-full items-center justify-center gap-2 text-sm font-extrabold tracking-tight uppercase sm:text-base">
          Finaliser la commande · {formatPrice(total)}
        </span>
      </Button>

      <p className="text-center text-xs font-semibold text-primary">
        🔥 Stock limité : plus que 6 kits disponibles à ce prix.
      </p>

      <CardBrands />

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-medium text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-4 text-primary" />
          30 jours satisfait ou remboursé
        </span>
        <span className="flex items-center gap-1.5">
          <Truck className="size-4 text-primary" />
          Livraison offerte & suivie
        </span>
      </div>

      <dl className="divide-y divide-border border-y border-border text-xs sm:text-sm">
        <div className="grid grid-cols-[115px_1fr] gap-3 py-3">
          <dt className="font-semibold">Matière</dt>
          <dd className="text-muted-foreground">
            Chenille extensible (polyester + Spandex UltraFit)
          </dd>
        </div>
        <div className="grid grid-cols-[115px_1fr] gap-3 py-3">
          <dt className="font-semibold">Compatibilité</dt>
          <dd className="text-muted-foreground">
            Canapés droits, convertibles, relax et méridiennes
          </dd>
        </div>
        <div className="grid grid-cols-[115px_1fr] gap-3 py-3">
          <dt className="font-semibold">Entretien</dt>
          <dd className="text-muted-foreground">
            Lavable en machine à 30°C, séchage à l'air libre
          </dd>
        </div>
      </dl>
    </div>
  );
}
