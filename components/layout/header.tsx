"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CheckEligibilityButton } from "@/components/forms/check-eligibility-button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-6",
          scrolled
            ? "border border-light-fg/10 bg-white/95 shadow-lg shadow-black/5 backdrop-blur-md"
            : "border border-transparent bg-transparent"
        )}
      >
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/lib-logo-1.png"
            alt="Liberty Overseas"
            width={556}
            height={156}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-accent",
                pathname === item.href
                  ? "text-accent"
                  : scrolled
                    ? "text-light-fg/80"
                    : "text-foreground/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={cn(scrolled && "text-light-fg hover:bg-light-fg/5 hover:text-accent")}
          >
            <Link href="/faq">FAQ</Link>
          </Button>
          <CheckEligibilityButton size="sm" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className={cn(scrolled && "text-light-fg hover:bg-light-fg/5")}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col gap-2">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-white/5",
                    pathname === item.href ? "text-accent" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="ghost" className="justify-start px-4" asChild>
                <Link href="/faq" onClick={() => setOpen(false)}>
                  FAQ
                </Link>
              </Button>
              <CheckEligibilityButton
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
