import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaLink } from "@/components/site/CTA";
import { contactInfo, img } from "@/lib/images";
import { socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    socialMeta({
      path: "/contact",
      title: "Contact — Praktijk Lindy in Voorburg",
      description:
        "Neem contact op met Praktijk Lindy in Voorburg. Mail info@praktijklindy.nl, bel of app 06 53370827, of plan direct je afspraak.",
      image: img.lindyPortret,
    }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ naam: "", email: "", bericht: "" });

  const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    `Bericht via website van ${form.naam || "de website"}`,
  )}&body=${encodeURIComponent(`${form.bericht}\n\n${form.naam}\n${form.email}`)}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Laten we kennismaken"
        intro="Heb je een vraag of wil je een afspraak maken? Stuur me een bericht of app me — ik denk graag met je mee, ook als je nog niet precies weet wat je nodig hebt."
        image={img.lindyPortret}
        imageAlt="Praktijk Lindy in Voorburg"
        actions={
          <>
            <CtaLink to="/contact" hash="plan-je-afspraak">
              Plan je afspraak
            </CtaLink>
            <CtaLink to="/aanbod" variant="outline">
              Bekijk het aanbod
            </CtaLink>
          </>
        }
      />

      <section id="plan-je-afspraak" className="container-page scroll-mt-24 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {[
              {
                icon: Mail,
                label: "Mail",
                value: contactInfo.email,
                href: `mailto:${contactInfo.email}`,
              },
              {
                icon: Phone,
                label: "Bellen of appen",
                value: contactInfo.phone,
                href: contactInfo.phoneHref,
              },
              { icon: MapPin, label: "Praktijkadres", value: contactInfo.address },
            ].map((c) => (
              <div key={c.label} className="surface-card flex items-start gap-4 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="text-lg text-foreground hover:text-primary">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-lg">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="surface-card flex items-start gap-4 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                <CalendarCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Online agenda
                </p>
                <p className="text-lg">Direct je afspraak inplannen</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  De koppeling met Mijn Diad wordt na de zomer geactiveerd. Tot die tijd plan
                  ik je afspraak graag persoonlijk in via mail of WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <form
            className="surface-card p-8"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
          >
            <h2 className="text-2xl">Stuur een bericht</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Vul je gegevens in; je eigen mailprogramma opent met het bericht klaar om te
              versturen.
            </p>
            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium">
                Naam
                <input
                  required
                  value={form.naam}
                  onChange={(e) => setForm({ ...form, naam: e.target.value })}
                  className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                E-mailadres
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Je bericht
                <textarea
                  required
                  rows={6}
                  value={form.bericht}
                  onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                  className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-moss"
              >
                Verstuur bericht
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
