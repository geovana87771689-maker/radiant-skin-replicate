import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { BuyBox } from "@/components/product/BuyBox";
import { DescriptionSection, FaqSection, GuaranteeSection } from "@/components/product/PageSections";
import { ProductGallery } from "@/components/product/ProductGallery";
import { SiteFooter } from "@/components/product/SiteFooter";
import { SiteHeader } from "@/components/product/SiteHeader";
import { StickyCta } from "@/components/product/StickyCta";
import type { CheckoutColor, CheckoutQuantity } from "@/config/checkout";
import { product } from "@/data/product";
import { captureTrackingParams } from "@/lib/tracking";
import { trackEvent } from "@/lib/pixel";

const title = "CozyBand — Bandeau audio sans fil";
const description = "Bandeau doux avec haut-parleurs Bluetooth ultra-plats et masque pour les yeux, conçu pour écouter sans pression contre l'oreiller.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://radiant-skin-replicate.lovable.app/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://radiant-skin-replicate.lovable.app/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: product.title, description, brand: { "@type": "Brand", name: "CozyBand" }, offers: { "@type": "AggregateOffer", lowPrice: "49.90", highPrice: "129.90", priceCurrency: "EUR", availability: "https://schema.org/InStock" } }) }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const [color, setColor] = useState<CheckoutColor>("noir");
  const [quantity, setQuantity] = useState<CheckoutQuantity>(2);

  useEffect(() => {
    captureTrackingParams();
    trackEvent("ViewContent", { content_name: product.title, content_type: "product", currency: "EUR", value: product.price });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main>
        <div className="mx-auto grid max-w-[1120px] items-start lg:grid-cols-[1fr_1fr] lg:gap-8 lg:px-8 lg:py-10">
          <ProductGallery selectedColorId={color} />
          <BuyBox selectedColorId={color} onSelectColor={setColor} selectedQuantity={quantity} onSelectQuantity={setQuantity} />
        </div>
        <DescriptionSection />
        <FaqSection />
        <GuaranteeSection />
      </main>
      <SiteFooter />
      <div className="h-16 lg:hidden" />
      <StickyCta selectedColorId={color} selectedQuantity={quantity} />
      <Toaster />
    </div>
  );
}