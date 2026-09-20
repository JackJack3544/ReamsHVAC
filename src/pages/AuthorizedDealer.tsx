import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Award, Wrench, CheckCircle2, 
  ChevronDown, ChevronUp, Phone, ArrowRight,
  Clock, FileCheck, Zap, Check, Shield,
  Building2, Sparkles, AlertTriangle, Layers,
  Cpu, ThermometerSun, Star
} from "lucide-react";
import { CTABand } from "../components/CTABand";
import { TrustBar } from "../components/TrustBar";
import { PageHero } from "../components/PageHero";
import { ReviewsSection } from "../components/ReviewsSection";
import { SEO } from "../components/SEO";

export function AuthorizedDealer() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What does 'Factory Authorized Dealer' status actually mean for a homeowner?",
      a: "Factory Authorized Dealer status means our technicians and installation teams have undergone rigorous direct factory training, testing, and continuous manufacturer audits. We are authorized to register extended 10- to 12-year factory warranties that uncertified contractors cannot offer, and we have direct access to genuine OEM parts and manufacturer engineering support."
    },
    {
      q: "Why is factory warranty registration so important?",
      a: "Most major HVAC manufacturers (Mitsubishi, Carrier, Daikin) only provide a 5-year baseline warranty unless the equipment is installed by a certified dealer and registered with the manufacturer within 60 to 90 days. As an authorized partner, ReamsHVAC automatically files your factory warranty registration directly, securing the full 10- to 12-year compressor and parts coverage."
    },
    {
      q: "Do you only service the brands you are authorized for?",
      a: "No. While we hold premier elite authorizations with Mitsubishi Electric, Carrier, Daikin, Midea, Bosch, and Trane, our master technicians are certified across all residential and commercial HVAC brands, including Lennox, Rheem, Ruud, York, Goodman, Amana, Bryant, and Coleman."
    },
    {
      q: "How does dealer authorization affect TECH Clean California and BayREN rebates?",
      a: "State and utility rebate programs like TECH Clean California and BayREN require that high-efficiency heat pumps be installed by enrolled, certified contractors to ensure Title 24 compliance and proper AHRI matching. Our authorized status guarantees that your system qualifies for all available incentives up to $8,000+."
    },
    {
      q: "What is the difference between genuine OEM parts and generic aftermarket parts?",
      a: "OEM (Original Equipment Manufacturer) parts are designed specifically by the brand for your exact model's electrical, thermal, and airflow tolerances. Generic aftermarket parts can void existing factory warranties, operate at incorrect amperages, and degrade the overall lifespan of your compressor or blower motor."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "name": "ReamsHVAC Authorized Dealer & Factory Certifications",
        "image": "https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png",
        "telephone": "(408) 320-3288",
        "url": "https://reamshvac.com/authorized-dealer",
        "license": "CA C-20 #1048291",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Jose",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "description": "Factory Authorized Dealer for Mitsubishi Electric, Carrier, Daikin, Midea, Bosch, and Trane across San Jose and the San Francisco Bay Area."
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
      }
    ]
  };

  const certifications = [
    {
      brand: "Mitsubishi Electric",
      tier: "Diamond Contractor",
      badgeColor: "bg-red-50 text-red-900 border-red-200",
      accent: "from-red-600 to-red-800",
      description: "The highest recognition tier awarded by Mitsubishi Electric. As a Diamond Contractor, we provide exclusive access to extended 12-year factory parts and compressor warranties on M-Series and P-Series heat pumps.",
      benefits: [
        "Exclusive 12-Year Factory Compressor & Parts Warranty",
        "Factory-trained for multi-zone & Zoned Comfort Solutions",
        "Direct factory technical support and priority OEM parts allocation"
      ]
    },
    {
      brand: "Carrier",
      tier: "Factory Authorized Dealer",
      badgeColor: "bg-white text-blue-950 border-slate-200",
      accent: "from-blue-600 to-blue-800",
      description: "Certified to install and service Carrier's highest-efficiency Infinity® communicating systems and Greenspeed® intelligence heat pumps, adhering to rigorous national engineering standards.",
      benefits: [
        "10-Year Factory Limited Warranty on all qualifying units",
        "Expertise in communicating variable-speed inverter systems",
        "Full adherence to Carrier's strict Title 24 airflow guidelines"
      ]
    },
    {
      brand: "Daikin",
      tier: "Comfort Pro Specialist",
      badgeColor: "bg-white text-blue-950 border-slate-200",
      accent: "from-sky-600 to-sky-800",
      description: "Daikin Comfort Pros are vetted professionals trained in Japanese inverter heat pump engineering, providing 12-year unit replacement warranties on select premium models.",
      benefits: [
        "12-Year Unit Replacement & Parts Warranty on select systems",
        "Advanced inverter modulation diagnostics & setup",
        "Commercial and residential multi-split configuration mastery"
      ]
    },
    {
      brand: "Midea",
      tier: "Certified Inverter Partner",
      badgeColor: "bg-white text-blue-950 border-slate-200",
      accent: "from-teal-600 to-teal-800",
      description: "Factory certified to install Midea's cold-climate, ultra-high SEER2 inverter heat pumps and ductless multi-splits delivering extreme energy savings across the Bay Area.",
      benefits: [
        "10-Year Factory Compressor & Component Warranties",
        "Cold-climate heating performance down to -13°F",
        "Direct qualification for TECH Clean CA & BayREN rebates"
      ]
    },
    {
      brand: "Bosch Thermotechnology",
      tier: "Certified Inverter Pro",
      badgeColor: "bg-white text-blue-950 border-slate-200",
      accent: "from-blue-600 to-blue-800",
      description: "Specialized in Bosch IDS (Inverter Ducted Split) systems that achieve up to 20.5 SEER2 with whisper-quiet 56 dB(A) outdoor acoustic sound dampening.",
      benefits: [
        "10-Year Premium Residential Limited Warranty",
        "Variable-capacity inverter matching standard existing air handlers",
        "Exceptional humidity control and ultra-quiet suburban operation"
      ]
    },
    {
      brand: "Trane / American Standard",
      tier: "Qualified Systems Specialist",
      badgeColor: "bg-white text-blue-950 border-slate-200",
      accent: "from-orange-600 to-orange-800",
      description: "Rigorous diagnostic training on Trane TruComfort™ variable speed systems and Spine Fin™ aluminum coils designed for maximum corrosion resistance.",
      benefits: [
        "10-Year Registered Limited Factory Warranty",
        "Precision electronic refrigerant charging validation",
        "Comprehensive testing against extreme Bay Area summer heat"
      ]
    }
  ];

  const comparisonRows = [
    {
      feature: "Factory Warranty Protection",
      reams: "Up to 12 Years Extended (Direct factory registered)",
      others: "Standard 5-year base warranty (Unregistered)"
    },
    {
      feature: "Replacement Parts Source",
      reams: "100% Genuine OEM Factory Direct Parts",
      others: "Generic, third-party aftermarket universal parts"
    },
    {
      feature: "Technician Training Requirements",
      reams: "100+ Hours Annual Factory-Direct Hands-on Labs",
      others: "General field experience without brand certification"
    },
    {
      feature: "Warranty Registration Filing",
      reams: "Completed & Filed by ReamsHVAC on your behalf",
      others: "Homeowner left to submit paperwork within 60 days"
    },
    {
      feature: "Factory Direct Technical Escalation",
      reams: "Direct channel to brand field service engineers",
      others: "Standard consumer phone support"
    },
    {
      feature: "Title 24 & HERS Permitting",
      reams: "100% Municipal Mechanical Permits & HERS Testing",
      others: "Often skipped to cut contractor corners"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Authorized HVAC Dealer | Mitsubishi, Carrier & Daikin in San Jose"
        description="ReamsHVAC is a certified Factory Authorized Dealer for Mitsubishi Electric, Carrier, Daikin, Bosch & Trane in San Jose & Bay Area. Full warranty coverage."
        canonical="/authorized-dealer"
        schema={schemaData}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dealer Certifications" },
        ]}
        eyebrow="Factory Authorized HVAC Dealer"
        title="Authorized Dealer & Factory Certifications"
        description="Direct manufacturer partnerships with Mitsubishi Electric, Carrier, Daikin, Midea, Bosch, and Trane. Providing Bay Area homeowners with factory-backed extended warranties, genuine OEM parts, and factory-trained master technicians."
        primaryCta={{
          text: "Book Free System Assessment",
          href: "/contact",
          icon: <Wrench className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "(408) 320-3288",
          href: "tel:4083203288",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      {/* 2. Key Certification Metrics Strip */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-2 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">12 Years</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider mt-1">Extended Factory Warranties</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">100%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider mt-1">Genuine OEM Direct Parts</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">100+ Hrs</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider mt-1">Annual Factory Training / Tech</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">Diamond</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider mt-1">Contractor Elite Status</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Overview Narrative Section */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Narrative text (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-blue-950 font-bold uppercase tracking-widest text-xs">
                MANUFACTURER BACKED EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight leading-tight">
                Why Equipment Brand Certifications Protect Your Investment
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Modern inverter heat pumps, variable-speed air conditioners, and communicating thermostats are sophisticated electronic appliances. Installing and diagnosing them requires specialized factory tooling, electronic diagnostic interfaces, and strict nitrogen-purged brazing standards.
              </p>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                When you choose <strong>ReamsHVAC</strong>, you are working with factory-vetted master technicians. We register your warranty directly with the manufacturer, ensuring you receive the maximum 10- to 12-year parts and compressor protection, while guaranteeing your system operates at peak thermodynamic efficiency.
              </p>
            </div>

            {/* Right: Quick Highlights Card (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950 text-white flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950 text-base">The Authorized Dealer Guarantee</h3>
                  <p className="text-xs text-slate-500">Standards enforced on every installation</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 shrink-0" />
                  <span><strong>Automatic Warranty Registration:</strong> We submit all factory paperwork so you never lose coverage.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 shrink-0" />
                  <span><strong>Factory-Direct OEM Inventory:</strong> Exact replacement sensors, boards, and valves for fast repairs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 shrink-0" />
                  <span><strong>Full Title 24 Compliance:</strong> Certified city permits and third-party HERS duct verification testing.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 shrink-0" />
                  <span><strong>Rebate Maximization:</strong> Pre-approved for instant TECH Clean CA and BayREN contractor incentives.</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Factory Authorized Partner</span>
                <span className="text-xs font-bold text-blue-950">CA License #1048291</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Manufacturer Authorizations Grid */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-950 font-bold uppercase tracking-widest text-xs">Direct Manufacturer Authorizations</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mt-2 mb-4 tracking-tight">
              Our Certified Brand Partnerships
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We hold premier status with the HVAC industry's most innovative equipment manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-black text-blue-950 tracking-tight">
                      {cert.brand}
                    </span>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${cert.badgeColor}`}>
                      {cert.tier}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {cert.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/60">
                  {cert.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct Comparison Table */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-950 font-bold uppercase tracking-widest text-xs">The Protection Gap</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-2 mb-3 tracking-tight">
              Factory Authorized Dealer vs. Uncertified Contractors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Why hiring an authorized dealer makes a measurable difference in system lifespan, warranties, and operating reliability.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white text-xs sm:text-sm uppercase tracking-wider">
                    <th className="py-4 px-6 font-bold w-2/5">Evaluation Metric</th>
                    <th className="py-4 px-6 font-bold text-white w-2/5 bg-blue-900/60">ReamsHVAC (Authorized Dealer)</th>
                    <th className="py-4 px-6 font-bold text-slate-300 w-1/5">Uncertified Contractors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="py-4 px-6 font-bold text-blue-950">{row.feature}</td>
                      <td className="py-4 px-6 font-semibold text-blue-950 bg-blue-50/30">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0" />
                          <span>{row.reams}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-500">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technician Rigor & Factory Training Standards (Clean standard light section) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-950 font-bold uppercase tracking-widest text-xs">CONTINUOUS EDUCATION</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mt-2 mb-4 tracking-tight">
              Factory Training & Master Technician Credentials
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our technicians complete over 100 hours of mandatory manufacturer hands-on lab training every year to master the latest inverter algorithms and Title 24 standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-blue-950 text-white flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Inverter Diagnostics</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trained directly on PCB microprocessor communications, electronic expansion valves (EEVs), and DC inverter compressors.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-blue-950 text-white flex items-center justify-center mx-auto mb-4">
                <ThermometerSun className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Nitrogen Brazing Protocol</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero internal oxidation. Every line set is brazed under a continuous flow of dry nitrogen to protect delicate electronic valves.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-blue-950 text-white flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Title 24 & HERS Verified</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every residential replacement is fully permitted through local city mechanical departments with independent HERS duct verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Verified Customer Reviews */}
      <ReviewsSection />

      {/* 8. FAQs Section */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-2 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Understand how factory certifications protect your warranties, rebates, and energy efficiency.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 font-bold text-blue-950 text-sm sm:text-base flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Bottom Call to Action Band */}
      <CTABand />
    </div>
  );
}
