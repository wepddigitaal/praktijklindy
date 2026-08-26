import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imagePosition,
  actions,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-warm)] pt-14 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-clay/20 blur-3xl"
      />
      <div className="container-page relative grid items-center gap-12 md:grid-cols-2">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {intro ? (
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{intro}</p>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        <div className="leaf-frame mx-auto w-full max-w-md">
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[4/5] w-full object-cover"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
