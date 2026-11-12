import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const routes = ["", "/features", "/about", "/faq", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${SITE.url}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
