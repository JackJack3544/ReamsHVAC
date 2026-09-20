import { Link } from "react-router-dom";
import { 
  BookOpen, Clock, ArrowRight, ShieldCheck, Phone,
  Sparkles, Zap, Flame, Wind, Calendar
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { TrustBar } from "../components/TrustBar";
import { CTABand } from "../components/CTABand";
import { SEO } from "../components/SEO";

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tags: string[];
}

const articles: Article[] = [
  {
    id: "bay-area-heat-pump-guide-2026",
    category: "Heat Pumps",
    title: "The 2026 Bay Area Heat Pump Guide: Sizing, Rebates & Electrification",
    excerpt: "Everything you need to know about replacing an aging gas furnace with an ultra-quiet inverter heat pump. Learn about ACCA Manual J load calculations and claiming up to $8,000 in combined rebates.",
    readTime: "7 min read",
    date: "September 2026",
    tags: ["Heat Pumps", "Rebates", "Electrification"]
  },
  {
    id: "seer2-california-standards-explained",
    category: "AC & Cooling",
    title: "Understanding SEER2: What California's Energy Standards Mean for Your Home",
    excerpt: "Why the Department of Energy revised efficiency ratings to SEER2, how static duct pressure affects real-world performance, and what equipment efficiency you should choose in Silicon Valley.",
    readTime: "5 min read",
    date: "August 2026",
    tags: ["Air Conditioning", "SEER2", "Energy Efficiency"]
  },
  {
    id: "repair-vs-replace-furnace-guide",
    category: "Heating & Safety",
    title: "Repair vs. Replace: How to Make the Right Choice for an Aging Furnace",
    excerpt: "Using the $5,000 Rule, identifying dangerous heat exchanger cracks, and assessing whether an $800 part replacement makes financial sense on a 15-year-old gas unit.",
    readTime: "6 min read",
    date: "July 2026",
    tags: ["Furnace Repair", "Safety", "Diagnostics"]
  },
  {
    id: "mini-splits-for-adus-and-home-offices",
    category: "Mini-Splits",
    title: "Why Ductless Mini-Splits are Ideal for Bay Area ADUs & Home Offices",
    excerpt: "Add zoned heating and cooling without costly duct modifications. Why multi-zone ductless systems achieve up to 28 SEER2 and whisper-quiet 19-decibel indoor sound levels.",
    readTime: "4 min read",
    date: "June 2026",
    tags: ["Ductless", "ADU", "Mini-Splits"]
  },
  {
    id: "indoor-air-quality-wildfire-smoke-guide",
    category: "Air Quality",
    title: "Protecting Indoor Air Quality During Bay Area Wildfire Smoke Season",
    excerpt: "How to upgrade to MERV 13 filtration without choking furnace blower airflow, plus the benefits of whole-home active air purification and electronic air cleaners.",
    readTime: "5 min read",
    date: "May 2026",
    tags: ["Indoor Air Quality", "MERV 13", "Air Filters"]
  },
  {
    id: "how-to-claim-tech-clean-california-rebates",
    category: "Rebates & Savings",
    title: "How to Claim TECH Clean California & BayREN HVAC Rebates",
    excerpt: "A step-by-step guide to contractor enrollment rules, AHRI matched equipment requirements, and stacking federal IRA tax credits with local Northern California utility incentives.",
    readTime: "6 min read",
    date: "April 2026",
    tags: ["Rebates", "TECH Clean CA", "BayREN"]
  }
];

export function Blog() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ReamsHVAC Guides & Articles",
    "url": "https://reamshvac.com/blog",
    "description": "Educational HVAC articles, heat pump guides, and energy efficiency tips for Bay Area homeowners."
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="HVAC Guides & Homeowner Energy Tips | ReamsHVAC San Jose"
        description="Explore expert heating, air conditioning, and heat pump guides. Learn about California energy standards, local rebates, and system maintenance."
        canonical="/blog"
        schema={schemaData}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides & Articles" },
        ]}
        eyebrow="San Jose Mechanical Insights"
        title="HVAC Guides & Energy Tips for Bay Area Homes"
        description="Objective, non-commissioned mechanical advice written by our master technicians. Learn how to optimize comfort, cut energy costs, and maximize rebate savings."
        primaryCta={{
          text: "Schedule Consultation",
          href: "/contact",
          icon: <BookOpen className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "(408) 320-3288",
          href: "tel:4083203288",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      <TrustBar />

      {/* Articles Grid */}
      <section className="py-8 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              Featured Articles & Resources
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Written to help Bay Area families make informed, mathematically sound decisions about their home comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-blue-950 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 text-xs text-slate-500">
                    <span className="font-bold text-blue-900 uppercase tracking-wider text-[10px] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">{article.date}</span>
                    <Link
                      to="/contact"
                      className="text-blue-950 font-bold hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Ask an Expert</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-2">
              Need Direct Advice for Your System?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-5">
              Skip the sales pitch. Schedule an engineered in-home walkthrough with one of our master technicians.
            </p>
            <Link
              to="/contact"
              className="bg-blue-950 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg hover:bg-blue-900 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Schedule Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <CTABand />
    </div>
  );
}
