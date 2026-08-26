import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaLink({
  to,
  hash,
  children,
  variant = "primary",
}: {
  to: string;
  hash?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "clay";
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all";
  const styles = {
    primary:
      "bg-primary text-primary-foreground shadow-[var(--shadow-card)] hover:bg-moss hover:-translate-y-0.5",
    outline:
      "border border-primary/30 bg-card text-foreground hover:border-primary hover:bg-secondary",
    clay: "bg-accent text-accent-foreground shadow-[var(--shadow-card)] hover:-translate-y-0.5",
  } as const;

  return (
    <Link to={to} {...(hash ? { hash } : {})} className={`${base} ${styles[variant]}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function ClosingCta({
  title = "Voel je welkom",
  text = "Nieuwsgierig wat ik voor jou of jouw kind kan betekenen? Een kort kennismakingsgesprek is altijd vrijblijvend.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-page py-16">
      <div className="relative overflow-hidden rounded-4xl bg-[image:var(--gradient-moss)] px-8 py-14 text-center text-moss-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-clay/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl text-moss-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-moss-foreground/85">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink to="/contact" hash="plan-je-afspraak" variant="clay">
              Neem contact op
            </CtaLink>
            <CtaLink to="/aanbod" variant="outline">
              Bekijk het aanbod
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
