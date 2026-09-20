import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Star, ShieldCheck, CheckCircle2, Award, Phone, ArrowRight,
  ExternalLink, ThumbsUp, MapPin, Filter
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { TrustBar } from "../components/TrustBar";
import { CTABand } from "../components/CTABand";
import { SEO } from "../components/SEO";

interface ReviewItem {
  id: string;
  name: string;
  city: string;
  category: "Heat Pumps" | "AC & Cooling" | "Furnace & Heating" | "General Service";
  rating: number;
  date: string;
  source: "Google Review" | "Yelp Verified" | "Angi Super Service";
  title: string;
  comment: string;
  serviceType: string;
}

const allReviews: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Jennifer W.",
    city: "San Jose, CA (Willow Glen)",
    category: "Furnace & Heating",
    rating: 5,
    date: "2 weeks ago",
    source: "Google Review",
    title: "No sales pressure, just diagnostic truth",
    comment: "ReamsHVAC technician arrived promptly on time, diagnosed a failed inducer draft motor on our 14-year-old furnace honestly, and gave us the exact OEM replacement price upfront. Two other companies told us the entire furnace was condemned and demanded $14,000 for a replacement. Reams had us warm again for a fraction of that. Honest craftsmanship is rare these days.",
    serviceType: "Furnace Repair & Safety Inspection"
  },
  {
    id: "rev-2",
    name: "Marcus T.",
    city: "Palo Alto, CA",
    category: "Heat Pumps",
    rating: 5,
    date: "1 month ago",
    source: "Yelp Verified",
    title: "Proper Manual J load calculation and immaculate heat pump install",
    comment: "Asked four contractors to size our whole-home heat pump electrification. Three gave tonnage numbers off the top of their heads based solely on square footage. ReamsHVAC performed a comprehensive Manual J room-by-room load calculation and explained why an inverter heat pump needed proper duct sizing. The Mitsubishi system runs whisper-quiet and our electric bill dropped 30%.",
    serviceType: "Whole-Home Inverter Heat Pump Conversion"
  },
  {
    id: "rev-3",
    name: "Michelle K.",
    city: "Santa Clara, CA",
    category: "AC & Cooling",
    rating: 5,
    date: "3 weeks ago",
    source: "Google Review",
    title: "Fast diagnosis and crystal clear communication",
    comment: "Booking was effortless and their dispatch followed up within 20 minutes. The technician walked me through the diagnostic process before touching any wiring, tested the dual-run capacitor right in front of me with a digital multimeter, and replaced it from his truck stock in under an hour. Fair pricing and exceptional professionalism.",
    serviceType: "Central AC Diagnostic & Capacitor Replacement"
  },
  {
    id: "rev-4",
    name: "Derek P.",
    city: "Sunnyvale, CA",
    category: "Furnace & Heating",
    rating: 5,
    date: "1 month ago",
    source: "Google Review",
    title: "Saturday morning emergency response was outstanding",
    comment: "Called at 7am on a chilly Saturday when our blower motor started squealing and shut down. They dispatched a technician who arrived before 9:30am. Fixed the motor bearings, cleaned the flame sensor, and tested carbon monoxide safety levels before leaving. Back up and heating before noon. Could not ask for better service.",
    serviceType: "Emergency Heating Diagnostics & Blower Service"
  },
  {
    id: "rev-5",
    name: "David & Sarah B.",
    city: "Los Gatos, CA",
    category: "Heat Pumps",
    rating: 5,
    date: "2 months ago",
    source: "Angi Super Service",
    title: "Seamless BayREN & TECH Clean California rebate processing",
    comment: "We replaced our aging 1990s gas furnace and noisy AC with a multi-zone heat pump system. ReamsHVAC handled the city permits, HERS duct testing, and all paperwork for our $4,500 in state and utility rebates. The technicians treated our hardwood floors with clean drop cloths and shoe covers every single day.",
    serviceType: "Heat Pump Retrofit with Title 24 HERS Testing"
  },
  {
    id: "rev-6",
    name: "Robert M.",
    city: "San Jose, CA (Almaden Valley)",
    category: "General Service",
    rating: 5,
    date: "2 months ago",
    source: "Google Review",
    title: "Passed city permit and HERS inspection on the first visit",
    comment: "ReamsHVAC replaced our old HVAC ductwork and installed a high-efficiency system. The City of San Jose building inspector noted on his clipboard that the sheet metal mastic work and duct strapping were among the cleanest he had seen in months. Passed inspection on the first attempt.",
    serviceType: "Ductwork Replacement & Static Pressure Tuning"
  },
  {
    id: "rev-7",
    name: "Elena G.",
    city: "Fremont, CA",
    category: "AC & Cooling",
    rating: 5,
    date: "3 months ago",
    source: "Google Review",
    title: "Rescued us in the middle of a 100-degree July heatwave",
    comment: "When our AC stopped cooling during a triple-digit heatwave, Reams dispatched a technician the same afternoon. He found a refrigerant leak at a Schrader valve, evacuated the system, repaired the valve, pressure-tested with nitrogen, and recharged with pure R-410A. Cold air was blowing within two hours.",
    serviceType: "AC Refrigerant Leak Repair & Recharging"
  },
  {
    id: "rev-8",
    name: "Brian S.",
    city: "Campbell, CA",
    category: "General Service",
    rating: 5,
    date: "3 months ago",
    source: "Yelp Verified",
    title: "Seasonal maintenance plan has paid for itself twice over",
    comment: "We joined their annual maintenance plan two years ago. The bi-annual 26-point tune-up caught a worn contactor and a cracked drain pan before either caused water damage or mid-summer breakdown. The peace of mind alone is worth every dollar.",
    serviceType: "Preventative HVAC Maintenance & Coil Cleaning"
  },
  {
    id: "rev-9",
    name: "Kenneth Y.",
    city: "Cupertino, CA",
    category: "Heat Pumps",
    rating: 5,
    date: "4 months ago",
    source: "Google Review",
    title: "Quiet ductless mini-split installation in our home office",
    comment: "Needed efficient heating and cooling for a converted garage office without running new ducts. ReamsHVAC installed a Mitsubishi Hyper-Heating mini-split. The indoor head is so quiet you can barely hear it running on Zoom calls, and it keeps the temperature within 1 degree consistently.",
    serviceType: "Mitsubishi Mini-Split Single-Zone Install"
  },
  {
    id: "rev-10",
    name: "Amanda L.",
    city: "Mountain View, CA",
    category: "AC & Cooling",
    rating: 5,
    date: "4 months ago",
    source: "Google Review",
    title: "Upfront pricing with zero hidden charges",
    comment: "The quote they gave over the phone and confirmed in writing after the initial walkthrough was the exact dollar amount on the final invoice. No travel surcharges, no surprise fees. Truly refreshing honest local business.",
    serviceType: "Central Air Conditioning Tune-Up"
  }
];

