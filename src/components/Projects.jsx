import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const experiments = [
  {
    title: "Agri-Sense",
    category: "IoT & Data Science",
    description: "An automated pesticide detection system using IoT sensors. Designed to help farmers analyze chemical residue levels in real-time.",
    tags: ["Research", "IoT", "Python", "Hardware"],
    status: "Prototype",
  },
  {
    title: "Tax-GPT Advisor",
    category: "AI & LegalTech",
    description: "A Streamlit-based RAG application that digests Indian Tax Law documents to provide accurate, citation-backed answers to users.",
    tags: ["LLM", "Streamlit", "Python", "RAG"],
    status: "MVP",
  },
  {
    title: "Enterprise CRM Mod",
    category: "Salesforce Automation",
    description: "A comprehensive Salesforce module featuring Apex automation and LWC interfaces to streamline complex business data flows.",
    tags: ["Apex", "LWC", "Salesforce", "Cloud"],
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