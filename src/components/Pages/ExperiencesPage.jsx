import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const EXPERIENCES = [
  { id: 'exp1', title: 'SHOP', subtitle: 'Global Flagship Boutiques', desc: 'Step into bespoke VIP fitting rooms, haute couture runways, and limited edition drops.', image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70' },
  { id: 'exp2', title: 'DINE', subtitle: 'Culinary Artistry & Caviar Vaults', desc: 'Taste Michelin-starred menus from world-renowned chefs across elevated sky terraces.', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=70' },
  { id: 'exp3', title: 'PLAY', subtitle: '4K Laser IMAX & VR Dome', desc: 'Immerse yourself in laser dome cinema screens, esports arenas, and private acoustics suites.', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=70' },
  { id: 'exp4', title: 'UNWIND', subtitle: 'Architectural Spa Retreat', desc: 'Recharge in hydrotherapy pools, oxygen lounges, and rooftop zen holistic sanctuaries.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=70' },
];

export default function ExperiencesPage({ onNavigate }) {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
        <button onClick={() => onNavigate('home')} className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] uppercase">
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        <div className="space-y-2 max-w-2xl">
          <div className="text-[11px] font-mono tracking-widest text-[#56D6FF] uppercase">CURATED ATTRACTIONS</div>
          <h1 className="font-editorial text-5xl font-extrabold uppercase tracking-tight">FEATURED <span className="text-[#19A7FF]">EXPERIENCES.</span></h1>
          <p className="text-slate-400 text-xs font-light">Immerse yourself in world-class entertainment, shopping, dining, and wellness sanctuary suites.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {EXPERIENCES.map((e) => (
            <div key={e.id} className="group rounded-3xl overflow-hidden glass-panel border border-slate-800 p-6 space-y-4 hover:border-[#19A7FF]/50 transition-all flex flex-col justify-between">
              <div className="h-64 rounded-2xl overflow-hidden relative bg-slate-900">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-[#19A7FF] uppercase font-bold">{e.subtitle}</div>
                <h3 className="font-editorial text-3xl font-bold text-white uppercase">{e.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
