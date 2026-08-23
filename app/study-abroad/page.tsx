import { Globe, GraduationCap } from "lucide-react";
import {
  studyAbroadJourney,
  studyAbroadPathways,
  studyAbroadSections,
} from "@/content/study-abroad";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessTimeline } from "@/components/sections/founders-section";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata, cn } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Study Abroad",
  "Complete study abroad journey — test prep, university selection, application, student visa, and departure."
);

const pathways = studyAbroadPathways.map((item) => ({
  title: item.title,
  description: item.description,
  href: item.href,
  image: item.image,
}));

export default function StudyAbroadPage() {
  return (
    <>
      <PageHero
        title="Study Abroad"
        accent="Your complete journey"
        subtitle="From test preparation to departure — Liberty Overseas guides every step."
        image="/images/student-journey/campus.png"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Study Abroad" }]}
      />

      <ServicesGrid
        title="Your Pathway"
        accent="Get started"
        subtitle="Test preparation, destination selection, and visa support — all in one place."
        services={pathways}
        light
      />

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-light-bg via-[#e8ecf1] to-primary/20" />
        <Globe className="pointer-events-none absolute -left-6 top-16 h-32 w-32 text-primary/10" />
        <GraduationCap className="pointer-events-none absolute -right-4 bottom-12 h-28 w-28 text-accent/15" />

        <Container className="relative">
          <SectionHeading
            title="Our Services"
            accent="Comprehensive support"
            subtitle="University selection, applications, scholarships, and pre-departure guidance."
            light
          />
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {studyAbroadSections.map((section, index) => (
              <FadeIn key={section.title}>
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
                      <p className="text-sm font-medium">{section.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-light-fg/70">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <ProcessTimeline
        steps={studyAbroadJourney}
        light
        withIcons
        title="The Journey"
        accent="Step by step"
      />
    </>
  );
}
