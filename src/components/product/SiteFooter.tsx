import { toast } from "sonner";

const columns = [
  { title: "Help", links: ["Contact Us", "Shipping Policy", "Return & Refund", "Track Order"] },
  { title: "About", links: ["Our Story", "AGE-R", "Ingredients", "Blog"] },
  { title: "Policies", links: ["Privacy Policy", "Terms of Service", "Fake Product Guide"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <p className="text-xl font-extrabold tracking-[0.2em] uppercase">medicube</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Dermatologist-inspired Korean skincare for clearer, healthier-looking skin.
          </p>
          <form
            className="mt-5 flex max-w-sm gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thanks for subscribing!");
            }}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
            />
            <button className="rounded-sm bg-primary px-4 text-xs font-semibold tracking-wide text-primary-foreground uppercase">
              Join
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
        © {new Date().getFullYear()} MEDICUBE US. All rights reserved.
      </p>
    </footer>
  );
}
