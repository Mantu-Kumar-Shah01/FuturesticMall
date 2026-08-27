import React from 'react';
import { ArrowLeft, Clock, MapPin, Calendar, Star, Utensils } from 'lucide-react';

const RESTAURANTS = [
  { id: 'glasshouse', name: 'THE GLASS HOUSE', cuisine: 'Modern European', floor: 'Floor 03 — Sky Terrace', hours: '11:00 AM - 10:00 PM', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=70', tag: 'MICHELIN 2-STAR' },
  { id: 'spiceaffair', name: 'SPICE AFFAIR', cuisine: 'Indian Kitchen', floor: 'Level 02 — South Gallery', hours: '11:00 AM - 11:00 PM', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=70', tag: 'PRIVATE GASTRONOMY' },
  { id: 'sushiart', name: 'SUSHI ART', cuisine: 'Japanese Omakase', floor: 'Level 03 — North Lounge', hours: '12:00 PM - 11:00 PM', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=70', tag: 'CHEF TABLE' },
  { id: 'caffeverde', name: 'CAFFE VERDE', cuisine: 'Italian Artisan Coffee', floor: 'Level 01 — Atrium Concourse', hours: '08:00 AM - 10:00 PM', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=70', tag: 'BARISTA LAB' },
];

export default function DiningPage({ onNavigate, onOpenReservation }) {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
        <button onClick={() => onNavigate('home')} className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] uppercase">
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        <div className="space-y-2 max-w-2xl">
          <div className="text-[11px] font-mono tracking-widest text-[#56D6FF] uppercase">CULINARY COLLECTION</div>
          <h1 className="font-editorial text-5xl font-extrabold uppercase tracking-tight">COME HUNGRY. <span className="text-[#19A7FF]">LEAVE INSPIRED.</span></h1>
          <p className="text-slate-400 text-xs font-light">Explore world-class gastronomy, rooftop sky bars, and artisan cafes across our 3D destination.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {RESTAURANTS.map((r) => (
            <div key={r.id} className="group rounded-3xl overflow-hidden glass-panel border border-slate-800 p-6 space-y-4 hover:border-[#19A7FF]/50 transition-all flex flex-col justify-between">
              <div className="h-64 rounded-2xl overflow-hidden relative bg-slate-900">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 text-[#56D6FF] text-[10px] font-mono font-bold border border-slate-700">{r.tag}</span>
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#19A7FF] font-bold">{r.cuisine}</div>
                <h3 className="font-editorial text-3xl font-bold text-white uppercase">{r.name}</h3>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                  <span className="flex items-center space-x-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /><span>{r.floor}</span></span>
                  <span className="flex items-center space-x-1"><Clock className="w-3.5 h-3.5 text-slate-500" /><span>{r.hours}</span></span>
                </div>
              </div>

              <button
                onClick={() => onOpenReservation(r)}
                className="w-full py-3.5 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(25,167,255,0.4)] flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>RESERVE TABLE →</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
