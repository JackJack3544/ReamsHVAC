import { ShieldCheck, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

function TrustPoints({ isFrosted }: { isFrosted: boolean }) {
  return (
    <div className="flex items-center gap-7 px-4 shrink-0">
      <div className="flex items-center gap-2 shrink-0">
        <div className="flex text-yellow-400">
          <Star className="fill-current w-3 h-3" />
          <Star className="fill-current w-3 h-3" />
          <Star className="fill-current w-3 h-3" />
          <Star className="fill-current w-3 h-3" />
          <Star className="fill-current w-3 h-3" />
        </div>
        <div>
          <p className={`text-[11px] font-bold ${isFrosted ? "text-white" : "text-slate-800"}`}>4.9/5 Average Rating</p>
          <Link to="/reviews" className={`text-[9.5px] ${isFrosted ? "text-blue-200 hover:text-white" : "text-blue-600"} hover:underline`}>Read our 500+ reviews</Link>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className={`${isFrosted ? "bg-white/20 text-white" : "bg-blue-100 text-blue-900"} p-1 rounded-full`}>
          <Award className="w-3 h-3" />
        </div>
        <div>
          <p className={`text-[11px] font-bold ${isFrosted ? "text-white" : "text-slate-800"}`}>20+ Years in the Trade</p>
          <p className={`text-[9.5px] ${isFrosted ? "text-slate-200" : "text-slate-500"}`}>Family owned & operated</p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className={`${isFrosted ? "bg-white/20 text-white" : "bg-blue-100 text-blue-900"} p-1 rounded-full`}>
          <ShieldCheck className="w-3 h-3" />
        </div>
        <div>
          <p className={`text-[11px] font-bold ${isFrosted ? "text-white" : "text-slate-800"}`}>Licensed, Insured & Guaranteed</p>
          <Link to="/licensing-insurance-guarantee" className={`text-[9.5px] ${isFrosted ? "text-blue-200 hover:text-white" : "text-blue-600"} hover:underline`}>View credentials</Link>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="flex flex-col">
          <p className={`text-[9.5px] font-bold ${isFrosted ? "text-white" : "text-slate-800"} uppercase tracking-wider mb-0.5`}>Authorized Dealer</p>
          <div className="flex gap-1.5">
            <span className={`text-[8.5px] font-bold ${isFrosted ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"} px-1.5 py-0.5 rounded`}>MITSUBISHI</span>
            <span className={`text-[8.5px] font-bold ${isFrosted ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"} px-1.5 py-0.5 rounded`}>MIDEA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrustBar({ variant = "light", className = "" }: { variant?: "light" | "frosted", className?: string }) {
  const isFrosted = variant === "frosted";

  return (
    <section className={`${isFrosted ? "bg-white/5 backdrop-blur-[2px] border-t border-white/20" : "bg-slate-50 border-b border-slate-200"} py-2.5 sm:py-3 md:py-6 ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-0 md:px-6 lg:px-8">
        
        {/* Mobile Constantly Scrolling Ticker (< md: 768px) */}
        <div className="flex md:hidden overflow-hidden w-full select-none items-center">
          <div className="flex shrink-0 items-center animate-ticker whitespace-nowrap">
            <TrustPoints isFrosted={isFrosted} />
          </div>
          <div className="flex shrink-0 items-center animate-ticker whitespace-nowrap" aria-hidden="true">
            <TrustPoints isFrosted={isFrosted} />
          </div>
        </div>

        {/* Desktop View (>= md: 768px): Original 4-point row layout */}
        <div className="hidden md:flex flex-row justify-between items-center gap-6 text-left py-1">
          
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex text-yellow-400">
              <Star className="fill-current w-3.5 h-3.5 sm:w-5 sm:h-5" />
              <Star className="fill-current w-3.5 h-3.5 sm:w-5 sm:h-5" />
              <Star className="fill-current w-3.5 h-3.5 sm:w-5 sm:h-5" />
              <Star className="fill-current w-3.5 h-3.5 sm:w-5 sm:h-5" />
              <Star className="fill-current w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className={`text-xs sm:text-sm font-bold ${isFrosted ? "text-white" : "text-slate-800"}`}>4.9/5 Average Rating</p>
              <Link to="/reviews" className={`text-[10px] sm:text-xs ${isFrosted ? "text-blue-200 hover:text-white" : "text-blue-600"} hover:underline`}>Read our 500+ reviews</Link>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className={`${isFrosted ? "bg-white/20 text-white" : "bg-blue-100 text-blue-900"} p-1.5 sm:p-2 rounded-full`}>
              <Award className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className={`text-xs sm:text-sm font-bold ${isFrosted ? "text-white" : "text-slate-800"}`}>20+ Years in the Trade</p>
              <p className={`text-[10px] sm:text-xs ${isFrosted ? "text-slate-200" : "text-slate-500"}`}>Family owned & operated</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className={`${isFrosted ? "bg-white/20 text-white" : "bg-blue-100 text-blue-900"} p-1.5 sm:p-2 rounded-full`}>
              <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className={`text-xs sm:text-sm font-bold ${isFrosted ? "text-white" : "text-slate-800"}`}>Licensed, Insured & Guaranteed</p>
              <Link to="/licensing-insurance-guarantee" className={`text-[10px] sm:text-xs ${isFrosted ? "text-blue-200 hover:text-white" : "text-blue-600"} hover:underline`}>View credentials</Link>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex flex-col">
              <p className={`text-[10px] sm:text-xs font-bold ${isFrosted ? "text-white" : "text-slate-800"} uppercase tracking-wider mb-1`}>Authorized Dealer</p>
              <div className="flex gap-1.5 sm:gap-2">
                 <span className={`text-[9px] sm:text-[10px] font-bold ${isFrosted ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"} px-1.5 sm:px-2 py-0.5 rounded`}>MITSUBISHI</span>
                 <span className={`text-[9px] sm:text-[10px] font-bold ${isFrosted ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"} px-1.5 sm:px-2 py-0.5 rounded`}>MIDEA</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
