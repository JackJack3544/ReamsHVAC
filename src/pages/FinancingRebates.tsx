import { CTABand } from "../components/CTABand";
import { TrustBar } from "../components/TrustBar";
import { PageHero } from "../components/PageHero";
import { DollarSign, CheckCircle2, AlertCircle, ArrowRight, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function FinancingRebates() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "ReamsHVAC Heating and Cooling Financing and Rebates",
    "description": "0% APR HVAC financing plans and BayREN & TECH Clean California heat pump rebates in San Jose and Bay Area.",
    "provider": {
      "@type": "HVACBusiness",
      "name": "ReamsHVAC",
      "telephone": "(408) 320-3288",
      "license": "CA C-20 #1048291",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Jose",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div>
      <SEO
        title="HVAC Financing & Heat Pump Rebates in San Jose | ReamsHVAC"
        description="0% APR HVAC financing, TECH Clean California & BayREN heat pump rebates up to $8,000+. We file all rebate paperwork for you in San Jose & Bay Area."
        canonical="/financing-rebates"
        schema={schemaData}
      />
      {/* 1. Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Financing & Rebates" },
        ]}
        eyebrow="Flexible Payment Plans & Electrification Incentives"
        title="HVAC Financing & Heat Pump Rebates"
        description="Don't let budget constraints prevent you from achieving total home comfort. Between 0% APR financing and local BayREN and TECH Clean California heat pump rebates up to $8,000+, upgrading is seamless."
        primaryCta={{
          text: "Apply for Financing",
          href: "#apply",
          icon: <Banknote className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "Rebate Hotline: (408) 320-3288",
          href: "tel:4083203288",
          icon: <DollarSign className="w-5 h-5 text-white" />,
        }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1">
               <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Flexible Financing Options</h2>
               <p className="text-slate-600 mb-6 leading-relaxed">
                 We partner with leading home improvement lenders to offer competitive rates and flexible terms. Whether you need a small repair or a full-home heat pump retrofit, we have a plan that fits your monthly budget.
               </p>
               <div className="space-y-4 mb-8">
                 <div className="flex items-center p-4 bg-slate-50 border border-slate-200 rounded-lg">
                   <CheckCircle2 className="w-6 h-6 text-green-600 mr-4 shrink-0" />
                   <div>
                     <p className="font-bold text-slate-900">0% APR for up to 18 Months</p>
                     <p className="text-sm text-slate-600">On qualifying high-efficiency systems (with approved credit).</p>
                   </div>
                 </div>
                 <div className="flex items-center p-4 bg-slate-50 border border-slate-200 rounded-lg">
                   <CheckCircle2 className="w-6 h-6 text-green-600 mr-4 shrink-0" />
                   <div>
                     <p className="font-bold text-slate-900">Low Monthly Payment Plans</p>
                     <p className="text-sm text-slate-600">Extended terms up to 120 months for full system replacements.</p>
                   </div>
                 </div>
                 <div className="flex items-center p-4 bg-slate-50 border border-slate-200 rounded-lg">
                   <CheckCircle2 className="w-6 h-6 text-green-600 mr-4 shrink-0" />
                   <div>
                     <p className="font-bold text-slate-900">Fast Approvals</p>
                     <p className="text-sm text-slate-600">Apply online or via your technician's tablet and get an answer in minutes.</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="w-full md:w-1/3 bg-slate-100 rounded-xl p-8 border border-slate-200 text-center" id="apply">
                <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to apply?</h3>
                <p className="text-sm text-slate-600 mb-6">Checking your rate does not impact your credit score.</p>
                {/* Simulated apply button */}
                <button className="w-full bg-blue-900 text-white font-bold py-3 rounded hover:bg-blue-800 transition-colors">
                  Start Application
                </button>
             </div>
           </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 border-y border-blue-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Bay Area Electrification Rebates</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">California is heavily incentivizing the transition from gas furnaces to electric heat pumps. You can stack multiple rebates to save thousands.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-900 mb-2">TECH Clean California</h3>
              <p className="text-slate-600 text-sm mb-4">Statewide initiative to accelerate heat pump adoption. We are a certified TECH contractor, meaning we can instantly apply these rebates to your invoice.</p>
              <div className="bg-green-50 p-4 rounded text-green-800 font-bold">
                Potential Savings: Up to $1,000+
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-900 mb-2">BayREN Rebates</h3>
              <p className="text-slate-600 text-sm mb-4">The Bay Area Regional Energy Network offers massive incentives for fuel switching (replacing a gas furnace with a heat pump).</p>
              <div className="bg-blue-50 p-4 rounded text-blue-900 font-bold">
                Potential Savings: Up to $2,000+
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto bg-white p-6 rounded-lg border border-slate-200">
            <AlertCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-slate-700 font-medium">
              Don't want to deal with paperwork? You don't have to. <strong className="text-slate-900">ReamsHVAC handles all rebate applications on your behalf</strong>, ensuring you get the maximum possible incentive.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Does checking my financing rate affect my credit?</h3>
              <p className="text-slate-600 text-sm">No, our financing partners use a "soft pull" to show you pre-qualified rates. A hard inquiry is only performed if you formally accept the terms and proceed with the loan.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Can I stack TECH and BayREN rebates?</h3>
              <p className="text-slate-600 text-sm">Yes, in many cases, state and regional rebates can be stacked with federal tax credits (like the 25C credit) for maximum savings. Our technicians will outline exactly what you qualify for during your free assessment.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
