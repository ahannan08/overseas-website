export type VisaPageContent = {
  slug: string;
  pageTitle: string;
  heroTitle: string;
  intro: string[];
  visaTypeDescription: string;
  assistanceTitle: string;
  assistanceItems: string[];
  whoCanApplyTitle: string;
  whoCanApplyItems: string[];
  whoCanApplyNote?: string;
  whyChooseUs: string;
  ctaTitle: string;
  ctaSubtitle: string;
};

export const detailedVisaCountrySlugs = [
  "australia",
  "usa",
  "uk",
  "canada",
  "new-zealand",
  "europe",
] as const;

export type DetailedVisaCountrySlug = (typeof detailedVisaCountrySlugs)[number];

export function isDetailedVisaCountry(
  slug: string
): slug is DetailedVisaCountrySlug {
  return (detailedVisaCountrySlugs as readonly string[]).includes(slug);
}
