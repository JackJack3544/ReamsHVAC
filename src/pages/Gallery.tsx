import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Wrench, Phone, MapPin, CheckCircle2, X, ChevronLeft, ChevronRight, 
  ZoomIn, ShieldCheck, Sparkles, ArrowRight, Gauge, Layers, Filter
} from "lucide-react";
import { SEO } from "../components/SEO";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
import { galleryItems, GalleryItem } from "../data/galleryData";

const CATEGORIES = [
  "All",
  "Heat Pumps",
  "AC & Condensers",
  "Mini-Splits",
  "Rooftop Systems"
] as const;

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const activeItem: GalleryItem | null = 
    activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (activeItemIndex === null) return;
      if (e.key === "Escape") {
        setActiveItemIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveItemIndex((prev) => 
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveItemIndex((prev) => 
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItemIndex, filteredItems.length]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItemIndex]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "ReamsHVAC Project Gallery | Real Bay Area Installations",
    "description": "Portfolio of authentic residential and commercial HVAC installations, heat pump retrofits, and AC maintenance completed by ReamsHVAC master technicians across the San Francisco Bay Area.",
    "url": "https://reamshvac.com/gallery",
    "publisher": {
      "@type": "HVACBusiness",
      "name": "ReamsHVAC",
      "telephone": "1-800-555-0199",
      "areaServed": "San Jose & San Francisco Bay Area",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Jose",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800" id="gallery-page">
      <SEO
        title="HVAC Project Gallery | Real Heat Pump & AC Installs | ReamsHVAC"
        description="Explore real photos of our heat pump conversions, ductless mini-splits, and AC installations across San Jose and the Bay Area. No stock photos—just authentic craftsmanship."
        canonical="/gallery"
        schema={schemaData}
      />

      {/* Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Project Gallery" }
        ]}
        eyebrow="Authentic Bay Area Craftsmanship"
        title="Our Work Across the Bay Area"
        description="Every home is unique. Browse our gallery of heat pump conversions, rooftop installations, ductless mini-splits, and precision mechanical upgrades completed by our non-commissioned master technicians."
        primaryCta={{
          text: "Schedule Free Estimate",
          href: "/contact",
          icon: <Wrench className="w-5 h-5 text-blue-900" />
        }}
        secondaryCta={{
          text: "1-800-555-0199",
          href: "tel:1-800-555-0199",
          icon: <Phone className="w-5 h-5 text-white" />
        }}
      />

      {/* Main Gallery Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-900" />
                <span>100% Real Job-Site Photography</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
                Featured Installations &amp; Service Projects
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Click any project image to view high-resolution details, equipment specifications, and mechanical notes.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center">
              {CATEGORIES.map((cat) => {
                const count = cat === "All" 
                  ? galleryItems.length 
                  : galleryItems.filter(i => i.category === cat).length;
                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setActiveItemIndex(null);
                    }}
                    className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "bg-blue-950 text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-blue-800 text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveItemIndex(index)}
                className="group relative rounded-lg overflow-hidden bg-slate-100 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={625}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-300"></div>

                  {/* Zoom Overlay Indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-blue-950 flex items-center justify-center shadow-md">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                        <MapPin className="w-3 h-3 text-blue-900 shrink-0" />
                        {item.location}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-950 border border-blue-100">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-blue-950 group-hover:text-blue-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {item.equipment}
                    </p>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-950 font-semibold">
                    <span>View Project Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-slate-300">
              <p className="text-slate-600 font-medium">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-3 text-sm text-blue-900 font-bold underline cursor-pointer"
              >
                Reset to All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox / Modal View */}
      {activeItem !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItemIndex(null)}
        >
          <div 
            className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col lg:flex-row max-h-[92vh] border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItemIndex(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-950 text-white flex items-center justify-center cursor-pointer transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Image Half */}
            <div className="relative flex-1 bg-slate-900 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[80vh] w-full h-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItemIndex((prev) => 
                    prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
                  );
                }}
                aria-label="Previous project photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItemIndex((prev) => 
                    prev !== null ? (prev + 1) % filteredItems.length : 0
                  );
                }}
                aria-label="Next project photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image index counter */}
              <div className="absolute bottom-3 left-3 bg-slate-950/75 px-2.5 py-1 rounded text-white text-xs font-mono">
                {activeItemIndex !== null ? activeItemIndex + 1 : 1} / {filteredItems.length}
              </div>
            </div>

            {/* Right/Details Sidebar */}
            <div className="w-full lg:w-96 p-5 sm:p-6 overflow-y-auto flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-100">
                    {activeItem.category}
                  </span>
                  <span className="text-slate-400 text-xs">•</span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-900" />
                    {activeItem.location}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-blue-950 leading-snug mb-3">
                  {activeItem.title}
                </h3>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Equipment Installed
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {activeItem.equipment}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Mechanical Notes &amp; Craftsmanship
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Title 24 HERS Verified &amp; Permitted</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Nitrogen-Purged Copper Line Brazing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Deep Sub-500 Micron Loop Evacuation</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col gap-2.5">
                <Link
                  to="/contact"
                  className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded-md text-sm text-center transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Request Similar Estimate</span>
                </Link>
                <a
                  href="tel:1-800-555-0199"
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 px-4 rounded-md text-xs text-center transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-900" />
                  <span>Speak with Technician (1-800-555-0199)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Craftsmanship Standards Section */}
      <section className="py-14 sm:py-18 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-950 block mb-2">
              Our Uncompromising Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
              Why Every ReamsHVAC Installation Looks Different
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Ninety percent of HVAC craftsmanship is invisible once covers are screwed on. We build every system to engineering standards that outlast the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-950 flex items-center justify-center mb-4 font-bold">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-2">Nitrogen-Purged Brazing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We continuously sweep inert dry nitrogen through copper line sets during brazing, preventing destructive copper oxidation flakes from damaging inverter valves.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-950 flex items-center justify-center mb-4 font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-2">Sub-500 Micron Evacuation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We measure with digital micron gauges to ensure non-condensable air and moisture are 100% evacuated before charging refrigerant, extending compressor life.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-950 flex items-center justify-center mb-4 font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-2">ACCA Manual J Sizing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero rule-of-thumb sizing. We run scientific heat gain/loss mathematical calculations taking into account your home's orientation, insulation, and window specs.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-950 flex items-center justify-center mb-4 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-2">White-Glove Home Reverence</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clean neoprene floor runners and fresh shoe covers on every job. We leave mechanical rooms and exterior yards cleaner than we found them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Band */}
      <CTABand />
    </div>
  );
}
