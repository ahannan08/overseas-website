"use client";

import {
  FileText,
  FolderOpen,
  GraduationCap,
  Landmark,
  User,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, SectionHeading } from "@/components/layout/page-hero";
import type { DocumentChecklist } from "@/content/document-checklists";

const checklistIcons = [User, GraduationCap, FileText, FolderOpen, Landmark];

export function DocumentChecklistSection({
  checklist,
}: {
  checklist: DocumentChecklist;
}) {
  return (
    <section className="border-t border-light-fg/10 py-16">
      <Container>
        <SectionHeading
          title={checklist.title}
          accent="Prepare your documents"
          subtitle={checklist.intro}
          light
        />
        <Accordion type="multiple" className="mx-auto max-w-3xl">
          {checklist.sections.map((section, index) => {
            const Icon = checklistIcons[index % checklistIcons.length];
            return (
              <AccordionItem
                key={section.title}
                value={`section-${index}`}
                className="border-light-fg/10"
              >
                <AccordionTrigger className="text-left text-light-fg hover:text-accent">
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    {section.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-12 text-sm leading-relaxed text-light-fg/70">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-accent/20 bg-white p-4 text-sm leading-relaxed text-light-fg/70 shadow-sm">
          <span className="font-semibold text-accent">Important Note: </span>
          {checklist.importantNote}
        </p>
      </Container>
    </section>
  );
}
