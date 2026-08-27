import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Clock, Calendar, CheckCircle2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const SPA_TREATMENTS = [
  {
    id: 'u1',
    name: 'HYDROTHERAPY INFINITY POOL',
    category: 'Thermal Water Circuit',
    price: 75,
    duration: '60 MINS',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=70',
    desc: 'Heated mineral baths, hydro-massage jets, and cold plunge waterfalls with skyline atrium views.',
  },
  {
    id: 'u2',
    name: 'DEEP TISSUE AROMATHERAPY',
    category: 'Holistic Massage Sanctuary',
    price: 110,
    duration: '60 MINS',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=70',
    desc: 'Custom essential oil blends, hot volcanic stones, and deep muscle relief by master therapists.',
  },
  {
    id: 'u3',
    name: 'OXYGEN BAR & HERBAL TEA LOUNGE',
    category: 'Wellness Lounge',
    price: 45,
    duration: '45 MINS',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=70',
    desc: 'Pure oxygen therapy sessions paired with organic rare herbal teas and sound bath acoustics.',
  },
  {
    id: 'u4',
    name: 'HIMALAYAN SALT SAUNA RETREAT',
    category: 'Halotherapy Suite',
    price: 65,
    duration: '60 MINS',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=70',
    desc: 'Negative ion therapy walls with infrared sauna warmth to boost circulation and skin vitality.',
  },
];

const TIME_SLOTS = ['11:00 AM', '01:00 PM', '03:30 PM', '06:00 PM', '08:00 PM'];

export default function UnwindPage({ onNavigate }) {
  const [selectedSpa, setSelectedSpa] = useState(SPA_TREATMENTS[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[0]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#34d399', '#19A7FF', '#ffffff'],
    });
    setTimeout(() => {
      setBookingConfirmed(false);
    }, 4500);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
        <button onClick={() => onNavigate('home')} className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] uppercase">
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO MAIN MALL (URL: /#unwind)</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-2">
            <div className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>NEXORA HOLISTIC ARCHITECTURAL SPA & WELLNESS</span>
            </div>
            <h1 className="font-editorial text-5xl font-extrabold uppercase tracking-tight">
              RESERVE SPA <span className="text-[#19A7FF]">SANCTUARY.</span>
            </h1>
          </div>
        </div>

        {bookingConfirmed && (
          <div className="p-6 rounded-3xl glass-panel border border-emerald-500/60 bg-[#07121C] flex items-center space-x-4 animate-bounce">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 flex-none" />
            <div>
              <div className="font-editorial text-xl font-bold text-white uppercase">
                SPA APPOINTMENT CONFIRMED: {selectedSpa.name}!
              </div>
              <div className="text-xs font-mono text-slate-300">
                Time Slot: {selectedTimeSlot} • Duration: {selectedSpa.duration} • Paid: ${selectedSpa.price}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SPA_TREATMENTS.map((spa) => {
                const isSelected = selectedSpa.id === spa.id;
                return (
                  <div
                    key={spa.id}
                    onClick={() => setSelectedSpa(spa)}
                    className={`group rounded-3xl overflow-hidden glass-panel border transition-all duration-300 cursor-pointer p-5 space-y-3 flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-400 bg-[#07121C]/90 shadow-[0_0_30px_rgba(52,211,153,0.3)] scale-[1.02]'
                        : 'border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className="h-44 w-full rounded-2xl overflow-hidden relative bg-slate-900">
                      <img src={spa.image} alt={spa.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform opacity-80" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-emerald-400 text-[9px] font-mono font-bold uppercase border border-slate-700">
                        ${spa.price} / {spa.duration}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-emerald-400 font-bold">{spa.category}</div>
                      <h3 className="font-editorial text-lg font-bold text-white uppercase">{spa.name}</h3>
                      <p className="text-slate-400 text-xs font-light line-clamp-2">{spa.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-slate-800 bg-[#060812] space-y-6 flex flex-col justify-between h-fit">
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">SELECTED TREATMENT</span>
                <h3 className="font-editorial text-2xl font-bold text-white uppercase">{selectedSpa.name}</h3>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-300 uppercase font-bold flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SELECT APPOINTMENT TIME</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-3 px-3 rounded-xl text-center text-xs font-mono font-bold transition-all border ${
                        selectedTimeSlot === slot
                          ? 'bg-emerald-400 text-black border-emerald-400 shadow-[0_0_15px_#34d399]'
                          : 'glass-panel text-slate-300 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">TREATMENT TOTAL</span>
                <span className="text-2xl font-editorial font-bold text-white">${selectedSpa.price}</span>
              </div>

              <button
                onClick={handleConfirmBooking}
                className="w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(52,211,153,0.4)] flex items-center justify-center space-x-2"
              >
                <span>BOOK SPA TREATMENT (${selectedSpa.price}) →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
