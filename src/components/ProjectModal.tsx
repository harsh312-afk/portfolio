"use client";

import React from "react";
import { X, Github, ExternalLink, Cpu, CheckCircle2, Layers } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-2xl rounded-2xl bg-[#0f172a] border border-slate-700/80 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-slate-100 space-y-6"
      >
        {/* Title bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-emerald-400 block mb-1">
              // {project.category}
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
          {project.tagline}
        </p>

        {/* Overview */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-emerald-400" /> System Overview
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 uppercase tracking-wider mb-2.5">
            <Cpu className="w-3.5 h-3.5 text-teal-400" /> Architectural Decisions
          </span>
          <ul className="space-y-2">
            {project.architectureDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="text-emerald-400 font-bold font-mono shrink-0">›</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Production Highlights */}
        <div>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 uppercase tracking-wider mb-2.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Key Engineering Metrics
          </span>
          <ul className="space-y-1.5">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                <span className="text-sky-400 shrink-0 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
            Technologies Leveraged:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition"
            >
              <Github className="w-4 h-4" /> View GitHub Repository
            </a>
          ) : <div />}
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs transition"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
