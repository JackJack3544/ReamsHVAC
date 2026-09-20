import { useState, useEffect } from "react";
import { 
  Phone, X, ChevronLeft, ChevronRight, 
  ZoomIn, ShieldCheck, Sparkles, Gauge, Layers, Wrench
} from "lucide-react";
import { SEO } from "../components/SEO";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
import { galleryItems, GalleryItem } from "../data/galleryData";

export function Gallery() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null = 
    activeItemIndex !== null ? galleryItems[activeItemIndex] : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (activeItemIndex === null) return;
      if (e.key === "Escape") {
        setActiveItemIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveItemIndex((prev) => 
          prev !== null ? (prev + 1) % galleryItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveItemIndex((prev) => 
          prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItemIndex]);

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
      "telephone": "(408) 320-3288",
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
        description="Explore real photos of our heat pump conversions, rooftop installations, and AC craftsmanship across the Bay Area. 100% authentic job-site photography."
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
        description="Every home is unique. Browse our photo gallery of heat pump conversions, rooftop installations, ductless mini-splits, and precision mechanical upgrades."
        primaryCta={{
          text: "Schedule Free Estimate",
          href: "/contact",
          icon: <Wrench className="w-5 h-5 text-blue-900" />
        }}
        secondaryCta={{
          text: "(408) 320-3288",
          href: "tel:4083203288",
          icon: <Phone className="w-5 h-5 text-white" />
        }}
      />

      {/* Main Gallery: Just Pictures */}
      <section className="py-8 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-900" />
              <span>100% Real Job-Site Photography</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
              Featured Installations &amp; Craftsmanship
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Tap any photo to view in high resolution.
            </p>
          </div>

          {/* Gallery Image Grid - Just Pictures (No text, no locations, no duplicates) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveItemIndex(index)}
                className="group relative rounded-xl overflow-hidden aspect-square sm:aspect-[4/3] bg-slate-200 shadow-xs border border-slate-200/80 hover:shadow-xl transition-all duration-300 cursor-pointer"
                title="View photo in high resolution"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/95 text-blue-950 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox / Modal View - Just the Picture */}
      {activeItem !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItemIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItemIndex(null)}
              aria-label="Close modal"
              className="absolute -top-12 right-0 sm:top-3 sm:right-3 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center cursor-pointer transition-colors shadow-lg border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Container */}
            <div className="relative overflow-hidden rounded-xl bg-slate-900 shadow-2xl flex items-center justify-center max-h-[85vh] w-full">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[85vh] max-w-full w-auto h-auto object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItemIndex((prev) => 
                    prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0
                  );
                }}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md border border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItemIndex((prev) => 
                    prev !== null ? (prev + 1) % galleryItems.length : 0
                  );
                }}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md border border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Counter */}
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-mono border border-white/15">
                {activeItemIndex !== null ? activeItemIndex + 1 : 1} / {galleryItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Craftsmanship Standards Section (Our Uncompromising Standards) */}
      <section className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-950 block mb-2">
              Our Uncompromising Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
              Why Every ReamsHVAC Installation Looks Different
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-3 leading-relaxed">
              Ninety percent of HVAC craftsmanship is invisible once covers are screwed on. We build every system to engineering standards that outlast the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-xs border border-slate-200">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-950 flex items-center justify-center mb-4 font-bold">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-2">Nitrogen-Purged Brazing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We continuously sweep inert dry nitrogen through copper line sets during brazing, preventing destructive copper oxidation flakes from damaging inverter valves.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-xs border border-slate-200">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-950 flex items-center justify-center mb-4 font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-2">Sub-500 Micron Evacuation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We measure with digital micron gauges to ensure non-condensable air and moisture are 100% evacuated before charging refrigerant, extending compressor life.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-xs border border-slate-200">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-950 flex items-center justify-center mb-4 font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-2">ACCA Manual J Sizing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero rule-of-thumb sizing. We run scientific heat gain/loss mathematical calculations taking into account your home's orientation, insulation, and window specs.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-xs border border-slate-200">
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

      {/* Call to Action Band (Schedule a Walkthrough) */}
      <CTABand />
    </div>
  );
}
