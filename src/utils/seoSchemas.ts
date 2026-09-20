/**
 * Comprehensive SEO & Schema.org definitions for ReamsHVAC
 * Conforms to Google Rich Results guidelines for LocalBusiness, HVACBusiness, Service, FAQPage, and AggregateRating.
 */

export const REAMSHVAC_BUSINESS_INFO = {
  name: "ReamsHVAC",
  legalName: "Reams Heating & Air Conditioning Inc.",
  alternateName: ["Reams Heating and Air", "Reams HVAC San Jose"],
  url: "https://reamshvac.com",
  logo: "https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png",
  image: "https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png",
  telephone: "+14083203288",
  email: "dispatch@reamshvac.com",
  license: "California C-20 HVAC Contractor License #1048291",
  foundingDate: "2004",
  priceRange: "$$",
  address: {
    streetAddress: "1250 S 10th St",
    addressLocality: "San Jose",
    addressRegion: "CA",
    postalCode: "95112",
    addressCountry: "US"
  },
  geo: {
    latitude: 37.3382,
    longitude: -121.8863
  },
  paymentAccepted: ["Cash", "Credit Card", "Financing", "Check"],
  currenciesAccepted: "USD",
  openingHours: [
    "Mo-Fr 07:00-19:00",
    "Sa 08:00-17:00"
  ],
  specialOpeningHoursSpecification: {
    description: "24/7 Emergency HVAC Dispatch Available 365 Days a Year for Heat and AC Failures"
  },
  serviceAreas: [
    "San Jose", "Santa Clara", "Sunnyvale", "Campbell", "Cupertino", 
    "Los Gatos", "Saratoga", "Milpitas", "Mountain View", "Palo Alto", 
    "Menlo Park", "Redwood City", "San Mateo", "Burlingame", "Fremont", 
    "Newark", "Union City", "Hayward", "Oakland", "Berkeley", "Walnut Creek", 
    "Concord", "San Francisco", "San Rafael", "Novato", "Petaluma"
  ],
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "524",
    bestRating: "5",
    worstRating: "1"
  }
};

/**
 * Generates primary HVACBusiness schema for Google Local Pack & Generative Search
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://reamshvac.com/#business",
    "name": REAMSHVAC_BUSINESS_INFO.name,
    "legalName": REAMSHVAC_BUSINESS_INFO.legalName,
    "alternateName": REAMSHVAC_BUSINESS_INFO.alternateName,
    "url": REAMSHVAC_BUSINESS_INFO.url,
    "logo": REAMSHVAC_BUSINESS_INFO.logo,
    "image": REAMSHVAC_BUSINESS_INFO.image,
    "telephone": REAMSHVAC_BUSINESS_INFO.telephone,
    "email": REAMSHVAC_BUSINESS_INFO.email,
    "priceRange": REAMSHVAC_BUSINESS_INFO.priceRange,
    "foundingDate": REAMSHVAC_BUSINESS_INFO.foundingDate,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": REAMSHVAC_BUSINESS_INFO.address.streetAddress,
      "addressLocality": REAMSHVAC_BUSINESS_INFO.address.addressLocality,
      "addressRegion": REAMSHVAC_BUSINESS_INFO.address.addressRegion,
      "postalCode": REAMSHVAC_BUSINESS_INFO.address.postalCode,
      "addressCountry": REAMSHVAC_BUSINESS_INFO.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": REAMSHVAC_BUSINESS_INFO.geo.latitude,
      "longitude": REAMSHVAC_BUSINESS_INFO.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
        "description": "24/7 Emergency Dispatch for Heating and Air Conditioning Breakdowns"
      }
    ],
    "areaServed": REAMSHVAC_BUSINESS_INFO.serviceAreas.map(city => ({
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": REAMSHVAC_BUSINESS_INFO.aggregateRating.ratingValue,
      "reviewCount": REAMSHVAC_BUSINESS_INFO.aggregateRating.reviewCount,
      "bestRating": REAMSHVAC_BUSINESS_INFO.aggregateRating.bestRating,
      "worstRating": REAMSHVAC_BUSINESS_INFO.aggregateRating.worstRating
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Heating, Cooling & Air Quality Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Central Air Conditioning Repair & Installation",
            "description": "Diagnostic repair, refrigerant recharge, SEER2 system replacements, and ductwork balancing in San Jose and the Bay Area."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heat Pump Installation & Conversions",
            "description": "All-electric high-efficiency inverter heat pumps with BayREN and TECH Clean California rebate processing up to $8,000+."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gas Furnace Repair & Replacement",
            "description": "Heat exchanger safety inspections, electronic ignition repair, blower motor fixes, and 96%+ AFUE furnace installations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ductless Mini-Split Installation",
            "description": "Multi-zone whisper-quiet heating and cooling for room additions, home offices, and homes without existing ductwork."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Indoor Air Quality & Whole-Home Filtration",
            "description": "MERV 13-16 media filtration, whole-house UV germicidal purifiers, and ERV ventilation to combat Bay Area wildfire smoke."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Duct Cleaning, Sealing & Title 24 HERS Testing",
            "description": "Aeroseal duct sealing, static pressure airflow optimization, and certified HERS leakage testing."
          }
        }
      ]
    }
  };
}

/**
 * Generates Schema.org Service markup
 */
export function getServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${params.url}#service`,
    "name": params.name,
    "serviceType": params.serviceType || "HVAC Service",
    "description": params.description,
    "url": params.url,
    "provider": {
      "@type": "HVACBusiness",
      "name": REAMSHVAC_BUSINESS_INFO.name,
      "telephone": REAMSHVAC_BUSINESS_INFO.telephone,
      "url": REAMSHVAC_BUSINESS_INFO.url,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": REAMSHVAC_BUSINESS_INFO.address.addressLocality,
        "addressRegion": REAMSHVAC_BUSINESS_INFO.address.addressRegion,
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": REAMSHVAC_BUSINESS_INFO.geo.latitude,
        "longitude": REAMSHVAC_BUSINESS_INFO.geo.longitude
      },
      "geoRadius": "60000"
    }
  };
}

/**
 * Generates Schema.org FAQPage markup
 */
export function getFaqSchema(faqs: Array<{ q: string; a: string }>) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}
