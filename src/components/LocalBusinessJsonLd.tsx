import { absoluteUrl, getSiteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

type LocalBusinessJsonLdProps = {
  type?: string | string[];
};

function telephone() {
  return site.phoneTel.replace(/^tel:/, "");
}

export function LocalBusinessJsonLd({
  type = ["LocalBusiness", "HomeAndConstructionBusiness"],
}: LocalBusinessJsonLdProps = {}) {
  const url = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}/#localbusiness`,
    name: site.businessName,
    alternateName: site.shortName,
    description: site.metaDescription,
    url,
    telephone: telephone(),
    email: site.email,
    image: absoluteUrl(site.ogImage),
    priceRange: site.priceRange,
    areaServed: site.serviceArea,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    openingHoursSpecification: site.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.dayOfWeek,
      opens: entry.opens,
      closes: entry.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: site.servicesHeading,
      itemListElement: site.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
