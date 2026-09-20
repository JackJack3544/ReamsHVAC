import React, { useState, useRef } from 'react';
import { Star } from 'lucide-react';

export interface ReviewItem {
  name: string;
  location?: string;
  city?: string;
  neighborhood?: string;
  source?: string;
  comment?: string;
  text?: string;
}

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  reviews?: ReviewItem[];
  bgImage?: string;
}

export const DEFAULT_BAY_AREA_REVIEWS: ReviewItem[] = [
  {
    name: "David L.",
    city: "San Jose, CA",
    location: "San Jose, CA",
    source: "Google Review",
    comment: "Reams arrived within 90 minutes when our AC failed during a 98° San Jose heatwave. Salaried technician diagnosed a blown capacitor and restored cooling immediately.",
    text: "Reams arrived within 90 minutes when our AC failed during a 98° San Jose heatwave. Salaried technician diagnosed a blown capacitor and restored cooling immediately."
  },
  {
    name: "Claire T.",
    city: "Palo Alto, CA",
    location: "Palo Alto, CA",
    source: "Yelp Verified",
    comment: "Replaced our failing gas furnace with a Mitsubishi inverter heat pump. Reams handled all City of Palo Alto permits and TECH California rebates without a hitch.",
    text: "Replaced our failing gas furnace with a Mitsubishi inverter heat pump. Reams handled all City of Palo Alto permits and TECH California rebates without a hitch."
  },
  {
    name: "Kenneth R.",
    city: "Fremont, CA",
    location: "Fremont, CA",
    source: "Google Review",
    comment: "Flawless multi-zone mini split installation for our home addition in Fremont. Quiet operation, spotless cleanup, and our first electric bill dropped by 30 percent.",
    text: "Flawless multi-zone mini split installation for our home addition in Fremont. Quiet operation, spotless cleanup, and our first electric bill dropped by 30 percent."
  }
];

export function ReviewsSection({
  title = "South Bay Customer Reviews",
  subtitle = "4.9-Star Rating Across 500+ Verified San Jose & Bay Area Homeowners",
  reviews = DEFAULT_BAY_AREA_REVIEWS,
  bgImage = "https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png"
}: ReviewsSectionProps) {
  const displayReviews = reviews && reviews.length > 0 ? reviews : DEFAULT_BAY_AREA_REVIEWS;
  const [activeReview, setActiveReview] = useState(0);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!reviewsRef.current) return;
    const { scrollLeft, clientWidth } = reviewsRef.current;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / clientWidth);
      setActiveReview(Math.min(Math.max(0, index), displayReviews.slice(0, 3).length - 1));
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "ReamsHVAC",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "524",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": displayReviews.map(r => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": r.comment || r.text || ""
    }))
  };

  return (
    <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden text-white border-b border-slate-800" aria-label="Customer reviews and ratings">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      ></div>
      <div className="absolute inset-0 z-10 bg-slate-950/25 backdrop-blur-xs"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight">
            {title}
          </h2>
          <p className="font-bold text-slate-200 text-xs sm:text-base max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div 
          ref={reviewsRef}
          onScroll={handleScroll}
          className="flex md:grid flex-row md:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-4 md:gap-10 mb-4 sm:mb-8 md:mb-12 text-left no-scrollbar snap-x snap-mandatory py-1 px-1"
        >
          {displayReviews.slice(0, 3).map((review, idx) => {
            const quoteText = review.comment || review.text || "";
            const locationText = review.city || review.location || review.neighborhood || "Bay Area, CA";
            const sourceBadge = review.source || "Google Review";

            return (
              <div
                key={idx}
                className="flex flex-col justify-between py-2 border-l border-white/15 pl-4 sm:pl-8 w-full min-w-full md:w-auto md:min-w-0 md:max-w-none shrink-0 md:shrink snap-start"
              >
                <div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-white italic text-xs sm:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
                    "{quoteText.replace(/^["']|["']$/g, '')}"
                  </blockquote>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div>
                    <h3 className="font-bold text-white text-xs sm:text-base">{review.name}</h3>
                    <p className="text-[10px] sm:text-xs text-slate-300">{locationText}</p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-white">Verified Customer</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Dot Indicators */}
        <div className="flex md:hidden justify-center items-center gap-2 mb-2">
          {displayReviews.slice(0, 3).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (reviewsRef.current) {
                  reviewsRef.current.scrollTo({
                    left: idx * reviewsRef.current.clientWidth,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeReview === idx ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
