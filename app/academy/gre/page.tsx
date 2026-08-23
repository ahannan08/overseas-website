import { greContent } from "@/content/academy";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata } from "@/lib/utils";

const course = greContent;

export const metadata = createPageMetadata(course.title, course.description);

export default function GREPage() {
  const details = [
    { label: "Duration", value: course.duration },
    { label: "Classes", value: course.classesPerWeek },
    { label: "Hours/Day", value: course.hoursPerClass },
    { label: "Batch Size", value: course.batchSize },
    { label: "Morning Batch", value: course.morningBatch },
    { label: "Evening Batch", value: course.eveningBatch },
    { label: "Mode", value: course.mode },
    { label: "Fee", value: course.fee },
  ];

  return (
    <>
      <PageHero
        title={course.title}
        accent="GRE General Test"
        subtitle={course.description}
        image={course.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Academy", href: "/academy" },
          { label: "GRE" },
        ]}
      />

      <section className="bg-light-bg py-24">
        <Container>
          <SectionHeading title="Course Details" accent="At a glance" light />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {details.map((d) => (
              <FadeIn key={d.label}>
                <div className="flex justify-between rounded-lg border border-light-fg/10 bg-white px-5 py-4">
                  <span className="text-sm text-light-fg/70">{d.label}</span>
                  <span className="text-sm font-semibold text-light-fg">{d.value}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading title="Modules Covered" accent="Complete GRE prep" />
          <div className="flex flex-wrap justify-center gap-4">
            {course.modules.map((m) => (
              <FadeIn key={m}>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-6 py-2 text-sm font-semibold text-accent-light">
                  {m}
                </span>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface/30 py-24">
        <Container>
          <SectionHeading title="Program Features" accent="Personal mentoring" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.features.map((f) => (
              <FadeIn key={f}>
                <div className="glass rounded-lg px-5 py-4 text-sm font-medium">{f}</div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
