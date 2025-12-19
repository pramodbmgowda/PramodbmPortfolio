import React from "react";
import { Search, Code2, Rocket } from "lucide-react";

export default function Approach() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">My Approach</h2>
        <p className="text-zinc-400 max-w-2xl">
          I don't just jump into code. I follow a rigorous engineering process to ensure 
          scalability, security, and performance from Day 1.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Step 1 */}
        <div className="relative pl-8 border-l border-zinc-800 space-y-4">
          <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border border-sky-500" />
          <div className="w-12 h-12 rounded-lg bg-sky-900/10 flex items-center justify-center text-sky-400">
            <Search size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">Discovery & Strategy</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            I start by understanding the core business logic. Whether it's a Salesforce pipeline or an AI Agent, 
            I map out the data flow and edge cases before writing a single line.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative pl-8 border-l border-zinc-800 space-y-4">
          <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border border-emerald-500" />
          <div className="w-12 h-12 rounded-lg bg-emerald-900/10 flex items-center justify-center text-emerald-400">
            <Code2 size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">Development & RAG</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            I build using modern standards (Next.js 15, React Native). For AI, I implement RAG pipelines 
            (LlamaIndex/Pinecone) to ensure the model isn't just hallucinating, but actually retrieving facts.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative pl-8 border-l border-zinc-800 space-y-4">
           <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border border-pink-500" />
          <div className="w-12 h-12 rounded-lg bg-pink-900/10 flex items-center justify-center text-pink-400">
            <Rocket size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">Deploy & Scale</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Production is different from localhost. I focus on optimizing bundle sizes, setting up CI/CD, 
            and ensuring the UI is buttery smooth (60fps) on all devices.
          </p>
        </div>

      </div>
    </section>
  );
}