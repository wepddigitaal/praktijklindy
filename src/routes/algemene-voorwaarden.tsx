import { createFileRoute } from "@tanstack/react-router";
import { contactInfo } from "@/lib/images";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene voorwaarden — Praktijk Lindy" },
      {
        name: "description",
        content:
          "De algemene voorwaarden van Praktijk Lindy: afspraken, tarieven, afzeggen en klachtrecht via GAT.",
      },
      { property: "og:title", content: "Algemene voorwaarden — Praktijk Lindy" },
      {
        property: "og:description",
        content: "Afspraken, tarieven, afzeggen en klachtrecht bij Praktijk Lindy.",
      },
    ],
  }),
  component: Voorwaarden,
});

function Voorwaarden() {
  return (
    <article className="container-page prose-lindy max-w-3xl py-20">
      <p className="eyebrow">Juridisch</p>
      <h1 className="mt-3 text-4xl">Algemene voorwaarden</h1>
      <p className="text-sm text-muted-foreground">
        Praktijk Lindy — Lindy Prins, {contactInfo.address}, KvK {contactInfo.kvk}.
      </p>

      <h2>1. Afspraken en begeleiding</h2>
      <p>
        Begeleiding bij Praktijk Lindy vindt plaats op basis van vrijwilligheid. Sessies kunnen
        fysiek in de praktijk, online of op afstand plaatsvinden. De begeleiding is
        complementair en vervangt geen medische of psychiatrische zorg. Bij twijfel word je
        doorverwezen naar je huisarts of behandelaar.
      </p>

      <h2>2. Kinderen</h2>
      <p>
        Voor begeleiding van kinderen onder de 16 jaar is toestemming van beide gezaghebbende
        ouders of verzorgers nodig. Ouders blijven eindverantwoordelijk voor hun kind.
      </p>

      <h2>3. Tarieven en betaling</h2>
      <p>
        De actuele tarieven staan op de aanbodpagina. Facturen worden per mail verstuurd en
        dienen binnen 14 dagen te worden betaald, tenzij anders afgesproken.
      </p>

      <h2>4. Afzeggen of verplaatsen</h2>
      <p>
        Een afspraak kan tot 24 uur voor aanvang kosteloos worden verzet of afgezegd. Bij
        latere afzegging wordt de sessie in rekening gebracht.
      </p>

      <h2>5. Privacy en dossier</h2>
      <p>
        Alles wat je deelt is vertrouwelijk. Gegevens worden zorgvuldig en niet langer dan
        nodig bewaard, in overeenstemming met de AVG. Er wordt geen informatie met derden
        gedeeld zonder jouw toestemming.
      </p>

      <h2>6. Aansprakelijkheid</h2>
      <p>
        Je blijft zelf verantwoordelijk voor je eigen proces en keuzes. Praktijk Lindy is niet
        aansprakelijk voor indirecte schade of gevolgschade.
      </p>

      <h2>7. Klachten</h2>
      <p>
        Heb je een klacht? Laat het me eerst persoonlijk weten, dan kijken we samen naar een
        oplossing. Als CAT-therapeut val ik onder GAT-Wkkgz klachtrecht en GAT-tuchtrecht bij
        de Geschilleninstantie Alternatieve Therapeuten (GAT). Meer informatie:{" "}
        <a
          href="https://gatgeschillen.nl"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-primary underline decoration-clay decoration-2 underline-offset-4"
        >
          gatgeschillen.nl
        </a>
        .
      </p>

      <p className="mt-10 rounded-2xl bg-secondary p-5 text-sm">
        Deze tekst is een werkversie op basis van de standaardvoorwaarden. Zodra jij je
        definitieve documenten aanlevert, vervangen we deze tekst één-op-één.
      </p>
    </article>
  );
}
