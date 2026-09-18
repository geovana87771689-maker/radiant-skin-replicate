import type { CheckoutColor, CheckoutQuantity } from "@/config/checkout";
import cozyBandNoir from "@/assets/cozyband-noir.webp";
import cozyBandGris from "@/assets/cozyband-gris.jpg";

export const PLACEHOLDER_IMAGE = "/images/placeholder.svg";

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export type ColorOption = {
  id: CheckoutColor;
  label: string;
  swatchClass: string;
  images: Array<{ label: string; src?: string }>;
};

export const colors: ColorOption[] = [
  {
    id: "noir",
    label: "Noir",
    swatchClass: "bg-foreground",
    images: [
      { label: "Vue principale — Noir", src: cozyBandNoir },
      { label: "Vue principale — Gris", src: cozyBandGris },
    ],
  },
  {
    id: "gris",
    label: "Gris",
    swatchClass: "bg-muted-foreground",
    images: [
      { label: "Vue principale — Gris", src: cozyBandGris },
      { label: "Vue principale — Noir", src: cozyBandNoir },
    ],
  },
];

export type QuantityOption = {
  quantity: CheckoutQuantity;
  total: number;
  perUnit: number;
  savingsPerUnit?: number;
  popular?: boolean;
};

export const quantities: QuantityOption[] = [
  { quantity: 1, total: 49.9, perUnit: 49.9 },
  { quantity: 2, total: 79.9, perUnit: 39.95, savingsPerUnit: 9.95, popular: true },
  { quantity: 3, total: 105.9, perUnit: 35.3, savingsPerUnit: 14.6 },
  { quantity: 4, total: 129.9, perUnit: 32.48, savingsPerUnit: 17.42 },
];

export const product = {
  title: "CozyBand — Bandeau audio sans fil",
  promise: "\n",
  price: 79.9,
};

export const benefits = [
  "Haut-parleurs ultra-plats intégrés — rien ne dépasse contre l'oreiller",
  "Tissu doux et extensible, lavable (retire le module avant)",
  "Jusqu'à 10 h d'autonomie à volume moyen",
  "Se connecte à n'importe quel appareil Bluetooth",
  "Couvre les yeux : masque et écouteurs en un seul geste",
  "Se replie dans sa pochette, tient dans une poche",
];

export const faq = [
  {
    q: "Est-ce que ça va me serrer la tête ?",
    a: "Non, elle s'adapte à la forme de la tête pour ne pas causer d'inconfort.",
  },
  {
    q: "Est-ce que ça chauffe ou ça gratte la nuit ?",
    a: "Non, absolument pas. Le bandeau est conçu dans un tissu ultra-doux, respirant et hypoallergénique. Il laisse respirer la peau sans retenir la chaleur ni provoquer de démangeaisons, même après plusieurs heures de sommeil.",
  },
  {
    q: "Les haut-parleurs bougent quand je me tourne ?",
    a: "Non, ils restent bien en place. Les haut-parleurs sont maintenus dans des poches intérieures ajustées par l'élasticité du tissu. Vous pouvez vous retourner librement toute la nuit sans qu'ils ne glissent, tout en pouvant les ajuster facilement à la main pour les aligner parfaitement avec vos oreilles.",
  },
  {
    q: "L'autonomie tient toute la nuit ?",
    a: "L'autonomie est de 7 à 10 heures selon le volume d'écoute. Un volume plus élevé peut réduire cette durée.",
  },
  {
    q: "Ça se lave ?",
    a: "Oui. Retire d'abord le module audio amovible. Lave ensuite le bandeau à froid, à la main, puis laisse-le sécher à l'air libre.",
  },
  {
    q: "Livraison, retour, remboursement : comment ça marche ?",
    a: "**Livraison.** Ta commande est préparée sous 24 à 48 h ouvrées, puis expédiée avec suivi complet. Compte 6 à 10 jours ouvrés en France métropolitaine, 7 à 12 jours ouvrés ailleurs en Union européenne. Dès l'expédition tu reçois un e-mail avec ton numéro de suivi et un lien pour suivre le colis en temps réel. La livraison est offerte.\n\n**Retour.** Tu as 30 jours après réception pour demander un retour. L'article doit être non porté, non utilisé, avec ses étiquettes et dans son emballage d'origine. Tu écris à **katelinelizabeth748@outlook.com**, et si le retour est accepté nous t'envoyons une étiquette d'expédition de retour avec les instructions. Tu n'as pas à chercher l'adresse toi-même : l'étiquette te l'apporte. Les articles renvoyés sans demande préalable ne sont pas acceptés.\n\n**Droit de rétractation.** Pour toute commande livrée dans l'Union européenne, tu disposes en plus de 14 jours pour annuler ou retourner ta commande, sans avoir à te justifier.\n\n**Remboursement.** Une fois le retour reçu et inspecté, nous te disons si le remboursement est approuvé. S'il l'est, tu es remboursé automatiquement sur ton moyen de paiement d'origine sous 10 jours ouvrables.",
  },
];