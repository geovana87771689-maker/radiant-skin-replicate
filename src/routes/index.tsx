import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/product/SiteHeader";
import { SiteFooter } from "@/components/product/SiteFooter";
import { ProductGallery } from "@/components/product/ProductGallery";
import { BuyBox } from "@/components/product/BuyBox";
import { ProductInfoSections } from "@/components/product/ProductInfoSections";
import { ReviewsSection } from "@/components/product/ReviewsSection";
import { product, productImages } from "@/data/product";

const title = "Hypochlorous Acid Rice Body Peel Shot | MEDICUBE US";
const description =
  "Gentle body exfoliating serum with Hypochlorous Acid and Rice Extract that removes dead skin cells, impurities and rough texture.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: productImages[0] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: productImages[0] },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.title,
          image: productImages,
          description,
          brand: { "@type": "Brand", name: "medicube" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
          },
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery />
          <BuyBox />
        </div>
        <ProductInfoSections />
        <ReviewsSection />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
