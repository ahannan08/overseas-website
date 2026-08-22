import Link from "next/link";
import { Plane } from "lucide-react";
import { Container } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-surface to-background" />
      <Plane className="animate-float absolute -left-4 top-8 h-16 w-16 text-accent/20" />
      <Plane className="animate-float absolute -right-4 bottom-8 h-12 w-12 rotate-180 text-accent/20" />
      <Container className="relative">
        <FadeIn>
          <div className="glass-card mx-auto max-w-3xl p-10 text-center md:p-14">
            <p className="font-serif text-xl font-bold italic text-accent-light">
              Start your journey today
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Check Eligibility → Submit Details → Get Contacted
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Free consultation with our expert consultants. No obligation,
              transparent pricing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Check Eligibility</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
