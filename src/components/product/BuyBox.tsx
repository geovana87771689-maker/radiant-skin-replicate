import type { ReactNode } from "react";
import { BatteryMedium, Bluetooth, Check, Eye, Package, Shirt, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CheckoutColor, CheckoutQuantity } from "@/config/checkout";
import { benefits, colors, formatPrice, product, quantities } from "@/data/product";
import { buildCheckoutUrl } from "@/lib/checkout";

const benefitIcons = [Volume2, Shirt, BatteryMedium, Bluetooth, Eye, Package];

function Star({ fill }: { fill: number }) {
  return (
    <svg viewBox="0 0 20 20" className="size-4 text-amber-400" aria-hidden="true">
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

const PAYMENT_SVGS: Record<string, ReactNode> = {
  "Visa": (
    <svg viewBox="0 0 24 24" className="h-3.5 w-auto" fill="#1A1F71" aria-hidden="true">
      <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z" />
    </svg>
  ),
  Mastercard: (
    <svg viewBox="0 0 32 20" className="h-3.5 w-auto" aria-hidden="true">
      <circle cx="12" cy="10" r="8" fill="#EB001B" />
      <circle cx="20" cy="10" r="8" fill="#F79E1B" fillOpacity="0.85" />
    </svg>
  ),
  "JCB": (
    <svg viewBox="0 0 24 24" className="h-3.5 w-auto" fill="#0B4EA2" aria-hidden="true">
      <path d="M13.05 9.8643c.9723.0736 1.7257.3671 2.3545.6843v-1.31s-1.2577-.3162-2.4408-.368c-4.1256-.1849-5.295 1.4344-5.295 3.1292 0 1.6947 1.1694 3.3145 5.295 3.1296 1.1831-.0536 2.4408-.3694 2.4408-.3694v-1.3086c-.6193.3081-1.3826.6107-2.3545.683-1.6793.1272-2.6898-.6907-2.6898-2.1342 0-1.4448 1.0105-2.2613 2.6898-2.1354m7.685 4.1223c-.0513.0105-.1581.02-.215.02h-1.8005V12.376H20.52c.0568 0 .1636.01.2149.02a.8056.8056 0 01.6325.7951c0 .4162-.2872.721-.6325.796zm-2.0155-4.0374h1.6325c.059 0 .1454.0077.1772.0137.3376.0572.6256.3307.6256.7392 0 .409-.288.6815-.626.7392a1.571 1.571 0 01-.1773.0137h-1.6311V9.9506zm3.4994 1.9856v-.0364c.9133-.1331 1.4149-.726 1.4149-1.4199 0-.8828-.7343-1.3916-1.7293-1.4416-.0772-.0032-.203-.011-.3044-.011h-5.3323v5.9467h5.7548c1.13 0 1.9774-.6043 1.9774-1.5466 0-.8701-.7724-1.4222-1.781-1.4917zm-17.8644.6788c0 .8787-.5906 1.5311-1.6656 1.5311-.917 0-1.8174-.2726-2.6889-.6938V14.76s1.4021.383 3.191.383c2.9714 0 3.8374-1.125 3.8374-2.529V9.0266H4.3541v3.5876Z" />
    </svg>
  ),
  "Discover": (
    <svg viewBox="0 0 24 24" className="h-3.5 w-auto" fill="#FF6000" aria-hidden="true">
      <path d="M14.58 12a2.023 2.023 0 1 1-2.025-2.023h.002c1.118 0 2.023.906 2.023 2.023zm-5.2-2.001c-1.124 0-2.025.884-2.025 1.99 0 1.118.878 1.984 2.007 1.984.319 0 .593-.063.93-.221v-.873c-.296.297-.559.416-.895.416-.747 0-1.277-.542-1.277-1.312 0-.73.547-1.306 1.243-1.306.354 0 .622.126.93.428v-.873a1.898 1.898 0 0 0-.913-.233zm-3.352 1.545c-.445-.165-.576-.273-.576-.479 0-.239.233-.422.553-.422.222 0 .405.091.598.308l.388-.508a1.665 1.665 0 0 0-1.117-.422c-.673 0-1.186.467-1.186 1.089 0 .524.239.792.936 1.043.291.103.438.171.513.217a.456.456 0 0 1 .222.394c0 .308-.245.536-.576.536-.354 0-.639-.177-.809-.507l-.479.461c.342.502.752.724 1.317.724.771 0 1.311-.513 1.311-1.249-.002-.603-.252-.876-1.095-1.185zM24 10.3a.29.29 0 0 1-.288.291.29.29 0 0 1-.291-.291v-.003A.29.29 0 1 1 24 10.3zm-.059.001a.235.235 0 0 0-.231-.239.234.234 0 0 0-.232.239c0 .132.104.239.232.239a.235.235 0 0 0 .231-.239zM3.472 13.887h.742v-3.803h-.742v3.803zm12.702-1.248l-1.014-2.554h-.81l1.614 3.9h.399l1.643-3.9h-.804l-1.028 2.554zm2.166 1.248h2.104v-.644h-1.362v-1.027h1.312v-.644h-1.312v-.844h1.362v-.644H18.34v3.803zm5.409-3.557l.11.138h-.097l-.094-.13v.13h-.08v-.334h.107c.081 0 .126.036.126.103.001.046-.025.08-.072.093zm-.006-.092c0-.029-.021-.043-.06-.043h-.014v.087h.014c.039 0 .06-.014.06-.044zm-1.228 2.047l1.197 1.602H22.8l-1.027-1.528h-.097v1.528h-.741v-3.803h1.1c.855 0 1.346.411 1.346 1.123 0 .583-.308.965-.866 1.078zm.103-1.038c0-.37-.251-.563-.713-.563h-.228v1.152h.217c.473-.001.724-.207.724-.589zm-19.487.742a1.91 1.91 0 0 1-.69 1.46c-.365.303-.781.439-1.357.439H.001v-3.803H1.09c1.202 0 2.041.781 2.041 1.904zm-.764-.006c0-.364-.154-.718-.411-.947-.245-.222-.536-.308-1.015-.308H.742v2.515h.199c.479 0 .782-.092 1.015-.302.256-.228.411-.593.411-.958z" />
    </svg>
  ),
  "Diners": (
    <svg viewBox="0 0 24 24" className="h-3.5 w-auto" fill="#0079BE" aria-hidden="true">
      <path d="M16.506 11.982a6.026 6.026 0 0 0-3.866-5.618V17.6a6.025 6.025 0 0 0 3.866-5.618zM8.33 17.598V6.365a6.03 6.03 0 0 0-3.863 5.617 6.028 6.028 0 0 0 3.863 5.616zm2.156-15.113A9.497 9.497 0 0 0 .99 11.982a9.495 9.495 0 0 0 9.495 9.494c5.245 0 9.495-4.25 9.496-9.494a9.499 9.499 0 0 0-9.496-9.497Zm-.023 19.888C4.723 22.4 0 17.75 0 12.09 0 5.905 4.723 1.626 10.463 1.627h2.69C18.822 1.627 24 5.903 24 12.09c0 5.658-5.176 10.283-10.848 10.283" />
    </svg>
  ),
};

function PaymentBadge({ label }: { label: string }) {
  const svg = PAYMENT_SVGS[label] ?? label;
  return (
    <span className="flex h-6 items-center justify-center rounded border border-border bg-card px-2">
      {svg}
    </span>
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

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <PaymentBadge label="Visa" />
        <PaymentBadge label="Mastercard" />
        <PaymentBadge label="JCB" />
        <PaymentBadge label="Discover" />
        <PaymentBadge label="Diners" />
      </div>

      <div className="mt-3 grid gap-px overflow-hidden border border-border bg-border text-center text-[11px] font-extrabold sm:grid-cols-2">
        <div className="bg-card px-3 py-3">LIVRAISON SUIVIE OFFERTE — 1 À 3 JOURS OUVRÉS</div>
        <div className="bg-card px-3 py-3">ESSAIE-LE 30 JOURS SANS RISQUE</div>
      </div>
    </section>
  );
}