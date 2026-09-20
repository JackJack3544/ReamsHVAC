import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { TrustBar } from "../components/TrustBar";
import { CTABand } from "../components/CTABand";
import { ReviewsSection } from "../components/ReviewsSection";
import { SEO } from "../components/SEO";
import { getLocalBusinessSchema } from "../utils/seoSchemas";
import { ArrowRight, ArrowDown, ArrowUpRight, CheckCircle2, Phone, MapPin, Wrench, ShieldCheck, Zap, ThermometerSnowflake, Droplet, Star, AlertTriangle, Award, Shield, Clock, Banknote, Settings, ClipboardCheck, Globe, User, Mail, PenLine, ChevronDown, ChevronUp, Flame, Wind, Sparkles, Check, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "../data/galleryData";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "San Jose, CA",
    source: "Google",
    sourceColor: "text-blue-700 bg-blue-50 border-blue-100",
    text: `"Our furnace died right before Thanksgiving. The Reams team came out the same day, gave a fair quote, and installed the new unit beautifully."`
  },
  {
    name: "David & Elena R.",
    location: "Palo Alto, CA",
    source: "Yelp",
    sourceColor: "text-red-600 bg-red-50 border-red-100",
    text: `"Converted our whole house to Mitsubishi heat pumps. The crew was incredible and the rebate guidance saved us thousands."`
  },
  {
    name: "Michael T.",
    location: "Oakland, CA",
    source: "Google",
    sourceColor: "text-blue-700 bg-blue-50 border-blue-100",
    text: `"Best HVAC company in the East Bay. Honest, didn't try to upsell me on things I didn't need. Highly recommend their yearly maintenance plan."`
  },
  {
    name: "Jessica K.",
    location: "Santa Clara, CA",
    source: "Google",
    sourceColor: "text-blue-700 bg-blue-50 border-blue-100",
    text: `"Super fast response time! Our AC went out during the hottest week of the year and they had it fixed the next morning."`
  },
  {
    name: "Robert L.",
    location: "Sunnyvale, CA",
    source: "Yelp",
    sourceColor: "text-red-600 bg-red-50 border-red-100",
    text: `"Reams replaced all of our old ductwork and installed a smart thermostat. Airflow on the second floor is 100x better now!"`
  },
  {
    name: "Amanda W.",
    location: "Mountain View, CA",
    source: "Google",
    sourceColor: "text-blue-700 bg-blue-50 border-blue-100",
    text: `"Top tier customer service. Techs wore shoe covers inside, cleaned up everything after install, and explained how to use the system."`
  },
  {
    name: "James & Priya P.",
    location: "Fremont, CA",
    source: "Google",
    sourceColor: "text-blue-700 bg-blue-50 border-blue-100",
    text: `"Got quotes from 4 contractors. Reams had the best warranty, fair pricing, and highest attention to detail. 10/10 experience."`
  },
  {
    name: "Carlos M.",
    location: "Cupertino, CA",
    source: "Yelp",
    sourceColor: "text-red-600 bg-red-50 border-red-100",
    text: `"Emergency call on a Sunday afternoon for a leaking condensate line. They had a technician at my door in under 45 minutes!"`
  }
];

const STEPS = [
  {
    step: "01",
    title: "Schedule Online or Call",
    desc: "Book your appointment in seconds with guaranteed 2-hour arrival windows across the South Bay.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Thorough On-Site Inspection",
    desc: "An experienced technician diagnoses the issue and explains your options with clear, upfront pricing.",
    icon: Globe,
  },
  {
    step: "03",
    title: "Precision Craftsmanship",
    desc: "We complete the repair or install using factory parts and nitrogen-purged lines.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Airflow Testing & Guarantee",
    desc: "We verify static pressures on-site, backing all labor with our written 1-year guarantee.",
    icon: Award,
  },
];

