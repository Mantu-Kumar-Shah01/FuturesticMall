import React from 'react';
import { Search, Navigation, Car, Compass, Clock, Calendar } from 'lucide-react';

export default function SmartVisitorTools({
  onOpenSearch,
  onOpenParkingModal,
  onOpenHoursModal,
  onOpenStoreDirectory,
}) {
  const tools = [
    { id: 'search', title: 'Find a Store', icon: Search, action: onOpenSearch },
    { id: 'directions', title: 'Get Directions', icon: Navigation, action: () => {
      const el = document.getElementById('visit');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }},
    { id: 'parking', title: 'Parking', icon: Car, action: onOpenParkingModal },
    { id: 'map', title: 'Mall Map', icon: Compass, action: () => {
      const el = document.getElementById('floors');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }},
    { id: 'hours', title: 'Opening Hours', icon: Clock, action: onOpenHoursModal },
    { id: 'events', title: "What's On", icon: Calendar, action: () => {
      const el = document.getElementById('events');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }},
  ];

  return (
    <section className="py-24 bg-[#04060b] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-10">
          <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
            08 SMART VISITOR EXPERIENCE
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            EVERYTHING YOU NEED. <br />
            <span className="text-blue-500">ONE PLACE.</span>
          </h2>
        </div>

        {/* 6 Minimal Icon Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                onClick={tool.action}
                className="group p-6 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/60 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center space-y-3 h-36"
              >
                <div className="p-3 rounded-xl bg-slate-900 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-white transition-colors">
                  {tool.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
