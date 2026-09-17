import { useState } from "react";
import { Star } from "lucide-react";
import av1 from "@/assets/av1.jpg.asset.json";
import av2 from "@/assets/av2.jpg.asset.json";
import av3 from "@/assets/av3.jpg.asset.json";
import av32 from "@/assets/av3-2.jpg.asset.json";
import av4 from "@/assets/av4.jpg.asset.json";
import av5 from "@/assets/av5.jpg.asset.json";
import av6 from "@/assets/av6.jpg.asset.json";
import av7 from "@/assets/av7.jpg.asset.json";
import av8 from "@/assets/av8.jpg.asset.json";
import av9 from "@/assets/av9.jpg.asset.json";
import av10 from "@/assets/av10.jpg.asset.json";
import av11 from "@/assets/av11.jpg.asset.json";
import av12 from "@/assets/av12.jpg.asset.json";
import av13 from "@/assets/av13.jpg.asset.json";
import av14 from "@/assets/av14.jpg.asset.json";
import av15 from "@/assets/av15.jpg.asset.json";
import av16 from "@/assets/av16.jpg.asset.json";
import av17 from "@/assets/av17.jpg.asset.json";
import av18 from "@/assets/av18.jpg.asset.json";
import av19 from "@/assets/av19.jpg.asset.json";

type Review = {
  image: string;
  extraImage?: string;
  name: string;
  date: string;
  rating: number;
  text: string;
};

