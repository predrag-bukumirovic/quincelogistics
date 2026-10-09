import type { MetadataRoute } from "next";
import { langs, routes, type Page } from "./lib/i18n";
import { site } from "./lib/site";

const absolute = (path: string) => site.url + (path === "/" ? "" : path);

// Sve strane na svim jezicima, uz oznake koje su verzije jedna druge.
export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(routes) as Page[]).flatMap((page) =>
    langs.map((lang) => ({
      url: absolute(routes[page][lang]),
      changeFrequency: "monthly" as const,
      priority:
        page === "home" ? 1 : page === "privacy" || page === "cookies" ? 0.3 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          langs.map((l) => [l, absolute(routes[page][l])])
        ),
      },
    }))
  );
}
