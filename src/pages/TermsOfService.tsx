import { PageHero } from "../components/PageHero";
import { SEO } from "../components/SEO";
import { Scale, FileCheck, AlertTriangle, Shield, CheckCircle2, Phone, Mail } from "lucide-react";

export function TermsOfService() {
  const lastUpdated = "October 16, 2026";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service | ReamsHVAC",
    "description": "Terms of Service and legal disclosures governing website usage, estimates, and California HVAC contracting with Reams Heating & Air Conditioning Inc.",
    "url": "https://reamshvac.com/terms-of-service"
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800" id="terms-of-service-page">
      <SEO
        title="Terms of Service | California Contracting Disclosures | ReamsHVAC"
        description="Review the Terms of Service governing ReamsHVAC website usage, diagnostic walkthroughs, estimates, California CSLB contracting, and warranty coverage."
        canonical="/terms-of-service"
        schema={schemaData}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
        eyebrow="California Commercial & Consumer Disclosures"
        title="Terms of Service & Agreements"
        description="Important legal terms, California Home Improvement Contract statutory disclosures, warranty terms, and service conditions for Reams Heating & Air Conditioning Inc."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="border-b border-slate-200 pb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-950">
              Contractual Agreement
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: January 1, 2024 &bull; Last Revised: {lastUpdated}
            </p>
          </div>

          {/* Section 1: Acceptance */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-900 shrink-0" />
              <span>1. Agreement &amp; Acceptance of Terms</span>
            </h2>
            <p>
              These Terms of Service (“Terms”) constitute a legally binding agreement between you (“Customer,” “Homeowner,” or “you”) and Reams Heating &amp; Air Conditioning Inc. (doing business as <strong>ReamsHVAC</strong>, “Company,” “we,” or “us”). By accessing our website (<a href="https://reamshvac.com" className="text-blue-700 underline font-medium">reamshvac.com</a>), requesting a service walkthrough, booking a diagnostic appointment, or accepting an estimate, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </section>

          {/* Section 2: California C-20 Contractor Compliance */}
          <section className="space-y-3 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-blue-950 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-900 shrink-0" />
              <span>2. California Contractor Licensing &amp; Consumer Notice</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700">
              ReamsHVAC is a licensed California C-20 Warm-Air Heating, Ventilating, and Air-Conditioning contractor operating in strict compliance with the rules and regulations enforced by the <strong>California Contractors State License Board (CSLB)</strong>. We maintain commercial general liability insurance, workers’ compensation coverage for all technicians, and statutory surety bonding in full standing.
            </p>
            <div className="pt-2 text-xs text-slate-500 border-t border-slate-200">
              <strong>Mandatory California Statutory Notice:</strong> Contractors are required by law to be licensed and regulated by the Contractors State License Board. Any questions concerning a contractor may be referred to the Registrar, Contractors State License Board, P.O. Box 26000, Sacramento, CA 95826, or via <a href="https://cslb.ca.gov" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">cslb.ca.gov</a>.
            </div>
          </section>

          {/* Section 3: Preliminary Estimates vs. Binding Contracts */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-900 shrink-0" />
              <span>3. Estimates, Walkthroughs &amp; Written Contracts</span>
            </h2>
            <p>
              To ensure diagnostic honesty and accurate engineering:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li><strong>Preliminary Estimates:</strong> Any cost ranges, pricing guides, or ballpark figures provided over the phone, via online inquiry, or through website literature are preliminary approximations for customer planning only and are not binding offers.</li>
              <li><strong>On-Site Evaluation Required:</strong> Final binding pricing requires an in-person physical inspection of your home’s ductwork, electrical service panel, thermodynamic envelope, and existing mechanical equipment by a certified master technician.</li>
              <li><strong>California Home Improvement Contracts (BPC § 7159):</strong> Pursuant to California law, all residential repair, maintenance, or installation jobs where aggregate labor and material costs exceed $500 require a written, signed Home Improvement Contract outlining the full scope of work, schedule, down payment limits (maximum 10% or $1,000, whichever is less), and statutory cancellation rights.</li>
              <li><strong>Upfront Flat-Rate Commitment:</strong> Once an on-site diagnostic is complete, you receive an itemized, binding flat-rate proposal. No work begins and no charges accrue until you approve the written proposal in writing.</li>
            </ul>
          </section>

          {/* Section 4: Permits, Title 24 & HERS Compliance */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              4. Building Permits, Title 24 &amp; Municipal Codes
            </h2>
            <p>
              In compliance with California Building Standards Code (Title 24, Part 6) and local municipal requirements across Santa Clara, San Mateo, Alameda, Contra Costa, San Francisco, and Marin counties:
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              All complete heat pump installations, furnace change-outs, and major air conditioning retrofits require mandatory mechanical building permits and independent third-party HERS (Home Energy Rating System) duct leakage verification testing. ReamsHVAC manages permit filings directly with the applicable municipal building department and coordinates all required final inspections.
            </p>
          </section>

          {/* Section 5: Warranties & Labor Guarantees */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              5. Warranty Structure &amp; Labor Guarantees
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-blue-950 font-bold block mb-1">A. Equipment Manufacturer Warranties</strong>
                <p className="text-slate-600">
                  Equipment warranties (typically 10 to 12 years for compressors, heat exchangers, and functional components on qualifying systems from Mitsubishi Electric, Carrier, Daikin, Midea, Bosch, and Trane) are provided directly by the respective equipment manufacturer. ReamsHVAC submits warranty registrations upon installation. Coverage is subject to manufacturer terms, including annual professional maintenance.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-blue-950 font-bold block mb-1">B. ReamsHVAC 1-Year Workmanship Guarantee</strong>
                <p className="text-slate-600">
                  We back all complete system installations with our written 1-Year Workmanship Labor Guarantee. If an installation defect arises within 365 days of installation due to workmanship error, ReamsHVAC will diagnose and correct the issue at zero labor cost to the homeowner.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Emergency Dispatch Conditions */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              6. Emergency Dispatch &amp; Response Times
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our 24/7 emergency dispatch service operates around the clock for acute heating failures during winter freezes and catastrophic cooling breakdowns during extreme summer heatwaves. While we maintain GPS-tracked service vans across key Bay Area thoroughfares to ensure rapid dispatch, response windows may vary based on high-call volume events, extreme weather, highway conditions, and safety protocols.
            </p>
          </section>

          {/* Section 7: Mechanics Lien Notice */}
          <section className="space-y-3 bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-6 text-xs sm:text-sm">
            <h2 className="text-base sm:text-lg font-bold text-amber-950 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
              <span>7. Statutory California Mechanics Lien Notice</span>
            </h2>
            <p className="text-amber-950 leading-relaxed font-medium">
              Under the California Mechanics Lien Law (Civil Code §§ 8000 et seq.), any contractor, subcontractor, laborer, supplier, or other person who helps to improve your property, but is not paid for their work or supplies, has a right to place a lien on your home, land, or property where the work was performed.
            </p>
            <p className="text-slate-600">
              ReamsHVAC delivers full lien releases and waivers upon receipt of final contract payment, ensuring your property title remains unencumbered and protected.
            </p>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              8. Limitation of Liability
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              To the fullest extent permitted by California law, ReamsHVAC shall not be held liable for indirect, incidental, or consequential damages resulting from pre-existing unpermitted electrical wiring, structural framing inadequacies, unaddressed dry rot, or prior substandard ductwork performed by other contractors. In all cases, our aggregate liability arising out of our work shall not exceed the total contractual amount paid by the customer for the specific job giving rise to the claim.
            </p>
          </section>

          {/* Section 9: Governing Law & Santa Clara County Jurisdiction */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              9. Governing Law &amp; Dispute Resolution
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              These Terms, customer agreements, and any dispute arising from services performed by ReamsHVAC shall be governed by and construed under the laws of the State of California, without giving effect to conflict of laws principles. The parties agree that exclusive jurisdiction and venue for any legal proceeding shall lie in the Superior Court of California, County of Santa Clara.
            </p>
          </section>

          {/* Section 10: Contact Information */}
          <section className="pt-6 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 mb-3">
              10. Inquiries &amp; Customer Relations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              For questions regarding our terms, estimates, or consumer rights, contact our dispatch management office:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-blue-950">Reams Heating &amp; Air Conditioning Inc. (ReamsHVAC)</p>
              <p className="text-slate-600">Customer Relations &amp; Contracts Department</p>
              <p className="text-slate-600">Serving San Jose &amp; Greater Bay Area, CA</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 pt-2 font-medium">
                <a href="tel:4083039777" className="inline-flex items-center gap-1.5 text-blue-950 hover:underline">
                  <Phone className="w-4 h-4 text-blue-900" />
                  <span>(408) 303-9777</span>
                </a>
                <a href="mailto:dispatch@reamshvac.com" className="inline-flex items-center gap-1.5 text-blue-950 hover:underline">
                  <Mail className="w-4 h-4 text-blue-900" />
                  <span>dispatch@reamshvac.com</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
