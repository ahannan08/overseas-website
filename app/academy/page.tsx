import { BookOpen, GraduationCap } from "lucide-react";
import { academyOverview, academyCourses, academyProcess } from "@/content/academy";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessTimeline } from "@/components/sections/founders-section";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata, cn } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Academy",
  "IELTS, PTE, and GRE coaching at Liberty Academy in Hyderabad with expert trainers and small batches."
);

const services = academyCourses.map((course) => ({
  title: course.title,
  description: course.description,
  href: course.href,
  image: course.image,
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
        light
      />

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-light-bg via-[#e8ecf1] to-primary/20" />
        <BookOpen className="pointer-events-none absolute -left-6 top-16 h-32 w-32 text-primary/10" />
        <GraduationCap className="pointer-events-none absolute -right-4 bottom-12 h-28 w-28 text-accent/15" />

        <Container className="relative">
          <SectionHeading
            title="Why Choose Liberty Academy?"
            accent="Premium preparation"
            subtitle="Expert trainers, small batches, and world-class infrastructure for your target score."
            light
          />
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {academyOverview.whyChoose.map((item, index) => (
              <FadeIn key={item.title}>
                <div
                  className={cn(
                    "rounded-xl px-4 py-3.5 shadow-sm transition hover:shadow-md",
                    index % 2 === 0
                      ? "border border-light-fg/10 bg-white text-light-fg"
                      : "border border-primary/20 bg-primary/10 text-light-fg"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-light-fg/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <h3 className="mb-6 text-center text-xl font-bold text-light-fg">Facilities</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {academyOverview.facilities.map((facility, index) => (
                <FadeIn key={facility}>
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3.5 shadow-sm transition hover:shadow-md",
                      index % 2 === 0
                        ? "border border-light-fg/10 bg-white text-light-fg"
                        : "border border-primary/20 bg-primary/10 text-light-fg"
                    )}
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{facility}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ProcessTimeline
        steps={academyProcess}
        light
        withIcons
        title="Our Process"
        accent="How it works"
      />
    </>
  );
}
