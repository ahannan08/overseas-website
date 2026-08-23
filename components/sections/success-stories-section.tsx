"use client";

import Image from "next/image";
import { Quote, Star, Trophy } from "lucide-react";
import { successStories } from "@/content/success-stories";
import { Container, SectionHeading } from "@/components/layout/page-hero";
import { SectionCarousel } from "@/components/ui/section-carousel";

const featuredStories = [
  ...successStories.visa.slice(0, 2),
  ...successStories.academy.slice(0, 2),
];

export function SuccessStoriesSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/office2.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/88" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Trophy className="absolute -left-6 top-16 h-32 w-32 text-accent/5" />
        <Star className="absolute right-0 top-1/4 h-28 w-28 text-white/5" />
        <Quote className="absolute bottom-12 left-1/3 h-24 w-24 text-accent/5" />
      </div>

      <Container className="relative">
        <SectionHeading
          title="Success Stories"
          accent="Real results"
          subtitle="Hear from clients who achieved their dreams with Liberty Overseas."
        />
        <SectionCarousel slideClassName="md:basis-[48%] lg:basis-[48%]">
          {featuredStories.map((story) => {
            const meta =
              "destination" in story
                ? `${story.type} — ${story.destination}`
                : `${story.exam} — ${story.score}`;
            const initials = story.name
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <div
                key={story.name}
                className="glass flex min-h-[220px] flex-col rounded-2xl border border-white/10 p-6 transition hover:border-accent/30 sm:p-8"
              >
                <Quote className="h-8 w-8 shrink-0 text-accent/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent-light">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-sm text-accent-light">{meta}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </SectionCarousel>
      </Container>
    </section>
  );
}
