import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Ready to build something extraordinary?
        </h2>
        <a 
          href="mailto:pramodbmgowda7@gmail.com" 
          className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
        >
          Let's Talk
        </a>
        
        <div className="mt-12 text-zinc-500 text-sm flex flex-col items-center gap-2">
           <p>&copy; {new Date().getFullYear()} Pramod B M. All rights reserved.</p>
           <p className="text-zinc-600">Built with React, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}