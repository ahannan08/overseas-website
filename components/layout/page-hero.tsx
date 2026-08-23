import Link from "next/link";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-7xl px-4 md:px-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  title,
  accent,
  subtitle,
  light = false,
}: {
  title: string;
  accent?: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 text-center">
      {accent && (
        <p
          className={`mb-2 font-serif text-xl font-bold italic ${light ? "text-accent" : "text-accent-light"}`}
        >
          {accent}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-wide md:text-4xl ${light ? "text-light-fg" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${light ? "text-light-fg/70" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  title,
  accent,
  subtitle,
  image,
  breadcrumb,
}: {
  title: string;
  accent?: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-28 pb-16">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-surface to-background" />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
        {breadcrumb && (
          <nav className="mb-4 flex flex-wrap gap-2 text-sm text-muted">
            {breadcrumb.map((item, i) => (
              <span key={item.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-accent-light">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {accent && (
          <p className="mb-2 font-serif text-xl font-bold italic text-accent-light">
            {accent}
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-wide md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
