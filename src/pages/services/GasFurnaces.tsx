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
  Shield, ArrowRight, Settings, ShieldAlert
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function GasFurnaces() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "Marcus B.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "Our 20-year-old gas furnace stopped heating right before a cold winter stretch. ReamsHVAC dispatched a tech the same morning. He inspected the heat exchanger for cracks, replaced a dirty flame sensor, and had warm air blowing in 45 minutes."
    },
    {
      name: "Linda P.",
      city: "Campbell, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "We upgraded our old 80% AFUE furnace to a 96% high-efficiency two-stage variable speed furnace. The team pulled all San Jose city permits and arranged the HERS duct leakage inspection. The house is whisper quiet now."
    },
    {
      name: "Steven C.",
      city: "Santa Clara, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "Upfront pricing, zero sales pressure, and outstanding technical expertise. They tested carbon monoxide safety levels and verified chimney venting draft before handing over the system."
    }
  ];

  const faqs = [
    {
      q: "How long do gas furnaces typically last in the Bay Area?",
      a: "With regular annual professional maintenance, a natural gas furnace in the South Bay typically lasts 15 to 20 years. As a furnace passes the 15-year mark, safety components—especially the heat exchanger—become vulnerable to thermal stress cracking."
    },
    {
      q: "What AFUE rating should I choose for a new furnace in California?",
      a: "AFUE (Annual Fuel Utilization Efficiency) measures what percentage of natural gas turns into heat. California requires a minimum 80% AFUE. High-efficiency condensing furnaces (95% to 98% AFUE) extract additional latent heat from exhaust gases, reducing natural gas usage."
    },
    {
      q: "Is it normal for my furnace to smell when first turned on for the season?",
      a: "A light, dusty odor during the first 10–15 minutes of winter operation is normal as ambient dust burns off heating elements. However, a strong rotten-egg gas smell or thick burning smell requires immediate system shutdown and inspection."
    },
    {
      q: "Do I need a municipal building permit to replace a furnace in San Jose?",
      a: "Yes. The City of San Jose, Santa Clara County, and surrounding municipalities require a mechanical permit and HERS duct leakage testing for all gas furnace replacements. ReamsHVAC manages the entire permit and inspection process."
    },
    {
      q: "How much does a gas furnace repair or replacement cost?",
      a: "Standard gas furnace repairs (igniter, flame sensor, blower capacitor) range between $150 and $1,500. A full furnace replacement—including a new high-efficiency unit, chimney venting, gas flex line, and HERS permit testing—typically runs $6,000 to $12,000."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Manual J Heating Load Calculation",
      mobileDescription: "Precise home load calculations determine exact furnace heating BTUs.",
      description: "We evaluate home square footage, ceiling height, and window insulation to determine exact furnace BTU input requirements."
    },
    {
      step: 2,
      title: "Gas Line & Venting Safety Audit",
      mobileDescription: "Verify gas supply pressure and flue draft for safe exhaust venting.",
      description: "We verify natural gas supply pressure, shutoff valve integrity, and flue pipe draft sizing to ensure safe combustion exhaust."
    },
    {
      step: 3,
      title: "Static Pressure & Duct Evaluation",
      mobileDescription: "Test plenum static pressure to eliminate duct airflow restrictions.",
      description: "We test static pressure on return and supply plenums to verify proper CFM blower airflow and eliminate duct restrictions."
    },
    {
      step: 4,
      title: "Precision Equipment Installation",
      mobileDescription: "Mount furnace, wire safety circuits, and seal duct transitions tightly.",
      description: "We mount the furnace, connect gas flex lines, wire 120V safety circuits, and seal duct transitions to prevent conditioned air leakage."
    },
    {
      step: 5,
      title: "Combustion Analysis & Testing",
      mobileDescription: "Analyze gas manifold pressure and test flue gases for complete safety.",
      description: "We measure gas manifold pressure, check burner flame color, and test flue gas carbon monoxide levels for complete combustion safety."
    },
    {
      step: 6,
      title: "HERS Permit Testing & Walkthrough",
      mobileDescription: "Coordinate HERS duct testing, file permits, and review controls.",
      description: "We schedule independent HERS duct testing, file San Jose municipal permits, and guide you through thermostat controls and air filter care."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/gas-furnaces#service",
        "name": "Gas Furnace Repair and Installation",
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
        "description": "Professional gas furnace repair, high-efficiency AFUE replacement, and safety inspections across San Jose and the South Bay."
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
            "name": "Gas Furnaces",
            "item": "https://reamshvac.com/services/gas-furnaces"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Furnace Repair & Installation in San Jose | ReamsHVAC"
        description="Expert gas furnace repair, 24/7 heating emergency service & high-efficiency furnace replacements in San Jose & South Bay. Call (408) 320-3288."
        canonical="/services/gas-furnaces"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Gas Furnaces" },
        ]}
        eyebrow="Reliable Natural Gas Heating"
        title="Gas Furnace Repair & Installation in San Jose"
        description="Keep your home warm and safe all winter with expert gas furnace repair, high-efficiency AFUE system upgrades, and comprehensive safety inspections across the South Bay."
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

      {/* 2. How a Gas Furnace Produces Heat Safely */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                How a Gas Furnace Produces Heat Safely
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Natural gas burners ignite within a sealed steel heat exchanger. As hot combustion gases warm the metal chambers, exhaust byproducts vent safely outdoors.
              </p>
              <p>
                The blower motor passes cool return air over the outside of the heat exchanger, absorbing warmth without ever contacting combustion gases, before ductwork distributes it throughout your home.
              </p>
              <p>
                Redundant safety controls, optical flame sensors, and high-limit switches continuously monitor operation, automatically shutting down gas flow if abnormal combustion or venting is detected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Types of Gas Furnaces: Which Fits Your Home */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Gas Furnace Configurations for South Bay Homes
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From economical 80% AFUE units to 98% condensing systems, we match the right heating tier to your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Single-Stage 80% AFUE */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Flame className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Flame className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Standard 80% AFUE</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Converts 80% of gas into heat. Uses standard metal B-vent chimneys with low upfront equipment cost for mild Bay Area winters.
                </p>
              </div>
            </div>

            {/* Two-Stage 80% AFUE */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Layers className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Layers className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Two-Stage 80% AFUE</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Operates on low heat during mild days for quieter, steady warming, jumping to full capacity only when winter temperatures dip.
                </p>
              </div>
            </div>

            {/* Condensing 95%+ AFUE */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Sparkles className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Condensing 95%+ AFUE</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Includes a secondary heat exchanger extracting latent flue gas heat, achieving 95%–98% efficiency with direct PVC outdoor venting.
                </p>
              </div>
            </div>

            {/* Modulating Variable-Speed */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Settings className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Settings className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Modulating Variable-Speed</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Continuously adjusts gas flame and ECM blower speed in 1% increments for pinpoint indoor temperature consistency and quiet operation.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            We perform Manual J heating load calculations to guarantee proper BTU furnace sizing and prevent dangerous short-cycling.
          </div>
        </div>
      </section>

      {/* 4. Tailored for South Bay & San Jose Microclimates */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tailored for South Bay & San Jose Microclimates
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
                rely on natural gas heating for fast, dependable winter comfort.
              </p>
              <p>
                Winter nighttime temperatures often drop into the 35°F–45°F range. Aging heating systems require meticulous combustion checks, proper chimney draft testing, and carbon monoxide safety verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Standard Efficiency vs High-Efficiency Condensing Heating */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                Standard 80% AFUE vs. High-Efficiency 96%+ Condensing
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Understanding how gas combustion efficiency impacts your natural gas bills and home safety.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Standard 80% AFUE */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Flame className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-amber-200/60">
                    <Flame className="w-3.5 h-3.5 text-amber-700" /> STANDARD 80% AFUE
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Atmospheric Venting & Lower Upfront Cost
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Heat Output:</strong> Converts 80 cents of every gas dollar into indoor heat, venting the remaining 20% through metal B-vent chimneys.
                    </p>
                    <p>
                      <strong>Simple Replacement:</strong> Replaces existing 80% furnaces directly without modifying roof flues or adding PVC drain lines.
                    </p>
                    <p>
                      <strong>Economical Option:</strong> Ideal for budget-conscious homeowners or homes in moderate winter climate zones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Condensing 96%+ AFUE */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Sparkles className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <Sparkles className="w-3.5 h-3.5 text-sky-700" /> CONDENSING 96%+ AFUE
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Secondary Heat Recovery & Low Gas Usage
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Maximum Efficiency:</strong> Captures latent heat from exhaust gases, converting up to 98% of natural gas directly into usable indoor heat.
                    </p>
                    <p>
                      <strong>Direct Sealed Venting:</strong> Exhausts cool gas through sidewall PVC pipe, drawing clean combustion air directly from outside.
                    </p>
                    <p>
                      <strong>Utility Gas Savings:</strong> Reduces monthly natural gas bills significantly during cold winter heating seasons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your Gas Furnace Needs Service */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your Furnace Needs Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Catch burner, ignition, or heat exchanger issues early to prevent winter heat loss and carbon monoxide hazards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Yellow or Flickering Flame",
                desc: "A healthy burner flame burns crisp blue. Yellow flickering indicates incomplete combustion or dirty burner ports."
              },
              {
                num: "02",
                title: "Frequent Short-Cycling",
                desc: "Shutting off after 1–2 minutes points to overheating limit switches or a corroded flame sensor."
              },
              {
                num: "03",
                title: "Squealing or Banging Noises",
                desc: "Popping sounds signal delayed gas ignition, while screeching indicates worn blower motor bearings."
              },
              {
                num: "04",
                title: "Gas Odor or CO Alarm Alert",
                desc: "Persistent gas odors or CO detector alarms require immediate gas shutoff and emergency service."
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
              Our 6-Step Furnace Workflow
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
                <div className="absolute right-1.5 bottom-1 sm:right-3 sm:bottom-2 text-3xl sm:text-5xl font-black text-blue-950/[0.04] sm:text-blue-900/[0.03] select-none pointer-events-none leading-none">
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

      {/* 8. Comparison Table: Condensing Furnace vs Standard 80% Furnace */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              Condensing 96%+ vs. Standard 80%
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing high-efficiency condensing units with standard atmospheric furnaces.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">96%+ Condensing Furnace</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Standard 80% AFUE Furnace</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">AFUE Efficiency Rating</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">95% – 98% AFUE Rating</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">80% AFUE Standard</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Heat Exchangers</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Dual (Primary + Secondary Condensing)</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Single Heat Exchanger</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Chimney Venting Material</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Sealed PVC Wall Venting</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard B-Vent Metal Chimney</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Natural Gas Usage</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">15%–20% Lower Monthly Gas Bills</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard Gas Consumption</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Rebate Eligibility</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Eligible for High-Efficiency Rebates</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Baseline Standard Model</td>
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
                Clear answers regarding gas furnace safety, efficiency, and installation.
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
