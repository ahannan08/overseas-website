"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/content/destinations";
import { CheckEligibilityButton } from "@/components/forms/check-eligibility-button";
import { cn } from "@/lib/utils";

type VisaCountryCardProps = {
  destination: Destination;
  visaType: "visit" | "student";
};

export function VisaCountryCard({
  destination,
  visaType,
}: VisaCountryCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-label={`${destination.name} ${visaType} visa details`}
      onClick={() => setExpanded((value) => !value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded((value) => !value);
        }
      }}
      className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-white/15 shadow-lg sm:aspect-[3/4]"
    >
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-xl shadow-sm">
            {destination.flag}
          </span>
          <h3 className="text-lg font-bold text-white sm:text-xl">{destination.name}</h3>
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-3 bg-white/95 p-4 backdrop-blur-sm transition-transform duration-300 sm:p-5",
          expanded
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none translate-y-full",
          "md:group-hover:pointer-events-auto md:group-hover:translate-y-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="line-clamp-3 text-sm leading-relaxed text-light-fg/80">
          {destination.overview}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <CheckEligibilityButton
            defaultVisaType={visaType}
            size="sm"
            onClick={() => setExpanded(false)}
          />
          <Link
            href={`/destinations/${destination.slug}`}
            className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold text-accent transition hover:gap-1.5"
          >
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
