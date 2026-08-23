"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children, useCallback, useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SectionCarouselProps = {
  children: ReactNode;
  slideClassName?: string;
  className?: string;
  controlsClassName?: string;
  light?: boolean;
};

export function SectionCarousel({
  children,
  slideClassName,
  className,
  controlsClassName,
  light = false,
}: SectionCarouselProps) {
  const slides = Children.toArray(children);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

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

  const buttonClass = light
    ? "border-light-fg/15 bg-white text-light-fg hover:bg-accent hover:text-white disabled:opacity-30"
    : "border-white/20 bg-white/10 text-foreground hover:bg-accent hover:text-white disabled:opacity-30";

  return (
    <div className={className}>
      <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
        <div className="-ml-4 flex md:-ml-5">
          {slides.map((child, index) => (
            <div
              key={index}
              className={cn(
                "min-w-0 shrink-0 grow-0 basis-[88%] pl-4 sm:basis-[70%] md:basis-[48%] md:pl-5 lg:basis-[32%] xl:basis-[25%]",
                slideClassName
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "mt-6 flex items-center justify-center gap-3 sm:justify-end",
          controlsClassName
        )}
      >
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Previous slide"
          disabled={!canPrev}
          onClick={() => emblaApi?.scrollPrev()}
          className={cn("h-10 w-10 rounded-full md:h-11 md:w-11", buttonClass)}
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Next slide"
          disabled={!canNext}
          onClick={() => emblaApi?.scrollNext()}
          className={cn("h-10 w-10 rounded-full md:h-11 md:w-11", buttonClass)}
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>
    </div>
  );
}
