import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/content/destinations";
import { PageHero } from "@/components/layout/page-hero";
import { DestinationDetailSections } from "@/components/sections/destination-detail-sections";
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

      <DestinationDetailSections destination={dest} />
    </>
  );
}