export function Reviews() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Heat Pumps", "AC & Cooling", "Furnace & Heating", "General Service"];

  const filteredReviews = selectedCategory === "All"
    ? allReviews
    : allReviews.filter(r => r.category === selectedCategory);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "ReamsHVAC Customer Reviews",
    "telephone": "1-800-555-0199",
    "url": "https://reamshvac.com/reviews",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "520",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": allReviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": r.comment,
      "datePublished": r.date
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Customer Reviews | 4.9 Stars on Google & Yelp | ReamsHVAC"
        description="Read authentic verified homeowner reviews for ReamsHVAC. 500+ 5-star ratings across San Jose, Santa Clara, Sunnyvale, and the Bay Area."
        canonical="/reviews"
        schema={schemaData}
      />

      {/* Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Customer Reviews" },
        ]}
        eyebrow="Verified Bay Area Homeowner Feedback"
        title="What Our Customers Say About ReamsHVAC"
        description="For over 20 years, our family-owned business has prioritized honest repairs, precision engineering, and clear upfront pricing. Here is what your neighbors say about our work."
        primaryCta={{
          text: "Schedule Service",
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

      {/* Trust & Aggregate Rating Summary */}
      <section className="py-8 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Box */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-xs">
              <span className="text-4xl sm:text-6xl font-black text-blue-950 block tracking-tight mb-2">4.9</span>
              <div className="flex justify-center text-amber-400 gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-700">Based on 520+ Verified Reviews</p>
              <p className="text-xs text-slate-500 mt-1">Across Google, Yelp, and Angi</p>
              <div className="mt-5 pt-5 border-t border-slate-200/80 flex justify-around text-xs font-semibold text-slate-600">
                <span>98% Recommended</span>
                <span>•</span>
                <span>20+ Years Trusted</span>
              </div>
            </div>

            {/* Middle Trust Highlights */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                Our Non-Commissioned Master Technician Difference
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Unlike corporate rollups where technicians receive sales commissions to replace salvageable furnaces and air conditioners, ReamsHVAC technicians are hourly, salaried professionals. Our reviews reflect true diagnostic honesty, precision load calculations, and respectful in-home service.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-blue-950">Zero Sales Quotas or Upcharge Pressure</span>
                </div>
                <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-blue-950">Written Itemized Flat-Rate Pricing</span>
                </div>
                <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-blue-950">100% Workmanship & Labor Guarantee</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Filter & List Section */}
      <section className="py-8 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Category Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
                Real Stories from Real Bay Area Homes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Showing {filteredReviews.length} verified testimonials
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-blue-950 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredReviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Top line: stars + source */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                      {rev.source}
                    </span>
                  </div>

                  {/* Review Title */}
                  <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-2 leading-snug">
                    "{rev.title}"
                  </h3>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {rev.comment}
                  </p>
                </div>

                {/* Bottom Metadata */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-500">
                  <div>
                    <strong className="text-blue-950 font-bold block">{rev.name}</strong>
                    <span className="inline-flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-blue-900 shrink-0" />
                      {rev.city}
                    </span>
                  </div>
                  <div className="sm:text-right mt-1 sm:mt-0 text-[11px]">
                    <span className="text-blue-900 font-medium block">{rev.serviceType}</span>
                    <span className="text-slate-400">{rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Book or Call Prompt */}
          <div className="mt-10 sm:mt-14 max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-2">
              Ready for Honest HVAC Service You Can Trust?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-md mx-auto">
              Schedule a comprehensive walkthrough or speak directly with our San Jose dispatch team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="bg-blue-950 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-blue-900 transition-colors text-xs sm:text-sm inline-flex items-center justify-center gap-1.5"
              >
                <span>Schedule Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:1-800-555-0199"
                className="bg-slate-100 text-blue-950 font-bold px-6 py-2.5 rounded-lg hover:bg-slate-200 transition-colors text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call 1-800-555-0199</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <CTABand />
    </div>
  );
}
