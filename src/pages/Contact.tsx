import { useState, useId, type FormEvent } from "react";
import { 
  Phone, CheckCircle2, Send, Check, Wrench, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
import { SEO } from "../components/SEO";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const messageId = useId();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const formPayload = new FormData(e.currentTarget);
      if (!formPayload.has("access_key")) {
        formPayload.append("access_key", "24043072-108e-4ff2-a8c9-e9d0f2ef537d");
      }
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Web3Forms error:", data);
        setErrorMessage(data.message || "Failed to submit request. Please try again.");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setErrorMessage("Network error. Please call 1-800-555-0199 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ReamsHVAC",
    "description": "Contact ReamsHVAC for heating and cooling repair, installations, and maintenance in San Jose and the San Francisco Bay Area.",
    "url": "https://reamshvac.com/contact",
    "mainEntity": {
      "@type": "HVACBusiness",
      "name": "ReamsHVAC",
      "telephone": "1-800-555-0199",
      "email": "dispatch@reamshvac.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Serving Greater Bay Area",
        "addressLocality": "San Jose",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800" id="contact-page">
      <SEO
        title="Contact ReamsHVAC | San Jose Heating & Air Conditioning Dispatch"
        description="Need HVAC service, emergency repairs, or an estimate? Call 1-800-555-0199 or connect online with ReamsHVAC in San Jose, CA."
        canonical="/contact"
        schema={schemaData}
      />

      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact & Scheduling" },
        ]}
        eyebrow="San Jose & Bay Area HVAC Dispatch"
        title="Contact ReamsHVAC for Fast Heating & Cooling"
        description="Have questions about your system, need an emergency repair, or ready to schedule an in-home walkthrough? Reach our local master technicians below."
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "#contact-form",
          icon: <Wrench className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "1-800-555-0199",
          href: "tel:1-800-555-0199",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      {/* 2. Main Section: Value Proposition & Contact Form */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200" id="contact-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Short Value Proposition */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-950 block mb-1.5 sm:mb-2">
                  Honest, Direct Service
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight">
                  Expert Heating &amp; Cooling Without the Sales Pitch
                </h2>
                <p className="text-slate-600 text-xs sm:text-base lg:text-lg mt-3 sm:mt-4 leading-relaxed">
                  We believe in straightforward answers and precision craftsmanship. Whether your system needs a quick repair or you're planning a high-efficiency heat pump upgrade, our non-commissioned master technicians deliver transparent advice and upfront pricing.
                </p>
              </div>

              {/* Core Value Points */}
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-blue-950 block text-xs sm:text-sm font-bold">100% Non-Commissioned</strong>
                    <span className="text-[10px] sm:text-xs text-slate-600">Zero sales commissions. Honest repairs and diagnostics every time.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-blue-950 block text-xs sm:text-sm font-bold">Upfront Flat-Rate Pricing</strong>
                    <span className="text-[10px] sm:text-xs text-slate-600">Clear written proposals before any work begins. Zero surprise fees.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-blue-950 block text-xs sm:text-sm font-bold">Fast Local Dispatch</strong>
                    <span className="text-[10px] sm:text-xs text-slate-600">Equipped mobile service vans operating across all 46 Bay Area cities.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-blue-950 block text-xs sm:text-sm font-bold">24/7 Emergency Response</strong>
                    <span className="text-[10px] sm:text-xs text-slate-600">Around-the-clock dispatch for heatwave AC failures and winter heating outages.</span>
                  </div>
                </div>
              </div>

              <div className="pt-1 text-[10px] sm:text-xs text-slate-500">
                Direct Dispatch Hotline: <a href="tel:1-800-555-0199" className="font-bold text-blue-950 hover:underline">1-800-555-0199</a> &bull; Mon–Sat: 7am–7pm (24/7 Emergency Response)
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div id="contact-form" className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm scroll-mt-28">
              
              <div className="mb-5 sm:mb-8">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-950 block mb-1">
                  Quick Contact
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-950 tracking-tight">
                  Schedule a Walkthrough
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 sm:mt-2">
                  Leave your contact details and our local team will reach out to confirm your appointment.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 sm:py-10 px-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-950 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-200">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-blue-950" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-blue-950 mb-2">Request Received!</h4>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto mb-5 sm:mb-6 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our San Jose team has received your information and will contact you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", message: "" });
                    }}
                    className="bg-blue-950 text-white font-bold px-5 sm:px-6 py-2.5 rounded-md text-xs sm:text-sm hover:bg-blue-900 transition-colors cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                  <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                    aria-label="Contact and service request form"
                  >
                    <input type="hidden" name="access_key" value="24043072-108e-4ff2-a8c9-e9d0f2ef537d" />
                    <input type="hidden" name="subject" value="New Service Request - ReamsHVAC" />
                    <input type="hidden" name="from_name" value="ReamsHVAC Website" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm text-center">
                        {errorMessage}
                      </div>
                    )}
                    
                    {/* Name */}
                    <div>
                      <label htmlFor={nameId} className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 sm:mb-2">
                        Name *
                      </label>
                      <input
                        id={nameId}
                        name="name"
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor={phoneId} className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 sm:mb-2">
                        Phone Number *
                      </label>
                      <input
                        id={phoneId}
                        name="phone"
                        type="tel"
                        required
                        placeholder="(408) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor={emailId} className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        id={emailId}
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor={messageId} className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 sm:mb-2">
                        How Can We Help? *
                      </label>
                      <textarea
                        id={messageId}
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your HVAC issue, home size, or equipment questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all resize-none min-h-[100px]"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-1.5 sm:pt-2">
                      <button
                        type="submit"
                        id="contact-submit-btn"
                        disabled={isSubmitting}
                        className="w-full bg-blue-950 text-white font-bold py-3.5 sm:py-4 px-6 rounded-lg hover:bg-blue-900 transition-colors shadow-md flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Submitting..." : "Contact Us"}</span>
                      </button>
                    </div>

                    <p className="text-[10px] sm:text-xs text-slate-500 text-center pt-1">
                      We respect your privacy. No spam, ever.
                    </p>

                  </form>
                )}

            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA Band */}
      <div className="home-cta-wrapper hidden sm:block">
        <CTABand />
      </div>
    </div>
  );
}
