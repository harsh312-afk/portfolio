"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import OpenSourceSystems from "@/components/OpenSourceSystems";
import ExperienceEducation from "@/components/ExperienceEducation";
import ContactSection from "@/components/ContactSection";
import TerminalFooter from "@/components/TerminalFooter";
import TerminalModal from "@/components/TerminalModal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      
      <main>
        <Hero />
        <SelectedWork />
        <TechnicalArsenal />
        <OpenSourceSystems />
        <ExperienceEducation />
        <ContactSection />
      </main>

      <TerminalFooter onOpenTerminal={() => setTerminalOpen(true)} />
      
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
