"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Globe, MapPin, Plane } from "lucide-react";
import { destinations } from "@/content/destinations";
import { Button } from "@/components/ui/button";

export function DestinationsShowcase({ light = false }: { light?: boolean }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("init", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("init", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className={`relative overflow-hidden py-24 ${light ? "bg-light-bg" : "bg-background"}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Globe className="absolute -left-8 top-12 h-32 w-32 text-accent/5" />
        <Plane className="absolute right-0 top-1/4 h-40 w-40 text-primary/5" />
        <MapPin className="absolute bottom-8 left-1/4 h-28 w-28 text-accent/5" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12 lg:px-6 xl:grid-cols-[minmax(0,380px)_1fr]">
        {/* Left — copy & carousel controls */}
        <div className="flex flex-col lg:pr-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Explore Destinations
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-light-fg md:text-4xl xl:text-[2.75rem] xl:leading-[1.15]">
            The World Is Waiting.{" "}
            <span className="font-serif italic text-accent">Where Will You Go?</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-light-fg/70 md:text-base">
            From iconic cities to new opportunities, Liberty Overseas helps you navigate
            your visa journey with professional guidance and personalised support.
          </p>
          <Link
            href="/destinations"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-primary hover:text-white"
          >
            Explore Destinations
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="mt-8 hidden items-center justify-end gap-3 lg:flex">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous destinations"
              disabled={!canPrev}
              onClick={() => emblaApi?.scrollPrev()}
              className="h-11 w-11 rounded-full border-light-fg/15 bg-white text-light-fg hover:bg-accent hover:text-white disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next destinations"
              disabled={!canNext}
              onClick={() => emblaApi?.scrollNext()}
              className="h-11 w-11 rounded-full border-light-fg/15 bg-white text-light-fg hover:bg-accent hover:text-white disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right — carousel */}
        <div className="relative min-w-0 lg:-mr-6 xl:-mr-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-5">
              {destinations.map((dest) => (
                <div
                  key={dest.slug}
                  className="min-w-0 flex-[0_0_72%] sm:flex-[0_0_48%] md:flex-[0_0_42%] lg:flex-[0_0_46%] xl:flex-[0_0_38%]"
                >
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="group flex h-[420px] flex-col overflow-hidden rounded-2xl border border-light-fg/10 bg-white shadow-lg transition hover:border-accent/30 hover:shadow-xl"
                  >
                    <div className="relative h-[240px] w-full shrink-0 overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 38vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-xl transition group-hover:bg-accent">
                        <span className="leading-none transition group-hover:scale-110">
                          {dest.flag}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-light-fg">{dest.name}</h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-light-fg/70">
                        {dest.tagline}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile carousel controls */}
        <div className="flex items-center justify-end gap-3 lg:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous destinations"
            disabled={!canPrev}
            onClick={() => emblaApi?.scrollPrev()}
            className="h-10 w-10 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next destinations"
            disabled={!canNext}
            onClick={() => emblaApi?.scrollNext()}
            className="h-10 w-10 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
