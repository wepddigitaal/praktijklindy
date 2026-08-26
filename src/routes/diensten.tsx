import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaLink, ClosingCta } from "@/components/site/CTA";
import { img } from "@/lib/images";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — NEI-therapie & systemisch werk | Praktijk Lindy" },
      {
        name: "description",
        content:
          "Waar ik bij kan helpen: NEI-therapie, systemisch werk en doorbraakcoaching voor volwassenen en kinderen. Fysiek, online of op afstand.",
      },
      { property: "og:title", content: "Diensten — Praktijk Lindy" },
      {
        property: "og:description",
        content:
          "NEI-therapie, systemisch werk en doorbraakcoaching voor volwassenen en kinderen.",
      },
    ],
  }),
  component: Diensten,
});

const methoden = [
  {
    title: "NEI-therapie",
    image: img.methodeNei,
    text: "Neuro Emotionele Integratie: zichtbaar maken wat je onbewust met je meedraagt.",
  },
  {
    title: "Systemisch werk",
    image: img.methodeSystemisch,
    text: "Kijken naar het grotere geheel: je gezin van herkomst en de patronen daarin.",
  },
  {
    title: "Doorbraakcoaching",
    image: img.methodeDoorbraak,
    text: "Concrete stappen zetten waar je jarenlang op vastliep.",
  },
];

