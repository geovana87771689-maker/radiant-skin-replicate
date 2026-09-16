import { useState } from "react";
import { product, reviewDistribution, reviews } from "@/data/product";
import { Stars } from "./Stars";
import { ReviewFormModal } from "./ReviewFormModal";
import { ProductImage } from "./ProductImage";

const PAGE_SIZE = 4;

export function ReviewsSection() {
  const [reviewOpen, setReviewOpen] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shown = reviews.slice(0, visible);
  const remaining = reviews.length - shown.length;
  const formattedReviewCount = new Intl.NumberFormat("fr-FR").format(product.reviewCount);

  return (
    <section className="bg-secondary py-14">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Ils ont transformé leur salon
        </p>
        <h2 className="mt-3 text-center text-2xl font-extrabold">Avis clients</h2>

        <div className="mt-8 grid gap-8 rounded-2xl border border-border bg-card p-8 sm:grid-cols-[200px_1fr]">
          <div className="text-center">
            <div className="text-4xl font-extrabold">{product.rating.toFixed(1)}</div>
            <div className="mt-2 flex justify-center">
              <Stars rating={product.rating} size={16} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Basé sur {formattedReviewCount} avis vérifiés
            </p>
            <button
              onClick={() => setReviewOpen(true)}
              className="mt-4 w-full rounded-full bg-primary py-2.5 text-xs font-semibold tracking-wide text-primary-foreground uppercase"
            >
              Rédiger un avis
            </button>
          </div>
          <div className="space-y-2">
            {reviewDistribution.map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs">
                <span className="w-14 text-muted-foreground">{row.stars} étoiles</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full bg-primary" style={{ width: `${row.pct}%` }} />
                </div>
                <span className="w-10 text-right text-muted-foreground">{row.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-8 space-y-4">
          {shown.map((r, i) => (
            <li
              key={`${r.name}-${i}`}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-bold">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    {r.name}
                    {r.verified && (
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        Achat vérifié
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground">{r.date}</p>
                </div>
                <div className="ml-auto">
                  <Stars rating={r.rating} />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed">{r.text}</p>
              {r.image && (
                <div className="mt-3 w-full max-w-[160px] overflow-hidden rounded-xl">
                  <ProductImage
                    src={r.image}
                    alt={`Photo partagée par ${r.name}`}
                    width={320}
                    height={320}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>

        {remaining > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="rounded-full border border-primary px-6 py-3 text-xs font-semibold tracking-wide text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Voir plus d'avis
            </button>
          </div>
        )}
      </div>
      <ReviewFormModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
    </section>
  );
}
