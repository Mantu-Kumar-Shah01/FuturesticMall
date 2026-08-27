import React from 'react';
import { ArrowLeft, Ticket, Calendar, MapPin } from 'lucide-react';

const EVENTS = [
  { id: 'e1', dateDay: '27', dateMonth: 'SEP', title: 'AUTUMN FASHION NIGHT GALA', location: 'Central Atrium Stage • Level 01', desc: 'An exclusive runway showcase featuring international haute couture designers, live holographic visuals, and champagne reception.', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=70' },
  { id: 'e2', dateDay: '04', dateMonth: 'OCT', title: 'ELECTRONIC SYMPHONY & LASER SOUND', location: '4K Acoustics Dome • Level 03', desc: 'A futuristic synthesis of classical orchestra performance with immersive spatial laser synthesis.', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=70' },
  { id: 'e3', dateDay: '12', dateMonth: 'OCT', title: 'INTERNATIONAL ART & DESIGN TRIENNIAL', location: 'West Gallery • Level 02', desc: 'Unveiling groundbreaking digital art installations, generative kinetic sculptures, and blueprints.', image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=70' },
];

export default function EventsPage({ onNavigate, onOpenRSVP }) {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
        <button onClick={() => onNavigate('home')} className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] uppercase">
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        <div className="space-y-2 max-w-2xl">
          <div className="text-[11px] font-mono tracking-widest text-[#56D6FF] uppercase">CULTURAL CALENDAR</div>
          <h1 className="font-editorial text-5xl font-extrabold uppercase tracking-tight">EXCITING EVENTS <span className="text-[#19A7FF]">ALL YEAR ROUND.</span></h1>
          <p className="text-slate-400 text-xs font-light">Claim your RSVP VIP digital passes for runway galas, music domes, and art triennials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {EVENTS.map((e) => (
            <div key={e.id} className="group rounded-3xl overflow-hidden glass-panel border border-slate-800 p-6 space-y-4 hover:border-[#19A7FF]/50 transition-all flex flex-col justify-between">
              <div className="h-64 rounded-2xl overflow-hidden relative bg-slate-900">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div className="absolute top-4 left-4 p-3 rounded-2xl glass-panel text-center min-w-[64px] border border-slate-700">
                  <div className="font-editorial text-2xl font-extrabold text-white leading-none">{e.dateDay}</div>
                  <div className="text-[10px] font-mono font-bold text-[#19A7FF]">{e.dateMonth}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-[10px] font-mono text-[#56D6FF] uppercase">{e.location}</div>
                <h3 className="font-editorial text-2xl font-bold text-white uppercase">{e.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{e.desc}</p>
              </div>

              <button
                onClick={() => onOpenRSVP(e)}
                className="w-full py-3.5 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(25,167,255,0.4)] flex items-center justify-center space-x-2"
              >
                <Ticket className="w-4 h-4" />
                <span>RSVP PASS →</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