function Diensten() {
  return (
    <>
      <PageHero
        eyebrow="Diensten"
        title="Waar ik bij kan helpen"
        intro="Soms weet je even niet meer hoe verder. In mijn praktijk begeleid ik kinderen en volwassenen naar meer rust, balans en verbinding met zichzelf — zodat de levensenergie weer kan stromen."
        image={img.volwassenen}
        imageAlt="Rustige plek in de praktijk van Lindy"
        actions={
          <>
            <CtaLink to="/diensten" hash="voor-volwassenen">
              Voor volwassenen
            </CtaLink>
            <CtaLink to="/diensten" hash="voor-kinderen" variant="outline">
              Voor kinderen
            </CtaLink>
          </>
        }
      />

      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Werkwijze</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Ik werk met de volgende methoden</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {methoden.map((m) => (
            <article key={m.title} className="surface-card p-7 text-center">
              <img
                src={m.image}
                alt={m.title}
                loading="lazy"
                className="mx-auto h-28 w-28 rounded-full object-cover shadow-[var(--shadow-card)]"
              />
              <h3 className="mt-6 text-xl">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
            </article>
          ))}
        </div>
        <div className="prose-lindy mx-auto mt-14 max-w-3xl text-center">
          <p>
            Soms voel je dat je niet helemaal jezelf bent. Dat je vastloopt, sneller
            overprikkeld raakt, moe bent of steeds tegen dezelfde gevoelens, patronen of
            lichamelijke klachten aanloopt. Ook kinderen laten vaak op hun eigen manier zien
            dat ze niet lekker in hun vel zitten.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaLink to="/diensten" hash="wat-is-nei" variant="outline">
              Wat is NEI-therapie?
            </CtaLink>
          </div>
        </div>
      </section>

      <section id="voor-volwassenen" className="scroll-mt-24 bg-secondary/50 py-20">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div className="prose-lindy">
            <p className="eyebrow">Voor volwassenen</p>
            <h2 className="mt-3 text-3xl">Herken je dit?</h2>
            <p>
              Soms voel je: <strong>zo wil ik niet langer doorgaan.</strong> Je leeft vooral
              op de automatische piloot, bent veel aan het zorgen, denken of volhouden… maar
              écht rust, plezier en verbinding voel je steeds minder.
            </p>
            <ul>
              <li>Je hoofd staat altijd “aan” en ontspannen lukt moeilijk.</li>
              <li>Je loopt steeds tegen dezelfde patronen of emoties aan.</li>
              <li>Je voelt je snel overprikkeld, moe of leeggezogen.</li>
              <li>Je past je veel aan anderen aan en raakt jezelf daarin kwijt.</li>
              <li>Je zegt snel sorry of voelt je vaak schuldig.</li>
              <li>Grenzen aangeven of kiezen voor jezelf voelt lastig.</li>
              <li>Verbinden met anderen is moeilijk: je sluit je af óf vraagt juist veel.</li>
              <li>Diep vanbinnen voel je dat er méér in je zit dan hoe je nu leeft.</li>
            </ul>
            <p>
              Je verlangt naar meer rust, vertrouwen en energie. Niet alleen overleven, maar
              écht leven — vanuit verbinding met jezelf.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink to="/aanbod" hash="be-yourself">
                Bekijk het traject Be Yourself
              </CtaLink>
            </div>
          </div>
          <img
            src={img.praktijkDetail}
            alt="Detail uit de praktijkruimte"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </section>

      <section id="voor-kinderen" className="container-page scroll-mt-24 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src={img.kindje}
            alt="Kind dat weer vrij kan spelen"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
          />
          <div className="prose-lindy">
            <p className="eyebrow">Voor kinderen</p>
            <h2 className="mt-3 text-3xl">Zie je dit bij je kind?</h2>
            <ul>
              <li>Een complex geboorteverhaal (bijvoorbeeld vroeggeboorte)</li>
              <li>Snel overprikkeld of moeite met prikkelverwerking</li>
              <li>Je kind lijkt “op z’n tenen te lopen” in deze drukke maatschappij</li>
              <li>Angsten of stemmingswisselingen</li>
              <li>Vage of onverklaarbare klachten</li>
              <li>Slaapproblemen</li>
              <li>Moeite met het uiten van gevoelens</li>
              <li>Uitdagingen zoals AD(H)D, dyslexie, autisme of HSP</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink to="/aanbod" hash="be-wonderfully-you">
                Bekijk Be Wonderfully You
              </CtaLink>
              <CtaLink to="/contact" hash="plan-je-afspraak" variant="outline">
                Neem contact op
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="font-display text-2xl leading-relaxed italic sm:text-3xl">
            “Wanneer je stopt met alleen maar volhouden, ontstaat er ruimte om jezelf weer
            écht te voelen.”
          </blockquote>
        </figure>
      </section>

      <section id="wat-is-nei" className="scroll-mt-24 bg-secondary/50 py-20">
        <div className="container-page prose-lindy max-w-3xl">
          <p className="eyebrow">NEI-therapie</p>
          <h2 className="mt-3 text-3xl">Wat is NEI-therapie?</h2>
          <p>
            NEI staat voor <em>Neuro Emotionele Integratie</em>. Eigenlijk draait het om iets
            heel moois: zichtbaar maken wat jij onbewust met je meedraagt.
          </p>
          <p>
            Ons lichaam en onderbewustzijn slaan van alles op: emoties, ervaringen,
            overtuigingen of gebeurtenissen die niet volledig verwerkt zijn. Soms uit zich dat
            in lichamelijke klachten, onrust, vermoeidheid, onzekerheid, angsten of steeds
            terugkerende patronen.
          </p>
          <p>
            Met NEI gaan we samen op zoek naar de kern achter de klacht. Niet alleen kijken
            naar <em>wat</em> je voelt, maar vooral naar <em>waarom</em> jouw systeem dit laat
            zien.
          </p>
          <h3>NEI kan onder andere helpen bij</h3>
          <ul>
            <li>Stress, onrust en overprikkeling</li>
            <li>Onzekerheid of angst</li>
            <li>Vermoeidheid of lichamelijke klachten</li>
            <li>Terugkerende patronen</li>
            <li>Emoties die je moeilijk kunt plaatsen</li>
            <li>Moeite met grenzen aangeven en hooggevoeligheid</li>
          </ul>
          <p>
            NEI is een veilige en zachte methode. Jouw onderbewustzijn bepaalt altijd wat je
            op dat moment aankunt — we gaan nooit verder dan goed voelt voor jou.
          </p>
          <p>
            <strong>
              Sessies kunnen fysiek in de praktijk, online of op afstand via een foto.
            </strong>
          </p>
          <h3>Ik werk met een biotensor</h3>
          <p>
            Daarmee stem ik af op jouw onderbewustzijn en lichaam. Jouw systeem geeft zelf aan
            wat aandacht vraagt en wat losgelaten mag worden. Het mooie aan NEI vind ik dat je
            niet alles opnieuw hoeft te herbeleven of uren hoeft te praten.
          </p>
          <h3>Sessies bij kinderen</h3>
          <p>
            Ook bij kinderen werkt NEI snel; zij staan nog dicht bij hun ware ik. Met kinderen
            werk ik vaak op afstand: ouders delen vooraf waar hun kind tegenaan loopt, waarna
            ik me via een foto op het kind afstem. Daarna koppel ik alles rustig terug aan de
            ouders. Natuurlijk kan een ouder er ook bij aanwezig zijn.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface-card p-8">
            <h3 className="text-2xl">Voel jij dat het tijd is voor jou om…</h3>
            <ul className="prose-lindy mt-4">
              <li>Echt te gaan leven — op jouw voorwaarden</li>
              <li>Jezelf (weer) op één te zetten en in jezelf te investeren</li>
              <li>Patronen écht aan te kijken en los te laten</li>
              <li>Voor jezelf te kiezen, ongeacht wat een ander daarvan vindt</li>
            </ul>
          </article>
          <article className="surface-card p-8">
            <h3 className="text-2xl">Voel jij dat het tijd is voor jouw kind om…</h3>
            <ul className="prose-lindy mt-4">
              <li>Meer rust, ontspanning en zelfvertrouwen te voelen</li>
              <li>Vrijer zichzelf te kunnen zijn</li>
              <li>Minder last te hebben van emoties, spanning of overprikkeling</li>
              <li>Weer vanuit plezier en vertrouwen te ontwikkelen</li>
            </ul>
          </article>
        </div>
      </section>

      <ClosingCta
        title="Klaar voor de eerste stap?"
        text="Weet je niet zeker welke begeleiding past? Stuur me een bericht — samen kijken we wat jij of jouw kind nodig heeft."
      />
    </>
  );
}
