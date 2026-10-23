"use client";

import React, { useState } from "react";
import { Terminal, Github, FileText, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "// work", href: "#projects" },
    { label: "// arsenal", href: "#arsenal" },
    { label: "// systems", href: "#systems" },
    { label: "// timeline", href: "#timeline" },
    { label: "// contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-800/80 px-6 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group font-mono text-sm">
          <span className="text-emerald-400 font-bold">~</span>
          <span className="text-slate-100 font-semibold group-hover:text-emerald-300 transition-colors">
            harsh.dev
          </span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-400 border border-slate-700/60 font-mono">
            v2.6
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-slate-400">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 hover:text-emerald-300 font-mono text-xs flex items-center gap-1.5 transition-all"
              title="Open Interactive CLI"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI</span>
            </button>
          )}

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t border-slate-800 mt-3 space-y-3 font-mono text-xs">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-emerald-400 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
            >
              Download Resume
            </a>
            {onOpenTerminal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-emerald-400 border border-slate-800 text-xs"
              >
                Launch CLI
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
