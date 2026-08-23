import { DestinationsGrid } from "@/components/sections/destinations-grid";
import { PageHero } from "@/components/layout/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Destinations",
  "Explore top study and visit visa destinations — Australia, USA, UK, Canada, and more."
);

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Destinations"
        accent="Where will you go?"
        subtitle="Choose from top destinations for visit and student visas."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Destinations" }]}
      />
      <DestinationsGrid showHeading={false} />
      <CTABanner />
    </>
  );
}
