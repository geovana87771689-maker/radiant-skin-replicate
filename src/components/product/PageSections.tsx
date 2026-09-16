import { Lock, RefreshCw, ShieldCheck, Truck, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { benefits, faq, features, installSteps, product, sizeGuide, stockPromo } from "@/data/product";
import { ProductImage } from "./ProductImage";
const demoChenille = "/images/product/demo-chenille.mp4";

export function TrustBar() {
  const items = [
    { Icon: Truck, label: "Expédition sous 24 heures" },
    { Icon: Lock, label: "Paiement 100% sécurisé et crypté" },
    { Icon: RefreshCw, label: "30 jours satisfait ou remboursé" },
    { Icon: Zap, label: "Installation rapide, sans outil" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-4 px-4 py-6 lg:grid-cols-4 lg:px-8">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="size-5 shrink-0 text-primary" />
            <span className="text-[11px] font-semibold leading-snug text-muted-foreground sm:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="bg-secondary py-14">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold">
          4 piliers de protection et d'exclusivité
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          {product.intro}
        </p>
        <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={demoChenilleAsset.url}
            alt="Démonstration : pose de la housse de canapé"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>
                {b.emoji}
              </span>
              <h3 className="mt-3 text-base font-extrabold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="border-t border-border bg-card py-14">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="flex flex-col gap-10">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-12 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="overflow-hidden rounded-2xl border border-border bg-secondary">
                <ProductImage
                  src={f.image}
                  alt={f.title}
                  ratio="aspect-[4/3]"
                  eager={i === 0}
                />
              </figure>
              <div className="min-w-0">
                <span className="text-[11px] font-extrabold tracking-wide text-primary uppercase">
                  {f.eyebrow}
                </span>
                <h3 className="mt-2 text-xl font-extrabold sm:text-2xl">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StockPromoSection() {
  return (
    <section className="bg-secondary py-14">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border-2 border-primary/30 bg-card p-8 text-center">
          <span className="text-[11px] font-extrabold tracking-wide text-primary uppercase">
            {stockPromo.title}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {stockPromo.text}
          </p>
        </div>
      </div>
    </section>
  );
}

export function InstallGuide() {
  return (
    <section className="border-t border-border bg-card py-14">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold">
          Installation en 3 étapes, en moins de 2 minutes
        </h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-3">
          {installSteps.map((step, i) => (
            <li key={step.title} className="overflow-hidden rounded-2xl border border-border">
              <ProductImage
                src={step.image}
                alt={`Étape ${i + 1} : ${step.title}`}
                ratio="aspect-[4/3]"
              />
              <div className="p-5">
                <span className="text-[11px] font-extrabold tracking-wide text-primary uppercase">
                  Étape {i + 1}
                </span>
                <h3 className="mt-1 text-base font-extrabold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <caption className="bg-secondary px-4 py-3 text-xs font-extrabold tracking-wide uppercase">
              Guide des tailles — mesurez l'assise d'un accoudoir à l'autre
            </caption>
            <thead className="bg-secondary text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-2 font-bold">Modèle</th>
                <th className="px-4 py-2 font-bold">Longueur d'assise</th>
                <th className="px-4 py-2 font-bold">Dimensions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {sizeGuide.map((row) => (
                <tr key={row.size}>
                  <td className="px-4 py-3 font-semibold">{row.size}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.seat}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.dims}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function GuaranteeSection() {
  return (
    <section className="bg-secondary py-14">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border-2 border-primary/30 bg-card p-8 text-center">
          <ShieldCheck className="mx-auto size-10 text-primary" />
          <h2 className="mt-4 text-xl font-extrabold">Garantie blindée 30 jours</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Essayez-la dans votre salon. Si elle ne convient pas ou si le résultat ne
            vous plaît pas, nous vous remboursons 100% de votre commande, sans
            question.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="border-t border-border bg-card py-14">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center text-2xl font-extrabold">Questions fréquentes</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-sm font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
