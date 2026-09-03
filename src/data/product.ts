export const productImages = [
  "/images/duo-rice-peel-shot-v2.jpg",
  "https://medicube.us/cdn/shop/files/00_43ae12cc-101f-477e-a4c8-6944dce6f4e2.jpg?v=1770188425&width=1200",
  "https://medicube.us/cdn/shop/files/01_802e4e48-5987-4965-b4f8-f1a76265607a.jpg?v=1770188425&width=1200",
  "https://medicube.us/cdn/shop/files/02_721e6205-5b24-432a-bec8-3b57415e15c4.jpg?v=1770188425&width=1200",
  "https://medicube.us/cdn/shop/files/03_9fa1bde0-550e-45d0-9b7c-61dea16aff76.jpg?v=1770188425&width=1200",
  "https://medicube.us/cdn/shop/files/04_8c133ad0-6a1d-4627-8003-e798e575c2b5.jpg?v=1770188425&width=1200",
  "https://medicube.us/cdn/shop/files/05_b6c1cb94-5a1b-4317-8a2e-747e1c6889d0.jpg?v=1770188425&width=1200",
  "https://medicube.us/cdn/shop/files/06_8d70c34b-cad2-4e03-ad3d-6f941daf9ff9.jpg?v=1770188425&width=1200",
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);

export type Variant = {
  id: "1kit" | "2kits";
  variantId: string;
  title: string;
  price: number;
  compareAt?: number;
  badge?: string;
  support: string;
  urgency?: string;
  popular?: boolean;
  image: string;
};

export const variants: Variant[] = [
  {
    id: "1kit",
    variantId: "54701770703214",
    title: "1 Coffret (2 Sérums) — Cure Découverte",
    price: 32.99,
    support: "Idéal pour tester les premiers résultats (1 mois).",
    image: productImages[0],
  },
  {
    id: "2kits",
    variantId: "54713347244398",
    title: "2 Coffrets (4 Sérums) — Cure Complète Anti-Âge",
    price: 49.99,
    compareAt: 65.98,
    badge: "MEILLEURE VALEUR",
    support: "Recommandé pour des résultats durables (2 à 3 mois).",
    urgency: "+ Livraison Prioritaire Gratuite",
    popular: true,
    image: "/images/duo-rice-peel-shot-2kits.png",
  },
];

