import { Check, ShieldCheck, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { product, variants, formatPrice, BUMP_PRICE } from "@/data/product";
import { buildCheckoutUrl } from "@/lib/checkout";
import { Stars } from "./Stars";
import { CardBrands } from "./CardBrands";
import { OrderBump } from "./OrderBump";

type VariantId = "1kit" | "2kits";

const kitItems: Record<
  VariantId,
  { name: string; free?: boolean }[]
> = {
  "1kit": [
    { name: "Sérum Exfoliant Corps Purifiant (200ml)" },
    { name: "Sérum Lissant & Éclat Visage (50ml)" },
    { name: "Gant de Gommage Exfoliant Pro", free: true },
  ],
  "2kits": [
    { name: "2× Sérum Exfoliant Corps Purifiant (200ml)" },
    { name: "2× Sérum Lissant & Éclat Visage (50ml)" },
    { name: "2× Gant de Gommage Exfoliant Pro", free: true },
  ],
};

export function BuyBox({
  selectedVariantId,
  onSelectVariant,
  bumpSelected,
  onToggleBump,
}: {
  selectedVariantId: VariantId;
  onSelectVariant: (id: VariantId) => void;
  bumpSelected: boolean;
  onToggleBump: (next: boolean) => void;
}) {
  const selectedVariant =
    variants.find((v) => v.id === selectedVariantId) ?? variants[0];
  if (!selectedVariant) return null;
  const totalValue = selectedVariant.price + (bumpSelected ? BUMP_PRICE : 0);
  const totalCompareAt = selectedVariant.compareAt
    ? selectedVariant.compareAt + (bumpSelected ? 39 : 0)
    : undefined;
  const reviewCountFmt = new Intl.NumberFormat("fr-FR").format(
    product.reviewCount,
  );

  const handleCheckout = () => {
    toast.success(`${selectedVariant.title} — redirection vers le paiement`);
    const checkoutUrl = buildCheckoutUrl(
      selectedVariant.variantId,
      bumpSelected,
    );
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "AddToCart", {
        content_name: selectedVariant.title,
        content_ids: [selectedVariant.variantId],
        content_type: "product",
        value: totalValue,
        currency: "EUR",
      });
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: selectedVariant.title,
        currency: "EUR",
        value: totalValue,
      });
    }
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 350);
  };

  return (
    <div
      id="acheter"
      className="min-w-0 flex flex-col gap-2 scroll-mt-24 bg-background px-4 py-3 sm:gap-4 sm:px-6 lg:rounded-lg lg:border lg:border-border lg:p-7 lg:shadow-sm"
    >
      {/* 1 — Title (clean, no card) */}
      <h1 className="text-lg font-bold leading-tight text-foreground sm:text-2xl">
        Duo Rice Peel Shot + Gant Exfoliant Offert
      </h1>

      {/* 2 — Stars + rating */}
      <div className="flex items-center gap-1.5">
        <Stars rating={5} size={16} />
        <span className="text-xs font-bold text-foreground">
          4.8 · {reviewCountFmt} avis
        </span>
      </div>

      {/* 3 — Item summary */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        Sérum Corps 200ml + Sérum Visage 50ml — Gant exfoliant offert
      </p>

      {/* 4 — Price block */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-primary">
          {formatPrice(totalValue)}
        </span>
        {totalCompareAt && (
          <span className="text-lg font-medium text-muted-foreground line-through">
            {formatPrice(totalCompareAt)}
          </span>
        )}
      </div>

      {/* 5 — CE QUE CONTIENT LE COFFRET */}
      <div>
        <h2 className="mb-3 text-xs font-bold tracking-wide text-foreground uppercase">
          CE QUE CONTIENT LE COFFRET
        </h2>
        <div className="flex flex-col gap-3">
          {variants.map((v) => {
            const isSelected = v.id === selectedVariantId;
            const items = kitItems[v.id];
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => onSelectVariant(v.id)}
                className={`relative block w-full rounded-md border px-4 py-4 text-left transition-colors ${
                  isSelected
                    ? "border-foreground ring-1 ring-foreground"
                    : "border-border hover:border-foreground/50"
                }`}
              >
                {v.badge && (
                  <span className="absolute -top-2.5 left-4 rounded-sm bg-primary px-2 py-0.5 text-[9px] font-extrabold text-primary-foreground uppercase">
                    {v.badge}
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                      isSelected
                        ? "border-foreground bg-foreground text-background"
                        : "border-border"
                    }`}
                  >
                    {isSelected && <Check className="size-3" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-extrabold leading-snug">
                        {v.qtyLabel}
                      </p>
                      <div className="flex shrink-0 items-baseline gap-1.5">
                        <span className="text-base font-extrabold">
                          {formatPrice(v.price)}
                        </span>
                        {v.compareAt && (
                          <span className="text-xs text-muted-foreground line-through">
                            {formatPrice(v.compareAt)}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-xs text-muted-foreground"
                        >
                          <span
                            className={`mt-1 size-1.5 shrink-0 rounded-full ${
                              item.free ? "bg-primary" : "bg-foreground/30"
                            }`}
                          />
                          <span className="min-w-0">
                            <span className="block">{item.name}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 6 — Order bump (above CTA) */}
      <OrderBump selected={bumpSelected} onToggle={onToggleBump} />

      {/* 7 — CTA (rounded-full) */}
      <Button
        onClick={handleCheckout}
        className="h-16 w-full rounded-full bg-primary text-primary-foreground shadow-lg"
      >
        <span className="text-sm font-extrabold uppercase tracking-tight sm:text-base">
          Commander maintenant
        </span>
      </Button>

      {/* 8 — Card brands */}
      <CardBrands />

      {/* 9 — Trust badges */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-medium text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-4 text-primary" />
          Garantie 30 jours
        </span>
        <span className="flex items-center gap-1.5">
          <Truck className="size-4 text-primary" />
          Livraison suivie
        </span>
      </div>

      {/* Stock scarcity */}
      <div className="flex items-center gap-2" aria-hidden="true">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[18%] rounded-full bg-primary" />
        </div>
        <span className="text-[10px] font-medium text-muted-foreground">
          7 restants
        </span>
      </div>

      {/* Spec table */}
      <dl className="divide-y divide-border border-y border-border text-xs sm:text-sm">
        <div className="grid grid-cols-[115px_1fr] gap-3 py-3">
          <dt className="font-semibold">Type de peau</dt>
          <dd className="col-span-2 text-muted-foreground">
            {product.skinType}
          </dd>
        </div>
        <div className="grid grid-cols-[115px_1fr] gap-3 py-3">
          <dt className="font-semibold">Problématiques</dt>
          <dd className="col-span-2 text-muted-foreground">
            {product.skinConcerns}
          </dd>
        </div>
        <div className="grid grid-cols-[115px_1fr] gap-3 py-3">
          <dt className="font-semibold">Ingrédients clés</dt>
          <dd className="col-span-2 text-muted-foreground">
            {product.keyIngredients}
          </dd>
        </div>
      </dl>
    </div>
  );
}
