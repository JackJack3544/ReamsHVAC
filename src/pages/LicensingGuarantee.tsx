import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Award, FileCheck, CheckCircle2, ChevronDown, ChevronUp,
  Phone, ArrowRight, Shield, Check, Building2, Wrench
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { TrustBar } from "../components/TrustBar";
import { CTABand } from "../components/CTABand";
import { SEO } from "../components/SEO";

export function LicensingGuarantee() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const credentials = [
    {
      title: "California CSLB C-20 License",
      subtitle: "State License #1048291",
      badge: "State Certified",
      desc: "Licensed under the California Contractors State License Board specifically for C-20 Warm-Air Heating, Ventilating, and Air-Conditioning Contracting. Verified and in good standing with zero disciplinary actions.",
      icon: <Award className="w-6 h-6 text-blue-900" />
    },
    {
      title: "$2,000,000 Liability & Worker's Comp",
      subtitle: "Full Homeowner Indemnity",
      badge: "Fully Insured",
      desc: "We carry comprehensive $2M commercial general liability insurance along with complete California Worker's Compensation coverage for every technician and installer on your property.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-900" />
    },
    {
      title: "EPA Section 608 Universal Certification",
      subtitle: "Federal Clean Air Act Compliance",
      badge: "EPA Universal",
      desc: "Every technician holds universal certification from the Environmental Protection Agency for compliant recovery, evacuation, nitrogen pressure testing, and handling of R-410A, R-32, and R-454B refrigerants.",
      icon: <FileCheck className="w-6 h-6 text-blue-900" />
    },
    {
      title: "California Title 24 & HERS Testing",
      subtitle: "Energy Efficiency Verified",
      badge: "Title 24 Compliant",
      desc: "In-house Certified Energy Raters verify duct leakage (under 6% target), minimum airflow CFM, and refrigerant charge for prompt municipal permit finalization in San Jose and across Bay Area cities.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-900" />
    },
    {
      title: "1-Year Written Labor Guarantee",
      subtitle: "Our Family Workmanship Promise",
      badge: "Labor Guaranteed",
      desc: "We back every installation and repair with our own 1-year written labor warranty in addition to full 10- to 12-year manufacturer parts and compressor warranties.",
      icon: <Shield className="w-6 h-6 text-blue-900" />
    },
    {
      title: "Permit Acquisition & Code Compliance",
      subtitle: "Complete City Filing",
      badge: "100% Permitted",
      desc: "We pull all required building, electrical, and mechanical permits with your local building department, coordinate inspections, and ensure full compliance with California Mechanical Code.",
      icon: <Building2 className="w-6 h-6 text-blue-900" />
    }
  ];

  const faqs = [
    {
      q: "How can I verify your California contractor license?",
      a: "You can verify our C-20 license (#1048291) directly on the California Contractors State License Board (CSLB) official website at cslb.ca.gov. You will find our active status, workers' compensation policy, and commercial bond in full standing."
    },
    {
      q: "Why is hiring an unlicensed contractor dangerous for HVAC work?",
      a: "HVAC systems involve high-voltage electricity (240V), flammable natural gas lines, carbon monoxide exhaust, and pressurized refrigerants. Unlicensed work voids manufacturer warranties, risks home insurance non-coverage in case of fire or water damage, violates California Title 24 law, and compromises family safety."
    },
    {
      q: "Do you pull permits for HVAC installations in the Bay Area?",
      a: "Yes. In California, replacing a furnace, air conditioner, or heat pump requires a mechanical permit from your local building department. ReamsHVAC handles the entire permit application, site drawings, and schedules the final city inspection on your behalf."
    },
    {
      q: "What does your 1-Year Workmanship Guarantee cover?",
      a: "If any component we install or repair fails due to installation error or workmanship within 365 days, we return promptly to diagnose and fix the issue with zero trip charges and zero labor fees. That is on top of manufacturer factory warranties."
    },
    {
      q: "What is HERS duct testing and why does my city require it?",
      a: "Under California Title 24 energy code, any newly installed HVAC system must undergo independent Home Energy Rating System (HERS) diagnostic testing to verify that duct leakage does not exceed allowable state thresholds (typically 5% to 6%). This ensures your energy bills stay low."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "ReamsHVAC Licensing, Insurance & Guarantee",
    "telephone": "1-800-555-0199",
    "url": "https://reamshvac.com/licensing-insurance-guarantee",
    "license": "CA C-20 #1048291",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Jose",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "description": "Official licensing, insurance, and warranty credentials for ReamsHVAC. California CSLB C-20 #1048291, EPA Universal, Title 24 certified."
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Licensing, Insurance & Guarantee | CSLB #1048291 | ReamsHVAC"
        description="Verify ReamsHVAC credentials: California CSLB C-20 License #1048291, $2M liability insurance, EPA Universal certification, and 1-year labor guarantee."
        canonical="/licensing-insurance-guarantee"
        schema={schemaData}
      />

      {/* Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Licensing & Insurance" },
        ]}
        eyebrow="California Contractors State License Board #1048291"
        title="Licensing, Insurance & Our Workmanship Guarantee"
        description="Your home is your most valuable investment. We protect it with verified state licensing, $2,000,000 in liability coverage, Title 24 compliance, and our own 1-year written labor guarantee."
        primaryCta={{
          text: "Schedule Consultation",
          href: "/contact",
          icon: <ShieldCheck className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "1-800-555-0199",
          href: "tel:1-800-555-0199",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      <TrustBar />

      {/* Credentials Grid */}
      <section className="py-8 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-950 block mb-2">
              Verified Compliance & Protection
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              Our Certified Credentials & Standards
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-3 leading-relaxed">
              Every technician that enters your home is thoroughly vetted, background checked, factory-trained, and covered by comprehensive insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((c, i) => (
              <div 
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-blue-950 transition-colors shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      {c.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-950 border border-blue-100">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-1">
                    {c.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-900 mb-3">
                    {c.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Pillar Reams Promise */}
      <section className="py-8 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              The ReamsHVAC Family Guarantee
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-2">
              Four written commitments we make to every Bay Area homeowner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="text-blue-950 font-black text-2xl mb-2">01</div>
              <h3 className="font-bold text-blue-950 text-sm sm:text-base mb-1.5">No Surprise Pricing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You receive a clear, written flat-rate quote before any wrench touches your system. No travel fees or surprise add-ons.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="text-blue-950 font-black text-2xl mb-2">02</div>
              <h3 className="font-bold text-blue-950 text-sm sm:text-base mb-1.5">1-Year Labor Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If anything goes wrong with our installation or repair within 12 months, we fix it with zero trip charges or labor costs.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="text-blue-950 font-black text-2xl mb-2">03</div>
              <h3 className="font-bold text-blue-950 text-sm sm:text-base mb-1.5">Clean Home Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We use protective shoe covers, clean floor drop cloths, and leave your mechanical room cleaner than we found it.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="text-blue-950 font-black text-2xl mb-2">04</div>
              <h3 className="font-bold text-blue-950 text-sm sm:text-base mb-1.5">Permit & Code Promise</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We handle all permit applications and ensure every installation passes city and HERS inspections without hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              Licensing & Insurance Questions
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1">
              Common homeowner questions regarding California HVAC regulations.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-blue-950 text-xs sm:text-base flex justify-between items-center gap-4 hover:bg-slate-100 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
