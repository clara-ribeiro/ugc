import { landing } from "@/content/landing";
import { absoluteUrl } from "@/lib/site-url";

export type JsonLd = Record<string, unknown>;

/** Serialize JSON-LD and escape `<` so the payload cannot break out of the script tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function omitEmpty(value: JsonLd): JsonLd {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined && entry !== null),
  );
}

export function buildLandingJsonLd(): JsonLd {
  const siteUrl = absoluteUrl("/");
  const imageUrl = absoluteUrl(landing.hero.photoSrc);
  const personId = `${siteUrl}#person`;
  const serviceId = `${siteUrl}#service`;
  const websiteId = `${siteUrl}#website`;

  const person = omitEmpty({
    "@type": "Person",
    "@id": personId,
    name: landing.person.name,
    jobTitle: landing.person.jobTitle,
    description: landing.site.description,
    url: siteUrl,
    email: landing.site.contactEmail,
    image: imageUrl,
    knowsAbout: [
      ...landing.person.knowsAbout,
      ...landing.archive.items.map((item) => item.product),
    ],
    knowsLanguage: [...landing.person.languages],
    nationality: landing.person.nationality,
    sameAs: landing.works.map((work) => work.href),
    affiliation: landing.works.map((work) => ({
      "@type": "Organization",
      name: work.label,
      url: work.href,
    })),
  });

  const offers = landing.services.packages.map((item) =>
    omitEmpty({
      "@type": "Offer",
      name: item.name,
      description: item.description,
      price: item.priceValue,
      priceCurrency: item.priceCurrency,
      availability: "https://schema.org/InStock",
      url: siteUrl,
    }),
  );

  const service = omitEmpty({
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: landing.site.serviceName,
    url: siteUrl,
    image: imageUrl,
    description: landing.site.description,
    email: landing.site.contactEmail,
    founder: { "@id": personId },
    areaServed: landing.person.areaServed,
    availableLanguage: [...landing.person.languages],
    serviceType: [...landing.person.serviceTypes],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tech UGC packages",
      itemListElement: offers,
    },
  });

  const website = omitEmpty({
    "@type": "WebSite",
    "@id": websiteId,
    name: landing.site.serviceName,
    url: siteUrl,
    inLanguage: "en",
    description: landing.site.description,
    publisher: { "@id": personId },
  });

  const webPage = omitEmpty({
    "@type": "WebPage",
    "@id": `${siteUrl}#webpage`,
    name: landing.site.title,
    description: landing.site.description,
    url: siteUrl,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    about: { "@id": serviceId },
    primaryImageOfPage: imageUrl,
  });

  const faq = omitEmpty({
    "@type": "FAQPage",
    "@id": `${siteUrl}#faq`,
    mainEntity: landing.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });

  const videos = landing.archive.items.map((item) =>
    omitEmpty({
      "@type": "VideoObject",
      "@id": `${siteUrl}#${item.id}`,
      name: `${item.product}: ${item.title}`,
      description: item.description,
      contentUrl: absoluteUrl(item.src),
      embedUrl: `${siteUrl}#${landing.archive.id}`,
      duration: item.durationIso,
      inLanguage: "en",
      uploadDate: "2026-10-26",
      creator: { "@id": personId },
    }),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [person, service, website, webPage, faq, ...videos],
  };
}
