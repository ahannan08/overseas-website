import { PageHero, Container } from "@/components/layout/page-hero";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Disclaimer",
  "Disclaimer for Liberty Overseas visa consultancy and academy services."
);

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
      />
      <section className="bg-light-bg py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-light-fg/80">
            <p className="text-sm text-light-fg/50">Last updated: August 2026</p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">General Disclaimer</h2>
            <p className="mt-4 leading-relaxed">
              The information provided on the {siteConfig.name} website is for general
              informational purposes only. While we strive to keep information accurate and
              up-to-date, we make no warranties about the completeness or accuracy of content.
            </p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">Visa Services</h2>
            <p className="mt-4 leading-relaxed">
              {siteConfig.name} is a visa consultancy and does not guarantee visa approval.
              Final decisions rest with embassy and consulate officials. Processing times,
              requirements, and fees are subject to change by respective authorities.
            </p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">Academy Services</h2>
            <p className="mt-4 leading-relaxed">
              Test preparation services do not guarantee specific exam scores. Results depend
              on individual effort, preparation, and exam conditions.
            </p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">External Links</h2>
            <p className="mt-4 leading-relaxed">
              Our website may contain links to external sites. We are not responsible for the
              content or privacy practices of third-party websites.
            </p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">Contact</h2>
            <p className="mt-4 leading-relaxed">
              For questions, contact{" "}
              <a href={siteConfig.emailHref} className="text-accent">
                {siteConfig.email}
              </a>{" "}
              or {siteConfig.phone}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
