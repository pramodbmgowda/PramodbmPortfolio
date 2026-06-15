import React from "react";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 max-w-4xl relative z-10"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/50 border border-blue-800/50 backdrop-blur-sm mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-bold text-blue-300 tracking-wide uppercase">
            Open to Opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
          Engineering Intelligent <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Systems.
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          CS Engineering undergraduate building full-stack apps, LLM-powered tools,
          and AI-driven systems &mdash; from RAG pipelines to IoT hardware integration.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            href="#about"
            className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            About Me
            <ArrowRight className="w-5 h-5" />
          </a>
          
          {/* Scroll to Contact Form */}
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full bg-slate-900 border border-slate-800 text-white font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}