const SERVICES_DATA = [
  {
    id: "heating",
    title: "Heating & Heat Pumps",
    icon: Flame,
    badge: "Heating & Furnace",
    subtitle: "Dependable furnace repairs, heat pump upgrades, and complete heating replacements for South Bay homes.",
    mobileSubtitle: "Furnace repairs and heat pump upgrades for South Bay homes.",
    highlights: ["San Jose Furnace Repair", "Cold-Climate Heat Pumps", "24/7 Emergency Heating"],
    description: "Fast furnace repairs and energy-saving heat pump upgrades to keep your home warm and cozy.",
    link: "/services/heat-pumps",
    actionLabel: "Heating Services",
    showArrow: true
  },
  {
    id: "cooling",
    title: "Air Conditioning & Cooling",
    icon: ThermometerSnowflake,
    badge: "AC & Cooling",
    subtitle: "Same-day AC diagnostics, ductless mini-splits, and high-SEER2 central cooling across Santa Clara County.",
    mobileSubtitle: "Same-day AC diagnostics and ductless mini-split installs.",
    highlights: ["Same-Day AC Diagnostics", "Ductless Mini-Split Installs", "High-Efficiency Central AC"],
    description: "Keep your home cool all summer long with quick diagnostics and dependable cooling service.",
    link: "/services/air-conditioning",
    actionLabel: "Cooling Services",
    showArrow: true
  },
  {
    id: "iaq",
    title: "Indoor Air Quality",
    icon: Wind,
    badge: "Air Quality",
    subtitle: "Hospital-grade MERV 13 filtration, active air purifiers, and sealed ductwork for cleaner breathing.",
    mobileSubtitle: "Hospital-grade filtration and whole-home air purifiers.",
    highlights: ["Wildfire Smoke Filtration", "Whole-Home Air Purifiers", "Duct Sealing & Testing"],
    description: "Shield your living space from seasonal Northern California wildfire smoke and allergens.",
    link: "/services/indoor-air-quality",
    actionLabel: "Air Quality",
    showArrow: true
  },
  {
    id: "maintenance",
    title: "Maintenance & Tune-Ups",
    icon: ShieldCheck,
    badge: "Preventative Care",
    subtitle: "Comprehensive 26-point seasonal safety inspections that prevent costly emergency breakdowns and cut electric bills.",
    mobileSubtitle: "26-point seasonal inspections to prevent breakdowns.",
    highlights: ["26-Point Safety Inspections", "Electrical & Coil Cleaning", "Priority Dispatch Guarantee"],
    description: "Protect compressor lifespan, maintain factory warranties, and reduce summer power consumption.",
    link: "/contact",
    actionLabel: "Schedule Tune-Up",
    showArrow: true
  },
  {
    id: "controls",
    title: "Smart Thermostats & Controls",
    icon: Zap,
    badge: "Energy Efficiency",
    subtitle: "Ecobee, Nest, and multi-zone climate automation calibrated for PG&E Time-of-Use rates.",
    highlights: ["Ecobee & Nest Install", "Multi-Zone Controls", "Remote Temperature Settings"],
    description: "Automate heating and cooling schedules to slash peak afternoon utility costs seamlessly.",
    link: "/services/smart-thermostats"
  },
  {
    id: "commercial",
    title: "Commercial & Custom HVAC",
    icon: Wrench,
    badge: "Business Solutions",
    subtitle: "Rooftop unit (RTU) replacements, multi-zone VRF systems, and planned commercial maintenance.",
    highlights: ["Rooftop Units (RTU)", "Commercial Maintenance", "Multi-Zone Systems"],
    description: "Reliable climate control engineered for South Bay offices, retail storefronts, and commercial facilities.",
    link: "/services"
  }
];

