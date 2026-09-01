import { product } from "@/data/product";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase">
      {children}
    </h2>
  );
}

export function ProductInfoSections() {
  return (
    <>
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle>Overview</SectionTitle>
          <h3 className="mt-4 text-center text-2xl font-bold">{product.title}</h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">{product.subtitle}</p>
          <div className="mt-8 space-y-4 text-sm leading-relaxed">
            {product.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle>Clinical Test</SectionTitle>
          <h3 className="mt-4 text-center text-xl font-bold">
            Fewer blackheads &amp; whiteheads appearance
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {product.clinical.map((c) => (
              <div key={c.label} className="rounded-sm bg-background px-6 py-8 text-center">
                <div className="text-3xl font-extrabold">{c.value}</div>
                <p className="mt-2 text-xs text-muted-foreground">{c.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] text-muted-foreground">
            {product.clinicalNote}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle>How To Use</SectionTitle>
          <p className="mt-4 text-center text-sm font-semibold">Shake well before use!</p>
          <ol className="mt-8 space-y-4">
            {product.howToUse.map((step, i) => (
              <li key={step} className="flex gap-4 text-sm">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="pt-1 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 space-y-1 text-[11px] text-muted-foreground">
            {product.howToUseNotes.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle>FAQ</SectionTitle>
          <Accordion type="single" collapsible className="mt-8">
            {product.faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-sm font-semibold">
                  Q. {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="ingredients">
              <AccordionTrigger className="text-left text-sm font-semibold">
                Full Ingredients
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                {product.ingredients}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
