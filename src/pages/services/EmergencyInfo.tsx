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
  Shield, ArrowRight, Settings, Siren, ShieldAlert
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function EmergencyInfo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "Mark T.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "Our AC failed on a Saturday during a 104°F heatwave with our elderly parents staying with us. ReamsHVAC dispatched a technician within 2 hours. He diagnosed a blown capacitor, replaced it from his truck stock, and gave us a flat-rate price upfront."
    },
    {
      name: "Elena R.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "We smelled electrical burning from our furnace at 9:00 PM on a cold December evening. The emergency technician arrived quickly, found a failed blower motor relay, and safely shut down the circuit until a replacement was installed the next morning."
    },
    {
      name: "David S.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "Honest, reliable emergency service. No hidden fees or high-pressure tactics. They fixed our condensate drain line flood before it ruined our hallway ceiling."
    }
  ];

  const faqs = [
    {
      q: "What qualifies as a genuine 24/7 HVAC emergency?",
      a: "A genuine HVAC emergency includes: complete loss of heating during winter weather when vulnerable individuals are present; complete loss of cooling during extreme heatwaves; a smell of natural gas or electrical burning smoke; or active condensate water flooding that threatens ceilings."
    },
    {
      q: "What exact steps should I take if I smell natural gas near my furnace?",
      a: "If you smell natural gas (rotten-egg odor): 1) Do NOT flip light switches or ignite matches. 2) Immediately evacuate all occupants and pets outside. 3) Call PG&E's 24/7 emergency line (1-800-743-5000) or 911. 4) Contact ReamsHVAC only after gas personnel declare the area safe."
    },
    {
      q: "Is there an additional charge for after-hours emergency service?",
      a: "Emergency dispatches performed outside standard business hours carry an after-hours dispatch fee. However, our technician evaluates your system and provides a clear, flat-rate written quote for approval before performing any work."
    },
    {
      q: "How fast can an emergency technician arrive at my home?",
      a: "Our emergency trucks are staged across San Jose, Santa Clara, and Sunnyvale. For true life-safety emergencies, our typical dispatch response window is 1 to 3 hours."
    },
    {
      q: "What non-emergency issues can wait for a daytime appointment?",
      a: "Issues that can wait for standard business hours include slightly reduced airflow from one vent, minor squeaks, thermostat battery swaps, or seasonal tune-ups, saving you after-hours dispatch premiums."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Immediate 24/7 Phone Triage",
      mobileDescription: "Evaluate safety hazards and guide emergency gas or power shutoffs.",
      description: "Our emergency dispatcher evaluates safety hazards, advises on emergency gas or electrical shutoffs, and routes your call."
    },
    {
      step: 2,
      title: "Rapid Dispatch & Vehicle Tracking",
      mobileDescription: "Dispatch fully stocked truck with capacitors, contactors, and switches.",
      description: "We dispatch a fully equipped service truck stocked with universal capacitors, contactors, igniters, and safety limit switches."
    },
    {
      step: 3,
      title: "Comprehensive Safety Diagnostics",
      mobileDescription: "Isolate high-voltage circuits, check gas pressures, and test components.",
      description: "Our licensed technician isolates high-voltage electrical circuits, checks gas pressures, and inspects heat exchangers."
    },
    {
      step: 4,
      title: "Upfront Flat-Rate Price Approval",
      mobileDescription: "Explain root cause and provide clear flat-rate quote before repairs.",
      description: "We explain the root cause and provide an itemized, flat-rate quote before turning a single wrench—no hidden fees."
    },
    {
      step: 5,
      title: "Precision Truck-Stock Component Repair",
      mobileDescription: "Replace failed components with OEM parts to restore heating/cooling.",
      description: "We replace failed components using OEM or high-grade universal parts, restoring safe heating or cooling immediately."
    },
    {
      step: 6,
      title: "Safety Testing & System Commissioning",
      mobileDescription: "Test safety limits, verify thermostat cycle, and deliver digital report.",
      description: "We test safety limit switches, verify thermostat cycles, measure carbon monoxide flue gas safety, and provide a digital report."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/emergency-info#service",
        "name": "24/7 Emergency HVAC Repair",
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
        "description": "24/7 emergency HVAC repair for heating outages, heatwave AC failures, electrical burning odors, and condensate water leaks across San Jose."
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
            "name": "Emergency Service",
            "item": "https://reamshvac.com/services/emergency-info"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="24/7 Emergency HVAC Repair in San Jose | ReamsHVAC"
        description="Rapid 24/7 emergency heating and AC repair across San Jose, Santa Clara & Sunnyvale. Live dispatch, same-day repairs & upfront flat-rate pricing. Call 1-800-555-0199."
        canonical="/services/emergency-info"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "24/7 Emergency Service" },
        ]}
        eyebrow="24/7 Emergency Response Hotline"
        title="24/7 Emergency HVAC Repair in San Jose"
        description="Fast emergency dispatch for sudden heatwave AC outages, winter heating failures, electrical burning smells, or active condensate leaks—with honest upfront flat-rate pricing."
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

      {/* 2. Why 24/7 Emergency Response Matters */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Why 24/7 Emergency HVAC Response Matters
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg">
              <p>
                An HVAC failure during extreme temperature swings isn't just uncomfortable—it presents genuine health hazards, especially for infants, seniors, or family members with medical conditions.
              </p>
              <p>
                When temperatures exceed 95°F during South Bay summer heatwaves or plunge into freezing range during winter nights, indoor temperatures deteriorate rapidly. Electrical burning odors or active water leaks require immediate professional containment.
              </p>
              <p>
                ReamsHVAC emergency service trucks are fully stocked with universal replacement capacitors, contactors, igniters, flame sensors, and control boards, allowing us to resolve most emergency outages on the very first visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Emergency HVAC Situations Handled */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Emergency HVAC Situations Handled Across San Jose
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We dispatch licensed technicians 24 hours a day, 365 days a year across San Jose and the South Bay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Summer Heatwave AC Outage */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Sun className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Sun className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Summer Heatwave AC Failure</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Fast emergency dispatch for failed capacitors, locked compressors, or blown contactors during extreme 95°F+ heatwaves.
                </p>
              </div>
            </div>

            {/* Winter Heating Loss */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Flame className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Flame className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Winter Heating Outage</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Rapid restoration for cracked igniters, dirty flame sensors, or pressure switch lockout errors during freezing winter nights.
                </p>
              </div>
            </div>

            {/* Electrical Burning Smell */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Zap className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Zap className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Electrical Smoke & Odors</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Immediate electrical isolation for burning wire smells, shorted control transformers, or melted fan motor relays.
                </p>
              </div>
            </div>

            {/* Condensate Flood Containment */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <ShieldAlert className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <ShieldAlert className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Condensate Water Flooding</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Clearing clogged primary drain lines and replacing failed float safety switches before water damages ceiling drywall.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            Notice a gas rotten-egg odor? Evacuate immediately and call PG&E (1-800-743-5000) or 911 before contacting HVAC service.
          </div>
        </div>
      </section>

      {/* 4. Tailored for South Bay & San Jose Homeowners */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tailored for South Bay & San Jose Homeowners
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-4 text-base sm:text-lg">
              <p>
                Our emergency response service trucks are strategically positioned throughout{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">San Jose</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Santa Clara</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Sunnyvale</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Cupertino</Link>, and{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Saratoga</Link>.
              </p>
              <p>
                When a sudden heatwave or winter cold snap strikes, our local dispatch team prioritizes life-safety emergencies, ensuring fast response times without taking advantage of urgent situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Genuine 24/7 HVAC Emergency vs Non-Emergency Next-Day Service */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-3">
                Genuine Emergency vs. Next-Day Scheduled Visit
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-3xl">
                Helping you decide whether immediate 24/7 dispatch is necessary or if standard business hours save you money.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* True Emergency */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <AlertTriangle className="w-36 h-36" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-4 border border-amber-200/60">
                    <AlertTriangle className="w-4 h-4 text-amber-700" /> GENUINE 24/7 EMERGENCY
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950 mb-3">
                    Immediate Safety or Severe Comfort Risk
                  </h3>
                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      <strong>Extreme Temperature Exposure:</strong> Complete loss of AC in 95°F+ heat or loss of heat in freezing weather for infants/seniors.
                    </p>
                    <p>
                      <strong>Electrical Smoke or Burning Odors:</strong> Sparks, active electrical smoke, or continuous circuit breaker tripping.
                    </p>
                    <p>
                      <strong>Active Condensate Leaks:</strong> Water flooding from ceiling registers threatening drywalls or flooring.
                    </p>
                  </div>
                </div>
              </div>

              {/* Next-Day Service */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Clock className="w-36 h-36" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-4 border border-sky-200/60">
                    <Clock className="w-4 h-4 text-sky-700" /> NEXT-DAY SCHEDULED VISIT
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950 mb-3">
                    Non-Urgent Maintenance & Minor Issues
                  </h3>
                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      <strong>Mild Outdoor Temperatures:</strong> HVAC failure during mild 70°F weather where indoor comfort remains stable.
                    </p>
                    <p>
                      <strong>Minor Noises or Reduced Airflow:</strong> Slight vent whistling, minor squeaks, or routine filter replacement requests.
                    </p>
                    <p>
                      <strong>Thermostat Battery Warnings:</strong> Low battery alerts on thermostat screens during standard business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs You Need Emergency HVAC Service */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs You Need Emergency Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Recognize hazardous symptoms before they result in electrical property damage or carbon monoxide exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Acrid Burning Plastic or Metallic Smell",
                desc: "Burning odors indicate overheating blower motor windings, shorted contactor relays, or melting wire insulation."
              },
              {
                num: "02",
                title: "Rapidly Tripping Main HVAC Breakers",
                desc: "A circuit breaker that trips instantly upon startup signals a grounded compressor winding or dead short circuit."
              },
              {
                num: "03",
                title: "Water Overflowing from Ceiling Vents",
                desc: "Dripping water indicates a blocked primary condensate drain line flooding the secondary emergency overflow pan."
              },
              {
                num: "04",
                title: "Furnace Igniting with Loud Pop or Bang",
                desc: "Loud popping sounds during furnace ignition indicate delayed gas ignition, posing a severe heat exchanger damage risk."
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
              Our 6-Step Emergency Response Workflow
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

      {/* 8. Comparison Table: ReamsHVAC Emergency Response vs Standard Service */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              ReamsHVAC 24/7 Emergency vs. Standard Service
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing 24/7 emergency hotline dispatch with standard scheduled service appointments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">24/7 Emergency Dispatch</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Standard Scheduled Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Dispatch Availability</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">24 Hours / 7 Days / 365 Days</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Monday – Friday Business Hours</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Typical Arrival Window</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">1 to 3 Hours Guaranteed Response</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Scheduled 2 to 4 Hour Arrival Window</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Truck Stock Parts Availability</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Fully Stocked Universal OEM Parts</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard Field Replacement Parts</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Upfront Flat-Rate Pricing</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Written Quote Before Work Starts</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Written Quote Before Work Starts</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Safety Containment Protocol</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Immediate High-Voltage & Gas Triage</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Standard Diagnostic Check</td>
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
                Clear answers regarding 24/7 emergency dispatch, gas safety, and flat-rate pricing.
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
