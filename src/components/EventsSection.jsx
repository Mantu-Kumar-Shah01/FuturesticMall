import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const EVENTS = [
  {
    id: 'e1',
    dateDay: '27',
    dateMonth: 'SEP',
    title: 'FASHION NIGHT',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=70',
  },
  {
    id: 'e2',
    dateDay: '04',
    dateMonth: 'OCT',
    title: 'LIVE MUSIC',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=70',
  },
  {
    id: 'e3',
    dateDay: '12',
    dateMonth: 'OCT',
    title: 'ART EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=500&q=70',
  },
];

export default function EventsSection({ onOpenRSVPModal }) {
  return (
    <section id="events" className="py-24 bg-[#04060b] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
              07 EVENTS
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
              EXCITING EVENTS <br />
              <span className="text-blue-500">ALL YEAR ROUND.</span>
            </h2>
          </div>

          <button className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-slate-700 text-xs font-mono text-white tracking-widest uppercase transition-all glass-panel hover:border-blue-500">
            <span>VIEW ALL EVENTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Event Cards Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS.map((evt) => (
              <div
                key={evt.id}
                onClick={() => onOpenRSVPModal(evt)}
                className="group relative h-96 rounded-2xl overflow-hidden glass-panel border border-slate-800 hover:border-blue-500/60 transition-all duration-300 cursor-pointer flex flex-col justify-between p-6"
              >
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-[#04060b]/40 to-transparent" />

                {/* Big Date */}
                <div className="relative z-10 space-y-0">
                  <div className="font-editorial text-3xl font-extrabold text-white leading-none">
                    {evt.dateDay}
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-300">
                    {evt.dateMonth}
                  </div>
                </div>

                {/* Title & Link */}
                <div className="relative z-10 space-y-2">
                  <h3 className="font-editorial text-2xl font-bold text-white uppercase group-hover:text-blue-400 transition-colors">
                    {evt.title}
                  </h3>
                  <div className="inline-flex items-center space-x-1 text-xs font-mono text-blue-400 group-hover:text-blue-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute -right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel border border-slate-700 text-slate-300 hover:text-white shadow-xl hidden lg:flex">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
