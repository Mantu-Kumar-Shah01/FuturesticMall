import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalCTA() {
  const handlePlanVisit = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#38bdf8', '#ffffff'],
    });
    const el = document.getElementById('visit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-12 sm:py-32 bg-[#04060b] overflow-hidden border-t border-slate-900 text-left flex items-center">
      {/* Background Motion Blur Lights */}
      <img
        src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=70"
        alt="Highway light trails"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04060b] via-[#04060b]/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10 space-y-6 w-full">
        <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight break-words">
          YOUR NEXT <br />
          <span className="text-blue-500">EXPERIENCE</span> <br />
          STARTS HERE.
        </h2>

        <button
          onClick={handlePlanVisit}
          className="group inline-flex items-center justify-center space-x-3 px-6 sm:px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-[0.2em] uppercase transition-all shadow-[0_0_35px_rgba(37,99,235,0.5)] w-full sm:w-auto"
        >
          <span>PLAN YOUR VISIT</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
