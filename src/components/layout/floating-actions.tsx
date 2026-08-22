"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";

const actions = [
  {
    label: "WhatsApp",
    href: siteConfig.whatsappHref,
    icon: MessageCircle,
    className: "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/30",
    external: true,
  },
  {
    label: "Call",
    href: siteConfig.phoneHref,
    icon: Phone,
    className:
      "border border-white/30 bg-surface text-foreground hover:bg-white hover:text-background shadow-lg",
    external: false,
  },
] as const;

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {actions.map((action) => {
        const Icon = action.icon;
        const content = (
          <>
            <Icon className="h-5 w-5 shrink-0" />
            <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100 sm:inline sm:max-w-none sm:opacity-100">
              {action.label}
            </span>
          </>
        );

        const className = `group flex h-12 items-center gap-2 rounded-full px-3 transition-all hover:scale-105 sm:h-12 sm:px-4 ${action.className}`;

        if (action.external) {
          return (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
              aria-label={action.label}
            >
              {content}
            </a>
          );
        }

        return (
          <a key={action.label} href={action.href} className={className} aria-label={action.label}>
            {content}
          </a>
        );
      })}
    </div>
  );
}
