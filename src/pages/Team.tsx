import { Link } from "react-router-dom";
import { 
  Users, Award, ShieldCheck, CheckCircle2, Phone, ArrowRight,
  Wrench, Sparkles, HeartHandshake, FileCheck
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
      desc: "All technicians hold EPA Section 608 Universal credentials and complete over 100 annual hours of direct manufacturer training on inverter heat pumps, VRF, and gas furnaces.",
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

  const leadership = [
    {
      name: "Marcus Reams",
      role: "Founder & Master Mechanical Contractor",
      experience: "25+ Years in Trade",
      bio: "Marcus founded ReamsHVAC in 2004 with a single truck and a firm commitment: restore honest craftsmanship to heating and air conditioning in Silicon Valley. Marcus personally oversees technical training and complex heat pump conversions."
    },
    {
      name: "David Chen",
      role: "Lead Installation & Sizing Engineer",
      experience: "16 Years in Trade",
      bio: "Specializing in whole-home electrification, duct design, and Title 24 HERS verification. David ensures every Mitsubishi and Carrier inverter system is mathematically matched to home heat loss and airflow requirements."
    },
    {
      name: "Anthony Morales",
      role: "Senior Diagnostic & Service Specialist",
      experience: "14 Years in Trade",
      bio: "A master troubleshooter for complex heat pump and furnace failures. Anthony is renowned for diagnosing difficult electrical and refrigerant issues that other contractors fail to resolve."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "ReamsHVAC Team & Master Technicians",
    "url": "https://reamshvac.com/team",
    "description": "Meet the non-commissioned master HVAC technicians and leadership team at ReamsHVAC in San Jose, CA."
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Our Team | Non-Commissioned Master HVAC Technicians | ReamsHVAC"
        description="Meet the experienced master technicians at ReamsHVAC. 20+ years of honest heating, heat pump, and AC service across San Jose and the Bay Area."
        canonical="/team"
        schema={schemaData}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team" },
        ]}
        eyebrow="San Jose HVAC Craftsmanship"
        title="Meet Our Master Technicians & Team"
        description="We believe in technicians as engineers, not salesmen. Meet the skilled professionals dedicated to honest diagnostics and family-first service."
        primaryCta={{
          text: "Work With Us",
          href: "/contact",
          icon: <Users className="w-5 h-5 text-blue-900" />,
        }}
        secondaryCta={{
          text: "(408) 320-3288",
          href: "tel:4083203288",
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
              In an industry increasingly dominated by private equity conglomerates pushing equipment sales, we remain an independent, family-owned shop focused solely on mechanical excellence.
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

      {/* Leadership & Master Techs */}
      <section className="py-8 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              Key Team Leaders
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Decades of combined mechanical trade experience in Silicon Valley and the Bay Area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((leader, i) => (
              <div 
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                      {leader.experience}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">
                    {leader.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-950">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" />
                  <span>CSLB & EPA Certified</span>
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
