import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Tag, MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { STORE_DATA } from '../3d/StoreFloorMap3D';

export default function StoreDirectoryModal({ isOpen, onClose, initialStore }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStore, setSelectedStore] = useState(initialStore || STORE_DATA[0]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (initialStore) {
      setSelectedStore(initialStore);
    }
  }, [initialStore]);

  if (!isOpen) return null;

  const categories = ['All', 'Fashion', 'Luxury', 'Beauty', 'Electronics', 'Sports', 'Home', 'Food'];

  const filtered = STORE_DATA.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category.toLowerCase() === activeCategory.toLowerCase();
    const matchQuery = s.name.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-4xl h-[90vh] max-h-[760px] rounded-3xl glass-panel border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden bg-[#0a0c12]"
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between flex-none bg-[#080a10]">
            <div>
              <h3 className="font-editorial text-lg sm:text-2xl font-bold text-white uppercase tracking-wider">
                STORE DIRECTORY
              </h3>
              <span className="text-[10px] font-mono text-slate-400">180+ LUXURY BRANDS & EXPERIENCES</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`md:hidden p-2.5 rounded-xl border text-xs font-mono flex items-center space-x-1.5 transition-all ${
                  showSearch || search
                    ? 'bg-cyan-500 text-black border-cyan-400 font-bold'
                    : 'glass-panel text-slate-300 border-slate-700 hover:text-white'
                }`}
              >
                <Search className="w-4 h-4" />
                <span>SEARCH</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Search & Category Filter Bar (Always visible on Desktop, collapsible on Mobile) */}
          <div className={`p-3 sm:p-5 border-b border-slate-800 space-y-3 bg-[#08090e] flex-none ${showSearch ? 'block' : 'hidden md:block'}`}>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search brand, category, or level..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl glass-panel text-xs text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase whitespace-nowrap transition-all ${
                    activeCategory === c
                      ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'glass-panel text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* FIXED TOP: Selected Store Detail Spotlight Drawer Panel */}
          {selectedStore && (
            <div className="p-4 sm:p-5 border-b border-cyan-500/40 bg-[#07111c] relative flex-none shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  {selectedStore.image && (
                    <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl overflow-hidden relative flex-none border border-cyan-500/40 bg-slate-900 shadow-xl">
                      <img
                        src={selectedStore.image}
                        alt={selectedStore.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold border border-cyan-500/40 uppercase">
                        {selectedStore.level}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">{selectedStore.zone}</span>
                    </div>

                    <h4 className="font-editorial text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                      {selectedStore.name}
                    </h4>

                    {selectedStore.desc && (
                      <p className="text-xs text-slate-300 font-light max-w-xl line-clamp-2 leading-relaxed">
                        {selectedStore.desc}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-3 pt-1 text-[10px] font-mono text-slate-400">
                      {selectedStore.hours && (
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{selectedStore.hours}</span>
                        </span>
                      )}
                      {selectedStore.phone && (
                        <span className="flex items-center space-x-1">
                          <Phone className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{selectedStore.phone}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto pt-1 sm:pt-0">
                  <button
                    onClick={() => {
                      alert(`Navigating to ${selectedStore.name} at ${selectedStore.level} (${selectedStore.zone})`);
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>GET DIRECTIONS</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SCROLLABLE LIST OF STORE CARDS */}
          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain touch-pan-y custom-modal-scrollbar p-3 sm:p-5 pr-2 sm:pr-4">
            {/* Desktop View: Original 2-Column Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-4">
              {filtered.map((store) => (
                <div
                  key={`desktop-${store.id}`}
                  onClick={() => setSelectedStore(store)}
                  className={`p-4 rounded-2xl glass-panel border transition-all duration-300 cursor-pointer space-y-2 relative overflow-hidden ${
                    selectedStore?.id === store.id
                      ? 'border-cyan-500 bg-[#0c1626] shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-[1.01]'
                      : 'border-slate-800 hover:border-slate-600 bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-lg font-bold text-white uppercase tracking-wide">{store.name}</span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-900 text-cyan-400 text-[10px] font-mono border border-slate-700">
                      {store.level}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                    <Tag className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{store.category}</span>
                    <span className="text-slate-600">•</span>
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{store.zone}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View: Single Column List (Sleek rounded-2xl corners) */}
            <div className="block md:hidden space-y-2.5">
              {filtered.map((store) => {
                const isSelected = selectedStore?.id === store.id;
                return (
                  <div
                    key={`mobile-${store.id}`}
                    onClick={() => setSelectedStore(store)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-cyan-400 bg-[#071626] shadow-[0_0_18px_rgba(6,182,212,0.35)] scale-[1.01]'
                        : 'border-slate-800/90 hover:border-slate-700 bg-slate-900/60 hover:bg-slate-900/90'
                    }`}
                  >
                    <span className="font-editorial text-sm font-bold text-white uppercase tracking-wider">
                      {store.name}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#0d1d2e] text-cyan-400 text-[11px] font-mono font-semibold border border-cyan-500/30 uppercase tracking-wide flex-none">
                      {store.level}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
