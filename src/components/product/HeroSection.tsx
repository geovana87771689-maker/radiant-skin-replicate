import { Button } from "@/components/ui/button";
import { beforeAfterImages, product } from "@/data/product";
import { trackEvent } from "@/lib/pixel";
import { ProductImage } from "./ProductImage";
import { Stars } from "./Stars";

export function HeroSection() {
  const reviewCountFmt = new Intl.NumberFormat("fr-FR").format(product.reviewCount);

  const scrollToBuy = () => {
    trackEvent("HeroCtaClick", { cta_source: "hero" });
    document.getElementById("acheter")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="min-w-0">
          <p className="mb-3 inline-flex rounded-full bg-accent px-3 py-1 text-[11px] font-extrabold tracking-wide text-primary uppercase">
            Nouveau · Chenille Elastic Touch
          </p>
          <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-4xl">
            {product.headline}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {product.subheadline}
          </p>

          <div className="mt-5 flex items-center gap-2">
            <Stars rating={5} size={16} />
            <span className="text-xs font-bold text-foreground">
              {product.rating.toFixed(1)}/5 · +{reviewCountFmt} salons transformés
            </span>
          </div>

          <Button
            onClick={scrollToBuy}
            className="mt-6 h-14 w-full rounded-full px-8 text-sm font-extrabold uppercase shadow-lg sm:w-auto"
          >
            Obtenir ma housse avec réduction
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Livraison offerte partout en France · Expédition sous 24/48h
          </p>
        </div>

        <div className="min-w-0 grid grid-cols-2 gap-3">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <ProductImage
              src={beforeAfterImages.before}
              alt="Canapé avant la pose de la housse"
              ratio="aspect-[3/4]"
              eager
            />
            <figcaption className="px-3 py-2 text-center text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
              Avant
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-primary bg-card ring-1 ring-primary">
            <ProductImage
              src={beforeAfterImages.after}
              alt="Canapé après la pose de la housse Elastic Touch"
              ratio="aspect-[3/4]"
              eager
            />
            <figcaption className="px-3 py-2 text-center text-[11px] font-bold tracking-wide text-primary uppercase">
              Après
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
