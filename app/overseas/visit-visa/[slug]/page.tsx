import { notFound } from "next/navigation";
import { getDestination } from "@/content/destinations";
import { getVisitVisaPage } from "@/content/visit-visa-pages";
import { getStudentVisaPage } from "@/content/student-visa-pages";
import { getDestinationsByVisaType } from "@/lib/destinations";
import { PageHero } from "@/components/layout/page-hero";
import { CountryVisaDetailPage } from "@/components/sections/country-visa-detail-page";
import { createPageMetadata } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getDestinationsByVisaType("visit").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  const visit = getVisitVisaPage(slug);
  if (!dest || !visit) return {};
  return createPageMetadata(
    visit.pageTitle,
    `${visit.heroTitle}. Expert visit visa assistance for ${dest.name} from Liberty Overseas, Hyderabad.`
  );
}

export default async function VisitVisaCountryPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  const visitContent = getVisitVisaPage(slug);
  const studentContent = getStudentVisaPage(slug);

  if (!destination || !destination.visitVisa || !visitContent) notFound();

  return (
    <>
      <PageHero
        title={visitContent.pageTitle}
        accent={destination.name}
        subtitle={visitContent.heroTitle}
        image={destination.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Overseas", href: "/overseas" },
          { label: "Visit Visa", href: "/overseas/visit-visa" },
          { label: destination.name },
        ]}
      />
      <CountryVisaDetailPage
        destination={destination}
        defaultTab="visit"
        visitContent={visitContent}
        studentContent={studentContent}
        hubPath="/overseas/visit-visa"
      />
    </>
  );
}
