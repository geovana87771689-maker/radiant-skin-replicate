import { useState } from "react";
import { Minus, Plus, Truck } from "lucide-react";
import { toast } from "sonner";
import { product, formatPrice } from "@/data/product";
import { Stars } from "./Stars";

export function BuyBox() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{product.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{product.subtitle}</p>
        <div className="mt-3 flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-muted-foreground underline">
            {product.reviewCount} avis
          </span>
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
        <span className="text-sm text-muted-foreground">TTC</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-sm border border-border">
          <button
            className="px-3 py-2 disabled:opacity-40"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            disabled={qty === 1}
            aria-label="Diminuer la quantité"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-10 text-center text-sm font-medium">{qty}</span>
          <button
            className="px-3 py-2"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Augmenter la quantité"
          >
            <Plus className="size-4" />
          </button>
        </div>
        <span className="text-xs text-muted-foreground">
          Frais de livraison calculés au paiement.
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            toast.success(`${qty} × ${product.title} ajouté à votre panier`);
            const queryString = typeof window !== "undefined" ? window.location.search : "";
            const checkoutUrl = `https://vittacore.us/cart/54701770703214:${qty}?checkout${queryString ? `&${queryString.slice(1)}` : ""}`;
            if (typeof window !== "undefined" && (window as any).fbq) {
              (window as any).fbq("track", "AddToCart", {
                content_name: product.title,
                content_ids: ["54701770703214"],
                content_type: "product",
                value: product.price * qty,
                currency: "EUR",
              });
              (window as any).fbq("track", "InitiateCheckout", {
                content_name: product.title,
                currency: "EUR",
                value: product.price * qty,
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
          Pour les commandes supérieures à 35,00 €, choisissez le paiement en plusieurs fois au
          moment du règlement.
        </p>
      </div>

      <dl className="divide-y divide-border border-y border-border text-sm">
        <div className="grid grid-cols-3 gap-4 py-3">
          <dt className="font-semibold">Type de peau</dt>
          <dd className="col-span-2 text-muted-foreground">{product.skinType}</dd>
        </div>
        <div className="grid grid-cols-3 gap-4 py-3">
          <dt className="font-semibold">Problématiques</dt>
          <dd className="col-span-2 text-muted-foreground">{product.skinConcerns}</dd>
        </div>
        <div className="grid grid-cols-3 gap-4 py-3">
          <dt className="font-semibold">Ingrédients clés</dt>
          <dd className="col-span-2 text-muted-foreground">{product.keyIngredients}</dd>
        </div>
      </dl>
    </div>
  );
}
