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
    ],
  },
  {
    id: "gris",
    label: "Gris",
    swatchClass: "bg-muted-foreground",
    images: [
      { label: "Vue principale — Gris", src: cozyBandGris },
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
  promise: "Tu te tournes. Le podcast continue. Rien n'appuie.",
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
    a: "Le bandeau mesure À COMPLÉTER cm au repos et À COMPLÉTER cm une fois étiré. Si la taille ne convient pas, tu peux demander un échange selon notre politique : À COMPLÉTER.",
  },
  {
    q: "Est-ce que ça chauffe ou ça gratte la nuit ?",
    a: "La composition exacte du tissu est : À COMPLÉTER. Nous indiquons cette information clairement afin que tu puisses vérifier si la matière te convient avant de commander.",
  },
  {
    q: "Les haut-parleurs bougent quand je me tourne ?",
    a: "Chaque haut-parleur est maintenu dans une poche intérieure : À COMPLÉTER. Il reste positionné à hauteur de l'oreille et peut être ajusté si nécessaire.",
  },
  {
    q: "L'autonomie tient toute la nuit ?",
    a: "L'autonomie est de 7 à 10 heures selon le volume d'écoute. Un volume plus élevé peut réduire cette durée.",
  },
  {
    q: "Ça se lave ?",
    a: "Oui. Retire d'abord le module audio amovible : À COMPLÉTER. Lave ensuite le bandeau à froid, à la main, puis laisse-le sécher à l'air libre.",
  },
  {
    q: "D'où vient le produit et comment je le renvoie ?",
    a: "Origine du produit : À COMPLÉTER. Délai de livraison réel : [DÉLAI À CONFIRMER] JOURS. Politique de retour : À COMPLÉTER. Adresse de retour : À COMPLÉTER.",
  },
];