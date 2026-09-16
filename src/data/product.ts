/**
 * Housse de canapé "Elastic Touch" — données produit.
 *
 * Toutes les images produit sont servies avec la page depuis /public/images/product.
 * Ajoutez les prochaines images dans ce même dossier et référencez leur chemin ici.
 */

import housseAvantAsset from "@/assets/housse-avant.png.asset.json";

const houssePrincipale = "/images/product/housse-principale.png";
const housseNoir = "/images/product/housse-noir.jpg";
const housseVert = "/images/product/housse-vert.webp";
const housseGris = "/images/product/housse-gris.webp";
const fixateurs = "/images/product/fixateurs.png";
const housseLavage = "/images/product/housse-lavage.png";
const housseAntiOdeur = "/images/product/housse-anti-odeur.png";
const housseUsageQuotidien = "/images/product/housse-usage-quotidien.png";
const housseNettoyage = "/images/product/housse-nettoyage.png";
const avis1 = "/images/product/avis-1.jpg";
const avis2 = "/images/product/avis-2.jpg";
const avis3 = "/images/product/avis-3.jpg";
const avis4 = "/images/product/avis-4.jpg";
const avis5 = "/images/product/avis-5.jpg";
const housseAvant = housseAvantAsset.url;

export const PLACEHOLDER_IMAGE = "/images/placeholder.svg";

/** Visuels réellement disponibles (CDN) — aucun chemin fantôme. */
export const productImages = [
  houssePrincipale,
  housseNoir,
  housseVert,
  housseGris,
  housseLavage,
  housseAntiOdeur,
];

export const beforeAfterImages = {
  before: housseAvant,
  after: housseVert,
};

/** Domaine du checkout Shopify (panier permanent). */
export const CHECKOUT_BASE = "https://checkout.lepuremaison.fr";

/** Prix du Pack Complet ajouté à la formule 2. */
export const PACK_PRICE = 29.9;
export const PACK_VALUE = 32.8;
/** À remplacer par l'ID de variante réel du Pack Complet. */
export const PACK_VARIANT_ID = "00000000000000";
export const PACK_IMAGE = fixateurs;

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
    label: "Kit 1 Housses",
    price: 69.9,
  },
  {
    id: "complet",
    label: "Kit 2 Housses + 4 attaches pour housses",
    price: 74.9,
    detail: "4 sangles anti-glisse + 2 plateaux accoudoir",
    note: "",
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
  qualifier: string;
  dims: string;
  hint: string;
  price: number;
  compareAt: number;
};

export const sizes: SizeOption[] = [
  {
    id: "2p",
    label: "Canapé 2 Places",
    qualifier: "Moyen",
    dims: "180 x 230 cm",
    hint: "Assise de 145 à 185 cm",
    price: 79.9,
    compareAt: 139.9,
  },
  {
    id: "3p",
    label: "Canapé 3 Places",
    qualifier: "Grand",
    dims: "180 x 300 cm",
    hint: "Assise de 185 à 230 cm",
    price: 89.9,
    compareAt: 159.9,
  },
  {
    id: "4p",
    label: "Canapé 4 Places",
    qualifier: "Famille / XXL",
    dims: "180 x 340 cm",
    hint: "Assise de 230 à 300 cm",
    price: 99.9,
    compareAt: 179.9,
  },
];

export type ColorOption = {
  id: "noir" | "vert" | "gris";
  label: string;
  swatch: string;
  image: string;
};

export const colors: ColorOption[] = [
  { id: "noir", label: "Noir", swatch: "#1f1d1b", image: houssePrincipale },
  { id: "vert", label: "Vert", swatch: "#39584a", image: housseVert },
  { id: "gris", label: "Gris", swatch: "#9a968f", image: housseGris },
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

export const PRICE = 79.9;
export const COMPARE_AT = 139.9;

export const product = {
  title: "Housse de Canapé Jasmin — Ajustement Universel + 4 Cadeaux",
  headline:
    "Votre salon en ordre, même dans le chaos du quotidien.",
  subheadline:
    "Vous ressentez une véritable angoisse chaque fois qu'une boisson se renverse, que des miettes s'accumulent ou que votre animal monte sur le canapé les pattes sales. La tranquillité de votre foyer est écrasée par la crainte constante de voir votre mobilier onéreux abîmé en un instant.",
  intro:
    "La Housse en Chenille de Luxo crée une barrière matérielle d'ingénierie avancée qui neutralise les impuretés avant qu'elles n'atteignent le tissu. La trame technique protège des taches et des mauvaises odeurs, pour profiter de vos proches et de vos animaux sans devenir prisonnier du ménage.",
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
    emoji: "✨",
    title: "Hygiène express",
    text: "Structure en fibre pratique qui permet de retirer les saletés en quelques instants.",
  },
  {
    emoji: "🛡️",
    title: "Bouclier anti-odeurs",
    text: "Ingénierie qui empêche les odeurs biologiques de s'incruster et préserve la fraîcheur de la pièce.",
  },
  {
    emoji: "💧",
    title: "Barrière imperméabilisante",
    text: "Des filaments qui repoussent les liquides et évitent que les salissures laissent des marques définitives.",
  },
  {
    emoji: "🔁",
    title: "Résistance durable",
    text: "Conçue pour supporter des lavages répétés sans compromettre la couleur ni le toucher.",
  },
];

