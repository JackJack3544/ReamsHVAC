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
  Shield, ArrowRight, Settings, Briefcase
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function CommercialHVAC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "David K.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "ReamsHVAC handles the quarterly HVAC maintenance for our 45,000 sq ft office facility in North San Jose. When an economizer damper stuck open during a hot July afternoon, their commercial crew responded within 2 hours."
    },
    {
      name: "Marcus V.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "Replacing two 10-ton Carrier rooftop units on our retail building required Sunday crane hoisting to avoid customer disruption. ReamsHVAC executed the crane pull smoothly, satisfied City of Santa Clara permits, and had us running before Monday morning."
    },
    {
      name: "Sandra H.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "Outstanding commercial contractor. They retrofitted our tech office with multi-zone VRF climate controls, lowering our peak electrical demand while giving tenants customized room thermostat settings."
    }
  ];

  const faqs = [
    {
      q: "How often should commercial HVAC systems be serviced in California?",
      a: "Commercial heating and cooling systems should be professionally serviced quarterly (4 times per year). Regular commercial maintenance includes belt tensioning, economizer damper testing, filter replacements, condenser coil washing, electrical contactor inspection, and condensate drain line flushing."
    },
    {
      q: "What is the typical lifespan of a commercial packaged rooftop unit (RTU)?",
      a: "A commercial packaged rooftop unit (RTU) typically has an operational lifespan of 15 to 20 years with consistent quarterly preventive maintenance. Intense solar heat or chemical exposure can accelerate wear."
    },
    {
      q: "What is VRF (Variable Refrigerant Flow), and is it right for my commercial building?",
      a: "VRF commercial HVAC systems utilize inverter compressors to circulate variable refrigerant amounts to individual fan coil units across different office zones. VRF allows simultaneous heating and cooling in different building rooms, making it highly energy-efficient for multi-tenant commercial offices."
    },
    {
      q: "How do commercial HVAC maintenance contracts work?",
      a: "ReamsHVAC customizes commercial maintenance agreements tailored to your facility's square footage, tonnage, and operating hours. Plans include scheduled quarterly tune-ups, priority emergency dispatch within 2 to 4 hours, and digital inspection logs."
    },
    {
      q: "How does commercial HVAC equipment replacement pricing work?",
      a: "Commercial replacement costs depend on cooling tonnage (typically 3 to 25+ tons per RTU), crane hoisting requirements, roof curb adapter modifications, gas line connections, and Title 24 economizer compliance. We provide full itemized proposals before work begins."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Commercial Load & Structural Roof Audit",
      mobileDescription: "Assess facility cooling tons, CFM, and roof curb dimensions.",
      description: "We evaluate facility cooling tonnage, airflow CFM demands, electrical panel headroom, and structural roof curb dimensions."
    },
    {
      step: 2,
      title: "Crane Permitting & Logistics Planning",
      mobileDescription: "Coordinate permits, traffic safety, and crane hoisting schedules.",
      description: "We coordinate City building permits, street closure traffic safety plans, and rigging logistics for scheduled weekend crane lifting."
    },
    {
      step: 3,
      title: "Curb Adapter & Rigging Installation",
      mobileDescription: "Install insulated roof curbs and hoist commercial RTU into place.",
      description: "We set insulated metal roof curb adapters, secure vibration isolators, and hoist high-efficiency commercial RTU equipment into place."
    },
    {
      step: 4,
      title: "3-Phase Electrical & Title 24 Economizer Wiring",
      mobileDescription: "Wire 3-phase power circuits, economizers, and building automation.",
      description: "We connect 208V/480V 3-phase power circuits, wire fault-detection economizers, and integrate commercial building automation systems."
    },
    {
      step: 5,
      title: "Nitrogen Purging & Refrigerant Staging",
      mobileDescription: "Pressure test, pull deep vacuum, and calibrate compressor charges.",
      description: "We leak-test copper line sets with dry nitrogen, pull deep vacuums below 500 microns, and calibrate multi-stage compressor charges."
    },
    {
      step: 6,
      title: "Commissioning & Property Manager Walkthrough",
      mobileDescription: "Balance airflow dampers, test economizers, and review records.",
      description: "We balance airflow dampers, verify 3-phase phase rotation, test economizer fresh-air sweeps, and issue digital maintenance records."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/commercial-hvac#service",
        "name": "Commercial HVAC Services",
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
        "description": "Commercial HVAC rooftop unit (RTU) replacement, VRF multi-zone system installation, and quarterly maintenance contracts across San Jose."
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
            "name": "Commercial HVAC",
            "item": "https://reamshvac.com/services/commercial-hvac"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Commercial HVAC Services in San Jose & Bay Area | ReamsHVAC"
        description="Commercial rooftop units (RTU), VRF systems, quarterly maintenance & emergency commercial HVAC repair in San Jose & Silicon Valley. Call 1-800-555-0199."
        canonical="/services/commercial-hvac"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Commercial HVAC" },
        ]}
        eyebrow="Facility Climate Solutions"
        title="Commercial HVAC Services in San Jose"
        description="Reliable rooftop unit (RTU) installations, VRF multi-zone climate systems, and quarterly maintenance contracts engineered to eliminate commercial facility downtime."
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

      {/* 2. Why Commercial HVAC Reliability Matters */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Why Commercial HVAC Reliability Matters
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Downtime costs money in commercial properties. An HVAC failure in a tech office, medical center, or retail facility leads to uncomfortable employees, lost productivity, and unhappy tenants.
              </p>
              <p>
                Commercial rooftop units (RTUs) and VRF systems operate under continuous duty cycles, managing server heat loads and Title 24 fresh-air economizer ventilation standards.
              </p>
              <p>
                ReamsHVAC provides complete mechanical services—including emergency crane RTU replacements, economizer calibrations, 3-phase compressor repairs, and preventive maintenance contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Commercial HVAC Solutions Offered */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Commercial HVAC Systems: Options for South Bay Buildings
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We engineer, service, and replace all major commercial heating and cooling configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Packaged Rooftop Units (RTUs) */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Building2 className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Building2 className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Packaged Rooftop Units</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  All-in-one gas/electric or heat pump rooftop units (3 to 25+ tons) with integrated economizers for offices and retail.
                </p>
              </div>
            </div>

            {/* Variable Refrigerant Flow (VRF) */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Zap className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Zap className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">VRF Multi-Zone Systems</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Inverter multi-zone VRF systems allowing simultaneous heating and cooling across different tenant suites.
                </p>
              </div>
            </div>

            {/* Commercial Split Systems */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Layers className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Layers className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Commercial Split Systems</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  High-capacity indoor air handlers paired with ground condensing units for strip malls and commercial flex spaces.
                </p>
              </div>
            </div>

            {/* Quarterly Maintenance Plans */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <ShieldCheck className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <ShieldCheck className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Quarterly Preventive Plans</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Scheduled inspections with belt changes, economizer tests, and compliance records for facility managers.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            We carry $2M commercial general liability insurance and dedicated workers' compensation to satisfy property manager compliance requirements.
          </div>
        </div>
      </section>

      {/* 4. Tailored for South Bay Commercial Facilities */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tailored for South Bay Commercial Facilities
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Property managers and commercial building owners across{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">San Jose</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Santa Clara</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Sunnyvale</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Cupertino</Link>, and{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Saratoga</Link>{" "}
                require reliable, fast-response commercial mechanical partners.
              </p>
              <p>
                Whether managing a tech campus or a retail center, our technicians schedule crane hoisting, Title 24 economizer testing, and heavy maintenance around your business hours to guarantee minimal disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quarterly Commercial Maintenance vs Reactive Facility Repairs */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                Quarterly Maintenance vs. Reactive Facility Breakdown
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Comparing scheduled quarterly mechanical inspections with unexpected commercial building downtime.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Quarterly Plan */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <ShieldCheck className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-700" /> QUARTERLY CONTRACT
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Zero Tenant Disruption & Peak Efficiency
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Prevent Costly Downtime:</strong> Catches worn blower belts, failing contactors, and economizer faults before tenants are affected.
                    </p>
                    <p>
                      <strong>Title 24 Economizer Compliance:</strong> Verifies outdoor air dampers operate properly, lowering cooling costs.
                    </p>
                    <p>
                      <strong>Priority Emergency Response:</strong> Guaranteed 2-to-4 hour priority dispatch for contract facilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reactive Repair */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <AlertTriangle className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-amber-200/60">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700" /> REACTIVE BREAKDOWN
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Tenant Complaints & Unexpected Expense
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Office Heatwave Shutdowns:</strong> Unserviced units fail during 100°F heatwaves, halting office operations.
                    </p>
                    <p>
                      <strong>Higher Emergency Rates:</strong> Emergency crane lifts and after-hours labor significantly increase costs.
                    </p>
                    <p>
                      <strong>Property Manager Liability:</strong> Water leaks from clogged condensate lines cause interior ceiling damage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your Commercial HVAC Needs Immediate Service */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your Commercial HVAC Needs Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Catch 3-phase electrical issues, economizer damper faults, or belt wear early before they cause building outages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Uneven Zone Temperatures & Hot Spots",
                desc: "Specific office suites overheating while others freeze indicates failing VAV boxes, stuck dampers, or VRF communication faults."
              },
              {
                num: "02",
                title: "Stuck Economizer Outside Air Dampers",
                desc: "A stuck economizer damper draws in 100°F outdoor air during heatwaves, overwhelming rooftop compressor capacity."
              },
              {
                num: "03",
                title: "High-Pitched Squealing from Rooftop RTUs",
                desc: "Squealing noises indicate slipping fan belts and worn blower motor bearings about to fail."
              },
              {
                num: "04",
                title: "Water Stains on Office Ceiling Tiles",
                desc: "Water drips signal clogged rooftop condensate lines, overflowing drain pans, or cracked drainage traps."
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
              Our 6-Step Commercial RTU Workflow
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

      {/* 8. Comparison Table: Packaged RTU vs VRF Multi-Zone */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              Packaged Rooftop Units (RTU) vs. VRF Multi-Zone
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing commercial all-in-one rooftop units with inverter-driven VRF climate systems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">Packaged Rooftop Unit (RTU)</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Variable Refrigerant Flow (VRF)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Ideal Building Type</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Single-Story Retail, Warehouses, Flex</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Multi-Story Office, Tech Parks, Medical</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Zoning Capabilities</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Single Large Open Duct Zone</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Independent Room-by-Room Control</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Simultaneous Heating & Cooling</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">No (Global Mode Switch)</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Yes (Heat Recovery Models)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Energy Efficiency Rating</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Standard IEER 14 – 18+</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Ultra-High IEER 22 – 28+ Inverter</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Fresh Air Ventilation (Title 24)</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Integrated Roof Economizer Damper</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Dedicated Outdoor Air System (DOAS)</td>
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
                Clear answers regarding commercial RTU servicing, VRF systems, and maintenance contracts.
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
