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
  Shield, ArrowRight, Settings, Wifi
} from "lucide-react";
import { CTABand } from "../../components/CTABand";
import { TrustBar } from "../../components/TrustBar";
import { PageHero } from "../../components/PageHero";
import { ReviewsSection } from "../../components/ReviewsSection";
import { SEO } from "../../components/SEO";

export function SmartThermostats() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "Brian P.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "Attempted a DIY Nest installation and blew the 3A fuse on my furnace control board because my older home lacked a C-wire. ReamsHVAC arrived the same afternoon, installed a C-wire adapter, replaced the fuse, and properly programmed our heat pump reversing valve."
    },
    {
      name: "Christina M.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "We upgraded to an Ecobee Smart Premium with remote room sensors for our two-story home. Upstairs bedrooms stay comfortable now, and we set up PG&E Time-of-Use pre-cooling to save money during 4-9 PM peak hours."
    },
    {
      name: "Kevin D.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "Fast, knowledgeable service. The technician tested all multi-stage heating and cooling cycles from his phone before leaving and walked us through the app interface."
    }
  ];

  const faqs = [
    {
      q: "Will a smart thermostat work properly with my heat pump system?",
      a: "Most smart thermostats support heat pumps, but correct configuration during setup is critical. If a smart thermostat is incorrectly wired or programmed, it can trigger expensive backup electric resistance heat strips unnecessarily during mild weather."
    },
    {
      q: "What is a C-wire (Common Wire), and why does my home need one?",
      a: "A C-wire delivers continuous 24V AC electrical power from your furnace or air handler control board directly to the thermostat. Older Bay Area homes built before 1995 often lack a C-wire. We install dedicated C-wire adapters or pull new thermostat wire if needed."
    },
    {
      q: "How can a smart thermostat save money on PG&E Time-of-Use rates?",
      a: "Under PG&E's Time-of-Use electric rate plans, electricity prices jump significantly during peak evening hours (4:00 PM to 9:00 PM). A smart thermostat can pre-cool or pre-heat your home during off-peak morning hours and automatically setback temperatures during expensive peak hours."
    },
    {
      q: "Which smart thermostat brand is best: Nest, Ecobee, or Honeywell?",
      a: "Ecobee thermostats excel at multi-room temperature balancing using remote wireless room sensors. Google Nest Learning Thermostats feature automated schedule learning based on geofencing. Honeywell Home T9/T10 units offer unmatched 24V reliability for complex multi-stage systems."
    },
    {
      q: "How much does professional smart thermostat installation cost?",
      a: "Professional smart thermostat installation by ReamsHVAC typically costs between $250 and $600 per thermostat, which includes the smart thermostat device, 24V circuit compatibility check, C-wire adapter installation if required, mobile app Wi-Fi pairing, and full system testing."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "24V Control Circuit & C-Wire Audit",
      mobileDescription: "Inspect existing wiring to verify transformer power and C-wire continuity.",
      description: "We inspect existing thermostat wiring at the wall and control board to verify 24V transformer capacity and C-wire power continuity."
    },
    {
      step: 2,
      title: "Power Extender Kit or Wire Pull",
      mobileDescription: "Install a C-wire power adapter module or pull new thermostat wiring.",
      description: "If a Common (C) wire is missing, we install a dedicated C-wire power adapter module inside the air handler cabinet or pull new 18/8 thermostat wiring."
    },
    {
      step: 3,
      title: "Precision Backplate Mounting",
      mobileDescription: "Level and securely mount base plate and seal wall wire penetrations.",
      description: "We disconnect high-voltage safety circuits, level and securely mount the smart thermostat base plate, and seal wall dry-penetration holes."
    },
    {
      step: 4,
      title: "Terminal Wiring & Heat Pump Staging",
      mobileDescription: "Wire terminals matching multi-stage compressor and auxiliary heating logic.",
      description: "We wire R, C, Y, G, W, and O/B reversing valve terminals, matching exact multi-stage compressor and auxiliary heating logic."
    },
    {
      step: 5,
      title: "Wi-Fi Pairing & App Geofencing Setup",
      mobileDescription: "Connect Wi-Fi, configure app geofencing, and set up PG&E rate schedules.",
      description: "We connect the thermostat to your home Wi-Fi network, configure mobile app geofencing, and set up PG&E Time-of-Use schedule setbacks."
    },
    {
      step: 6,
      title: "Remote Sensor Calibration & Test",
      mobileDescription: "Pair wireless room sensors, test heating and cooling cycles, and review care.",
      description: "We place wireless room sensors in upstairs bedrooms, test heating and cooling relay engagements, and guide you through app controls."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/smart-thermostats#service",
        "name": "Smart Thermostat Installation and Setup",
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
        "description": "Professional smart thermostat installation, C-wire adapter setup, and PG&E Time-of-Use rate optimization across San Jose and the South Bay."
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
            "name": "Smart Thermostats",
            "item": "https://reamshvac.com/services/smart-thermostats"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Smart Thermostat Installation in San Jose | ReamsHVAC"
        description="Professional Nest, ecobee & smart thermostat installation in San Jose & Bay Area. C-wire wiring, heat pump integration & energy savings. Call (408) 320-3288."
        canonical="/services/smart-thermostats"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Smart Thermostats" },
        ]}
        eyebrow="Energy Control & Automation"
        title="Smart Thermostat Installation in San Jose"
        description="Maximize comfort and lower PG&E electricity bills with professionally installed Nest, Ecobee, and Honeywell smart thermostats configured for heat pump staging and Time-of-Use rates."
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

      {/* 2. Why Professional Smart Thermostat Setup Matters */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Why Professional Thermostat Setup Matters
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Upgrading to a Wi-Fi smart thermostat is one of the fastest ways to automate energy savings. Modern controls enable remote app adjustments, room sensor temperature balancing, and away-from-home setbacks.
              </p>
              <p>
                However, DIY installation issues are frequent in Bay Area homes built before 1995. Many older wiring harnesses lack a 24V C-wire (Common wire), which can cause power-stealing thermostats to short-cycle equipment or drop offline.
              </p>
              <p>
                Incorrect terminal wiring on heat pumps can also trigger costly auxiliary electric strips during mild weather. ReamsHVAC verifies proper 24V current, C-wire adapter installation, and multi-stage heat pump control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Smart Thermostat Platforms: Which Fits Your Home */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Smart Thermostat Options: Which Fits Your Home?
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We install and calibrate all top smart thermostat brands for seamless 24V HVAC control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Ecobee Smart Premium */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Wifi className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Wifi className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Ecobee Smart Premium</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Includes wireless SmartSensors for upstairs temperature averaging, air quality monitoring, and Apple HomeKit support.
                </p>
              </div>
            </div>

            {/* Google Nest Learning */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Sparkles className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Google Nest Learning</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Polished metal design with auto-schedule learning based on your habits and phone-based geofencing.
                </p>
              </div>
            </div>

            {/* Honeywell Home T9 / T10 */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Zap className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Zap className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Honeywell Home T9/T10</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Industrial-grade 24V control reliability with room sensors, humidity sensing, and dual-fuel staging.
                </p>
              </div>
            </div>

            {/* Commercial Multi-Stage */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Building2 className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Building2 className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Commercial Multi-Stage</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Heavy-duty programmable thermostats for multi-stage rooftop units, lockable keypads, and 7-day schedules.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            We verify 24V transformer voltage and C-wire adapters on every installation to protect your control circuit board.
          </div>
        </div>
      </section>

      {/* 4. Tailored for South Bay & PG&E Time-of-Use Rates */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tailored for South Bay & PG&E Time-of-Use Rates
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
                face PG&E Time-of-Use electricity pricing.
              </p>
              <p>
                Under TOU plans, rates peak sharply from 4:00 PM to 9:00 PM. Our technicians program smart thermostat schedules to pre-cool during off-peak morning hours and automatically setback temperatures during peak windows, reducing your summer bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIY Installation Risks vs Certified Technician Installation */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                DIY Risks vs. Professional Installation
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Avoid shorted control boards, blown fuses, and misconfigured heat pump reversing valves.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* DIY Risks */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Sun className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-amber-200/60">
                    <Sun className="w-3.5 h-3.5 text-amber-700" /> DIY INSTALLATION RISKS
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Blown Fuses & Unnecessary Resistance Heat
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Shorted Control Board:</strong> Accidental contact between 24V R and C wires can blow fuses or fry transformer coils.
                    </p>
                    <p>
                      <strong>Heat Pump Errors:</strong> Inverted O/B terminal logic causes heat pumps to blow cold in winter or hot in summer.
                    </p>
                    <p>
                      <strong>Missing C-Wire:</strong> Power-stealing mode leads to constant Wi-Fi drops and compressor short-cycling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certified Installation */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Snowflake className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <Snowflake className="w-3.5 h-3.5 text-sky-700" /> PROFESSIONAL CERTIFIED INSTALL
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Guaranteed Compatibility & Efficiency
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Dedicated C-Wire Adapter:</strong> Installs clean power extender modules inside the air handler for reliable 24V current.
                    </p>
                    <p>
                      <strong>Heat Pump Staging:</strong> Calibrates multi-stage compressor stages and locks out auxiliary strips during mild weather.
                    </p>
                    <p>
                      <strong>App Pairing & Setup:</strong> Connects Wi-Fi, configures PG&E TOU scheduling, and demonstrates key app features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your Thermostat Needs Service or Upgrade */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your Thermostat Needs Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Catch sensor errors, battery drain, or relay faults early before they cause unexpected climate outages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Thermostat Screen Blank or Flashing",
                desc: "A blank display indicates blown 24V transformer fuses, tripped safety float switches, or depleted lithium batteries."
              },
              {
                num: "02",
                title: "HVAC System Won't Turn On or Off",
                desc: "Failed 24V switching relays inside aging thermostats can leave compressors running constantly or prevent ignition."
              },
              {
                num: "03",
                title: "Inaccurate Temperature Readings",
                desc: "A miscalibrated thermistor sensor causes thermostat displays to read 5°F–10°F off from true room conditions."
              },
              {
                num: "04",
                title: "Frequent Wi-Fi Network Disconnects",
                desc: "Repeated offline warnings stem from power-stealing thermostats dropping Wi-Fi connection due to missing C-wires."
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
              Our 6-Step Thermostat Workflow
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

      {/* 8. Comparison Table: Smart Thermostat vs Manual Thermostat */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              Smart Thermostat vs. Manual / Basic Thermostats
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing Wi-Fi smart thermostats with traditional manual mercury or basic digital thermostats.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">Wi-Fi Smart Thermostat</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Manual / Basic Thermostat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Remote Smartphone Control</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">iOS & Android App Anywhere</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Manual Wall Adjustment Only</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">PG&E TOU Scheduling</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Automated Pre-Cooling & Setbacks</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">No Rate Scheduling Capabilities</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Wireless Room Sensors</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Averages Multiple Bedroom Temps</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Reads Single Hallway Temperature</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">HVAC Filter & Error Alerts</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Real-Time Mobile Push Notifications</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">No Maintenance Reminders</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Estimated Annual Energy Savings</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">10% – 15% Reduction on PG&E Bills</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Baseline Electricity Consumption</td>
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
                Clear answers regarding C-wires, heat pump staging, and PG&E Time-of-Use rates.
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
