"use client";

import React from "react";
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { TIMELINE } from "@/data/portfolio";

export default function ExperienceEducation() {
  return (
    <section id="timeline" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800 mb-3">
          <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
          <span>career.timeline</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Education & Engineering Path
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Academic foundation in AI/ML combined with intensive hands-on product and systems engineering.
        </p>
      </div>

      <div className="relative border-l border-slate-800 ml-3 sm:ml-4 space-y-12">
        {TIMELINE.map((item, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-8 group">
            {/* Timeline bullet indicator */}
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-emerald-500/80 group-hover:scale-125 group-hover:border-emerald-400 transition-all" />

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400 mb-1">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                {item.period}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                {item.location}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
              {item.role}
            </h3>
            <span className="text-xs font-mono text-slate-400 block mb-3">
              @ {item.organization}
            </span>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed max-w-2xl">
              {item.description}
            </p>

            <ul className="space-y-2">
              {item.details.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400 max-w-2xl">
                  <span className="text-emerald-400 font-bold shrink-0 font-mono">›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