export function Home() {
  const [openService, setOpenService] = useState<string | null>("heating");
  const [estimateData, setEstimateData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [estimateSubmitted, setEstimateSubmitted] = useState(false);
  const [isSubmittingEstimate, setIsSubmittingEstimate] = useState(false);

  const handleEstimateSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmittingEstimate(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "free-estimate",
          ...estimateData,
        }).toString(),
      });
      setEstimateSubmitted(true);
    } catch (error) {
      console.error("Free estimate submission error:", error);
      setEstimateSubmitted(true);
    } finally {
      setIsSubmittingEstimate(false);
    }
  };

  const businessSchema = getLocalBusinessSchema();

  return (
    <div id="home-page" className="w-full overflow-x-hidden">
      <SEO
        title="ReamsHVAC - Heating, AC & Heat Pumps in San Jose & Bay Area"
        description="20 years of trusted HVAC service in San Jose & the Bay Area. Same-day AC repair, furnace maintenance, heat pump installations, and 24/7 emergency service."
        canonical="/"
        schema={businessSchema}
      />

      {/* 1. Hero Section */}
      <div id="home-hero">
        <PageHero
          breadcrumbs={[{ label: "Home" }]}
          eyebrow="Proudly serving the Bay Area since 2004"
          title={
            <span className="flex flex-col gap-0.5 sm:gap-1 items-center justify-center">
              <span className="block whitespace-nowrap">San Jose's HVAC Experts.</span>
              <span className="block whitespace-nowrap">20+ Years and Counting.</span>
            </span>
          }
          description={
            <>
              <span className="sm:hidden">
                20 years of honest, fast heating and cooling service for Bay Area families — same-day repairs, precision installs, and no surprises on the bill.
              </span>
              <span className="hidden sm:inline">
                For over 20 years, our family-owned team has delivered dependable, honest heating and cooling service across San Jose and the Bay Area — from same-day emergency repairs and high-efficiency heat pump installations to whole-home airflow optimization, with upfront flat-rate pricing and no surprises on the bill.
              </span>
            </>
          }
          primaryCta={{
            text: "Get a Quote",
            href: "/contact",
            icon: <Wrench className="w-5 h-5 text-blue-900" />,
          }}
          secondaryCta={{
            text: "1-800-555-0199",
            href: "tel:1-800-555-0199",
            icon: <Phone className="w-5 h-5 text-white" />,
          }}
        />
      </div>

      {/* 2. Why Choose Us (Scrolling Cards) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Left Column: Text */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start text-blue-950 font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-4">
                <Shield className="w-4 h-4 mr-2 text-blue-900" />
                The Reams Difference
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-950 mb-3 sm:mb-6 leading-tight text-center sm:text-left">
                San Jose HVAC Repair & Heat Pump Specialists
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 mb-6 md:mb-10 leading-relaxed text-center sm:text-left max-w-xl mx-auto sm:mx-0">
                Since 2004, our family-owned team has kept Santa Clara County homes comfortable with dependable repairs and honest care. We treat your home like our own—recommending only what your system truly needs, with straightforward pricing and guaranteed workmanship.
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100 bg-white p-3.5 sm:p-5 md:p-6 flex flex-col aspect-auto md:aspect-video">
                <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-3 sm:mb-4">Get a Free Estimate</h3>
                {estimateSubmitted ? (
                  <div className="text-center py-6 px-4 my-auto">
                    <div className="w-12 h-12 bg-blue-50 text-blue-950 rounded-full flex items-center justify-center mx-auto mb-2 border border-blue-200">
                      <CheckCircle2 className="w-6 h-6 text-blue-950" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-950 mb-1">Estimate Request Sent!</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mb-4">
                      Thank you, <strong>{estimateData.name || "valued homeowner"}</strong>. Our San Jose team will reach out shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setEstimateSubmitted(false);
                        setEstimateData({ name: "", phone: "", email: "", notes: "" });
                      }}
                      className="text-xs font-bold text-blue-950 underline hover:text-blue-800 cursor-pointer"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form
                    name="free-estimate"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleEstimateSubmit}
                    className="flex flex-col gap-2.5 sm:gap-3 flex-grow"
                    aria-label="Free estimate request form"
                  >
                    <input type="hidden" name="form-name" value="free-estimate" />
                    <p className="hidden">
                      <label>
                        Don’t fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>

                    <div className="flex flex-row gap-2 sm:gap-3">
                      <input 
                        type="text" 
                        id="estimate-name"
                        name="name"
                        required
                        aria-label="Your full name"
                        placeholder="Name" 
                        value={estimateData.name}
                        onChange={(e) => setEstimateData({ ...estimateData, name: e.target.value })}
                        className="w-full px-2.5 sm:px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-sm" 
                      />
                      <input 
                        type="tel" 
                        id="estimate-phone"
                        name="phone"
                        required
                        aria-label="Your phone number"
                        placeholder="Phone" 
                        value={estimateData.phone}
                        onChange={(e) => setEstimateData({ ...estimateData, phone: e.target.value })}
                        className="w-full px-2.5 sm:px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-sm" 
                      />
                    </div>
                    <input 
                      type="email" 
                      id="estimate-email"
                      name="email"
                      required
                      aria-label="Your email address"
                      placeholder="Email" 
                      value={estimateData.email}
                      onChange={(e) => setEstimateData({ ...estimateData, email: e.target.value })}
                      className="w-full px-2.5 sm:px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-sm" 
                    />
                    <textarea 
                      id="estimate-notes"
                      name="notes"
                      aria-label="How can we help you?"
                      placeholder="How can we help?" 
                      value={estimateData.notes}
                      onChange={(e) => setEstimateData({ ...estimateData, notes: e.target.value })}
                      className="w-full px-2.5 sm:px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-sm flex-grow resize-none min-h-[64px] sm:min-h-[72px]"
                    ></textarea>
                    <button 
                      type="submit" 
                      disabled={isSubmittingEstimate}
                      aria-label="Submit your free estimate request" 
                      className="bg-blue-900 text-white font-bold py-2.5 rounded-md hover:bg-blue-800 transition-colors w-full mt-1 text-sm sm:text-sm min-h-[40px] sm:min-h-[44px] flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmittingEstimate ? "SUBMITTING..." : "SUBMIT"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Scrolling Cards (Hidden on mobile) */}
            <div className="hidden sm:flex sm:h-[400px] lg:h-[500px] relative w-full overflow-hidden gap-4 lg:gap-6 justify-center mt-6 md:mt-10 lg:mt-0">
              {/* Fade masks */}
              <div className="absolute top-0 left-0 w-full h-12 sm:h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-12 sm:h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
              
              {/* Column 1 (Scrolls Up) */}
              <div className="flex-1 max-w-[145px] sm:max-w-[280px]">
                <div className="flex flex-col gap-2.5 sm:gap-4 animate-scroll-up">
                  {/* Duplicated 2 times for infinite scroll */}
                  {[...Array(2)].map((_, i) => (
                    <div key={`col1-${i}`} className="flex flex-col gap-2.5 sm:gap-4">
                      <div className="relative overflow-hidden bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow group">
                        <div className="absolute -right-4 -bottom-4 opacity-[0.07] text-blue-950 group-hover:opacity-[0.12] transition-opacity">
                          <Award className="w-16 h-16 sm:w-24 sm:h-24" />
                        </div>
                        <div className="relative z-10">
                          <div className="hidden sm:flex w-11 h-11 rounded-xl bg-blue-950/10 border border-blue-950/15 items-center justify-center mb-3.5 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-colors">
                            <Award className="w-5 h-5 stroke-[2.2]" />
                          </div>
                          <h3 className="font-bold text-blue-950 text-xs sm:text-base mb-1 sm:mb-2">Family-First Care</h3>
                          <p className="text-blue-900/60 text-[10px] sm:text-sm line-clamp-3 sm:line-clamp-none">We treat your home like our own, always prioritizing honest repairs over costly replacements.</p>
                        </div>
                      </div>
                      
                      <div className="relative overflow-hidden bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow group">
                        <div className="absolute -right-4 -bottom-4 opacity-[0.07] text-blue-950 group-hover:opacity-[0.12] transition-opacity">
                          <Settings className="w-16 h-16 sm:w-24 sm:h-24" />
                        </div>
                        <div className="relative z-10">
                          <div className="hidden sm:flex w-11 h-11 rounded-xl bg-blue-950/10 border border-blue-950/15 items-center justify-center mb-3.5 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-colors">
                            <Settings className="w-5 h-5 stroke-[2.2]" />
                          </div>
                          <h3 className="font-bold text-blue-950 text-xs sm:text-base mb-1 sm:mb-2">Carefully Sized Systems</h3>
                          <p className="text-blue-900/60 text-[10px] sm:text-sm line-clamp-3 sm:line-clamp-none">We take the time to evaluate your home's layout so your new system heats and cools evenly.</p>
                        </div>
                      </div>
                      
                      <div className="relative overflow-hidden bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow group">
                        <div className="absolute -right-4 -bottom-4 opacity-[0.07] text-blue-950 group-hover:opacity-[0.12] transition-opacity">
                          <ShieldCheck className="w-16 h-16 sm:w-24 sm:h-24" />
                        </div>
                        <div className="relative z-10">
                          <div className="hidden sm:flex w-11 h-11 rounded-xl bg-blue-950/10 border border-blue-950/15 items-center justify-center mb-3.5 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-colors">
                            <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                          </div>
                          <h3 className="font-bold text-blue-950 text-xs sm:text-base mb-1 sm:mb-2">Written Guarantees</h3>
                          <p className="text-blue-900/60 text-[10px] sm:text-sm line-clamp-3 sm:line-clamp-none">We back our work with trusted manufacturer warranties and our own 1-year labor guarantee.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 (Scrolls Down) */}
              <div className="flex flex-1 max-w-[145px] sm:max-w-[280px]">
                <div className="flex flex-col gap-2.5 sm:gap-4 animate-scroll-down">
                  {/* Duplicated 2 times for infinite scroll */}
                  {[...Array(2)].map((_, i) => (
                    <div key={`col2-${i}`} className="flex flex-col gap-2.5 sm:gap-4">
                      <div className="relative overflow-hidden bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow group">
                        <div className="absolute -right-4 -bottom-4 opacity-[0.07] text-blue-950 group-hover:opacity-[0.12] transition-opacity">
                          <Clock className="w-16 h-16 sm:w-24 sm:h-24" />
                        </div>
                        <div className="relative z-10">
                          <div className="hidden sm:flex w-11 h-11 rounded-xl bg-blue-950/10 border border-blue-950/15 items-center justify-center mb-3.5 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-colors">
                            <Clock className="w-5 h-5 stroke-[2.2]" />
                          </div>
                          <h3 className="font-bold text-blue-950 text-xs sm:text-base mb-1 sm:mb-2">Always Here to Help</h3>
                          <p className="text-blue-900/60 text-[10px] sm:text-sm line-clamp-3 sm:line-clamp-none">When heating or AC suddenly fails, our local team is ready to restore your home's comfort.</p>
                        </div>
                      </div>

                      <div className="relative overflow-hidden bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow group">
                        <div className="absolute -right-4 -bottom-4 opacity-[0.07] text-blue-950 group-hover:opacity-[0.12] transition-opacity">
                          <Zap className="w-16 h-16 sm:w-24 sm:h-24" />
                        </div>
                        <div className="relative z-10">
                          <div className="hidden sm:flex w-11 h-11 rounded-xl bg-blue-950/10 border border-blue-950/15 items-center justify-center mb-3.5 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-colors">
                            <Zap className="w-5 h-5 stroke-[2.2]" />
                          </div>
                          <h3 className="font-bold text-blue-950 text-xs sm:text-base mb-1 sm:mb-2">Rebate Guidance</h3>
                          <p className="text-blue-900/60 text-[10px] sm:text-sm line-clamp-3 sm:line-clamp-none">We help your family claim available local rebates on energy-saving heat pumps and ACs.</p>
                        </div>
                      </div>
                      
                      <div className="relative overflow-hidden bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow group">
                        <div className="absolute -right-4 -bottom-4 opacity-[0.07] text-blue-950 group-hover:opacity-[0.12] transition-opacity">
                          <Banknote className="w-16 h-16 sm:w-24 sm:h-24" />
                        </div>
                        <div className="relative z-10">
                          <div className="hidden sm:flex w-11 h-11 rounded-xl bg-blue-950/10 border border-blue-950/15 items-center justify-center mb-3.5 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-colors">
                            <Banknote className="w-5 h-5 stroke-[2.2]" />
                          </div>
                          <h3 className="font-bold text-blue-950 text-xs sm:text-base mb-1 sm:mb-2">Clear, Upfront Pricing</h3>
                          <p className="text-blue-900/60 text-[10px] sm:text-sm line-clamp-3 sm:line-clamp-none">No hidden fees or surprises. You always approve the straightforward price before work starts.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Showcase Section (Top 4 Services in 4-Column Grid) */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-slate-200/20">
        {/* Background image with neutral dark slate overlay */}
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-950/50 backdrop-blur-[2px]"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              SOUTH BAY HVAC SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-4 tracking-tight">
              Licensed Heating & Air Conditioning Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-3xl mx-auto leading-relaxed">
              Rapid diagnostics, code-compliant installations, and seasonal maintenance engineered for South Bay microclimates.
            </p>
          </div>

          {/* 4-Column Grid (Only Top 4 Services) - 2x2 grid on mobile downscaled */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {SERVICES_DATA.slice(0, 4).map((service) => {
              const ServiceIcon = service.icon;

              return (
                <div
                  key={service.id}
                  className="relative overflow-hidden bg-gradient-to-b from-white via-white/95 to-white/85 sm:bg-none sm:bg-white/95 backdrop-blur-md border-0 sm:border sm:border-white/40 rounded-xl p-3.5 sm:p-5 md:p-4 text-left shadow-lg sm:shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full min-h-[130px] sm:min-h-0 group"
                >
                  {/* Background Watermark Icon in Bottom Right */}
                  <div className="absolute -right-2 -bottom-2 text-blue-950 opacity-[0.25] group-hover:opacity-[0.38] transition-opacity pointer-events-none">
                    <ServiceIcon className="w-12 h-12 sm:w-20 sm:h-20" />
                  </div>

                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="font-bold text-blue-950 text-xs min-[360px]:text-[13px] sm:text-lg md:text-base tracking-tight whitespace-nowrap overflow-hidden text-ellipsis mb-1 sm:mb-2 md:mb-1.5 min-h-[16px] sm:min-h-0 flex items-center">
                      {service.title}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="text-slate-600 text-[10.5px] min-[360px]:text-[11.5px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed mb-1.5 sm:mb-3 md:mb-2.5 min-h-[30px] sm:min-h-0">
                      <span className="sm:hidden">{service.mobileSubtitle || service.subtitle}</span>
                      <span className="hidden sm:inline">{service.subtitle}</span>
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="relative z-10 pt-0.5 sm:pt-2 flex items-center justify-between mt-auto">
                    <Link
                      to={service.link}
                      className="min-h-0 md:min-h-0 inline-flex items-center gap-1 text-[11px] min-[360px]:text-xs sm:text-xs font-bold text-blue-950"
                    >
                      <span>{service.actionLabel || "Explore Service"}</span>
                      {service.showArrow !== false && (
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform text-blue-950 shrink-0" />
                      )}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout Buttons (Residential Focus) */}
          <div className="mt-8 md:mt-12 flex flex-row justify-center items-center gap-2 sm:gap-4 max-w-lg sm:max-w-none mx-auto">
            <Link
              to="/services/smart-thermostats"
              className="bg-white text-blue-950 px-2.5 sm:px-8 py-2.5 sm:py-4 rounded-md font-bold text-sm sm:text-lg hover:bg-slate-100 transition-colors flex-1 sm:flex-initial sm:w-auto shadow-lg inline-flex items-center justify-center gap-1 sm:gap-2 h-10 sm:h-auto min-h-[40px] sm:min-h-[48px] text-center [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5"
            >
              <span>Smart Thermostats</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              to="/services"
              className="bg-white/5 backdrop-blur-[2px] border border-white/20 text-white px-2.5 sm:px-8 py-2.5 sm:py-4 rounded-md font-bold text-sm sm:text-lg hover:bg-white/10 transition-colors flex-1 sm:flex-initial sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 h-10 sm:h-auto min-h-[40px] sm:min-h-[48px] text-center [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Our Work Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
            <div className="max-w-2xl text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-950 leading-tight mb-2 sm:mb-4">
                Recent Work in Local Homes
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600">
                A look at our installations across the South Bay—from quiet heat pumps and AC units to clean, efficient ductwork.
              </p>
            </div>
            <div className="flex flex-row gap-2 sm:gap-4 w-full sm:w-auto shrink-0">
              <Link 
                to="/gallery" 
                className="bg-blue-900 text-white font-bold px-2.5 sm:px-8 py-2.5 sm:py-4 rounded-md hover:bg-blue-800 transition-colors shadow-md inline-flex items-center justify-center shrink-0 flex-1 sm:flex-initial sm:w-auto text-sm sm:text-base h-10 sm:h-auto min-h-[40px] sm:min-h-[48px] text-center"
              >
                View Full Gallery
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 font-bold px-2.5 sm:px-8 py-2.5 sm:py-4 rounded-md hover:bg-slate-50 transition-colors shadow-md inline-flex items-center justify-center shrink-0 flex-1 sm:flex-initial sm:w-auto text-sm sm:text-base h-10 sm:h-auto min-h-[40px] sm:min-h-[48px] text-center"
              >
                Schedule Walkthrough
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {galleryItems.slice(0, 8).map((item, index) => (
              <Link
                to="/gallery"
                key={item.id}
                className={`group relative rounded-lg md:rounded-none overflow-hidden aspect-square sm:aspect-square md:aspect-[4/5] bg-slate-200 shadow-md border border-slate-200/80 block ${
                  index >= 4 ? "hidden sm:block" : ""
                }`}
                title={item.title}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 bg-gradient-to-t from-slate-950/85 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block mb-0.5">{item.location}</span>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-tight line-clamp-1">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Reviews Section */}
      <div className="home-reviews-wrapper">
        <ReviewsSection />
      </div>

      {/* 6. How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white text-blue-950 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-blue-950 font-bold tracking-widest uppercase mb-2 sm:mb-3 text-xs sm:text-sm">
              TRANSPARENT 4-STEP SERVICE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-2 sm:mb-4 tracking-tight">
              A Simple Worry-Free Process
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From your first phone call to the final walkthrough, our team treats your home with care—delivering reliable comfort, honest answers, and work done right.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12 relative">
            {STEPS.map((s, idx) => {
              const stepNumber = idx + 1;
              const isStaggered = idx % 2 === 1;
              return (
                <div 
                  key={s.step} 
                  className={`relative group transition-transform duration-300 ${
                    isStaggered ? "lg:translate-y-8 sm:translate-y-4" : ""
                  }`}
                >
                  <div className="h-full relative overflow-hidden bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    {/* Background Watermark Number 1, 2, 3, 4 (Subtle on all screens) */}
                    <div className="absolute right-1 -bottom-2 sm:-right-2 sm:-bottom-4 text-5xl sm:text-8xl font-black text-blue-950/[0.09] sm:text-blue-900/5 select-none pointer-events-none leading-none">
                      {stepNumber}
                    </div>

                    <div className="relative z-10">
                      {/* Step Number Badge (Hidden on mobile) */}
                      <div className="hidden sm:flex w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-950 text-white font-black text-xs sm:text-lg items-center justify-center shadow-xs mb-2.5 sm:mb-5">
                        {stepNumber}
                      </div>

                      <h3 className="text-sm sm:text-lg font-bold text-blue-950 mb-1 sm:mb-2.5">
                        {s.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-snug sm:leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Connecting simple arrows without circle frames */}
                  {idx < STEPS.length - 1 && (
                    <>
                      {/* Desktop simple arrow */}
                      <div className="hidden lg:flex absolute left-[calc(100%+24px)] -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 items-center justify-center pointer-events-none text-blue-900/40">
                        <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                      </div>

                      {/* Tablet gap simple arrows */}
                      {idx === 0 || idx === 2 ? (
                        <div className="hidden sm:flex lg:hidden absolute left-[calc(100%+16px)] -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 items-center justify-center text-blue-900/40">
                          <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                        </div>
                      ) : (
                        <div className="hidden sm:flex lg:hidden absolute left-1/2 -translate-x-1/2 top-[calc(100%+24px)] -translate-y-1/2 z-30 items-center justify-center text-blue-900/40">
                          <ArrowDown className="w-6 h-6 stroke-[2.5]" />
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Call to Action (Moved Above Service Area) */}
      <div className="home-cta-wrapper hidden sm:block">
        <CTABand />
      </div>

      {/* 8. Service Area Section with Interactive Map */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 text-blue-950 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Map & Dispatch Hub Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-0">
            {/* Map Column */}
            <div className="lg:col-span-7 bg-white p-2 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] bg-slate-100 overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=San%20Jose%2C%20CA%20Bay%20Area&t=&z=9&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="San Jose and Bay Area HVAC Service Area Map"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Regional List / Dispatch Cards Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="bg-white p-5 md:p-6 border border-slate-200 shadow-xs">
                <h3 className="font-extrabold text-blue-950 text-xl mb-1">
                  San Jose & South Bay
                </h3>
                <p className="text-sm md:text-xs text-slate-600 md:text-slate-500 mb-3 md:mb-4 leading-relaxed">
                  San Jose, Sunnyvale, Santa Clara, Palo Alto, Cupertino, Mountain View, Campbell, Milpitas, Los Gatos
                </p>
                <Link
                  to="/service-areas/south-bay"
                  className="min-h-[44px] md:min-h-0 inline-flex items-center gap-1.5 text-xs font-bold text-blue-950"
                >
                  <span>Explore South Bay Cities</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-950" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="bg-white p-2.5 sm:p-4 md:p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-blue-950 text-sm sm:text-base mb-0.5 sm:mb-1">East Bay</h4>
                    <p className="text-xs sm:text-xs text-slate-600 md:text-slate-500 mb-2 sm:mb-3 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      Oakland, Fremont, Hayward, Berkeley, Concord, Walnut Creek
                    </p>
                  </div>
                  <Link
                    to="/service-areas/east-bay"
                    className="min-h-0 md:min-h-0 inline-flex items-center gap-1 text-xs sm:text-xs font-bold text-blue-950 pt-1.5 sm:pt-2 border-t border-slate-100"
                  >
                    <span>View East Bay</span>
                    <ArrowRight className="w-3 h-3 text-blue-950" />
                  </Link>
                </div>

                <div className="bg-white p-2.5 sm:p-4 md:p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-blue-950 text-sm sm:text-base mb-0.5 sm:mb-1">Peninsula</h4>
                    <p className="text-xs sm:text-xs text-slate-600 md:text-slate-500 mb-2 sm:mb-3 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      San Mateo, Redwood City, Burlingame, Menlo Park, San Carlos
                    </p>
                  </div>
                  <Link
                    to="/service-areas/peninsula"
                    className="min-h-0 md:min-h-0 inline-flex items-center gap-1 text-xs sm:text-xs font-bold text-blue-950 pt-1.5 sm:pt-2 border-t border-slate-100"
                  >
                    <span>View Peninsula</span>
                    <ArrowRight className="w-3 h-3 text-blue-950" />
                  </Link>
                </div>

                <div className="bg-white p-2.5 sm:p-4 md:p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-blue-950 text-sm sm:text-base mb-0.5 sm:mb-1">San Francisco</h4>
                    <p className="text-xs sm:text-xs text-slate-600 md:text-slate-500 mb-2 sm:mb-3 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      Sunset, Richmond, Marina, Pacific Heights, SoMa, Mission
                    </p>
                  </div>
                  <Link
                    to="/service-areas/san-francisco"
                    className="min-h-0 md:min-h-0 inline-flex items-center gap-1 text-xs sm:text-xs font-bold text-blue-950 pt-1.5 sm:pt-2 border-t border-slate-100"
                  >
                    <span>View SF</span>
                    <ArrowRight className="w-3 h-3 text-blue-950" />
                  </Link>
                </div>

                <div className="bg-white p-2.5 sm:p-4 md:p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-blue-950 text-sm sm:text-base mb-0.5 sm:mb-1">North Bay</h4>
                    <p className="text-xs sm:text-xs text-slate-600 md:text-slate-500 mb-2 sm:mb-3 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      San Rafael, Novato, Petaluma, Santa Rosa, Vallejo, Napa
                    </p>
                  </div>
                  <Link
                    to="/service-areas/north-bay"
                    className="min-h-0 md:min-h-0 inline-flex items-center gap-1 text-xs sm:text-xs font-bold text-blue-950 pt-1.5 sm:pt-2 border-t border-slate-100"
                  >
                    <span>View North Bay</span>
                    <ArrowRight className="w-3 h-3 text-blue-950" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
