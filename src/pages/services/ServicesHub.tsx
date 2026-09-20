import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Zap, Droplet, Wrench, ThermometerSnowflake, Wind, 
  HelpCircle, Thermometer, Building2, ShieldCheck, Phone, 
  ArrowRight, Flame, ChevronDown, ChevronUp, Star, 
  CheckCircle2, Shield, Sparkles, Layers, Sun, Clock, 
  AlertTriangle, ShieldAlert, ChevronLeft, ChevronRight
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function ServicesHub() {
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

  const services = [
    {
      name: "Heating & Heat Pumps",
      description: "Comprehensive category hub covering gas furnace replacements, high-efficiency inverter heat pumps, and dual-fuel hybrid heating systems.",
      icon: <Flame className="w-6 h-6 text-amber-600" />,
      watermarkIcon: <Flame className="w-24 h-24" />,
      path: "/services/heating-heat-pumps",
      badge: "Category Hub"
    },
    {
      name: "Air Conditioning",
      description: "High-efficiency central AC installation, rapid heatwave emergency repairs, SEER2 energy upgrades, and refrigerant leak diagnostics.",
      icon: <Droplet className="w-6 h-6 text-cyan-600" />,
      watermarkIcon: <Droplet className="w-24 h-24" />,
      path: "/services/air-conditioning",
      badge: "Cooling"
    },
    {
      name: "Heat Pumps",
      description: "All-in-one electric heating and cooling. Eliminate gas combustion, cut carbon emissions, and qualify for TECH Clean California rebates.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      watermarkIcon: <Zap className="w-24 h-24" />,
      path: "/services/heat-pumps",
      badge: "Electrification"
    },
    {
      name: "Gas Furnaces",
      description: "Reliable winter heat with 80% to 96% AFUE furnaces. Includes heat exchanger safety checks, ignition repairs, and duct integration.",
      icon: <Wrench className="w-6 h-6 text-red-600" />,
      watermarkIcon: <Wrench className="w-24 h-24" />,
      path: "/services/gas-furnaces",
      badge: "Heating"
    },
    {
      name: "Mini Splits",
      description: "Ductless multi-zone heating and cooling for ADUs, room additions, converted garages, and homes lacking central attic ductwork.",
      icon: <ThermometerSnowflake className="w-6 h-6 text-sky-600" />,
      watermarkIcon: <ThermometerSnowflake className="w-24 h-24" />,
      path: "/services/mini-splits",
      badge: "Ductless"
    },
    {
      name: "Indoor Air Quality",
      description: "Protect your family from wildfire smoke, pollen, and airborne viruses with MERV 13 media filters, UV germicidal lights, and ERV ventilation.",
      icon: <Wind className="w-6 h-6 text-indigo-600" />,
      watermarkIcon: <Wind className="w-24 h-24" />,
      path: "/services/indoor-air-quality",
      badge: "Air Quality"
    },
    {
      name: "Duct Cleaning & Repair",
      description: "Eliminate dust buildup, restore airflow balance, and seal attic duct leaks to meet California Title 24 HERS standards.",
      icon: <Layers className="w-6 h-6 text-orange-600" />,
      watermarkIcon: <Layers className="w-24 h-24" />,
      path: "/services/duct-cleaning-repair",
      badge: "Ductwork"
    },
    {
      name: "Smart Thermostats",
      description: "Precision smart thermostat installation, C-wire power routing, PG&E Time-of-Use optimization, and multi-stage heat pump staging.",
      icon: <Thermometer className="w-6 h-6 text-teal-600" />,
      watermarkIcon: <Thermometer className="w-24 h-24" />,
      path: "/services/smart-thermostats",
      badge: "Controls"
    },
    {
      name: "Commercial HVAC",
      description: "Rooftop unit (RTU) replacements, VRF commercial systems, planned preventative maintenance contracts, and rapid response for businesses.",
      icon: <Building2 className="w-6 h-6 text-slate-700" />,
      watermarkIcon: <Building2 className="w-24 h-24" />,
      path: "/services/commercial-hvac",
      badge: "Commercial"
    },
    {
      name: "Maintenance Plans",
      description: "Prevent costly unexpected breakdowns with 21-point seasonal tune-ups, priority emergency dispatch, and 15% repair discounts.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      watermarkIcon: <ShieldCheck className="w-24 h-24" />,
      path: "/services/maintenance-plans",
      badge: "Protection"
    },
    {
      name: "24/7 Emergency HVAC",
      description: "Rapid 24/7 dispatch across San Jose for sudden heatwave AC failures, winter heating outages, electrical burning odors, and leaks.",
      icon: <Phone className="w-6 h-6 text-rose-600" />,
      watermarkIcon: <Phone className="w-24 h-24" />,
      path: "/services/emergency-hvac",
      badge: "24/7 Emergency"
    }
  ];

  const reviews = [
    {
      name: "Robert M.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "ReamsHVAC replaced our 20-year-old furnace and AC with a Bosch inverter heat pump. The crew was punctual, protected our hardwood floors, pulled San Jose permits, and passed HERS duct testing on the first try."
    },
    {
      name: "Sandra K.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "We used ReamsHVAC for both our home duct cleaning and installing a smart thermostat. Upfront flat-rate pricing with zero hidden fees. Highly recommend them for any HVAC work in the South Bay."
    },
    {
      name: "Marcus L.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "Our AC stopped working on a 100°F afternoon. ReamsHVAC dispatched an emergency technician within 2 hours who replaced a blown capacitor and restored cold air immediately. Fantastic service."
    }
  ];

  const faqs = [
    {
      q: "How do I choose the right HVAC service for my home?",
      a: "Our certified technicians start with a comprehensive load calculation and system evaluation. Whether you need a quick repair, an energy-saving heat pump electrification upgrade, or duct repair, we present clear options with flat-rate pricing so you can decide with confidence."
    },
    {
      q: "Are ReamsHVAC technicians licensed and insured in California?",
      a: "Yes. ReamsHVAC holds a valid California C-20 Warm-Air Heating, Ventilating and Air-Conditioning license (#1048291) and carries comprehensive commercial liability and workers' compensation insurance for your total protection."
    },
    {
      q: "What is California Title 24 compliance and why does it matter?",
      a: "California Title 24 sets strict energy efficiency standards for building heating and cooling replacements. All major system installations require city building permits and independent HERS duct leakage verification to ensure your system operates safely and efficiently."
    },
    {
      q: "Does ReamsHVAC offer upfront, flat-rate pricing?",
      a: "Yes! Before turning a wrench or ordering equipment, we provide an itemized, flat-rate written quote. You'll never see surprise hourly charges or hidden emergency dispatch add-ons."
    },
    {
      q: "What warranties are included with new HVAC installations?",
      a: "All new equipment installations include up to 10-year manufacturer parts warranties, optional 10-year compressor warranties, and our 100% Workmanship Guarantee covering labor and installation quality."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services#service",
        "name": "Comprehensive HVAC & Climate Control Services",
        "serviceType": "HVAC Service",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "ReamsHVAC",
          "telephone": "1-800-555-0199",
          "license": "CA C-20 #1048291",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Jose",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        },
        "areaServed": [
          { "@type": "City", "name": "San Jose" },
          { "@type": "City", "name": "Santa Clara" },
          { "@type": "City", "name": "Sunnyvale" },
          { "@type": "City", "name": "Cupertino" },
          { "@type": "City", "name": "Saratoga" }
        ],
        "description": "Full-service HVAC contractor in San Jose offering air conditioning, heat pumps, gas furnaces, indoor air quality, duct repairs, and 24/7 emergency service."
      },
      {
        "@type": "ItemList",
        "name": "HVAC Services List",
        "itemListElement": services.map((s, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": s.name,
          "url": `https://reamshvac.com${s.path}`
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
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
            "name": "Services",
            "item": "https://reamshvac.com/services"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Heating, AC & Heat Pump Services in San Jose | ReamsHVAC"
        description="Full-service HVAC contractor in San Jose: AC repair, furnace maintenance, ductless mini-splits, heat pumps & 24/7 emergency service. Call 1-800-555-0199."
        canonical="/services"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Full-Service San Jose HVAC Contractor"
        title="Comprehensive HVAC & Climate Services in San Jose"
        description="From energy-efficient heat pump conversions and gas furnace replacements to whole-home air purification and 24/7 emergency repairs—engineered for South Bay home performance."
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "/contact",
          icon: <Wrench className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "1-800-555-0199",
          href: "tel:1-800-555-0199",
        }}
      />

      {/* 2. Comprehensive HVAC Solutions Overview */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-3 sm:mb-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                San Jose Heating, Heat Pump & Air Conditioning Contractors
              </h2>
            </div>
            {/* Mobile shorter version */}
            <div className="block sm:hidden text-slate-700 leading-relaxed space-y-2.5 text-xs sm:text-sm text-center max-w-md mx-auto">
              <p>
                From 100°F summer heatwaves to winter chills, Santa Clara County homes require mechanical systems built for local microclimates.
              </p>
              <p>
                With 20+ years of licensed experience (CA C-20 #1048291), Reams HVAC specializes in heat pumps, gas furnaces, and Mitsubishi mini splits—all backed by Title 24 permits, HERS testing, upfront pricing, and our 100% Workmanship Guarantee.
              </p>
            </div>

            {/* Desktop / Tablet full version */}
            <div className="hidden sm:block prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base lg:text-lg text-left">
              <p>
                Maintaining consistent indoor climate across Santa Clara County requires mechanical systems engineered for Northern California microclimates. From scorching 100°F summer heatwaves in San Jose to cold winter rains and seasonal wildfire smoke inversions, your heat pump, furnace, and ventilation infrastructure face continuous demands.
              </p>
              <p>
                Reams HVAC delivers over two decades of mechanical expertise as a licensed C-20 contractor (CA #1048291). Our salaried tradespeople specialize in whole-home electric heat pump conversions, high-efficiency gas furnaces, Mitsubishi mini splits, precision duct sealing, and commercial climate systems.
              </p>
              <p>
                Every project includes City of San Jose Title 24 mechanical permits, certified third-party HERS duct leakage verification, upfront written pricing, and our 100% Workmanship Guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Explore Our Full Services Catalog Carousel Wheel */}
      <section className="py-10 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-8 gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-1.5 sm:mb-3 tracking-tight">
                Explore Our HVAC Services & Climate Solutions
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
                Select a specialized service category below to view detailed technical specifications, pricing guidance, and installation workflows.
              </p>
            </div>

            {/* Scroll Control Buttons (Hidden on mobile, visible on tablet & desktop) */}
            <div className="hidden sm:flex items-center justify-start gap-2 shrink-0">
              <button
                onClick={() => scroll('left')}
                className="p-2 sm:p-3 rounded-full bg-white border border-slate-200/90 text-blue-950 hover:bg-blue-950 hover:text-white transition-all shadow-2xs hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Previous Service"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 sm:p-3 rounded-full bg-white border border-slate-200/90 text-blue-950 hover:bg-blue-950 hover:text-white transition-all shadow-2xs hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Next Service"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Wheel Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory py-2 sm:py-4 px-[calc(50vw-145px)] sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 scroll-smooth mb-5 sm:mb-8 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="snap-center sm:snap-start shrink-0 w-[calc(100vw-3.5rem)] max-w-[290px] sm:w-[260px] md:w-[280px] h-[210px] sm:h-[230px] relative overflow-hidden bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 text-center sm:text-left shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                {/* Background Watermark Icon */}
                <div className="absolute -right-2 -bottom-2 sm:-right-3 sm:-bottom-3 opacity-[0.05] sm:opacity-[0.03] text-blue-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <div className="scale-75 sm:scale-100 origin-bottom-right">
                    {service.watermarkIcon}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-bold text-blue-950 text-sm sm:text-base md:text-lg mb-1 sm:mb-1.5 line-clamp-1">
                      {service.name}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="text-blue-950 font-bold text-xs sm:text-sm inline-flex items-center justify-center sm:justify-start gap-1.5 pt-2 border-t border-slate-100/80">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-blue-950" />
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
            Not sure which service fits your situation? Call our technical dispatchers at <a href="tel:1-800-555-0199" className="text-blue-700 font-bold underline hover:text-blue-900">1-800-555-0199</a> for immediate advice.
          </div>
        </div>
      </section>

      {/* 4. Tailored for South Bay & San Jose Homeowners */}
      <section className="relative py-10 sm:py-16 lg:py-24 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-3 sm:mb-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Dedicated Service for Santa Clara County Homeowners
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Our mobile service vans dispatch daily throughout{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">San Jose</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Santa Clara</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Sunnyvale</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Cupertino</Link>, and{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Saratoga</Link>.
              </p>
              <p>
                We replace aging gas furnaces with ultra-efficient inverter heat pumps, install hospital-grade wildfire smoke filtration, and dispatch emergency repair technicians during triple-digit South Bay heatwaves—with salaried master technicians and zero sales commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-1.5 sm:mb-2 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-base lg:text-lg text-slate-600">
                Clear answers regarding licensing, Title 24 compliance, and HVAC service options.
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
                    <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 sm:pt-4 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Verified Customer Reviews */}
      <div className="home-reviews-wrapper">
        <ReviewsSection />
      </div>

      {/* 9. Authorized Dealer Status & Certification Banner */}
      <section className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-2.5 sm:mb-4 text-blue-950 tracking-tight">
            Authorized Dealer Status & Equipment Excellence
          </h2>
          <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
            We service Carrier, Trane, Lennox, Rheem, and all major brands. As factory-authorized installers, we deliver cold-climate inverter engineering, 10–12 year factory warranties, and factory-trained installation craftsmanship.
          </p>
          <Link to="/authorized-dealer" className="inline-flex items-center justify-center md:justify-start font-bold text-xs sm:text-base text-blue-950 hover:text-blue-800 transition-colors">
            Learn more about our dealer certifications <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
          </Link>
        </div>
      </section>

      <CTABand />

      {/* Service Area Section with Interactive Map */}
      <section className="py-10 sm:py-16 lg:py-20 bg-slate-50 text-blue-950 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Map & Dispatch Hub Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-stretch mb-0">
            {/* Map Column */}
            <div className="lg:col-span-7 bg-white p-1.5 sm:p-2 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="relative w-full h-[240px] sm:h-[380px] lg:h-[440px] bg-slate-100 overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=San%20Jose%2C%20CA%20Bay%20Area&t=&z=9&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="San Jose and Bay Area HVAC Service Area Map"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Regional List / Dispatch Cards Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
              <div className="bg-white p-4 sm:p-6 border border-slate-200 shadow-xs text-center sm:text-left">
                <h3 className="font-extrabold text-blue-950 text-lg sm:text-xl mb-1">
                  San Jose & South Bay
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">
                  San Jose, Sunnyvale, Santa Clara, Palo Alto, Cupertino, Mountain View, Campbell, Milpitas, Los Gatos
                </p>
                <Link
                  to="/service-areas/south-bay"
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-blue-950 hover:text-blue-800 transition-colors"
                >
                  <span>Explore South Bay Cities</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-950" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div className="bg-white p-3 sm:p-5 border border-slate-200 shadow-xs flex flex-col justify-between text-center sm:text-left">
                  <div>
                    <h4 className="font-bold text-blue-950 text-xs sm:text-base mb-0.5 sm:mb-1">East Bay</h4>
                    <p className="text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-3 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      Oakland, Fremont, Hayward, Berkeley, Concord, Walnut Creek
                    </p>
                  </div>
                  <Link
                    to="/service-areas/east-bay"
                    className="inline-flex items-center justify-center sm:justify-start gap-1 text-[10px] sm:text-xs font-bold text-blue-950 hover:text-blue-800 transition-colors pt-1.5 sm:pt-2 border-t border-slate-100"
                  >
                    <span>View East Bay</span>
                    <ArrowRight className="w-3 h-3 text-blue-950" />
                  </Link>
                </div>

                <div className="bg-white p-3 sm:p-5 border border-slate-200 shadow-xs flex flex-col justify-between text-center sm:text-left">
                  <div>
                    <h4 className="font-bold text-blue-950 text-xs sm:text-base mb-0.5 sm:mb-1">Peninsula</h4>
                    <p className="text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-3 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      San Mateo, Redwood City, Burlingame, Menlo Park, San Carlos
                    </p>
                  </div>
                  <Link
                    to="/service-areas/peninsula"
                    className="inline-flex items-center justify-center sm:justify-start gap-1 text-[10px] sm:text-xs font-bold text-blue-950 hover:text-blue-800 transition-colors pt-1.5 sm:pt-2 border-t border-slate-100"
                  >
                    <span>View Peninsula</span>
                    <ArrowRight className="w-3 h-3 text-blue-950" />
                  </Link>
                </div>

                <div className="bg-white p-3 sm:p-5 border border-slate-200 shadow-xs flex flex-col justify-between text-center sm:text-left">
                  <div>
                    <h4 className="font-bold text-blue-950 text-xs sm:text-base mb-0.5 sm:mb-1">San Francisco</h4>
                    <p className="text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-3 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      Sunset, Richmond, Marina, Pacific Heights, SoMa, Mission
                    </p>
                  </div>
                  <Link
                    to="/service-areas/san-francisco"
                    className="inline-flex items-center justify-center sm:justify-start gap-1 text-[10px] sm:text-xs font-bold text-blue-950 hover:text-blue-800 transition-colors pt-1.5 sm:pt-2 border-t border-slate-100"
                  >
                    <span>View SF</span>
                    <ArrowRight className="w-3 h-3 text-blue-950" />
                  </Link>
                </div>

                <div className="bg-white p-3 sm:p-5 border border-slate-200 shadow-xs flex flex-col justify-between text-center sm:text-left">
                  <div>
                    <h4 className="font-bold text-blue-950 text-xs sm:text-base mb-0.5 sm:mb-1">North Bay</h4>
                    <p className="text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-3 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      San Rafael, Novato, Petaluma, Santa Rosa, Vallejo, Napa
                    </p>
                  </div>
                  <Link
                    to="/service-areas/north-bay"
                    className="inline-flex items-center justify-center sm:justify-start gap-1 text-[10px] sm:text-xs font-bold text-blue-950 hover:text-blue-800 transition-colors pt-1.5 sm:pt-2 border-t border-slate-100"
                  >
                    <span>View North Bay</span>
                    <ArrowRight className="w-3 h-3 text-blue-950" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
