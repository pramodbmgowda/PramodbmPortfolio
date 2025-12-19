import React from "react";
import { ArrowRight, FileText, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/20 blur-[100px] rounded-full -z-10" />

      <div className="flex flex-col items-center text-center space-y-8 px-4 max-w-5xl mx-auto z-10">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-emerald-400">Open to Work</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white"
        >
          Building Systems with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Intelligence & Logic.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
        >
          I bridge the gap between <strong>Enterprise Architecture (Salesforce)</strong> and <strong>Agentic AI</strong>. 
          Currently engineering automated solutions that scale.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <a 
            href="#work"
            className="group px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="images/PRAMOD BM_RESUME.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-12 flex items-center gap-6 text-zinc-500"
        >
          <a href="https://github.com/pramodbmgowda" target="_blank" className="hover:text-white transition-colors"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/pramodbm7" target="_blank" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
         
        </motion.div>
      </div>
    </section>
  );
}