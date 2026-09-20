import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  MapPin, Phone, ShieldCheck, Clock, ArrowRight, Building2, 
  Flame, Droplet, Zap, ThermometerSnowflake, Wind, CheckCircle2, 
  Star, ChevronDown, ChevronUp, Award, Wrench, Navigation, Check, Layers
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { CITIES_DATA, REGIONS_DATA, CityData } from "../../data/serviceAreaData";
import { SEO } from "../../components/SEO";

interface CityPageProps {
  citySlug?: string;
}

export function CityPage({ citySlug }: CityPageProps) {
  const params = useParams();
  const slug = citySlug || params.city || "san-jose";
  const regionSlug = params.region || "south-bay";

  // Lookup explicit city or build fallback
  const city: CityData = CITIES_DATA[slug] || {
    slug: slug,
    name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    regionId: regionSlug,
    regionName: REGIONS_DATA[regionSlug]?.name || "Bay Area",
    tagline: "Licensed C-20 Heating, Cooling & Heat Pump Specialists",
    heroDescription: `Licensed HVAC heating, air conditioning, heat pump electrification, and duct services in ${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}, CA. Same-day emergency response and flat-rate pricing.`,
    neighborhoods: ["Central District", "North Side", "East Hills", "West End", "South Suburbs"],
    climateNote: `${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} experiences typical Bay Area climate demands. High-efficiency heat pumps and variable-speed air conditioners provide maximum energy efficiency under current utility rates.`,
    permitNote: `All HVAC system change-outs in ${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} require municipal mechanical building permits and Title 24 HERS duct leakage verification.`,
    rebateNote: `Homeowners qualify for state TECH Clean California heat pump grants and local electrification incentives up to $3,000+.`,
    mapEmbedSrc: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000.123456!2d-122.0!3d37.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2s${encodeURIComponent(slug.replace(/-/g, " "))}%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`,
    reviews: [
      {
        name: "Verified Customer",
        neighborhood: `${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}, CA`,
        date: "2 weeks ago",
        rating: 5,
        source: "Google Review",
        comment: `ReamsHVAC provided prompt, professional service in ${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}. They diagnosed our heating issue quickly and gave us upfront flat-rate options.`
      }
    ],
    faqs: [
      {
        q: `How fast can ReamsHVAC dispatch to ${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}?`,
        a: `We maintain active service fleets across the Bay Area. In ${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}, we typically arrive within 1 to 3 hours for emergency calls.`
      },
      {
        q: `Do you handle permits for HVAC replacement in ${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}?`,
        a: `Yes. We manage all municipal building permit filings and arrange mandatory Title 24 HERS duct testing.`
      }
    ]
  };

  const region = REGIONS_DATA[city.regionId] || REGIONS_DATA["south-bay"];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ServiceArea",
        "@id": `https://reamshvac.com/service-areas/${city.regionId}/${city.slug}#area`,
        "name": `ReamsHVAC ${city.name} HVAC Services`,
        "description": city.heroDescription,
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "ReamsHVAC",
          "telephone": "1-800-555-0199",
          "license": "CA C-20 #1048291"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://reamshvac.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Service Areas",
            "item": "https://reamshvac.com/service-areas"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": region.name,
            "item": `https://reamshvac.com/service-areas/${city.regionId}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": city.name,
            "item": `https://reamshvac.com/service-areas/${city.regionId}/${city.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title={`HVAC Heating & AC Repair in ${city.name}, CA | ReamsHVAC`}
        description={`Top-rated HVAC services in ${city.name}, CA. Gas furnace repair, AC installation, heat pump electrification & 24/7 emergency service. Call 1-800-555-0199.`}
        canonical={`/service-areas/${city.regionId}/${city.slug}`}
        schema={schemaData}
      />

      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: region.name, href: `/service-areas/${city.regionId}` },
          { label: city.name },
        ]}
        eyebrow={city.tagline}
        title={`HVAC Services in ${city.name}, CA`}
        description={city.heroDescription}
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "/contact",
          icon: <MapPin className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "Hotline: 1-800-555-0199",
          href: "tel:1-800-555-0199",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      {/* 2. City Overview & Permitting */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Localized HVAC Solutions in {city.name}
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>{city.climateNote}</p>
              <p>{city.permitNote}</p>
              <p>{city.rebateNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Neighborhoods Served & Map Grid */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            
            <div className="lg:col-span-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-2.5 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-700" /> Neighborhood Coverage
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
                Serving All {city.name} Neighborhoods & Districts
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 text-xs sm:text-base leading-relaxed">
                Our technicians are deeply familiar with {city.name}'s housing stock, electrical panel configurations, and municipal building codes.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 text-left">
                {city.neighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-2 bg-white p-2.5 sm:p-3 rounded-lg border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-950 flex-shrink-0" />
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-2 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="aspect-4/3 rounded-lg sm:rounded-xl overflow-hidden relative">
                  <iframe 
                    title={`${city.name} Service Area Map`}
                    src={city.mapEmbedSrc} 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Customer Reviews */}
      <div className="home-reviews-wrapper">
        <ReviewsSection 
          title={`${city.name} Homeowner Reviews`}
          subtitle={`Verified 5-Star Reviews in ${city.name}, CA`}
          reviews={city.reviews}
        />
      </div>

      {/* 6. Nearby Cities Section */}
      <section className="py-8 sm:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 sm:mb-4">
            Nearby {region.name} Cities Served
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {region.cities.map((c) => (
              <Link
                key={c.slug}
                to={`/service-areas/${region.id}/${c.slug}`}
                className={`text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border transition-all ${
                  c.slug === city.slug 
                    ? "bg-blue-950 text-white border-blue-950 font-bold" 
                    : "bg-white text-slate-700 border-slate-200 hover:border-blue-950 hover:text-blue-950"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 tracking-tight">
                {city.name} HVAC FAQs
              </h2>
              <p className="text-xs sm:text-base text-slate-600">
                Frequently asked questions about servicing homes in {city.name}.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {city.faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all shadow-2xs">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-3.5 sm:p-5 font-bold text-blue-950 text-xs sm:text-base flex justify-between items-center gap-3 sm:gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 sm:pt-4 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="home-cta-wrapper hidden sm:block">
        <CTABand />
      </div>
    </div>
  );
}
