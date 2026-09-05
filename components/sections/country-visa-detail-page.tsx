"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Home,
  MapPin,
  MessageCircle,
  Plane,
  Send,
  ShieldCheck,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { Destination } from "@/content/destinations";
import type { VisaPageContent } from "@/content/visa-page-types";
import {
  studentVisaDocumentChecklist,
  visitVisaDocumentChecklist,
} from "@/content/document-checklists";
import { CheckEligibilityButton } from "@/components/forms/check-eligibility-button";
import { Container, SectionHeading } from "@/components/layout/page-hero";
import { DocumentChecklistSection } from "@/components/sections/document-checklist-section";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

type VisaTab = "visit" | "student";

type CountryVisaDetailPageProps = {
  destination: Destination;
  defaultTab: VisaTab;
  visitContent?: VisaPageContent;
  studentContent?: VisaPageContent;
  hubPath: string;
};

const assistanceIcons: LucideIcon[] = [
  ClipboardCheck,
  FileText,
  Wallet,
  MapPin,
  Home,
  Users,
  Send,
  MessageCircle,
];

function VisaTabPanel({
  content,
  visaType,
  showChecklist,
}: {
  content: VisaPageContent;
  visaType: VisaTab;
  showChecklist: boolean;
}) {
  return (
    <>
      <section className="py-16">
        <Container>
          <FadeIn>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              {visaType === "visit" ? (
                <Plane className="h-7 w-7" />
              ) : (
                <GraduationCap className="h-7 w-7" />
              )}
            </div>
            <h2 className="mt-4 text-center text-2xl font-bold text-light-fg md:text-3xl">
              {content.heroTitle}
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-light-fg/70">
              {content.intro.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <p className="leading-relaxed">{content.visaTypeDescription}</p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            title={content.assistanceTitle}
            accent="How we help"
            light
          />
          <FadeIn>
            <ul className="mx-auto grid max-w-3xl gap-3">
              {content.assistanceItems.map((item, index) => {
                const Icon = assistanceIcons[index % assistanceIcons.length];
                return (
                  <li
                    key={item}
                    className="flex gap-4 rounded-xl border border-light-fg/10 bg-white px-5 py-4 text-sm leading-relaxed shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="pt-2 text-light-fg/80">{item}</span>
                  </li>
                );
              })}
            </ul>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            title={content.whoCanApplyTitle}
            accent="Eligibility"
            light
          />
          <FadeIn>
            <ul className="mx-auto grid max-w-3xl gap-2 sm:grid-cols-2">
              {content.whoCanApplyItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-lg border border-light-fg/10 bg-white px-4 py-3 text-sm text-light-fg/80 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {content.whoCanApplyNote && (
              <p className="mx-auto mt-6 max-w-3xl rounded-xl border border-accent/20 bg-white px-4 py-3 text-center text-sm font-medium text-light-fg/60">
                {content.whoCanApplyNote}
              </p>
            )}
          </FadeIn>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="Why Choose Us?" accent="Liberty Overseas" light />
          <FadeIn>
            <div className="mx-auto flex max-w-3xl gap-4 rounded-2xl border border-light-fg/10 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <p className="leading-relaxed text-light-fg/70">{content.whyChooseUs}</p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl rounded-2xl border border-light-fg/10 bg-white p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-light-fg">{content.ctaTitle}</h2>
              <p className="mt-3 text-light-fg/70">{content.ctaSubtitle}</p>
              <div className="mt-6">
                <CheckEligibilityButton defaultVisaType={visaType} size="lg" />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {showChecklist && (
        <DocumentChecklistSection
          checklist={
            visaType === "visit"
              ? visitVisaDocumentChecklist
              : studentVisaDocumentChecklist
          }
        />
      )}
    </>
  );
}

function FallbackStudentPanel({ destination }: { destination: Destination }) {
  return (
    <>
      <section className="py-16">
        <Container>
          <FadeIn>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h2 className="mt-4 text-center text-2xl font-bold text-light-fg md:text-3xl">
              Study in {destination.name} with Confidence
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-light-fg/70">
              {destination.about}
            </p>
          </FadeIn>
        </Container>
      </section>
      {destination.studentVisaDetails && (
        <section className="py-16">
          <Container>
            <SectionHeading
              title="Student Visa Overview"
              accent={`Study in ${destination.name}`}
              light
            />
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-light-fg/10 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-light-fg">Universities</h3>
                <p className="mt-3 text-sm text-light-fg/70">
                  {destination.studentVisaDetails.universitiesNote}
                </p>
              </div>
              <div className="rounded-2xl border border-light-fg/10 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Calendar className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-light-fg">Intake Seasons</h3>
                <p className="mt-3 text-sm text-light-fg/70">
                  {destination.studentVisaDetails.intakeSeasons}
                </p>
              </div>
              <div className="rounded-2xl border border-light-fg/10 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Briefcase className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-light-fg">After Graduation</h3>
                <p className="mt-3 text-sm text-light-fg/70">
                  {destination.studentVisaDetails.postStudyOptions}
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <CheckEligibilityButton defaultVisaType="student" size="lg" />
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

export function CountryVisaDetailPage({
  destination,
  defaultTab,
  visitContent,
  studentContent,
  hubPath,
}: CountryVisaDetailPageProps) {
  const showVisitTab = destination.visitVisa && !!visitContent;
  const showStudentTab = destination.studentVisa;

  const initialTab: VisaTab =
    defaultTab === "visit" && showVisitTab
      ? "visit"
      : showStudentTab
        ? "student"
        : "visit";

  const [activeTab, setActiveTab] = useState<VisaTab>(initialTab);

  const tabs: { id: VisaTab; label: string; icon: LucideIcon }[] = [];
  if (showVisitTab) tabs.push({ id: "visit", label: "Visit Visa", icon: Plane });
  if (showStudentTab)
    tabs.push({ id: "student", label: "Student Visa", icon: GraduationCap });

  return (
    <div className="bg-light-bg">
      {tabs.length > 1 && (
        <section className="border-b border-light-fg/10 py-6">
          <Container>
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition",
                      activeTab === tab.id
                        ? "bg-accent text-background shadow-sm"
                        : "border border-light-fg/15 bg-white text-light-fg/70 hover:border-accent/40 hover:text-accent"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {activeTab === "visit" && visitContent && (
        <VisaTabPanel content={visitContent} visaType="visit" showChecklist />
      )}

      {activeTab === "student" && studentContent && (
        <VisaTabPanel content={studentContent} visaType="student" showChecklist />
      )}

      {activeTab === "student" && !studentContent && (
        <FallbackStudentPanel destination={destination} />
      )}

      <section className="border-t border-light-fg/10 py-12">
        <Container>
          <p className="text-center text-sm text-light-fg/60">
            <Link href={hubPath} className="font-semibold text-accent hover:underline">
              ← Back to {hubPath.includes("visit") ? "Visit Visa" : "Student Visa"} countries
            </Link>
            {" · "}
            <Link
              href={`/destinations/${destination.slug}`}
              className="font-semibold text-accent hover:underline"
            >
              View {destination.name} overview
            </Link>
          </p>
        </Container>
      </section>
    </div>
  );
}
