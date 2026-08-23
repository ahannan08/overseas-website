import { academyOverview, academyCourses } from "@/content/academy";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Academy",
  "IELTS, PTE, and GRE coaching at Liberty Academy in Hyderabad with expert trainers and small batches."
);

const services = academyCourses.map((c) => ({
  title: c.title,
  description: c.description,
  href: c.href,
  image: c.image,
}));

export default function AcademyPage() {
  return (
    <>
      <PageHero
        title={academyOverview.title}
        accent="Test preparation"
        subtitle={academyOverview.description}
        image={academyCourses[0].image}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Academy" }]}
      />

      <ServicesGrid
        title="Our Courses"
        accent="Choose your exam"
        services={services}
      />

      <section className="bg-light-bg py-24">
        <Container>
          <SectionHeading
            title="Why Choose Liberty Academy?"
            accent="Premium preparation"
            light
          />
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {academyOverview.whyChoose.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-xl border border-light-fg/10 bg-white p-6">
                  <div className="mb-3 h-1 w-8 rounded bg-accent" />
                  <h3 className="font-semibold text-light-fg">{item.title}</h3>
                  <p className="mt-2 text-sm text-light-fg/70">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading title="Facilities" accent="World-class infrastructure" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {academyOverview.facilities.map((facility) => (
              <FadeIn key={facility}>
                <div className="glass rounded-lg px-4 py-6 text-center text-sm font-medium">
                  {facility}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
