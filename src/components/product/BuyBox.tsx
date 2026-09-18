import type { ReactNode } from "react";
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
  "Apple Pay": (
    <svg viewBox="0 0 24 24" className="h-3.5 w-auto" fill="#000000" aria-hidden="true">
      <path d="M2.15 4.318a42.16 42.16 0 0 0-.454.003c-.15.005-.303.013-.452.04a1.44 1.44 0 0 0-1.06.772c-.07.138-.114.278-.14.43-.028.148-.037.3-.04.45A10.2 10.2 0 0 0 0 6.222v11.557c0 .07.002.138.003.207.004.15.013.303.04.452.027.15.072.291.142.429a1.436 1.436 0 0 0 .63.63c.138.07.278.115.43.142.148.027.3.036.45.04l.208.003h20.194l.207-.003c.15-.004.303-.013.452-.04.15-.027.291-.071.428-.141a1.432 1.432 0 0 0 .631-.631c.07-.138.115-.278.141-.43.027-.148.036-.3.04-.45.002-.07.003-.138.003-.208l.001-.246V6.221c0-.07-.002-.138-.004-.207a2.995 2.995 0 0 0-.04-.452 1.446 1.446 0 0 0-1.2-1.201 3.022 3.022 0 0 0-.452-.04 10.448 10.448 0 0 0-.453-.003zm0 .512h19.942c.066 0 .131.002.197.003.115.004.25.01.375.032.109.02.2.05.287.094a.927.927 0 0 1 .407.407.997.997 0 0 1 .094.288c.022.123.028.258.031.374.002.065.003.13.003.197v11.552c0 .065 0 .13-.003.196-.003.115-.009.25-.032.375a.927.927 0 0 1-.5.693 1.002 1.002 0 0 1-.286.094 2.598 2.598 0 0 1-.373.032l-.2.003H1.906c-.066 0-.133-.002-.196-.003a2.61 2.61 0 0 1-.375-.032c-.109-.02-.2-.05-.288-.094a.918.918 0 0 1-.406-.407 1.006 1.006 0 0 1-.094-.288 2.531 2.531 0 0 1-.032-.373 9.588 9.588 0 0 1-.002-.197V6.224c0-.065 0-.131.002-.197.004-.114.01-.248.032-.375.02-.108.05-.199.094-.287a.925.925 0 0 1 .407-.406 1.03 1.03 0 0 1 .287-.094c.125-.022.26-.029.375-.032.065-.002.131-.002.196-.003zm4.71 3.7c-.3.016-.668.199-.88.456-.191.22-.36.58-.316.918.338.03.675-.169.888-.418.205-.258.345-.603.308-.955zm2.207.42v5.493h.852v-1.877h1.18c1.078 0 1.835-.739 1.835-1.812 0-1.07-.742-1.805-1.808-1.805zm.852.719h.982c.739 0 1.161.396 1.161 1.089 0 .692-.422 1.092-1.164 1.092h-.979zm-3.154.3c-.45.01-.83.28-1.05.28-.235 0-.593-.264-.981-.257a1.446 1.446 0 0 0-1.23.747c-.527.908-.139 2.255.374 2.995.249.366.549.769.944.754.373-.014.52-.242.973-.242.454 0 .586.242.98.235.41-.007.667-.366.915-.733.286-.417.403-.82.41-.841-.007-.008-.79-.308-.797-1.209-.008-.754.615-1.113.644-1.135-.352-.52-.9-.578-1.09-.593a1.123 1.123 0 0 0-.092-.002zm8.204.397c-.99 0-1.606.533-1.652 1.256h.777c.072-.358.369-.586.845-.586.502 0 .803.266.803.711v.309l-1.097.064c-.951.054-1.488.484-1.488 1.184 0 .72.548 1.207 1.332 1.207.526 0 1.032-.281 1.264-.727h.019v.659h.788v-2.76c0-.803-.62-1.317-1.591-1.317zm1.94.072l1.446 4.009c0 .003-.073.24-.073.247-.125.41-.33.571-.711.571-.069 0-.206 0-.267-.015v.666c.06.011.267.019.335.019.83 0 1.226-.312 1.568-1.283l1.5-4.214h-.868l-1.012 3.259h-.015l-1.013-3.26zm-1.167 2.189v.316c0 .521-.45.917-1.024.917-.442 0-.731-.228-.731-.579 0-.342.278-.56.769-.593z" />
    </svg>
  ),
  "Google Pay": (
    <svg viewBox="0 0 24 24" className="h-3.5 w-auto" fill="#4285F4" aria-hidden="true">
      <path d="M3.963 7.235A3.963 3.963 0 00.422 9.419a3.963 3.963 0 000 3.559 3.963 3.963 0 003.541 2.184c1.07 0 1.97-.352 2.627-.957.748-.69 1.18-1.71 1.18-2.916a4.722 4.722 0 00-.07-.806H3.964v1.526h2.14a1.835 1.835 0 01-.79 1.205c-.356.241-.814.379-1.35.379-1.034 0-1.911-.697-2.225-1.636a2.375 2.375 0 010-1.517c.314-.94 1.191-1.636 2.225-1.636a2.152 2.152 0 011.52.594l1.132-1.13a3.808 3.808 0 00-2.652-1.033zm6.501.55v6.9h.886V11.89h1.465c.603 0 1.11-.196 1.522-.588a1.911 1.911 0 00.635-1.464 1.92 1.92 0 00-.635-1.456 2.125 2.125 0 00-1.522-.598zm2.427.85a1.156 1.156 0 01.823.365 1.176 1.176 0 010 1.686 1.171 1.171 0 01-.877.357H11.35V8.635h1.487a1.156 1.156 0 01.054 0zm4.124 1.175c-.842 0-1.477.308-1.907.925l.781.491c.288-.417.68-.626 1.175-.626a1.255 1.255 0 01.856.323 1.009 1.009 0 01.366.785v.202c-.34-.193-.774-.289-1.3-.289-.617 0-1.11.145-1.479.434-.37.288-.554.677-.554 1.165a1.476 1.476 0 00.525 1.156c.35.308.785.463 1.305.463.61 0 1.098-.27 1.465-.81h.038v.655h.848v-2.909c0-.61-.19-1.09-.568-1.44-.38-.35-.896-.525-1.551-.525zm2.263.154l1.946 4.422-1.098 2.38h.915L24 9.963h-.965l-1.368 3.391h-.02l-1.406-3.39zm-2.146 2.368c.494 0 .88.11 1.156.33 0 .372-.147.696-.44.973a1.413 1.413 0 01-.997.414 1.081 1.081 0 01-.69-.232.708.708 0 01-.293-.578c0-.257.12-.47.363-.647.24-.173.54-.26.9-.26Z" />
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
        <PaymentBadge label="Apple Pay" />
        <PaymentBadge label="Google Pay" />
      </div>

      <div className="mt-3 grid gap-px overflow-hidden border border-border bg-border text-center text-[11px] font-extrabold sm:grid-cols-2">
        <div className="bg-card px-3 py-3">LIVRAISON SUIVIE OFFERTE — 1 À 3 JOURS OUVRÉS</div>
        <div className="bg-card px-3 py-3">ESSAIE-LE 30 JOURS SANS RISQUE</div>
      </div>
    </section>
  );
}