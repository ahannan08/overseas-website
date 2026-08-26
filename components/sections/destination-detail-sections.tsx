"use client";

import type { Destination } from "@/content/destinations";
import { CheckEligibilityButton } from "@/components/forms/check-eligibility-button";
import { Container, SectionHeading } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { FileText, GraduationCap, MapPin, Plane } from "lucide-react";

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

      {destination.visitVisa && destination.visitVisaDetails && (
        <section className="bg-light-bg py-24">
          <Container>
            <SectionHeading
              title="Visit Visa"
              accent={`Travel to ${destination.name}`}
              light
            />
            <FadeIn>
              <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-light-fg/10 bg-white p-6">
                  <div className="flex items-center gap-2 text-accent">
                    <FileText className="h-5 w-5" />
                    <h3 className="font-semibold text-light-fg">Key Documents</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-light-fg/70">
                    {destination.visitVisaDetails.documentsSummary}
                  </p>
                </div>
                <div className="rounded-2xl border border-light-fg/10 bg-white p-6">
                  <div className="flex items-center gap-2 text-accent">
                    <Plane className="h-5 w-5" />
                    <h3 className="font-semibold text-light-fg">Best For</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-light-fg/70">
                    {destination.visitVisaDetails.bestFor}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <CheckEligibilityButton defaultVisaType="visit" />
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {destination.studentVisa && destination.studentVisaDetails && (
        <section className="py-24">
          <Container>
            <SectionHeading
              title="Student Visa"
              accent={`Study in ${destination.name}`}
            />
            <FadeIn>
              <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-surface p-6">
                  <div className="flex items-center gap-2 text-accent">
                    <GraduationCap className="h-5 w-5" />
                    <h3 className="font-semibold">Universities</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {destination.studentVisaDetails.universitiesNote}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface p-6">
                  <div className="flex items-center gap-2 text-accent">
                    <MapPin className="h-5 w-5" />
                    <h3 className="font-semibold">Intake Seasons</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {destination.studentVisaDetails.intakeSeasons}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface p-6">
                  <div className="flex items-center gap-2 text-accent">
                    <Plane className="h-5 w-5" />
                    <h3 className="font-semibold">After Graduation</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {destination.studentVisaDetails.postStudyOptions}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <CheckEligibilityButton defaultVisaType="student" />
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
