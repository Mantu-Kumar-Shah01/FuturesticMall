import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ticket, CheckCircle2, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVPModal({ isOpen, onClose, event }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen || !event) return null;

  const handleRSVP = (e) => {
    e.preventDefault();
    setConfirmed(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#c084fc', '#ffffff'],
    });
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 3000);
  };

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
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                EVENT PASS REGISTRATION
              </div>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white uppercase">
                {event.title}
              </h3>
            </div>
            <button onClick={onClose} className="p-2 rounded-full glass-panel text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {confirmed ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="font-editorial text-2xl font-bold text-white uppercase">
                VIP PASS CONFIRMED!
              </h4>
              <p className="text-xs font-mono text-slate-300">
                Digital Pass issued for {name || 'Guest'}. Pass details sent to {email || 'your email'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRSVP} className="space-y-4">
              <div className="p-4 rounded-2xl glass-panel border border-slate-800 space-y-1">
                <div className="text-xs font-mono text-cyan-400">{event.dateDay} {event.dateMonth} • {event.location}</div>
                <p className="text-xs text-slate-400 font-light">{event.desc}</p>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 uppercase">FULL NAME</label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl glass-panel text-xs text-white border border-slate-700 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 uppercase">EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl glass-panel text-xs text-white border border-slate-700 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)]"
              >
                CLAIM DIGITAL RSVP PASS →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
