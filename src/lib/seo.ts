export const SITE_URL = "https://praktijklindy2.wepd.nl";

/** Maakt van een asset-pad of route een absolute URL (nodig voor og:image / canonical). */
export const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

type SocialArgs = {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

/** Bouwt de meta-tags voor delen (Open Graph + Twitter) voor één pagina. */
export function socialMeta({ path, title, description, image, type = "website" }: SocialArgs) {
  const url = abs(path);
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Praktijk Lindy" },
    { property: "og:locale", content: "nl_NL" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    const imageUrl = abs(image);
    meta.push({ property: "og:image", content: imageUrl });
    meta.push({ property: "og:image:alt", content: title });
    meta.push({ name: "twitter:image", content: imageUrl });
  }
  return { meta, links: [{ rel: "canonical", href: url }] };
}
