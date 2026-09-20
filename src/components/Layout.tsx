import { Link, Outlet, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const services = [
    { name: "Heat Pumps", path: "/services/heat-pumps" },
    { name: "Mini Splits", path: "/services/mini-splits" },
    { name: "Gas Furnaces", path: "/services/gas-furnaces" },
    { name: "Air Conditioning", path: "/services/air-conditioning" },
    { name: "Commercial HVAC", path: "/services/commercial-hvac" },
    { name: "Maintenance Plans", path: "/services/maintenance-plans" },
    { name: "Indoor Air Quality", path: "/services/indoor-air-quality" },
    { name: "Duct Cleaning & Repair", path: "/services/duct-cleaning-repair" },
    { name: "Smart Thermostats", path: "/services/smart-thermostats" },
    { name: "Emergency Service", path: "/services/emergency-hvac" },
  ];

  const regions = [
    { name: "South Bay", path: "/service-areas/south-bay" },
    { name: "East Bay", path: "/service-areas/east-bay" },
    { name: "Peninsula", path: "/service-areas/peninsula" },
    { name: "San Francisco", path: "/service-areas/san-francisco" },
    { name: "North Bay", path: "/service-areas/north-bay" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-blue-900 selection:text-white">
      {/* Skip to Main Content for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-blue-950 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:font-bold focus:border focus:border-blue-900"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center" aria-label="Ream's Mechanical HVAC Home">
                <Logo className="h-10 sm:h-12 w-auto" variant="dark" />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center h-full" aria-label="Main Navigation">
              {/* Services Dropdown */}
              <div className="relative group h-full flex items-center">
                <Link to="/services" className="text-blue-900 hover:text-blue-800 font-medium flex items-center h-full">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg border-t border-slate-100 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 mt-2 pt-2">
                      <Link to="/services" className="block px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-slate-50">
                        View All Services &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div className="relative group h-full flex items-center">
                <Link to="/service-areas" className="text-blue-900 hover:text-blue-800 font-medium flex items-center h-full">
                  Service Areas <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg border-t border-slate-100 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {regions.map((region) => (
                      <Link
                        key={region.path}
                        to={region.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900"
                      >
                        {region.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/about" className="text-blue-900 hover:text-blue-800 font-medium">Why Us</Link>
              <Link to="/gallery" className="text-blue-900 hover:text-blue-800 font-medium">Gallery</Link>
              <Link to="/contact" className="text-blue-900 hover:text-blue-800 font-medium">Contact</Link>
              <a href="tel:1-800-555-0199" aria-label="Call ReamsHVAC dispatch at 1-800-555-0199" className="text-blue-900 font-bold flex items-center hover:text-blue-700 ml-4">
                <Phone className="h-5 w-5 mr-2" />
                1-800-555-0199
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-4">
              <a href="tel:1-800-555-0199" aria-label="Call ReamsHVAC Dispatch" className="text-blue-900">
                <Phone className="h-6 w-6" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                className="text-slate-600 hover:text-blue-900 p-1"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-inner h-[calc(100vh-80px)] overflow-y-auto">
            <Link to="/services" className="block px-3 py-3 text-base font-medium text-slate-800 border-b border-slate-100">Services</Link>
            <div className="pl-6 pb-2 border-b border-slate-100">
              {services.map(s => (
                <Link key={s.path} to={s.path} className="block px-3 py-2 text-sm text-slate-600">{s.name}</Link>
              ))}
            </div>
            
            <Link to="/service-areas" className="block px-3 py-3 text-base font-medium text-slate-800 border-b border-slate-100">Service Areas</Link>
            <div className="pl-6 pb-2 border-b border-slate-100">
               {regions.map(r => (
                <Link key={r.path} to={r.path} className="block px-3 py-2 text-sm text-slate-600">{r.name}</Link>
              ))}
            </div>

            <Link to="/about" className="block px-3 py-3 text-base font-medium text-slate-800 border-b border-slate-100">Why ReamsHVAC</Link>
            <Link to="/gallery" className="block px-3 py-3 text-base font-medium text-slate-800 border-b border-slate-100">Project Gallery</Link>
            <Link to="/contact" className="block px-3 py-3 text-base font-medium text-slate-800">Contact</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#030712] text-white pt-16 pb-8" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="inline-block mb-6" aria-label="Ream's Mechanical HVAC Footer Home">
                <Logo className="h-9 sm:h-10 w-auto" variant="light" />
              </Link>
              <p className="text-sm text-slate-300 mb-6 pr-4 leading-relaxed">
                Family-owned San Jose HVAC contractor with 20+ years of trade experience. Delivering honest furnace, heat pump, and AC repairs across Santa Clara County.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-slate-100">
                  <Phone size={16} className="text-blue-400" /> 
                  <a href="tel:1-800-555-0199" aria-label="Call ReamsHVAC" className="hover:text-blue-300 font-semibold transition-colors">1-800-555-0199</a>
                </p>
              </div>
              <div className="mt-6 flex gap-3 text-xs font-bold text-white">
                <span className="bg-white/10 px-3 py-1.5 rounded-md border border-white/20">Lic #1048291</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-md border border-white/20">Insured & Bonded</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Services</h3>
              <ul className="space-y-3 text-sm">
                {services.map(s => (
                  <li key={s.path}>
                    <Link to={s.path} className="text-slate-200 hover:text-white transition-colors">{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Service Areas</h3>
              <ul className="space-y-3 text-sm">
                 {regions.map(r => (
                  <li key={r.path}>
                    <Link to={r.path} className="text-slate-200 hover:text-white transition-colors">{r.name}</Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link to="/service-areas" className="text-blue-300 font-semibold hover:text-white transition-colors inline-flex items-center gap-1">
                    View All 46 Cities &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Why ReamsHVAC</h3>
              <ul className="space-y-3 text-sm mb-6">
                <li><Link to="/about" className="text-slate-200 hover:text-white transition-colors">Our Story & Craft</Link></li>
                <li><Link to="/gallery" className="text-slate-200 hover:text-white transition-colors">Project Gallery</Link></li>
                <li><Link to="/authorized-dealer" className="text-slate-200 hover:text-white transition-colors">Authorized Dealer</Link></li>
                <li><Link to="/financing-rebates" className="text-slate-200 hover:text-white transition-colors">Rebates & Financing</Link></li>
                <li><Link to="/emergency" className="text-slate-200 hover:text-white transition-colors">24/7 Emergency Service</Link></li>
                <li><Link to="/contact" className="text-slate-200 hover:text-white transition-colors">Schedule Consultation</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-300">
            <p>&copy; {new Date().getFullYear()} ReamsHVAC Inc. San Jose, CA. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/service-areas/south-bay/san-jose" className="hover:text-white transition-colors">San Jose HVAC</Link>
              <Link to="/services/air-conditioning" className="hover:text-white transition-colors">AC Repair</Link>
              <Link to="/services/heat-pumps" className="hover:text-white transition-colors">Heat Pumps</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Dispatch</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
