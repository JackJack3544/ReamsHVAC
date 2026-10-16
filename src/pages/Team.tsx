import { Link } from "react-router-dom";
import { 
  Users, Award, ShieldCheck, CheckCircle2, Phone, ArrowRight,
  Wrench, HeartHandshake, FileCheck, Sparkles, Shield
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { TrustBar } from "../components/TrustBar";
import { CTABand } from "../components/CTABand";
import { SEO } from "../components/SEO";

export function Team() {
  const values = [
    {
      title: "Non-Commissioned Diagnostic Integrity",
      desc: "Every technician is paid an honest hourly salary. Because they receive zero commission on equipment or part sales, their diagnosis is always 100% truthful and objective.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-900" />
    },
    {
      title: "EPA Universal & Factory Certified",
      desc: "All technicians hold EPA Section 608 Universal credentials and complete ongoing manufacturer training on inverter heat pumps, VRF, and gas furnaces.",
      icon: <Award className="w-6 h-6 text-blue-900" />
    },
    {
      title: "Vetted & Background-Checked",
      desc: "We respect your private sanctuary. Every team member undergoes rigorous background vetting, drug screenings, and ongoing safety protocol training.",
      icon: <HeartHandshake className="w-6 h-6 text-blue-900" />
    },
    {
      title: "Precision Sizing & Engineering",
      desc: "Our installers don't guess with 'rules of thumb.' We compute Manual J heat load calculations, static duct pressure, and Title 24 compliance on every project.",
      icon: <Wrench className="w-6 h-6 text-blue-900" />
    }
  ];

  const roles = [
    {
      title: "Master Diagnostic Technicians",
      badge: "Diagnostic Truth",
      desc: "Dedicated to mechanical troubleshooting. Equipped with digital micron gauges, combustion analyzers, and OEM diagnostic interfaces to diagnose and repair your system without sales pressure."
    },
    {
      title: "Inverter & Heat Pump Specialists",
      badge: "Electrification",
      desc: "Engineered installation specialists trained in variable-speed inverter thermodynamics, nitrogen-swept copper brazing, and deep vacuum evacuations below 500 microns."
    },
    {
      title: "Title 24 & HERS Compliance Team",
      badge: "Energy Efficiency",
      desc: "In-house specialists who manage duct leakage testing, Title 24 compliance paperwork, and municipal mechanical permits across all 46 Bay Area cities."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "ReamsHVAC Team & Technical Standards",
    "url": "https://reamshvac.com/team",
    "description": "Learn about the non-commissioned master HVAC technicians and craftsmanship standards at ReamsHVAC in San Jose, CA."
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Our Technical Standards & Team | ReamsHVAC San Jose"
        description="Learn about the master HVAC technicians and mechanical standards at ReamsHVAC. Non-commissioned salaries, EPA Universal certification, and precision Manual J engineering."
        canonical="/team"
        schema={schemaData}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Standards" },
        ]}
        eyebrow="San Jose HVAC Craftsmanship"
        title="Technicians as Engineers, Never Salespeople"
        description="We believe in technicians who solve mechanical problems, not sales quotas. Discover our professional hiring standards and non-commissioned philosophy."
        primaryCta={{
          text: "Schedule a Walkthrough",
          href: "/contact",
          icon: <Wrench className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "(408) 303-9777",
          href: "tel:4083039777",
          icon: <Phone className="w-5 h-5 text-white" />,
        }}
      />

      <TrustBar />

      {/* Philosophy Banner */}
      <section className="py-8 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-950 block mb-2">
              Our Professional Standard
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              Why Our Team is Built Differently
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-3 leading-relaxed">
              In an industry increasingly dominated by private equity conglomerates pushing equipment sales, we focus strictly on honest diagnostics, fair pricing, and enduring mechanical craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex gap-4 items-start shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-blue-950 text-base sm:text-lg mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Specialties */}
      <section className="py-8 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              Our Field Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every service van is staffed by salaried tradesmen dedicated to specific mechanical disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role, i) => (
              <div 
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                      {role.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-3">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-950">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" />
                  <span>EPA Universal &amp; Title 24 Compliant</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTABand />
    </div>
  );
}
