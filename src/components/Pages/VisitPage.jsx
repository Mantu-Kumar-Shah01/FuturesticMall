import React from 'react';
import { ArrowLeft, MapPin, Clock, Phone, Mail, Car, Train, Bus, ArrowUpRight, Zap } from 'lucide-react';

export default function VisitPage({ onNavigate, onOpenParkingModal, onOpenHoursModal }) {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Nexora+City+Mall', '_blank');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
        <button onClick={() => onNavigate('home')} className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] uppercase">
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        <div className="space-y-2 max-w-2xl">
          <div className="text-[11px] font-mono tracking-widest text-[#56D6FF] uppercase">VISITOR GUIDE & ACCESS</div>
          <h1 className="font-editorial text-5xl font-extrabold uppercase tracking-tight">WE ARE HERE <span className="text-[#19A7FF]">FOR YOU.</span></h1>
          <p className="text-slate-400 text-xs font-light">Plan your trip with valet services, live multi-story parking tracking, EV superchargers, and direct Metro Express concourse access.</p>
        </div>

        {/* Quick Tools Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div onClick={onOpenParkingModal} className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-[#19A7FF] transition-all cursor-pointer space-y-2">
            <div className="flex items-center justify-between">
              <Car className="w-6 h-6 text-[#19A7FF]" />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#19A7FF]/20 text-[#56D6FF]">1,420 SPOTS</span>
            </div>
            <div className="font-editorial text-xl font-bold text-white uppercase">LIVE PARKING STATUS</div>
            <p className="text-xs text-slate-400 font-light">View real-time multi-story parking space availability.</p>
          </div>

          <div onClick={onOpenHoursModal} className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-[#19A7FF] transition-all cursor-pointer space-y-2">
            <div className="flex items-center justify-between">
              <Clock className="w-6 h-6 text-[#19A7FF]" />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#19A7FF]/20 text-[#56D6FF]">10 AM - 11 PM</span>
            </div>
            <div className="font-editorial text-xl font-bold text-white uppercase">OPENING HOURS</div>
            <p className="text-xs text-slate-400 font-light">Check store, dining, and holiday operating schedules.</p>
          </div>

          <div onClick={handleDirections} className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-[#19A7FF] transition-all cursor-pointer space-y-2">
            <div className="flex items-center justify-between">
              <MapPin className="w-6 h-6 text-[#19A7FF]" />
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </div>
            <div className="font-editorial text-xl font-bold text-white uppercase">GET DIRECTIONS</div>
            <p className="text-xs text-slate-400 font-light">Open live GPS route navigation in Google Maps.</p>
          </div>
        </div>

        {/* Address & Transport Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl glass-panel border border-slate-800 space-y-4 bg-[#07121C]">
            <h3 className="font-editorial text-2xl font-bold text-white uppercase">ADDRESS & CONCIERGE</h3>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="text-base font-bold text-white">Nexora City Mall</div>
              <div>120 Grand Avenue, Downtown Metropolis, 56001</div>
              <div className="pt-2 border-t border-slate-800 space-y-1">
                <div>PHONE: +91 123 456 7890</div>
                <div>EMAIL: info@nexoramall.com</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-slate-800 space-y-4 bg-[#07121C]">
            <h3 className="font-editorial text-2xl font-bold text-white uppercase">TRANSPORTATION</h3>
            <div className="space-y-3 text-xs font-mono text-slate-300">
              <div className="flex items-center space-x-3"><Car className="w-4 h-4 text-[#19A7FF]" /><span><strong>BY CAR:</strong> 2,500 Covered Spots & VIP Valet</span></div>
              <div className="flex items-center space-x-3"><Train className="w-4 h-4 text-[#19A7FF]" /><span><strong>BY METRO:</strong> Green Line - City Mall Station (2 min walk)</span></div>
              <div className="flex items-center space-x-3"><Bus className="w-4 h-4 text-[#19A7FF]" /><span><strong>BY BUS:</strong> Routes 15, 24, 42, 65 City Mall Stop</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
