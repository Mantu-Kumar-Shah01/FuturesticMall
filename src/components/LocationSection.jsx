import React from 'react';
import { MapPin, Clock, Phone, Mail, ArrowRight, Car, Train, Bus } from 'lucide-react';

export default function LocationSection() {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Nexora+City+Mall', '_blank');
  };

  return (
    <section id="visit" className="py-24 bg-[#04060b] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Details */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                09 VISIT US
              </div>
              <h2 className="font-editorial text-4xl font-extrabold text-white uppercase tracking-tight">
                WE ARE HERE <br />
                <span className="text-blue-500">FOR YOU.</span>
              </h2>
            </div>

            <div className="space-y-3 text-xs font-mono text-slate-400">
              <div>
                <strong className="text-white font-bold block">Nexora City Mall</strong>
                <span>120 Grand Avenue, Downtown</span> <br />
                <span>Metropolis, 56001</span>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-1">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Open Daily: 10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>+91 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>info@nexoramall.com</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleDirections}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]"
            >
              <span>GET DIRECTIONS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Center Column: Digital Map Graphic */}
          <div className="lg:col-span-5 h-[360px] rounded-3xl overflow-hidden glass-panel border border-slate-800 relative flex items-center justify-center p-6 bg-[#060810]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b25_1px,transparent_1px),linear-gradient(to_bottom,#1e293b25_1px,transparent_1px)] bg-[size:2rem_2rem]" />

            <svg className="w-full h-full opacity-50" viewBox="0 0 600 400" fill="none">
              <path d="M 50 200 L 550 200" stroke="#334155" strokeWidth="6" strokeDasharray="8 8" />
              <path d="M 300 50 L 300 350" stroke="#334155" strokeWidth="6" strokeDasharray="8 8" />
              <path d="M 120 80 Q 250 180 500 120" stroke="#2563eb" strokeWidth="3" />
              <rect x="220" y="140" width="160" height="120" rx="12" fill="#0f172a" stroke="#2563eb" strokeWidth="2" />
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-blue-500 opacity-75" />
                <div className="relative p-3 rounded-full bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.8)]">
                  <MapPin className="w-5 h-5 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Transport Cards */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-4 rounded-2xl glass-panel border border-slate-800 space-y-1">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-white">
                <Car className="w-4 h-4 text-blue-400" />
                <span>BY CAR</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 font-light">
                Ample parking available across all levels.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-slate-800 space-y-1">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-white">
                <Train className="w-4 h-4 text-blue-400" />
                <span>BY METRO</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 font-light">
                Green Line - City Mall Station 2 min walk.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-slate-800 space-y-1">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-white">
                <Bus className="w-4 h-4 text-blue-400" />
                <span>BY BUS</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 font-light">
                Routes 15, 24, 42, 65 City Mall Stop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
