"use client";

import { getDestinationsByVisaType } from "@/lib/destinations";
import { VisaCountryCard } from "@/components/sections/visa-country-card";
import { FadeIn } from "@/components/motion/fade-in";

type VisaDestinationsGridProps = {
  visaType: "visit" | "student";
};

export function VisaDestinationsGrid({ visaType }: VisaDestinationsGridProps) {
  const destinations = getDestinationsByVisaType(visaType);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <FadeIn key={destination.slug}>
          <VisaCountryCard destination={destination} visaType={visaType} />
        </FadeIn>
      ))}
    </div>
  );
}
