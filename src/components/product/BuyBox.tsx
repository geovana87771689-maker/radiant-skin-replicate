import { BatteryMedium, Bluetooth, Check, Eye, Package, Shirt, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CheckoutColor, CheckoutQuantity } from "@/config/checkout";
import { benefits, colors, formatPrice, product, quantities } from "@/data/product";
import { buildCheckoutUrl } from "@/lib/checkout";

const benefitIcons = [Volume2, Shirt, BatteryMedium, Bluetooth, Eye, Package];

function Star({ fill }: { fill: number }) {
  return (
    <svg viewBox="0 0 20 20" className="size-4 text-foreground" aria-hidden="true">
      <defs>
        <linearGradient id={`star-${fill}`}>
          <stop offset={`${fill}%`} stopColor="currentColor" />
          <stop offset={`${fill}%`} stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77 4.8 17.5l.99-5.79-4.21-4.1 5.82-.85L10 1.5z"
        fill={`url(#star-${fill})`}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BuyBox({ selectedColorId, onSelectColor, selectedQuantity, onSelectQuantity }: {
  selectedColorId: CheckoutColor;
  onSelectColor: (id: CheckoutColor) => void;
  selectedQuantity: CheckoutQuantity;
  onSelectQuantity: (quantity: CheckoutQuantity) => void;
}) {
  const color = colors.find((item) => item.id === selectedColorId) ?? colors[0];
  const offer = quantities.find((item) => item.quantity === selectedQuantity) ?? quantities[1];

  if (!color || !offer) return null;

  const handleCheckout = () => {
    const checkoutUrl = buildCheckoutUrl(selectedColorId, selectedQuantity);
    window.location.href = checkoutUrl;
  };

  return (
    <section id="acheter" className="min-w-0 px-4 pb-8 pt-4 lg:px-8 lg:py-0">
      <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">{product.title}</h1>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex" aria-label="4,9 sur 5 étoiles">
          <Star fill={100} />
          <Star fill={100} />
          <Star fill={100} />
          <Star fill={100} />
          <Star fill={90} />
        </div>
        <span className="text-sm font-bold text-foreground">4,9</span>
        <span className="text-sm text-muted-foreground">(3223 avis)</span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-foreground">{formatPrice(offer.total)}</span>
        {/* Prix de référence désactivé : il devra correspondre au prix le plus bas
            pratiqué pendant les 30 jours précédents (directive Omnibus de l'UE). */}
      </div>

      <p className="mt-2 text-sm font-semibold text-muted-foreground">Des haut-parleurs si plats que l'oreiller ne les sent pas.</p>

      <ul className="mt-5 space-y-3">
        {benefits.map((benefit, index) => {
          const Icon = benefitIcons[index] ?? Check;
          return (
            <li key={benefit} className="flex items-start gap-3 text-sm leading-snug">
              <Icon className="mt-0.5 size-4 shrink-0 text-foreground" strokeWidth={1.6} />
              <span>{benefit}</span>
            </li>
          );
        })}
      </ul>

      <div className="mt-7">
        <h2 className="text-xs font-extrabold uppercase">Couleur : {color.label}</h2>
        <div className="mt-3 flex gap-3">
          {colors.map((item) => {
            const selected = item.id === selectedColorId;
            return (
              <Button key={item.id} type="button" variant="outline" onClick={() => onSelectColor(item.id)} aria-pressed={selected} className={`h-11 gap-2 rounded-full px-4 ${selected ? "border-foreground ring-1 ring-foreground" : ""}`}>
                <span className={`size-5 rounded-full border border-border ${item.swatchClass}`} />
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="mt-7">
        <h2 className="text-xs font-extrabold uppercase">Quantité</h2>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {quantities.map((item) => {
            const selected = item.quantity === selectedQuantity;
            return (
              <Button key={item.quantity} type="button" variant="outline" onClick={() => onSelectQuantity(item.quantity)} aria-pressed={selected} className={`relative h-[92px] flex-col gap-0 rounded-md px-2 ${selected ? "border-foreground bg-foreground text-primary-foreground ring-1 ring-foreground hover:bg-foreground" : ""}`}>
                {item.popular && <span className={`absolute -top-2.5 rounded-full border px-2 py-0.5 text-[9px] font-extrabold uppercase ${selected ? "border-primary-foreground bg-foreground" : "border-foreground bg-background text-foreground"}`}>Choix populaire</span>}
                <span className="text-lg font-extrabold">{item.quantity}</span>
                <span className="text-sm font-bold">{formatPrice(item.total)}</span>
                <span className={`text-[10px] ${selected ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{formatPrice(item.perUnit)} / bandeau</span>
              </Button>
            );
          })}
        </div>
        {offer.savingsPerUnit && (
          <p className="mt-3 bg-secondary px-3 py-2 text-center text-xs font-semibold">
            Seulement {formatPrice(offer.perUnit)} par bandeau. Tu économises {formatPrice(offer.savingsPerUnit)} sur chacun.
          </p>
        )}
      </div>

      <p className="mt-5 flex items-center gap-2 text-sm font-bold"><span className="size-2 rounded-full bg-foreground" />En stock — expédié sous 24 à 48 h ouvrées</p>
      <Button type="button" onClick={handleCheckout} className="mt-4 h-14 w-full rounded-md text-sm font-extrabold tracking-wide">AJOUTER AU PANIER · {formatPrice(offer.total)}</Button>

      <div className="mt-3 grid gap-px overflow-hidden border border-border bg-border text-center text-[11px] font-extrabold sm:grid-cols-2">
        <div className="bg-card px-3 py-3">LIVRAISON SUIVIE OFFERTE — 1 À 3 JOURS OUVRÉS</div>
        <div className="bg-card px-3 py-3">ESSAIE-LE 30 JOURS SANS RISQUE</div>
      </div>
    </section>
  );
}