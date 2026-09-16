import { beforeAfterImages, product } from "@/data/product";
import { ProductImage } from "./ProductImage";

export function HeroSection() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="min-w-0">
          <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-4xl">
            {product.headline}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {product.subheadline}
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
              alt="Canapé après la pose de la housse Jasmin"
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
