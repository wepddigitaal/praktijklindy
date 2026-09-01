import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, Users, Baby } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaLink, ClosingCta } from "@/components/site/CTA";
import { Testimonials, kindTestimonials } from "@/components/site/Testimonials";
import { img } from "@/lib/images";
import { socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/aanbod")({
  head: () =>
    socialMeta({
      path: "/aanbod",
      title: "Aanbod — losse sessies en trajecten | Praktijk Lindy",
      description:
        "Kies een losse sessie (Love Yourself) of een verdiepend traject: Be Yourself voor vrouwen en Be Wonderfully You voor kinderen.",
      image: img.heroAanbod,
    }),
  component: Aanbod,
});

const pakketten = [
  {
    id: "love-yourself",
    icon: Sparkles,
    name: "Love Yourself",
    tagline: "Soms is één sessie genoeg om weer verder te kunnen.",
    price: "€ 95,- per sessie",
    features: [
      "Persoonlijke 1-op-1 begeleiding",
      "Meestal 1 tot 3 sessies voldoende",
      "NEI-therapie, systemisch werk & energetische therapie",
      "Inzicht in de kern van je klacht",
      "Direct toepasbare handvatten",
      "Voor kinderen én volwassenen",
      "Veilig, liefdevol en zonder oordeel",
      "Weer rust, helderheid en vertrouwen",
    ],
    featured: false,
  },
  {
    id: "be-yourself",
    icon: Users,
    name: "Be Yourself",
    tagline: "Voor vrouwen die zichzelf willen terugvinden.",
    price: "€ 1444,-",
    features: [
      "Voor vrouwen die voelen dat er iets ontbreekt, zonder precies te weten waarom",
      "We onderzoeken waar jouw patronen zijn ontstaan — in je vroege leven, je gezin van herkomst of zelfs al vóór je geboorte",
      "Doorbreek oude overlevingspatronen en laat los wat je niet langer dient",
      "Ervaar meer innerlijke rust, levensenergie en zelfvertrouwen",
      "Leer gezonde grenzen voelen én liefdevol aangeven",
      "Kom thuis in jezelf, je lichaam en je eigen kracht",
      "Traject van 9 maanden: 1-op-1 sessies, opdrachten en ondersteuning tussendoor",
      "Inclusief een exclusieve livedag — maximaal 9 vrouwen",
    ],
    featured: true,
  },
  {
    id: "be-wonderfully-you",
    icon: Baby,
    name: "Be Wonderfully You",
    tagline: "Gedrag is geen probleem, maar een signaal.",
    price: "Op aanvraag",
    features: [
      "Samen ontdekken we wat jouw kind nodig heeft om weer in zijn of haar kracht te staan",
      "Voor kinderen die snel overprikkeld zijn, veel voelen, onzeker zijn of vastlopen",
      "We gaan terug naar de kern, voorbij het gedrag",
      "Begeleiding op afstand, online of in de praktijk",
      "Ouders worden volledig meegenomen in het proces",
      "Rust, veerkracht en zelfvertrouwen mogen weer groeien",
    ],
    featured: false,
  },
];

