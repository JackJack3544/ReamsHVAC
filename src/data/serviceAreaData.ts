export interface CityData {
  slug: string;
  name: string;
  regionId: string;
  regionName: string;
  tagline: string;
  heroDescription: string;
  neighborhoods: string[];
  climateNote: string;
  permitNote: string;
  rebateNote: string;
  mapEmbedSrc: string;
  reviews: Array<{
    name: string;
    neighborhood: string;
    date: string;
    rating: number;
    source: string;
    comment: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export interface RegionData {
  id: string;
  name: string;
  tagline: string;
  heroDescription: string;
  badge: string;
  citiesCount: string;
  overviewText: string;
  climateFactors: string;
  permitsAndRebates: string;
  cities: Array<{
    slug: string;
    name: string;
    tagline: string;
    isPrimary?: boolean;
  }>;
  reviews: Array<{
    name: string;
    city: string;
    date: string;
    rating: number;
    source: string;
    comment: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export const REGIONS_DATA: Record<string, RegionData> = {
  "south-bay": {
    id: "south-bay",
    name: "South Bay Region",
    tagline: "Silicon Valley Central Operations & Dispatch",
    heroDescription: "Fast, licensed HVAC heating, cooling, and heat pump electrification services across San Jose, Santa Clara, Sunnyvale, Cupertino, and Silicon Valley.",
    badge: "Silicon Valley",
    citiesCount: "12 Cities Served",
    overviewText: "The South Bay is the core operational heart of ReamsHVAC. Home to over 1.5 million residents and major tech campuses, South Bay homes experience wide seasonal temperature swings—from intense 100°F summer heatwaves in inland San Jose and Gilroy to chilly winter evenings near the Santa Cruz Mountains.",
    climateFactors: "Inland South Bay locations see high cooling degree days during summer, making energy-efficient variable-speed ACs and high-SEER2 inverter heat pumps essential for keeping utility bills low during peak PG&E rate hours.",
    permitsAndRebates: "South Bay cities participate in aggressive climate action plans. Homeowners qualify for up to $3,000+ in combined TECH Clean California, PG&E, and San Jose Clean Energy heat pump rebates.",
    cities: [
      { slug: "san-jose", name: "San Jose", tagline: "Central Fleet Dispatch & Service", isPrimary: true },
      { slug: "santa-clara", name: "Santa Clara", tagline: "Silicon Valley Tech Corridor & Residential", isPrimary: true },
      { slug: "sunnyvale", name: "Sunnyvale", tagline: "Heat Pump & Energy Efficiency Specialists", isPrimary: true },
      { slug: "cupertino", name: "Cupertino", tagline: "High-Efficiency Inverter Heat Pump Retrofits", isPrimary: true },
      { slug: "campbell", name: "Campbell", tagline: "Duct Repair, AC & Furnace Replacements", isPrimary: false },
      { slug: "saratoga", name: "Saratoga", tagline: "Luxury Residential Climate & Mini Splits", isPrimary: false },
      { slug: "milpitas", name: "Milpitas", tagline: "Rapid Emergency HVAC & Duct Sealing", isPrimary: false },
      { slug: "los-gatos", name: "Los Gatos", tagline: "Custom Heat Pump & Indoor Air Quality", isPrimary: false },
      { slug: "morgan-hill", name: "Morgan Hill", tagline: "Inland AC & Gas Furnace Services", isPrimary: false },
      { slug: "gilroy", name: "Gilroy", tagline: "High-Capacity Cooling & Heating Systems", isPrimary: false }
    ],
    reviews: [
      {
        name: "Jessica W.",
        city: "San Jose, CA",
        date: "2 weeks ago",
        rating: 5,
        source: "Google Review",
        comment: "ReamsHVAC replaced our 20-year-old AC and furnace in Almaden with a Bosch inverter heat pump. The crew was punctual, passed San Jose Title 24 HERS duct testing instantly, and lowered our monthly bill significantly."
      },
      {
        name: "Michael T.",
        city: "Santa Clara, CA",
        date: "1 month ago",
        rating: 5,
        source: "Yelp Verified",
        comment: "Excellent service! They installed a multi-zone Mitsubishi mini split system in our home addition. Clean installation, upfront flat-rate pricing, and great follow-up."
      },
      {
        name: "Arun P.",
        city: "Sunnyvale, CA",
        date: "2 months ago",
        rating: 5,
        source: "Google Review",
        comment: "Our AC stopped blowing cold air on a 100° Saturday. ReamsHVAC dispatched a tech within 2 hours who replaced a bad capacitor and restored cold air right away."
      }
    ],
    faqs: [
      {
        q: "What is the average emergency dispatch time in the South Bay?",
        a: "Because our central dispatch hub and warehouse are located in San Jose, we maintain active technician trucks across the South Bay, typically responding within 1 to 3 hours for urgent service calls."
      },
      {
        q: "Do South Bay cities require building permits for HVAC replacement?",
        a: "Yes. All South Bay cities (San Jose, Santa Clara, Sunnyvale, etc.) require municipal mechanical permits and independent HERS duct leakage verification to ensure Title 24 energy compliance."
      }
    ]
  },
  "peninsula": {
    id: "peninsula",
    name: "Peninsula Region",
    tagline: "Eco-Friendly Electrification & Heat Pump Specialists",
    heroDescription: "Serving Palo Alto, San Mateo, Redwood City, Mountain View, and the US-101 corridor with high-efficiency heat pumps, mini splits, and smart HVAC controls.",
    badge: "101 Corridor",
    citiesCount: "10 Cities Served",
    overviewText: "The Peninsula features a mix of coastal Bay breezes and moderate Mediterranean warmth. Homeowners in Palo Alto, Menlo Park, and San Mateo lead Northern California in clean energy electrification—transitioning away from gas furnaces to whisper-quiet electric heat pumps.",
    climateFactors: "Moderate summer temperatures mean inverter heat pumps provide ideal year-round comfort without needing oversized air conditioners. Compact outdoor footprints are perfect for Peninsula lot sizes.",
    permitsAndRebates: "Peninsula municipal utilities—such as Palo Alto Utilities and San Mateo County BayREN—offer generous heat pump rebate programs stacking with state TECH California incentives.",
    cities: [
      { slug: "palo-alto", name: "Palo Alto", tagline: "All-Electric Heat Pump Electrification Lead", isPrimary: true },
      { slug: "san-mateo", name: "San Mateo", tagline: "Central AC, Heat Pump & Duct Repairs", isPrimary: true },
      { slug: "redwood-city", name: "Redwood City", tagline: "Climate Control & Air Purification", isPrimary: true },
      { slug: "mountain-view", name: "Mountain View", tagline: "Ductless Mini Splits & Smart Thermostats", isPrimary: true },
      { slug: "burlingame", name: "Burlingame", tagline: "Quiet Residential Inverter Heating & Cooling", isPrimary: false },
      { slug: "menlo-park", name: "Menlo Park", tagline: "Eco-Friendly Heat Pumps & Duct Cleaning", isPrimary: false },
      { slug: "san-bruno", name: "San Bruno", tagline: "Gas Furnace Repair & Heat Pump Retrofits", isPrimary: false },
      { slug: "south-san-francisco", name: "South San Francisco", tagline: "Commercial & Residential HVAC", isPrimary: false }
    ],
    reviews: [
      {
        name: "Claire T.",
        city: "Palo Alto, CA",
        date: "3 weeks ago",
        rating: 5,
        source: "Yelp Verified",
        comment: "ReamsHVAC converted our gas heating to an all-electric Mitsubishi heat pump. They managed all Palo Alto municipal permits and maximum rebate paperwork."
      },
      {
        name: "Brian S.",
        city: "San Mateo, CA",
        date: "1 month ago",
        rating: 5,
        source: "Google Review",
        comment: "Great experience with duct replacement and smart thermostat installation. Airflow is much better and temperature is consistent room to room."
      }
    ],
    faqs: [
      {
        q: "Why are Peninsula homeowners switching to heat pumps?",
        a: "Heat pumps offer both heating and cooling in a single electric unit, eliminating gas combustion while taking advantage of local clean energy incentives and lower operating noise."
      }
    ]
  },
  "east-bay": {
    id: "east-bay",
    name: "East Bay Region",
    tagline: "Alameda & Contra Costa Climate Solutions",
    heroDescription: "Serving Oakland, Fremont, Hayward, Berkeley, Walnut Creek, Concord, and Dublin with fast residential and commercial heating and cooling.",
    badge: "Alameda & Contra Costa",
    citiesCount: "14 Cities Served",
    overviewText: "The East Bay spans from coastal fog in Oakland and Berkeley to scorching inland heat in the Tri-Valley (Dublin, Pleasanton, San Ramon) and Walnut Creek, where summer heat regularly exceeds 100°F.",
    climateFactors: "Inland East Bay areas require high-capacity, multi-stage cooling and reliable duct sealing to cope with summer heatwaves and prevent cold winter drafts.",
    permitsAndRebates: "BayREN and local East Bay Community Energy offer substantial rebate programs for electrification and home energy sealing.",
    cities: [
      { slug: "fremont", name: "Fremont", tagline: "Heat Pump & Furnace Rapid Service", isPrimary: true },
      { slug: "oakland", name: "Oakland", tagline: "Urban HVAC, Mini Splits & Air Quality", isPrimary: true },
      { slug: "berkeley", name: "Berkeley", tagline: "Eco-Heat Pumps & Indoor Air Filtration", isPrimary: true },
      { slug: "walnut-creek", name: "Walnut Creek", tagline: "High-Capacity Inland AC & Furnaces", isPrimary: true },
      { slug: "hayward", name: "Hayward", tagline: "Full Residential HVAC Retrofits", isPrimary: false },
      { slug: "concord", name: "Concord", tagline: "Emergency AC Repair & Heat Pumps", isPrimary: false },
      { slug: "san-ramon", name: "San Ramon", tagline: "Tri-Valley AC & Duct Sealing", isPrimary: false },
      { slug: "dublin", name: "Dublin", tagline: "Modern Smart HVAC & Inverters", isPrimary: false }
    ],
    reviews: [
      {
        name: "Kenneth R.",
        city: "Fremont, CA",
        date: "1 month ago",
        rating: 5,
        source: "Google Review",
        comment: "Outstanding service in Fremont! They installed a multi-zone ductless mini split system in our home addition. Very clean work and great communication."
      }
    ],
    faqs: [
      {
        q: "Do you serve both coastal and inland East Bay cities?",
        a: "Yes! Our trucks cover both Alameda County (Oakland, Fremont, Hayward) and Contra Costa County (Walnut Creek, Concord, San Ramon) with custom systems tailored to microclimates."
      }
    ]
  },
  "san-francisco": {
    id: "san-francisco",
    name: "San Francisco City & County",
    tagline: "Urban & Compact Space HVAC Specialists",
    heroDescription: "Tailored ductless mini splits, compact inverter heat pumps, and quiet indoor air filtration for San Francisco homes, flats, and commercial spaces.",
    badge: "San Francisco",
    citiesCount: "All SF Neighborhoods",
    overviewText: "San Francisco presents unique heating and cooling demands. Variable fog microclimates, historic architecture, compact property lines, and strict sound ordinances require expert HVAC engineering.",
    climateFactors: "Ductless mini-splits and compact heat pumps provide room-by-room zone control and low decibel operation without requiring expansive attic ductwork.",
    permitsAndRebates: "San Francisco Department of Building Inspection (DBI) mechanical permits require strict adherence to historic preservation and electrical load calculations.",
    cities: [
      { slug: "san-francisco", name: "San Francisco", tagline: "Full City & County HVAC Coverage", isPrimary: true }
    ],
    reviews: [
      {
        name: "Marcus V.",
        city: "San Francisco, CA",
        date: "1 month ago",
        rating: 5,
        source: "Yelp Verified",
        comment: "ReamsHVAC installed a quiet 3-zone Mitsubishi mini split in our Noe Valley Victorian. Zero disruption to plaster walls and super quiet operation."
      }
    ],
    faqs: [
      {
        q: "Can you install HVAC in historic San Francisco homes without ductwork?",
        a: "Yes! Ductless mini splits are engineered specifically for homes without existing ductwork, delivering heating and cooling through slim copper linesets with minimal wall penetration."
      }
    ]
  },
  "north-bay": {
    id: "north-bay",
    name: "North Bay Region",
    tagline: "Marin, Sonoma & Napa HVAC Coverage",
    heroDescription: "Serving San Rafael, Novato, Napa, Petaluma, Santa Rosa, and Marin County with heat pumps, wildfire air filtration, and dual-fuel heating.",
    badge: "Marin & Wine Country",
    citiesCount: "8 Cities Served",
    overviewText: "The North Bay combines coastal Marin fog with warm Wine Country valley summers in Napa and Sonoma. Wildfire smoke season makes whole-home air filtration a top priority.",
    climateFactors: "MERV 13 media filters, UV germicidal scrubbers, and ERV fresh air exchangers protect homes during wildfire smoke advisories while heat pumps deliver efficient year-round heating and cooling.",
    permitsAndRebates: "North Bay counties support clean energy transitions with local electrification incentives.",
    cities: [
      { slug: "san-rafael", name: "San Rafael", tagline: "Marin County Heat Pump Specialists", isPrimary: true },
      { slug: "napa", name: "Napa", tagline: "Wine Country AC & Filtration Services", isPrimary: true },
      { slug: "santa-rosa", name: "Santa Rosa", tagline: "Sonoma Heating, Cooling & Air Quality", isPrimary: true },
      { slug: "novato", name: "Novato", tagline: "Inverter Heat Pumps & Duct Cleaning", isPrimary: false },
      { slug: "petaluma", name: "Petaluma", tagline: "Residential Energy Efficiency", isPrimary: false }
    ],
    reviews: [
      {
        name: "Elena M.",
        city: "San Rafael, CA",
        date: "2 weeks ago",
        rating: 5,
        source: "Google Review",
        comment: "Installed an ERV air exchanger and MERV 13 filtration system before fire season. Our indoor air quality in San Rafael is noticeably cleaner and fresh."
      }
    ],
    faqs: [
      {
        q: "What indoor air quality solutions do you recommend for North Bay wildfire smoke?",
        a: "We recommend whole-home MERV 13 media air cleaners, UV germicidal purifiers, and Energy Recovery Ventilators (ERVs) that filter incoming air while keeping indoor air sealed."
      }
    ]
  }
};

export const CITIES_DATA: Record<string, CityData> = {
  "san-jose": {
    slug: "san-jose",
    name: "San Jose",
    regionId: "south-bay",
    regionName: "South Bay",
    tagline: "Silicon Valley Central Operations & Dispatch",
    heroDescription: "San Jose's trusted C-20 licensed HVAC contractor. Fast emergency AC repair, high-efficiency heat pump retrofits, furnace replacement, and Title 24 duct testing across all San Jose neighborhoods.",
    neighborhoods: ["Willow Glen", "Almaden Valley", "Evergreen", "Berryessa", "Cambrian Park", "Rose Garden", "Blossom Valley", "Silver Creek", "Downtown San Jose", "North San Jose"],
    climateNote: "San Jose experiences hot summer heatwaves reaching 100°F+ in July and August, paired with chilly winter nights. Energy-efficient inverter heat pumps and SEER2 central air conditioners deliver the highest energy savings under PG&E rates.",
    permitNote: "All HVAC change-outs in the City of San Jose require a mechanical permit from the San Jose Building Division and mandatory independent HERS duct leakage testing under California Title 24 regulations.",
    rebateNote: "San Jose homeowners qualify for TECH Clean California heat pump rebates, San Jose Clean Energy incentives, and federal Inflation Reduction Act 25C tax credits up to $2,000.",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.7578783451!2d-122.0468307223067!3d37.29701552528151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    reviews: [
      {
        name: "Jessica W.",
        neighborhood: "Almaden Valley, San Jose",
        date: "2 weeks ago",
        rating: 5,
        source: "Google Review",
        comment: "Our AC died during a brutal September heatwave in San Jose. ReamsHVAC arrived within 2 hours, diagnosed a failed capacitor, and got cold air running immediately. Amazing emergency response!"
      },
      {
        name: "Robert M.",
        neighborhood: "Willow Glen, San Jose",
        date: "1 month ago",
        rating: 5,
        source: "Yelp Verified",
        comment: "ReamsHVAC replaced our 20-year-old furnace with a Bosch inverter heat pump. The crew pulled San Jose permits, passed HERS duct testing, and protected our hardwood floors. 10/10."
      }
    ],
    faqs: [
      {
        q: "How fast can ReamsHVAC dispatch to my San Jose neighborhood?",
        a: "Because San Jose is our primary dispatch headquarters, we maintain multiple active technician trucks across Almaden, Willow Glen, Berryessa, and Evergreen for 1 to 2 hour average emergency response times."
      },
      {
        q: "Do I need a permit to replace an AC or furnace in San Jose?",
        a: "Yes. The City of San Jose requires mechanical permits and certified HERS duct leakage verification for all HVAC system replacements. ReamsHVAC handles the entire permit application and inspection scheduling for you."
      }
    ]
  },
  "santa-clara": {
    slug: "santa-clara",
    name: "Santa Clara",
    regionId: "south-bay",
    regionName: "South Bay",
    tagline: "Silicon Valley Tech Corridor Heating & Cooling",
    heroDescription: "Expert HVAC services in Santa Clara, CA. Inverter heat pumps, central AC repair, Silicon Valley Power energy optimization, and commercial climate solutions.",
    neighborhoods: ["Rivermark", "Santa Clara University District", "Agnew", "Kifer Corridor", "Pomeroy", "Pruneridge"],
    climateNote: "Santa Clara enjoys sunny South Bay weather but faces elevated electricity rates during summer peak hours. High-efficiency variable-speed heat pumps help maximize Silicon Valley Power (SVP) municipal electric rates.",
    permitNote: "City of Santa Clara Community Development Department requires mechanical permits and HERS duct leakage testing for all central heating and cooling upgrades.",
    rebateNote: "Santa Clara residents benefit from Silicon Valley Power rebates alongside state TECH Clean California electrification incentives.",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50711.234567!2d-121.97!3d37.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb0a3219460b%3A0x8684d092d6e382d5!2sSanta%20Clara%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    reviews: [
      {
        name: "Michael T.",
        neighborhood: "Rivermark, Santa Clara",
        date: "1 month ago",
        rating: 5,
        source: "Yelp Verified",
        comment: "Installed a multi-zone Mitsubishi mini split in our Santa Clara home addition. Extremely quiet, neat wiring, and handled all SVP permit paperwork."
      }
    ],
    faqs: [
      {
        q: "Does Silicon Valley Power offer rebates for heat pump upgrades in Santa Clara?",
        a: "Yes! Santa Clara residents served by Silicon Valley Power (SVP) qualify for local utility equipment rebates stacked with TECH Clean California state grants."
      }
    ]
  },
  "sunnyvale": {
    slug: "sunnyvale",
    name: "Sunnyvale",
    regionId: "south-bay",
    regionName: "South Bay",
    tagline: "Precision Heat Pump & Energy Efficiency Services",
    heroDescription: "Licensed C-20 HVAC specialists in Sunnyvale, CA. High-efficiency heat pump conversions, central air conditioning, gas furnace repair, and duct sealing.",
    neighborhoods: ["Heritage District", "Cherry Chase", "Ponderosa Park", "Lakewood", "Sunnyvale West", "Snail"],
    climateNote: "Warm inland summers and temperate winters make Sunnyvale prime territory for all-electric inverter heat pumps that deliver quiet, high-efficiency climate control.",
    permitNote: "City of Sunnyvale Building Division requires mechanical permits and Title 24 duct testing for furnace and AC replacements.",
    rebateNote: "Sunnyvale homeowners can access state TECH Clean California incentives and BayREN home energy efficiency grants.",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50690.123456!2d-122.03!3d37.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb616870020d5%3A0x7d0a273b06db232b!2sSunnyvale%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    reviews: [
      {
        name: "Arun P.",
        neighborhood: "Cherry Chase, Sunnyvale",
        date: "2 months ago",
        rating: 5,
        source: "Google Review",
        comment: "ReamsHVAC diagnosed our AC airflow problem in Sunnyvale. They repaired leaking attic ducts and installed a Nest smart thermostat. System works great now."
      }
    ],
    faqs: [
      {
        q: "Are heat pumps recommended for Sunnyvale homes?",
        a: "Yes! Sunnyvale's moderate climate makes heat pumps exceptionally efficient, providing year-round heating and cooling with zero gas combustion."
      }
    ]
  },
  "palo-alto": {
    slug: "palo-alto",
    name: "Palo Alto",
    regionId: "peninsula",
    regionName: "Peninsula",
    tagline: "Eco-Friendly Electrification & Heat Pump Leadership",
    heroDescription: "Palo Alto's premier heat pump electrification contractor. Zero-emission heating, quiet inverter mini splits, smart controls, and City of Palo Alto Utilities rebate handling.",
    neighborhoods: ["Stanford", "Crescent Park", "Midtown", "Barron Park", "Old Palo Alto", "Professorville", "Palo Alto Hills"],
    climateNote: "Palo Alto homeowners lead the state in clean energy initiatives. Replacing gas furnaces with electric heat pumps aligns with Palo Alto's municipal climate goals.",
    permitNote: "City of Palo Alto Development Services requires electronic mechanical permit filings, panel capacity checks, and sound compliance for outdoor heat pump condensers.",
    rebateNote: "City of Palo Alto Utilities (CPAU) offers significant heat pump rebates stacking with state incentives for up to $3,500+ in savings.",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50650.123456!2d-122.14!3d37.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb07b9260e1d5%3A0xe543597d3ef2825!2sPalo%20Alto%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    reviews: [
      {
        name: "Claire T.",
        neighborhood: "Midtown, Palo Alto",
        date: "3 weeks ago",
        rating: 5,
        source: "Yelp Verified",
        comment: "ReamsHVAC converted our gas furnace to a Mitsubishi hyper-heat inverter heat pump. They handled all CPAU rebate paperwork and Palo Alto permits expertly."
      }
    ],
    faqs: [
      {
        q: "What CPAU rebates apply to Palo Alto heat pump installations?",
        a: "City of Palo Alto Utilities (CPAU) provides generous electric heat pump water heater and space heating rebates that stack with state TECH California funds."
      }
    ]
  },
  "fremont": {
    slug: "fremont",
    name: "Fremont",
    regionId: "east-bay",
    regionName: "East Bay",
    tagline: "East Bay Heating, AC & Ductwork Specialists",
    heroDescription: "Comprehensive HVAC services in Fremont, CA. Central air conditioning, gas furnaces, heat pumps, duct sealing, and emergency repairs across all Fremont districts.",
    neighborhoods: ["Mission San Jose", "Niles", "Centerville", "Warm Springs", "Irvington", "Glenmoor"],
    climateNote: "Fremont experiences warm summer temperatures coming through the Sunol Gap paired with windy conditions. Sealed ductwork and efficient multi-stage cooling keep homes comfortable.",
    permitNote: "City of Fremont Building Division requires mechanical permits and HERS duct leakage verification for all central heating and AC replacements.",
    rebateNote: "Fremont residents qualify for BayREN energy efficiency grants and state electrification rebates.",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50670.123456!2d-121.98!3d37.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc47e246e7f8b%3A0x6b758b98e1f0e42a!2sFremont%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    reviews: [
      {
        name: "Kenneth R.",
        neighborhood: "Mission San Jose, Fremont",
        date: "1 month ago",
        rating: 5,
        source: "Google Review",
        comment: "Installed a multi-zone ductless system in our Fremont home. ReamsHVAC was super professional, clean, and delivered great airflow throughout."
      }
    ],
    faqs: [
      {
        q: "How quickly can you dispatch an HVAC technician in Fremont?",
        a: "We maintain active technician routes along I-880 and Mission Blvd in Fremont for same-day diagnostic calls and rapid emergency dispatch."
      }
    ]
  },
  "san-francisco": {
    slug: "san-francisco",
    name: "San Francisco",
    regionId: "san-francisco",
    regionName: "San Francisco",
    tagline: "Urban, Multi-Zone & Compact Space HVAC Engineering",
    heroDescription: "San Francisco's specialized C-20 HVAC contractor. Ductless mini splits, compact inverter heat pumps, sound dampening, and historical home heating solutions.",
    neighborhoods: ["Mission District", "Sunset District", "Richmond District", "Pacific Heights", "Noe Valley", "SoMa", "Marina District", "Bernal Heights", "Hayes Valley"],
    climateNote: "San Francisco microclimates range from foggy west side neighborhoods (Sunset, Richmond) needing efficient heating and humidity control to sunnier east side pockets (Mission, SoMa) benefiting from compact cooling.",
    permitNote: "San Francisco Department of Building Inspection (DBI) mechanical permits require careful property line set-back and decibel compliance for exterior condensers.",
    rebateNote: "San Francisco homeowners qualify for TECH Clean California heat pump rebates and BayREN electrification funds.",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100900.123456!2d-122.44!3d37.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    reviews: [
      {
        name: "Marcus V.",
        neighborhood: "Noe Valley, San Francisco",
        date: "1 month ago",
        rating: 5,
        source: "Yelp Verified",
        comment: "Installed a 3-zone Mitsubishi mini split in our Noe Valley home. Clean installation, preserved plaster walls, and operates silently."
      }
    ],
    faqs: [
      {
        q: "What HVAC system works best for San Francisco flats and Victorians?",
        a: "Ductless mini splits and slimline inverter heat pumps are ideal for San Francisco homes lacking attic ductwork, providing quiet room-by-room heating and cooling."
      }
    ]
  }
};
