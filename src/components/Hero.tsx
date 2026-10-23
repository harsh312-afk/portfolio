"use client";

import React, { useState } from "react";
import { Terminal, Download, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  const [copiedCommand, setCopiedCommand] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx harsh-bio");
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-20 relative">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>{PERSONAL_INFO.badge}</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
        Crafting high-speed web apps & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">intelligent systems.</span>
      </h1>

      {/* Lead Paragraph */}
      <p className="text-lg text-slate-400 max-w-3xl mb-8 leading-relaxed">
        I am <span className="text-slate-100 font-semibold">{PERSONAL_INFO.name}</span>, a full-stack developer with a focus on Next.js, FastAPI, and data engineering. Building robust web solutions with an eye for systems-level performance.
      </p>

      {/* Action Buttons & CLI Quick Copy */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-white text-slate-950 font-semibold text-sm flex items-center gap-2 hover:bg-slate-200 transition-all shadow-md shadow-white/10"
        >
          View Projects <ArrowUpRight className="w-4 h-4" />
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm flex items-center gap-2 hover:border-slate-700 hover:text-white transition-all"
        >
          <Download className="w-4 h-4" /> Resume PDF
        </a>

        {/* Quick-copy command npx harsh-bio */}
        <button
          onClick={copyCommand}
          className="px-4 py-3 rounded-lg bg-[#111726] border border-slate-800/90 hover:border-emerald-500/40 text-slate-300 font-mono text-xs flex items-center gap-2.5 transition-all group"
          title="Click to copy CLI command"
        >
          <span className="text-emerald-400 font-bold">$</span>
          <span>npx harsh-bio</span>
          {copiedCommand ? (
            <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-sans font-semibold">
              <Check className="w-3.5 h-3.5" /> Copied
            </span>
          ) : (
            <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
          )}
        </button>
      </div>

      {/* Quick Stats Grid */}
      <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {PERSONAL_INFO.quickStats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
              {stat.label}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-slate-200 font-mono">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
