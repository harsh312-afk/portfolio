"use client";

import React from "react";
import { Terminal, Cpu, GitFork, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/Github";
import { OPEN_SOURCE_SYSTEMS, PERSONAL_INFO } from "@/data/portfolio";

export default function OpenSourceSystems() {
  return (
    <section id="systems" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800 mb-3">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span>linux.kernel --workstation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Open Source & Systems
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Deep dedication to Linux internals, Wayland workstation ricing, shell automation scripts, and reproducible developer setups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {OPEN_SOURCE_SYSTEMS.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  {item.stars}
                </span>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-white transition"
                  aria-label="GitHub Source"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-base font-semibold text-white mb-2 font-mono">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Linux Environment Banner */}
      <div className="p-6 rounded-xl bg-[#0d1322] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300">
            Workstation: <strong className="text-white">CachyOS Linux</strong> + <strong className="text-emerald-400">Hyprland (Wayland)</strong> + UWSM
          </span>
        </div>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 text-xs font-semibold transition"
        >
          <GithubIcon className="w-3.5 h-3.5" /> View Dotfiles Repository
        </a>
      </div>
    </section>
  );
}
