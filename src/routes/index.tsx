import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/product/SiteHeader";
import { SiteFooter } from "@/components/product/SiteFooter";
import { HeroSection } from "@/components/product/HeroSection";
import {
  BenefitsSection,
  FaqSection,
  GuaranteeSection,
  InstallGuide,
  TrustBar,
} from "@/components/product/PageSections";
import { ProductGallery } from "@/components/product/ProductGallery";
import { BuyBox } from "@/components/product/BuyBox";
import { ReviewsSection } from "@/components/product/ReviewsSection";
import { StickyCta } from "@/components/product/StickyCta";
import { PRICE, faq, product } from "@/data/product";
import { captureTrackingParams } from "@/lib/tracking";
import { trackEvent } from "@/lib/pixel";

const title = "Housse de Canapé Elastic Touch | Ajustement Universel";
const description =
  "Housse de canapé extensible en chenille : transformez votre canapé en moins de 2 minutes. Anti-taches, anti-poils, lavable en machine. Livraison offerte en France.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://radiant-skin-replicate.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://radiant-skin-replicate.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.title,
          description,
          brand: { "@type": "Brand", name: "Elastic Touch" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
          },
          offers: {
            "@type": "Offer",
            price: PRICE,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [sizeId, setSizeId] = useState<"2p" | "3p" | "4p">("3p");
  const [colorId, setColorId] = useState<"noir" | "vert" | "gris">("noir");
  const [bumpSelected, setBumpSelected] = useState(false);

  useEffect(() => {
    captureTrackingParams();
    trackEvent("ViewContent", {
      content_name: product.title,
      content_type: "product",
      currency: "EUR",
      value: PRICE,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />

        <div className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-[1280px] gap-4 px-4 py-4 sm:gap-8 sm:py-10 lg:grid-cols-[1.04fr_.96fr] lg:gap-12 lg:px-8">
            <ProductGallery selectedColorId={colorId} />
            <BuyBox
              selectedSizeId={sizeId}
              onSelectSize={setSizeId}
              selectedColorId={colorId}
              onSelectColor={setColorId}
              bumpSelected={bumpSelected}
              onToggleBump={setBumpSelected}
            />
          </div>
        </div>

        <BenefitsSection />
        <InstallGuide />
        <ReviewsSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <div className="h-20 lg:hidden" />
      <StickyCta
        selectedSizeId={sizeId}
        selectedColorId={colorId}
        bumpSelected={bumpSelected}
      />
      <Toaster />
    </div>
  );
}
