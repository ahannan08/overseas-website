"use client";

import { getDestinationsByVisaType } from "@/lib/destinations";
import { VisaCountryCard } from "@/components/sections/visa-country-card";
import { FadeIn } from "@/components/motion/fade-in";

export function VisitVisaDestinations() {
  const destinations = getDestinationsByVisaType("visit");

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <FadeIn key={destination.slug}>
          <VisaCountryCard destination={destination} visaType="visit" />
        </FadeIn>
      ))}
    </div>
  );
}
