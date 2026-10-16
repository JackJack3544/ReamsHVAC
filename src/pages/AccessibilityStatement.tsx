import { PageHero } from "../components/PageHero";
import { SEO } from "../components/SEO";
import { CheckCircle2, Phone, Mail, HelpCircle, HeartHandshake, Eye } from "lucide-react";

export function AccessibilityStatement() {
  const lastUpdated = "October 16, 2026";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Accessibility Statement | ReamsHVAC",
    "description": "ReamsHVAC digital accessibility commitment under ADA Title III, California Unruh Civil Rights Act, and WCAG 2.1 Level AA standards.",
    "url": "https://reamshvac.com/accessibility"
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800" id="accessibility-page">
      <SEO
        title="Accessibility Statement | ADA & WCAG 2.1 AA Compliance | ReamsHVAC"
        description="ReamsHVAC is committed to digital accessibility for all users, including those with disabilities. Learn about our WCAG 2.1 Level AA standards and alternative access options."
        canonical="/accessibility"
        schema={schemaData}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Accessibility Statement" },
        ]}
        eyebrow="Digital Inclusion & ADA Title III Compliance"
        title="Accessibility Statement"
        description="We are committed to ensuring our website, digital estimate tools, and customer service channels are accessible to every homeowner and customer across the San Francisco Bay Area."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="border-b border-slate-200 pb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-950">
              Universal Access Commitment
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: January 1, 2024 &bull; Last Revised: {lastUpdated}
            </p>
          </div>

          {/* Section 1: Our Commitment */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-blue-900 shrink-0" />
              <span>1. Our Commitment to Universal Accessibility</span>
            </h2>
            <p>
              Reams Heating &amp; Air Conditioning Inc. (<strong>ReamsHVAC</strong>) believes that comfort, clean indoor air, and reliable heating and cooling services must be available to everyone without barrier. We are dedicated to providing a website (<a href="https://reamshvac.com" className="text-blue-700 underline font-medium">reamshvac.com</a>) that is accessible to the widest possible audience, regardless of ability, age, or assistive technology used.
            </p>
            <p>
              We continuously audit and optimize our digital presence to meet or exceed the requirements of the <strong>Americans with Disabilities Act (ADA) Title III</strong>, Section 508 of the Rehabilitation Act, and California’s <strong>Unruh Civil Rights Act</strong> (California Civil Code § 51 et seq.).
            </p>
          </section>

          {/* Section 2: Conformance Standard */}
          <section className="space-y-3 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-blue-950 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-950 shrink-0" />
              <span>2. Technical Conformance Standard (WCAG 2.1 Level AA)</span>
            </h2>
            <p>
              Our digital interfaces are developed and maintained in alignment with the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> established by the World Wide Web Consortium (W3C). These standards explain how to make web content more accessible for individuals with visual, auditory, motor, cognitive, and neurological disabilities.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Key accessibility measures implemented across reamshvac.com include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li><strong>High Contrast Typography:</strong> Contrast ratios of at least 4.5:1 for standard text and 3:1 for large display text and interface elements.</li>
              <li><strong>Keyboard Operability:</strong> Full navigation capability using standard keyboard inputs (Tab, Shift+Tab, Enter, Spacebar, and Arrow keys) with clear focus indicators.</li>
              <li><strong>Screen Reader Semantic Markup:</strong> Proper HTML5 landmark roles (<code className="bg-slate-200 px-1 py-0.5 rounded text-xs">&lt;header&gt;</code>, <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">&lt;nav&gt;</code>, <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">&lt;main&gt;</code>, <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">&lt;footer&gt;</code>) and ARIA attributes for dynamic components.</li>
              <li><strong>Mobile Viewport Scalability:</strong> Support for screen zooming up to 200% without clipping content or forcing horizontal scrolling, paired with 16px minimum form field font sizes to eliminate iOS viewport jumping.</li>
              <li><strong>Descriptive Alternative Text:</strong> Informative <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">alt</code> attributes on diagrams and photos, with decorative imagery hidden from screen reader announcements.</li>
              <li><strong>Descriptive Form Labels:</strong> Explicit programmatic associations between all form labels and input fields.</li>
            </ul>
          </section>

          {/* Section 3: Assistive Technology Compatibility */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-900 shrink-0" />
              <span>3. Assistive Technology Compatibility</span>
            </h2>
            <p>
              Our website is designed to be compatible with standard assistive technologies, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Screen Readers:</strong> JAWS, NVDA, Apple VoiceOver (macOS / iOS), and Google TalkBack (Android).</li>
              <li><strong>Screen Magnifiers:</strong> ZoomText, native OS magnifiers, and browser-level zoom utilities.</li>
              <li><strong>Speech Recognition Software:</strong> Dragon NaturallySpeaking, Apple Voice Control, and Windows Speech Recognition.</li>
              <li><strong>Alternative Input Hardware:</strong> Head pointers, eye-tracking systems, and single-switch devices.</li>
            </ul>
          </section>

          {/* Section 4: Alternative Access & 24/7 Telephone Support */}
          <section className="space-y-3 bg-blue-50/60 border border-blue-200 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-blue-950 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-900 shrink-0" />
              <span>4. Alternative Access &amp; Immediate Telephone Dispatch</span>
            </h2>
            <p>
              If you have any difficulty navigating our website, reading text, viewing equipment diagrams, or submitting online walkthrough requests, our friendly live dispatchers are standing by to assist you directly over the phone at no additional charge:
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-100 space-y-2 mt-2">
              <div className="flex items-center gap-2 text-blue-950 font-bold">
                <Phone className="w-4 h-4 text-blue-900" />
                <span>Direct Voice Dispatch: <a href="tel:4083039777" className="underline hover:text-blue-700">(408) 303-9777</a></span>
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                <strong>California Relay Service (CRS):</strong> Homeowners who are deaf, hard of hearing, or speech-disabled can dial <strong>711</strong> (or toll-free 1-800-735-2929 for TTY) to connect with a CRS communications assistant and request connection to ReamsHVAC at <strong>(408) 303-9777</strong>.
              </div>
            </div>
          </section>

          {/* Section 5: Third-Party Content */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-900 shrink-0" />
              <span>5. Third-Party Integrations</span>
            </h2>
            <p>
              While we strive to ensure that all embedded content and links to third-party services (such as Google Maps embeds, rebate portal links to TECH Clean California, or utility providers like PG&amp;E and Silicon Valley Clean Energy) are accessible, ReamsHVAC cannot control the accessibility compliance of third-party domains. If you experience difficulty with any third-party resource referenced on our site, please contact us for direct assistance.
            </p>
          </section>

          {/* Section 6: Feedback & Contact */}
          <section className="space-y-3 border-t border-slate-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-900 shrink-0" />
              <span>6. Accessibility Feedback &amp; Assistance</span>
            </h2>
            <p>
              We welcome your feedback on the accessibility of ReamsHVAC. If you encounter an accessibility barrier on our website, please contact our Accessibility Coordinator with details regarding the specific web page and issue encountered:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1.5 text-xs sm:text-sm">
              <p><strong>Reams Heating &amp; Air Conditioning Inc.</strong></p>
              <p>Attention: Accessibility Coordinator</p>
              <p>Service Fleet Dispatch: San Jose, California</p>
              <p>Phone: <a href="tel:4083039777" className="text-blue-700 underline font-semibold">(408) 303-9777</a></p>
              <p>Email: <a href="mailto:dispatch@reamshvac.com" className="text-blue-700 underline font-semibold">dispatch@reamshvac.com</a></p>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              We investigate all reported issues within two (2) business days and implement appropriate remediation measures promptly.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
