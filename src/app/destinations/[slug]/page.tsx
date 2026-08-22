import { notFound } from "next/navigation";
import Link from "next/link";
import { destinations, getDestination } from "@/content/destinations";
import { PageHero, Container, SectionHeading } from "@/components/layout/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { LeadForm } from "@/components/forms/lead-form";
import { FadeIn } from "@/components/motion/fade-in";
import { createPageMetadata } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};
  return createPageMetadata(
    dest.name,
    `${dest.overview} Visa assistance for ${dest.name} — visit and student visas.`
  );
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  return (
    <>
      <PageHero
        title={dest.name}
        accent={dest.region}
        subtitle={dest.overview}
        image={dest.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: dest.name },
        ]}
      />

      <section className="bg-light-bg py-24">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {dest.visitVisa && (
              <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background">
                Visit Visa Available
              </span>
            )}
            {dest.studentVisa && (
              <span className="rounded-full border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                Student Visa Available
              </span>
            )}
          </div>

          <SectionHeading title="Highlights" accent="Why choose here" light />

          <div className="mx-auto grid max-w-3xl gap-4">
            {dest.highlights.map((h) => (
              <FadeIn key={h}>
                <div className="flex items-center gap-3 rounded-lg border border-light-fg/10 bg-white px-5 py-4">
                  <span className="text-xl">{dest.flag}</span>
                  <span className="text-light-fg">{h}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Plan Your Trip"
                accent="Free consultation"
                subtitle={`Get expert guidance for your ${dest.name} visa application.`}
              />
              <div className="mt-6 flex flex-wrap gap-4">
                {dest.visitVisa && (
                  <Link href="/overseas/visit-visa" className="text-sm text-accent hover:text-accent-light">
                    Visit Visa Info →
                  </Link>
                )}
                {dest.studentVisa && (
                  <Link href="/overseas/student-visa" className="text-sm text-accent hover:text-accent-light">
                    Student Visa Info →
                  </Link>
                )}
              </div>
            </div>
            <LeadForm light />
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
