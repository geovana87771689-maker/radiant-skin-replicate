import { toast } from "sonner";

const columns = [
  {
    title: "Aide",
    links: ["Nous contacter", "Livraison", "Retours & remboursements", "Suivre ma commande"],
  },
  { title: "À propos", links: ["Notre histoire", "AGE-R", "Ingrédients", "Blog"] },
  {
    title: "Mentions légales",
    links: [
      "Politique de confidentialité",
      "Conditions générales de vente",
      "Reconnaître un faux produit",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <p className="text-xl font-extrabold tracking-[0.2em] uppercase">medicube</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Soins coréens inspirés par la dermatologie, pour une peau visiblement plus nette et plus
            saine.
          </p>
          <form
            className="mt-5 flex max-w-sm gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Merci pour votre inscription !");
            }}
          >
            <input
              type="email"
              required
              placeholder="Adresse e-mail"
              className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
            />
            <button className="rounded-sm bg-primary px-4 text-xs font-semibold tracking-wide text-primary-foreground uppercase">
              S'inscrire
            </button>
          </form>
          <div className="mt-5 flex gap-4 text-xs text-muted-foreground">
            <a href="/">Instagram</a>
            <a href="/">TikTok</a>
            <a href="/">YouTube</a>
            <a href="/">Facebook</a>
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
        © {new Date().getFullYear()} MEDICUBE. Tous droits réservés.
      </p>
    </footer>
  );
}
