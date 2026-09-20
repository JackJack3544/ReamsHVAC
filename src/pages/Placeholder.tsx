export function Placeholder({ title }: { title: string }) {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto text-center min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">{title}</h1>
      <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg">
        This page is scheduled for development in the next sprint according to the build priority manifest.
      </p>
      <div className="w-full max-w-md mx-auto bg-slate-50 p-6 rounded-lg border border-slate-200">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Build Status</p>
        <p className="text-slate-700">Pending Implementation</p>
      </div>
    </div>
  );
}
