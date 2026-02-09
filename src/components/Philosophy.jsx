import React from "react";

export default function Philosophy() {
  return (
    <section id="mindset" className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-8">What I Value</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-2">Curiosity</h3>
            <p className="text-slate-400 text-sm">
                Always asking questions and trying to understand how businesses work.
            </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-2">Persistence</h3>
            <p className="text-slate-400 text-sm">
                Believing in consistency and putting in the effort to achieve goals.
            </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-2">Growth</h3>
            <p className="text-slate-400 text-sm">
                Focusing on personal development and learning new things every day.
            </p>
        </div>

      </div>
    </section>
  );
}