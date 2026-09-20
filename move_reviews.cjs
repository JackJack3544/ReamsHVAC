const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const reviewsStart = code.indexOf('{/* 10. Reviews Carousel */}');
const nextSection = code.indexOf('{/* 11. Gallery Teaser */}');

if (reviewsStart !== -1 && nextSection !== -1) {
    const reviewsCode = code.slice(reviewsStart, nextSection);
    code = code.slice(0, reviewsStart) + code.slice(nextSection);
    
    const targetIndex = code.indexOf('{/* 3. How It Works Section */}');
    code = code.slice(0, targetIndex) + reviewsCode + code.slice(targetIndex);
    
    // Fix Quote Form
    const quoteFormOriginal = `          <div className="bg-blue-950 rounded-xl shadow-xl p-6 sm:p-8 border border-blue-900/50">
            <h2 className="text-2xl font-black text-white text-center mb-6 tracking-tight">Get A Free Quote</h2>
            <form className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input type="text" placeholder="Name" className="w-full bg-white pl-10 pr-3 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black placeholder:text-slate-500" />
              </div>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <input type="text" placeholder="Phone Number" className="w-full bg-white pl-10 pr-3 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black placeholder:text-slate-500" />
              </div>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input type="email" placeholder="E-Mail" className="w-full bg-white pl-10 pr-3 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black placeholder:text-slate-500" />
              </div>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PenLine className="h-5 w-5 text-slate-400" />
                </div>
                <input type="text" placeholder="Message" className="w-full bg-white pl-10 pr-3 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black placeholder:text-slate-500" />
              </div>
              <button type="submit" className="bg-white text-black font-bold px-8 py-3 rounded-md hover:bg-slate-100 transition-colors shadow-sm">
                SUBMIT
              </button>
            </form>
          </div>`;
          
    const quoteFormWhite = `          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-slate-100">
            <h2 className="text-2xl font-black text-blue-950 text-center mb-6 tracking-tight">Get A Free Quote</h2>
            <form className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input type="text" placeholder="Name" className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-slate-800" />
              </div>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <input type="text" placeholder="Phone Number" className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-slate-800" />
              </div>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input type="email" placeholder="E-Mail" className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-slate-800" />
              </div>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PenLine className="h-5 w-5 text-slate-400" />
                </div>
                <input type="text" placeholder="Message" className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-slate-800" />
              </div>
              <button type="submit" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-md hover:bg-orange-600 transition-colors shadow-sm">
                SUBMIT
              </button>
            </form>
          </div>`;
          
    code = code.replace(quoteFormOriginal, quoteFormWhite);
    
    fs.writeFileSync('src/pages/Home.tsx', code);
    console.log("Updated Home.tsx successfully.");
} else {
    console.error("Could not find sections");
}
