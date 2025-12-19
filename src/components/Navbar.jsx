import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="fixed top-4 inset-x-0 max-w-fit mx-auto z-50">
      <nav className="glass-card flex items-center gap-1 p-1 rounded-full ring-1 ring-white/10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActiveTab(item.name)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors duration-200 z-10",
              activeTab === item.name ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            )}
          >
            {activeTab === item.name && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-zinc-800/80 rounded-full -z-10"
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