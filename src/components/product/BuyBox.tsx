import { Check, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { product, variants, formatPrice } from "@/data/product";
import { appendTrackingParams } from "@/lib/tracking";
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

  const selectedVariant = variants.find((v) => v.id === selectedVariantId) ?? variants[0];
  if (!selectedVariant) return null;
  const unitPrice = selectedVariant.price;
  const totalValue = unitPrice * qty;

  return (
    <div id="acheter" className="flex flex-col gap-5 scroll-mt-24 rounded-lg border border-border bg-background p-5 shadow-sm sm:p-7">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Stars rating={5} size={15} />
          <span className="text-xs font-bold text-foreground">4.8 · 1,420 avis clients vérifiés</span>
        </div>
        <h1 className="text-2xl leading-tight font-extrabold sm:text-3xl">
          {product.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed font-medium text-muted-foreground">{product.subtitle}</p>
      </div>

      <div className="rounded-md border border-border bg-muted/60 p-4 text-sm">
        <p className="mb-3 flex items-center gap-2 font-extrabold text-foreground">
          <Sparkles className="size-4 text-primary" /> Votre coffret complet
        </p>
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="flex justify-between gap-3"><span>Sérum Exfoliant Corps Purifiant (200ml)</span><strong>29,90 €</strong></div>
          <div className="flex justify-between gap-3"><span>Sérum Lissant & Éclat Visage (50ml)</span><strong>24,90 €</strong></div>
          <div className="flex justify-between gap-3 text-primary"><span>Gant de Gommage Exfoliant Pro</span><strong>OFFERT <span className="font-medium text-muted-foreground">(9,90 €)</span></strong></div>
        </div>
        <div className="mt-3 border-t border-border pt-3">
          <div className="flex justify-between gap-3 text-xs text-muted-foreground"><span>Total si acheté séparément</span><span className="line-through">64,70 €</span></div>
          <div className="mt-1 flex items-end justify-between gap-3"><strong>Prix du Coffret Spécial</strong><strong className="text-xl text-primary">34,90 €</strong></div>
          <p className="mt-1 text-right text-xs font-extrabold text-primary">Économie immédiate : 29,80 €</p>
        </div>
      </div>

      {/* Variant selector */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-extrabold">Choisissez votre cure</p>
        <div className="flex flex-col gap-3">
          {variants.map((v) => {
            const isSelected = v.id === selectedVariantId;
            return (
              <Button
                key={v.id}
                variant="outline"
                type="button"
                onClick={() => onSelectVariant(v.id)}
                className={`relative h-auto w-full whitespace-normal rounded-md border-2 px-3 py-4 text-left shadow-none transition-colors sm:px-4 ${
                  isSelected
                    ? "border-primary bg-accent ring-1 ring-primary hover:bg-accent"
                    : "border-border bg-background hover:border-muted-foreground hover:bg-background"
                }`}
              >
                {v.badge && (
                  <span className="absolute -top-2.5 right-3 rounded-sm bg-primary px-2 py-1 text-[9px] font-extrabold text-primary-foreground uppercase">
                    {v.badge}
                  </span>
                )}
                <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
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
                    <span className="text-sm leading-tight font-extrabold">
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
                    <span className="text-base font-extrabold sm:text-lg">
                      {formatPrice(v.price)}
                    </span>
                  </span>
                </div>
                {(v.unitPriceNote || v.compareAt || v.urgency) && (
                  <div className="mt-2 flex w-full flex-wrap items-center gap-x-2 gap-y-1 pl-8 text-[11px] font-bold text-primary">
                    {v.unitPriceNote ? (
                      <span>{v.unitPriceNote}</span>
                    ) : (
                      v.compareAt && (
                        <span>
                          Économisez {formatPrice(v.compareAt - v.price)}
                        </span>
                      )
                    )}
                    {v.urgency && <span>{v.urgency}</span>}
                  </div>
                )}
              </Button>
            );
          })}
        </div>
      </div>


      <div className="flex items-center gap-2 text-xs font-bold text-primary">
        <Truck className="size-4" />
        <span>Livraison standard offerte — sans minimum d'achat.</span>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          onClick={() => {
            toast.success(
              `${selectedVariant.title} — redirection vers le paiement`,
            );
            const checkoutUrl = appendTrackingParams(
              `https://vittacore.us/cart/${selectedVariant.variantId}:${qty}?checkout`,
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
          }}
          className="h-14 w-full rounded-md px-3 text-xs font-extrabold uppercase shadow-lg sm:text-sm"
        >
          Commander avec -45% de réduction
        </Button>

        <p className="text-center text-[11px] leading-relaxed font-semibold text-muted-foreground">
          Expédition sécurisée sous 24/48h · Garantie Satisfait ou Remboursé 30 jours
        </p>

        {/* Stock scarcity */}
        <p className="text-center text-[11px] font-semibold text-primary">
          Forte demande : plus que 7 coffrets disponibles pour l'expédition
          d'aujourd'hui.
        </p>
        <div className="flex items-center gap-2" aria-hidden="true">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[18%] rounded-full bg-primary" />
          </div>
          <span className="text-[10px] font-medium text-muted-foreground">
            7 restants
          </span>
        </div>

        {/* Trust badges */}
        <CardBrands />
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
      </div>

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
