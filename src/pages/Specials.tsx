import { Link } from "react-router-dom";
import { 
  Tag, Percent, Gift, Zap, ShieldCheck, Phone, ArrowRight,
  Clock, CheckCircle2, Sparkles
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { TrustBar } from "../components/TrustBar";
import { CTABand } from "../components/CTABand";
import { SEO } from "../components/SEO";

interface SpecialOffer {
  id: string;
  badge: string;
  title: string;
  discount: string;
  originalPrice?: string;
  description: string;
  code: string;
  validThru: string;
  terms: string;
  icon: typeof Tag;
}

const offers: SpecialOffer[] = [
  {
    id: "tuneup-89",
    badge: "Seasonal Tune-Up",
    title: "26-Point Precision Heating or AC Safety Inspection",
    discount: "$89",
    originalPrice: "$149 Value",
    description: "Ensure your heating or air conditioning system is running at peak thermodynamic efficiency and zero safety risk with our master technician comprehensive tune-up.",
    code: "TUNEUP89",
    validThru: "Limited Time Seasonal Offer",
    terms: "Residential single-system only. Cannot be combined with other diagnostic discounts.",
    icon: Sparkles
  },
  {
    id: "heatpump-500",
    badge: "System Replacement",
    title: "Instant Savings on High-Efficiency Heat Pump Installation",
    discount: "$500 OFF",
    description: "Upgrade from an outdated gas furnace and AC to an ultra-quiet, energy-efficient inverter heat pump. Stack this with up to $8,000+ in state and utility rebates.",
    code: "HEATPUMP500",
    validThru: "Valid Through End of Quarter",
    terms: "Valid on complete system replacements installed by ReamsHVAC.",
    icon: Percent
  },
  {
    id: "free-thermostat",
    badge: "Free Upgrade",
    title: "Free Smart Thermostat with Any Complete System Replacement",
    discount: "FREE",
    originalPrice: "$280 Value",
    description: "Receive a complimentary professionally installed Google Nest Learning Thermostat or Ecobee Smart Thermostat with your new HVAC system install.",
    code: "SMARTNEST",
    validThru: "Limited Time Promotion",
    terms: "Includes equipment and custom programming with new system install.",
    icon: Gift
  },
  {
    id: "repair-50",
    badge: "Repair Discount",
    title: "First-Time Customer Heating or AC Repair Savings",
    discount: "$50 OFF",
    description: "New to ReamsHVAC? Save $50 on any heating, heat pump, or air conditioning diagnostic repair of $300 or more.",
    code: "NEW50REPAIR",
    validThru: "Active For New Customers",
    terms: "Limit one per household. Mention code when booking appointment.",
    icon: Tag
  }
];

export function Specials() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    "name": "ReamsHVAC Seasonal Promotions & Coupons",
    "url": "https://reamshvac.com/specials",
    "description": "Seasonal coupons and discount offers for HVAC repair, heat pump installations, and maintenance tune-ups in San Jose, CA."
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="HVAC Coupons & Specials | San Jose Heating & AC Discounts | ReamsHVAC"
        description="Save on your heating and cooling: $89 tune-ups, $500 off heat pump retrofits, free smart thermostats, and rebate guidance up to $8,000."
        canonical="/specials"
        schema={schemaData}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Specials & Coupons" },
        ]}
        eyebrow="Exclusive Homeowner Discounts"
        title="HVAC Specials, Coupons & Rebates"
        description="Honest craftsmanship at unmatched value. Discover current seasonal promotions, equipment replacement discounts, and state rebate opportunities."
        primaryCta={{
          text: "Claim an Offer",
          href: "/contact",
          icon: <Tag className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "(408) 320-3288",
          href: "tel:4083203288",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      <TrustBar />

      {/* Rebates Banner */}
      <section className="py-6 sm:py-8 bg-blue-950 text-white border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">
                Claim Up to $8,000+ in California Heat Pump & Efficiency Rebates
              </p>
              <p className="text-xs text-blue-200">
                TECH Clean California, BayREN, and Federal 25C Tax Credits — we handle all the qualification paperwork.
              </p>
            </div>
          </div>
          <Link
            to="/financing-rebates"
            className="bg-white text-blue-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-md hover:bg-slate-100 transition-colors shrink-0 inline-flex items-center gap-1.5"
          >
            <span>Learn About Rebates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Coupons Grid */}
      <section className="py-8 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              Active Seasonal Promotions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Simply mention the coupon promo code when you schedule online or call our dispatch desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer) => {
              const Icon = offer.icon;
              return (
                <div
                  key={offer.id}
                  className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-blue-950 transition-colors relative flex flex-col justify-between"
                >
                  <div>
                    {/* Badge & Value */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-950 border border-blue-100">
                        {offer.badge}
                      </span>
                      <div className="text-right">
                        <span className="text-2xl sm:text-3xl font-black text-blue-950 block leading-tight">
                          {offer.discount}
                        </span>
                        {offer.originalPrice && (
                          <span className="text-[11px] text-slate-400 line-through">
                            {offer.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-2 leading-snug">
                      {offer.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {offer.description}
                    </p>
                  </div>

                  {/* Promo Code Box & Action */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-medium">Promo Code:</span>
                      <span className="font-mono text-xs font-bold bg-slate-100 text-blue-950 px-2.5 py-1 rounded border border-slate-200">
                        {offer.code}
                      </span>
                    </div>

                    <Link
                      to="/contact"
                      className="bg-blue-950 text-white font-bold text-xs px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors text-center inline-flex items-center justify-center gap-1"
                    >
                      <span>Redeem Offer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Fine Print */}
                  <p className="text-[10px] text-slate-400 mt-3 italic">
                    *{offer.terms} {offer.validThru}.
                  </p>
                </div>
              );
            })}
          </div>

          {/* Simple How to Redeem Section */}
          <div className="mt-12 max-w-3xl mx-auto bg-white border border-slate-200 rounded-xl p-6 text-center shadow-xs">
            <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-2">
              How to Redeem Your Savings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 mt-4">
              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="font-bold text-blue-950 block text-sm mb-1">1. Pick Your Special</span>
                Choose the coupon code that fits your maintenance, repair, or system upgrade needs.
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="font-bold text-blue-950 block text-sm mb-1">2. Book Walkthrough</span>
                Schedule online or call (408) 320-3288 and mention your promo code to our team.
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="font-bold text-blue-950 block text-sm mb-1">3. Instant Savings</span>
                Your technician immediately applies the discount to your written, itemized flat-rate quote.
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTABand />
    </div>
  );
}
