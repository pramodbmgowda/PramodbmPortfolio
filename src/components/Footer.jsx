import React from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-slate-900 bg-[#020617] text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        <p className="text-slate-400 mb-8">
           Feel free to reach out if you'd like to connect.
        </p>
        
        <div className="flex justify-center gap-6">
            <a 
            href="mailto:pramodbmgowda7@gmail.com" 
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
            >
            <Mail className="w-5 h-5" />
            Email
            </a>
            
            <a 
            href="https://www.linkedin.com/in/pramodbm7" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
            >
            <Linkedin className="w-5 h-5" />
            LinkedIn
            </a>
        </div>
        
        <div className="mt-12 text-slate-700 text-xs">
           <p>&copy; {new Date().getFullYear()} Pramod B M.</p>
        </div>
      </div>
    </footer>
  );
}