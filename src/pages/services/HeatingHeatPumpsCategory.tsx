import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, Wrench, 
  HelpCircle, DollarSign, Clock, 
  ChevronDown, ChevronUp, Phone, Snowflake, Sun,
  Star, CheckCircle2,
  Building2, Zap,
  Flame, Layers, Wind, Scale,
  ShieldCheck, Sparkles,
  Shield, ArrowRight, Settings
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function HeatingHeatPumpsCategory() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "Daniel S.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "ReamsHVAC helped us convert our 20-year-old gas furnace to a Bosch 20 SEER inverter heat pump. Our winter heating is whisper-quiet, and we love eliminating gas combustion from our home."
    },
    {
      name: "Megan T.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "We replaced our cracked furnace heat exchanger with a high-efficiency Carrier gas unit. ReamsHVAC satisfied Title 24 HERS duct testing, pulled permits, and finished in a single day."
    },
    {
      name: "Carlos V.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "Installed a dual-fuel hybrid system pairing a gas furnace with an electric heat pump. Our energy bills drop significantly during mild fall/spring months when the heat pump runs."
    }
  ];

  const faqs = [
    {
      q: "Is a heat pump truly sufficient for Bay Area winters?",
      a: "Yes, absolutely. Heat pumps extract thermal energy from outside air down to temperatures well below freezing. Because Bay Area winters rarely see sustained temperatures below 35°F at lower elevations, modern inverter heat pumps operate at peak heating efficiency throughout the entire winter."
    },
    {
      q: "Gas Furnace vs. Heat Pump: Which is better for a San Jose home?",
      a: "Neither system is universally 'better'—the right choice depends on your home's existing infrastructure, electrical panel capacity, and long-term electrification goals. A gas furnace provides lower upfront replacement costs, while a heat pump replaces both furnace and AC with one all-electric system."
    },
    {
      q: "What does California's Title 24 code mean for my heating choice?",
      a: "California Title 24 establishes strict performance and efficiency standards for HVAC installations. While gas furnace replacements remain legal in existing homes, Title 24 mandates HERS duct leakage testing, mechanical permits, and specific airflow metrics whenever heating is replaced."
    },
    {
      q: "Can I install a dual-fuel system combining a gas furnace and heat pump?",
      a: "Yes! Dual-fuel (hybrid) systems pair an electric heat pump with a gas furnace backup. The heat pump handles heating during moderate 45°F–65°F days when electricity efficiency is highest, and automatically switches to gas heating when temperatures drop."
    },
    {
      q: "How much does it cost to convert from a gas furnace to a heat pump?",
      a: "A complete conversion—including removing the old furnace and AC coil, installing a high-efficiency heat pump, running new electrical wiring, and adjusting ductwork—typically ranges between $14,000 and $22,000 in the Bay Area."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Manual J Heating Load & Fuel Source Audit",
      mobileDescription: "Measure square footage and panel capacity for precise BTU requirements.",
      description: "We measure room square footage, window insulation, and electrical panel headroom to determine exact BTU heating requirements."
    },
    {
      step: 2,
      title: "Electrical Circuit & Gas Line Verification",
      mobileDescription: "Verify 240V breaker capacity or gas line pressure and flue draft.",
      description: "We verify 240V double-pole breaker capacity for heat pump compressors or inspect gas line pressure and flue ventilation for furnaces."
    },
    {
      step: 3,
      title: "Legacy Equipment Removal & Sheet Metal Retrofit",
      mobileDescription: "Safely recover refrigerant and custom-fit insulated supply plenums.",
      description: "We reclaim legacy refrigerant cleanly, remove aging furnace cabinets, and custom-fabricate insulated plenum supply trunks."
    },
    {
      step: 4,
      title: "High-Efficiency System Set & Copper Line Connections",
      mobileDescription: "Mount indoor unit, level outdoor pad, and nitrogen-purge copper lines.",
      description: "We mount the indoor furnace/air handler, set outdoor heat pump units on level pads, and nitrogen-purge copper line set brazing."
    },
    {
      step: 5,
      title: "Title 24 HERS Duct Leakage & Airflow Test",
      mobileDescription: "Pressurize ductwork to ensure leakage stays below Title 24 limits.",
      description: "We pressurize ductwork to ensure leakage stays below California Title 24 limits and test blower static pressure."
    },
    {
      step: 6,
      title: "Commissioning & Smart Thermostat Walkthrough",
      mobileDescription: "Program thermostat logic, test heating cycles, and review controls.",
      description: "We program smart thermostat staging logic, test heating cycles, verify gas safety limits, and guide you through app controls."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/heating-heat-pumps#service",
        "name": "Heating & Heat Pump Services",
        "serviceType": "HVAC Service",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "ReamsHVAC",
          "telephone": "(408) 320-3288",
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
        "description": "Heating installation, gas furnace replacement, heat pump electrification conversions, and dual-fuel hybrid systems across San Jose."
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Heating & Heat Pumps",
            "item": "https://reamshvac.com/services/heating-heat-pumps"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Heating & Heat Pump Services in San Jose | ReamsHVAC"
        description="Gas furnace repair, high-efficiency heat pump installation & dual-fuel heating solutions in San Jose, Santa Clara & Bay Area. Call (408) 320-3288."
        canonical="/services/heating-heat-pumps"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Heating & Heat Pumps" },
        ]}
        eyebrow="Bay Area Heating Expertise"
        title="Heating & Heat Pump Services in San Jose"
        description="Gas furnaces, high-efficiency inverter heat pumps, and dual-fuel hybrid heating systems engineered for South Bay home comfort, safety, and Title 24 compliance."
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "/contact",
          icon: <Wrench className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "(408) 320-3288",
          href: "tel:4083203288",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      {/* 2. Why Heating & Heat Pump Selection Matters */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Choosing the Right Heating System for Your Bay Area Home
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                When South Bay temperatures drop during winter nights, having dependable heating is essential for comfort and air quality. Today's homeowners can choose between high-efficiency gas furnaces and clean, all-electric inverter heat pumps.
              </p>
              <p>
                With California Title 24 codes and PG&E rate structures evolving, selecting the right heating configuration depends on your electrical panel, ductwork condition, and long-term energy goals.
              </p>
              <p>
                ReamsHVAC installs, repairs, and replaces gas furnaces and heat pumps across San Jose and the South Bay, providing honest sizing advice backed by our 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Heating Solutions Offered */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Heating Solutions Engineered for South Bay Homes
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We engineer, service, and install all top heating technologies for South Bay homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Variable-Speed Heat Pumps */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Zap className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Zap className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Inverter Heat Pumps</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  All-electric heating and cooling in a single outdoor unit, eliminating gas combustion while meeting Title 24 standards.
                </p>
              </div>
            </div>

            {/* High-Efficiency Gas Furnaces */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Flame className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Flame className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Gas Furnaces</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  80% to 96% AFUE gas furnaces delivering instant warm air with lower upfront replacement costs for homes with gas lines.
                </p>
              </div>
            </div>

            {/* Ductless Mini-Split Heat Pumps */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Snowflake className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Snowflake className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Ductless Mini-Splits</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Zoned wall units perfect for room additions, converted garages, and spaces lacking central ductwork.
                </p>
              </div>
            </div>

            {/* Hybrid Dual-Fuel Systems */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Layers className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Layers className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Hybrid Dual-Fuel</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Combines an electric heat pump for mild days with a gas furnace backup for maximum winter comfort and lower bills.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            All heating installations include City mechanical permits, Title 24 HERS duct testing, and 10-year parts warranty coverage.
          </div>
        </div>
      </section>

      {/* 4. Tailored for South Bay & San Jose Homeowners */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tailored for South Bay & San Jose Homeowners
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Homeowners across{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">San Jose</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Santa Clara</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Sunnyvale</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Cupertino</Link>, and{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Saratoga</Link>{" "}
                experience mild but chilly winter weather requiring efficient home heating.
              </p>
              <p>
                Whether you prefer lower upfront gas furnace replacement costs or wish to transition to clean all-electric heat pump cooling and heating, ReamsHVAC guarantees proper sizing, electrical safety checks, and 100% compliant installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. All-Electric Heat Pumps vs High-Efficiency Gas Furnaces */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                All-Electric Heat Pumps vs. High-Efficiency Gas Furnaces
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Comparing all-electric heat pump technology with traditional gas furnace heating.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Electric Heat Pump */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Zap className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <Zap className="w-3.5 h-3.5 text-sky-700" /> ALL-ELECTRIC HEAT PUMP
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Heating & Cooling in 1 System
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Consolidates Equipment:</strong> One outdoor inverter unit provides summer cooling and winter heating without gas combustion.
                    </p>
                    <p>
                      <strong>Title 24 & Rebate Aligned:</strong> Fully satisfies California building decarbonization standards and qualifies for electrification incentives.
                    </p>
                    <p>
                      <strong>Electrical Panel Needs:</strong> Requires 240V double-pole circuit; electrical panel upgrade from 100A to 200A may be needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gas Furnace */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Flame className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-amber-200/60">
                    <Flame className="w-3.5 h-3.5 text-amber-700" /> NATURAL GAS FURNACE
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Lower Upfront Replacement Cost
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Direct Replacement:</strong> Lower initial equipment and installation cost for homes with existing gas lines and ductwork.
                    </p>
                    <p>
                      <strong>Instant Warm Supply Air:</strong> Delivers 110°F–120°F supply air temperature during chilly winter nights.
                    </p>
                    <p>
                      <strong>Heating Only:</strong> Requires separate AC cooling coil and outdoor condenser unit for summer cooling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your Heating System Needs Diagnostic Service */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your Heating System Needs Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Catch dirty flame sensors, cracked heat exchangers, or reversing valve errors before winter cold snaps hit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Furnace Ignites Then Immediately Shuts Off",
                desc: "Short ignition cycles stem from soot buildup on the flame sensor rod or tripped high-limit switches."
              },
              {
                num: "02",
                title: "Heat Pump Blowing Cool Air in Winter Mode",
                desc: "Blowing lukewarm air indicates a stuck heat pump reversing valve solenoid, loss of charge, or thermistor failure."
              },
              {
                num: "03",
                title: "Unusual Squealing or Rattling Blower Noises",
                desc: "Rattling sounds point to loose blower wheel set screws, unaligned motor bearings, or loose sheet metal ducts."
              },
              {
                num: "04",
                title: "Yellow Gas Flame or Carbon Monoxide Alert",
                desc: "A yellow flickering burner flame indicates incomplete gas combustion, requiring immediate heat exchanger safety inspection."
              }
            ].map((item) => (
              <div 
                key={item.num}
                className="bg-transparent sm:bg-slate-950/60 border-0 sm:border sm:border-slate-800/80 rounded-none sm:rounded-2xl p-0 sm:p-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 group hover:border-slate-700 transition-colors"
              >
                <span className="flex-shrink-0 font-mono text-lg sm:text-2xl font-bold text-white pt-0.5">
                  {item.num}
                </span>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our 6-Step Installation Workflow */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-white text-blue-950 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Our 6-Step Heating Installation Workflow
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Engineered procedures guaranteeing optimal efficiency and 15+ years of reliable performance.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {installSteps.map((s) => (
              <div 
                key={s.step} 
                className="relative overflow-hidden bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center sm:text-left shadow-2xs hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group"
              >
                {/* Background Watermark Number (Subtle on mobile) */}
                <div className="absolute right-1.5 bottom-1 sm:right-3 sm:bottom-2 text-3xl sm:text-5xl font-black text-blue-950/[0.15] sm:text-blue-900/[0.10] select-none pointer-events-none leading-none">
                  {s.step}
                </div>

                <div className="relative z-10 flex flex-col items-center sm:items-start h-full w-full">
                  {/* Step Badge (Hidden on mobile) */}
                  <div className="hidden sm:flex w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-950 text-white font-black text-xs sm:text-lg items-center justify-center shadow-xs mb-2.5 sm:mb-4 group-hover:bg-blue-800 transition-colors flex-shrink-0">
                    {s.step}
                  </div>

                  {/* Title */}
                  <div className="min-h-0 sm:min-h-[3rem] flex items-center sm:items-start mb-1 sm:mb-2 text-center sm:text-left">
                    <h3 className="text-xs sm:text-lg font-bold text-blue-950 group-hover:text-blue-700 transition-colors leading-snug">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-[10px] sm:text-sm leading-tight sm:leading-relaxed flex-1 text-center sm:text-left">
                    <span className="sm:hidden">{s.mobileDescription || s.description}</span>
                    <span className="hidden sm:inline">{s.description}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Comparison Table: Heat Pump vs Gas Furnace vs Dual-Fuel */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              Heat Pump vs. Gas Furnace vs. Dual-Fuel
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing heating efficiency, fuel sources, and equipment costs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">Heat Pump System</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Natural Gas Furnace</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Dual-Fuel Hybrid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Energy Source</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">100% Electricity</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Natural Gas</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Electricity + Gas Backup</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Summer Air Conditioning</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Built-in Reverse Inverter AC</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Requires Add-On AC Coil</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Built-in Heat Pump AC</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Title 24 Electrification</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Fully Compliant</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Permitted for Replacements</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Fully Compliant</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Estimated Installed Cost</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">$14,000 – $22,000</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">$6,000 – $12,000</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">$16,000 – $24,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Heating COP / Efficiency</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">250% – 380% Efficiency</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">80% – 96% AFUE</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Optimized Dual COP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Verified Customer Reviews */}
      <div className="home-reviews-wrapper">
        <ReviewsSection reviews={reviews} />
      </div>

      {/* 10. FAQs Section */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-base text-slate-600">
                Clear answers regarding furnaces, heat pump electrification, and Title 24 compliance.
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

      <div className="home-cta-wrapper hidden sm:block">
        <CTABand />
      </div>
    </div>
  );
}
