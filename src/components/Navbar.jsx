import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Mindset", href: "#mindset" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50">
      <nav className="flex items-center gap-1 p-2 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md shadow-lg shadow-blue-900/10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActiveTab(item.name)}
            className={cn(
              "relative px-5 py-2 text-sm font-semibold transition-colors duration-200 z-10",
              activeTab === item.name ? "text-white" : "text-slate-400 hover:text-slate-200"
            )}
          >
            {activeTab === item.name && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}