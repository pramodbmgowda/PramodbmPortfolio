import React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { Briefcase, Globe, Target } from "lucide-react";

const BentoCard = ({ className, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={cn(
      "group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300",
      className
    )}
  >
    {children}
  </motion.div>
);

export default function BentoGrid() {
  return (
    <section id="about" className="px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. Main Profile */}
        <BentoCard className="md:col-span-2 row-span-2 bg-gradient-to-br from-slate-900 to-slate-950">
           <div className="flex flex-col h-full justify-between">
             <div className="flex items-start justify-between mb-6">
                <div className="w-24 h-24 rounded-full border-2 border-slate-700 overflow-hidden bg-slate-800">
                    <img src="/images/avatar-1.jpg" alt="Pramod" className="w-full h-full object-cover" />
                </div>
                {/* ADJUSTED: Neutral badge */}
                <div className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                    OPEN TO OPPORTUNITIES
                </div>
             </div>
             <div>
                <h3 className="text-3xl font-bold text-white mb-4">Pramod B M</h3>
                {/* ADJUSTED: Simple, humble bio */}
                <p className="text-slate-400 text-lg leading-relaxed">
                  I am based in Bengaluru, India. I am deeply interested in 
                  <strong> Business Management</strong> and <strong>Strategy</strong>. 
                  Always looking to learn and grow.
                </p>
             </div>
           </div>
        </BentoCard>

        {/* 2. Key Skills */}
        <BentoCard className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6 text-emerald-400">
            <Briefcase className="w-6 h-6" />
            <h4 className="font-bold text-white text-lg">Focus Areas</h4>
          </div>
          <ul className="space-y-3">
             {/* ADJUSTED: General business skills */}
             {['Business Strategy', 'Market Research', 'Management', 'Operations'].map(skill => (
              <li key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                 {skill}
              </li>
            ))}
          </ul>
        </BentoCard>

        {/* 3. Global Mindset */}
        <BentoCard className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6 text-blue-400">
            <Globe className="w-6 h-6" />
            <h4 className="font-bold text-white text-lg">Curiosity</h4>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            I enjoy exploring how markets work in different parts of the world and understanding economic trends.
          </p>
        </BentoCard>

        {/* 4. Bottom Card */}
        <BentoCard className="md:col-span-3 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-6 bg-blue-900/10 border-blue-800/30">
           <div className="flex items-center gap-6">
             <div className="p-4 rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
               <Target size={32} />
             </div>
             <div>
               {/* ADJUSTED: Removed "Execution First" */}
               <h4 className="text-xl font-bold text-white">My Approach</h4>
               <p className="text-slate-400 mt-1">Believing in consistency and hard work.</p>
             </div>
           </div>
           
           {/* ADJUSTED: Removed fake stats, kept simple values */}
           <div className="flex gap-12 text-center">
             <div>
               <span className="block text-xl font-bold text-white">Focused</span>
               <span className="text-xs text-slate-500 uppercase tracking-wider">Mindset</span>
             </div>
             <div>
               <span className="block text-xl font-bold text-white">Driven</span>
               <span className="text-xs text-slate-500 uppercase tracking-wider">Attitude</span>
             </div>
           </div>
        </BentoCard>

      </div>
    </section>
  );
}