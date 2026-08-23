import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-surface to-background pb-24">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold tracking-wider">LIBERTY</h3>
            <p className="mt-1 font-serif text-sm font-bold italic text-accent-light">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-muted transition hover:border-accent hover:text-accent"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-muted transition hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Overseas
            </h4>
            <ul className="space-y-2">
              {footerNav.overseas.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-accent">
              Academy
            </h4>
            <ul className="space-y-2">
              {footerNav.academy.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Company
            </h4>
            <ul className="space-y-2">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-accent">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={siteConfig.phoneHref} className="hover:text-foreground">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={siteConfig.emailHref} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted">
              Hours: {siteConfig.hours}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
