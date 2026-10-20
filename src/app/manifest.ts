import type { MetadataRoute } from "next";
import { landing } from "@/content/landing";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: landing.site.serviceName,
    short_name: landing.site.shortTitle,
    description: landing.site.description,
    start_url: "/",
    display: "browser",
    background_color: "#F9F8F6",
    theme_color: "#F9F8F6",
    lang: "en",
  };
}
