import React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { Cpu, Globe, Award, Database, Terminal, Cloud } from "lucide-react";

const BentoCard = ({ className, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={cn(
      "group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 p-6 shadow-2xl backdrop-blur-sm transition-all hover:bg-zinc-900/80",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </motion.div>
);

export default function BentoGrid() {
  return (
    <section id="about" className="px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. About / Bio */}
        <BentoCard className="md:col-span-2 row-span-2">
           <div className="flex flex-col md:flex-row gap-6 h-full">
             <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border-2 border-zinc-700">
                {/* Ensure this image path is correct */}
                <img src="/images/avatar-1.jpg" alt="Pramod" className="w-full h-full object-cover" />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-white mb-2">Pramod B M</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Computer Science undergrad with a focus on <strong>AI/ML and Workflow Automation</strong>. 
                  I don't just write code; I design intelligent systems. 
                  My expertise spans from building RAG Chatbots to optimizing Salesforce pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300">Prompt Engineering</span>
                   <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300">Agile/Scrum</span>
                   <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300">System Design</span>
                </div>
             </div>
           </div>
        </BentoCard>

        {/* 2. Tech Stack - Cloud & DB */}
        <BentoCard className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4 text-sky-400">
            <Cloud className="w-6 h-6" />
            <h4 className="font-semibold text-white">Cloud & Data</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Salesforce', 'MySQL', 'MongoDB', 'Postman'].map(tech => (
              <span key={tech} className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs border border-zinc-700/50">
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* 3. Tech Stack - Core Dev */}
        <BentoCard className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4 text-emerald-400">
            <Terminal className="w-6 h-6" />
            <h4 className="font-semibold text-white">Development</h4>
          </div>
          <div className="flex flex-wrap gap-2">
             {['Next.js', 'React', 'Tailwind', 'Python', 'Java', 'Git'].map(tech => (
              <span key={tech} className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs border border-zinc-700/50">
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* 4. Certifications */}
        <BentoCard className="md:col-span-3 lg:col-span-3 flex-row items-center justify-between">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
               <Award size={24} />
             </div>
             <div>
               <h4 className="text-lg font-bold text-white">Certifications</h4>
               <p className="text-sm text-zinc-400">Oracle AI • Cisco Networking • Generative AI</p>
             </div>
           </div>
           <div className="hidden md:flex gap-2">
             <span className="text-4xl font-bold text-zinc-700">4+</span>
           </div>
        </BentoCard>

      </div>
    </section>
  );
}