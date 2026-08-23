"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Plane } from "lucide-react";
import { destinations } from "@/content/destinations";
import { Container, SectionHeading } from "@/components/layout/page-hero";
import { StaggerChildren, StaggerItem } from "@/components/motion/fade-in";

export function DestinationsGrid({
  light = true,
  showHeading = true,
}: {
  light?: boolean;
  showHeading?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden py-24 ${light ? "bg-light-bg" : ""}`}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Globe className="absolute -left-6 top-16 h-36 w-36 text-accent/5" />
        <Plane className="absolute right-0 top-1/3 h-32 w-32 text-primary/5" />
        <MapPin className="absolute bottom-12 left-1/3 h-28 w-28 text-accent/5" />
      </div>

      <Container className="relative">
        {showHeading && (
          <SectionHeading
            title="All Destinations"
            accent="Pick your path"
            subtitle="Browse every country we support for visit and student visas."
            light={light}
          />
        )}

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((dest) => (
            <StaggerItem key={dest.slug}>
              <Link href={`/destinations/${dest.slug}`} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-light-fg/10 bg-white shadow-sm transition duration-300 hover:border-accent/30 hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-xl shadow-sm transition group-hover:bg-accent">
                      <span className="leading-none">{dest.flag}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-light-fg">{dest.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-light-fg/70">
                      {dest.tagline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {dest.visitVisa && (
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          Visit
                        </span>
                      )}
                      {dest.studentVisa && (
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          Student
                        </span>
                      )}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition group-hover:gap-2">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
