import React from "react";
import { Github, Smartphone, Cloud, Database, Cpu } from "lucide-react";

const projects = [
  {
    title: "Archie - AI Tutoring Agent",
    description: "A multi-modal React Native app leveraging Gemini 1.5 Flash. Features a custom 'Math Canvas' for handwritten equation solving and vision-based homework analysis.",
    tags: ["React Native", "Gemini 1.5", "Node.js"],
    link: "https://github.com/pramodbmgowda/-archie-savvy-app.git",
    icon: <Smartphone className="text-pink-400" size={20} />,
    bg: "bg-pink-900/10",
    border: "border-pink-500/20"
  },
  {
    title: "IND Tax Bot (RAG)",
    description: "Serverless RAG application for interpreting Indian Tax Laws. Architected a fault-tolerant 'stealth' scraping pipeline to bypass WAF protections.",
    tags: ["Python", "LlamaIndex", "Pinecone"],
    link: "https://github.com/pramodbmgowda/indian-tax-bot.git",
    icon: <Database className="text-amber-400" size={20} />,
    bg: "bg-amber-900/10",
    border: "border-amber-500/20"
  },
  {
    title: "Salesforce Lead CRM",
    description: "End-to-end CRM implementation for B2B retail. Automated lead capture, routing, and scoring rules. Designed real-time dashboards for pipeline forecasting.",
    tags: ["Salesforce", "Apex", "Automation"],
    link: "https://github.com/pramodbmgowda/Lead-Management-Sales-Tracking.git",
    icon: <Cloud className="text-sky-400" size={20} />,
    bg: "bg-sky-900/10",
    border: "border-sky-500/20"
  },
  {
    title: "PestiScan IoT",
    description: "AI-driven pesticide detection system integrating hardware (Arduino) with software (Python ML models). Solved real-world organic produce safety challenges.",
    tags: ["IoT", "Python", "Arduino"],
    link: "https://github.com/pramodbmgowda/AI-Powered-Pesticide-Detection-In-Organic-Produce.git",
    icon: <Cpu className="text-emerald-400" size={20} />,
    bg: "bg-emerald-900/10",
    border: "border-emerald-500/20"
  }
];

export default function Projects() {
  return (
    <section id="work" className="px-4 max-w-7xl mx-auto py-24">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Works</h2>
          <p className="text-zinc-400 mt-2 max-w-lg">
             A showcase of complex systems I've engineered.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-3xl border ${project.border} ${project.bg} hover:bg-opacity-40 transition-all duration-300 backdrop-blur-sm`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950/50 flex items-center justify-center border border-zinc-700/50 shadow-lg">
                   {project.icon}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-white/5 hover:bg-white hover:text-black transition-colors text-zinc-400"
                >
                  <Github size={20} />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 opacity-90">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-950/40 text-zinc-400 border border-zinc-700/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}