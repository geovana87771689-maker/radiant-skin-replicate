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
  qtyLabel: string;
  shortSupport: string;
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
    qtyLabel: "1 Coffret · 2 Sérums",
    shortSupport: "Cure découverte — 1 mois",
    price: 32.99,
    support: "Idéal pour tester les premiers résultats (1 mois).",
    image: productImages[0]!,
  },
  {
    id: "2kits",
    variantId: "54713347244398",
    title: "2 Coffrets (4 Sérums) — Cure Complète Anti-Âge",
    qtyLabel: "2 Coffrets · 4 Sérums",
    shortSupport: "Cure complète — 2 à 3 mois",
    price: 49.99,
    compareAt: 65.98,
    badge: "MEILLEURE VALEUR",
    bestSeller: "MEILLEURE VENTE",
    support: "Recommandé pour des résultats durables (2 à 3 mois).",
    urgency: "Livraison prioritaire offerte",
    popular: true,
    image: "/images/duo-rice-peel-shot-2kits.png",
  },
];

export const product = {
  title: "Duo Rice Peel Shot à l'Acide Hypochloreux",
  subtitle:
    "Sérum exfoliant et lissant visage & corps — Teint uniforme et pores resserrés.",
  price: 32.99,
  reviewCount: 97,
  rating: 4.8,
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
  { name: "Summer", date: "30/08/2026", rating: 5, text: "Livraison très rapide et produit conforme à la description.", verified: true },
  { name: "Amber", date: "01/08/2026", rating: 5, text: "Ça fonctionne, j'en rachèterai !", verified: true },
  { name: "IRINA", date: "21/07/2026", rating: 5, text: "Super produit ! Ma peau a l'air en pleine santé !", verified: true },
  { name: "Camille", date: "12/07/2026", rating: 4, text: "Bon résultat sur le grain de peau, mais il faut être régulière. Au bout de 3 semaines la différence est nette.", verified: true },
  { name: "Adam", date: "24/06/2026", rating: 5, text: "J'adore vraiment ce produit, il m'aide à avoir une belle peau à plus de quarante ans.", verified: true },
  { name: "Laura", date: "13/06/2026", rating: 5, text: "J'adore la façon dont ce peel shot élimine les peaux mortes sur tout mon corps !", verified: true },
  { name: "Nadia", date: "02/06/2026", rating: 5, text: "Les pores de mon nez sont visiblement moins marqués. Texture fraîche et agréable.", verified: true },
  { name: "Sophie", date: "27/05/2026", rating: 4, text: "Très bien pour les bras et les cuisses. J'aurais aimé un flacon un peu plus grand.", verified: true },
  { name: "Laura", date: "19/04/2026", rating: 5, text: "J'adore absolument ce produit. Il aide à éliminer l'accumulation de sébum sur le nez ainsi que les cellules mortes, et laisse le visage tout lisse.", verified: true },
  { name: "Sethrina", date: "10/04/2026", rating: 5, text: "Je me sens bien plus propre après l'avoir utilisé.", verified: false },
  { name: "Ananna", date: "01/04/2026", rating: 5, text: "Rend la peau du corps soyeuse et lumineuse.", verified: true },
  { name: "Élodie", date: "24/03/2026", rating: 5, text: "Ma peau est beaucoup plus douce dès la première utilisation. Le coffret de 2 est le meilleur rapport qualité-prix.", verified: true },
  { name: "Sethrina", date: "15/03/2026", rating: 5, text: "J'adore son efficacité pour exfolier les impuretés sur le corps ! Je le recommande.", verified: true },
  { name: "Marine", date: "08/03/2026", rating: 5, text: "Peau sensible ici : aucune irritation, juste un vrai effet lissant. Je suis conquise.", verified: true },
  { name: "Julie", date: "26/02/2026", rating: 4, text: "Efficace sur les petits boutons dans le dos. L'odeur est neutre, c'est un plus.", verified: true },
  { name: "Chloé", date: "17/02/2026", rating: 5, text: "Résultat visible sur les coudes et les genoux après deux semaines. Je recommande vivement.", verified: true },
  { name: "Inès", date: "05/02/2026", rating: 5, text: "Application rapide, ça pénètre bien et ça ne colle pas. Parfait avant une crème hydratante.", verified: true },
  { name: "Manon", date: "21/01/2026", rating: 3, text: "Bon produit mais les résultats sont progressifs, il faut être patiente. La livraison a été rapide.", verified: true },
  { name: "Aurélie", date: "09/01/2026", rating: 5, text: "Enfin un exfoliant qui n'agresse pas. Mon teint est plus uniforme.", verified: true },
  { name: "Fatou", date: "28/12/2025", rating: 5, text: "Je l'utilise 2 fois par semaine, la peau est nette et lumineuse. J'ai repris la cure complète.", verified: true },
  { name: "Léa", date: "14/12/2025", rating: 5, text: "Très satisfaite, colis bien emballé et effet immédiat de fraîcheur.", verified: true },
  { name: "Sarah", date: "02/12/2025", rating: 4, text: "Bonne exfoliation sans picotements. Je le garde dans ma routine.", verified: true },
  { name: "Hélène", date: "19/11/2025", rating: 5, text: "Ma fille et moi partageons le coffret, on adore toutes les deux.", verified: true },
  { name: "Noémie", date: "05/11/2025", rating: 5, text: "Les rougeurs du corps se sont beaucoup atténuées. Produit vraiment efficace.", verified: true },
];
