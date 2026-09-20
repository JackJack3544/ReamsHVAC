interface LogoProps {
  className?: string;
  variant?: "dark" | "light"; // "dark" = black text for white header; "light" = white text for dark footer
  showText?: boolean;
}

export function Logo({ className = "h-11 w-auto", variant = "dark", showText = true }: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#000000";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 470 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-h-full"
        aria-hidden="true"
      >
        {/* Flame & Snowflake Icon */}
        <g transform="translate(6, 4)">
          {/* Red Flame with transparent circular cutout for snowflake */}
          <path
            d="M58 114 C42 114 28 108 18 97 C6 84 0 66 0 48 C0 27 14 12 28 2 C30 0 33 2 32 5 C31 16 34 26 42 34 C44 24 50 14 62 7 C64 5 67 7 66 10 C62 25 66 38 75 46 C85 54 91 66 90 79 C89 97 76 112 58 114 Z M46 47 A27 27 0 1 0 46 101 A27 27 0 1 0 46 47 Z"
            fill="#E2211C"
            fillRule="evenodd"
          />

          {/* Cyan-Blue Snowflake nestled inside the flame */}
          <g stroke="#009FE3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* 6 Radial Arms */}
            <line x1="46" y1="50" x2="46" y2="98" />
            <line x1="25" y1="62" x2="67" y2="86" />
            <line x1="25" y1="86" x2="67" y2="62" />

            {/* Central Hexagonal Core */}
            <circle cx="46" cy="74" r="3.5" stroke="#009FE3" strokeWidth="2.5" fill="none" />

            {/* Top Vertical Arm V-Barbs */}
            <path d="M40 58 L46 63 L52 58" fill="none" />
            <path d="M42 52 L46 56 L50 52" fill="none" />

            {/* Bottom Vertical Arm V-Barbs */}
            <path d="M40 90 L46 85 L52 90" fill="none" />
            <path d="M42 96 L46 92 L50 96" fill="none" />

            {/* Top-Right Diagonal Arm V-Barbs */}
            <path d="M57 62 L58 69 L66 67" fill="none" />
            <path d="M62 59 L63 65 L68 63" fill="none" />

            {/* Bottom-Left Diagonal Arm V-Barbs */}
            <path d="M35 86 L34 79 L26 81" fill="none" />
            <path d="M30 89 L29 83 L24 85" fill="none" />

            {/* Top-Left Diagonal Arm V-Barbs */}
            <path d="M35 62 L34 69 L26 67" fill="none" />
            <path d="M30 59 L29 65 L24 63" fill="none" />

            {/* Bottom-Right Diagonal Arm V-Barbs */}
            <path d="M57 86 L58 79 L66 81" fill="none" />
            <path d="M62 89 L63 83 L68 85" fill="none" />
          </g>
        </g>

        {/* Brand Text Block */}
        {showText && (
          <g transform="translate(108, 0)">
            {/* REAM'S */}
            <text
              x="0"
              y="68"
              fill={textColor}
              fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
              fontSize="64"
              fontWeight="900"
              fontStyle="italic"
              letterSpacing="-1.5"
            >
              REAM’S
            </text>

            {/* MECHANICAL HVAC */}
            <text
              x="2"
              y="104"
              fill={textColor}
              fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
              fontSize="28"
              fontWeight="900"
              fontStyle="italic"
              letterSpacing="0.8"
            >
              MECHANICAL HVAC
            </text>
          </g>
        )}
      </svg>
      <span className="sr-only">Ream's Mechanical HVAC</span>
    </div>
  );
}
