import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, ShieldCheck } from 'lucide-react';

export default function HoursModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const schedule = [
    { zone: 'MALL GALLERIA & STORES', hours: '10:00 AM – 11:00 PM', days: 'MONDAY – SUNDAY' },
    { zone: 'SKY DECK DINING & LOUNGES', hours: '12:00 PM – 01:00 AM', days: 'MONDAY – SUNDAY' },
    { zone: '4K LASER IMAX CINEMA', hours: '10:00 AM – 02:00 AM', days: 'DAILY SHOWINGS' },
    { zone: 'VALET & EV CHARGING HUB', hours: '24 HOURS / 7 DAYS', days: 'ALWAYS OPEN' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-slate-700/80 shadow-2xl bg-[#0a0c12] p-5 sm:p-8 space-y-6"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-bold text-white uppercase">
                  OPENING HOURS
                </h3>
                <span className="text-[10px] font-mono text-slate-400">DESTINATION SCHEDULE</span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full glass-panel text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {schedule.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl glass-panel border border-slate-800 space-y-1">
                <div className="text-[10px] font-mono text-cyan-400 uppercase font-bold">{item.days}</div>
                <div className="text-sm font-bold text-white uppercase">{item.zone}</div>
                <div className="text-xs font-mono text-slate-300 font-semibold">{item.hours}</div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center text-xs font-mono text-slate-400">
            Concierge Desk operates from 09:00 AM daily at Central Atrium.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
