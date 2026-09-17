import { StoreLogo } from "@/components/product/StoreLogo";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex min-h-20 max-w-[1280px] items-center justify-center px-4 lg:min-h-[92px]">
        <StoreLogo />
      </div>
    </header>
  );
}