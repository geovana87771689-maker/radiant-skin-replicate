import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { colors } from "@/data/product";
import type { CheckoutColor } from "@/config/checkout";

export function ProductGallery({ selectedColorId }: { selectedColorId: CheckoutColor }) {
  const color = colors.find((item) => item.id === selectedColorId) ?? colors[0];
  const [active, setActive] = useState(0);
  const scroller = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActive(0);
    scroller.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [selectedColorId]);

  if (!color) return null;

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(index, color.images.length - 1));
    setActive(next);
    scroller.current?.children.item(next)?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section aria-label="Galerie produit" className="relative min-w-0">
      <div
        ref={scroller}
        onScroll={(event) => {
          const element = event.currentTarget;
          if (element.clientWidth > 0) setActive(Math.round(element.scrollLeft / element.clientWidth));
        }}
        className="scrollbar-none flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
      >
        {color.images.map((label, index) => (
          <div key={label} className="aspect-square w-full shrink-0 snap-start bg-muted p-5 sm:p-8">
            <div className="flex h-full flex-col items-center justify-center border border-dashed border-muted-foreground bg-secondary text-center">
              <ImageIcon className="size-10 text-muted-foreground" strokeWidth={1.25} />
              <strong className="mt-4 text-sm tracking-wide text-foreground">IMAGE À REMPLACER</strong>
              <span className="mt-1 text-xs text-muted-foreground">{label}</span>
              <span className="mt-4 text-[10px] uppercase text-muted-foreground">Emplacement {index + 1} sur 3</span>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" size="icon" type="button" aria-label="Image précédente" onClick={() => goTo(active - 1)} disabled={active === 0} className="absolute left-3 top-1/2 size-9 -translate-y-1/2 rounded-full">
        <ChevronLeft />
      </Button>
      <Button variant="outline" size="icon" type="button" aria-label="Image suivante" onClick={() => goTo(active + 1)} disabled={active === color.images.length - 1} className="absolute right-3 top-1/2 size-9 -translate-y-1/2 rounded-full">
        <ChevronRight />
      </Button>

      <div className="mt-3 flex justify-center gap-2" aria-label={`Image ${active + 1} sur ${color.images.length}`}>
        {color.images.map((label, index) => (
          <Button key={label} variant="ghost" size="icon" type="button" aria-label={`Afficher l'image ${index + 1}`} onClick={() => goTo(index)} className="size-5 rounded-full p-1">
            <span className={`block size-2 rounded-full ${active === index ? "bg-foreground" : "bg-border"}`} />
          </Button>
        ))}
      </div>
    </section>
  );
}