export const product = {
  title:
    "Duo Rice Peel Shot à l'Acide Hypochloreux | Visage & Corps | Double sérum exfoliant pour éliminer les cellules mortes et affiner l'apparence des pores | À l'extrait de riz, acide hypochloreux et panthénol | Hydratation & peau plus lisse",
  subtitle:
    "Sérum exfoliant corps doux pour les cellules mortes, les zones rugueuses et le grain de peau irrégulier",
  price: 32.99,
  reviewCount: 10,
  rating: 5.0,
  skinType: "Mixte, Grasse, Sensible",
  skinConcerns:
    "Peau à imperfections, Marques d'acné corporelle, Rougeurs du corps, Peau granuleuse, Excès de sébum, Cellules mortes",
  keyIngredients: "Acide hypochloreux, Extrait de riz, Hyaluronate de sodium, Panthénol",
  overview: [
    "Ce sérum à l'acide hypochloreux et à l'extrait de riz élimine en douceur les cellules mortes et les impuretés tout en apaisant et rafraîchissant les peaux à imperfections.",
    "L'HOCl est reconnu pour ses propriétés apaisantes et purifiantes : il apaise les peaux stressées tout en agissant sur l'excès de sébum et les impuretés des pores, pour un teint plus net et plus sain en apparence.",
    "Spécialement formulé avec une concentration deux fois plus élevée en acide hypochloreux pour améliorer l'aspect des peaux rugueuses et granuleuses.",
    "Sa texture aqueuse et rafraîchissante s'étale facilement sur les grandes zones du corps et pénètre rapidement.",
  ],
  clinical: [
    { value: "-88,98 %", label: "de cellules mortes sur les coudes" },
    { value: "-81,13 %", label: "de cellules mortes sur les jambes" },
    { value: "-94,85 %", label: "d'impuretés dans les pores" },
  ],
  clinicalNote:
    "*Test clinique réalisé par le « Global Institute of Dermatological Sciences ». Les résultats peuvent varier selon les types de peau.",
  howToUse: [
    "Appliquer sur peau sèche et masser délicatement les zones rugueuses ou irrégulières.",
    "Lorsque les impuretés et les cellules mortes se décollent, rincer abondamment à l'eau tiède.",
    "Après utilisation, appliquer une crème ou un lait corporel pour un résultat optimal.",
  ],
  howToUseNotes: [
    "*Utiliser 2 fois par semaine pour des résultats optimaux.",
    "*Un léger résidu peut se former autour de l'embout : cela n'altère en rien la qualité du produit.",
  ],
  faq: [
    {
      q: "Quels sont les principaux bienfaits du Body Peel Shot à l'acide hypochloreux ?",
      a: "Il exfolie en douceur les cellules mortes et élimine les impuretés tout en aidant à apaiser les peaux à imperfections, à affiner le grain de peau irrégulier et à maintenir l'hydratation pour une peau visiblement plus lisse et plus nette.",
    },
    {
      q: "Que fait l'acide hypochloreux (HOCl) ?",
      a: "L'HOCl est reconnu pour ses propriétés apaisantes et purifiantes : il aide à calmer les peaux stressées tout en prenant soin de l'excès de sébum et des impuretés. *Les informations ci-dessus concernent uniquement les caractéristiques de la matière première.",
    },
    {
      q: "Aide-t-il à lisser le grain de peau du corps ?",
      a: "Oui. Il élimine délicatement les cellules mortes et les accumulations pour affiner le grain de peau irrégulier et laisser la peau du corps plus douce et plus lisse.",
    },
    {
      q: "Agit-il sur les imperfections corporelles ?",
      a: "Il est conçu pour prendre soin des peaux du corps à imperfections en aidant à éliminer l'excès de sébum et les impuretés des pores, tout en apportant une action apaisante pour un aspect plus net.",
    },
    {
      q: "Où puis-je utiliser le Body Peel Shot ?",
      a: "Il peut s'utiliser sur les zones du corps sujettes aux rugosités, à l'accumulation de cellules mortes, à l'excès de sébum ou aux imperfections, comme le dos, le torse, les bras et les jambes.",
    },
  ],
  ingredients:
    "WATER, ALCOHOL DENAT., CARBOMER, QUATERNIUM-60, PROPYLENE GLYCOL, 1,2-HEXANEDIOL, DIPROPYLENE GLYCOL, CETRIMONIUM METHOSULFATE, CAPRYLYL METHICONE, CAPRYLYL GLYCOL, POLYGLYCERYL-10 OLEATE, ETHYLHEXYLGLYCERIN, CHARCOAL POWDER, HYPOCHLOROUS ACID(20PPM), GLUCOSE, CHLORELLA VULGARIS EXTRACT, BUTYLENE GLYCOL, FRUCTOSE, FRUCTOOLIGOSACCHARIDES, TOCOPHEROL, SODIUM HYALURONATE CROSSPOLYMER, CYNANCHUM ATRATUM EXTRACT, XYLOSE, POLYGLUTAMIC ACID, ALTHAEA ROSEA FLOWER EXTRACT, CERAMIDE NP, SODIUM CHLORIDE, ALLANTOIN, PANTHENOL, ORYZA SATIVA (RICE) BRAN WATER, MELALEUCA ALTERNIFOLIA (TEA TREE) LEAF EXTRACT, PROTEASE, ORYZA SATIVA (RICE) EXTRACT, CENTELLA ASIATICA EXTRACT, HYDROLYZED HYALURONIC ACID",
};

export const reviews = [
  { name: "Summer", date: "30/08/2026", text: "Livraison très rapide.", verified: true },
  { name: "Amber", date: "01/08/2026", text: "Ça fonctionne, j'en rachèterai !", verified: true },
  {
    name: "IRINA",
    date: "21/07/2026",
    text: "Super produit ! Ma peau a l'air en pleine santé !",
    verified: true,
  },
  {
    name: "Adam",
    date: "24/06/2026",
    text: "J'adore vraiment ce produit, il m'aide à avoir une belle peau à plus de quarante ans.",
    verified: true,
  },
  {
    name: "Laura",
    date: "13/06/2026",
    text: "J'adore la façon dont ce body peel shot élimine les peaux mortes sur tout mon corps !",
    verified: true,
  },
  {
    name: "Laura",
    date: "19/04/2026",
    text: "J'adore absolument ce produit. Medicube ne déçoit jamais. Il aide à éliminer l'accumulation de sébum sur le nez ainsi que les cellules mortes, et laisse le visage tout lisse. Dire que je suis obsédée est un euphémisme.",
    verified: true,
  },
  {
    name: "Sethrina",
    date: "10/04/2026",
    text: "Je me sens bien plus propre après l'avoir utilisé.",
    verified: false,
    title: "Body Peel Shot à l'acide hypochloreux et au riz",
  },
  {
    name: "Ananna",
    date: "01/04/2026",
    text: "Rend la peau du corps soyeuse et lumineuse.",
    verified: true,
  },
  {
    name: "Sethrina",
    date: "15/03/2026",
    text: "J'adore son efficacité pour exfolier les impuretés sur le corps ! Je le recommande.",
    verified: true,
  },
  {
    name: "Sethrina",
    date: "15/03/2026",
    text: "J'adore son efficacité pour exfolier les impuretés sur le corps ! Je le recommande.",
    verified: true,
  },
];
