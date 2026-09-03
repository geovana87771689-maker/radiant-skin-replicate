import { Truck, Check, ShieldCheck, Package } from "lucide-react";
import { toast } from "sonner";
import { product, variants, formatPrice } from "@/data/product";
import { Stars } from "./Stars";

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
                className={`relative flex flex-col gap-1 rounded-sm border p-4 text-left transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2">
                      {isSelected && (
                        <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="size-3" />
                        </span>
                      )}
                      <span className="text-sm font-bold">{v.title}</span>
                      {v.badge && (
                        <span className="rounded-sm bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                          {v.badge}
                        </span>
                      )}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {v.support}
                    </span>
                    {v.urgency && (
                      <span className="text-xs font-semibold text-primary">
                        {v.urgency}
                      </span>
                    )}
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-0.5">
                    {v.compareAt && (
                      <span className="text-xs text-muted-foreground line-through">
                        {formatPrice(v.compareAt)}
                      </span>
                    )}
                    <span className="text-lg font-bold">
                      {formatPrice(v.price)}
                    </span>
                    {v.compareAt && (
                      <span className="text-[10px] font-semibold uppercase text-primary">
                        Économisez {formatPrice(v.compareAt - v.price)}
                      </span>
                    )}
                  </div>
                </div>
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

      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            toast.success(
              `${qty} × ${selectedVariant.title} ajouté à votre panier`,
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
          Ajouter au panier
        </button>
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
