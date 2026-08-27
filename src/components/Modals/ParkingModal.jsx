import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Car, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ParkingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const floors = [
    { name: 'PARKING LEVEL P1 — VALET VIP', total: 400, free: 120, status: 'AVAILABLE' },
    { name: 'PARKING LEVEL P2 — EV CHARGING HUB', total: 800, free: 540, status: 'FAST CHARGE READY' },
    { name: 'PARKING LEVEL P3 — GENERAL EXPRESS', total: 1300, free: 760, status: 'AVAILABLE' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-xl rounded-3xl glass-panel border border-slate-700/80 shadow-2xl overflow-hidden bg-[#0a0c12] p-8 space-y-6"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-bold text-white uppercase">
                  LIVE PARKING METRICS
                </h3>
                <span className="text-[10px] font-mono text-slate-400">REAL-TIME MULTI-STORY TRACKER</span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full glass-panel text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {floors.map((fl, idx) => (
              <div key={idx} className="p-4 rounded-2xl glass-panel border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-white tracking-wider">{fl.name}</span>
                  <span className="text-emerald-400 font-bold flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{fl.status}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>SPOTS AVAILABLE: <strong className="text-cyan-300 text-sm">{fl.free}</strong> / {fl.total}</span>
                  <span>{Math.round((fl.free / fl.total) * 100)}% CAPACITY</span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                    style={{ width: `${(fl.free / fl.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between text-xs font-mono text-cyan-300">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>48 ULTRA-FAST EV CHARGERS READY</span>
            </div>
            <button className="px-4 py-1.5 rounded-lg bg-cyan-500 text-black font-bold uppercase text-[10px]">
              RESERVE VALET
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
