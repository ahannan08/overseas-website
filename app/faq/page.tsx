import { faqCategories } from "@/content/faq";
import { PageHero } from "@/components/layout/page-hero";
import { FAQByCategory } from "@/components/sections/faq-accordion";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "FAQ",
  "Frequently asked questions about visas, IELTS, PTE, GRE, and study abroad at Liberty Overseas."
);

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="FAQ"
        accent="Got questions?"
        subtitle="Find answers about our visa services and academy programs."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <FAQByCategory categories={faqCategories} />
    </>
  );
}