export const features = [
  {
    eyebrow: "Protection olfactive",
    title: "Système anti-odeur unique",
    text: "Il est gênant de recevoir un invité et de lire sur son visage que votre pièce principale sent cet « air confiné » incrusté dans le tissu. Vous nettoyez, vous vaporisez des parfums d'ambiance, mais la mauvaise odeur semble faire partie intégrante du mobilier. À l'inverse des housses ordinaires, le Chenille de Luxo bénéficie d'un revêtement protecteur qui empêche la sueur et les micro-organismes responsables des odeurs de s'installer dans les fibres. Vous éliminez les résidus rapidement et conservez chez vous ce parfum d'hygiène totale.",
    image: housseAntiOdeur,
  },
  {
    eyebrow: "Entretien",
    title: "Nettoyage facile",
    text: "Vous avez peut-être renoncé à avoir un beau salon car nettoyer le canapé est un travail irréalisable et coûteux. Voir les marques accumulées depuis des mois vous donne une sensation continue de négligence et de lassitude. La Housse Jasmin crée une surface isolante et très fonctionnelle où la saleté ne parvient pas à « s'accrocher ». C'est une défense de haut niveau, revêtue d'un ornement premium, conçue pour supporter un usage intensif sans sacrifier votre sérénité.",
    image: housseNettoyage,
  },
  {
    eyebrow: "Lavage en machine",
    title: "Du canapé, direct à la machine",
    text: "Le malheur de voir une marque de nourriture ou une tache sur un canapé neuf est cruel, car vous savez que le nettoyage professionnel coûte cher. L'entretien à domicile prend du temps et retrouve rarement l'aspect d'origine. Notre trame en Chenille résiste parfaitement aux lavages intensifs en machine. Une tache ? Direction la machine et, en quelques instants, votre canapé est comme neuf pour recevoir vos invités avec l'aspect d'un article sorti du magasin.",
    image: housseLavage,
  },
  {
    eyebrow: "Esthétique durable",
    title: "Une qualité qui masque l'usage quotidien",
    text: "Les tissus ordinaires montrent le moindre signe d'utilisation et donnent à la pièce un air chaotique en un instant. Vous vous retrouvez prisonnier d'un rangement perpétuel pour préserver un minimum d'harmonie. Le motif Jasmin masque les légères saletés et les traces d'usage entre deux nettoyages. Votre pièce garde son aspect de catalogue plus longtemps et reste toujours accueillante.",
    image: housseUsageQuotidien,
  },
];

export const stockPromo = {
  title: "Promo renouvellement de stock",
  text: "Nous proposons un lot de qualité supérieure en quantité limitée pour le marché national. Ce n'est pas tous les jours que l'on trouve un article qui combine défense réelle contre les taches, technologie anti-odeur et un style valorisant votre intérieur. La demande est très élevée et les coloris faciles à assortir partent rapidement de l'entrepôt. Si vous voulez gagner la bataille contre la saleté et garder un canapé impeccable, c'est le moment. Assurez votre Kit PAYEZ 1, RECEVEZ 2 et rejoignez ceux qui profitent d'un intérieur parfait sans effort.",
};

export const installSteps = [
  {
    title: "Emboîtez les coins",
    text: "Placez la housse sur le dossier et emboîtez chaque coin élastiqué.",
    image: housseNoir,
  },
  {
    title: "Tendez sur l'assise",
    text: "Tirez le tissu vers l'avant pour couvrir l'assise et les accoudoirs.",
    image: housseVert,
  },
  {
    title: "Bloquez avec les bâtons",
    text: "Enfoncez les bâtons mousse dans les interstices pour un rendu lisse.",
    image: fixateurs,
  },
];

export const sizeGuide = [
  { size: "2 Places", seat: "145 – 185 cm", dims: "180 x 230 cm" },
  { size: "3 Places", seat: "185 – 230 cm", dims: "180 x 300 cm" },
  { size: "4 Places", seat: "230 – 300 cm", dims: "180 x 340 cm" },
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
    text: "Mon canapé gris était griffé par le chat et taché de café. La housse Jasmin l'a transformé en 2 minutes, on dirait un canapé neuf. Le chenille est épais et très doux.",
    verified: true,
    image: avis1,
  },
  {
    name: "Karim B.",
    date: "28/08/2026",
    rating: 5,
    text: "Avec un chien qui monte sur le canapé tous les jours, c'était mission impossible. La housse ne bouge pas, les poils ne s'incrustent pas et un coup d'aspirateur suffit.",
    verified: true,
    image: avis2,
  },
  {
    name: "Élodie R.",
    date: "21/08/2026",
    rating: 5,
    text: "Parfait pour mon canapé d'angle. Les attaches maintiennent tout en place, aucune ride même avec les enfants qui sautent dessus. Et mon chien l'a adopté immédiatement !",
    verified: true,
    image: avis3,
  },
  {
    name: "Patrick L.",
    date: "14/08/2026",
    rating: 4,
    text: "Le terracotta donne un vrai coup de neuf au salon. J'ai pris la taille au-dessus comme conseillé, c'est parfait. Un peu de patience pour bien tendre la première fois.",
    verified: true,
    image: avis4,
  },
  {
    name: "Nadia F.",
    date: "05/08/2026",
    rating: 5,
    text: "Lavée en machine deux fois, aucune déformation ni décoloration. Fini les miettes coincées dans le canapé : je secoue, je passe un coup d'éponge, c'est propre.",
    verified: true,
    image: avis5,
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
    text: "Verre de vin renversé dimanche : le liquide est resté en surface, un essuyage et c'était réglé. Le tissu ne peluche pas et l'installation se fait seule, sans difficulté.",
    verified: true,
  },
  {
    name: "Hugo P.",
    date: "09/07/2026",
    rating: 4,
    text: "Bonne qualité pour le prix. J'ai pris le kit avec les 4 attaches, c'est indispensable sur un canapé profond pour que rien ne glisse.",
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
