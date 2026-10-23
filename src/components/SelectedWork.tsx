"use client";

import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PROJECTS, Project } from "@/data/portfolio";
import { FolderGit2, Search, Filter } from "lucide-react";

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack", "Systems & Linux", "Frontend & Telemetry"];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>production.builds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Selected Work
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Engineered for high concurrency, microsecond query speeds, responsive typography, and systems-level ergonomics.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full md:w-64 font-mono text-xs">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search tech (e.g. FastAPI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
        <Filter className="w-3.5 h-3.5 text-slate-500 mr-1" />
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg border transition ${
                isActive
                  ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 font-semibold"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/80"
              }`}
            >
              {cat} <span className="opacity-60 text-[10px]">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 rounded-xl bg-slate-900/40 border border-slate-800 font-mono text-xs text-slate-500">
          No projects matching your search.
        </div>
      )}

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
