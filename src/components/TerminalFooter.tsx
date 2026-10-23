"use client";

import React from "react";
import { Terminal, Github, FileText, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface TerminalFooterProps {
  onOpenTerminal: () => void;
}

export default function TerminalFooter({ onOpenTerminal }: TerminalFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-800/80 font-mono text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-slate-300 font-medium">
            Harsh Gautam © {new Date().getFullYear()} — Full-Stack & AI/ML Engineer
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Engineered with Next.js App Router, TypeScript & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenTerminal}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition"
            title="Launch Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>&gt;_ CLI</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="hover:text-white transition"
            aria-label="Resume"
          >
            <FileText className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
