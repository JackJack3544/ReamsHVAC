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
  Shield, ArrowRight, Settings, Calendar, Award
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function MaintenancePlans() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "Robert M.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "Enrolled in ReamsHVAC's annual maintenance plan 3 years ago. During last month's 102°F heatwave, our capacitor failed on a Sunday. They dispatched a technician within 3 hours, replaced the part under our member discount, and had us cool in no time."
    },
    {
      name: "Karen S.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "Bi-annual maintenance visits are thorough and punctual. They flushed our condensate drain lines, tested our furnace heat exchanger safety, and kept digital logs for our Carrier 10-year warranty compliance."
    },
    {
      name: "James L.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "Worth every penny. The 21-point spring tune-up caught a leaking capacitor before it destroyed our outdoor compressor motor. Honest technicians and zero sales pressure."
    }
  ];

  const faqs = [
    {
      q: "What is included in a professional HVAC maintenance inspection?",
      a: "A comprehensive maintenance visit includes a 21-point system inspection: testing electrical capacitors and contactors, measuring refrigerant subcooling/superheat, flushing condensate drain lines, inspecting furnace heat exchangers for cracks, testing safety limit switches, and cleaning coils."
    },
    {
      q: "Does skipping annual maintenance void my HVAC manufacturer warranty?",
      a: "Yes. Major HVAC manufacturers—including Carrier, Trane, Lennox, Rheem, and Mitsubishi—explicitly state that annual professional maintenance is required to maintain valid warranty coverage."
    },
    {
      q: "How often should my heating and cooling system be serviced?",
      a: "Your HVAC system should be professionally serviced twice per year: once in spring (for cooling mode) and once in autumn (for furnace or heat pump heating mode)."
    },
    {
      q: "How much does an HVAC maintenance plan cost?",
      a: "ReamsHVAC residential maintenance agreements range from $99 to $250 annually depending on coverage inclusions and system count. Single one-off tune-up visits without a plan range from $130 to $250 per system."
    },
    {
      q: "What priority benefits do ReamsHVAC maintenance plan members receive?",
      a: "Plan members receive guaranteed priority dispatch scheduling within 24 hours during peak summer heatwaves, a 15% discount on all repair parts and labor, zero overtime call-out surcharges, and digital maintenance log tracking."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Electrical Circuit & Capacitor Testing",
      mobileDescription: "Test capacitance, contactor wear, and operating voltage drops.",
      description: "We measure microfarad capacitance on compressor and fan motor capacitors, check contactor pitting, and test wiring voltage drops."
    },
    {
      step: 2,
      title: "Refrigerant Pressure & Superheat Audit",
      mobileDescription: "Verify subcooling and superheat to catch micro-leaks early.",
      description: "We connect digital manifold gauges to verify subcooling and superheat levels, catching minor micro-leaks before compressor damage occurs."
    },
    {
      step: 3,
      title: "Outdoor Condenser Coil Hydro-Clean",
      mobileDescription: "Wash dirt and debris from aluminum fins to restore heat transfer.",
      description: "We clear dirt, pollen, and leaves from outdoor aluminum fins using eco-friendly coil cleaner, restoring heat transfer efficiency."
    },
    {
      step: 4,
      title: "Condensate Line Flush & Pan Sanitize",
      mobileDescription: "Flush drain lines, test float switches, and insert algaecide tablets.",
      description: "We flush condensate drain lines with nitrogen, test overflow safety switches, and insert algaecide tablets to prevent water leaks."
    },
    {
      step: 5,
      title: "Heat Exchanger & CO Safety Test",
      mobileDescription: "Scope heat exchanger for cracks and test carbon monoxide levels.",
      description: "We perform camera scope heat exchanger checks, measure gas manifold pressure, and conduct carbon monoxide flue safety testing."
    },
    {
      step: 6,
      title: "Digital Maintenance Log & Warranty Report",
      mobileDescription: "Record electrical specs in digital log to maintain warranty coverage.",
      description: "We record all electrical ratings and operational metrics in your digital customer account, preserving factory warranty validation."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/maintenance-plans#service",
        "name": "HVAC Preventive Maintenance Plans",
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
        "description": "Comprehensive bi-annual HVAC maintenance agreements, 21-point tune-ups, priority emergency dispatch, and 15% repair discounts across San Jose."
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
            "name": "Maintenance Plans",
            "item": "https://reamshvac.com/services/maintenance-plans"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="HVAC Maintenance Plans & Seasonal Tune-Ups in San Jose | ReamsHVAC"
        description="Bi-annual heating & cooling tune-ups, priority emergency service & 15% repair discounts across San Jose & Bay Area. Keep your system running smoothly. Call (408) 320-3288."
        canonical="/services/maintenance-plans"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Maintenance Plans" },
        ]}
        eyebrow="Preventive Protection & Warranty Safety"
        title="HVAC Maintenance Plans in San Jose"
        description="Prevent up to 85% of unexpected summer and winter breakdowns, preserve factory warranties, lower PG&E electricity bills, and enjoy guaranteed 24-hour priority dispatch."
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "/contact",
          icon: <Calendar className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "(408) 320-3288",
          href: "tel:4083203288",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      {/* 2. Why Routine Preventive HVAC Maintenance Matters */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Why Routine Preventive Maintenance Matters
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Your home heating and air conditioning runs over 2,000 hours every year in California. Over time, electrical contactors pit, capacitors weaken, condensate lines fill with algae, and outdoor coils accumulate dust.
              </p>
              <p>
                A neglected system loses 5% to 10% efficiency annually, driving up monthly PG&E bills while accelerating compressor wear. Major manufacturers also require documented annual maintenance to validate 10-year parts warranties.
              </p>
              <p>
                ReamsHVAC plans deliver bi-annual 21-point tune-ups, guaranteed priority emergency scheduling during heatwaves, and a 15% discount on all repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Maintenance Plan Tiers: Which Fits Your Home */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Maintenance Plan Features: What You Get
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Scheduled bi-annual mechanical inspections, discounted diagnostic rates, and priority emergency response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Spring AC Tune-Up */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Snowflake className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Snowflake className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Spring Cooling Tune-Up</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Pre-summer cooling check inspecting subcooling pressure, washing condenser coils, and flushing drains.
                </p>
              </div>
            </div>

            {/* Autumn Heating Inspection */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Flame className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Flame className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Autumn Heating Check</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Pre-winter heating audit inspecting heat exchangers for cracks, testing igniters, and measuring carbon monoxide.
                </p>
              </div>
            </div>

            {/* Guaranteed Priority Dispatch */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Clock className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Clock className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">24-Hour Priority Dispatch</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Skip the wait during summer peaks. Members receive front-of-line dispatch scheduling within 24 hours.
                </p>
              </div>
            </div>

            {/* 15% Member Repair Discount */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <DollarSign className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <DollarSign className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">15% Off Parts & Labor</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Permanent 15% discount on all out-of-warranty repairs, replacement capacitors, motors, and smart controls.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            We track all service history in digital records to ensure documented compliance with factory manufacturer warranties.
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
                rely on HVAC systems during summer peaks and winter cold spells.
              </p>
              <p>
                Our local technicians understand the demands placed on South Bay heating and cooling systems. Routine maintenance prevents premature compressor failures, preserves seasonal efficiency, and keeps your home comfortable year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bi-Annual Maintenance Plan vs Reactive Emergency Repairs */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                Preventive Plan vs. Reactive Breakdown Repair
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Comparing proactive bi-annual maintenance protection with waiting for unexpected summer equipment failures.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Preventive Plan */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <ShieldCheck className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-700" /> BI-ANNUAL MEMBER PLAN
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Proactive Care & Priority Protection
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Prevent Major Failures:</strong> Detects weak capacitors and refrigerant micro-leaks before expensive motor damage occurs.
                    </p>
                    <p>
                      <strong>Guaranteed Priority Scheduling:</strong> Front-of-line dispatch during 100°F summer heatwaves when non-members wait days.
                    </p>
                    <p>
                      <strong>Warranty Preservation:</strong> Meets strict manufacturer requirements to preserve 10-year equipment warranties.
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
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700" /> REACTIVE BREAKDOWN REPAIR
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Higher Emergency Costs & Disruption
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Unexpected Summer Breakdown:</strong> Systems fail on the hottest days when operating under peak thermal load.
                    </p>
                    <p>
                      <strong>Higher Emergency Callout Rates:</strong> Pays full price for emergency diagnostic visits and parts.
                    </p>
                    <p>
                      <strong>Warranty Void Risk:</strong> Unserviced systems risk denied warranty claims from manufacturers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your HVAC Needs Maintenance Immediately */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your System Needs Maintenance
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Catch electrical component wear, dirt buildup, or drain clogs before they cause complete cooling failure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Rising PG&E Utility Bills",
                desc: "Unexplained utility surges indicate dirty condenser coils, clogged air filters, or failing electrical capacitors."
              },
              {
                num: "02",
                title: "Longer Running Cycles to Reach Setpoint",
                desc: "A system running non-stop without satisfying thermostat setpoints points to low refrigerant levels or airflow restriction."
              },
              {
                num: "03",
                title: "Musty Odors from Supply Registers",
                desc: "Stale odors indicate mold growth on wet indoor cooling coils or stagnant water pooling inside condensate pans."
              },
              {
                num: "04",
                title: "Unusual Clicking or Buzzing Sounds",
                desc: "Clicking noises during startup signal failing compressor contactors or weak dual-run capacitors about to blow."
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
              Our 6-Step Maintenance Workflow
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

      {/* 8. Comparison Table: Plan Member vs Non-Member Service */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              ReamsHVAC Plan Member vs. Non-Member
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing member plan benefits with standard non-member service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Perk</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">ReamsHVAC Member Plan</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Standard Non-Member Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Annual System Tune-Ups</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">2 Included Visits (Spring + Autumn)</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Pay Full Price Per Visit</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Emergency Callout Dispatch</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Guaranteed 24-Hour Priority Line</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard First-Come Queue</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Repair Parts & Labor Discount</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">15% Member Discount</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard Repair Rates</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Overtime Emergency Fees</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Zero Overtime Surcharges</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard After-Hours Surcharges</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Warranty Compliance Tracking</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Digital Logged Verification</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Self-Managed Records</td>
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
                Clear answers regarding maintenance plans, warranty protection, and priority service.
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
