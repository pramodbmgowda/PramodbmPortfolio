import React from "react";
import { Target, Zap, TrendingUp } from "lucide-react";

export default function Approach() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">How I Build</h2>
        <p className="text-zinc-400 max-w-2xl">
          I don't just write code; I engineer businesses. My process is designed to move 
          from idea to product-market fit with speed and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Step 1 */}
        <div className="relative pl-8 border-l border-zinc-800 space-y-4">
          <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border border-purple-500" />
          <div className="w-12 h-12 rounded-lg bg-purple-900/10 flex items-center justify-center text-purple-400">
            <Target size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">Strategy & Market Fit</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Before writing a line of code, I validate the problem. I analyze the business logic,
            user needs, and scalability requirements to ensure we are building the <em>right</em> thing.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative pl-8 border-l border-zinc-800 space-y-4">
          <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border border-blue-500" />
          <div className="w-12 h-12 rounded-lg bg-blue-900/10 flex items-center justify-center text-blue-400">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">Rapid Prototyping</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Speed matters. I leverage modern stacks (Next.js, Supabase, AI APIs) to ship MVPs fast. 
            I prioritize core features that deliver immediate value to users.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative pl-8 border-l border-zinc-800 space-y-4">
           <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border border-green-500" />
          <div className="w-12 h-12 rounded-lg bg-green-900/10 flex items-center justify-center text-green-400">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">Scale & Iterate</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Launch is just Day 1. I use analytics and user feedback loops to iterate constantly, 
            optimizing for retention, performance, and revenue growth.
          </p>
        </div>

      </div>
    </section>
  );
}