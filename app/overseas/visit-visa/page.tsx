import Image from "next/image";
import { visaTypes } from "@/content/overseas";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
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
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.countries.map((country) => (
              <FadeIn key={country}>
                <div className="rounded-xl border border-white/15 bg-white/95 p-6 text-center shadow-sm backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-light-fg">{country}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
