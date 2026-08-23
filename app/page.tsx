import { visaTypes } from "@/content/overseas";
import { academyCourses } from "@/content/academy";
import { CinematicHero } from "@/components/sections/cinematic-hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ServicesGrid, WhyLiberty } from "@/components/sections/services-grid";
import { DestinationsShowcase } from "@/components/sections/destinations-showcase";
import { StudentLifeGallery } from "@/components/sections/student-gallery";
import { SuccessStoriesSection } from "@/components/sections/success-stories-section";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Home",
  "Liberty Overseas — Expert visa consultancy and IELTS, PTE, GRE coaching in Hyderabad."
);

const overseasServices = [
  { ...visaTypes.visit, icon: "plane" as const },
  { ...visaTypes.student, icon: "graduation" as const },
  { ...visaTypes.business, icon: "briefcase" as const },
];

const academyServices = academyCourses.map((c) => ({
  title: c.title,
  description: c.description,
  href: c.href,
  image: c.image,
}));

export default function HomePage() {
  return (
    <>
      <CinematicHero />

      <DestinationsShowcase light />

      <StatsBar />

      <ServicesGrid
        title="Visa Services"
        accent="Overseas"
        subtitle="Visit, student, and business visas for destinations worldwide."
        services={overseasServices}
        variant="icon"
      />

      <ServicesGrid
        title="Test Preparation"
        accent="Academy"
        subtitle="IELTS, PTE, and GRE coaching with expert trainers and small batches."
        services={academyServices}
        light
      />

      <StudentLifeGallery />

      <WhyLiberty />

      <SuccessStoriesSection />
    </>
  );
}
