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
  Shield, ArrowRight, Settings, Droplet
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function AirConditioning() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "Robert T.",
      city: "San Jose, CA",
      date: "3 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "Our AC went out right on a 98-degree afternoon in San Jose. ReamsHVAC sent out a technician within 2 hours. He diagnosed a failed dual start capacitor, replaced it on the spot, and checked our subcooling levels. Fast, honest, and reasonable pricing."
    },
    {
      name: "Karen S.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "Replaced our 18-year-old single-stage unit with a 18 SEER2 two-stage AC system. The installation team was punctual, protected our flooring, and handled all HERS duct testing and San Jose city permits seamlessly."
    },
    {
      name: "Jason L.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "They performed a full Manual J load calculation before installing our variable-speed inverter air conditioner. The temperature inside stays perfectly consistent, and our PG&E bills dropped drastically."
    }
  ];

  const faqs = [
    {
      q: "How much does AC repair cost in San Jose and the South Bay?",
      a: "Most standard AC repairs in the Bay Area run between $150 and $1,200, depending on the failed component. Minor fixes like start capacitors or condensate drain flushes fall on the lower end ($150–$450). Major component failures—such as replacing an evaporator coil or compressor motor—range from $1,200 to $3,500+. We perform a thorough diagnostic inspection and provide a flat-rate, written quote upfront."
    },
    {
      q: "How long does a new central AC installation take?",
      a: "A standard central AC replacement is typically completed in 6 to 8 hours on a single day. If your home requires electrical panel upgrades, gas line modifications, or ductwork sealing to satisfy California Title 24 standards, the project may take 1.5 to 2 days."
    },
    {
      q: "What SEER2 rating is required for new air conditioners in California?",
      a: "Under current California Title 24 energy standards, all new split-system central air conditioners installed in San Jose and the South Bay must meet a minimum efficiency rating of 15 SEER2. Higher efficiency models—ranging from 17 to 24+ SEER2—provide superior humidity control, quieter operation, and lower monthly PG&E electric bills."
    },
    {
      q: "Should I repair my aging AC unit or replace it completely?",
      a: "We recommend considering system age and repair cost: if the estimated repair cost multiplied by system age exceeds $5,000—or if repair cost is over 50% of a new system—replacement is generally the smarter investment. Systems using phased-out R-22 refrigerant or aged over 12–15 years should also be replaced."
    },
    {
      q: "Do I need a building permit to replace my air conditioner in San Jose?",
      a: "Yes. The City of San Jose and surrounding South Bay municipalities strictly require a mechanical permit and HERS duct leakage testing for central AC replacements. ReamsHVAC handles all permit filings, coordinates HERS duct testing, and prepares your system for final city inspection."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Manual J Cooling Load Calculation",
      mobileDescription: "Precise square footage and solar calculations for exact cooling tonnage.",
      description: "We measure home square footage, window solar exposure, insulation levels, and ceiling heights to compute exact cooling BTU tonnage required."
    },
    {
      step: 2,
      title: "Electrical & Breaker Safety Audit",
      mobileDescription: "Inspect breaker capacity and disconnect switches for safe 240V power.",
      description: "We inspect circuit breaker sizing, disconnect switches, and wire gauge capacity to ensure safe, code-compliant 240V power delivery."
    },
    {
      step: 3,
      title: "Ductwork Airflow & Pressure Test",
      mobileDescription: "Measure static pressure and seal leaks for maximum CFM airflow.",
      description: "We measure static pressure across return and supply trunks, sealing leaky connections to guarantee maximum CFM airflow to every room."
    },
    {
      step: 4,
      title: "Nitrogen-Purged Refrigerant Lines",
      mobileDescription: "Dry nitrogen flows during pipe brazing to prevent internal scale.",
      description: "During copper line set connections, dry nitrogen continuously flows inside the tubing to prevent internal oxidation and scale buildup."
    },
    {
      step: 5,
      title: "Deep Vacuum Evacuation & Charge",
      mobileDescription: "Pull below 500 microns to remove moisture before precise factory charging.",
      description: "We pull a deep vacuum below 500 microns to purge moisture and non-condensables before precision factory refrigerant charging by weight."
    },
    {
      step: 6,
      title: "Commissioning & Airflow Walkthrough",
      mobileDescription: "Test temperature splits, calibrate thermostat, and review operation.",
      description: "We test subcooling/superheat values, measure supply-to-return temperature splits, set smart thermostat controls, and review system operation with you."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/air-conditioning#service",
        "name": "Air Conditioning Repair and Installation",
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
        "description": "Professional central air conditioning repair, high-efficiency SEER2 replacement, and cooling installation across San Jose and the South Bay."
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
            "name": "Air Conditioning",
            "item": "https://reamshvac.com/services/air-conditioning"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Air Conditioning Repair & Installation in San Jose | ReamsHVAC"
        description="Fast central AC repair, 24/7 emergency cooling service, and high-efficiency SEER2 replacements in San Jose, Santa Clara & Sunnyvale. Call 1-800-555-0199."
        canonical="/services/air-conditioning"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Air Conditioning" },
        ]}
        eyebrow="High-Efficiency Home Cooling"
        title="AC Repair & Installation in San Jose & South Bay"
        description="Stay cool and comfortable through peak South Bay summer heatwaves with reliable air conditioning repair, Title 24 compliant replacements, and precision installations."
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "/contact",
          icon: <Wrench className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "1-800-555-0199",
          href: "tel:1-800-555-0199",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      {/* 2. How Central AC Cooling Actually Works */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                The Mechanics of Central Air Conditioning
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Air conditioners do not create cold air; they extract indoor heat energy and reject it outdoors through a pressurized, closed-loop refrigeration circuit.
              </p>
              <p>
                Warm indoor air circulates across the evaporator coil, where liquid refrigerant absorbs thermal heat. The outdoor compressor then expels this concentrated heat outside while moisture drains away, keeping indoor air crisp and dehumidified.
              </p>
              <p>
                Modern variable-speed systems continuously modulate output from 25% to 100%, eliminating temperature spikes and drastically lowering summer electric bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Types of AC Systems: Which Fits Your Home */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Cooling System Options for South Bay Homes
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We evaluate your attic duct capacity, electrical panel, and cooling load before recommending equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Single-Stage */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Wind className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Wind className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Single-Stage AC</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Reliable baseline cooling running at full speed per cycle. Fully satisfies California Title 24 mandates on a sensible budget.
                </p>
              </div>
            </div>

            {/* Two-Stage */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Layers className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Layers className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Two-Stage AC</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Operates at quiet 65% capacity during mild weather for extended dehumidification, switching to high speed during heatwaves.
                </p>
              </div>
            </div>

            {/* Inverter Variable-Speed */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Sparkles className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Variable-Speed Inverter</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Modulates output in fine 1% increments, eliminating room temperature swings while significantly reducing electric bills.
                </p>
              </div>
            </div>

            {/* Packaged AC Systems */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Building2 className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Building2 className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Packaged Units</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Houses compressor, coil, and blower in a single durable outdoor cabinet, preserving interior closet and attic square footage.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            We perform Manual J load calculations to determine exact cooling tonnage required before recommending specific equipment tiers.
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
                Engineered for Inland South Bay Heat Loads
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Inland Santa Clara communities—including{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">San Jose</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Santa Clara</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Sunnyvale</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Cupertino</Link>, and{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Saratoga</Link>{" "}
                —regularly face summer temperatures reaching 95°F–105°F.
              </p>
              <p>
                Unlike coastal areas, South Bay rooflines absorb intense solar radiation through late summer. We engineer and calibrate systems designed for high-ambient heatwaves, proper airflow, and Title 24 efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Warm Weather vs. Extreme Heatwave Operation */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                Moderate Weather vs. Extreme Heatwave Performance
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Modern AC systems adjust compressor operation based on outdoor ambient temperatures to balance power bills and cooling output.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Moderate Cooling Mode */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Sun className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-amber-200/60">
                    <Sun className="w-3.5 h-3.5 text-amber-700" /> MODERATE COOLING (75°F – 88°F)
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Low-Capacity Dehumidification & Savings
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm sm:leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Low-Speed Modulation:</strong> Runs at 30% to 65% capacity on mild days, drawing minimal electricity while keeping air circulating steadily.
                    </p>
                    <p>
                      <strong>Moisture Removal:</strong> Longer, lower-speed cooling cycles strip humidity far more effectively than abrupt full-blast cycling.
                    </p>
                    <p>
                      <strong>Lower PG&E Bills:</strong> Prevents peak demand surcharges during mild summer afternoons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Heatwave Mode */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Snowflake className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <Snowflake className="w-3.5 h-3.5 text-sky-700" /> EXTREME HEATWAVE (95°F – 105°F+)
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    High-Ambient Heat Rejection
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm sm:leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Full Capacity Ramping:</strong> Ramps to 100% capacity to overcome rapid solar thermal gain through roofs and windows.
                    </p>
                    <p>
                      <strong>High-Pressure Protection:</strong> Outdoor fans operate at maximum speed to reject extreme heat without tripping safety switches.
                    </p>
                    <p>
                      <strong>Reliable Temperature Hold:</strong> Maintains target thermostat setpoints even when outdoor ambient heat exceeds triple digits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your AC Needs Service */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your AC Needs Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Catch electrical contactor wear or refrigerant leaks early before they trigger compressor breakdown during a heatwave.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Warm Air Blowing from Registers",
                desc: "Points to a failed capacitor, grounded compressor windings, or disconnected ductwork pulling hot attic air into vents."
              },
              {
                num: "02",
                title: "Frost or Ice Along Copper Suction Line",
                desc: "Signals severe airflow blockage from choked air filters or low refrigerant levels causing coils to freeze solid."
              },
              {
                num: "03",
                title: "Rapid 2-to-5 Minute Short-Cycling",
                desc: "Indicates overheating thermal limits, choked outdoor coils, or an improperly calibrated thermostat."
              },
              {
                num: "04",
                title: "Water Pooling Around the Evaporator Pan",
                desc: "Algae clogs the PVC drain line, risking water overflow into attic insulation or ceiling drywall."
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

      {/* 7. Our 6-Step Installation & Repair Workflow */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-white text-blue-950 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Our 6-Step AC Workflow
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

      {/* 8. Comparison Table: Modern Inverter AC vs Standard Single-Stage AC */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              Inverter AC vs. Standard AC
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing variable-speed inverter air conditioners with conventional single-stage cooling units.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">Inverter Variable-Speed AC</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Standard Single-Stage AC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Compressor Speed Range</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">25% – 100% Continuous Modulation</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">100% Full On / Off Only</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Efficiency Rating</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">19 – 24+ SEER2 Rating</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">15 – 16 SEER2 Baseline</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Dehumidification Capability</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Superior Continuous Humidity Removal</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard Short Cooling Cycles</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Operating Sound Level</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Whisper Quiet (~55–62 dBA)</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard Fan Noise (~72–76 dBA)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">PG&E Energy Cost Impact</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Up to 40% Lower Monthly Bills</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard Utility Consumption</td>
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
                Clear answers regarding air conditioning repair, SEER2 standards, and installation.
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
