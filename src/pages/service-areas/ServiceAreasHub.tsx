import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, Phone, ShieldCheck, Clock, ArrowRight, Building2, 
  Flame, Droplet, Zap, ThermometerSnowflake, Wind, CheckCircle2, 
  Star, ChevronDown, ChevronUp, Award, Wrench,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function ServiceAreasHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPositions, setScrollPositions] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const updateScrollInfo = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    if (maxScrollLeft <= 5) {
      setScrollPositions([0]);
      setActiveStep(0);
      return;
    }

    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    const positions: number[] = [];
    const isMobile = window.innerWidth < 640;

    children.forEach((child) => {
      const childCenterOffset = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
      const childStartOffset = child.offsetLeft - container.offsetLeft;
      const targetScroll = Math.min(
        Math.max(0, isMobile ? childCenterOffset : childStartOffset),
        maxScrollLeft
      );

      if (positions.length === 0 || Math.abs(targetScroll - positions[positions.length - 1]) > 10) {
        positions.push(targetScroll);
      }
    });

    if (!isMobile && positions.length > 0 && maxScrollLeft - positions[positions.length - 1] > 10) {
      positions.push(maxScrollLeft);
    }

    setScrollPositions(positions);

    const currentScroll = container.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    positions.forEach((pos, idx) => {
      const diff = Math.abs(pos - currentScroll);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    setActiveStep(closestIndex);
  };

  useEffect(() => {
    updateScrollInfo();

    const container = scrollRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      updateScrollInfo();
    });

    resizeObserver.observe(container);
    Array.from(container.children).forEach((child) => resizeObserver.observe(child as Element));

    window.addEventListener("resize", updateScrollInfo);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollInfo);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    if (scrollPositions.length <= 1) {
      const scrollAmount = 380;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
      return;
    }

    const currentScroll = container.scrollLeft;
    let targetIndex = activeStep;

    if (direction === "right") {
      const nextIdx = scrollPositions.findIndex((pos) => pos > currentScroll + 10);
      targetIndex = nextIdx !== -1 ? nextIdx : scrollPositions.length - 1;
    } else {
      let prevIdx = -1;
      for (let i = scrollPositions.length - 1; i >= 0; i--) {
        if (scrollPositions[i] < currentScroll - 10) {
          prevIdx = i;
          break;
        }
      }
      targetIndex = prevIdx !== -1 ? prevIdx : 0;
    }

    container.scrollTo({
      left: scrollPositions[targetIndex],
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    updateScrollInfo();
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const regions = [
    {
      id: "south-bay",
      name: "South Bay Region",
      tagline: "Central Dispatch & Emergency Service",
      path: "/service-areas/south-bay",
      citiesCount: "12 Cities Served",
      description: "Our primary headquarters and largest service fleet. Fast dispatch across Silicon Valley for heat pumps, central AC, and furnace repairs.",
      topCities: ["San Jose", "Santa Clara", "Sunnyvale", "Cupertino", "Campbell", "Saratoga", "Milpitas", "Los Gatos"],
      badge: "Silicon Valley"
    },
    {
      id: "peninsula",
      name: "Peninsula Region",
      tagline: "Eco-Friendly Heat Pump Electrification",
      path: "/service-areas/peninsula",
      citiesCount: "10 Cities Served",
      description: "Home electrification along the 101 corridor, specializing in quiet inverter heat pumps and smart climate controls.",
      topCities: ["Palo Alto", "San Mateo", "Redwood City", "Mountain View", "Burlingame", "Menlo Park", "San Bruno"],
      badge: "101 Corridor"
    },
    {
      id: "east-bay",
      name: "East Bay Region",
      tagline: "Alameda & Contra Costa Climate Solutions",
      path: "/service-areas/east-bay",
      citiesCount: "14 Cities Served",
      description: "High-capacity cooling and heating engineered for coastal breezes and extreme inland summer temperatures.",
      topCities: ["Oakland", "Fremont", "Hayward", "Berkeley", "Concord", "San Ramon", "Walnut Creek", "Dublin"],
      badge: "Alameda & Contra Costa"
    },
    {
      id: "san-francisco",
      name: "San Francisco City & County",
      tagline: "Ductless Mini-Splits & Compact Systems",
      path: "/service-areas/san-francisco",
      citiesCount: "All SF Neighborhoods",
      description: "Custom ductless mini-splits and compact heat pumps tailored for historic homes, flats, and compact urban properties.",
      topCities: ["Mission District", "Sunset", "Richmond", "Pacific Heights", "Noe Valley", "SoMa", "Marina"],
      badge: "San Francisco"
    },
    {
      id: "north-bay",
      name: "North Bay Region",
      tagline: "Wildfire Filtration & Home Comfort",
      path: "/service-areas/north-bay",
      citiesCount: "8 Cities Served",
      description: "Serving Marin, Sonoma, and Napa with MERV 13 smoke filtration, high-efficiency heat pumps, and dual-fuel heating.",
      topCities: ["San Rafael", "Novato", "Napa", "Petaluma", "Santa Rosa", "Mill Valley", "Vallejo"],
      badge: "Marin & Wine Country"
    }
  ];

  const reviews = [
    {
      name: "David L.",
      city: "San Jose, CA",
      date: "1 week ago",
      rating: 5,
      source: "Google Review",
      comment: "ReamsHVAC arrived within 2 hours when our AC failed during a 95° heatwave in San Jose. Friendly tech, upfront pricing, and fixed the issue on the spot!"
    },
    {
      name: "Claire T.",
      city: "Palo Alto, CA",
      date: "3 weeks ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "We replaced our gas furnace with a Mitsubishi heat pump. The team handled all Palo Alto permitting and TECH California rebate documentation seamlessly."
    },
    {
      name: "Kenneth R.",
      city: "Fremont, CA",
      date: "1 month ago",
      rating: 5,
      source: "Google Review",
      comment: "Outstanding service in Fremont! They installed a multi-zone ductless mini-split system in our home addition. Very clean work and great communication."
    }
  ];

  const faqs = [
    {
      q: "How fast can ReamsHVAC dispatch a technician to my city?",
      a: "Because we maintain localized service hubs and active service trucks across the South Bay, Peninsula, East Bay, San Francisco, and North Bay, we offer same-day dispatch for urgent repairs and 24/7 priority response for heatwave and winter heating emergencies."
    },
    {
      q: "Do you handle city building permits and Title 24 compliance?",
      a: "Yes. Every HVAC installation or major equipment change-out requires municipal mechanical permits in Bay Area cities. We manage all permit filings with your local city building department and coordinate mandatory HERS duct testing."
    },
    {
      q: "Which local electrification rebates apply in my city?",
      a: "Rebate availability varies by jurisdiction. We help homeowners maximize savings through TECH Clean California, PG&E rebates, BayREN incentives, and city-specific electrification programs like Palo Alto Utilities or San Jose Clean Energy."
    },
    {
      q: "Are your technicians licensed for commercial and residential work?",
      a: "Yes. ReamsHVAC is a licensed California C-20 Warm-Air Heating, Ventilating, and AC contractor (#1048291) with full workers' compensation and $2M commercial general liability insurance covering both homes and commercial properties."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ServiceArea",
        "@id": "https://reamshvac.com/service-areas#area",
        "name": "ReamsHVAC Bay Area Coverage",
        "description": "Licensed HVAC heating, cooling, and air quality contractor serving 46+ cities across San Jose, Silicon Valley, Peninsula, East Bay, San Francisco, and North Bay.",
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
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="HVAC Service Areas in San Jose & San Francisco Bay Area | ReamsHVAC"
        description="ReamsHVAC serves 46+ Bay Area cities including San Jose, Santa Clara, Sunnyvale, Fremont, San Mateo & beyond. Fast local dispatch & 24/7 emergency service."
        canonical="/service-areas"
        schema={schemaData}
      />

      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
        eyebrow="Licensed CA C-20 Contractor #1048291"
        title="HVAC Services Across 46 Bay Area Cities"
        description="From San Jose headquarters to Peninsula tech corridors, East Bay inland valleys, San Francisco, and North Bay Wine Country—fully equipped service fleets dispatched 24/7."
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "/contact",
          icon: <MapPin className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "Dispatch: 1-800-555-0199",
          href: "tel:1-800-555-0199",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      {/* 2. Overview Section */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Local Dispatch & Microclimate Climate Engineering
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                The San Francisco Bay Area features extreme microclimate variations. While coastal San Francisco or Pacifica might remain a cool 65°F during summer, inland communities like San Jose, Walnut Creek, Livermore, or Santa Rosa frequently soar past 100°F.
              </p>
              <p>
                ReamsHVAC operates distributed fleet hubs stocked with OEM replacement parts, nitrogen brazing stations, and digital diagnostic tools. Whether you need emergency AC repair during a South Bay heatwave, a quiet inverter heat pump in Palo Alto, or duct sealing in Fremont to meet California Title 24 standards—we bring localized expertise to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Regions Catalog Carousel */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
                Explore Our Regional Coverage Hubs
              </h2>
              <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
                Swipe or use the controls to explore our regional service coverage across the Bay Area.
              </p>
            </div>

            {/* Scroll Control Buttons — hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 sm:p-3 rounded-full bg-white border border-slate-200/90 text-blue-950 hover:bg-blue-950 hover:text-white transition-all shadow-2xs hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Previous Region"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 sm:p-3 rounded-full bg-white border border-slate-200/90 text-blue-950 hover:bg-blue-950 hover:text-white transition-all shadow-2xs hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Next Region"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory py-2 sm:py-4 px-[calc(50vw-140px)] sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 scroll-smooth mb-5 sm:mb-8 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {regions.map((reg) => (
              <Link
                key={reg.id}
                to={reg.path}
                className="snap-center sm:snap-start shrink-0 w-[calc(100vw-3.5rem)] max-w-[290px] sm:w-[340px] md:w-[370px] bg-white border border-slate-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center sm:text-left shadow-2xs hover:shadow-md hover:border-blue-950 transition-all flex flex-col justify-between group min-h-[240px] sm:min-h-[300px]"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <h3 className="font-bold text-blue-950 text-base sm:text-lg lg:text-xl mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">
                      {reg.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                      {reg.description}
                    </p>
                  </div>

                  <div className="mb-3 sm:mb-4 pt-2.5 sm:pt-3 border-t border-slate-100">
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2">Key Cities Served:</p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-center sm:justify-start">
                      {reg.topCities.slice(0, 5).map((city) => (
                        <span key={city} className="text-[11px] sm:text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                          {city}
                        </span>
                      ))}
                      {reg.topCities.length > 5 && (
                        <span className="text-[11px] sm:text-xs bg-slate-100 text-blue-950 px-2 py-0.5 rounded font-bold">
                          +{reg.topCities.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-blue-950 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 pt-2 border-t border-slate-100 mt-auto justify-center sm:justify-start">
                    <span>View Regional Page</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-blue-950" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Dot Indicators */}
          {scrollPositions.length > 1 && (
            <div className="flex justify-center items-center gap-2 mb-5 sm:mb-8">
              {scrollPositions.map((pos, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({
                        left: pos,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStep === idx ? "w-6 sm:w-8 bg-blue-950" : "w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to position ${idx + 1}`}
                />
              ))}
            </div>
          )}

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            Not sure which region covers your city? Call our dispatchers at <a href="tel:1-800-555-0199" className="text-blue-700 font-bold underline hover:text-blue-900">1-800-555-0199</a> for immediate confirmation.
          </div>
        </div>
      </section>

      {/* 4. Bay Area Service Area Map */}
      <section className="py-8 sm:py-14 lg:py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-2 sm:p-3 border border-slate-200 shadow-sm rounded-xl overflow-hidden">
            <div className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] bg-slate-100 overflow-hidden rounded-lg">
              <iframe 
                title="San Jose and Bay Area HVAC Service Area Map"
                src="https://maps.google.com/maps?q=San%20Jose%2C%20CA%20Bay%20Area&t=&z=9&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0" 
                loading="lazy" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Authorized Dealer Status — desktop only */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 text-blue-950 tracking-tight">
            Authorized Equipment & Factory Warranties
          </h2>
          <p className="text-slate-600 mb-4 sm:mb-6 text-xs sm:text-base lg:text-lg leading-relaxed max-w-3xl">
            We install and service top-tier equipment from Carrier, Trane, Lennox, Rheem, and all leading brands. Enjoy access to extended 10-year factory warranties and factory-trained technicians across all Bay Area service zones.
          </p>
          <Link to="/authorized-dealer" className="inline-flex items-center justify-center md:justify-start font-bold text-xs sm:text-base text-blue-950 hover:text-blue-800 transition-colors">
            Learn more about our dealer certifications <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
          </Link>
        </div>
      </section>

      {/* 6. Customer Reviews */}
      <div className="home-reviews-wrapper">
        <ReviewsSection reviews={reviews} />
      </div>

      {/* 7. Call to Action Band */}
      <CTABand />

      {/* 8. FAQs Section */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 tracking-tight">
                Frequently Asked Service Area Questions
              </h2>
              <p className="text-xs sm:text-base text-slate-600">
                Clear answers regarding service response times, permits, and dispatch.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {faqs.map((faq, index) => (
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
    </div>
  );
}
