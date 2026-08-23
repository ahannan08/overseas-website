import { pteContent } from "@/content/academy";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata } from "@/lib/utils";

const course = pteContent;

export const metadata = createPageMetadata(course.title, course.description);

export default function PTEPage() {
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
        accent="PTE Academic"
        subtitle={course.description}
        image={course.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Academy", href: "/academy" },
          { label: "PTE" },
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
          <SectionHeading title="Program Features" accent="Computer-based prep" />
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
