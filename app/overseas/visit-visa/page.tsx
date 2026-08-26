import Image from "next/image";
import { visaTypes } from "@/content/overseas";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { VisitVisaDestinations } from "@/components/sections/visit-visa-destinations";
import { createPageMetadata } from "@/lib/utils";

const page = visaTypes.visit;

export const metadata = createPageMetadata(page.title, page.description);

export default function VisitVisaPage() {
  return (
    <>
      <PageHero
        title={page.title}
        accent="Explore the world"
        subtitle={page.description}
        image={page.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Overseas", href: "/overseas" },
          { label: page.title },
        ]}
      />

      <section className="relative overflow-hidden py-24">
        <Image
          src="/images/backgrounds/green2.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" />

        <Container className="relative">
          <SectionHeading
            title="Available Destinations"
            accent="Visit visa countries"
            subtitle="Hover or tap a country to see details and check your eligibility."
          />
          <VisitVisaDestinations />
        </Container>
      </section>
    </>
  );
}
