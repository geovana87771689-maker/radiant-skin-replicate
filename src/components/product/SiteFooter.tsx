import logoAsset from "@/assets/logo-lepure-maison.png.asset.json";
import { CardBrands } from "./CardBrands";

const columns = [
  {
    title: "Aide",
    links: ["Nous contacter", "Livraison & suivi", "Retours & remboursements", "Guide des tailles"],
  },
  {
    title: "Boutique",
    links: ["Housses de canapé", "Bâtons fixateurs", "Housses de fauteuil", "Avis clients"],
  },
  {
    title: "Mentions légales",
    links: [
      "Politique de confidentialité",
      "Conditions générales de vente",
      "Politique de cookies",
      "Mentions légales",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-14">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <p className="text-xl font-extrabold tracking-[0.2em] uppercase">Elastic Touch</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Des housses extensibles premium pour redonner vie à votre salon en
            quelques minutes.
          </p>
          <div className="mt-5 max-w-xs">
            <CardBrands />
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase">{col.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="/" className="hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-[1280px] px-4 text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} Elastic Touch. Tous droits réservés. Paiement
        sécurisé SSL.
      </p>
    </footer>
  );
}
