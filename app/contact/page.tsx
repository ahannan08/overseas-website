import { siteConfig } from "@/content/site";
import Image from "next/image";
import { PageHero, Container } from "@/components/layout/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { FadeIn } from "@/components/motion/fade-in";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Contact",
  "Contact Liberty Overseas in Hyderabad. Call, WhatsApp, or visit our office for visa and academy enquiries."
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        accent="Get in touch"
        subtitle="Visit our office, call, or WhatsApp us for a free consultation."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="mt-1 text-muted">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href={siteConfig.phoneHref} className="mt-1 text-muted hover:text-accent">
                      {siteConfig.phone}
                    </a>
                    <p className="mt-2 text-sm text-muted">
                      Office line:{" "}
                      <a
                        href={siteConfig.phoneSecondaryHref}
                        className="hover:text-accent"
                      >
                        {siteConfig.phoneSecondary}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href={siteConfig.emailHref} className="mt-1 text-muted hover:text-accent">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="mt-1 text-muted">{siteConfig.hours}</p>
                  </div>
                </div>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-light"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Liberty Overseas Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.42!3d17.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzEyLjAiTiA3OMKwMjUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <LeadForm />
            </FadeIn>
          </div>

          <FadeIn className="mt-20">
            <h2 className="text-2xl font-bold md:text-3xl">Visit Our Office</h2>
            <p className="mt-2 max-w-2xl text-muted">
              Walk in for a free consultation at our Hyderabad office — our team is
              ready to help with visa and academy enquiries.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/office.png"
                  alt="Liberty Overseas office reception"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/office2.png"
                  alt="Liberty Overseas office workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
