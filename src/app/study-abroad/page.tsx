import { studyAbroadJourney, studyAbroadSections } from "@/content/study-abroad";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { LeadForm } from "@/components/forms/lead-form";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Study Abroad",
  "Complete study abroad journey — test prep, university selection, application, student visa, and departure."
);

export default function StudyAbroadPage() {
  return (
    <>
      <PageHero
        title="Study Abroad"
        accent="Your complete journey"
        subtitle="From test preparation to departure — Liberty Overseas guides every step."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Study Abroad" }]}
      />

      <section className="py-24">
        <Container>
          <SectionHeading
            title="The Journey"
            accent="Step by step"
            subtitle="Test Preparation → Destination → Education Planning → Application → Student Visa → Departure"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studyAbroadJourney.map((step) => (
              <FadeIn key={step.step}>
                <div className="glass-card h-full">
                  <span className="text-2xl font-bold text-accent">{step.step}</span>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-bg py-24">
        <Container>
          <SectionHeading
            title="Our Services"
            accent="Comprehensive support"
            light
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studyAbroadSections.map((section) => (
              <FadeIn key={section.title}>
                <div className="rounded-xl border border-light-fg/10 bg-white p-6">
                  <h3 className="font-semibold text-light-fg">{section.title}</h3>
                  <p className="mt-2 text-sm text-light-fg/70">{section.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              title="Start Your Journey"
              accent="Free consultation"
              subtitle="Speak with our study abroad consultants today."
            />
            <LeadForm light />
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
