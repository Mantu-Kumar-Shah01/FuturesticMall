import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shirt, Utensils, Compass, Gamepad2, Sparkles } from 'lucide-react';

const SPATIAL_ZONES = [
  {
    id: 'fashion',
    name: 'FASHION',
    icon: Shirt,
    pos: 'top-20 right-1/4',
    color: 'bg-[#19A7FF]',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=70',
    desc: 'Haute Couture & Flagships',
    page: 'stores',
  },
  {
    id: 'dining',
    name: 'DINING',
    icon: Utensils,
    pos: 'top-32 right-12',
    color: 'bg-amber-400',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=70',
    desc: 'Michelin-Star Culinary',
    page: 'dining',
  },
  {
    id: 'lifestyle',
    name: 'LIFESTYLE',
    icon: Compass,
    pos: 'bottom-28 right-1/3',
    color: 'bg-emerald-400',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=70',
    desc: 'Automobili & Fine Art',
    page: 'shop',
  },
  {
    id: 'entertainment',
    name: 'ENTERTAINMENT',
    icon: Gamepad2,
    pos: 'bottom-20 right-14',
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=70',
    desc: '4K IMAX & VR Arena',
    page: 'events',
  },
];

export default function HeroSection({ onOpenStoreDirectory, onNavigate }) {
  const [activeZone, setActiveZone] = useState(null);

  const handleZoneClick = (zone) => {
    if (onNavigate && zone.page) {
      onNavigate(zone.page);
    } else if (onOpenStoreDirectory) {
      onOpenStoreDirectory();
    }
  };

  return (
    <section className="relative min-h-0 sm:min-h-screen pt-28 pb-8 sm:pt-32 sm:pb-16 flex items-center justify-center overflow-hidden bg-[#04060b]">
      {/* Full-Screen Architectural Mall Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1800&q=80"
          alt="Nexora Futuristic Luxury Mall Architecture Background"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Dark Editorial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04060b] via-[#04060b]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-[#04060b]/50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#19a7ff08_1px,transparent_1px),linear-gradient(to_bottom,#19a7ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
        {/* Left Column 50%: Typography & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-[#19A7FF]/40 text-[10px] font-mono font-bold text-[#56D6FF] uppercase tracking-widest bg-[#07121C]/80 w-fit">
              <Sparkles className="w-3 h-3 text-[#19A7FF] animate-pulse" />
              <span>FUTURISTIC EXPERIENCE DESTINATION</span>
            </div>

            <h1 className="font-editorial text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight sm:leading-[1.1] break-normal">
              THE FUTURE <br />
              OF <br />
              <span className="text-[#19A7FF] inline-block whitespace-nowrap">SHOPPING.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm"
          >
            Fashion, dining, entertainment and experiences under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full max-w-sm"
          >
            <a
              href="#discover"
              className="group inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_30px_rgba(25,167,255,0.5)]"
            >
              <span>EXPLORE THE MALL</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenStoreDirectory}
              className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl glass-panel text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-mono tracking-widest uppercase transition-all text-center"
            >
              VIEW STORES
            </button>
          </motion.div>
        </div>

        {/* Right Column: Spatial Zones (Desktop Floating + Mobile Image Cards) */}
        <div className="lg:col-span-6 lg:h-[540px] relative">
          {/* Mobile Grid View with Real Photography */}
          <div className="lg:hidden space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-mono tracking-widest text-[#56D6FF] uppercase font-bold">
                EXPLORE SPATIAL ZONES
              </span>
              <span className="text-[10px] font-mono text-slate-400">TAP TO EXPLORE</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {SPATIAL_ZONES.map((zone) => {
                const Icon = zone.icon;
                return (
                  <div
                    key={zone.id}
                    onClick={() => handleZoneClick(zone)}
                    className="relative h-36 sm:h-40 rounded-2xl overflow-hidden glass-panel border border-slate-800 hover:border-[#19A7FF] active:scale-95 transition-all cursor-pointer group flex flex-col justify-between p-3.5 shadow-xl bg-slate-900"
                  >
                    {/* Rich Photographic Background */}
                    <img
                      src={zone.image}
                      alt={zone.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-[#04060b]/50 to-transparent" />

                    {/* Top Icon Badge & Live Indicator */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-white ${zone.color}/30 border border-slate-600 backdrop-blur-md`}>
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className={`w-2 h-2 rounded-full ${zone.color} animate-pulse`} />
                    </div>

                    {/* Bottom Title & Description */}
                    <div className="relative z-10 space-y-0.5">
                      <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#19A7FF] transition-colors">
                        {zone.name}
                      </div>
                      <div className="text-[9px] text-slate-300 font-light line-clamp-1">
                        {zone.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Absolute Floating Icons */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {SPATIAL_ZONES.map((zone) => {
              const Icon = zone.icon;
              const isHovered = activeZone?.id === zone.id;

              return (
                <div
                  key={zone.id}
                  onClick={() => handleZoneClick(zone)}
                  onMouseEnter={() => setActiveZone(zone)}
                  onMouseLeave={() => setActiveZone(null)}
                  className={`absolute ${zone.pos} pointer-events-auto cursor-pointer group/badge z-20`}
                >
                  {/* Icon & Label Pill Badge */}
                  <div className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl glass-panel border transition-all duration-300 hover:scale-110 shadow-2xl ${
                    isHovered
                      ? 'border-[#19A7FF] bg-[#07121C] shadow-[0_0_25px_rgba(25,167,255,0.6)]'
                      : 'border-slate-700/80 bg-[#04060b]/85 hover:border-[#19A7FF]'
                  }`}>
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-white ${zone.color}/20 border border-slate-600`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">
                      {zone.name}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${zone.color} animate-ping`} />
                  </div>

                  {/* Floating Preview Card with Zone Photo on Hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-12 left-0 w-64 p-3 rounded-2xl glass-panel border border-[#19A7FF]/60 bg-[#07121C]/95 z-30 shadow-2xl space-y-2 pointer-events-none"
                      >
                        <div className="h-28 w-full rounded-xl overflow-hidden relative bg-slate-900">
                          <img
                            src={zone.image}
                            alt={zone.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-[10px] font-mono text-[#56D6FF] font-bold tracking-widest uppercase">
                            {zone.name} ZONE
                          </div>
                          <div className="text-[11px] text-slate-300 font-light leading-snug">
                            {zone.desc}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mouse Icon Scroll Cue */}
      <motion.a
        href="#discover"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center space-y-1 text-slate-400 hover:text-[#19A7FF] transition-colors z-20"
      >
        <div className="w-5 h-8 rounded-full border border-slate-500 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#19A7FF] rounded-full animate-pulse" />
        </div>
      </motion.a>
    </section>
  );
}
