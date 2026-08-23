import { successStories } from "@/content/success-stories";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Success Stories",
  "Visa success stories and academy results from Liberty Overseas clients in Hyderabad."
);

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        title="Success Stories"
        accent="Real results"
        subtitle="Visa approvals and exam scores from our clients."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Success Stories" }]}
      />

      <section className="py-24">
        <Container>
          <SectionHeading title="Visa Success Stories" accent="Overseas" />
          <div className="grid gap-6 md:grid-cols-2">
            {successStories.visa.map((story) => (
              <FadeIn key={story.name}>
                <div className="glass-card h-full">
                  <p className="leading-relaxed text-muted">&ldquo;{story.quote}&rdquo;</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-sm text-accent">
                      {story.type} — {story.destination}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-bg py-24">
        <Container>
          <SectionHeading title="Academy Results" accent="IELTS, PTE & GRE" light />
          <div className="grid gap-6 md:grid-cols-3">
            {successStories.academy.map((story) => (
              <FadeIn key={story.name}>
                <div className="rounded-xl border border-light-fg/10 bg-white p-6">
                  <p className="text-3xl font-bold text-accent">{story.score}</p>
                  <p className="mt-1 text-sm font-semibold text-light-fg">{story.exam}</p>
                  <p className="mt-4 text-sm leading-relaxed text-light-fg/70">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-medium text-light-fg">{story.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
