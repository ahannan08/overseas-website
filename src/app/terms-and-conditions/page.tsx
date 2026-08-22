import { PageHero, Container } from "@/components/layout/page-hero";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Terms & Conditions",
  "Terms and conditions for using Liberty Overseas website and services."
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />
      <section className="bg-light-bg py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-light-fg/80">
            <p className="text-sm text-light-fg/50">Last updated: August 2026</p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">Acceptance of Terms</h2>
            <p className="mt-4 leading-relaxed">
              By accessing and using the {siteConfig.name} website and services, you agree
              to be bound by these Terms and Conditions.
            </p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">Services</h2>
            <p className="mt-4 leading-relaxed">
              We provide visa consultancy services and test preparation coaching (IELTS, PTE,
              GRE). Our services are advisory in nature. Visa approval decisions are made solely
              by respective embassies and consulates.
            </p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">Fees & Payments</h2>
            <p className="mt-4 leading-relaxed">
              Service fees are communicated transparently during consultation. Course fees for
              academy programs are as stated on respective course pages and may be updated
              periodically.
            </p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">Client Responsibilities</h2>
            <p className="mt-4 leading-relaxed">
              Clients are responsible for providing accurate information and genuine documents.
              Any misrepresentation may result in visa refusal and termination of services.
            </p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">Limitation of Liability</h2>
            <p className="mt-4 leading-relaxed">
              {siteConfig.name} shall not be liable for visa refusals, delays by embassies, or
              outcomes beyond our control. We commit to providing professional guidance and
              thorough documentation support.
            </p>

            <h2 className="mt-8 text-xl font-bold text-light-fg">Contact</h2>
            <p className="mt-4 leading-relaxed">
              Questions about these terms? Reach us at{" "}
              <a href={siteConfig.emailHref} className="text-accent">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
