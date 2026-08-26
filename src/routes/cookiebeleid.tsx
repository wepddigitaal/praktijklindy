import { createFileRoute } from "@tanstack/react-router";
import { contactInfo } from "@/lib/images";

export const Route = createFileRoute("/cookiebeleid")({
  head: () => ({
    meta: [
      { title: "Cookiebeleid — Praktijk Lindy" },
      {
        name: "description",
        content:
          "Welke cookies Praktijk Lindy gebruikt: functioneel, analytisch en marketing, en hoe je jouw voorkeuren aanpast.",
      },
      { property: "og:title", content: "Cookiebeleid — Praktijk Lindy" },
      {
        property: "og:description",
        content: "Welke cookies Praktijk Lindy gebruikt en hoe je ze verwijdert.",
      },
    ],
  }),
  component: Cookiebeleid,
});

function Cookiebeleid() {
  return (
    <article className="container-page prose-lindy max-w-3xl py-20">
      <p className="eyebrow">Juridisch</p>
      <h1 className="mt-3 text-4xl">Cookiebeleid</h1>
      <p className="text-sm text-muted-foreground">Laatst bijgewerkt: 10-07-2026</p>

      <p>
        Op de website van Lindy Prins — Energetisch Gezinstherapeut maken wij gebruik van
        cookies. We vinden jouw privacy belangrijk en gaan zorgvuldig om met jouw
        persoonsgegevens. In dit cookiebeleid leggen we uit welke cookies wij gebruiken en
        waarom.
      </p>

      <h2>Wat zijn cookies?</h2>
      <p>
        Cookies zijn kleine tekstbestanden die tijdens een bezoek aan een website op jouw
        computer, tablet of smartphone worden opgeslagen. Ze zorgen ervoor dat de website goed
        werkt en helpen ons de website gebruiksvriendelijker te maken.
      </p>

      <h2>Welke cookies gebruiken wij?</h2>

      <h3>Functionele cookies</h3>
      <p>
        Deze cookies zijn noodzakelijk voor het goed functioneren van de website. Denk
        bijvoorbeeld aan het onthouden van jouw cookievoorkeuren of het goed laden van pagina's.
        Deze cookies kunnen niet worden uitgeschakeld.
      </p>

      <h3>Analytische cookies</h3>
      <p>
        Met analytische cookies krijgen wij inzicht in het gebruik van onze website. Hierdoor
        kunnen wij onze website verbeteren. Wanneer wij Google Analytics gebruiken, hebben wij
        deze privacyvriendelijk ingesteld: IP-adressen worden geanonimiseerd en gegevens worden
        niet gebruikt voor gepersonaliseerde advertenties. Deze cookies plaatsen wij alleen nadat
        je hiervoor toestemming hebt gegeven.
      </p>

      <h3>Marketingcookies</h3>
      <p>
        Wanneer wij gebruikmaken van advertenties via bijvoorbeeld Facebook of Instagram, kunnen
        marketingcookies worden geplaatst. Hiermee kunnen advertenties beter aansluiten bij jouw
        interesses. Marketingcookies worden uitsluitend geplaatst nadat je daarvoor toestemming
        hebt gegeven.
      </p>

      <h3>Cookies van derden</h3>
      <p>Onze website kan gebruikmaken van diensten van derden, zoals:</p>
      <ul>
        <li>Google Analytics</li>
        <li>Google Maps</li>
        <li>YouTube</li>
        <li>Instagram</li>
        <li>Facebook / Meta</li>
        <li>Calendly of een online afsprakensysteem</li>
      </ul>
      <p>
        Deze partijen kunnen zelf cookies plaatsen. Wij hebben hier geen invloed op. Raadpleeg
        hiervoor de privacyverklaringen van deze aanbieders.
      </p>

      <h2>Cookies verwijderen</h2>
      <p>
        Je kunt cookies op ieder moment verwijderen via de instellingen van jouw internetbrowser.
        Daarnaast kun je jouw voorkeuren wijzigen via de cookiebanner op onze website.
      </p>

      <h2>Wijzigingen</h2>
      <p>
        Wij kunnen dit cookiebeleid aanpassen wanneer wetgeving of onze website verandert. Op deze
        pagina vind je altijd de meest actuele versie.
      </p>

      <h2>Contact</h2>
      <p>
        Heb je vragen over ons cookiebeleid? Lindy Prins — Energetisch Gezinstherapeut, e-mail{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
      </p>
    </article>
  );
}
