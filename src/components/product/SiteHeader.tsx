import { useEffect, useState } from "react";

const announcements = [
  "Livraison offerte sur toutes les commandes",
  "VOUS ÊTES SUR LA BOUTIQUE OFFICIELLE MEDICUBE",
  "Parrainez vos amis 🎫 5 € offerts pour vous et pour eux !",
];

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
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-center px-4">
          <a href="/" className="flex items-center" aria-label="medicube">
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
        </div>
      </div>
    </header>
  );
}
