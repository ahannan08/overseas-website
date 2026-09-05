"use client";

import Link from "next/link";
import type { Destination } from "@/content/destinations";
import { getVisitVisaPage } from "@/content/visit-visa-pages";
import { CheckEligibilityButton } from "@/components/forms/check-eligibility-button";
import { Container, SectionHeading } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { ArrowRight } from "lucide-react";

type DestinationDetailSectionsProps = {
  destination: Destination;
};

export function DestinationDetailSections({
  destination,
}: DestinationDetailSectionsProps) {
  const defaultVisaType = destination.visitVisa ? "visit" : "student";

  return (
    <>
      <section className="bg-light-bg py-16">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {destination.visitVisa && (
                <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background">
                  Visit Visa Available
                </span>
              )}
              {destination.studentVisa && (
                <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background">
                  Student Visa Available
                </span>
              )}
            </div>
            <div className="mt-6 flex justify-center">
              <CheckEligibilityButton
                defaultVisaType={defaultVisaType}
                size="lg"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading title="About" accent={destination.name} />
          <FadeIn>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted">
              {destination.about}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-medium text-accent">
              Popular for: {destination.popularFor}
            </p>
          </FadeIn>
        </Container>
      </section>

      {(destination.visitVisa || destination.studentVisa) && (
        <section className="bg-light-bg py-16">
          <Container>
            <SectionHeading
              title="Visa Guides"
              accent={destination.name}
              subtitle="Read the full visit or student visa guide with document checklists."
              light
            />
            <FadeIn>
              <div className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
                {destination.visitVisa && getVisitVisaPage(destination.slug) && (
                  <Link
                    href={`/overseas/visit-visa/${destination.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-light-fg/15 bg-white px-6 py-3 text-sm font-semibold text-light-fg transition hover:border-accent hover:text-accent"
                  >
                    View Visit Visa guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {destination.studentVisa && (
                  <Link
                    href={`/overseas/student-visa/${destination.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-light-fg/15 bg-white px-6 py-3 text-sm font-semibold text-light-fg transition hover:border-accent hover:text-accent"
                  >
                    View Student Visa guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      <section className="bg-light-bg py-24">
        <Container>
          <SectionHeading
            title={`Why Choose ${destination.name}`}
            accent="Top reasons"
            light
          />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {destination.whyChoose.map((reason) => (
              <FadeIn key={reason}>
                <div className="flex items-start gap-3 rounded-xl border border-light-fg/10 bg-white px-5 py-4">
                  <span className="text-xl">{destination.flag}</span>
                  <span className="text-sm leading-relaxed text-light-fg">{reason}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading title="Highlights" accent="Quick overview" />
          <div className="mx-auto grid max-w-3xl gap-4">
            {destination.highlights.map((highlight) => (
              <FadeIn key={highlight}>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-surface px-5 py-4">
                  <span className="text-xl">{destination.flag}</span>
                  <span>{highlight}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
