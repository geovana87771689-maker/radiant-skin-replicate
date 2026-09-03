import { useState } from "react";
import { product, reviews } from "@/data/product";
import { Stars } from "./Stars";
import { ReviewFormModal } from "./ReviewFormModal";

const distribution = [
  { stars: 5, pct: 100, count: 10 },
  { stars: 4, pct: 0, count: 0 },
  { stars: 3, pct: 0, count: 0 },
  { stars: 2, pct: 0, count: 0 },
  { stars: 1, pct: 0, count: 0 },
];

export function ReviewsSection() {
  const [reviewOpen, setReviewOpen] = useState(false);
  return (
    <section className="bg-muted py-16">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Les avis authentiques de la communauté
        </p>
        <h2 className="mt-3 text-center text-2xl font-bold">Avis clients</h2>

        <div className="mt-10 grid gap-8 rounded-sm bg-background p-8 sm:grid-cols-[200px_1fr]">
          <div className="text-center">
            <div className="text-4xl font-extrabold">{product.rating.toFixed(1)}</div>
            <div className="mt-2 flex justify-center">
              <Stars rating={product.rating} size={16} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Basé sur {product.reviewCount} avis
            </p>
            <button
              onClick={() => setReviewOpen(true)}
              className="mt-4 w-full rounded-sm bg-primary py-2.5 text-xs font-semibold tracking-wide text-primary-foreground uppercase"
            >
              Rédiger un avis
            </button>
          </div>
          <div className="space-y-2">
            {distribution.map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs">
                <span className="w-12 text-muted-foreground">{row.stars} étoiles</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-primary" style={{ width: `${row.pct}%` }} />
                </div>
                <span className="w-10 text-right text-muted-foreground">{row.pct}%</span>
                <span className="w-6 text-right text-muted-foreground">{row.count}</span>
              </div>
            ))}
            <p className="pt-4 text-xs text-muted-foreground">
              <strong className="text-foreground">100%</strong> des clients recommandent ce produit
            </p>
          </div>
        </div>

        <ul className="mt-8 space-y-4">
          {reviews.map((r, i) => (
            <li key={`${r.name}-${i}`} className="rounded-sm bg-background p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-muted text-sm font-bold">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    {r.name}
                    {r.verified && (
                      <span className="rounded-sm bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        Achat vérifié
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground">{r.date}</p>
                </div>
                <div className="ml-auto">
                  <Stars rating={5} />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed">{r.text}</p>
              <p className="mt-3 text-[11px] text-muted-foreground">Cet avis vous a-t-il été utile ? 0 · 0</p>
            </li>
          ))}
        </ul>
      </div>
      <ReviewFormModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
    </section>
  );
}