function Aanbod() {
  return (
    <>
      <PageHero
        eyebrow="Aanbod"
        title="Iedere verandering begint met één stap"
        intro="Soms heb je genoeg aan één sessie om weer verder te kunnen. Soms vraagt jouw proces om meer tijd en verdieping. En soms is het jouw kind dat laat zien dat er iets gezien mag worden."
        image={img.heroAanbod}
        imageAlt="Lindy in gesprek in haar praktijk"
        actions={
          <>
            <CtaLink to="/aanbod" hash="pakketten">
              Bekijk het aanbod
            </CtaLink>
            <CtaLink to="/contact" hash="plan-je-afspraak" variant="outline">
              Contact
            </CtaLink>
          </>
        }
      />

      <section className="container-page py-16">
        <p className="mx-auto max-w-2xl text-center text-lg text-muted-foreground">
          Daarom kun je kiezen voor een losse sessie of een verdiepend traject, afgestemd op
          wat jij of jouw kind nodig heeft.
        </p>
      </section>

      <section id="pakketten" className="container-page scroll-mt-24 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {pakketten.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className={`surface-card flex scroll-mt-24 flex-col p-8 ${
                p.featured ? "ring-2 ring-accent/50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                {p.featured ? (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Verdiepend traject
                  </span>
                ) : null}
              </div>
              <h2 className="mt-5 text-2xl">{p.name}</h2>
              <p className="mt-1 text-sm italic text-muted-foreground">{p.tagline}</p>
              <p className="mt-5 font-display text-2xl text-primary">{p.price}</p>
              <ul className="mt-6 grid gap-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-clay" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CtaLink
                  to="/contact"
                  hash="plan-je-afspraak"
                  variant={p.featured ? "clay" : "outline"}
                >
                  Aanmelden of vraag stellen
                </CtaLink>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          De uitgebreide inhoud van de trajecten volgt binnenkort op een eigen pagina per
          traject.
        </p>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div className="prose-lindy">
            <p className="eyebrow">Thuiskomen bij jezelf</p>
            <h2 className="mt-3 text-3xl">Hoe zou het voelen als…</h2>
            <ul>
              <li>je jezelf niet langer hoeft aan te passen?</li>
              <li>je kiest voor wat goed voelt voor jóu?</li>
              <li>je met vertrouwen jouw plek inneemt?</li>
              <li>je leeft vanuit rust, vrijheid en liefde?</li>
              <li>je eindelijk voelt: dit ben ik.</li>
            </ul>
            <p>
              Het universum maakt geen fouten. Jij bent hier niet voor niets. Juist door
              jezelf te zijn, maak je het verschil — voor jezelf én voor de mensen om je heen.
            </p>
            <div className="mt-6">
              <CtaLink to="/aanbod" hash="be-yourself" variant="outline">
                Lees meer over Be Yourself
              </CtaLink>
            </div>
          </div>
          <div className="prose-lindy">
            <p className="eyebrow">Voor ouders</p>
            <h2 className="mt-3 text-3xl">Wat heeft jouw kind jou te vertellen?</h2>
            <p>Achter ieder gedrag schuilt een verhaal.</p>
            <p>
              Misschien zie je een kind dat snel overprikkeld is, moeite heeft met slapen,
              veel piekert, boos of verdrietig is, vastloopt op school of worstelt met een
              diagnose. Vaak is dat geen teken dat er iets mis is met je kind, maar een
              signaal dat het iets nodig heeft.
            </p>
            <p>
              In mijn begeleiding kijken we voorbij het gedrag en gaan we terug naar de kern.
              Daar waar rust, veerkracht en zelfvertrouwen weer mogen groeien. Want als een
              kind zich gezien en begrepen voelt, ontstaat er ruimte om weer écht kind te
              zijn.
            </p>
            <div className="mt-6">
              <CtaLink to="/aanbod" hash="be-wonderfully-you" variant="outline">
                Lees meer over Wonderfully You
              </CtaLink>
            </div>
          </div>
        </div>
      </section>


      <Testimonials
        items={kindTestimonials}
        eyebrow="Ervaringen van ouders"
        title="Wat ouders vertellen over sessies met hun kind"
      />


      <section className="container-page py-20">
        <div className="surface-card grid items-center gap-10 p-8 md:grid-cols-[1fr_0.8fr] md:p-12">
          <div>
            <p className="eyebrow">Herken jij jezelf hierin?</p>
            <h2 className="mt-3 text-3xl">Ben jij misschien een alleen geboren tweeling?</h2>
            <p className="mt-4 text-muted-foreground">
              Veel mensen die zich al hun hele leven “anders” voelen, blijken hun leven niet
              alleen begonnen te zijn. Op een eigen pagina lees je rustig wat dit betekent en
              of je jezelf hierin herkent.
            </p>
            <div className="mt-8">
              <Link
                to="/alleen-geboren-tweeling"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-moss"
              >
                Lees over alleen geboren tweelingen
              </Link>
            </div>
          </div>
          <img
            src={img.extra1}
            alt="Sfeerbeeld praktijk"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </section>

      <Testimonials />
      <ClosingCta />
    </>
  );
}
