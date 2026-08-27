import React, { useRef } from 'react';
import { ArrowRight, ChevronRight, MapPin, Clock } from 'lucide-react';

const RESTAURANTS = [
  {
    id: 'glasshouse',
    name: 'THE GLASS HOUSE',
    cuisine: 'Modern European',
    floor: 'Floor 03',
    hours: '11:00 AM - 10:00 PM',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=70',
  },
  {
    id: 'spiceaffair',
    name: 'SPICE AFFAIR',
    cuisine: 'Indian Kitchen',
    floor: 'Level 02',
    hours: '11:00 AM - 11:00 PM',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=70',
  },
  {
    id: 'sushiart',
    name: 'SUSHI ART',
    cuisine: 'Japanese',
    floor: 'Level 03',
    hours: '12:00 PM - 11:00 PM',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=70',
  },
  {
    id: 'caffeverde',
    name: 'CAFFE VERDE',
    cuisine: 'Italian',
    floor: 'Level 01',
    hours: '08:00 AM - 10:00 PM',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=70',
  },
];

export default function DiningCarousel({ onOpenReservationModal, onNavigate }) {
  return (
    <section id="dining" className="py-24 bg-[#04060b] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
              06 DINING EXPERIENCE
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
              COME HUNGRY. <br />
              <span className="text-[#19A7FF]">LEAVE INSPIRED.</span>
            </h2>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('dining')}
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-200 hover:text-[#19A7FF] transition-colors uppercase"
          >
            <span>VIEW ALL RESTAURANTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANTS.map((rest) => (
            <div
              key={rest.id}
              onClick={() => onNavigate && onNavigate('dining')}
              className="group rounded-3xl overflow-hidden glass-panel border border-slate-800 hover:border-[#19A7FF] hover:shadow-[0_0_25px_rgba(25,167,255,0.3)] transition-all duration-300 cursor-pointer flex flex-col justify-between p-5 space-y-4"
            >
              {/* Card Image */}
              <div className="h-56 w-full rounded-2xl overflow-hidden relative bg-slate-900">
                <img
                  src={rest.image}
                  alt={rest.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-transparent" />

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[#56D6FF] text-[9px] font-mono font-bold tracking-widest uppercase border border-slate-700">
                  {rest.cuisine}
                </span>
              </div>

              {/* Specs */}
              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-editorial text-xl font-bold text-white uppercase group-hover:text-[#19A7FF] transition-colors">
                    {rest.name}
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400">{rest.floor}</div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">{rest.hours}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenReservationModal(rest);
                    }}
                    className="p-2 rounded-xl bg-[#19A7FF] text-black hover:bg-[#19A7FF]/90 font-bold transition-all shadow-[0_0_15px_rgba(25,167,255,0.4)]"
                  >
                    <ArrowRight className="w-4 h-4" />
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
