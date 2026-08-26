import { createFileRoute } from "@tanstack/react-router";
import { contactInfo } from "@/lib/images";
import { socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () =>
    socialMeta({
      path: "/algemene-voorwaarden",
      title: "Algemene voorwaarden — Praktijk Lindy",
      description:
        "De algemene voorwaarden (GAT) van Praktijk Lindy: afspraken, annulering, tarieven, privacy, aansprakelijkheid en klachtrecht.",
    }),
  component: Voorwaarden,
});

function Voorwaarden() {
  return (
    <article className="container-page prose-lindy max-w-3xl py-20">
      <p className="eyebrow">Juridisch</p>
      <h1 className="mt-3 text-4xl">Algemene voorwaarden</h1>
      <p className="text-sm text-muted-foreground">
        GAT — Algemene voorwaarden voor alternatieve / complementaire therapeuten. Van
        toepassing op Praktijk Lindy — Lindy Prins, {contactInfo.address}, KvK{" "}
        {contactInfo.kvk}. Versie 25-09-2025.
      </p>

      <h2>1. Toepasselijkheid</h2>
      <p>
        a. Deze voorwaarden zijn van toepassing op en maken deel uit van alle huidige en
        toekomstige aanbiedingen, overeenkomsten en andere op enig rechtsgevolg gerichte
        handelingen waarbij Lindy Prins (ingeschreven in het handelsregister van de Kamer van
        Koophandel onder nummer {contactInfo.kvk}) is betrokken, alsmede op alle gevolgen
        daarvan.
      </p>
      <p>
        b. Afwijkingen van deze algemene voorwaarden zijn alleen geldig voor zover deze
        afwijkingen uitdrukkelijk en schriftelijk tussen partijen overeen zijn gekomen. Aan een
        dergelijke afwijking kan opdrachtgever geen rechten ontlenen voor toekomstige
        overeenkomsten.
      </p>
      <p>
        c. Andere algemene voorwaarden, waaronder die van de patiënt/cliënt, hoe deze ook worden
        vermeld of genoemd, zijn niet van toepassing op de rechtsverhouding tussen partijen en
        worden op voorhand afgewezen.
      </p>

      <h2>2. Begrippen</h2>
      <p>In deze overeenkomst dient te worden verstaan onder:</p>
      <ul>
        <li>
          <strong>Zorgaanbieder:</strong> therapeut (natuurlijk- of rechtspersoon) die is
          aangesloten bij een of meerdere erkende beroepsorganisatie(s), genaamd Lindy Prins,
          Praktijk Lindy;
        </li>
        <li>
          <strong>Overeenkomst:</strong> gesloten (behandel)overeenkomst tussen de zorgaanbieder
          en de patiënt/cliënt;
        </li>
        <li>
          <strong>Partijen:</strong> zorgaanbieder en patiënt/cliënt (ook wel tegenpartij
          genoemd);
        </li>
        <li>
          <strong>Wkkgz:</strong> Wet kwaliteit, klachten en geschillen zorg.
        </li>
      </ul>

      <h2>3. Aanvaarding van opdrachten</h2>
      <p>
        Alle aanbiedingen van de zorgaanbieder zijn vrijblijvend en herroepbaar, ook indien
        daarin een termijn is genoemd waarvoor het aanbod geldt. Bij mondelinge
        informatieverstrekking wordt een aanbod eerst geacht te zijn gedaan zodra dit
        schriftelijk door de zorgaanbieder is bevestigd.
      </p>
      <p>
        Een overeenkomst komt tot stand door een schriftelijke acceptatie van de prijsafspraak
        door de patiënt/cliënt of een mondelinge bevestiging. Indien hierin wijzigingen worden
        aangebracht door de patiënt/cliënt, dan komt de overeenkomst pas tot stand nadat de
        zorgaanbieder schriftelijk met die wijzigingen heeft ingestemd. Een overeenkomst kan
        zowel een losse behandeling als een traject van behandelingen betreffen.
      </p>

      <h2>4. Duur overeenkomst en ontbinding</h2>
      <p>
        a. Tenzij in de overeenkomst anders is bepaald, wordt deze aangegaan voor de duur van
        een traject c.q. losse behandeling. Na afloop van de overeengekomen contractperiode kan
        de overeenkomst in overleg tussen beide partijen (ook stilzwijgend) worden verlengd.
      </p>
      <p>
        b. Ieder der partijen is, onverminderd het recht op vergoeding van kosten, schade en
        rente, gerechtigd de overeenkomst zonder rechterlijke tussenkomst met onmiddellijke
        ingang bij aangetekende brief te ontbinden indien:
      </p>
      <ul>
        <li>
          de wederpartij één of meer van haar verplichtingen niet heeft nagekomen en nalatig is
          aan haar verplichtingen te voldoen binnen een aan haar bij aangetekende brief voor
          nakoming gestelde termijn, tenzij de tekortkoming(en) van dusdanige aard of geringe
          betekenis is (zijn) dat deze in redelijkheid geen ontbinding rechtvaardigen;
        </li>
        <li>
          voor de wederpartij faillissement of surséance van betaling wordt aangevraagd of
          verleend, dan wel maatregelen worden getroffen die duiden op beëindiging of staking
          van de onderneming.
        </li>
      </ul>
      <p>
        c. Enig recht van de patiënt/cliënt op verrekening van zijn eventuele vorderingen op de
        zorgaanbieder is uitdrukkelijk uitgesloten. De zorgaanbieder heeft te allen tijde het
        recht en de bevoegdheid om vorderingen die zij heeft op de patiënt/cliënt te verrekenen
        met eventuele vorderingen die de patiënt/cliënt heeft op de zorgaanbieder.
      </p>

      <h2>5. Annulering</h2>
      <p>
        a. Annulering van afspraken voortvloeiend uit een overeenkomst dient uiterlijk 48 uur
        vóór het afgesproken tijdstip te geschieden.
      </p>
      <p>b. Voor annulering van afspraken gelden de volgende annuleringsvoorwaarden:</p>
      <ul>
        <li>Bij annulering tot 48 uur voor aanvang is de patiënt/cliënt geen kosten verschuldigd.</li>
        <li>
          Bij annulering 24 uur voor aanvang van een consult is de patiënt/cliënt 50% van het
          bedrag van de afspraak verschuldigd.
        </li>
        <li>
          Bij annulering binnen 24 uur voor aanvang van een consult is de patiënt/cliënt 100%
          van het bedrag voor de afspraak verschuldigd.
        </li>
        <li>
          Indien een consult op verzoek van een patiënt/cliënt wordt verschoven naar een latere
          datum, is de patiënt/cliënt bij verschuiving tot 48 uur voor aanvang geen kosten
          verschuldigd, binnen 48 uur voor aanvang 50% van het bedrag en binnen 24 uur voor
          aanvang het volledige bedrag.
        </li>
        <li>
          Indien annulering niet of te laat geschiedt, is de zorgaanbieder gerechtigd de
          betreffende dienst(en) in rekening te brengen, onverkort het recht op betaling van
          alle in deze door hem/haar gemaakte kosten.
        </li>
        <li>De zorgaanbieder is in redelijkheid gerechtigd een reeds geplande afspraak te wijzigen.</li>
      </ul>

      <h2>6. Geheimhouding, dossierbeheer en inzagerecht</h2>
      <p>
        a. De zorgaanbieder zal alle informatie betreffende de patiënt/cliënt die hij/zij
        verkrijgt bij de uitvoering van zijn/haar diensten vertrouwelijk behandelen en deze
        informatie niet aan derden ter hand stellen, behoudens voor zover de zorgaanbieder
        daartoe verplicht is of toestemming heeft verkregen.
      </p>
      <p>
        b. De zorgaanbieder zal een geheimhoudingsplicht zoals beschreven in lid a opleggen aan
        zijn/haar medewerkers en eventuele bij de uitvoering van diensten ingeschakelde derden.
      </p>
      <p>
        c. De zorgaanbieder zal rapportages over behandelingen/behandeltrajecten op aanvraag van
        de patiënt/cliënt verstrekken, met inachtneming van de AVG.
      </p>

      <h2>7. Overmacht</h2>
      <p>
        Indien de zorgaanbieder haar verplichtingen uit de overeenkomst niet, niet tijdig of
        niet behoorlijk kan nakomen ten gevolge van een oorzaak die haar niet kan worden
        toegerekend — waaronder onder meer (maar niet uitsluitend) stagnatie in de geregelde
        gang van zaken binnen de organisatie van de zorgaanbieder of ziekte van (een van de)
        personen die met de uitvoering van de overeenkomst is belast — worden de verplichtingen
        van de zorgaanbieder opgeschort tot het moment waarop zij in staat is die verplichtingen
        alsnog na te komen.
      </p>

      <h2>8. Facturering en betaling</h2>
      <p>
        a. Alle prijzen zijn in euro's (€) en inclusief btw/omzetbelasting, tenzij uitdrukkelijk
        is aangegeven dat dit er niet bij inbegrepen is.
      </p>
      <p>
        b. Dienstverlening voor particuliere patiënten/cliënten dient direct na de
        dienstverlening tegen overleg van een factuur te worden voldaan.
      </p>
      <p>
        c. Dienstverlening voor patiënten/cliënten niet zijnde particulieren zal volgens afspraak
        middels een declaratie in rekening worden gebracht.
      </p>
      <p>
        d. Facturering vindt plaats op basis van de tussen partijen overeengekomen tarieven en
        aantallen verrichtingen bij aanvang van de dienstverlening.
      </p>
      <p>
        e. Tenzij schriftelijk anders overeengekomen dient de patiënt/cliënt binnen 14 dagen na
        factuurdatum, zonder enig beroep op verrekening, aan de zorgaanbieder te betalen.
      </p>
      <p>
        f. Indien na de datum van de totstandkoming van de overeenkomst één of meer prijsfactoren
        een verhoging ondergaan, is de zorgaanbieder gerechtigd de overeengekomen prijs
        dienovereenkomstig te verhogen.
      </p>
      <p>g. De zorgaanbieder is gerechtigd ieder jaar de overeengekomen prijs te verhogen.</p>
      <p>
        h. Indien sprake is van een traject kunnen partijen schriftelijk een betaling in
        termijnen overeenkomen.
      </p>
      <p>
        i. Bij overschrijding van de betalingstermijn is de patiënt/cliënt, zonder dat
        ingebrekestelling is vereist, in verzuim. De zorgaanbieder is gerechtigd zijn/haar
        verplichtingen tot het verrichten van diensten op te schorten met ingang van de datum
        waarop de betalingstermijn is verstreken, en zal de patiënt/cliënt daarvan tijdig op de
        hoogte stellen. De patiënt/cliënt is met ingang van voornoemde datum over het openstaande
        bedrag de wettelijke rente verschuldigd. Voorts komen alle buitengerechtelijke
        incassokosten voor rekening van de patiënt/cliënt.
      </p>

      <h2>9. Aansprakelijkheid</h2>
      <p>
        a. Bij de uitvoering van de dienstverlening van de zorgaanbieder is sprake van een
        inspanningsverplichting.
      </p>
      <p>
        b. De zorgaanbieder geeft op geen enkele wijze een (geneeskundige) garantie af, noch is
        zij/hij op enige wijze aansprakelijk voor (medische) complicaties die zich ten tijde dan
        wel na uitvoering van de dienstverlening voordoen, welke niet te wijten zijn aan een
        zwaarwegende toerekenbare tekortkoming van de zorgaanbieder.
      </p>
      <p>c. De zorgaanbieder is op geen enkele wijze aansprakelijk voor gevolgschade.</p>
      <p>
        d. De zorgaanbieder is niet aansprakelijk voor zover schade voortvloeit uit het feit dat
        de patiënt/cliënt mondelinge of schriftelijke adviezen niet naar behoren heeft opgevolgd.
      </p>
      <p>
        e. De aansprakelijkheid van de zorgaanbieder voor schade voortvloeiend uit de door
        hem/haar verrichte diensten is beperkt tot maximaal de kosten van een behandeling.
      </p>
      <p>
        f. In alle gevallen is iedere aansprakelijkheid beperkt tot het bedrag dat in rekening is
        gebracht aan de patiënt/cliënt, dan wel tot maximaal het bedrag dat door de afgesloten
        aansprakelijkheidsverzekering wordt gedekt.
      </p>
      <p>
        g. De zorgaanbieder is op geen enkele wijze aansprakelijk voor de kwaliteit en
        samenstelling van de door hem/haar geadviseerde hulpstukken, supplementen, medicijnen
        etc.
      </p>

      <h2>10. Toepasselijk recht en geschillen</h2>
      <p>a. Op de dienstverlening van de zorgaanbieder is Nederlands recht van toepassing.</p>
      <p>
        b. In geschillen voortvloeiend uit of verband houdend met de dienstverlening van de
        zorgaanbieder is uitsluitend de Nederlandse rechter bevoegd om van dit geschil kennis te
        nemen.
      </p>

      <h2>11. Overige bepalingen</h2>
      <p>
        a. Indien één of meerdere artikelen van deze algemene voorwaarden nietig worden
        verklaard, doet dit geen afbreuk aan de geldigheid van de overige artikelen.
      </p>

      <h2>Disclaimer</h2>
      <p>
        De informatie op deze website is geen persoonlijk behandelplan voor de bezoeker. Er
        kunnen geen rechten worden ontleend aan de getoonde inhoud, noch is de eigenaar van de
        website aansprakelijk voor schade die direct of indirect ontstaat door de informatie op
        deze website. Vraag voor een behandeling die is afgestemd op de eigen situatie advies van
        een reguliere arts of een therapeut die erkend is door een door de GAT erkende
        beroepsorganisatie. De behandelingen die op deze website worden aangeboden vallen onder
        de noemer alternatieve en/of complementaire zorg. Deze vervangt niet de diagnostiek,
        verzorging en/of verpleging van reguliere gezondheidszorg. De teksten op deze website
        vallen onder auteursrecht en kunnen niet zonder toestemming van de eigenaar worden
        gebruikt of gekopieerd.
      </p>

      <h2>Klachten en geschillen</h2>
      <p>
        Praktijk Lindy is aangesloten bij CAT en valt onder GAT-Wkkgz klachtrecht en
        GAT-tuchtrecht bij de Geschilleninstantie Alternatieve Therapeuten (GAT). Meer informatie
        vind je op{" "}
        <a href="https://gatgeschillen.nl" target="_blank" rel="noreferrer">
          gatgeschillen.nl
        </a>
        . Vragen? Mail naar{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
      </p>
      <p className="text-sm text-muted-foreground">
        Auteursrecht algemene voorwaarden: Stichting Geschilleninstantie Alternatieve Therapeuten
        (GAT), opgesteld door mr. Suzanne van Dijsseldonk.
      </p>
    </article>
  );
}
