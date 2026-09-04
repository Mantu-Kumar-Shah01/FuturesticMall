import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function DiscoverPage({ onNavigate }) {
  const pillars = [
    { title: 'HAUTE FASHION', desc: 'Global flagship boutiques, runway exclusives, and personal styling vaults.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=70' },
    { title: 'CULINARY ARTISTRY', desc: 'Michelin-starred gastronomy, private caviar rooms, and sky lounge dining.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=70' },
    { title: 'DIGITAL ENTERTAINMENT', desc: '4K laser IMAX dome, immersive spatial audio stages, and VR esports arenas.', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=70' },
    { title: 'ARCHITECTURAL WELLNESS', desc: 'Serene hydrotherapy pools, oxygen lounges, and rooftop holistic retreats.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=70' },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 space-y-12 w-full">
        {/* Back Navigation Button */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] transition-colors uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        {/* Page Hero */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-[11px] font-mono tracking-widest text-[#56D6FF] uppercase">
            DISCOVER NEXORA — THE ARCHITECTURAL VISION
          </div>
          <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight break-words">
            MORE THAN A MALL. <br />
            <span className="text-[#19A7FF]">A DESTINATION.</span>
          </h1>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Nexora represents the convergence of high-end architecture, digital technology, and luxury experiences. Designed as a living sanctuary for global brands, gastronomy, and cultural events.
          </p>
        </div>

        {/* 4 Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group rounded-3xl overflow-hidden glass-panel border border-slate-800 p-6 space-y-4 hover:border-[#19A7FF]/50 transition-all">
              <div className="h-64 rounded-2xl overflow-hidden relative bg-slate-900">
                <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              </div>
              <div className="space-y-1">
                <h3 className="font-editorial text-2xl font-bold text-white uppercase group-hover:text-[#19A7FF] transition-colors">{pillar.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#07121C]">
          <div className="space-y-1">
            <h3 className="font-editorial text-2xl font-bold text-white uppercase">READY TO EXPLORE OUR STORES?</h3>
            <p className="text-xs font-mono text-slate-400">Browse 180+ global brands and order exclusive drops online.</p>
          </div>
          <button
            onClick={() => onNavigate('stores')}
            className="px-6 py-3.5 rounded-xl bg-[#19A7FF] text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(25,167,255,0.4)] whitespace-nowrap"
          >
            VIEW STORE DIRECTORY →
          </button>
        </div>
      </div>
    </div>
  );
}
