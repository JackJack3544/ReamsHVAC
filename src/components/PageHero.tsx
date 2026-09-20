import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Wrench, Phone } from "lucide-react";
import { TrustBar } from "./TrustBar";

export interface PageHeroProps {
  breadcrumbs?: { label: string; href?: string }[];
  eyebrow: string;
  title: string | ReactNode;
  description: string | ReactNode;
  primaryCta?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  hideCtas?: boolean;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  hideCtas,
}: PageHeroProps) {
  // Safe default CTAs if none provided
  const primary = primaryCta || {
    text: "Schedule a Walkthrough",
    href: "/contact",
    icon: <Wrench className="w-5 h-5 text-blue-900" />,
  };

  const secondary = secondaryCta || {
    text: "1-800-555-0199",
    href: "tel:1-800-555-0199",
    icon: <Phone className="w-5 h-5 text-white" />,
  };

  const isAnchorOrTel = (href: string) =>
    href.startsWith("tel:") || href.startsWith("#") || href.startsWith("http");

  return (
    <section className="page-hero-section relative bg-slate-900 text-white overflow-hidden flex flex-col justify-between min-h-[600px] sm:min-h-[640px] lg:min-h-[80vh] max-h-[840px]">
      {/* Background image representing the modern home */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 z-10 bg-blue-950/20"></div>

      {/* Main hero content container */}
      <div className="hero-main-content relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center items-center pt-12 pb-6 sm:pt-14 sm:pb-8 lg:pt-16 lg:pb-10 w-full">
        {/* Breadcrumb slot: exactly uniform height and position */}
        <div className="hero-breadcrumb-container min-h-[22px] mb-3 hidden sm:flex items-center justify-center">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <nav className="flex items-center text-xs text-slate-300 font-medium" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx} className="inline-flex items-center">
                  {idx > 0 && <span className="mx-2 text-slate-400">/</span>}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-semibold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : (
            <span className="text-xs text-slate-300 font-medium">ReamsHVAC • San Jose &amp; Bay Area</span>
          )}
        </div>

        {/* Eyebrow slot: exactly uniform height and styling */}
        <p className="hero-eyebrow text-slate-200 font-bold tracking-wider sm:tracking-widest uppercase mb-4 sm:mb-6 text-[10px] sm:text-sm min-h-[16px] sm:min-h-[20px] flex items-center justify-center">
          {eyebrow}
        </p>

        {/* Heading slot: exact matching typography & bounds */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-normal text-white mb-4 w-full max-w-4xl mx-auto leading-tight">
          {title}
        </h1>

        {/* Description slot: exact matching typography & bounds */}
        <p className="hero-description text-sm sm:text-base lg:text-lg font-medium text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>

        {/* CTA Buttons: exact 1:1 button size, height, and layout */}
        {!hideCtas && (
          <div className="hero-cta-group flex flex-row justify-center items-center gap-2 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
            {isAnchorOrTel(primary.href) ? (
              <a
                href={primary.href}
                className="bg-white text-blue-950 px-2.5 sm:px-8 py-2 sm:py-3.5 rounded-md font-bold text-sm sm:text-base hover:bg-slate-100 transition-colors flex-1 sm:flex-initial sm:w-auto shadow-lg flex items-center justify-center gap-1.5 sm:gap-2 h-11 sm:h-12 flex-shrink-0 text-center [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5"
              >
                <span className="hidden sm:inline-flex items-center">{primary.icon}</span>
                <span className="hidden sm:inline">{primary.text}</span>
                <span className="sm:hidden">{primary.text.toLowerCase().includes("walkthrough") ? "Get a Quote" : primary.text}</span>
              </a>
            ) : (
              <Link
                to={primary.href}
                className="bg-white text-blue-950 px-2.5 sm:px-8 py-2 sm:py-3.5 rounded-md font-bold text-sm sm:text-base hover:bg-slate-100 transition-colors flex-1 sm:flex-initial sm:w-auto shadow-lg flex items-center justify-center gap-1.5 sm:gap-2 h-11 sm:h-12 flex-shrink-0 text-center [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5"
              >
                <span className="hidden sm:inline-flex items-center">{primary.icon}</span>
                <span className="hidden sm:inline">{primary.text}</span>
                <span className="sm:hidden">{primary.text.toLowerCase().includes("walkthrough") ? "Get a Quote" : primary.text}</span>
              </Link>
            )}

            {isAnchorOrTel(secondary.href) ? (
              <a
                href={secondary.href}
                className="bg-white/5 backdrop-blur-[2px] border border-white/20 text-white px-2.5 sm:px-8 py-2 sm:py-3.5 rounded-md font-bold text-sm sm:text-base hover:bg-white/10 transition-colors flex-1 sm:flex-initial sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 h-11 sm:h-12 flex-shrink-0 text-center [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5"
              >
                {secondary.icon && <span className="hidden sm:inline-flex items-center">{secondary.icon}</span>}
                <span>{secondary.text}</span>
              </a>
            ) : (
              <Link
                to={secondary.href}
                className="bg-white/5 backdrop-blur-[2px] border border-white/20 text-white px-2.5 sm:px-8 py-2 sm:py-3.5 rounded-md font-bold text-sm sm:text-base hover:bg-white/10 transition-colors flex-1 sm:flex-initial sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 h-11 sm:h-12 flex-shrink-0 text-center [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5"
              >
                {secondary.icon && <span className="hidden sm:inline-flex items-center">{secondary.icon}</span>}
                <span>{secondary.text}</span>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Docked TrustBar inside Hero Section */}
      <div className="relative z-20 w-full">
        <TrustBar variant="frosted" />
      </div>
    </section>
  );
}
