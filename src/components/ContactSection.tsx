"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>initiate.handshake</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Collaborate.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing full-stack engineering roles, systems tooling, or AI/ML integrations? Reach out directly.
          </p>

          <div className="space-y-3 pt-2 font-mono text-xs">
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="min-w-0">
                  <span className="text-slate-500 block text-[10px]">EMAIL</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-slate-200 hover:text-emerald-400 transition truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyText("email", PERSONAL_INFO.email)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition shrink-0"
                title="Copy Email"
              >
                {copiedKey === "email" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="min-w-0">
                  <span className="text-slate-500 block text-[10px]">PHONE</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-slate-200 hover:text-emerald-400 transition block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyText("phone", PERSONAL_INFO.phone)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition shrink-0"
                title="Copy Phone"
              >
                {copiedKey === "phone" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">LOCATION</span>
                  <span className="text-slate-200 block">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <Github className="w-4 h-4 text-slate-400 shrink-0" />
                <div className="min-w-0">
                  <span className="text-slate-500 block text-[10px]">GITHUB</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline truncate block"
                  >
                    github.com/harsh312-afk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-xl bg-slate-900/50 border border-slate-800">
            {submitted ? (
              <div className="text-center py-12 space-y-4 font-mono">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Message Transmitted</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto font-sans leading-relaxed">
                  Thanks for reaching out, <span className="text-white font-medium">{formData.name}</span>. I'll review your inquiry and get back to you at <span className="text-emerald-400">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 mb-1.5 uppercase tracking-wider text-[11px]">
                    Identifier / Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1.5 uppercase tracking-wider text-[11px]">
                    Return Address / Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1.5 uppercase tracking-wider text-[11px]">
                    Payload / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Details regarding your engineering role, project, or collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 font-sans text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Transmission</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
