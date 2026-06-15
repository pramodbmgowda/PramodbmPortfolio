import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const experiments = [
  {
    title: "PestiScan IoT",
    category: "IoT & Data Science",
    description: "An end-to-end safety system bridging hardware sensors with software analytics. Integrates Arduino telemetry with Python ML models to detect pesticide residues on produce in real-time.",
    tags: ["IoT", "Python", "Machine Learning", "Hardware"],
    status: "Prototype",
  },
  {
    title: "IND Tax Bot",
    category: "AI & LegalTech",
    description: "A serverless RAG application interpreting Indian Tax Laws with high retrieval accuracy. Includes a fault-tolerant scraping pipeline that reduced data ingestion failure rates by 90%.",
    tags: ["LLM", "RAG", "Python", "Vector DB"],
    status: "MVP",
  },
  {
    title: "Archie Tutor",
    category: "AI & EdTech",
    description: "A cross-platform study agent with a custom 'Draft & Context' system for real-time batch document analysis, orchestrating a Python microservice with Gemini 2.0 for multi-modal reasoning.",
    tags: ["LLM", "Python", "Gemini", "Multi-modal"],
    status: "Completed",
  },
];

export default function Labs() {
  return (
    <section id="labs" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">The Lab</h2>
          <p className="text-zinc-400 max-w-xl">
            My digital playground. Here are the prototypes, experiments, and solutions 
            I am currently engineering.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
                {item.category}
              </span>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                item.status === 'Prototype' ? 'bg-purple-500/10 text-purple-400' : 
                item.status === 'MVP' ? 'bg-blue-500/10 text-blue-400' : 'bg-green-500/10 text-green-400'
              }`}>
                {item.status}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map(tag => (
                <span key={tag} className="text-xs text-zinc-500">#{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}