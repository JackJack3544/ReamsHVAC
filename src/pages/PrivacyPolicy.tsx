import { PageHero } from "../components/PageHero";
import { SEO } from "../components/SEO";
import { Shield, FileText, Lock, Eye, AlertCircle, Phone, Mail } from "lucide-react";

export function PrivacyPolicy() {
  const lastUpdated = "October 16, 2026";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | ReamsHVAC",
    "description": "Comprehensive Privacy Policy for ReamsHVAC, detailing compliance with California CCPA, CPRA, CalOPPA, and consumer data protections.",
    "url": "https://reamshvac.com/privacy-policy"
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800" id="privacy-policy-page">
      <SEO
        title="Privacy Policy | California CCPA & CPRA Compliance | ReamsHVAC"
        description="Learn how ReamsHVAC collects, protects, and respects your personal information in compliance with California CCPA, CPRA, and CalOPPA privacy laws."
        canonical="/privacy-policy"
        schema={schemaData}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        eyebrow="California Privacy Rights & Consumer Protection"
        title="Privacy Policy & Data Practices"
        description="Your privacy is paramount. Discover how Reams Heating & Air Conditioning Inc. protects your personal data under the California Consumer Privacy Act (CCPA/CPRA) and CalOPPA."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="border-b border-slate-200 pb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-950">
              Legal Transparency
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: January 1, 2024 &bull; Last Revised: {lastUpdated}
            </p>
          </div>

          {/* Section 1: Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-900 shrink-0" />
              <span>1. Introduction &amp; Corporate Identity</span>
            </h2>
            <p>
              Reams Heating &amp; Air Conditioning Inc. (doing business as <strong>ReamsHVAC</strong>, “we,” “our,” or “us”) provides heating, ventilation, air conditioning, and heat pump electrification services across San Jose, Santa Clara County, and 46 communities throughout the greater San Francisco Bay Area.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, safeguard, and disclose your personal information when you access our website (<a href="https://reamshvac.com" className="text-blue-700 underline font-medium">reamshvac.com</a>), submit service estimates, request walkthrough appointments, or communicate with our dispatch personnel. We strictly adhere to California privacy laws, including the <strong>California Consumer Privacy Act (CCPA)</strong> as amended by the <strong>California Privacy Rights Act (CPRA)</strong>, the <strong>California Online Privacy Protection Act (CalOPPA)</strong>, and federal consumer protection statutes.
            </p>
          </section>

          {/* Section 2: Categories of Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-900 shrink-0" />
              <span>2. Categories of Personal Information Collected</span>
            </h2>
            <p>
              In the preceding 12 months, ReamsHVAC has collected the following categories of personal information from California homeowners and website visitors:
            </p>
            <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-blue-900">
              <div>
                <strong className="text-blue-950 block font-bold text-sm sm:text-base">A. Identifiers</strong>
                <p className="text-xs sm:text-sm text-slate-600">Full legal name, phone number, email address, physical service address, and postal ZIP code provided when requesting service or diagnostics.</p>
              </div>
              <div>
                <strong className="text-blue-950 block font-bold text-sm sm:text-base">B. Commercial &amp; Mechanical Information</strong>
                <p className="text-xs sm:text-sm text-slate-600">HVAC system specifications, existing unit serial numbers, square footage, property layout details, diagnostic reports, and records of estimates, maintenance plans, and proposals.</p>
              </div>
              <div>
                <strong className="text-blue-950 block font-bold text-sm sm:text-base">C. Internet &amp; Network Activity</strong>
                <p className="text-xs sm:text-sm text-slate-600">Internet Protocol (IP) address, browser type, device identifiers, operating system, referring URL, and pages viewed during your visit to maintain secure server operations.</p>
              </div>
              <div>
                <strong className="text-blue-950 block font-bold text-sm sm:text-base">D. Geolocation Data</strong>
                <p className="text-xs sm:text-sm text-slate-600">General geographic location (city and county level) used solely to calculate technician dispatch availability and local municipal permit jurisdiction.</p>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-900 shrink-0" />
              <span>3. Business Purposes for Processing Information</span>
            </h2>
            <p>
              We process your personal information exclusively for bona fide business purposes directly related to residential and commercial HVAC services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li><strong>Dispatch &amp; Scheduling:</strong> Scheduling diagnostic walkthroughs, sending technician arrival notifications, and delivering emergency HVAC repairs.</li>
              <li><strong>Permit &amp; Title 24 Compliance:</strong> Filing required mechanical building permits with municipal building departments (e.g., City of San Jose, City of Palo Alto, City of Sunnyvale) and scheduling third-party HERS duct verification tests.</li>
              <li><strong>Factory Warranty Registration:</strong> Registering newly installed equipment directly with manufacturers (including Mitsubishi Electric, Carrier, Daikin, Midea, Bosch, and Trane) to secure extended 10- to 12-year compressor and parts warranties.</li>
              <li><strong>Rebate Processing:</strong> Assisting eligible homeowners with paperwork for local and state clean energy incentives, including TECH Clean California, BayREN, and utility electrification programs.</li>
              <li><strong>Customer Support:</strong> Responding to inquiries, servicing labor guarantees, and delivering requested written flat-rate proposals.</li>
            </ul>
          </section>

          {/* Section 4: Non-Sale of Data Guarantee */}
          <section className="space-y-3 bg-blue-50/70 border border-blue-200 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-blue-950 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-900 shrink-0" />
              <span>4. Absolute Non-Sale of Personal Data Guarantee</span>
            </h2>
            <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-medium">
              <strong>ReamsHVAC DOES NOT sell, rent, lease, or monetize your personal information to any third party under any circumstances.</strong> We do not disclose personal information to data brokers, advertising networks, or lead-generation resellers.
            </p>
            <p className="text-xs text-slate-600">
              Your contact details are used solely by ReamsHVAC to service your home’s heating, cooling, and air quality systems.
            </p>
          </section>

          {/* Section 5: Third-Party Processors */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              5. Authorized Third-Party Service Providers
            </h2>
            <p>
              We disclose personal information only to trusted service partners bound by written confidentiality agreements and statutory data privacy obligations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li><strong>Form Submission Service:</strong> We utilize Web3Forms to securely transmit form submissions from our website directly to our authorized technical dispatch inbox. Web3Forms operates under strict confidentiality and does not sell or share form data.</li>
              <li><strong>Hosting Infrastructure:</strong> Our website is hosted on secure Netlify infrastructure conforming to industry-standard data transmission encryption (HTTPS/TLS).</li>
              <li><strong>Municipal Authorities:</strong> City and county building departments when legally required to pull Title 24 mechanical permits on your home’s behalf.</li>
            </ul>
          </section>

          {/* Section 6: California Privacy Rights (CCPA / CPRA) */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              6. Your California Privacy Rights (CCPA &amp; CPRA)
            </h2>
            <p>
              Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents enjoy specific, enforceable rights regarding their personal data:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong className="text-blue-950 block font-bold mb-1">Right to Know &amp; Access</strong>
                <span>You may request disclosure of the specific pieces and categories of personal information we have collected about you over the past 12 months.</span>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong className="text-blue-950 block font-bold mb-1">Right to Delete</strong>
                <span>You may request the deletion of your personal data, subject to legal record retention requirements (such as statutory CSLB home improvement contract preservation laws).</span>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong className="text-blue-950 block font-bold mb-1">Right to Correct</strong>
                <span>You have the right to request correction of inaccurate personal information maintained in our dispatch and warranty files.</span>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong className="text-blue-950 block font-bold mb-1">Right to Non-Discrimination</strong>
                <span>We will never deny you service, charge differential rates, or alter service quality because you exercised any of your privacy rights.</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              To exercise any California privacy rights, submit a verifiable consumer request to <a href="mailto:privacy@reamshvac.com" className="text-blue-700 underline font-semibold">privacy@reamshvac.com</a> or call our dispatch desk at <a href="tel:4083039777" className="text-blue-700 font-bold underline">(408) 303-9777</a>. We verify all requests within 10 business days and respond fully within 45 calendar days.
            </p>
          </section>

          {/* Section 7: TCPA Telephone & SMS Communications */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              7. Telephone Consumer Protection Act (TCPA) &amp; Text Messaging
            </h2>
            <p>
              By providing your telephone number via our web forms or over the phone, you expressly consent to receive non-marketing transactional telephone calls, text messages (SMS), and voicemails from ReamsHVAC regarding your service inquiry, appointment confirmations, and technician arrival times.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Consent to receive automated text messages is not a condition of purchasing any goods or services. Message and data rates may apply. You may opt out of SMS communications at any time by replying <strong>STOP</strong>. For assistance, reply <strong>HELP</strong> or contact our office.
            </p>
          </section>

          {/* Section 8: Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              8. Children's Privacy (COPPA Compliance)
            </h2>
            <p>
              Our website and heating/cooling services are directed strictly to adult property owners, property managers, and individuals aged 18 and older. We do not knowingly solicit or collect personal information from children under the age of 13 pursuant to the Children’s Online Privacy Protection Act (COPPA).
            </p>
          </section>

          {/* Section 9: Data Security & Retention */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
              9. Data Security &amp; Legal Retention Schedule
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to secure personal information from unauthorized access, alteration, or disclosure.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              We retain customer service records, written contracts, and warranty paperwork for a minimum period mandated by California Business and Professions Code and California Contractors State License Board regulations (typically five to seven years for residential home improvement contracts) to support manufacturer warranty claims and legal compliance.
            </p>
          </section>

          {/* Section 10: Contact Information */}
          <section className="pt-6 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 mb-3">
              10. Privacy Inquiries &amp; Contact Information
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our compliance with California privacy statutes, reach our team directly:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-blue-950">Reams Heating &amp; Air Conditioning Inc. (ReamsHVAC)</p>
              <p className="text-slate-600">Attn: Privacy Compliance Officer</p>
              <p className="text-slate-600">Serving San Jose &amp; Greater San Francisco Bay Area, CA</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 pt-2 font-medium">
                <a href="tel:4083039777" className="inline-flex items-center gap-1.5 text-blue-950 hover:underline">
                  <Phone className="w-4 h-4 text-blue-900" />
                  <span>(408) 303-9777</span>
                </a>
                <a href="mailto:privacy@reamshvac.com" className="inline-flex items-center gap-1.5 text-blue-950 hover:underline">
                  <Mail className="w-4 h-4 text-blue-900" />
                  <span>privacy@reamshvac.com</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
