import { aboutContent } from "@/content/founders";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/layout/page-hero";
import { FoundersSection } from "@/components/sections/founders-section";
import { StatsBar } from "@/components/sections/stats-bar";
import { Container } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "About",
  "Learn about Liberty Overseas — our mission, vision, founders, and journey since 2021."
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Liberty Overseas"
        accent="Our Story"
        subtitle={`Trusted overseas consultancy in Hyderabad since ${siteConfig.established}.`}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <StatsBar />

      <section className="bg-light-bg py-24">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            <FadeIn>
              <h2 className="text-2xl font-bold text-light-fg">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-light-fg/70">
                {aboutContent.mission}
              </p>
            </FadeIn>
            <FadeIn>
              <h2 className="text-2xl font-bold text-light-fg">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-light-fg/70">
                {aboutContent.vision}
              </p>
            </FadeIn>
          </div>
          <FadeIn className="mx-auto mt-16 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-light-fg">Our Journey</h2>
            <p className="mt-4 leading-relaxed text-light-fg/70">
              {aboutContent.journey}
            </p>
          </FadeIn>
        </Container>
      </section>

      <FoundersSection light />
    </>
  );
}
