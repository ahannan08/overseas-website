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
    containScroll: "trimSnaps",
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
    emblaApi.reInit();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("init", onSelect);
    };
  }, [emblaApi, onSelect]);

  const navButtonClass =
    "h-10 w-10 rounded-full border-light-fg/15 bg-white text-light-fg hover:bg-accent hover:text-white disabled:opacity-30 md:h-11 md:w-11";

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24 ${light ? "bg-light-bg" : "bg-background"}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Globe className="absolute -left-8 top-12 h-32 w-32 text-accent/5" />
        <Plane className="absolute right-0 top-1/4 h-40 w-40 text-primary/5" />
        <MapPin className="absolute bottom-8 left-1/4 h-28 w-28 text-accent/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="lg:grid lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,380px)_1fr]">
          <div className="lg:pr-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Explore Destinations
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-light-fg sm:text-3xl md:text-4xl xl:text-[2.75rem] xl:leading-[1.15]">
              The World Is Waiting.{" "}
              <span className="font-serif italic text-accent">Where Will You Go?</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-light-fg/70 md:mt-5 md:text-base">
              From iconic cities to new opportunities, Liberty Overseas helps you navigate
              your visa journey with professional guidance and personalised support.
            </p>
            <Link
              href="/destinations"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-primary hover:text-white md:mt-8 md:px-6 md:py-3"
            >
              Explore Destinations
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-6 hidden items-center gap-3 lg:flex">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous destinations"
                disabled={!canPrev}
                onClick={() => emblaApi?.scrollPrev()}
                className={navButtonClass}
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
                className={navButtonClass}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative mt-8 min-w-0 lg:mt-0 lg:-mr-6 xl:-mr-16">
            <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
              <div className="-ml-4 flex md:-ml-5">
                {destinations.map((dest) => (
                  <div
                    key={dest.slug}
                    className="min-w-0 shrink-0 grow-0 basis-[88%] pl-4 sm:basis-[72%] md:basis-[58%] md:pl-5 lg:basis-[52%] xl:basis-[42%]"
                  >
                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="group flex h-[380px] flex-col overflow-hidden rounded-2xl border border-light-fg/10 bg-white shadow-lg transition hover:border-accent/30 hover:shadow-xl sm:h-[420px]"
                    >
                      <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[240px]">
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 58vw, 42vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-4 sm:p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-lg transition group-hover:bg-accent sm:h-11 sm:w-11 sm:text-xl">
                          <span className="leading-none transition group-hover:scale-110">
                            {dest.flag}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-light-fg sm:text-lg">{dest.name}</h3>
                        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-light-fg/70">
                          {dest.tagline}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 lg:hidden">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous destinations"
                disabled={!canPrev}
                onClick={() => emblaApi?.scrollPrev()}
                className={navButtonClass}
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
                className={navButtonClass}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
