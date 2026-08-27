import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles, MapPin, Clock, ShieldCheck, Ticket, Calendar } from 'lucide-react';

const EXPERIENCE_DETAILS = {
  shop: {
    title: 'SHOP',
    subtitle: 'HAUTE COUTURE & GLOBAL BOUTIQUES',
    banner: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1000&q=80',
    description: 'Immerse yourself in over 180 flagship luxury boutiques, personal styling suites, and exclusive seasonal product drops.',
    features: [
      { name: 'VIP Personal Styling Suites', detail: 'Private fitting lounges with dedicated fashion curators.' },
      { name: 'Tax-Free Shopping Lounge', detail: 'Instant VAT refund & international baggage concierge.' },
      { name: 'White-Glove Delivery', detail: 'Same-day delivery directly to your hotel or residence.' },
    ],
    ctaText: 'EXPLORE STORES & PRODUCTS →',
    targetPage: 'stores',
  },
  dine: {
    title: 'DINE',
    subtitle: 'MICHELIN-STARRED GASTRONOMY & SKY LOUNGES',
    banner: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    description: 'A culinary journey across Michelin-starred European dining, authentic Japanese omakase, and vibrant rooftop cocktail lounges.',
    features: [
      { name: 'Rooftop Sky Bar', detail: 'Panoramic 360-degree skyline views with artisanal mixology.' },
      { name: 'Chef Table Experience', detail: 'Private multi-course tasting menus by world-class guest chefs.' },
      { name: 'Sommelier Wine Vault', detail: 'Rare vintages and vintage champagne collection.' },
    ],
    ctaText: 'RESERVE A TABLE →',
    targetPage: 'dining',
  },
  play: {
    title: 'PLAY',
    subtitle: '4K LASER IMAX & CYBER VR ARENA',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80',
    description: 'Next-generation entertainment featuring state-of-the-art 4K Laser IMAX screens, multiplayer VR esports arenas, and bowling lounges.',
    features: [
      { name: 'IMAX Laser Dome Cinema', detail: '70ft panoramic screen with 12-channel immersive audio.' },
      { name: 'Zero-Latency VR Arena', detail: 'Full-body haptic simulation games and multiplayer tournaments.' },
      { name: 'Retro Arcade Concourse', detail: 'Over 100 pinball and classic arcade cabinets.' },
    ],
    ctaText: 'EXPLORE EVENTS & PASSES →',
    targetPage: 'events',
  },
  unwind: {
    title: 'UNWIND',
    subtitle: 'ARCHITECTURAL SPA & HYDROMASSAGE POOLS',
    banner: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
    description: 'Escape into a tranquil sanctuary of hydrotherapy infinity pools, herbal steam saunas, oxygen bars, and rooftop zen reflection gardens.',
    features: [
      { name: 'Hydrotherapy Thermal Circuit', detail: 'Heated mineral baths and cold plunge waterfalls.' },
      { name: 'Holistic Massage Therapy', detail: 'Bespoke deep tissue and aromatherapy treatments.' },
      { name: 'Zen Rooftop Garden', detail: 'Quiet meditation decks overlooking the atrium fountain.' },
    ],
    ctaText: 'VIEW VISITOR GUIDE →',
    targetPage: 'visit',
  },
};

export default function ExperienceDetailModal({ isOpen, onClose, experienceId, onNavigate }) {
  if (!isOpen || !experienceId) return null;

  const data = EXPERIENCE_DETAILS[experienceId] || EXPERIENCE_DETAILS['shop'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-3xl rounded-3xl glass-panel border border-slate-700/80 shadow-2xl overflow-hidden bg-[#070910] text-white my-8 flex flex-col justify-between max-h-[90vh]"
        >
          {/* Header Banner Image */}
          <div className="h-64 sm:h-72 w-full relative bg-slate-900 flex-none overflow-hidden">
            <img src={data.banner} alt={data.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070910] via-[#070910]/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full glass-panel text-slate-300 hover:text-white border border-slate-700 hover:border-white transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 space-y-1">
              <span className="px-3 py-1 rounded-md bg-[#19A7FF]/20 text-[#56D6FF] border border-[#19A7FF]/40 text-[10px] font-mono font-bold tracking-widest uppercase">
                FEATURED EXPERIENCE
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                {data.title}
              </h2>
            </div>
          </div>

          {/* Scrollable Content Details */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 no-scrollbar">
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-[#19A7FF] font-bold tracking-widest uppercase">
                {data.subtitle}
              </div>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                HIGHLIGHTS & SERVICES
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.features.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl glass-panel border border-slate-800 space-y-1 bg-slate-900/60">
                    <div className="font-editorial text-sm font-bold text-white uppercase">{feat.name}</div>
                    <div className="text-[11px] text-slate-400 font-light leading-snug">{feat.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-slate-800/80 bg-[#04060b] flex items-center justify-between flex-none">
            <div className="text-xs font-mono text-slate-400">
              OPEN DAILY • 10:00 AM - 11:00 PM
            </div>

            <button
              onClick={() => {
                onClose();
                onNavigate(data.targetPage);
              }}
              className="px-6 py-3 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(25,167,255,0.4)] flex items-center space-x-2"
            >
              <span>{data.ctaText}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
