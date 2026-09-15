/**
 * Housse de canapé "Elastic Touch" — données produit.
 *
 * Les chemins d'images sont des placeholders : déposez les visuels officiels
 * dans /public/images/ avec exactement ces noms pour qu'ils s'affichent.
 */

import housseNoir from "@/assets/housse-noir.png.asset.json";
import housseVert from "@/assets/housse-vert.png.asset.json";
import housseGris from "@/assets/housse-gris.jpg.asset.json";
import fixateurs from "@/assets/fixateurs.png.asset.json";

export const PLACEHOLDER_IMAGE = "/images/placeholder.svg";

export const productImages = [
  "/images/housse-hero-1.jpg",
  "/images/housse-hero-2.jpg",
  "/images/housse-hero-3.jpg",
  "/images/housse-hero-4.jpg",
  "/images/housse-installation.jpg",
];

export const beforeAfterImages = {
  before: "/images/housse-avant.jpg",
  after: "/images/housse-apres.jpg",
};

/** Domaine du checkout Shopify (panier permanent). */
export const CHECKOUT_BASE = "https://checkout.vittacore.fr";

/** Prix du Pack Complet ajouté à la formule 2. */
export const PACK_PRICE = 29.9;
export const PACK_VALUE = 32.8;
/** À remplacer par l'ID de variante réel du Pack Complet. */
export const PACK_VARIANT_ID = "00000000000000";
export const PACK_IMAGE = fixateurs.url;

export type Formule = {
  id: "simple" | "complet";
  label: string;
  price: number;
  detail?: string;
  note?: string;
  badge?: string;
};

export const formules: Formule[] = [
  {
    id: "simple",
    label: "Kit 2 Housses",
    price: 69.9,
  },
  {
    id: "complet",
    label: "Kit 2 Housses + Pack Complet",
    price: 99.8,
    detail: "4 sangles anti-glisse + 2 plateaux accoudoir",
    note: "Valeur 32,80 € — inclus pour 29,90 €",
    badge: "⚡ Choisi par 98% des clients",
  },
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export type SizeOption = {
  id: "2p" | "3p" | "4p";
  label: string;
  dims: string;
  hint: string;
};

export const sizes: SizeOption[] = [
  {
    id: "2p",
    label: "Canapé 2 Places",
    dims: "Moyen — 180 x 230 cm",
    hint: "Assise de 145 à 185 cm",
  },
  {
    id: "3p",
    label: "Canapé 3 Places",
    dims: "Grand — 180 x 300 cm",
    hint: "Assise de 185 à 230 cm",
  },
  {
    id: "4p",
    label: "Canapé 4 Places",
    dims: "Famille / XXL — 180 x 340 cm",
    hint: "Assise de 230 à 300 cm",
  },
];

export type ColorOption = {
  id: "noir" | "vert" | "gris";
  label: string;
  swatch: string;
  image: string;
};

export const colors: ColorOption[] = [
  { id: "noir", label: "Noir", swatch: "#1f1d1b", image: housseNoir.url },
  { id: "vert", label: "Vert", swatch: "#39584a", image: housseVert.url },
  { id: "gris", label: "Gris", swatch: "#9a968f", image: housseGris.url },
];

/** Matrice taille + couleur -> ID de variante Shopify. */
export const variantMatrix: Record<string, string> = {
  "2p-noir": "55025988567406",
  "2p-vert": "55025988600174",
  "2p-gris": "55025988632942",
  "3p-noir": "55025988665710",
  "3p-vert": "55025988698478",
  "3p-gris": "55025988731246",
  "4p-noir": "55025988764014",
  "4p-vert": "55025988796782",
  "4p-gris": "55025988829550",
};

export const getVariantId = (sizeId: string, colorId: string) =>
  variantMatrix[`${sizeId}-${colorId}`] ?? variantMatrix["2p-noir"]!;

export const PRICE = 69.9;
export const COMPARE_AT = 129.9;

export const product = {
  title: "Housse de Canapé Elastic Touch — Ajustement Universel",
  headline:
    "Transformez votre vieux canapé en canapé neuf en moins de 2 minutes — sans dépenser des milliers d'euros en tapisserie.",
  subheadline:
    "Le tissu à technologie Spandex UltraFit s'adapte parfaitement à tous les modèles, protège des poils d'animaux et des taches, et donne une nouvelle allure à votre salon instantanément.",
  price: PRICE,
  compareAt: COMPARE_AT,
  rating: 4.9,
  reviewCount: 3480,
};

export const trustBadges = [
  { icon: "truck", label: "Envoi avec numéro de suivi" },
  { icon: "lock", label: "Paiement 100% sécurisé et crypté" },
  { icon: "refresh", label: "30 jours satisfait ou remboursé" },
  { icon: "zap", label: "Installation rapide, sans outil" },
];

export const benefits = [
  {
    emoji: "🛋️",
    title: "Masquez les imperfections",
    text: "Accrocs, tissu délavé et taches disparaissent instantanément sous la housse.",
  },
  {
    emoji: "🐾",
    title: "L'amie des animaux",
    text: "Protège le canapé des griffes, des poils et des salissures du quotidien.",
  },
  {
    emoji: "💧",
    title: "Lavage facile",
    text: "Une tache ? Retirez la housse et lavez-la directement en machine.",
  },
];

export const installSteps = [
  {
    title: "Emboîtez les coins",
    text: "Placez la housse sur le dossier et emboîtez chaque coin élastiqué.",
    image: "/images/etape-1.jpg",
  },
  {
    title: "Tendez sur l'assise",
    text: "Tirez le tissu vers l'avant pour couvrir l'assise et les accoudoirs.",
    image: "/images/etape-2.jpg",
  },
  {
    title: "Bloquez avec les bâtons",
    text: "Enfoncez les bâtons mousse dans les interstices pour un rendu lisse.",
    image: "/images/etape-3.jpg",
  },
];

export const sizeGuide = [
  { size: "2 Places (Moyen)", seat: "145 – 185 cm", dims: "180 x 230 cm" },
  { size: "3 Places (Grand)", seat: "185 – 230 cm", dims: "180 x 300 cm" },
  { size: "4 Places (Famille / XXL)", seat: "230 – 300 cm", dims: "180 x 340 cm" },
];

export const faq = [
  {
    q: "Est-ce que ça convient à un canapé d'angle ou convertible ?",
    a: "Oui. Le tissu extensible épouse les canapés droits, convertibles et relax. Pour un canapé d'angle, comptez une housse par section (méridienne incluse) et choisissez la taille selon la longueur d'assise de chaque partie.",
  },
  {
    q: "Comment savoir quelle taille choisir ?",
    a: "Mesurez la longueur de l'assise d'un accoudoir à l'autre. Jusqu'à 185 cm : 2 places. De 185 à 230 cm : 3 places. De 230 à 300 cm : 4 places (Famille / XXL).",
  },
  {
    q: "Le tissu glisse-t-il quand on s'assoit ?",
    a: "Les élastiques maintiennent la housse en place. Pour un rendu totalement lisse et sans plis, les bâtons fixateurs antidérapants bloquent le tissu au fond des interstices : la housse ne bouge plus de la journée.",
  },
  {
    q: "Peut-on la laver en machine ?",
    a: "Oui, en machine à 30°C, cycle délicat, sans javel. Séchage à l'air libre. Le tissu chenille garde sa tenue et sa couleur lavage après lavage.",
  },
  {
    q: "Quel est le délai de livraison et comment suivre ma commande ?",
    a: "Expédition sous 24/48h et livraison en 4 à 8 jours ouvrés en France. Un numéro de suivi vous est envoyé par e-mail dès l'expédition.",
  },
];

export type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
  verified: boolean;
  image?: string;
};

