import { ClipboardList, MessageCircle, PhoneCall } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Container, SectionHeading } from "@/components/layout/page-hero";

export function ReadyToStartSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ClipboardList className="absolute -left-6 top-16 h-32 w-32 text-accent/5" />
        <MessageCircle className="absolute right-0 top-1/3 h-28 w-28 text-primary/10" />
        <PhoneCall className="absolute bottom-12 left-1/3 h-24 w-24 text-accent/5" />
      </div>

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            title="Ready to Start?"
            accent="Free consultation"
            subtitle="Check your eligibility and get personalized guidance from our experts."
          />
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}
