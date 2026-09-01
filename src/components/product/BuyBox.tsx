import { useState } from "react";
import { Minus, Plus, Truck } from "lucide-react";
import { toast } from "sonner";
import { product } from "@/data/product";
import { Stars } from "./Stars";

export function BuyBox() {
  const [qty, setQty] = useState(1);
  const total = product.price * qty;
  const remaining = Math.max(0, 80 - total);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{product.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{product.subtitle}</p>
        <div className="mt-3 flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-muted-foreground underline">
            {product.reviewCount} reviews
          </span>
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">€{product.price.toFixed(2)}</span>
        <span className="text-sm text-muted-foreground">EUR</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-sm border border-border">
          <button
            className="px-3 py-2 disabled:opacity-40"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            disabled={qty === 1}
            aria-label="Decrease quantity"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-10 text-center text-sm font-medium">{qty}</span>
          <button
            className="px-3 py-2"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="size-4" />
          </button>
        </div>
        <span className="text-xs text-muted-foreground">
          Shipping calculated at checkout.
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => toast.success(`Added ${qty} × ${product.title} to your cart`)}
          className="w-full rounded-sm bg-primary py-4 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
        >
          Add To Cart
        </button>
      </div>


      <div className="rounded-sm bg-muted px-4 py-3 text-xs">
        <div className="flex items-center gap-2 font-medium">
          <Truck className="size-4" />
          {remaining > 0 ? (
            <span>
              You're <strong>€{remaining.toFixed(2)}</strong> away from free shipping!
            </span>
          ) : (
            <span>You've unlocked free shipping!</span>
          )}
        </div>
        <p className="mt-2 text-muted-foreground">
          For orders over $35.00, select installments at checkout to split your purchase over time.
        </p>
      </div>

      <dl className="divide-y divide-border border-y border-border text-sm">
        <div className="grid grid-cols-3 gap-4 py-3">
          <dt className="font-semibold">Skin Type</dt>
          <dd className="col-span-2 text-muted-foreground">{product.skinType}</dd>
        </div>
        <div className="grid grid-cols-3 gap-4 py-3">
          <dt className="font-semibold">Skin Concerns</dt>
          <dd className="col-span-2 text-muted-foreground">{product.skinConcerns}</dd>
        </div>
        <div className="grid grid-cols-3 gap-4 py-3">
          <dt className="font-semibold">Key ingredients</dt>
          <dd className="col-span-2 text-muted-foreground">{product.keyIngredients}</dd>
        </div>
      </dl>
    </div>
  );
}
