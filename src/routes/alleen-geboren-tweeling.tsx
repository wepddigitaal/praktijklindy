import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaLink, ClosingCta } from "@/components/site/CTA";
import { img } from "@/lib/images";
import { socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/alleen-geboren-tweeling")({
  head: () =>
    socialMeta({
      path: "/alleen-geboren-tweeling",
      title: "Alleen geboren tweeling — herken jij jezelf hierin? | Praktijk Lindy",
      description:
        "Voel je je vaak alleen, anders of niet begrepen? Misschien ben je een alleen geboren tweeling. Lees de kenmerken en hoe liefdevolle begeleiding kan helpen.",
      image: img.aanbodIllustratie,
      type: "article",
    }),
  component: AlleenGeborenTweeling,
});

const kenmerken = [
  "Je voelt je vaak alleen, anders of niet helemaal begrepen",
  "Je bent gevoelig, snel overprikkeld of voelt emoties van anderen sterk aan",
  "Verbinding en relaties voelen ingewikkeld: je verlangt ernaar, maar vindt het ook spannend",
  "Je hebt of had moeite met loslaten, afscheid nemen of alleen zijn",
  "Je ervaart onrust, schuldgevoel of een diep gemis zonder duidelijke reden",
  "Je hoofd en gevoel spreken elkaar vaak tegen",
  "Je bent tegelijkertijd sterk én kwetsbaar, sociaal én teruggetrokken",
  "Je zoekt veel in het leven, maar niets lijkt écht volledig voldoening te geven",
  "Je voelt verantwoordelijkheid voor anderen en vergeet daarin jezelf",
  "Je hebt lichamelijke klachten, spanning of vermoeidheid zonder duidelijke oorzaak",
  "Je kunt moeilijk grenzen voelen of aangeven",
  "Je leeft intens, voelt intens en denkt intens",
];

function AlleenGeborenTweeling() {
  return (
    <>
      <PageHero
        eyebrow="Alleen geboren tweelingen"
        title="Voel jij je vaak alleen, anders of niet begrepen?"
        intro="Heb je het gevoel dat er iets ontbreekt in je leven, zonder dat je precies kunt aanwijzen wat? Misschien ben je al je hele leven “zoekende” naar compleetheid, verbinding of thuiskomen."
        image={img.aanbodIllustratie}
        imageAlt="Twee baby's samen in de baarmoeder"
        actions={
          <>
            <CtaLink to="/alleen-geboren-tweeling" hash="herkenning">
              Herken jij jezelf hierin?
            </CtaLink>
            <CtaLink to="/aanbod" variant="outline">
              Bekijk het aanbod
            </CtaLink>
          </>
        }
      />

      <section className="container-page py-20">
        <div className="prose-lindy mx-auto max-w-3xl">
          <p>
            Veel mensen die zich hierin herkennen, voelen zich al van jongs af aan anders dan
            hun omgeving. Alsof je er niet helemaal bij hoort, zelfs wanneer anderen je
            ervaren als warm, prettig en fijn gezelschap. Deze innerlijke tegenstrijdigheid
            kan verwarrend zijn, zeker als je zelf niet begrijpt waar die gevoelens vandaan
            komen.
          </p>
          <p>
            Ook lichamelijke signalen kunnen een rol spelen. Misschien was je als baby veel
            aan het huilen, extreem aanhankelijk of juist heel teruggetrokken. Misschien had
            je eczeem, allergieën, een gevoelige huid of klachten waar nooit echt een
            duidelijke oorzaak voor werd gevonden.
          </p>
          <p>
            Ook in relaties kan dit zichtbaar worden: soms ga je er volledig in op, soms durf
            je je juist helemaal niet te verbinden. Of voelt het alsof relaties nooit helemaal
            kloppend of compleet zijn.
          </p>
          <p>
            <strong>
              Het zou namelijk kunnen dat jij je leven niet alleen bent begonnen, maar dat er
              nog een baby’tje samen met jou in de baarmoeder zat. Zonder dat iemand dat ooit
              wist.
            </strong>
          </p>
        </div>
      </section>

      <section id="herkenning" className="scroll-mt-24 bg-secondary/50 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Herkenning</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Herken jij jezelf hierin?</h2>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-2">
            {kenmerken.map((k) => (
              <li key={k} className="surface-card px-5 py-4 text-sm text-muted-foreground">
                {k}
              </li>
            ))}
          </ul>
          <div className="prose-lindy mx-auto mt-12 max-w-3xl text-center">
            <p>
              Veel alleen geboren tweelingen herkennen zichzelf in deze innerlijke
              tegenstrijdigheden. Alsof er altijd een deel van jou op zoek blijft naar
              verbinding, compleetheid of thuiskomen.
            </p>
            <p>
              Wanneer je dit begint te begrijpen, vallen er vaak puzzelstukjes op hun plek. Zo
              ontstaat er ruimte voor zachtheid, (h)erkenning en heling.
            </p>
            <p className="script-note">♥ Het is jouw reis, “I’ve got your back” ♥</p>
          </div>
        </div>
      </section>

      <ClosingCta
        title="Ben jij er klaar voor?"
        text="Voel je dat dit verhaal over jou gaat? Laat het me weten — we kijken samen welke begeleiding past."
      />
    </>
  );
}
