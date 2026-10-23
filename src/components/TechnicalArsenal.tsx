"use client";

import React from "react";
import { Terminal, Layers, Server, Database, Wrench, Code2 } from "lucide-react";
import { SKILLS } from "@/data/portfolio";

export default function TechnicalArsenal() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case "Frontend":
        return <Layers className="w-4 h-4 text-sky-400" />;
      case "Backend":
        return <Server className="w-4 h-4 text-indigo-400" />;
      case "Databases":
        return <Database className="w-4 h-4 text-amber-400" />;
      default:
        return <Wrench className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <section id="arsenal" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800 mb-3">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>system.skills --status</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Technical Arsenal
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Core technologies, frameworks, and low-level system tooling leveraged for production architectures.
        </p>
      </div>

      {/* Grid of Categorized Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div
            key={category}
            className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700/80 transition-all flex flex-col justify-between"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white flex items-center gap-2 font-mono">
                {getCategoryIcon(category)}
                <span>{category}</span>
              </h3>
              <span className="text-[11px] font-mono text-slate-500">
                {items.length} items
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/50 font-mono transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
