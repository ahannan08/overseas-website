import { visaTypes, visaProcess } from "@/content/overseas";
import { additionalServices } from "@/content/site";
import { PageHero } from "@/components/layout/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessTimeline } from "@/components/sections/founders-section";
import { Container, SectionHeading } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Overseas Visa Services",
  "Visit visa, student visa, and business visa assistance for Australia, USA, UK, Canada, and more."
);

const services = Object.values(visaTypes).map((v) => ({
  title: v.title,
  description: v.description,
  href: v.href,
  image: v.image,
}));

export default function OverseasPage() {
  return (
    <>
      <PageHero
        title="Overseas Visa Services"
        accent="Your global journey starts here"
        subtitle="Expert visa consultancy for visit, student, and business travel worldwide."
        image={visaTypes.visit.image}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Overseas" }]}
      />

      <ServicesGrid
        title="Visa Categories"
        accent="Choose your path"
        services={services}
      />

      <section className="bg-light-bg py-24">
        <Container>
          <SectionHeading
            title="Additional Services"
            accent="Complete support"
            subtitle="Beyond visa processing — we support every aspect of your journey."
            light
          />
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {additionalServices.map((service) => (
              <FadeIn key={service}>
                <div className="flex items-center gap-3 rounded-lg border border-light-fg/10 bg-white px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm text-light-fg">{service}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="Our Process" accent="How it works" />
        </Container>
        <ProcessTimeline steps={visaProcess} />
      </section>
    </>
  );
}
