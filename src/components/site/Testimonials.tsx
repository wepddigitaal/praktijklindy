import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kimberly",
    text: "Voordat ik bij Lindy kwam, worstelde ik enorm met de impact van de vroeggeboorte van ons kindje. Haar coaching hielp me om alles een plek te geven. Lindy is warm, laagdrempelig en spreekt met de kracht van een vriendin.",
  },
  {
    name: "Ouders van een cliënt",
    text: "Vannacht ook weer geen nachtmerries en nog steeds een blij meisje. Zo fijn! Heel bijzonder, zo in één sessie.",
  },
  {
    name: "Angela",
    text: "Wederom een bijzondere ervaring, ik voel me lichter en energiek. In korte tijd kwamen we bij mijn doel en hebben we belemmerende overtuigingen opgeruimd.",
  },
  {
    name: "Uit Haarlem",
    text: "Meteen de eerste keer kwamen er veel herkenbare dingen naar voren waar ik al tijden tegenaan liep. Na de sessies voelde ik me lichter en energieker. Ik kan Lindy zeker aanbevelen!",
  },
  {
    name: "Ilse",
    text: "Elke lente heb ik last van hooikoorts. Al na één NEI-behandeling van Lindy heb ik zo goed als geen last meer. Wat een opluchting!",
  },
  {
    name: "Karin",
    text: "Gaat erg goed met me. Ben veel minder jachtig van binnen. Voel me liever en rustiger dan voorheen. Blij met jouw sessies!",
  },
];

export function Testimonials() {
  return (
    <section className="container-page py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Ervaringen</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Wat anderen vertellen</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="surface-card flex flex-col gap-4 p-6">
            <Quote className="h-6 w-6 text-clay" />
            <blockquote className="text-sm leading-relaxed text-muted-foreground">
              {t.text}
            </blockquote>
            <figcaption className="mt-auto text-sm font-semibold text-foreground">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
