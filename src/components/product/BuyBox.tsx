import { Truck, Check, ShieldCheck, Package } from "lucide-react";
import { toast } from "sonner";
import { product, variants, formatPrice } from "@/data/product";
import { Stars } from "./Stars";
import { CardBrands } from "./CardBrands";

type VariantId = "1kit" | "2kits";

export function BuyBox({
  selectedVariantId,
  onSelectVariant,
}: {
  selectedVariantId: VariantId;
  onSelectVariant: (id: VariantId) => void;
}) {
  const qty = 1;

  const selectedVariant =
    variants.find((v) => v.id === selectedVariantId) ?? variants[0]!;
  const unitPrice = selectedVariant.price;
  const totalValue = unitPrice * qty;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {product.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{product.subtitle}</p>
        <div className="mt-3 flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-muted-foreground underline">
            {product.reviewCount} avis
          </span>
        </div>
      </div>

      {/* Variant selector */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide">
          Choisissez votre cure
        </p>
        <div className="flex flex-col gap-3">
          {variants.map((v) => {
            const isSelected = v.id === selectedVariantId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => onSelectVariant(v.id)}
                className={`relative rounded-sm border px-3 py-3 text-left transition-colors sm:px-4 ${
                  isSelected
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                {v.badge && (
                  <span className="absolute -top-2 right-3 rounded-sm bg-primary px-2 py-0.5 text-[9px] font-bold tracking-wide text-primary-foreground uppercase">
                    {v.badge}
                  </span>
                )}
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                  <span
                    className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border"
                    }`}
                  >
                    {isSelected && <Check className="size-3" />}
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-sm leading-tight font-bold">
                      {v.qtyLabel}
                    </span>
                    <span className="text-xs leading-tight text-muted-foreground">
                      {v.shortSupport}
                    </span>
                  </span>
                  <span className="flex shrink-0 flex-col items-end leading-tight">
                    {v.compareAt && (
                      <span className="text-[11px] text-muted-foreground line-through">
                        {formatPrice(v.compareAt)}
                      </span>
                    )}
                    <span className="text-base font-bold sm:text-lg">
                      {formatPrice(v.price)}
                    </span>
                  </span>
                </div>
                {(v.compareAt || v.urgency) && (
                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 pl-8 text-[11px] font-semibold text-primary">
                    {v.compareAt && (
                      <span>
                        Économisez {formatPrice(v.compareAt - v.price)}
                      </span>
                    )}
                    {v.urgency && <span>{v.urgency}</span>}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{formatPrice(unitPrice)}</span>
        <span className="text-sm text-muted-foreground">TTC</span>
      </div>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Truck className="size-4" />
        <span>Frais de livraison calculés au paiement.</span>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => {
            toast.success(
              `${selectedVariant.title} — redirection vers le paiement`,
            );
            const queryString =
              typeof window !== "undefined" ? window.location.search : "";
            const checkoutUrl = `https://vittacore.us/cart/${selectedVariant.variantId}:${qty}?checkout${queryString ? `&${queryString.slice(1)}` : ""}`;
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
          }}
          className="w-full rounded-sm bg-primary py-4 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
        >
          Commander maintenant
        </button>

        {/* Trust badges */}
        <CardBrands />
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-primary" />
            Garantie 30 jours
          </span>
          <span className="flex items-center gap-1.5">
            <Package className="size-4 text-primary" />
            Livraison suivie
          </span>
        </div>
      </div>

      <div className="rounded-sm bg-muted px-4 py-3 text-xs">
        <div className="flex items-center gap-2 font-medium">
          <Truck className="size-4" />
          <span>Livraison offerte sur toutes les commandes !</span>
        </div>
        <p className="mt-2 text-muted-foreground">
          Pour les commandes supérieures à 35,00 €, choisissez le paiement en
          plusieurs fois au moment du règlement.
        </p>
      </div>

      <dl className="divide-y divide-border border-y border-border text-sm">
        <div className="grid grid-cols-3 gap-4 py-3">
          <dt className="font-semibold">Type de peau</dt>
          <dd className="col-span-2 text-muted-foreground">
            {product.skinType}
          </dd>
        </div>
        <div className="grid grid-cols-3 gap-4 py-3">
          <dt className="font-semibold">Problématiques</dt>
          <dd className="col-span-2 text-muted-foreground">
            {product.skinConcerns}
          </dd>
        </div>
        <div className="grid grid-cols-3 gap-4 py-3">
          <dt className="font-semibold">Ingrédients clés</dt>
          <dd className="col-span-2 text-muted-foreground">
            {product.keyIngredients}
          </dd>
        </div>
      </dl>
    </div>
  );
}
