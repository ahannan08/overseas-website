import { PageHero, Container } from "@/components/layout/page-hero";
import { privacyPolicy } from "@/content/legal";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Privacy policy for Liberty Overseas website and services."
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        accent="Your data, protected"
        subtitle="How Liberty Overseas collects, uses, and protects your personal information."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="bg-light-bg py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-light-fg/50">
              Last updated: {privacyPolicy.lastUpdated}
            </p>
            {privacyPolicy.sections.map((section) => (
              <div key={section.title} className="mt-10">
                <h2 className="text-xl font-bold text-light-fg">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-light-fg/80">
                    {section.content.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 leading-relaxed text-light-fg/80">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
