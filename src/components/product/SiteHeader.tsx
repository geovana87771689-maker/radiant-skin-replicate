import { useEffect, useState } from "react";
import { Search, User, ShoppingBag, Menu } from "lucide-react";

const announcements = [
  "Experience Pro-Level Treatment Results with AGE-R",
  "YOU'RE SHOPPING THE OFFICIAL MEDICUBE STORE",
  "Refer Friends, Earn Discounts 🎫 Give $5, Get $5 for Both!",
];

const nav = ["Shop", "Best Sellers", "AGE-R", "Skincare", "Body", "About"];

export function SiteHeader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % announcements.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="bg-primary px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-primary-foreground uppercase">
        {announcements[index]}
      </div>
      <div className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-6 px-4">
          <button className="lg:hidden" aria-label="Menu">
            <Menu className="size-5" />
          </button>
          <a href="/" className="flex items-center">
            <img
              src="/images/logotipo.png"
              alt="medicube K-Beauty Tech"
              className="h-9 w-auto"
              width={120}
              height={40}
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </a>
          <nav className="hidden flex-1 items-center gap-6 lg:flex">
            {nav.map((item) => (
              <a
                key={item}
                href="/"
                className="text-[13px] font-medium tracking-wide uppercase transition-opacity hover:opacity-60"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4 lg:ml-0">
            <button aria-label="Search">
              <Search className="size-5" />
            </button>
            <button aria-label="Account">
              <User className="size-5" />
            </button>
            <button aria-label="Cart" className="relative">
              <ShoppingBag className="size-5" />
              <span className="absolute -top-1.5 -right-2 rounded-full bg-primary px-1.5 text-[10px] leading-4 font-semibold text-primary-foreground">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
