"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Clock,
  Files,
  Globe,
  PhoneCall,
  Send,
  type LucideIcon,
} from "lucide-react";
import { founders } from "@/content/founders";
import { StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { Container, SectionHeading } from "@/components/layout/page-hero";

function FounderPhoto({
  src,
  alt,
  zoomOut = false,
}: {
  src: string;
  alt: string;
  zoomOut?: boolean;
}) {
  if (zoomOut) {
    return (
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top"
          initial={{ scale: 1.35, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
    />
  );
}

export function FoundersSection({ light = false }: { light?: boolean }) {
  return (
    <section className={`py-24 ${light ? "bg-light-bg" : ""}`}>
      <Container>
        <SectionHeading
          title="Our Founders"
          accent="Leadership"
          subtitle="Meet the visionaries behind Liberty Overseas."
          light={light}
        />
        <StaggerChildren className="grid gap-8 md:grid-cols-2">
          {founders.map((founder) => {
            const isKhaleel = founder.photo?.includes("khaleel");

            return (
              <StaggerItem key={founder.name}>
                <div
                  className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border-2 shadow-lg transition hover:shadow-xl md:aspect-[4/5] ${light ? "border-accent/20 bg-white" : "border-accent/20"}`}
                >
                  <div className="relative h-full bg-gradient-to-br from-primary/40 to-surface">
                    {founder.photo ? (
                      <FounderPhoto
                        src={founder.photo}
                        alt={founder.name}
                        zoomOut={isKhaleel}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-7xl font-bold text-white/10">
                          {founder.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}

                    {/* Default — name, role, experience */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 border-t-4 border-accent bg-background/90 p-6 backdrop-blur-sm transition duration-300 group-hover:translate-y-full group-hover:opacity-0">
                      <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                      <p className="text-sm font-medium text-accent">{founder.designation}</p>
                      <p className="mt-1 text-xs text-muted">{founder.experience} experience</p>
                    </div>

                    {/* Hover — bio & why */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end bg-background/95 p-6 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                      <h3 className="text-lg font-bold text-foreground">{founder.name}</h3>
                      <p className="text-sm font-medium text-accent">{founder.designation}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{founder.bio}</p>
                      <div className="mt-4 rounded-lg border-l-4 border-accent bg-white/5 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                          Why Liberty
                        </p>
                        <p className="mt-2 text-sm italic leading-relaxed text-muted">
                          &ldquo;{founder.whyStarted}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}

export function ProcessTimeline({
  steps,
  light = false,
  withIcons = false,
  title,
  accent,
}: {
  steps: { step: string; title: string; description: string }[];
  light?: boolean;
  withIcons?: boolean;
  title?: string;
  accent?: string;
}) {
  const processIcons: LucideIcon[] = [
    ClipboardCheck,
    Send,
    Files,
    Clock,
    PhoneCall,
  ];

  return (
    <section className={`relative overflow-hidden pt-24 pb-16 ${light ? "bg-light-bg" : ""}`}>
      {withIcons && light && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Globe className="absolute -left-8 top-12 h-32 w-32 text-accent/5" />
          <ClipboardCheck className="absolute right-0 top-1/4 h-28 w-28 text-primary/5" />
          <Send className="absolute bottom-8 left-1/4 h-24 w-24 text-accent/5" />
        </div>
      )}

      <Container className="relative">
        {title && (
          <SectionHeading title={title} accent={accent} light={light} />
        )}
        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((item, index) => {
            const Icon = processIcons[index];

            return (
              <div
                key={item.step}
                className={`rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
                  light
                    ? "border-light-fg/10 bg-white"
                    : "glass border-white/10"
                }`}
              >
                {withIcons && Icon && (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                )}
                <span className="text-2xl font-bold text-accent">{item.step}</span>
                <h3
                  className={`mt-2 font-semibold ${light ? "text-light-fg" : "text-foreground"}`}
                >
                  {item.title}
                </h3>
                <p className={`mt-1 text-sm ${light ? "text-light-fg/70" : "text-muted"}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
