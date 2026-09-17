import { ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/data/product";
import cozyBandUsages from "@/assets/cozyband-usages.webp.asset.json";

export function DescriptionSection() {
  return (
    <section className="border-t border-border bg-card py-14">
      <div className="mx-auto max-w-3xl px-4">
        <div className="space-y-8 text-base leading-relaxed text-foreground">
          <div><h2 className="text-xl font-extrabold">Tu écoutais déjà quelque chose pour t'endormir.</h2><p className="mt-3 text-muted-foreground">Une méditation, un podcast, un bruit blanc. Le problème n'a jamais été le contenu — c'était l'écouteur. Il appuie sur l'oreille dès que tu te mets sur le côté. Tu le repositionnes. Tu le retrouves dans les draps le lendemain matin.</p></div>
          <img
            src={cozyBandUsages.url}
            alt="Utilisations du bandeau audio CozyBand au repos, en méditation et pendant une activité physique"
            className="aspect-square w-full object-cover"
            loading="lazy"
          />
          <div><h2 className="text-xl font-extrabold">CozyBand règle ça d'une seule façon : il n'y a rien à mettre dans l'oreille.</h2><p className="mt-3 text-muted-foreground">Les haut-parleurs sont plats et cousus à l'intérieur du bandeau, à hauteur des oreilles. Tu poses la tête sur l'oreiller, tu te tournes autant que tu veux — le son reste, rien ne bouge, rien n'appuie. Le bandeau couvre aussi les yeux : tu n'as plus besoin d'un masque en plus.</p></div>
          <div><h2 className="text-xl font-extrabold">Ce que tu reçois :</h2><p className="mt-3 text-muted-foreground">le bandeau, le câble de charge USB, la pochette de rangement et la notice. Le module audio se retire en une seconde pour laver le bandeau à froid.</p></div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="border-t border-border bg-secondary py-14">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-xs font-bold uppercase text-muted-foreground">Questions fréquentes</p>
        <h2 className="mt-2 text-2xl font-extrabold">Les réponses, sans détour.</h2>
        <Accordion type="single" collapsible className="mt-7 border-t border-border">
          {faq.map((item, index) => (
            <AccordionItem key={item.q} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-sm font-bold hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function GuaranteeSection() {
  return (
    <section className="border-t border-border bg-card py-14">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <ShieldCheck className="mx-auto size-9 text-foreground" strokeWidth={1.5} />
        <h2 className="mt-4 text-2xl font-extrabold">Satisfait ou remboursé — 30 jours</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">Essaie CozyBand pendant 30 nuits. Si le bandeau te serre, s'il chauffe, si tu ne l'utilises pas — tu le renvoies et tu es remboursé. Pas de formulaire compliqué, pas de question piège.</p>
      </div>
    </section>
  );
}