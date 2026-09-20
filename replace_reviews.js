import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const startTarget = '{/* 10. Reviews Carousel */}';
const endTarget = '{/* 3. How It Works Section */}';

const startIndex = content.indexOf(startTarget);
const endIndex = content.indexOf(endTarget);

if (startIndex !== -1 && endIndex !== -1) {
  const newSection = `{/* 10. Reviews Carousel */}
      <section className="relative pt-24 pb-48 lg:pb-64 overflow-hidden border-t border-slate-200">
        {/* Background image representing the modern home */}
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1784693931/Untitled_design_2_tnj3em.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-slate-900/60 backdrop-blur-md"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Don't Just Take Our Word For It</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-blue-400">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                </div>
                <span className="font-bold text-slate-200">4.9/5 Average based on 500+ reviews</span>
              </div>
            </div>
            <Link to="/reviews" className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-500 transition-colors shadow-md inline-flex items-center shrink-0">
              Read All Reviews <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Scrolling Carousel */}
        <div className="relative z-20 w-full overflow-hidden pb-8 group">
           {/* Fade masks */}
           <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-slate-900/80 to-transparent z-30 pointer-events-none"></div>
           <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-slate-900/80 to-transparent z-30 pointer-events-none"></div>
           
           <div className="flex w-max animate-scroll-left gap-6 px-6">
             {/* Duplicate cards for infinite effect */}
             {[...Array(2)].map((_, i) => (
               <div key={\`review-scroll-\${i}\`} className="flex gap-6">
                  {/* Card 1 */}
                  <div className="w-[350px] sm:w-[400px] bg-white p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col hover:shadow-md transition-shadow shrink-0">
                    <div className="flex text-blue-600 mb-4">
                      <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-blue-900/80 italic mb-6 flex-grow">"Our furnace died right before Thanksgiving. The Reams team came out the same day, gave a fair quote, and installed the new unit beautifully. So clean and professional."</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="font-bold text-blue-950">Sarah M.</p>
                        <p className="text-xs text-blue-900/60">San Jose, CA</p>
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded">Google</span>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="w-[350px] sm:w-[400px] bg-white p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col hover:shadow-md transition-shadow shrink-0">
                    <div className="flex text-blue-600 mb-4">
                      <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-blue-900/80 italic mb-6 flex-grow">"Converted our whole house to Mitsubishi heat pumps. The crew was incredible. They respected our property and the rebate guidance they provided saved us thousands."</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="font-bold text-blue-950">David & Elena R.</p>
                        <p className="text-xs text-blue-900/60">Palo Alto, CA</p>
                      </div>
                      <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded">Yelp</span>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="w-[350px] sm:w-[400px] bg-white p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col hover:shadow-md transition-shadow shrink-0">
                    <div className="flex text-blue-600 mb-4">
                      <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-blue-900/80 italic mb-6 flex-grow">"Best HVAC company in the East Bay. Honest, didn't try to upsell me on things I didn't need. Highly recommend their yearly maintenance plan."</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="font-bold text-blue-950">Michael T.</p>
                        <p className="text-xs text-blue-900/60">Oakland, CA</p>
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded">Google</span>
                    </div>
                  </div>
                  {/* Additional Card 4 */}
                  <div className="w-[350px] sm:w-[400px] bg-white p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col hover:shadow-md transition-shadow shrink-0">
                    <div className="flex text-blue-600 mb-4">
                      <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-blue-900/80 italic mb-6 flex-grow">"Super fast response time! Our AC went out during the hottest week of the year and they had it fixed the next morning. Very grateful for their prompt service."</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="font-bold text-blue-950">Jessica K.</p>
                        <p className="text-xs text-blue-900/60">Santa Clara, CA</p>
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded">Google</span>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>
      `;
  
  content = content.slice(0, startIndex) + newSection + content.slice(endIndex);
  fs.writeFileSync('src/pages/Home.tsx', content);
  console.log('Successfully updated reviews section');
} else {
  console.log('Could not find start or end index');
}