// Avis clients repris de la marque CozyBand, traduits en français.
// Les photos sont fournies par le client, dans l'ordre av1 → av9.
const reviews: Review[] = [
  {
    image: av1.url,
    name: "Grace S.",
    date: "24/03/2024",
    rating: 5,
    text: "J'écoute de la musique et des podcasts au lit juste avant de dormir, donc c'est exactement ce qu'il me fallait, et c'est tellement doux à porter !",
  },
  {
    image: av2.url,
    name: "Brandon H.",
    date: "27/02/2025",
    rating: 5,
    text: "Très confortable. La connexion Bluetooth est impeccable, je n'ai jamais eu de mal à l'appairer. J'ai écouté plus de 3 heures d'affilée sans aucun souci.",
  },
  {
    image: av3.url,
    extraImage: av32.url,
    name: "Callum H.",
    date: "19/02/2024",
    rating: 5,
    text: "C'est exactement ce qui est annoncé. Bien ajusté, confortable, et ça ne me fait pas mal aux oreilles comme mes écouteurs.",
  },
  {
    image: av4.url,
    name: "Danielle C.",
    date: "22/11/2024",
    rating: 5,
    text: "J'adore mon bandeau ! Je travaille de nuit alors je l'utilise beaucoup pour mes siestes de journée. Je l'ai aussi pris parce que mon copain déteste le bruit blanc — le meilleur achat !",
  },
  {
    image: av5.url,
    name: "Amy B.",
    date: "18/09/2024",
    rating: 5,
    text: "Je l'utilise à vélo et le soir au lit. Plus besoin de m'inquiéter que les écouteurs tombent. Très confortable, il se recharge bien et le son est vraiment agréable.",
  },
  {
    image: av6.url,
    name: "Carol B.",
    date: "17/05/2025",
    rating: 5,
    text: "J'aime le fait qu'il soit vraiment doux ! Je peux m'endormir avec ma méditation ou ma musique, sans écouteurs inconfortables. Et il me sert aussi de masque pour les yeux.",
  },
  {
    image: av7.url,
    name: "Angela K.",
    date: "08/05/2025",
    rating: 5,
    text: "J'adore mon bandeau ! Je mets ma musique préférée et je fais mon yoga les yeux couverts, une expérience très agréable.",
  },
  {
    image: av8.url,
    name: "David J.",
    date: "28/08/2026",
    rating: 5,
    text: "Je l'utilise tous les soirs. Léger, discret, et le module se retire en une seconde quand je veux laver le bandeau.",
  },
  {
    image: av9.url,
    name: "Isabelle V.",
    date: "12/07/2026",
    rating: 5,
    text: "J'adore ce bandeau. Il est confortable et de meilleure qualité que ceux d'autres marques que j'avais achetés auparavant.",
  },
  {
    image: av10.url,
    name: "Martine D.",
    date: "03/04/2026",
    rating: 5,
    text: "Parfait pour mes podcasts du soir. Je le porte aussi avec mes lunettes sans aucun problème, il reste bien en place.",
  },
  {
    image: av11.url,
    name: "Jasmine R.",
    date: "21/12/2025",
    rating: 5,
    text: "Je l'ai eu en cadeau et je ne m'en passe plus. Le son est clair et le bandeau est très doux, même porté plusieurs heures.",
  },
  {
    image: av12.url,
    name: "Léa M.",
    date: "14/06/2026",
    rating: 5,
    text: "Je l'utilise pour mes séances de yoga et d'étirements. Il ne bouge pas, même la tête en bas, et la musique me suit partout.",
  },
  {
    image: av13.url,
    name: "Patrick L.",
    date: "30/05/2026",
    rating: 5,
    text: "Les boutons sur le devant sont très pratiques, je change de piste sans sortir mon téléphone. Simple et efficace.",
  },
  {
    image: av14.url,
    name: "Sonia P.",
    date: "09/01/2026",
    rating: 5,
    text: "Le tissu est vraiment doux et le module se retire facilement pour le lavage. Je le recommande à toutes les personnes qui écoutent quelque chose au calme.",
  },
  {
    image: av15.url,
    name: "Denise F.",
    date: "25/02/2026",
    rating: 5,
    text: "Très confortable, je l'oublie complètement une fois en place. La batterie tient largement toute la soirée.",
  },
  {
    image: av16.url,
    name: "Chantal G.",
    date: "11/08/2026",
    rating: 5,
    text: "Je m'en sers aussi comme masque pour les yeux avec ma méditation guidée. Un seul accessoire pour les deux usages, c'est parfait.",
  },
  {
    image: av17.url,
    name: "Évelyne T.",
    date: "19/05/2026",
    rating: 5,
    text: "Je cours avec chaque semaine : il tient bien, les écouteurs ne tombent plus et je garde les oreilles au chaud. Excellent produit.",
  },
  {
    image: av18.url,
    name: "Karine B.",
    date: "06/09/2026",
    rating: 5,
    text: "Discret et léger, je le porte dans la maison pour mes podcasts. Plus personne n'est dérangé et je suis libre de mes mouvements.",
  },
  {
    image: av19.url,
    name: "Marc A.",
    date: "02/09/2026",
    rating: 5,
    text: "Compatible avec mes lunettes sans appuyer. Le tissu chiné est joli et le bandeau reste bien en place toute la nuit.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5" fill={index < rating ? "currentColor" : "none"} strokeWidth={1.5} />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, 4);

  return (
    <section id="avis" className="border-t border-border px-4 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-xl font-semibold tracking-tight lg:text-2xl">Avis clients</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Avis et photos publiés par les clients de la marque CozyBand.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((review) => (
            <article key={review.name} className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="relative aspect-square w-full bg-muted">
                <img
                  src={review.image}
                  alt={`Photo publiée par ${review.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {review.extraImage ? (
                  <span className="absolute bottom-2 right-2 rounded bg-foreground/85 px-1.5 py-0.5 text-[11px] font-medium text-background">
                    +1
                  </span>
                ) : null}
              </div>
              <div className="space-y-2 p-4">
                <Stars rating={review.rating} />
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-semibold">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{review.text}</p>
              </div>
            </article>
          ))}
        </div>

        {!showAll ? (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="mt-6 w-full rounded-md border border-foreground px-4 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-foreground hover:text-background"
          >
            VOIR PLUS D'AVIS
          </button>
        ) : null}
      </div>
    </section>
  );
}
