import { Phone, AlertTriangle, Clock, ShieldCheck, Wrench } from "lucide-react";
import { SEO } from "../components/SEO";

export function EmergencyLanding() {
  return (
    <div className="min-h-screen bg-red-600 flex flex-col font-sans text-white">
      <SEO
        title="24/7 Emergency HVAC Service San Jose | Immediate Dispatch | ReamsHVAC"
        description="Immediate 24/7 emergency HVAC repair dispatch across San Jose and the Bay Area. Heating outages, heatwave AC failures, and safety emergencies. Call 1-800-555-0199."
        canonical="/emergency"
      />
      {/* Ultra stripped-down header */}
      <header className="bg-white px-4 py-4 shadow-md flex justify-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Wrench className="h-8 w-8 text-blue-900" />
          <span className="font-extrabold text-2xl tracking-tight text-blue-900">
            ReamsHVAC
          </span>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="max-w-3xl w-full bg-white text-slate-900 rounded-xl shadow-2xl p-6 sm:p-12 text-center">
          
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-slate-900">
            Emergency HVAC Service
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-red-600 mb-8 flex items-center justify-center gap-2">
            <Clock className="w-6 h-6" /> Available 24/7/365 in the Bay Area
          </p>

          <a 
            href="tel:1-800-555-0199"
            className="block w-full bg-red-600 hover:bg-red-700 text-white text-2xl sm:text-4xl font-black py-6 rounded-lg shadow-lg mb-10 transition-transform active:scale-95"
          >
            <div className="flex items-center justify-center gap-4">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10" />
              1-800-555-0199
            </div>
            <span className="block text-sm sm:text-lg font-medium mt-2 opacity-90">Tap to Call Now</span>
          </a>

          <div className="grid sm:grid-cols-2 gap-8 text-left border-t border-slate-200 pt-8">
            <div>
              <h2 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-800">
                <AlertTriangle className="w-5 h-5 text-blue-600" /> Priority Emergency Conditions
              </h2>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Complete heating failure during cold nights</li>
                <li>• AC failure during extreme heatwaves</li>
                <li>• Strange burning smells from vents or units</li>
                <li>• Rapidly leaking water from indoor units</li>
                <li>• Unresponsive thermostat combined with extreme temps</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="w-5 h-5 text-blue-600" /> Immediate Safety Precautions
              </h2>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• If you smell gas, leave the house immediately and call PG&E.</li>
                <li>• If you smell burning electrical odors, turn off the breaker to the HVAC unit.</li>
                <li>• Do not attempt to repair refrigerant leaks yourself.</li>
                <li>• Clear a path to your indoor and outdoor units for the technician.</li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <footer className="text-center p-6 text-red-100 text-sm">
        <p>ReamsHVAC — Family Owned & Operated. Licensed, Insured & Guaranteed.</p>
      </footer>
    </div>
  );
}