export const reviews: Review[] = [
  {
    name: "Sandrine M.",
    date: "02/09/2026",
    rating: 5,
    text: "Mon canapé avait 11 ans et était griffé par le chat. En 2 minutes il a l'air neuf. Le tissu est épais et doux, rien à voir avec les housses bas de gamme.",
    verified: true,
    image: "/images/avis-1.jpg",
  },
  {
    name: "Karim B.",
    date: "28/08/2026",
    rating: 5,
    text: "Les bâtons fixateurs changent tout : aucune ride, la housse ne bouge pas même avec les enfants qui sautent dessus.",
    verified: true,
    image: "/images/avis-2.jpg",
  },
  {
    name: "Élodie R.",
    date: "21/08/2026",
    rating: 5,
    text: "Couleur verte magnifique, très fidèle aux photos. Livraison en 5 jours avec suivi.",
    verified: true,
  },
  {
    name: "Patrick L.",
    date: "14/08/2026",
    rating: 4,
    text: "Très bon produit. J'ai pris la taille au-dessus comme conseillé, c'est parfait. Un peu de patience pour bien tendre la première fois.",
    verified: true,
  },
  {
    name: "Nadia F.",
    date: "05/08/2026",
    rating: 5,
    text: "Lavée en machine deux fois, aucune déformation ni décoloration. Je recommande vraiment.",
    verified: true,
  },
  {
    name: "Julien T.",
    date: "27/07/2026",
    rating: 5,
    text: "Salon transformé pour moins de 70 €. Mes invités pensent que j'ai racheté un canapé.",
    verified: true,
  },
  {
    name: "Marie-Claire D.",
    date: "18/07/2026",
    rating: 5,
    text: "Le gris est très élégant et le tissu ne peluche pas. Installation faite seule, sans difficulté.",
    verified: true,
  },
  {
    name: "Hugo P.",
    date: "09/07/2026",
    rating: 4,
    text: "Bonne qualité pour le prix. J'ai ajouté le kit de bâtons, c'est indispensable sur un canapé profond.",
    verified: true,
  },
];

export const reviewDistribution = [
  { stars: 5, pct: 88 },
  { stars: 4, pct: 9 },
  { stars: 3, pct: 3 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];
