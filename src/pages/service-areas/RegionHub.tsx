import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  MapPin, Phone, ShieldCheck, Clock, ArrowRight, Building2, 
  Flame, Droplet, Zap, ThermometerSnowflake, Wind, CheckCircle2, 
  Star, ChevronDown, ChevronUp, Award, Wrench, Navigation, Check, Layers,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { REGIONS_DATA } from "../../data/serviceAreaData";
import { SEO } from "../../components/SEO";

interface RegionHubProps {
  regionKey?: string;
}

export function RegionHub({ regionKey }: RegionHubProps) {
  const params = useParams();
  const currentRegionKey = regionKey || params.region || "south-bay";
  const region = REGIONS_DATA[currentRegionKey] || REGIONS_DATA["south-bay"];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollPositions, setScrollPositions] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

    children.forEach((child) => {
      const childOffset = child.offsetLeft - container.offsetLeft;
      const targetScroll = Math.min(Math.max(0, childOffset), maxScrollLeft);

      if (positions.length === 0 || targetScroll - positions[positions.length - 1] > 10) {
        positions.push(targetScroll);
      }
    });

    if (positions.length > 0 && maxScrollLeft - positions[positions.length - 1] > 10) {
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
  }, [region.cities]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    if (scrollPositions.length <= 1) {
      const scrollAmount = 350;
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

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ServiceArea",
        "@id": `https://reamshvac.com/service-areas/${region.id}#area`,
        "name": `ReamsHVAC ${region.name}`,
        "description": region.heroDescription,
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
            "item": `https://reamshvac.com/service-areas/${region.id}`
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title={`HVAC Heating & Cooling in ${region.name} | ReamsHVAC`}
        description={`Reliable heating, cooling, heat pump and AC services in the ${region.name} (${region.citiesCount}). Fast local dispatch & 24/7 emergency service. Call 1-800-555-0199.`}
        canonical={`/service-areas/${region.id}`}
        schema={schemaData}
      />

      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: region.name },
        ]}
        eyebrow={`${region.badge} • ${region.citiesCount}`}
        title={`HVAC Services in the ${region.name}`}
        description={region.heroDescription}
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

      {/* 2. Overview & Microclimate Section */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Localized HVAC Engineering for {region.name}
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>{region.overviewText}</p>
              <p>{region.climateFactors}</p>
              <p>{region.permitsAndRebates}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cities Served Carousel Wheel */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
                Cities We Serve in the {region.name}
              </h2>
              <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Select your city below for localized municipal permit guidance, rebate information, and neighborhood service coverage.
              </p>
            </div>

            {/* Scroll Control Buttons */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 sm:p-3 rounded-full bg-white border border-slate-200/90 text-blue-950 hover:bg-blue-950 hover:text-white transition-all shadow-2xs hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Previous City"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 sm:p-3 rounded-full bg-white border border-slate-200/90 text-blue-950 hover:bg-blue-950 hover:text-white transition-all shadow-2xs hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Next City"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Wheel Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-2 sm:py-4 px-1 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {region.cities.map((city) => (
              <Link
                key={city.slug}
                to={`/service-areas/${region.id}/${city.slug}`}
                className="snap-start shrink-0 w-[260px] sm:w-[320px] md:w-[350px] bg-white border border-slate-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-md hover:border-blue-950 transition-all flex flex-col justify-between group min-h-[190px] sm:min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
                    <h3 className="font-bold text-blue-950 text-lg sm:text-xl">
                      {city.name}
                    </h3>
                    {city.isPrimary && (
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200 shrink-0">
                        Primary Dispatch
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {city.tagline}
                  </p>
                </div>

                <div className="text-blue-950 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 pt-2.5 sm:pt-3 border-t border-slate-100 mt-auto">
                  <span>View {city.name} HVAC Page</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-blue-950" />
                </div>
              </Link>
            ))}
          </div>

          {/* Dot Indicators */}
          {scrollPositions.length > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
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
        </div>
      </section>

      {/* 4. Dark — Regional Specialization */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Localized HVAC Expertise for {region.name}
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Our service fleet hubs are strategically positioned across the {region.name} to minimize response times for both scheduled maintenance and emergency breakdowns.
              </p>
              <p>
                Every technician dispatched to your city arrives equipped with OEM replacement parts, nitrogen brazing stations, and digital diagnostic tools—eliminating delays caused by part sourcing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reviews Section */}
      <div className="home-reviews-wrapper">
        <ReviewsSection 
          title={`${region.name} Customer Reviews`}
          subtitle={`Verified 5-Star Service across ${region.name} Homes`}
          reviews={region.reviews}
        />
      </div>

      {/* 6. FAQs Section */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 tracking-tight">
                {region.name} HVAC FAQs
              </h2>
              <p className="text-xs sm:text-base text-slate-600">
                Answers regarding service response times and regional permitting.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {region.faqs.map((faq, index) => (
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
