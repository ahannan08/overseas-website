"use client";

import { BookOpen, Globe, GraduationCap, MapPin } from "lucide-react";
import { studentGallery } from "@/content/gallery";
import { Container, SectionHeading } from "@/components/layout/page-hero";
import { SectionCarousel } from "@/components/ui/section-carousel";

export function StudentLifeGallery() {
  return (
    <section className="relative overflow-hidden bg-light-bg py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <GraduationCap
          strokeWidth={1.75}
          className="absolute -left-6 top-16 h-36 w-36 text-accent/20"
        />
        <Globe
          strokeWidth={1.75}
          className="absolute right-0 top-1/4 h-40 w-40 text-primary/15"
        />
        <BookOpen
          strokeWidth={1.75}
          className="absolute bottom-12 left-1/4 h-32 w-32 text-accent/20"
        />
        <MapPin
          strokeWidth={1.75}
          className="absolute -right-4 bottom-20 h-28 w-28 text-primary/15"
        />
      </div>

      <Container className="relative">
        <SectionHeading
          title="Student Journey"
          accent="More than visas"
          subtitle="From counselling sessions to graduation day — we support every step of your global education path."
          light
        />
        <SectionCarousel light slideClassName="lg:basis-[25%]">
          {studentGallery.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-light-fg/10 bg-white shadow-sm transition hover:border-accent/25 hover:shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-fg/90 via-light-fg/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <h3 className="text-base font-bold text-white sm:text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </SectionCarousel>
      </Container>
    </section>
  );
}
