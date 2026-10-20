import type { MetadataRoute } from "next";
import { allowSearchIndexing, getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteUrl().origin;
  const index = allowSearchIndexing();

  return {
    rules: index
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
