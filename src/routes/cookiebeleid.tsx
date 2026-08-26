import { createFileRoute } from "@tanstack/react-router";
import { contactInfo } from "@/lib/images";

export const Route = createFileRoute("/cookiebeleid")({
  head: () => ({
    meta: [
      { title: "Cookiebeleid — Praktijk Lindy" },
      {
        name: "description",
        content:
          "Hoe Praktijk Lindy omgaat met cookies: functionele cookies, statistieken en jouw keuzes.",
      },
      { property: "og:title", content: "Cookiebeleid — Praktijk Lindy" },
      {
        property: "og:description",
        content: "Informatie over het gebruik van cookies op de website van Praktijk Lindy.",
      },
    ],
  }),
  component: Cookiebeleid,
});

function Cookiebeleid() {
  return (
    <article className="container-page prose-lindy max-w-3xl py-20">
      <p className="eyebrow">Privacy</p>
      <h1 className="mt-3 text-4xl">Cookiebeleid</h1>

      <h2>Wat zijn cookies?</h2>
      <p>
        Cookies zijn kleine tekstbestandjes die bij een bezoek aan een website op je apparaat
        worden opgeslagen. Ze helpen de website goed te laten werken en geven inzicht in het
        gebruik ervan.
      </p>

      <h2>Welke cookies gebruikt deze website?</h2>
      <ul>
        <li>
          <strong>Functionele cookies</strong> — noodzakelijk voor de basiswerking van de
          website. Hiervoor is geen toestemming nodig.
        </li>
        <li>
          <strong>Analytische cookies</strong> — geanonimiseerde statistieken over
          bezoekersaantallen en populaire pagina&apos;s.
        </li>
        <li>
          <strong>Cookies van derden</strong> — bijvoorbeeld wanneer een online agenda
          (Mijn Diad) of video wordt ingesloten. Deze partijen hebben hun eigen beleid.
        </li>
      </ul>

      <h2>Jouw keuze</h2>
      <p>
        Je kunt cookies altijd verwijderen of blokkeren via de instellingen van je browser. Het
        kan zijn dat sommige onderdelen van de website dan minder goed werken.
      </p>

      <h2>Vragen?</h2>
      <p>
        Neem gerust contact op via{" "}
        <a
          href={`mailto:${contactInfo.email}`}
          className="font-semibold text-primary underline decoration-clay decoration-2 underline-offset-4"
        >
          {contactInfo.email}
        </a>
        .
      </p>

      <p className="mt-10 rounded-2xl bg-secondary p-5 text-sm">
        Dit is een werkversie. Lever je eigen cookiebeleid aan, dan plaatsen we die tekst hier
        letterlijk.
      </p>
    </article>
  );
}
