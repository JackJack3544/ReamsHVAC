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
  Shield, ArrowRight, Settings, Home
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function MiniSplits() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "Dmitri K.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "Installed a 3-zone Mitsubishi mini split for our home office, primary bedroom, and new backyard ADU. ReamsHVAC ran pristine line hide conduit along the exterior stucco. The indoor units operate so quietly you can barely tell they are running."
    },
    {
      name: "Sarah W.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "Our garage conversion needed heating and cooling without connecting to our main house furnace. ReamsHVAC recommended a single-zone hyper-heating mini split. Upfront estimate, zero unexpected fees, and finished in a single day."
    },
    {
      name: "Andrew T.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "We replaced noisy window AC units in our ranch home with a 4-zone mini split system. Room-by-room temperature control is a game changer, and our monthly electric bills dropped by 35%."
    }
  ];

  const faqs = [
    {
      q: "Can a ductless mini split heat and cool an entire house?",
      a: "Yes! A multi-zone ductless mini split system uses a single outdoor inverter compressor connected to up to 8 individual indoor air handlers. Each room gets its own dedicated indoor unit and thermostat, allowing customized temperature settings across your home."
    },
    {
      q: "How many indoor zones do I need for my home layout?",
      a: "The number of zones depends on your floor plan and square footage. Typically, we install one indoor air handler per independently enclosed room or open-concept living area. During our site visit, we calculate exact BTU heating and cooling loads for every zone."
    },
    {
      q: "Are ductless mini splits quiet during operation?",
      a: "Ductless mini splits are exceptionally quiet. Indoor units operate as low as 19 decibels—quieter than a whisper. Outdoor inverter condensers run at 45 to 55 decibels, eliminating neighborhood noise complaints in tight zero-lot-line South Bay properties."
    },
    {
      q: "Why are mini splits the standard choice for ADUs in San Jose?",
      a: "California's state ADU laws have driven a surge in backyard ADUs and garage conversions. Running bulky ductwork into an independent ADU is impractical and expensive. A ductless mini split provides independent, highly efficient, all-electric heating and cooling."
    },
    {
      q: "How much does mini split installation cost in the South Bay?",
      a: "A single-zone ductless mini split installation (ideal for an ADU or room addition) typically costs between $4,500 and $8,000 installed. Multi-zone systems for whole-home climate control scale with the number of indoor units, ranging from $10,000 to $25,000+."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Zone-by-Zone Load Calculation",
      mobileDescription: "Calculate room square footage and solar gain for precise zone sizing.",
      description: "We compute individual room square footage, window solar gain, and wall insulation to determine precise BTU sizing for each indoor head."
    },
    {
      step: 2,
      title: "Electrical Subpanel & Dedicated Line Audit",
      mobileDescription: "Inspect 240V panel headroom and wire dedicated disconnect whips.",
      description: "We inspect 240V breaker panel headroom and run dedicated electrical whips with disconnect boxes for the outdoor condenser."
    },
    {
      step: 3,
      title: "Wall Mounting & Exterior Line Penetration",
      mobileDescription: "Mount indoor plates and drill sloped exterior drainage penetrations.",
      description: "We securely mount indoor wall plates and core-drill 3-inch exterior wall penetrations sloped downward for proper condensate drainage."
    },
    {
      step: 4,
      title: "Refrigerant Line Set & Line-Hide Duct",
      mobileDescription: "Route lines inside UV-resistant decorative exterior slim-duct covers.",
      description: "We run insulated copper line sets, communication wiring, and drain lines inside UV-resistant decorative exterior slim-duct covers."
    },
    {
      step: 5,
      title: "Nitrogen Purge & Deep Vacuum Evacuation",
      mobileDescription: "Pressure-test lines and pull vacuum below 500 microns before release.",
      description: "We pressure-test copper lines with dry nitrogen and pull a deep vacuum below 500 microns before opening factory refrigerant valves."
    },
    {
      step: 6,
      title: "Zone Commissioning & Remote Setup",
      mobileDescription: "Test heating and cooling, set up app controls, and review care.",
      description: "We test cooling and heating cycles across all zones, verify condensate flow, configure wireless remotes or smart app controls, and review care with you."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/mini-splits#service",
        "name": "Ductless Mini Split Installation and Repair",
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
        "description": "Professional ductless mini split installation, multi-zone heat pump configuration, and emergency repair across San Jose and the South Bay."
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
            "name": "Ductless Mini Splits",
            "item": "https://reamshvac.com/services/mini-splits"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Ductless Mini Split Installation in San Jose | ReamsHVAC"
        description="Multi-zone ductless mini split heat pump installation and repair in San Jose & Bay Area. High-efficiency zoned cooling & heating. Call 1-800-555-0199."
        canonical="/services/mini-splits"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Ductless Mini Splits" },
        ]}
        eyebrow="Targeted Zoned Heating & Cooling"
        title="Ductless Mini Split Installation in San Jose"
        description="Enjoy whisper-quiet, customized room-by-room heating and cooling without bulky ductwork. The ideal high-efficiency solution for ADUs, garage conversions, and zoned home additions."
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

      {/* 2. How Ductless Mini Splits Deliver Precision Zoned Comfort */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                How Ductless Mini Splits Deliver Zoned Comfort
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Ductless mini splits deliver conditioned air directly into individual rooms without ductwork. A compact outdoor heat pump connects to indoor air handling heads via a slim 3-inch line set carrying refrigerant lines and wiring.
              </p>
              <p>
                Because duct friction causes up to 30% energy loss in standard setups, mini splits reach up to 30.5 SEER2. Each indoor head features dedicated controls, letting you condition only the rooms you are using.
              </p>
              <p>
                Inverter compressors modulate output continuously to maintain even temperatures, whisper-quiet sound (as low as 19 dBA), and electric efficiency in all seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Types of Indoor Mini Split Heads: Which Fits Your Home */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Ductless Mini Split Configurations for Bay Area Homes
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Multiple indoor styles designed to blend seamlessly with your interior architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Wall-Mounted High Wall */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Wind className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Wind className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Wall-Mounted High Wall</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our most popular option. Mounts high on interior or exterior walls with motorized louvers and whisper-quiet airflow.
                </p>
              </div>
            </div>

            {/* Ceiling Cassettes */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Layers className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Layers className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Ceiling Cassettes</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Recesses flush into ceiling joists for 360-degree 4-way airflow with zero wall clutter.
                </p>
              </div>
            </div>

            {/* Floor Consoles */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Sparkles className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Floor Consoles</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Mounts low along baseboards, ideal for knee-wall attics or replacing old cast-iron radiator heaters.
                </p>
              </div>
            </div>

            {/* Slim-Duct Concealed */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Building2 className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Building2 className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Slim-Duct Concealed</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Hidden behind drop ceilings or closets, feeding discreet grilles for an invisible HVAC appearance.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            We evaluate room layout and ceiling height during our initial estimate to ensure optimal air distribution and aesthetics.
          </div>
        </div>
      </section>

      {/* 4. Tailored for South Bay ADUs & Home Conversions */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tailored for South Bay ADUs & Garage Conversions
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Property owners across{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">San Jose</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Santa Clara</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Sunnyvale</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Cupertino</Link>, and{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Saratoga</Link>{" "}
                are adding ADUs and converting garages into modern living spaces.
              </p>
              <p>
                Ductless mini splits are the top HVAC choice for South Bay ADUs: meeting Title 24 standards, requiring zero ducting, and offering independent climate zones for family or tenants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Single-Zone vs Multi-Zone Whole-Home Systems */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                Single-Zone vs. Multi-Zone Systems
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Choose between targeted single-room comfort and multi-zone whole-home climate control.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Single-Zone */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Sun className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-amber-200/60">
                    <Sun className="w-3.5 h-3.5 text-amber-700" /> SINGLE-ZONE (1 INDOOR HEAD)
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Targeted Comfort for ADUs & Additions
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Dedicated Climate:</strong> Powers 1 indoor head directly from 1 outdoor compressor, ideal for garage suites, home offices, and additions.
                    </p>
                    <p>
                      <strong>Affordable Value:</strong> Straightforward installation with typical turnkey investments between $4,500 and $8,000.
                    </p>
                    <p>
                      <strong>Same-Day Install:</strong> Most single-zone systems are completed in 4 to 6 hours with minimal home disruption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Multi-Zone */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Snowflake className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <Snowflake className="w-3.5 h-3.5 text-sky-700" /> MULTI-ZONE (2 TO 8 INDOOR HEADS)
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Whole-Home Room-by-Room Control
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>One Outdoor Unit:</strong> A single compressor powers up to 8 indoor heads across bedrooms and living spaces.
                    </p>
                    <p>
                      <strong>Independent Temperatures:</strong> Keep bedrooms cool at night while unoccupied living areas save power.
                    </p>
                    <p>
                      <strong>Total Replacement:</strong> Eliminates baseboard heaters and noisy window units throughout your house.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your Mini Split Needs Service */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your Mini Split Needs Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Catch condensate clogs or refrigerant leaks early before they cause indoor wall damage or cooling loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Water Dripping from Indoor Head",
                desc: "A clogged drain line or cracked pan causes condensate to back up and overflow down interior walls."
              },
              {
                num: "02",
                title: "Diminished Airflow or Weak Cooling",
                desc: "Airflow issues stem from dirty mesh filters, dusty blower wheels, or low refrigerant charge levels."
              },
              {
                num: "03",
                title: "Error Codes Flashing on Display",
                desc: "Flashing LED timer lights or specific alphanumeric codes point to sensor faults or communication errors."
              },
              {
                num: "04",
                title: "Musty Odor from Air Vents",
                desc: "Moisture on evaporator coils can harbor mildew. Professional deep coil cleaning restores fresh airflow."
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
              Our 6-Step Mini Split Workflow
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

      {/* 8. Comparison Table: Ductless Mini Split vs Central Ducted System */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              Ductless Mini Split vs. Central Ducted System
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing zoned ductless heat pumps with conventional central ducted HVAC setups.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">Ductless Mini Split</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Central Ducted System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Ductwork Requirement</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Zero Ductwork Needed</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Requires Central Attic/Crawl Ducts</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Zoned Temperature Control</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Independent Control Per Room</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Single Whole-Home Thermostat</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Max SEER2 Efficiency</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Up to 30.5 SEER2 Rating</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Typically 15 – 22 SEER2</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Indoor Sound Level</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Ultra-Quiet (~19–23 dBA)</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard Air Grille Noise (~45+ dBA)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">ADU & Addition Fit</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Ideal Gold Standard</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Difficult / Expensive to Extend</td>
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
                Clear answers regarding ductless mini split installation, efficiency, and zoning.
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
