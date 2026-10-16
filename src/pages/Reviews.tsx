import { Link } from "react-router-dom";
import { 
  ShieldCheck, CheckCircle2, Award, Phone, ArrowRight,
  ExternalLink, HeartHandshake, MessageSquare, Wrench
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { TrustBar } from "../components/TrustBar";
import { CTABand } from "../components/CTABand";
import { SEO } from "../components/SEO";

export function Reviews() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Customer Satisfaction & Reviews | ReamsHVAC",
    "description": "Learn about ReamsHVAC's commitment to customer satisfaction, non-commissioned honesty, and verified client feedback across San Jose and the Bay Area.",
    "url": "https://reamshvac.com/reviews"
  };

  const guarantees = [
    {
      title: "100% Non-Commissioned Honesty",
      desc: "Our technicians receive zero commission on equipment or part sales. We diagnose what is truly wrong—never pushing premature replacements.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-900" />
    },
    {
      title: "Upfront Flat-Rate Written Proposals",
      desc: "You receive a clear, itemized quote before any tool touches your equipment. No hidden travel fees, no surprise add-ons.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-900" />
    },
    {
      title: "1-Year Written Labor Guarantee",
      desc: "Every repair and installation is backed by our full 1-year written workmanship warranty in addition to all manufacturer parts coverage.",
      icon: <Award className="w-6 h-6 text-blue-900" />
    },
    {
      title: "White-Glove Home Reverence",
      desc: "Protective neoprene floor runners and fresh shoe covers on every call. We leave your mechanical space cleaner than we found it.",
      icon: <HeartHandshake className="w-6 h-6 text-blue-900" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800" id="reviews-page">
      <SEO
        title="Client Reviews & Customer Satisfaction | ReamsHVAC San Jose"
        description="Discover ReamsHVAC's client satisfaction standards. Non-commissioned master technicians, transparent flat-rate pricing, and verified homeowner feedback."
        canonical="/reviews"
        schema={schemaData}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Client Reviews" },
        ]}
        eyebrow="San Jose & Bay Area Homeowner Advocacy"
        title="Our Commitment to Client Satisfaction"
        description="We believe lasting reputation is earned through precision mechanical engineering, upfront pricing, and absolute diagnostic truth—one home at a time."
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "/contact",
          icon: <Wrench className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "(408) 303-9777",
          href: "tel:4083039777",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      <TrustBar />

      {/* Main Philosophy & Review Policy */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-950 block mb-2">
              Authentic Reputation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-950 tracking-tight leading-tight mb-4">
              Earned in Mechanical Rooms, Not Sales Pitches
            </h2>
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              Unlike corporate HVAC rollups where technicians receive sales commissions to condemn repairable furnaces or push expensive equipment upgrades, ReamsHVAC operates on hourly salaries. We treat your heating and cooling system as an engineering investment, prioritizing genuine mechanical truth on every visit.
            </p>
          </div>

          {/* Core Guarantees Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {guarantees.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl w-fit mb-4 text-blue-950 shadow-2xs">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a Review Callout Card */}
          <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-md text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
              <MessageSquare className="w-6 h-6 text-sky-300" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Are You a Recent Customer?
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Your honest feedback helps your Bay Area neighbors choose an honest, non-commissioned contractor. We invite all clients to share their real experiences with our dispatch, diagnostic accuracy, and installation craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-950 font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors shadow-sm text-sm"
              >
                <span>Send Direct Feedback</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:4083039777"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch: (408) 303-9777</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <CTABand />
    </div>
  );
}
