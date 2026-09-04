import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, CheckCircle2, Utensils } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReservationModal({ isOpen, onClose, restaurant }) {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-08-28');
  const [time, setTime] = useState('19:30');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen || !restaurant) return null;

  const handleBook = (e) => {
    e.preventDefault();
    setConfirmed(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
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
                RESERVATION CONCIERGE
              </div>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white uppercase">
                {restaurant.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass-panel text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {confirmed ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="font-editorial text-2xl font-bold text-white uppercase">
                RESERVATION CONFIRMED
              </h4>
              <p className="text-xs font-mono text-slate-300">
                Table reserved for {guests} Guests on {date} at {time}. Confirmation code sent to your wallet.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 uppercase">GUESTS</label>
                <div className="grid grid-cols-3 sm:flex items-center gap-2">
                  {[1, 2, 4, 6, 8].map((g) => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => setGuests(g)}
                      className={`py-2 px-2 rounded-xl text-xs font-mono font-bold border transition-all text-center ${
                        guests === g
                          ? 'bg-cyan-500 text-black border-cyan-400'
                          : 'glass-panel text-slate-300 border-slate-800'
                      }`}
                    >
                      {g} {g === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 uppercase">DATE</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl glass-panel text-xs text-white border border-slate-700 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 uppercase">TIME</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl glass-panel text-xs text-white border border-slate-700 focus:outline-none focus:border-cyan-500 bg-slate-900"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="19:30">07:30 PM (Peak)</option>
                    <option value="21:00">09:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)]"
              >
                CONFIRM TABLE RESERVATION →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
