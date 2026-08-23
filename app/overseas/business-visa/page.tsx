import { visaTypes } from "@/content/overseas";
import { additionalServices } from "@/content/site";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata } from "@/lib/utils";

const page = visaTypes.business;

export const metadata = createPageMetadata(page.title, page.description);

export default function BusinessVisaPage() {
  return (
    <>
      <PageHero
        title={page.title}
        accent="Business travel"
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
            title="Global Coverage"
            accent="All countries"
            subtitle="Business visa assistance available for destinations worldwide."
            light
          />
          <FadeIn>
            <div className="mx-auto max-w-xl rounded-2xl border border-light-fg/10 bg-white p-10 text-center">
              <p className="text-3xl font-bold text-light-fg">All Countries</p>
              <p className="mt-2 text-light-fg/70">
                Contact us for business visa requirements for your destination.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading title="Support Services" accent="Complete assistance" />
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {additionalServices.map((service) => (
              <FadeIn key={service}>
                <div className="glass flex items-center gap-3 rounded-lg px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm">{service}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
