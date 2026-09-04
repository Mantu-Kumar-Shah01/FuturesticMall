import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

const LEVELS = [
  {
    id: 1,
    name: 'LEVEL 01',
    subtitle: 'Fashion & Beauty',
    desc: 'Haute couture flagships, cosmetics laboratories, and runway atrium concourse.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    name: 'LEVEL 02',
    subtitle: 'Lifestyle & Technology',
    desc: 'Spatial computing hubs, automotive showcases, and design studios.',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    name: 'LEVEL 03',
    subtitle: 'Dining & Entertainment',
    desc: 'Sky deck culinary venues, 4K laser IMAX dome, and rooftop lounge.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function FloorExperience() {
  const [activeLevel, setActiveLevel] = useState(2);
  const currentLvl = LEVELS.find((l) => l.id === activeLevel);

  return (
    <section id="floors" className="py-2 sm:py-4 bg-[#04060b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full border-t border-slate-900/80 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-6 sm:mb-10">
          {/* Left Column Text */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
              03 EXPLORE EVERY LEVEL
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight break-normal">
              EXPLORE EVERY LEVEL.
            </h2>
            <p className="text-slate-400 text-xs font-light leading-relaxed max-w-sm">
              Discover specialized zones, acoustics, and elevated highlights across all tiers.
            </p>
          </div>

          {/* Right Column: 3 Level Selector Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {LEVELS.map((lvl) => (
              <div
                key={lvl.id}
                onClick={() => setActiveLevel(lvl.id)}
                className={`group relative rounded-2xl overflow-hidden glass-panel border transition-all duration-300 cursor-pointer h-44 flex flex-col justify-end p-5 ${
                  activeLevel === lvl.id
                    ? 'border-[#19A7FF] shadow-[0_0_25px_rgba(25,167,255,0.4)]'
                    : 'border-slate-800 hover:border-slate-600'
                }`}
              >
                <img
                  src={lvl.image}
                  alt={lvl.subtitle}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-[#04060b]/40 to-transparent" />

                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-white uppercase">{lvl.name}</div>
                    <div className="text-xs font-mono text-slate-300">{lvl.subtitle}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#19A7FF] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large Immersive Level Showcase Banner */}
        <AnimatePresence mode="wait">
          {currentLvl && (
            <motion.div
              key={currentLvl.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full min-h-[360px] h-auto rounded-3xl overflow-hidden glass-panel border border-slate-800 p-5 sm:p-8 flex flex-col justify-between space-y-12 lg:space-y-0"
            >
              <img
                src={currentLvl.image}
                alt={currentLvl.subtitle}
                className="absolute inset-0 w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-[#04060b]/40 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-md glass-panel border border-[#19A7FF]/40 text-[#56D6FF] text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest">
                  FEATURED LEVEL SPOTLIGHT
                </span>
                <span className="text-xs font-mono text-slate-300">{currentLvl.name} TIER</span>
              </div>

              <div className="relative z-10 space-y-2 max-w-xl">
                <h3 className="font-editorial text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                  {currentLvl.subtitle}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {currentLvl.desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
