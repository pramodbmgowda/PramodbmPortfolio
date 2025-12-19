import React from "react";
import { motion } from "framer-motion";

const techs = [
  "Salesforce Apex", "Next.js 15", "React Native", "Gemini AI", 
  "Python", "LangChain", "Node.js", "Docker", "PostgreSQL", 
  "Framer Motion", "Tailwind CSS", "IoT", "Arduino"
];

export default function TechTicker() {
  return (
    <section className="py-10 overflow-hidden border-y border-white/5 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto relative flex">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090b] to-transparent z-10" />
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090b] to-transparent z-10" />

        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 pr-12"
          >
            {[...techs, ...techs].map((tech, i) => (
              <span key={i} className="text-4xl md:text-6xl font-bold text-zinc-800 uppercase whitespace-nowrap select-none">
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 pr-12"
          >
             {[...techs, ...techs].map((tech, i) => (
              <span key={i} className="text-4xl md:text-6xl font-bold text-zinc-800 uppercase whitespace-nowrap select-none">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}