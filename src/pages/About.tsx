import { Link } from "react-router-dom";
import { 
  Phone, ArrowRight, Wrench, Shield, Check, 
  Sparkles, Compass, CheckCircle2
} from "lucide-react";
import { CTABand } from "../components/CTABand";
import { PageHero } from "../components/PageHero";
import { SEO } from "../components/SEO";

export function About() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Why ReamsHVAC | Engineering Philosophy & Mechanical Craftsmanship",
    "description": "Discover our philosophical commitment to non-commissioned master HVAC craftsmanship, ACCA Manual J engineering, and honest homeowner advocacy in San Jose and the Bay Area.",
    "url": "https://reamshvac.com/why-us",
    "mainEntity": {
      "@type": "HVACBusiness",
      "name": "ReamsHVAC",
      "telephone": "1-800-555-0199",
      "areaServed": "San Jose & San Francisco Bay Area",
      "license": "CA C-20 #1048291"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800" id="about-page">
      <SEO
        title="Why ReamsHVAC | Our Engineering Philosophy | San Jose & Bay Area"
        description="Learn why homeowners trust ReamsHVAC: non-commissioned master technicians, ACCA Manual J engineering, transparent flat-rate pricing, and honest HVAC craftsmanship."
        canonical="/why-us"
        schema={schemaData}
      />

      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Why Us" },
        ]}
        eyebrow="San Jose & Bay Area HVAC Engineering"
        title="Why Bay Area Homeowners Trust ReamsHVAC"
        description="We've eliminated sales commissions, guesswork sizing, and cut corners. Discover our master technician philosophy and engineered home comfort standards."
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "/contact",
          icon: <Wrench className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "1-800-555-0199",
          href: "tel:1-800-555-0199",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      {/* 2. Philosophical Narrative */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Prologue */}
          <article className="prose prose-slate max-w-none">
            <div className="border-b border-slate-200 pb-8 sm:pb-12 mb-10 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-950 block mb-2 sm:mb-3">
                Our Foundation &amp; Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-blue-950 tracking-tight leading-tight mb-4 sm:mb-8">
                Heating and Cooling as an Exact Mechanical Craft, Not a Sales Pitch
              </h2>
              <p className="text-sm sm:text-lg text-slate-700 leading-relaxed font-normal">
                Over the past decade, a quiet transformation took place across the residential HVAC industry. Independent local heating and air conditioning contractors across California were steadily acquired by private equity rollups. Technicians were retrained as sales representatives, assigned monthly revenue quotas, and incentivized with lucrative commissions on equipment replacements.
              </p>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed mt-4 sm:mt-6">
                The result was predictable: homeowners with an inexpensive blown capacitor or dirty flame sensor were routinely told their entire system was dead and required a sudden $18,000 replacement. ReamsHVAC was built from day one as the antithesis of this model.
              </p>

              {/* Editorial Pull Quote */}
              <div className="my-6 sm:my-10 pl-4 sm:pl-6 border-l-4 border-blue-950 py-2">
                <blockquote className="text-base sm:text-xl lg:text-2xl font-serif italic text-blue-950 leading-snug">
                  "When a technician's paycheck is tied to a commission on equipment sales, diagnostic honesty is compromised before they ever step through your front door."
                </blockquote>
                <cite className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest block mt-2 sm:mt-3 not-italic">
                  — The ReamsHVAC Founding Principle
                </cite>
              </div>
            </div>

            {/* Philosophical Tenets */}
            <div className="space-y-10 sm:space-y-20">

              {/* Tenet 1 */}
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-1 rounded bg-blue-50 text-blue-950 border border-blue-100 uppercase tracking-wider">
                    Tenet 01
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
                    Human Alignment
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-950 tracking-tight mb-3 sm:mb-4">
                  The Master Technician as an Engineer, Never a Salesman
                </h3>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    Every service technician at ReamsHVAC is an hourly, salaried professional. They earn zero commission on part replacements, zero commission on equipment upgrades, and zero commission on add-ons.
                  </p>
                  <p>
                    Their only obligation is mechanical truth. If your 12-year-old gas furnace or air conditioner can be safely, reliably, and economically repaired with an $85 OEM part, that is the exact diagnosis and solution you receive. If an upgrade is truly warranted due to heat exchanger cracks, refrigerant obsolescence, or severe inefficiency, we present itemized options with zero pressure and zero sales theatre.
                  </p>
                </div>
              </div>

              {/* Tenet 2 */}
              <div className="pt-8 sm:pt-12 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-1 rounded bg-blue-50 text-blue-950 border border-blue-100 uppercase tracking-wider">
                    Tenet 02
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
                    Scientific Discipline
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-950 tracking-tight mb-3 sm:mb-4">
                  Thermodynamic Physics Over Rules of Thumb
                </h3>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    The most common mistake in residential HVAC is sizing equipment by crude rules of thumb—such as the infamous "one ton of cooling per 500 square feet." In an era of modern dual-pane windows, updated attic insulation, and variable Bay Area microclimates, arbitrary sizing results in oversized equipment that short-cycles, creates clammy indoor humidity, spikes utility bills, and wears out compressors years ahead of schedule.
                  </p>
                  <p>
                    We reject guesswork. Every new heat pump, furnace, and air conditioner we install is engineered using comprehensive <strong>ACCA Manual J heating and cooling load calculations</strong>. We mathematically evaluate window solar orientation, thermal boundary integrity, ceiling heights, and air distribution static pressure (Manual D) before specifying system capacity.
                  </p>
                </div>
              </div>

              {/* Tenet 3 */}
              <div className="pt-8 sm:pt-12 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-1 rounded bg-blue-50 text-blue-950 border border-blue-100 uppercase tracking-wider">
                    Tenet 03
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
                    Invisible Craftsmanship
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-950 tracking-tight mb-3 sm:mb-4">
                  Pride in What Remains Unseen
                </h3>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    In an HVAC installation, ninety percent of the craftsmanship that dictates system longevity is hidden once the covers are screwed in place and the attic hatch is closed. Cutting corners during the install is easy for careless contractors to hide—until the system fails five years later.
                  </p>
                  <p>
                    We hold ourselves to an uncompromising mechanical standard:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-xs sm:text-base lg:text-lg text-slate-700">
                    <li>
                      <strong>Nitrogen-Purged Brazing:</strong> We continuously sweep dry nitrogen through copper refrigerant lines while brazing, preventing internal black oxidation flakes from clogging electronic expansion valves.
                    </li>
                    <li>
                      <strong>Deep Evacuation Below 500 Microns:</strong> We verify evacuation with calibrated digital micron gauges, ensuring all moisture and non-condensable gases are completely removed from the refrigeration loop.
                    </li>
                    <li>
                      <strong>Static Pressure Verification:</strong> We measure total external static pressure (ESP) across the blower and ductwork to guarantee factory-rated airflow across every coil.
                    </li>
                    <li>
                      <strong>Home Reverence:</strong> We deploy protective neoprene runners and clean shoe covers from the front entryway to the mechanical room on every call.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tenet 4 */}
              <div className="pt-8 sm:pt-12 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-1 rounded bg-blue-50 text-blue-950 border border-blue-100 uppercase tracking-wider">
                    Tenet 04
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
                    Long-Term Stewardship
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-950 tracking-tight mb-3 sm:mb-4">
                  Transparent Stewardship for Bay Area Homeowners
                </h3>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    We view every heating and cooling system as a 15-to-20-year commitment to your home's air quality, acoustics, and monthly operating costs. That is why we provide upfront, binding flat-rate pricing before opening a toolbox, handle all California Title 24 permitting and HERS compliance in-house, and proactively process every local rebate available through BayREN and TECH Clean California.
                  </p>
                  <p>
                    Across 46 Bay Area communities, our reputation is built on enduring mechanical excellence—one home at a time.
                  </p>
                </div>
              </div>

            </div>

            {/* Closing Creed Box */}
            <div className="mt-10 sm:mt-20 pt-8 sm:pt-12 border-t-2 border-slate-900">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                <div>
                  <h4 className="text-base sm:text-xl font-bold text-blue-950">California C-20 License #1048291</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    EPA Universal Certified • Title 24 Compliant • Fully Bonded &amp; $2M Insured
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-950 text-white font-bold px-5 sm:px-7 py-3 sm:py-3.5 rounded-md hover:bg-blue-900 transition-colors shadow-sm text-sm w-full sm:w-auto justify-center sm:justify-start"
                >
                  <span>Schedule a Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </article>
        </div>
      </section>

      {/* 5. CTA Band */}
      <div className="home-cta-wrapper hidden sm:block">
        <CTABand />
      </div>
    </div>
  );
}
