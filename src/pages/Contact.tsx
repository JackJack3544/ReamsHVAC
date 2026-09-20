import { useState, useId, type FormEvent } from "react";
import { 
  Phone, CheckCircle2, Send, Check, Wrench, ArrowRight, Clock, Shield, ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { ReviewsSection } from "../components/ReviewsSection";
import { CTABand } from "../components/CTABand";
import { SEO } from "../components/SEO";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reviews = [
    {
      name: "Brian S.",
      city: "San Jose, CA",
      date: "1 week ago",
      rating: 5,
      source: "Google Review",
      comment: "Scheduled online at 8pm and had a technician at the door by 10am the next morning. ReamsHVAC was professional, gave me a flat-rate quote upfront, and completed the AC repair in under two hours."
    },
    {
      name: "Michelle K.",
      city: "Santa Clara, CA",
      date: "3 weeks ago",
      rating: 5,
      source: "Yelp Verified",
      comment: "Booking was simple and their team followed up within 30 minutes. The technician walked me through everything before starting work. Honest pricing, great communication."
    },
    {
      name: "Derek P.",
      city: "Sunnyvale, CA",
      date: "1 month ago",
      rating: 5,
      source: "Google Review",
      comment: "Called at 7am on a Saturday for a furnace that stopped working overnight. They had a tech out within 2 hours. Fixed and back to heat by noon. Couldn't ask for better service."
    }
  ];

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
                      setFormData({ name: "", phone: "", email: "" });
                    }}
                    className="bg-blue-950 text-white font-bold px-5 sm:px-6 py-2.5 rounded-md text-xs sm:text-sm hover:bg-blue-900 transition-colors cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Name */}
                  <div>
                    <label htmlFor={nameId} className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 sm:mb-2">
                      Name *
                    </label>
                    <input
                      id={nameId}
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
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-1.5 sm:pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full bg-blue-950 text-white font-bold py-3.5 sm:py-4 px-6 rounded-lg hover:bg-blue-900 transition-colors shadow-md flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Contact Us</span>
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

      {/* 3. Dark — Trust Signals */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                What to Expect When You Contact Us
              </h2>
            </div>
            <div className="text-slate-100 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-center sm:text-left">
              <p>
                Our dispatch team responds to every online inquiry within 30 minutes during business hours. For 24/7 emergency heating and cooling failures, call <a href="tel:1-800-555-0199" className="text-sky-300 font-semibold underline hover:text-sky-100 transition-colors">1-800-555-0199</a> for immediate live dispatch.
              </p>
              <p>
                Every walkthrough begins with a thorough on-site diagnostic—no upsell pressure, no commissions. You receive a flat-rate written quote before any work begins.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {[
                { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-0.5" />, title: "30-Min Response", desc: "Online inquiries answered within 30 minutes during business hours." },
                { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-0.5" />, title: "Flat-Rate Quotes", desc: "Written itemized pricing before we open a toolbox." },
                { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-0.5" />, title: "24/7 Emergency", desc: "Around-the-clock live dispatch for heating and cooling emergencies." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <p className="text-sm sm:text-base font-bold text-white">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Verified Customer Reviews */}
      <div className="home-reviews-wrapper">
        <ReviewsSection
          title="What Customers Say About Our Service"
          subtitle="Verified 5-Star Reviews from San Jose, Santa Clara & Sunnyvale"
          reviews={reviews}
        />
      </div>

      {/* 5. CTA Band */}
      <div className="home-cta-wrapper hidden sm:block">
        <CTABand />
      </div>
    </div>
  );
}
