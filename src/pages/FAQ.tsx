import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  HelpCircle, ChevronDown, ChevronUp, Phone, ArrowRight,
  ShieldCheck, Wrench, Zap, ThermometerSun, Sparkles, Filter
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { TrustBar } from "../components/TrustBar";
import { CTABand } from "../components/CTABand";
import { SEO } from "../components/SEO";

interface FAQItem {
  category: "General" | "Heat Pumps" | "AC & Furnace" | "Maintenance & Rebates";
  q: string;
  a: string;
}

const allFaqs: FAQItem[] = [
  {
    category: "General",
    q: "How does your upfront flat-rate pricing work?",
    a: "Before any repair or installation begins, our technician evaluates your system and provides a written, itemized flat-rate quote. The price you approve is the exact price you pay—never hourly billing with surprise travel fees or unquoted parts."
  },
  {
    category: "General",
    q: "Are your technicians paid on sales commission?",
    a: "No. Unlike large private equity HVAC franchises, ReamsHVAC technicians are hourly, salaried professionals who receive zero sales commissions. Their sole incentive is to give you honest diagnostics and repair options that actually benefit your home and budget."
  },
  {
    category: "General",
    q: "What areas in the Bay Area do you serve?",
    a: "We serve 46+ cities across all 9 Bay Area counties, with dedicated dispatch hubs in Santa Clara County (San Jose, Santa Clara, Sunnyvale, Cupertino, Palo Alto, Los Gatos, Campbell), San Mateo County (Peninsula), Alameda & Contra Costa (East Bay), San Francisco, and Marin (North Bay)."
  },
  {
    category: "Heat Pumps",
    q: "How does an electric heat pump work, and can it heat in winter?",
    a: "A heat pump is a dual-function system that both heats and cools your home using thermodynamic refrigerant cycles. In summer, it extracts indoor heat and pumps it outside just like an AC. In winter, it reverses the flow to extract ambient outdoor heat and transfer it inside. Modern inverter heat pumps operate down to 5°F with ease, which is far colder than Bay Area winters ever reach."
  },
  {
    category: "Heat Pumps",
    q: "What rebates are available for converting to a heat pump in California?",
    a: "Depending on your utility provider (PG&E, Silicon Valley Clean Energy, San Jose Clean Energy) and local programs (TECH Clean California, BayREN), Bay Area homeowners can qualify for $2,000 to $8,000+ in combined state, utility, and federal Inflation Reduction Act (IRA Section 25C) tax credits. ReamsHVAC assists with all qualifying paperwork."
  },
  {
    category: "Heat Pumps",
    q: "Do I need to upgrade my electrical panel (200A) to install a heat pump?",
    a: "Not necessarily. While older homes with 100A panels historically required service upgrades, modern high-efficiency inverter heat pumps feature low startup amps (LRA) and can often be paired with smart circuit breakers or power managers, avoiding costly electrical service panel upgrades."
  },
  {
    category: "AC & Furnace",
    q: "How do I know whether to repair or replace my aging HVAC system?",
    a: "A common standard is the '$5,000 Rule': multiply the system age by the repair cost. If the result exceeds $5,000, replacement is often more economical. Other key factors include whether your system uses obsolete R-22 Freon, has a cracked heat exchanger (safety hazard), or requires frequent major repairs."
  },
  {
    category: "AC & Furnace",
    q: "What does the new SEER2 efficiency rating mean?",
    a: "SEER2 (Seasonal Energy Efficiency Ratio 2) is the updated Department of Energy efficiency metric that accounts for real-world duct static pressure. In California and the Southwest region, new central air conditioning systems must achieve a minimum of 14.3 SEER2 (or 15.0 SEER equivalent) to meet state building codes."
  },
  {
    category: "AC & Furnace",
    q: "Why is my air conditioner running continuously but not cooling?",
    a: "The most common causes are a severely clogged air filter restricting airflow, a frozen evaporator coil, a failed dual-run capacitor preventing the outdoor condenser from engaging, or a refrigerant leak. Running the system in this state risks compressor burnout, so shut off the thermostat and call for diagnosis."
  },
  {
    category: "Maintenance & Rebates",
    q: "How often should I change my HVAC air filters?",
    a: "Standard 1-inch pleated fiberglass filters should be replaced every 60 to 90 days (or every 30 days if you have pets or during Bay Area wildfire smoke season). Thicker 4- to 5-inch media filters generally last 6 to 12 months before requiring replacement."
  },
  {
    category: "Maintenance & Rebates",
    q: "What is included in your 26-Point Seasonal Safety Inspection?",
    a: "Our seasonal tune-up covers carbon monoxide and gas leak detection, electrical capacitor and contactor testing, blower motor amp-draw measurement, refrigerant subcooling/superheat pressure testing, condensate drain clearing, burner and flame sensor cleaning, and thermostat calibration."
  },
  {
    category: "Maintenance & Rebates",
    q: "What warranty comes with a new installation?",
    a: "Every new complete system installed by ReamsHVAC includes a 10-year manufacturer parts and compressor warranty, plus our own 1-year written labor guarantee. Premium tier systems (like Mitsubishi Electric Diamond installs) include up to 12-year warranty protection."
  }
];

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "General", "Heat Pumps", "AC & Furnace", "Maintenance & Rebates"];

  const filteredFaqs = selectedCategory === "All"
    ? allFaqs
    : allFaqs.filter(f => f.category === selectedCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="HVAC Frequently Asked Questions | ReamsHVAC San Jose"
        description="Get clear answers to your HVAC questions: heat pump electrification, repair costs, SEER2 standards, Title 24, and California rebates."
        canonical="/faq"
        schema={schemaData}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
        eyebrow="Expert HVAC Guidance"
        title="Frequently Asked Questions"
        description="Honest answers to the most common heating, cooling, heat pump, and rebate questions from San Jose and Bay Area homeowners."
        primaryCta={{
          text: "Ask a Question",
          href: "/contact",
          icon: <HelpCircle className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "(408) 320-3288",
          href: "tel:4083203288",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      <TrustBar />

      <section className="py-8 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-950 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-blue-950 text-sm sm:text-base flex justify-between items-center gap-4 hover:bg-slate-100/80 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 shrink-0">
                      {faq.category}
                    </span>
                    {faq.q}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-900 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 pt-3.5 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Prompt Box */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-2">
              Have a Specific Question About Your Home?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-md mx-auto">
              Our master technicians are always available to help diagnose your issue or answer questions over the phone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="bg-blue-950 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-blue-900 transition-colors text-xs sm:text-sm inline-flex items-center justify-center gap-1.5"
              >
                <span>Contact Dispatch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:4083203288"
                className="bg-white text-blue-950 font-bold px-6 py-2.5 rounded-lg hover:bg-slate-100 transition-colors text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call (408) 320-3288</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <CTABand />
    </div>
  );
}
