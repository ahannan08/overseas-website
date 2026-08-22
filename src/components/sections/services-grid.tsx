"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Plane,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { usps } from "@/content/site";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { Container, SectionHeading } from "@/components/layout/page-hero";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  image?: string;
  icon?: "plane" | "graduation" | "briefcase";
};

const iconMap: Record<NonNullable<ServiceItem["icon"]>, LucideIcon> = {
  plane: Plane,
  graduation: GraduationCap,
  briefcase: Briefcase,
};

export function ServicesGrid({
  title,
  accent,
  subtitle,
  services,
  light = false,
  variant = "image",
}: {
  title: string;
  accent?: string;
  subtitle?: string;
  services: ServiceItem[];
  light?: boolean;
  variant?: "image" | "icon";
}) {
  const isIconVariant = variant === "icon";

  return (
    <section
      className={`relative overflow-hidden py-24 ${isIconVariant || light ? "bg-light-bg" : ""}`}
    >
      {isIconVariant && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Plane className="absolute -left-8 top-12 h-32 w-32 text-accent/5" />
          <Globe className="absolute right-0 top-1/4 h-40 w-40 text-primary/5" />
          <GraduationCap className="absolute bottom-8 left-1/4 h-28 w-28 text-accent/5" />
          <Briefcase className="absolute -right-6 bottom-16 h-24 w-24 text-primary/5" />
        </div>
      )}

      <Container className="relative">
        <SectionHeading title={title} accent={accent} subtitle={subtitle} light={isIconVariant || light} />
        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon ? iconMap[service.icon] : null;

            return (
              <StaggerItem key={service.href}>
                <Link href={service.href} className="group block h-full">
                  {isIconVariant && Icon ? (
                    <div className="flex h-full flex-col rounded-2xl border border-light-fg/10 bg-white p-8 shadow-sm transition duration-300 hover:border-accent/30 hover:shadow-md">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold text-light-fg">{service.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-light-fg/70">
                        {service.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition group-hover:gap-2">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  ) : (
                    <div className="glass-card relative overflow-hidden p-0">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3
                          className={`text-xl font-bold ${light ? "text-light-fg" : "text-foreground"}`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`mt-2 text-sm leading-relaxed ${light ? "text-light-fg/70" : "text-muted"}`}
                        >
                          {service.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition group-hover:gap-2">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  )}
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}

export function WhyLiberty() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/office.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-background/88" />
      </div>

      <Container className="relative">
        <SectionHeading
          title="Why Choose Liberty"
          accent="Trusted by thousands"
          subtitle="Experience, transparency, and dedicated support at every step of your journey."
        />
        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => (
            <StaggerItem key={usp.title}>
              <FadeIn>
                <div className="glass rounded-xl border border-white/10 p-6 transition hover:border-accent/30">
                  <div className="mb-3 h-1 w-8 rounded bg-accent" />
                  <h3 className="font-semibold text-foreground">{usp.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{usp.description}</p>
                </div>
              </FadeIn>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
