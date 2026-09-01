import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, HeartHandshake, Leaf, Baby } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaLink, ClosingCta } from "@/components/site/CTA";
import { img } from "@/lib/images";
import { socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    socialMeta({
      path: "/",
      title: "Praktijk Lindy — energetisch gezinstherapeut in Voorburg",
      description:
        "Lindy Prins helpt kinderen, vrouwen en gezinnen met NEI-therapie, systemisch werk en energetische begeleiding in Voorburg. Waar jij écht gezien en gehoord wordt.",
      image: img.heroHome,
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Praktijk Lindy — Voorburg"
        title="Waar jij écht gezien en gehoord wordt"
        intro="Energetische gezinstherapie voor kinderen en volwassenen. Samen kijken we voorbij het gedrag en de klacht, terug naar de kern — zodat er weer rust, ruimte en vertrouwen kan ontstaan."
        image={img.heroHome}
        imagePosition="72% center"
        imageAlt="Lindy Prins, energetisch gezinstherapeut"
        actions={
          <>
            <CtaLink to="/" hash="wie-ben-ik">
              Lees meer
            </CtaLink>
            <CtaLink to="/contact" hash="plan-je-afspraak" variant="outline">
              Contact
            </CtaLink>
          </>
        }
      />

      <section className="container-page py-16">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="font-display text-2xl leading-relaxed text-foreground italic sm:text-3xl">
            “Be yourself, everybody else is taken. Be yourself, listen with your heart. Be
            yourself, shine like the diamond you are — a beautiful brilliant star. Be
            yourself, the greatest work of art.”
          </blockquote>
          <figcaption className="mt-4 text-sm tracking-widest text-muted-foreground uppercase">
            Be Yourself — Perquois
          </figcaption>
        </figure>
      </section>

      <section id="wie-ben-ik" className="scroll-mt-24 bg-secondary/50 py-20">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="prose-lindy">
            <p className="eyebrow">Wie ben ik?</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Lindy Prins</h2>
            <p>
              Als energetisch gezinstherapeut kijk ik verder dan alleen het gedrag of de
              klacht die zichtbaar is. Ik geloof dat ieder mens — en ieder gezin — een eigen
              verhaal draagt. Een verhaal dat gehoord, gevoeld en gezien wil worden. Juist
              daar ligt voor mij de sleutel naar verandering en heling.
            </p>
            <p>
              Voordat ik mijn eigen praktijk startte, werkte ik jarenlang met hart en ziel
              aan Veer-Krachtige Ouders: een initiatief voor ouders van kinderen met een
              complex geboorteverhaal, zoals vroeggeboorte. Vanuit mijn eigen ervaring als
              moeder van twee prematuur geboren kinderen én mijn achtergrond als sociaal
              pedagogisch hulpverlener weet ik hoe belangrijk het is om je écht gezien en
              gehoord te voelen.
            </p>
            <p>
              Toen ik in aanraking kwam met de biotensor voelde ik direct:{" "}
              <strong>dit past bij mij</strong>. Sindsdien combineer ik systemisch werk,
              NEI-therapie, energetisch werk en intuïtieve begeleiding om op diep niveau
              verschil te kunnen maken.
            </p>
            <p>
              En ja… soms mag er onderweg ook gewoon gelachen worden. Heling hoeft niet
              altijd zwaar te zijn — soms ontstaat juist in een ontspannen moment de grootste
              beweging.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/aanbod">Bekijk het aanbod</CtaLink>
              <CtaLink to="/diensten" variant="outline">
                Mijn werkwijze
              </CtaLink>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xs gap-5 sm:max-w-sm">
            <img
              src={img.lindyWerk}
              alt="Lindy aan het werk in haar praktijk"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
            />
            <img
              src={img.lindyNatuur}
              alt="Lindy in de natuur"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
            />
          </div>

        </div>
      </section>

      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Waarom mensen bij mij komen</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Omdat ze voelen dat het tijd is</h2>
          <p className="mt-4 text-muted-foreground">
            Voor zichzelf, hun kind of hun gezin. Ze lopen vast in terugkerende patronen,
            emoties, onrust of lichamelijke klachten en verlangen naar meer rust, energie en
            verbinding.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Voorbij het gedrag",
              text: "We kijken naar wat er onder de oppervlakte speelt: in het lichaam, het familiesysteem en het onbewuste.",
            },
            {
              icon: HeartHandshake,
              title: "Zonder oordeel",
              text: "Een veilige plek waar ruimte is voor zachtheid, inzicht, beweging én soms gewoon even ademhalen.",
            },
            {
              icon: Leaf,
              title: "Voor het hele gezin",
              text: "Voor kinderen én volwassenen. Fysiek in de praktijk, online of op afstand via een foto.",
            },
          ].map((c) => (
            <article key={c.title} className="surface-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div className="leaf-frame mx-auto w-full max-w-sm">
            <img
              src={img.lindyStaand}
              alt="Lindy Prins"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="prose-lindy">
            <p className="eyebrow">Extra inzet</p>
            <h2 className="mt-3 text-3xl">Ambassadeur Kansrijke Start</h2>
            <p>
              Als ambassadeur van de Landelijke Coalitie Kansrijke Start zet ik mij in voor
              meer aandacht voor ouderperspectief, ervaringsdeskundigheid en een holistische
              blik binnen de eerste 1000 dagen.
            </p>
            <p>
              Ik geloof in zorg waarin écht geluisterd wordt en waarin ruimte is voor het
              volledige verhaal achter ouder en kind.
            </p>
            <p className="script-note">Niets over ons, zonder ons.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="prose-lindy">
            <p className="eyebrow">En verder…</p>
            <h2 className="mt-3 text-3xl">Even iets persoonlijks</h2>
            <ul>
              <li>
                Je vindt mij het liefst in de natuur — met mijn voeten in het gras, tussen de
                bomen.
              </li>
              <li>
                Vergeet ik op tijd te eten? Dan verandert “Lindy” spontaan in “hangry Lindy”
                (mijn gezin kan dit bevestigen 😉).
              </li>
              <li>
                Ik geloof niet in toeval en blijf me verwonderen over de magie van het leven.
              </li>
              <li>
                Naast mijn praktijk speel ik op hoog niveau softbal — de perfecte tegenhanger
                van dit diepgaande werk. ⚾
              </li>
            </ul>
          </div>
          <div className="surface-card overflow-hidden">
            <img
              src={img.elementen}
              alt="De vijf elementen uit de Chinese geneeskunde"
              loading="lazy"
              className="w-full object-cover"
            />
            <p className="p-6 text-center font-display text-xl">
              Ik werk met de 5 elementen vanuit de Chinese geneeskunde: Vuur, Aarde, Metaal,
              Water en Hout.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-8">
        <div className="surface-card grid items-center gap-10 p-8 md:grid-cols-2 md:p-12">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Baby className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl">Bekijk waar ik je mee kan helpen</h2>
            <p className="mt-4 text-muted-foreground">
              Van een losse sessie tot een verdiepend traject voor jou of je kind. In het
              overzicht zie je precies welke begeleiding bij jouw vraag past.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/aanbod">Bekijk mijn aanbod</CtaLink>
              <CtaLink to="/diensten" variant="outline">
                Naar de diensten
              </CtaLink>
            </div>
          </div>
          <img
            src={img.schemaHulp}
            alt="Overzicht van waar Praktijk Lindy bij kan helpen"
            loading="lazy"
            className="w-full rounded-3xl"
          />
        </div>
      </section>

      <Testimonials />
      <ClosingCta />
    </>
  );
}
