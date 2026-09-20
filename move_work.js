import fs from 'fs';

let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Remove the old "11. Gallery Teaser"
const oldGalleryStart = code.indexOf('{/* 11. Gallery Teaser */}');
const nextSection = code.indexOf('{/* 12. Financing & Rebates */}');

if (oldGalleryStart !== -1 && nextSection !== -1) {
    code = code.slice(0, oldGalleryStart) + code.slice(nextSection);
}

// 2. Insert the new "3. Our Work Section" before "10. Reviews Carousel"
const newWorkSection = `      {/* 3. Our Work Section */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center text-slate-300 font-bold tracking-wider uppercase text-sm mb-4">
                <Wrench className="w-4 h-4 mr-2" />
                Our Work
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Precision Craftsmanship in Every Detail
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed tracking-wide">
                We take pride in clean lines, perfect ductwork, and meticulous installations. Explore some of our recent projects across the Bay Area.
              </p>
            </div>
            <Link to="/gallery" className="bg-white text-slate-900 font-bold px-8 py-4 rounded-md hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center shrink-0">
              View Full Gallery <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[400px] shadow-lg border border-slate-800 bg-slate-800">
               <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop" alt="Clean ductwork installation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-2 block">Commercial</span>
                  <h3 className="text-2xl font-bold text-white">Custom Ductwork</h3>
               </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[400px] shadow-lg border border-slate-800 bg-slate-800">
               <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop" alt="Outdoor condenser unit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-2 block">Residential</span>
                  <h3 className="text-2xl font-bold text-white">Heat Pump Install</h3>
               </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[400px] shadow-lg border border-slate-800 bg-slate-800 hidden lg:block">
               <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" alt="Thermostat installation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-2 block">Smart Home</span>
                  <h3 className="text-2xl font-bold text-white">System Integration</h3>
               </div>
            </div>
          </div>
        </div>
      </section>
`;

const reviewsTarget = code.indexOf('{/* 10. Reviews Carousel */}');
if (reviewsTarget !== -1) {
    code = code.slice(0, reviewsTarget) + newWorkSection + '\n      ' + code.slice(reviewsTarget);
}

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('done');
