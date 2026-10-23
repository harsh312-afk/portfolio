"use client";

import React from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <div className="p-6 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
      <div>
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-[11px] font-mono text-emerald-400 mb-1.5 block">
              // {project.category}
            </span>
            <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition"
                aria-label={`GitHub for ${project.title}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights Callout */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6 space-y-1.5 p-3.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
              Architecture Callouts:
            </span>
            {project.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-emerald-400 font-mono font-bold shrink-0">›</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer & Tags */}
      <div>
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60 mb-4">
          {project.techStack.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpenDetails(project)}
          className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1.5 font-semibold group/btn"
        >
          <span>Architecture Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
