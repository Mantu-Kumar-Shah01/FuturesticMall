import React, { useState } from 'react';
import { ArrowLeft, Gamepad2, Clock, Calendar, ShieldCheck, CheckCircle2, Star, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

const GAMES = [
  {
    id: 'g1',
    title: 'CYBERPUNK VR ARENA',
    category: 'Full-Body Virtual Reality',
    pricePerHour: 35,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=70',
    desc: 'Haptic suits, 360-degree wireless motion tracking, and multiplayer sci-fi tournaments.',
  },
  {
    id: 'g2',
    title: 'APEX FORMULA SIMULATOR',
    category: 'Motion Racing Rig',
    pricePerHour: 30,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=70',
    desc: 'Professional hydraulic racing cockpits with triple 4K OLED screens and direct-drive force feedback.',
  },
  {
    id: 'g3',
    title: '4K LASER IMAX DOME',
    category: 'Cinematic Cinema Dome',
    pricePerHour: 25,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=70',
    desc: '70ft hemispherical laser projection screen with 12-channel Dolby Atmos spatial sound.',
  },
  {
    id: 'g4',
    title: 'RETRO PINBALL & LASER TAG',
    category: 'Arcade Concourse',
    pricePerHour: 20,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=70',
    desc: 'Over 100 rare vintage pinball machines, Japanese rhythm games, and multi-level laser tag arena.',
  },
];

const DURATION_OPTIONS = [
  { hours: 1, label: '1 HOUR SESSION', multiplier: 1 },
  { hours: 2, label: '2 HOURS SESSION (-15%)', multiplier: 1.7 },
  { hours: 3, label: '3 HOURS VIP PASS (-25%)', multiplier: 2.25 },
  { hours: 8, label: 'FULL-DAY ALL-ACCESS PASS', multiplier: 3.5 },
];

const TIME_SLOTS = ['10:00 AM', '12:00 PM', '02:30 PM', '05:00 PM', '07:30 PM', '09:30 PM'];

export default function PlayPage({ onNavigate }) {
  const [selectedGame, setSelectedGame] = useState(GAMES[0]);
  const [selectedDuration, setSelectedDuration] = useState(DURATION_OPTIONS[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[0]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const calculateTotal = () => {
    return Math.round(selectedGame.pricePerHour * selectedDuration.multiplier);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#19A7FF', '#56D6FF', '#ffffff'],
    });
    setTimeout(() => {
      setBookingConfirmed(false);
    }, 4500);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
        {/* Back Button & URL Hash */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] transition-colors uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO MAIN MALL (URL: /#play)</span>
        </button>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-2">
            <div className="text-[11px] font-mono tracking-widest text-[#56D6FF] uppercase flex items-center space-x-2">
              <Gamepad2 className="w-4 h-4 text-[#19A7FF]" />
              <span>NEXORA CYBER PLAYSTORE & GAMING ARENA</span>
            </div>
            <h1 className="font-editorial text-5xl font-extrabold uppercase tracking-tight">
              BOOK HOURLY <span className="text-[#19A7FF]">GAMING SESSIONS.</span>
            </h1>
          </div>

          <p className="text-slate-400 text-xs font-light max-w-md">
            Invest in hourly gaming passes or VIP all-access day tickets. Choose your simulator, duration, and time slot.
          </p>
        </div>

        {/* Confirmation Modal Banner */}
        {bookingConfirmed && (
          <div className="p-6 rounded-3xl glass-panel border border-emerald-500/60 bg-[#07121C] flex items-center space-x-4 animate-bounce">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 flex-none" />
            <div>
              <div className="font-editorial text-xl font-bold text-white uppercase">
                GAMING PASS CONFIRMED: {selectedGame.title}!
              </div>
              <div className="text-xs font-mono text-slate-300">
                Time: {selectedTimeSlot} • Duration: {selectedDuration.label} • Total Paid: ${calculateTotal()}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 60%: Games Catalog List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">SELECT GAMING ARENA OR SIMULATOR</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {GAMES.map((game) => {
                const isSelected = selectedGame.id === game.id;
                return (
                  <div
                    key={game.id}
                    onClick={() => setSelectedGame(game)}
                    className={`group rounded-3xl overflow-hidden glass-panel border transition-all duration-300 cursor-pointer p-5 space-y-3 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#19A7FF] bg-[#07121C]/90 shadow-[0_0_30px_rgba(25,167,255,0.4)] scale-[1.02]'
                        : 'border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className="h-44 w-full rounded-2xl overflow-hidden relative bg-slate-900">
                      <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform opacity-80" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[#56D6FF] text-[9px] font-mono font-bold uppercase border border-slate-700">
                        ${game.pricePerHour}/HR
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-[#19A7FF] font-bold">{game.category}</div>
                      <h3 className="font-editorial text-lg font-bold text-white uppercase">{game.title}</h3>
                      <p className="text-slate-400 text-xs font-light line-clamp-2">{game.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right 40%: Hourly Booking System */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-slate-800 bg-[#060812] space-y-6 flex flex-col justify-between h-fit">
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#56D6FF] uppercase font-bold">RESERVATION SUMMARY</span>
                  <h3 className="font-editorial text-2xl font-bold text-white uppercase">{selectedGame.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-400">BASE RATE</div>
                  <div className="text-xl font-editorial font-bold text-[#19A7FF]">${selectedGame.pricePerHour}/hr</div>
                </div>
              </div>

              {/* Step 1: Select Hourly Duration */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-300 uppercase font-bold flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#19A7FF]" />
                  <span>1. SELECT PLAYTIME DURATION</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {DURATION_OPTIONS.map((dur) => (
                    <button
                      key={dur.hours}
                      onClick={() => setSelectedDuration(dur)}
                      className={`p-3 rounded-xl text-left text-xs font-mono transition-all border ${
                        selectedDuration.hours === dur.hours
                          ? 'bg-[#19A7FF] text-black font-bold border-[#19A7FF] shadow-[0_0_15px_#19A7FF]'
                          : 'glass-panel text-slate-300 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {dur.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Time Slot */}
              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-mono text-slate-300 uppercase font-bold flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#19A7FF]" />
                  <span>2. SELECT TIME SLOT</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 px-3 rounded-xl text-center text-xs font-mono font-bold transition-all border ${
                        selectedTimeSlot === slot
                          ? 'bg-[#56D6FF] text-black border-[#56D6FF]'
                          : 'glass-panel text-slate-300 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total Price & Confirm Action */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">TOTAL ESTIMATE</span>
                <span className="text-2xl font-editorial font-bold text-white">${calculateTotal()}</span>
              </div>

              <button
                onClick={handleConfirmBooking}
                className="w-full py-4 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(25,167,255,0.4)] flex items-center justify-center space-x-2"
              >
                <Zap className="w-4 h-4" />
                <span>BOOK GAMING SESSION (${calculateTotal()}) →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
