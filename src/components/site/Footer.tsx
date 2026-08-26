import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { contactInfo, img } from "@/lib/images";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <span className="inline-flex items-center rounded-2xl bg-moss px-5 py-3">
            <img src={img.logo} alt="Praktijk Lindy" className="h-10 w-auto" />
          </span>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Energetische gezinstherapie in Voorburg. Voor kinderen en volwassenen die weer
            thuis willen komen bij zichzelf.
          </p>
          <p className="script-note mt-4">I&apos;ve got your back ♥</p>
        </div>

        <div className="text-sm">
          <h3 className="text-lg">Contact</h3>
          <ul className="mt-4 grid gap-3">
            <li className="flex items-start gap-2 text-muted-foreground">
              <Mail className="mt-1 h-4 w-4 text-primary" />
              <a className="hover:text-foreground" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Phone className="mt-1 h-4 w-4 text-primary" />
              <a className="hover:text-foreground" href={contactInfo.phoneHref}>
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-1 h-4 w-4 text-primary" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="text-muted-foreground">KvK: {contactInfo.kvk}</li>
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="text-lg">Pagina&apos;s</h3>
          <ul className="mt-4 grid gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/diensten", label: "Diensten" },
              { to: "/aanbod", label: "Aanbod" },
              { to: "/alleen-geboren-tweeling", label: "Alleen geboren tweeling" },
              { to: "/contact", label: "Contact" },
              { to: "/algemene-voorwaarden", label: "Algemene voorwaarden" },
              { to: "/cookiebeleid", label: "Cookiebeleid" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page border-t border-border py-10">
        <div className="surface-card flex flex-col gap-4 p-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-moss text-moss-foreground">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div className="text-xs font-semibold tracking-widest text-muted-foreground">
              <span className="block text-base font-medium tracking-normal text-foreground">
                CAT-therapeut
              </span>
              GAT / Wkkgz
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Ik val als CAT-therapeut onder GAT-Wkkgz klachtrecht en GAT-tuchtrecht bij de
            Geschilleninstantie Alternatieve Therapeuten (GAT). Voor meer informatie over
            mijn klachtenregeling zie{" "}
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
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Praktijk Lindy — Lindy Prins
        </p>
      </div>
    </footer>
  );
}
