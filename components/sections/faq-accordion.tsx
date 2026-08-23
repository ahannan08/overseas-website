"use client";

import Link from "next/link";
import { useState } from "react";
import { HelpCircle, MessageSquare, CircleHelp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, SectionHeading } from "@/components/layout/page-hero";

type FAQItem = { question: string; answer: string };

export function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  accent = "Got questions?",
  light = false,
  showViewAll = false,
  sectionId,
}: {
  items: FAQItem[];
  title?: string;
  accent?: string;
  light?: boolean;
  showViewAll?: boolean;
  sectionId?: string;
}) {
  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden py-24 scroll-mt-28 ${light ? "bg-light-bg" : ""}`}
    >
      {light && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <HelpCircle className="absolute -left-6 top-16 h-32 w-32 text-accent/5" />
          <MessageSquare className="absolute right-0 top-1/4 h-28 w-28 text-primary/5" />
          <CircleHelp className="absolute bottom-12 left-1/3 h-24 w-24 text-accent/5" />
        </div>
      )}

      <Container className="relative">
        <SectionHeading title={title} accent={accent} light={light} />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger
                className={light ? "text-light-fg" : "text-foreground"}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className={light ? "text-light-fg/70" : ""}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {showViewAll && (
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent-light"
            >
              View all FAQs →
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}

export function FAQByCategory({
  categories,
}: {
  categories: { category: string; items: FAQItem[] }[];
}) {
  const [active, setActive] = useState(categories[0]?.category ?? "");

  const activeItems =
    categories.find((c) => c.category === active)?.items ?? [];

  return (
    <section className="bg-light-bg py-24">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          accent="We're here to help"
          light
        />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActive(cat.category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === cat.category
                  ? "bg-accent text-background"
                  : "bg-white text-light-fg/70 hover:bg-white/80"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
        <Accordion type="single" collapsible className="mx-auto mt-8 max-w-3xl">
          {activeItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-light-fg/10"
            >
              <AccordionTrigger className="text-light-fg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-light-fg/70">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
