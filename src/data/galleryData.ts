export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'Heat Pumps' | 'AC & Condensers' | 'Mini-Splits' | 'Rooftop Systems';
  location: string;
  equipment: string;
  alt: string;
  description: string;
  badge: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "bryant-ac-maintenance",
    src: "/images/gallery/img_7164.jpg",
    title: "Precision AC Condenser Deep Clean & Tune-Up",
    category: "AC & Condensers",
    location: "Sunnyvale, CA",
    equipment: "Bryant Legacy Line Central AC Condenser",
    alt: "ReamsHVAC certified technician cleaning and tuning an outdoor Bryant air conditioner condenser",
    description: "Complete seasonal diagnostic and high-pressure chemical coil wash performed by a ReamsHVAC technician in Sunnyvale. Restored factory static pressure, cleared debris, and optimized subcooling efficiency.",
    badge: "Precision Maintenance"
  },
  {
    id: "midea-rooftop-heat-pump-dual",
    src: "/images/gallery/img_0404.jpg",
    title: "Rooftop Inverter Heat Pump & Central AC Installation",
    category: "Rooftop Systems",
    location: "San Jose, CA",
    equipment: "Midea Ultra-Efficiency Inverter & Central Condenser",
    alt: "Rooftop dual heat pump and condenser installation on heavy-duty equipment curbs in San Jose",
    description: "Engineered rooftop dual-zone installation on custom curbs with vibration-isolation pads. Features UV-wrapped linesets, liquid line filter driers, and hurricane-rated seismic anchor brackets.",
    badge: "Rooftop Engineered"
  },
  {
    id: "mitsubishi-wall-heat-pump",
    src: "/images/gallery/img_3461.jpg",
    title: "Mitsubishi Electric Hyper-Heating Heat Pump Wall Mount",
    category: "Heat Pumps",
    location: "Santa Clara, CA",
    equipment: "Mitsubishi Electric Single-Zone Inverter Heat Pump",
    alt: "Mitsubishi Electric heat pump condenser mounted on wall bracket with electrical safety disconnect",
    description: "Space-saving side-yard installation elevated on heavy-duty powder-coated wall cantilever brackets. Protects condenser from ground debris, landscaping, and soil shifting while delivering whisper-quiet operation.",
    badge: "Wall Mount Inverter"
  },
  {
    id: "ductless-indoor-mini-split",
    src: "/images/gallery/mini-split-indoor.jpg",
    title: "Whisper-Quiet Multi-Zone Indoor Wall Unit",
    category: "Mini-Splits",
    location: "Palo Alto, CA",
    equipment: "Ductless Multi-Zone High-Wall Air Handler",
    alt: "Clean modern wall-mounted ductless mini-split air handler providing zoned climate control",
    description: "Seamless indoor wall-mount air handler installation with concealed gravity condensate drain lines and independent wireless digital thermostatic control for room-by-room comfort.",
    badge: "Ductless Zoned Comfort"
  },
  {
    id: "mitsubishi-smart-multi",
    src: "/images/gallery/img_6419.jpg",
    title: "Mitsubishi Electric SMART MULTI Multi-Zone Inverter",
    category: "Heat Pumps",
    location: "Los Altos, CA",
    equipment: "Mitsubishi Electric SMART MULTI Dual-Fan Condenser",
    alt: "Mitsubishi Electric SMART MULTI heat pump outdoor condenser with custom metal architectural line hide chase",
    description: "High-capacity multi-zone heating and cooling system serving a modern home. Features custom galvanized sheet metal architectural line-set chase for sleek aesthetics and maximum Title 24 efficiency.",
    badge: "Multi-Zone Flagship"
  },
  {
    id: "day-and-night-condenser",
    src: "/images/gallery/img_5216.jpg",
    title: "Day & Night High-Efficiency Central AC Condenser",
    category: "AC & Condensers",
    location: "Campbell, CA",
    equipment: "Day & Night QuietComfort Central AC Condenser",
    alt: "Day and Night high-efficiency central air conditioner condenser on concrete pad with electrical disconnect",
    description: "Full central air conditioner replacement installed on a leveled, isolated concrete equipment pad. Features weather-resistant electrical disconnect and nitrogen-purged copper refrigeration lines.",
    badge: "High-Efficiency AC"
  },
  {
    id: "mitsubishi-low-profile-mount",
    src: "/images/gallery/img_7191.jpg",
    title: "Mitsubishi Electric Side-Entry Compact Heat Pump",
    category: "Mini-Splits",
    location: "Mountain View, CA",
    equipment: "Mitsubishi Electric Compact Inverter Heat Pump",
    alt: "Mitsubishi Electric compact outdoor heat pump unit mounted on architectural exterior siding with conduit",
    description: "Architectural side-yard wall mount with clean rigid electrical conduit and surge protection. Provides high-SEER2 all-electric heating and cooling without taking up valuable patio space.",
    badge: "Compact Inverter"
  },
  {
    id: "midea-inverter-detail",
    src: "/images/gallery/img_0408.jpg",
    title: "Midea Precision Inverter Heat Pump Rooftop System",
    category: "Heat Pumps",
    location: "San Jose, CA",
    equipment: "Midea High-SEER2 Inverter Heat Pump Condenser",
    alt: "Close-up view of Midea inverter heat pump outdoor condenser on specialized roof vibration mount",
    description: "Precision installation detail showing the EnergyGuide high-efficiency rating, vibration dampening isolation base, and factory-sealed electrical connections engineered for zero roof resonance.",
    badge: "Title 24 Engineered"
  }
];
