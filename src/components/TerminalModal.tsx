"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, X, CornerDownLeft } from "lucide-react";
import { PERSONAL_INFO, SKILLS, PROJECTS } from "@/data/portfolio";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: "harsh-shell --init",
      output: (
        <div className="text-slate-400 space-y-1">
          <p className="text-emerald-400 font-bold">Harsh Gautam CLI v2.6 [CachyOS x86_64 / Hyprland]</p>
          <p>Type <span className="text-emerald-300 font-semibold">'help'</span> for list of routines, <span className="text-emerald-300 font-semibold">'fastfetch'</span> for system specs, or <span className="text-emerald-300 font-semibold">'exit'</span> to dismiss.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = inputVal.trim();
    const cmd = rawCmd.toLowerCase();
    setInputVal("");

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "exit" || cmd === "quit") {
      onClose();
      return;
    }

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-slate-500">Available commands:</p>
            <p><span className="text-emerald-400 font-bold">bio</span> - Print background and positioning</p>
            <p><span className="text-emerald-400 font-bold">skills</span> - Dump full technical arsenal</p>
            <p><span className="text-emerald-400 font-bold">projects</span> - List flagship projects & metrics</p>
            <p><span className="text-emerald-400 font-bold">fastfetch</span> - Display Linux system info & ASCII</p>
            <p><span className="text-emerald-400 font-bold">systems</span> - Inspect workstation & Hyprland config</p>
            <p><span className="text-emerald-400 font-bold">contact</span> - Display direct contact endpoints</p>
            <p><span className="text-emerald-400 font-bold">clear</span> - Clear terminal screen</p>
            <p><span className="text-emerald-400 font-bold">exit</span> - Dismiss interactive CLI</p>
          </div>
        );
        break;

      case "fastfetch":
      case "neofetch":
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 text-xs font-mono py-2">
            <pre className="sm:col-span-4 text-emerald-400 leading-tight select-none">
{`   /\\
  /  \\
 / /\\ \\
/ /  \\ \\
\\ \\  / /
 \\ \\/ /
  \\  /
   \\/`}
            </pre>
            <div className="sm:col-span-8 space-y-1 text-slate-300">
              <p className="text-emerald-400 font-bold">harsh@cachyos-hyprland</p>
              <p className="text-slate-600">----------------------</p>
              <p><span className="text-slate-500">OS:</span> CachyOS Linux x86_64</p>
              <p><span className="text-slate-500">Kernel:</span> 6.13.x-cachyos-bore</p>
              <p><span className="text-slate-500">Uptime:</span> 12 days, 4 hours</p>
              <p><span className="text-slate-500">WM / Compositor:</span> Hyprland (Wayland)</p>
              <p><span className="text-slate-500">Bar / Session:</span> Waybar + UWSM</p>
              <p><span className="text-slate-500">Shell:</span> zsh / bash</p>
              <p><span className="text-slate-500">Terminal:</span> Kitty / Foot</p>
              <p><span className="text-slate-500">Editor:</span> VS Code / Windsurf</p>
            </div>
          </div>
        );
        break;

      case "bio":
        output = (
          <div className="space-y-2 text-slate-300 text-xs leading-relaxed">
            <p className="text-emerald-400 font-bold">{PERSONAL_INFO.name} // {PERSONAL_INFO.role}</p>
            <p>{PERSONAL_INFO.about}</p>
            <p className="text-slate-400">Location: {PERSONAL_INFO.location} • Education: B.Tech Computer Science, Ethics University</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs">
            {Object.entries(SKILLS).map(([cat, list]) => (
              <div key={cat}>
                <span className="text-emerald-400 font-semibold">{cat}: </span>
                <span className="text-slate-300">{list.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs">
            {PROJECTS.map((p, i) => (
              <div key={i} className="border-l-2 border-emerald-500/40 pl-2">
                <p className="text-white font-bold">{p.title} <span className="text-slate-500">({p.techStack.slice(0, 3).join(", ")})</span></p>
                <p className="text-slate-400">{p.tagline}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "systems":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Linux Workstation & Tooling Specs:</p>
            <p>› Compositor: Hyprland with dynamic animations, master tiling layout, and waybar JSON feeds</p>
            <p>› Session: Universal Wayland Session Manager (UWSM) managed via systemd user units</p>
            <p>› Scripts: Zero-touch bootstrap provisioning suite on Arch Linux / Fedora</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>Portfolio: <a href={PERSONAL_INFO.website} target="_blank" rel="noreferrer" className="text-emerald-400 underline">{PERSONAL_INFO.website}</a></p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <span className="text-emerald-400">{PERSONAL_INFO.phone}</span></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-emerald-400 underline">github.com/harsh312-afk</a></p>
          </div>
        );
        break;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            Command not recognized: <span className="text-white">"{rawCmd}"</span>. Type <span className="text-emerald-300 underline font-bold">'help'</span> for instructions.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl rounded-xl bg-[#090e17] border border-slate-700/80 shadow-2xl flex flex-col max-h-[80vh] overflow-hidden font-mono text-xs"
        role="dialog"
        aria-modal="true"
        aria-label="Interactive Terminal"
      >
        {/* Terminal Titlebar */}
        <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="ml-2 text-slate-400 flex items-center gap-1.5 text-[11px]">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" /> harsh@cachyos-hyprland: ~
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable logs */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1 leading-relaxed">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-400">
                <span>➜</span>
                <span className="text-slate-400">~</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">➜</span>
          <span className="text-slate-400">~</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'fastfetch', or command..."
            className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none text-xs"
          />
          <button type="submit" className="text-slate-500 hover:text-emerald-400" aria-label="Submit command">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
