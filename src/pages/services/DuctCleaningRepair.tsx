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

export function DuctCleaningRepair() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "Greg V.",
      city: "San Jose, CA",
      date: "2 weeks ago",
      rating: 5,
      source: "Google Review",
      comment: "Our back bedrooms were always 10 degrees hotter in summer. ReamsHVAC performed a static pressure test, found two crushed flexible ducts in our attic, replaced them with R-8 insulated ducting, and mastic-sealed all plenums. Temperature is completely balanced now."
    },
    {
      name: "Melissa H.",
      city: "Santa Clara, CA",
      date: "1 month ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "Had our ductwork cleaned and sanitized after remodeling our home. The technicians used a high-powered HEPA negative pressure machine and showed us before-and-after video footage inside the registers. Super professional work."
    },
    {
      name: "David K.",
      city: "Sunnyvale, CA",
      date: "2 months ago",
      rating: 5,
      source: "Google Review",
      comment: "When we replaced our furnace, ReamsHVAC arranged the HERS duct leakage testing for San Jose city permit signoff. Our system passed with only 3% leakage. Our PG&E heating bill dropped immediately."
    }
  ];

  const faqs = [
    {
      q: "How often should residential HVAC ductwork be cleaned?",
      a: "For most Bay Area households, professional duct cleaning is recommended every 3 to 5 years. However, you should schedule cleaning sooner if you have recently completed home renovations, suffered indoor water damage, or if family members suffer from severe indoor allergies."
    },
    {
      q: "Can leaky ductwork increase my PG&E energy bills?",
      a: "Yes! According to the U.S. Department of Energy, the average American home loses 20% to 30% of its conditioned air through leaks, unsealed joints, and crushed flexible ducts in unconditioned attics and crawlspaces. Leaking cool air into a 130°F attic inflates monthly electric bills."
    },
    {
      q: "How do I know if my ductwork needs cleaning vs. sealing and repair?",
      a: "Visible dust puffs exiting supply vents, dark dust streaks along carpet edges, and stale odors indicate a need for duct cleaning. Extreme temperature differences between rooms and weak airflow from specific registers point to crushed or leaking duct joints requiring sealing or repair."
    },
    {
      q: "What is HERS duct leakage testing in California?",
      a: "HERS (Home Energy Rating System) duct leakage testing is mandatory in California whenever a new furnace, heat pump, or AC is installed. A certified HERS rater pressurizes your duct system to verify total duct leakage is under 15% (or 6% for new duct systems) to pass municipal inspection."
    },
    {
      q: "How much does duct cleaning, sealing, or replacement cost?",
      a: "Whole-home professional duct cleaning ranges from $300 to $700. Duct sealing and minor repairs range from $500 to $3,000+. Complete ductwork replacement with new high-R-value insulated flex ducting costs $4,000 to $10,000+ for standard South Bay homes."
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Static Pressure & Camera Inspection",
      mobileDescription: "Measure static pressure and run video scopes to identify duct damage.",
      description: "We measure return and supply static pressure and insert video inspection scopes to identify hidden duct collapses, tears, and debris accumulation."
    },
    {
      step: 2,
      title: "HEPA Negative Pressure Setup",
      mobileDescription: "Connect high-CFM HEPA vacuum extraction at main trunk lines.",
      description: "We connect high-CFM HEPA vacuum extraction equipment at main trunk lines to pull dust and dander completely out of your home."
    },
    {
      step: 3,
      title: "Rotary Agitation & Vent Cleaning",
      mobileDescription: "Insert rotary brushes down every branch run to dislodge dust and dander.",
      description: "We insert flexible rotary brushes down every individual branch run to dislodge stubborn dust, drywall powder, and pet hair off duct walls."
    },
    {
      step: 4,
      title: "Precision Mastic Air-Sealing",
      mobileDescription: "Apply fiber-reinforced mastic joint sealant over plenum and boot seams.",
      description: "We apply fiber-reinforced mastic joint sealant over all metal plenum connections, boots, and wye branches to eliminate air leaks."
    },
    {
      step: 5,
      title: "Duct Repair & Insulated Flex Swap",
      mobileDescription: "Replace crushed ductwork with modern R-8 insulated flexible ducts.",
      description: "We replace crushed or deteriorating ductwork with modern R-8 insulated flexible ducting, elevating straps off attic joists."
    },
    {
      step: 6,
      title: "Airflow Balancing & HERS Verification",
      mobileDescription: "Balance register dampers, verify pressure leakage, and review docs.",
      description: "We balance register dampers to equalize airflow across all bedrooms, conduct HERS pressure leakage verification, and provide documentation."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://reamshvac.com/services/duct-cleaning-repair#service",
        "name": "Duct Cleaning, Sealing, and Repair",
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
        "description": "Professional duct cleaning, HEPA vacuum extraction, mastic duct sealing, and R-8 ductwork replacement across San Jose and the South Bay."
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
            "name": "Duct Cleaning & Repair",
            "item": "https://reamshvac.com/services/duct-cleaning-repair"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Air Duct Cleaning & Repair in San Jose | ReamsHVAC"
        description="HEPA air duct cleaning, Aeroseal duct sealing, and duct replacement in San Jose, Santa Clara & Sunnyvale. Improve airflow & efficiency. Call (408) 320-3288."
        canonical="/services/duct-cleaning-repair"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Duct Cleaning & Repair" },
        ]}
        eyebrow="Air Distribution & Energy Efficiency"
        title="Duct Cleaning, Sealing & Repair in San Jose"
        description="Eliminate air leakage, boost airflow to hot or cold bedrooms, and remove deep dust dander with professional duct cleaning, mastic sealing, and R-8 duct replacement."
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

      {/* 2. Why Proper Ductwork Air Distribution Matters */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight">
                Why Proper Ductwork Distribution Matters
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Your home duct system serves as the central respiratory highway for your heat pump, furnace, or central AC. Thousands of cubic feet of conditioned air pass through attic or crawlspace ducting every hour.
              </p>
              <p>
                According to the DOE, homes lose 20% to 30% of conditioned air through leaky joints, disconnected return boots, and uninsulated metal pipes. When ducts leak conditioned air into a 130°F attic, equipment works overtime, causing high PG&E bills.
              </p>
              <p>
                Professional duct cleaning, mastic joint sealing, and R-8 flex duct replacements restore full static pressure, balance airflow, and protect indoor air quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ductwork Services Offered: Which Fits Your Home */}
      <section className="py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              Air Duct Services for South Bay Homes
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive air distribution solutions tailored to your home's ductwork condition and static pressure requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* HEPA Vacuum Duct Cleaning */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Wind className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Wind className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">HEPA Vacuum Cleaning</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Removes deep dust, pet hair, and dander using rotary agitation whips and negative pressure HEPA extraction equipment.
                </p>
              </div>
            </div>

            {/* Precision Mastic Air Sealing */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Layers className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Layers className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Precision Mastic Sealing</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Seals all plenum connections, boot seams, and branch joints with reinforced mastic compound to stop 20%+ air leakage.
                </p>
              </div>
            </div>

            {/* Airflow Balancing */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Sparkles className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">Airflow Re-Balancing</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Adjusts inline branch dampers and register velocities to eliminate hot or cold spots in distant bedrooms and upstairs.
                </p>
              </div>
            </div>

            {/* Complete R-8 Duct Replacement */}
            <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center sm:text-left shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start justify-between group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.08] sm:opacity-[0.05] text-blue-900 group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <Building2 className="w-24 h-24" />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                <Building2 className="hidden sm:block w-6 h-6 text-blue-900 mb-3 sm:mb-4" />
                <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">R-8 Duct Replacement</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Replaces decaying flex ducts with high-efficiency R-8 thermal insulated ducting for maximum temperature retention in attics.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            We perform static pressure tests to verify duct CFM delivery and ensure compliance with California Title 24 HERS standards.
          </div>
        </div>
      </section>

      {/* 4. Tailored for South Bay & San Jose Homes */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tailored for South Bay & San Jose Homes
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Many mid-century homes built across{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">San Jose</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Santa Clara</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Sunnyvale</Link>,{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Cupertino</Link>, and{" "}
                <Link to="/service-areas" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">Saratoga</Link>{" "}
                feature original uninsulated sheet metal or low-R flex ducting.
              </p>
              <p>
                When attic temperatures spike above 120°F during South Bay heatwaves, unsealed ductwork loses a quarter of cooling capacity before air reaches living areas. ReamsHVAC restores proper sealing and insulation to maximize comfort and meet Title 24 standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Professional Duct Cleaning vs Mastic Sealing */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mb-2 sm:mb-3">
                Duct Cleaning vs. Mastic Joint Sealing
              </h2>
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-3xl">
                Combining cleanliness with energy efficiency to optimize your home's air distribution system.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Duct Cleaning */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-amber-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Sun className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-amber-200/60">
                    <Sun className="w-3.5 h-3.5 text-amber-700" /> HEPA DUCT CLEANING
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Dust Removal & Allergen Elimination
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Deep Debris Extraction:</strong> Uses negative pressure vacuum equipment and rotary brushes to dislodge dust, drywall debris, and pet hair.
                    </p>
                    <p>
                      <strong>Indoor Air Hygiene:</strong> Eliminates stale odors and prevents particulate buildup on blower fans and evaporator coils.
                    </p>
                    <p>
                      <strong>Recommended Schedule:</strong> Recommended every 3 to 5 years or following major home renovation projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mastic Sealing */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="absolute -right-6 -bottom-6 opacity-[0.05] text-sky-900 group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Snowflake className="w-36 h-36" />
                </div>
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-sky-200/60">
                    <Snowflake className="w-3.5 h-3.5 text-sky-700" /> MASTIC AIR-SEAL
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-950 mb-2 sm:mb-3">
                    Leak Elimination & PG&E Savings
                  </h3>
                  <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    <p>
                      <strong>Air Leak Elimination:</strong> Seals boot connections and plenum seams with mastic sealant to stop air loss into unconditioned attics.
                    </p>
                    <p>
                      <strong>Static Pressure Restoration:</strong> Ensures maximum cubic feet per minute (CFM) airflow reaches distant rooms and upper floors.
                    </p>
                    <p>
                      <strong>Title 24 HERS Ready:</strong> Lowers duct leakage under mandatory California energy code thresholds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4 Warning Signs Your Ductwork Needs Service */}
      <section className="hidden sm:block relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
              4 Warning Signs Your Ductwork Needs Service
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Catch air leaks, crushed flex ducts, or heavy dust accumulations early to prevent inflated utility bills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Uneven Temperature Between Rooms",
                desc: "Hot bedrooms or cold living areas point to disconnected ducts or leaking branch joints in the attic."
              },
              {
                num: "02",
                title: "Excessive Dust Accumulation",
                desc: "Puffs of dust exiting supply registers signal leaky return ducts pulling unconditioned attic dust into supply streams."
              },
              {
                num: "03",
                title: "Weak Airflow from Registers",
                desc: "Weak air velocity indicates crushed flexible ducts, kinked branch lines, or disconnected plenum collars."
              },
              {
                num: "04",
                title: "Unexplained High Utility Bills",
                desc: "Leaking 20%+ of conditioned air into attics forces heat pumps and AC compressors to run hours longer every day."
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
              Our 6-Step Ductwork Workflow
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

      {/* 8. Comparison Table: Sealed High-R Ductwork vs Unsealed Aging Ductwork */}
      <section className="hidden sm:block py-8 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-3 tracking-tight">
              Sealed R-8 Ductwork vs. Aging Unsealed Ducts
            </h2>
            <p className="text-slate-600 text-xs sm:text-base lg:text-lg">
              Comparing professionally sealed R-8 insulated ducting with unsealed 1970s ductwork.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-[10px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Feature / Metric</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold bg-blue-900">Sealed R-8 Insulated Ductwork</th>
                    <th className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold">Aging Unsealed Ductwork</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Air Leakage Percentage</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Under 6% Total Leakage</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">20% – 35% Typical Leakage</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Thermal Insulation Value</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">R-8 Title 24 High Insulation</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">R-4.2 or Uninsulated Metal</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Room Temperature Balance</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Even ±2°F Across All Rooms</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">5°F–10°F Hot/Cold Room Variances</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">Attic Dust Filtration</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">100% Sealed Return Stream</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Pulls Dust & Fiberglass into Vents</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-blue-950">PG&E Energy Cost Impact</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6 bg-blue-50/50 font-medium text-emerald-800">Maximizes Equipment Efficiency</td>
                    <td className="py-3 sm:py-4 px-3.5 sm:px-6">Up to 30% Wasted Heating/Cooling</td>
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
                Clear answers regarding duct cleaning, mastic sealing, and HERS duct testing.
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
