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
  return getDestinationsByVisaType("student").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  const student = getStudentVisaPage(slug);
  if (!dest) return {};
  const title = student?.pageTitle ?? `${dest.name} Student Visa`;
  const description =
    student?.heroTitle ??
    `Student visa assistance for ${dest.name} from Liberty Overseas, Hyderabad.`;
  return createPageMetadata(title, description);
}

export default async function StudentVisaCountryPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  const visitContent = getVisitVisaPage(slug);
  const studentContent = getStudentVisaPage(slug);

  if (!destination || !destination.studentVisa) notFound();

  const pageTitle = studentContent?.pageTitle ?? `${destination.name} Student Visa`;
  const heroTitle =
    studentContent?.heroTitle ?? `Study in ${destination.name} with Confidence`;

  return (
    <>
      <PageHero
        title={pageTitle}
        accent={destination.name}
        subtitle={heroTitle}
        image={destination.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Overseas", href: "/overseas" },
          { label: "Student Visa", href: "/overseas/student-visa" },
          { label: destination.name },
        ]}
      />
      <CountryVisaDetailPage
        destination={destination}
        defaultTab="student"
        visitContent={visitContent}
        studentContent={studentContent}
        hubPath="/overseas/student-visa"
      />
    </>
  );
}
