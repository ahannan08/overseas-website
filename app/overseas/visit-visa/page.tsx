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

      <section className="bg-light-bg py-24">
        <Container>
          <SectionHeading
            title="Available Destinations"
            accent="Visit visa countries"
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.countries.map((country) => (
              <FadeIn key={country}>
                <div className="rounded-xl border border-light-fg/10 bg-white p-6 text-center">
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
