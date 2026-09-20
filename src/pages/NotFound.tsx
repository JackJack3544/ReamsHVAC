import { Link } from "react-router-dom";
import { Home, Phone, ArrowRight, Wrench, Search } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Page Not Found | ReamsHVAC San Jose"
        description="The page you requested could not be found. Return to ReamsHVAC homepage or contact our San Jose dispatch team."
        canonical="/404"
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "404 Not Found" },
        ]}
        eyebrow="404 Error"
        title="Page Not Found"
        description="The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us help you find what you need."
        primaryCta={{
          text: "Back to Home",
          href: "/",
          icon: <Home className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "1-800-555-0199",
          href: "tel:1-800-555-0199",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-950 mb-4">
            Looking for Heating, Heat Pump, or AC Services?
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Here are our most frequently visited pages across San Jose and the San Francisco Bay Area:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto mb-10">
            <Link
              to="/services"
              className="p-3.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-blue-950 font-semibold text-xs sm:text-sm flex items-center justify-between transition-colors"
            >
              <span>Explore All HVAC Services</span>
              <ArrowRight className="w-4 h-4 text-blue-900" />
            </Link>
            <Link
              to="/service-areas"
              className="p-3.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-blue-950 font-semibold text-xs sm:text-sm flex items-center justify-between transition-colors"
            >
              <span>Bay Area Service Areas</span>
              <ArrowRight className="w-4 h-4 text-blue-900" />
            </Link>
            <Link
              to="/gallery"
              className="p-3.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-blue-950 font-semibold text-xs sm:text-sm flex items-center justify-between transition-colors"
            >
              <span>Project Photo Gallery</span>
              <ArrowRight className="w-4 h-4 text-blue-900" />
            </Link>
            <Link
              to="/contact"
              className="p-3.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-blue-950 font-semibold text-xs sm:text-sm flex items-center justify-between transition-colors"
            >
              <span>Schedule Walkthrough</span>
              <ArrowRight className="w-4 h-4 text-blue-900" />
            </Link>
          </div>

          <p className="text-xs text-slate-500">
            Need urgent assistance? Call our 24/7 direct hotline at{" "}
            <a href="tel:1-800-555-0199" className="text-blue-900 font-bold hover:underline">
              1-800-555-0199
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
