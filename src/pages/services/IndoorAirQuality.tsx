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

export function IndoorAirQuality() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "Rachel M.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "During last autumn's wildfire smoke events, our indoor air was unbearable. ReamsHVAC retrofitted our furnace cabinet with a MERV 13 deep-pleat media air cleaner and an iWave air purifier. Our indoor air stayed crystal clear even when outside AQI hit 180."
    },
    {
      name: "Jason L.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "Both my kids have severe dust allergies. ReamsHVAC installed a UV-C germicidal light near our evaporator coil and upgraded our filtration. My kids haven't woken up with morning congestion since."
    },
    {
      name: "Evelyn K.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "Professional, punctual, and highly knowledgeable. They measured our furnace's static pressure before installing high-efficiency filtration to ensure our blower motor wouldn't strain."
    }
  ];

  const faqs = [
    {
      q: "Can my HVAC system filter out wildfire smoke?",
      a: "Yes—provided your system uses a filter rated MERV 13 or higher and your ductwork is properly sealed. Standard 1-inch fiberglass filters only catch large dust bunnies. Before installing MERV 13 media filters, we test your blower motor's static pressure capacity to ensure optimal airflow."
    },
    {
      q: "What is the difference between a MERV 8 filter and a MERV 13 filter?",
      a: "A MERV 8 filter captures ~70% of large particles like pollen and dust mites. A MERV 13 filter captures >90% of fine microscopic particulates, including wildfire smoke, smog, microscopic pet dander, and airborne bacteria."
    },
    {
      q: "How do UV light air purifiers work inside HVAC systems?",
      a: "UV-C germicidal light systems are installed directly inside your central HVAC ductwork or near the indoor evaporator coil. Using ultraviolet light wavelength (254 nm), they neutralize biological contaminants—including mold spores, viruses, and bacteria."
    },
    {
      q: "Do whole-home air purifiers help with indoor allergies?",
      a: "Yes. Standalone room air purifiers only clean the air in a single closed room. A whole-home air purifier integrates directly into your central furnace or air handler, continuously scrubbing every cubic foot of air in your home up to 4 to 6 times per hour."
    },
    {
      q: "How much does a whole-home air purification system cost in the South Bay?",
      a: "A high-efficiency whole-home MERV 13 media filter housing installation costs $600 to $1,200. Active electronic or photocatalytic air purifiers (such as iWave or Reme Halo) cost $1,200 to $2,500 installed. In-duct UV-C germicidal light systems range from $400 to $900."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Static Pressure & Airflow Audit",
      mobileDescription: "Measure static pressure to ensure blower capacity for high-MERV filtration.",
      description: "We measure return plenum static pressure to ensure your HVAC blower motor has sufficient capacity for high-MERV air filtration."
    },
    {
      step: 2,
      title: "Media Filter Cabinet Retrofit",
      mobileDescription: "Install deep 4-inch or 5-inch media filter housing for max filtration area.",
      description: "We install a deep 4-inch or 5-inch media filter housing directly upstream of your furnace or air handler for maximum surface filtration area."
    },
    {
      step: 3,
      title: "In-Duct UV Germicidal Lamp Installation",
      mobileDescription: "Mount dual UV-C lamps above cooling coil to continuously destroy mold spores.",
      description: "We mount dual UV-C lamps directly above the indoor cooling coil to continuously destroy mold spores and bacterial slime growth."
    },
    {
      step: 4,
      title: "Active Ionization Air Purifier Wiring",
      mobileDescription: "Wire self-cleaning bipolar ionizer into blower circuit to neutralize VOCs.",
      description: "We hardwire self-cleaning bipolar ionization purifiers into 24V blower circuits to neutralize VOC odors and airborne pathogens."
    },
    {
      step: 5,
      title: "Particulate Testing & Calibrated Measurement",
      mobileDescription: "Measure pre- and post-installation laser particle counts to verify reduction.",
      description: "We measure pre-and post-installation particle counts using laser air quality monitors to verify micro-particle reduction."
    },
    {
      step: 6,
      title: "System Walkthrough & Filter Replacement Plan",
      mobileDescription: "Review media filter inspection, replacement schedule, and monitor app.",
      description: "We show you how to inspect media filters, establish a 6-to-12-month replacement schedule, and review air quality monitoring apps."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/indoor-air-quality#service",
        "name": "Indoor Air Quality Solutions",
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
        "description": "Whole-home indoor air quality solutions including MERV 13 media air cleaners, UV-C germicidal lamps, and active air purification across San Jose."
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
            "name": "Indoor Air Quality",
            "item": "https://reamshvac.com/services/indoor-air-quality"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Indoor Air Quality & Smoke Filtration in San Jose | ReamsHVAC"
        description="Whole-home indoor air quality, wildfire smoke MERV 13 filtration & UV-C air purification in San Jose & Bay Area. Breathe clean air at home. Call 1-800-555-0199."
        canonical="/services/indoor-air-quality"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Indoor Air Quality" },
        ]}
        eyebrow="Breathable Clean Air Solutions"
        title="Indoor Air Quality Solutions in San Jose"
        description="Protect your family from wildfire smoke, microscopic allergens, VOC odors, and mold spores with whole-home MERV 13 filtration, active ionization, and UV-C germicidal light purifiers."
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

      {/* 2. Why Indoor Air Quality Matters */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Why Indoor Air Quality Matters for Your Health
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                According to EPA studies, indoor air can be 2 to 5 times more polluted than outdoor air. Dust mites, pet dander, aerosolized VOCs, pollen, and mold spores continuously recirculate through ductwork in closed South Bay homes.
              </p>
              <p>
                During Northern California wildfire smoke season, fine particulate pollution (PM2.5) creates serious respiratory hazards. Standard 1-inch fiberglass filters offer minimal protection against these microscopic sub-micron particles.
              </p>
              <p>
                Upgrading your HVAC system with deep-pleat MERV 13 media air cleaners or active purifiers captures up to 95% of airborne smoke particles, pollen, and bacteria across every room in your home simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Indoor Air Quality Solutions Offered */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Whole-Home Air Quality Solutions for Bay Area Homes
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We engineer multi-stage whole-home filtration and purification solutions tailored to your family's health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* MERV 13 Media Cleaners */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Wind className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Wind className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">MERV 13 Media Cleaners</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Deep 4-inch pleats capture over 90% of sub-micron particles, including wildfire smoke, pollen, and dust mites.
                </p>
              </div>
            </div>

            {/* Active Bipolar Ionization */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Sparkles className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Active Bipolar Ionization</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Injects positive and negative ions into supply air to neutralize VOC odors, chemical vapors, and airborne viruses.
                </p>
              </div>
            </div>

            {/* UV-C Germicidal Coil Lamps */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Zap className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Zap className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">UV-C Germicidal Lamps</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  High-intensity 254nm ultraviolet lamps mounted directly over cooling coils prevent mold and biofilm growth.
                </p>
              </div>
            </div>

            {/* Whole-Home Humidification */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Building2 className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Building2 className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Whole-Home Humidifiers</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Maintains ideal 40%–50% humidity levels during dry winter months, easing throat irritation and protecting floors.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            We evaluate static pressure before retrofitting media cabinets to ensure your blower motor operates cleanly without restricted airflow.
          </div>
        </div>
      </section>

      {/* 4. Tailored for South Bay & Wildfire Smoke Seasons */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tailored for South Bay & Wildfire Smoke Seasons
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Families across{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">San Jose</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Santa Clara</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Sunnyvale</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Cupertino</Link>, and{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Saratoga</Link>{" "}
                experience seasonal outdoor smoke plumes.
              </p>
              <p>
                When Bay Area AQI spikes into hazard zones, whole-home HVAC filtration creates a safe sanctuary, filtering PM2.5 particulates across every room simultaneously without needing noisy portable filter units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Standard 1-Inch Filters vs MERV 13 Whole-House Media Cleaners */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                Standard 1-Inch Filters vs. MERV 13 Media Cleaners
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Comparing thin equipment-protection filters with health-grade whole-home filtration systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Standard 1-Inch */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Sun className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-amber-200/60">
                    <Sun className="w-3.5 h-3.5 text-amber-700" /> STANDARD 1-INCH FILTER
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Equipment Protection Only (MERV 1–6)
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Primary Purpose:</strong> Shields furnace motor from large lint; fails to capture microscopic particles.
                    </p>
                    <p>
                      <strong>Sub-Micron Capture:</strong> Passes over 85% of wildfire smoke (PM2.5), pet dander, and pollen straight through.
                    </p>
                    <p>
                      <strong>Frequent Swaps:</strong> Requires monthly replacements during heavy seasonal dust or cooling use.
                    </p>
                  </div>
                </div>
              </div>

              {/* MERV 13 Media Cleaner */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Snowflake className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <Snowflake className="w-3.5 h-3.5 text-sky-700" /> DEEP-PLEAT MERV 13 MEDIA
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Whole-Home Smoke & Allergen Protection
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Health Protection:</strong> Traps over 90% of fine wildfire smoke particles, smog, and airborne bacteria.
                    </p>
                    <p>
                      <strong>Low Airflow Resistance:</strong> Deep 4 to 5-inch pleats provide massive surface area without choking fans.
                    </p>
                    <p>
                      <strong>Extended Lifespan:</strong> Long-lasting filter media requires replacement only once every 6 to 12 months.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your Home Needs Air Quality Improvement */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your Home Needs IAQ Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Recognize symptoms of airborne allergens, persistent smoke odors, or mold growth before they affect your family's health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Persistent Morning Congestion & Allergies",
                desc: "Waking up with sneezing or eye irritation indicates dust mites, pet dander, or mold spores recirculating in bedroom vents."
              },
              {
                num: "02",
                title: "Visible Dust Layer Returning Rapidly",
                desc: "Rapid dust accumulation on furniture hours after cleaning points to inadequate return filter MERV ratings."
              },
              {
                num: "03",
                title: "Lingering Cooking or Chemical Odors",
                desc: "Stubborn VOC odors or stale room smells indicate a lack of active bipolar ionization or inadequate fresh air turnover."
              },
              {
                num: "04",
                title: "Musty Odors When AC Starts Up",
                desc: "A damp smell when central cooling kicks on signals microbial biofilm or mold spore growth on indoor cooling coils."
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
              Our 6-Step IAQ Workflow
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

      {/* 8. Comparison Table: Whole-House Air Purification vs Portable Purifiers */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              Whole-House HVAC IAQ vs. Portable Purifiers
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing central integrated air purification with standalone room air filter towers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">Whole-House HVAC IAQ System</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Portable Room Air Towers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Coverage Area</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">100% Whole Home (All Rooms)</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Single Room Only (200–400 sq ft)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Aesthetic & Floor Space</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">100% Concealed inside HVAC Ducting</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Takes up Floor Space & Cables</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Operating Noise Level</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Silent Central Operation</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Noticeable Fan Noise on High</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Wildfire Smoke (PM2.5) Protection</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Filters Entire Supply Volume</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Struggles with Whole-House Smoke Leakage</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Maintenance Frequency</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">1 Media Swap Every 6–12 Months</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Multiple Small Filter Swaps Per Tower</td>
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
                Clear answers regarding MERV 13 filtration, UV purifiers, and wildfire smoke safety.
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
