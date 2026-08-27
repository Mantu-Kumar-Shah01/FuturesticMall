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

export default function DiningCarousel({ onOpenReservationModal }) {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="dining" className="py-24 bg-[#04060b] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
              06 DINING EXPERIENCE
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
              COME HUNGRY. <br />
              <span className="text-blue-500">LEAVE INSPIRED.</span>
            </h2>
          </div>

          <button className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-slate-700 text-xs font-mono text-white tracking-widest uppercase transition-all glass-panel hover:border-blue-500">
            <span>VIEW ALL RESTAURANTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory"
          >
            {RESTAURANTS.map((resto) => (
              <div
                key={resto.id}
                onClick={() => onOpenReservationModal(resto)}
                className="snap-start flex-none w-[260px] sm:w-[280px] group rounded-2xl overflow-hidden glass-panel border border-slate-800 hover:border-blue-500/60 transition-all duration-300 cursor-pointer space-y-4 p-4"
              >
                <div className="h-44 w-full rounded-xl overflow-hidden relative bg-slate-900">
                  <img
                    src={resto.image}
                    alt={resto.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-editorial text-lg font-bold text-white uppercase group-hover:text-blue-400 transition-colors">
                    {resto.name}
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400">{resto.cuisine}</div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{resto.floor}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{resto.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleScroll}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel border border-slate-700 text-slate-300 hover:text-white shadow-xl"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
