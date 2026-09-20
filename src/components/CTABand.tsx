import { Phone, ArrowRight, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function CTABand() {
  return (
    <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 overflow-hidden border-t border-slate-200/20">
      {/* Background image with dark slate overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 z-10 bg-slate-950/75 backdrop-blur-[2px]"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-4">
          Schedule a Walkthrough
        </h2>

        {/* Subtitle */}
        <p className="text-slate-100 text-xs sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed font-normal px-2">
          Whether you need a quick repair, a seasonal tune-up, or a new heating and cooling system, our friendly team is ready to help with honest advice and clear, upfront pricing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2.5 sm:gap-6 mb-6 sm:mb-12 max-w-xs sm:max-w-none mx-auto">
          <Link
            to="/contact"
            className="bg-white text-blue-950 font-bold text-xs sm:text-lg px-5 sm:px-8 py-3 sm:py-4 rounded-md sm:rounded-none hover:bg-slate-100 transition-colors flex-initial sm:w-auto shadow-lg inline-flex items-center justify-center gap-1.5 sm:gap-2 h-11 sm:h-auto min-h-[44px] sm:min-h-[52px] text-center [&>svg]:w-4 sm:[&>svg]:w-5"
          >
            <span>Schedule Walkthrough</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>

          <a
            href="tel:4083203288"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-xs sm:text-lg px-5 sm:px-8 py-3 sm:py-4 rounded-md sm:rounded-none hover:bg-white/20 transition-colors flex-initial sm:w-auto shadow-sm inline-flex items-center justify-center gap-2 sm:gap-2.5 h-11 sm:h-auto min-h-[44px] sm:min-h-[52px] text-center [&>svg]:w-4 sm:[&>svg]:w-5"
          >
            <Phone className="hidden sm:inline-flex w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span>(408) 320-3288</span>
          </a>
        </div>

        {/* Trust Badges Bar (Hidden on mobile) */}
        <div className="hidden sm:flex sm:justify-center sm:items-center pt-8 border-t border-white/15 gap-8 text-center text-sm text-slate-200">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span className="leading-tight">100% Workmanship Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white shrink-0" />
            <span className="leading-tight">Upfront, Honest Pricing</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-white shrink-0" />
            <span className="leading-tight">Licensed C-20 #1048291</span>
          </div>
        </div>
      </div>
    </section>
  );
}

