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
    location: 'Gallery Room',
    desc: 'Immersive installation combining digital art and interactive projections.',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=500&q=70',
  },
];

export default function EventsSection({ onOpenRSVPModal, onNavigate }) {
  return (
    <section id="events" className="py-24 bg-[#04060b] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
              07 EVENTS & CULTURAL CALENDAR
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
              EXCITING EVENTS <br />
              <span className="text-[#19A7FF]">ALL YEAR ROUND.</span>
            </h2>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('events')}
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-200 hover:text-[#19A7FF] transition-colors uppercase"
          >
            <span>VIEW ALL EVENTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Event Poster Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((evt) => (
            <div
              key={evt.id}
              onClick={() => onNavigate && onNavigate('events')}
              className="group rounded-3xl overflow-hidden glass-panel border border-slate-800 hover:border-[#19A7FF] hover:shadow-[0_0_25px_rgba(25,167,255,0.3)] transition-all duration-300 cursor-pointer space-y-4 p-5 flex flex-col justify-between"
            >
              {/* Event Image */}
              <div className="h-64 w-full rounded-2xl overflow-hidden relative bg-slate-900">
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 p-3 rounded-2xl glass-panel text-center min-w-[60px] border border-slate-700">
                  <div className="font-editorial text-2xl font-extrabold text-white leading-none">
                    {evt.dateDay}
                  </div>
                  <div className="text-[10px] font-mono font-bold text-[#19A7FF] tracking-wider uppercase">
                    {evt.dateMonth}
                  </div>
                </div>
              </div>

              {/* Event Specs */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    {evt.location}
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-white uppercase group-hover:text-[#19A7FF] transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-light leading-relaxed line-clamp-2">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#56D6FF] uppercase">VIP ACCESS AVAILABLE</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenRSVPModal(evt);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-mono font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(25,167,255,0.4)]"
                  >
                    RSVP →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
