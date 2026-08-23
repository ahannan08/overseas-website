import { Globe, Plane } from "lucide-react";
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

const services = [
  { ...visaTypes.visit, icon: "plane" as const },
  { ...visaTypes.student, icon: "graduation" as const },
  { ...visaTypes.business, icon: "briefcase" as const },
];

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
        variant="icon"
      />

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-light-bg via-[#e8ecf1] to-primary/20" />
        <Plane className="pointer-events-none absolute -left-6 top-16 h-32 w-32 text-primary/10" />
        <Globe className="pointer-events-none absolute -right-4 bottom-12 h-28 w-28 text-accent/15" />

        <Container className="relative">
          <SectionHeading
            title="Additional Services"
            accent="Complete support"
            subtitle="Beyond visa processing — we support every aspect of your journey."
            light
          />
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {additionalServices.map((service) => (
              <FadeIn key={service}>
                <div className="flex items-center gap-3 rounded-xl border border-light-fg/10 bg-white px-4 py-3.5 text-light-fg shadow-sm transition hover:border-accent/30 hover:shadow-md">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <ProcessTimeline
        steps={visaProcess}
        light
        withIcons
        title="Our Process"
        accent="How it works"
      />
    </>
  );
}
