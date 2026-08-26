import { destinations, type Destination } from "@/content/destinations";

/** Maps short country labels (e.g. from overseas.ts) to destination slugs. */
export const countryNameToSlug: Record<string, string> = {
  Australia: "australia",
  USA: "usa",
  UK: "uk",
  "United Kingdom": "uk",
  Canada: "canada",
  "New Zealand": "new-zealand",
  Europe: "europe",
  Dubai: "dubai",
  Singapore: "singapore",
  Malaysia: "malaysia",
  Turkey: "turkey",
};

export function getDestinationsByVisaType(
  type: "visit" | "student"
): Destination[] {
  return destinations.filter((d) =>
    type === "visit" ? d.visitVisa : d.studentVisa
  );
}

export function getDestinationByCountryName(
  name: string
): Destination | undefined {
  const slug = countryNameToSlug[name];
  if (slug) return destinations.find((d) => d.slug === slug);
  return destinations.find(
    (d) => d.name.toLowerCase() === name.toLowerCase()
  );
}
