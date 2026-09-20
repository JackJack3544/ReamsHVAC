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

export function HeatPumps() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "David M.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "Switched from an old gas furnace to a 4-ton heat pump with ReamsHVAC. The technician did a full Manual J load calculation first and handled all city permit filings. House cools down in minutes and our summer electric bills dropped significantly!"
    },
    {
      name: "Elena R.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "Our heat pump stopped heating during a cold stretch. Called ReamsHVAC at 8 AM, tech arrived by noon. Replaced a faulty defrost sensor and checked refrigerant levels. Upfront pricing with zero surprises."
    },
    {
      name: "Marcus K.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "The crew spent 2 days replacing our whole system and upgrading our panel. They used nitrogen purging during brazing and pulled a deep vacuum just like they promised in their workflow. Pure engineering craftsmanship."
    }
  ];

  const faqs = [
    {
      q: "Are there heat pump rebates available in San Jose and California?",
      a: "Rebate availability moves frequently as funding rounds open and close. Entering 2026: federal Section 25C tax credits expired Dec 31, 2025, and statewide TECH Clean California / HEEHRA programs are fully waitlisted. However, local municipal utility incentives—such as San José Clean Energy's EcoHome program and Silicon Valley Power in Santa Clara—remain active for eligible equipment. We verify real-time zip code incentives directly during your quote."
    },
    {
      q: "Do heat pumps work efficiently in cold Bay Area winter weather?",
      a: "Yes. Modern inverter-driven variable-speed heat pumps operate efficiently down to -13°F. Because winter temperatures across San Jose and the South Bay rarely dip below 35°F, heat pumps operate at peak thermodynamic COP (3.0 to 4.0), delivering 300% to 400% heating efficiency compared to electric resistance heat."
    },
    {
      q: "What is the key difference between a heat pump and central AC?",
      a: "A standard central AC only cools by moving indoor heat outside. A heat pump includes a heavy-duty reversing valve that flips the refrigeration cycle in winter, pulling ambient thermal energy from outdoor air to warm your home. One outdoor unit delivers complete year-round heating and cooling."
    },
    {
      q: "Will I need an electrical panel upgrade to install a heat pump?",
      a: "It depends on your current electrical capacity. Homes with 100-amp panels that power electric water heaters or EV chargers may require an upgrade to 200-amp service to safely power the heat pump's 240V double-pole circuit. Our technicians perform a thorough electrical load audit during our initial visit."
    },
    {
      q: "How much does a ducted heat pump replacement cost in the Bay Area?",
      a: "A full ducted heat pump replacement in San Jose typically ranges between $14,000 and $22,000 fully installed. Key variables include ductwork condition, panel capacity, equipment BTU tonnage, and SEER2/HSPF2 efficiency tier."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Manual J Load Calculation",
      mobileDescription: "Precise room-by-room BTU calculations ensure exact system sizing.",
      description: "We measure room square footage, insulation levels, window orientation, and ceiling height to compute exact heating and cooling BTU requirements. Never sized off the old unit's nameplate."
    },
    {
      step: 2,
      title: "Electrical Panel & Circuit Audit",
      mobileDescription: "Verify 240V breaker capacity and panel space before installation.",
      description: "We verify 240V double-pole breaker capacity, wire gauge safety, and panel headroom to determine if a 200A panel upgrade is required before ordering equipment."
    },
    {
      step: 3,
      title: "Ductwork Static Pressure Test",
      mobileDescription: "Test duct static pressure and seal leaks for optimal airflow.",
      description: "We test static pressure on return and supply trunks to identify airflow restrictions, sealing leaks to guarantee full CFM delivery without choking the blower."
    },
    {
      step: 4,
      title: "Nitrogen-Purged Brazing",
      mobileDescription: "Flow dry nitrogen during pipe brazing to prevent internal scale.",
      description: "During copper line set connections, dry nitrogen continuously flows inside the pipes to eliminate internal copper scale and oxidation buildup."
    },
    {
      step: 5,
      title: "Deep Vacuum Evacuation",
      mobileDescription: "Pull below 500 microns to remove moisture before charging.",
      description: "We pull a deep vacuum below 500 microns to purge non-condensable air and moisture before precision factory refrigerant charging by weight."
    },
    {
      step: 6,
      title: "Commissioning & Walkthrough",
      mobileDescription: "Calibrate thermostat, test performance, and guide you through controls.",
      description: "We configure smart thermostat controls, test defrost cycles, measure supply/return temperature splits, and walk you through system operation."
    }
  ];

  // Schema Markup for SEO & GEO AI Overviews
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/heat-pumps#service",
        "name": "Heat Pump Installation and Repair",
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
        "description": "Professional ducted and ductless heat pump installation, emergency repair, and maintenance in San Jose and the South Bay."
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
            "name": "Heat Pump Systems",
            "item": "https://reamshvac.com/services/heat-pumps"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Heat Pump Installation & Repair in San Jose | ReamsHVAC"
        description="Certified heat pump installation, electrification upgrades & repair across San Jose, Santa Clara & Sunnyvale. Maximize TECH Clean California rebates. Call (408) 320-3288."
        canonical="/services/heat-pumps"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Heat Pump Systems" },
        ]}
        eyebrow="Clean Energy Heating & Cooling"
        title="Heat Pump Installation & Repair in San Jose"
        description="Experience year-round home comfort with an eco-friendly heat pump. Efficient winter heating and refreshing summer cooling engineered in one unified system."
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

      {/* 2. How a Heat Pump Actually Works */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                The Thermodynamics of Heat Pump Systems
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Heat pumps move thermal energy rather than burning fuel to create it. An engineered, reversible refrigeration loop absorbs ambient heat outdoors and transfers it inside.
              </p>
              <p>
                Eco-friendly refrigerant circulates between inverter coils and an indoor air handler. A variable-speed compressor and precision expansion valve modulate refrigerant temperature with extreme accuracy.
              </p>
              <p>
                A 4-way reversing valve directs hot gas indoors for winter heating, or extracts indoor heat for summer cooling. Because shifting heat uses far less electricity than combustion flame, modern inverter heat pumps reach 300% to 400% COP efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Types of Heat Pumps: Which Fits Your Home */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Types of Heat Pumps: Which Fits Your Home?
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The right configuration depends on your ductwork, zoning preferences, and existing heating layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Ducted */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Wind className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Wind className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Ducted Central Split</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Connects outdoor inverter unit to indoor air handler distributing conditioned air via ductwork. Direct replacement for older gas furnaces.
                </p>
              </div>
            </div>

            {/* Ductless Mini-Splits */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Layers className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Layers className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Ductless Mini-Splits</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Links an outdoor compressor directly to wall or ceiling heads without ducts. Perfect for additions, Eichler homes, and targeted rooms.
                </p>
              </div>
            </div>

            {/* Multi-Zone Systems */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Sparkles className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Multi-Zone Inverters</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Runs 2 to 8 indoor heads from one outdoor compressor, allowing custom temperatures across multi-story floor plans without clutter.
                </p>
              </div>
            </div>

            {/* Packaged Systems */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Building2 className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Building2 className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Packaged Heat Pumps</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Combines compressor, blower, and evaporator in one exterior cabinet. Built for flat-roof properties and homes without crawlspace clearance.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            We calculate room heat loss and static duct friction during our Manual J audit before specifying system capacity.
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
                Optimized for South Bay Climate Zones
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
                are replacing gas heaters with electric inverter heat pumps.
              </p>
              <p>
                Because Santa Clara Valley winter lows typically stay between 38°F and 50°F, heat pumps operate continuously at peak efficiency without needing backup electric strips. Inverter systems deliver 3 to 4 units of heat output per kilowatt consumed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Warm Weather vs. Cold Weather Operation */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                Warm Weather vs. Cold Weather Operation
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Heat pumps provide year-round climate control by reversing refrigerant flow depending on the season.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Warm Weather Mode */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Sun className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-amber-200/60">
                    <Sun className="w-3.5 h-3.5 text-amber-700" /> WARM WEATHER (COOLING MODE)
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Summer Heat Rejection & Dehumidification
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Heat Extraction:</strong> The reversing valve directs refrigerant so the indoor coil absorbs room heat and humidity, dumping it outdoors through the condenser.
                    </p>
                    <p>
                      <strong>Humidity Control:</strong> Inverter compressors run continuously at low power to remove indoor moisture, keeping the home crisp and comfortable.
                    </p>
                    <p>
                      <strong>Heatwave Endurance:</strong> Delivers continuous cooling even when outdoor temperatures pass 100°F during South Bay heatwaves.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cold Weather Mode */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Snowflake className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <Snowflake className="w-3.5 h-3.5 text-sky-700" /> COLD WEATHER (HEATING MODE)
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Winter Heat Pumping & Defrost Cycles
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Heat Pumping:</strong> Refrigerant flow reverses, extracting ambient thermal energy from outdoor air and transferring it inside.
                    </p>
                    <p>
                      <strong>Automated Defrost:</strong> In humid cold conditions, automated short defrost cycles keep outdoor coils clear of ice with zero disruption.
                    </p>
                    <p>
                      <strong>Cold Performance:</strong> Hyper-heating engineering maintains full heat output down to sub-freezing temps without costly electric heat strips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your Heat Pump Needs Service */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your Heat Pump Needs Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Catch reversing valve issues or low refrigerant early before auxiliary electric heat strips spike your power bill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Unbroken Continuous Running",
                desc: "Compressor runs constantly without reaching thermostat setpoints—signaling refrigerant loss, clogged filters, or duct leakage."
              },
              {
                num: "02",
                title: "Auxiliary Heat Locked On",
                desc: "Thermostat shows 'Aux Heat' during mild 50°F weather, running expensive resistance strips because compressor is locked out."
              },
              {
                num: "03",
                title: "Outdoor Coil Frozen in Heavy Ice",
                desc: "Thick ice accumulation points to a failed defrost control board, stuck reversing valve solenoid, or ambient sensor fault."
              },
              {
                num: "04",
                title: "Sharp PG&E Billing Spikes",
                desc: "Unexplained bill increases indicate failing capacitors, dirty outdoor fins, or internal refrigerant bypass issues."
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

      {/* 9. Installation Workflow & Precision Engineering */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-white text-blue-950 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Our 6-Step Installation Workflow
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

      {/* 8. Comparison Table: Heat Pump vs Gas Furnace + AC */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              Heat Pump vs. Gas Furnace + AC
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing all-electric heat pumps with conventional gas furnace combos for South Bay homes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">Heat Pump System</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Gas Furnace + AC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Energy Source</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">100% Electricity (Solar ready)</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Natural Gas + Electricity</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Heating Efficiency</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">300% – 400% COP Efficiency</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">80% – 96% AFUE Efficiency</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Carbon Monoxide Risk</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Zero CO / No Gas Line Required</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Requires Gas Flue & CO Alarms</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">System Maintenance</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-slate-800">1 Unified System Maintenance</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">2 Separate Systems to Maintain</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Rebate Eligibility</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Qualifies for Local Electrification Rebates</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Ineligible for Electrification Grants</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Verified Customer Reviews */}
      <div className="home-reviews-wrapper">
        <ReviewsSection reviews={reviews} />
      </div>

      {/* 15. FAQs Section */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-base text-slate-600">
                Clear answers regarding heat pump efficiency, rebates, and installation.
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
