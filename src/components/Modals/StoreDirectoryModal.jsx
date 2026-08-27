import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Tag, MapPin, ExternalLink } from 'lucide-react';
import { STORE_DATA } from '../3d/StoreFloorMap3D';

export default function StoreDirectoryModal({ isOpen, onClose, initialStore }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStore, setSelectedStore] = useState(initialStore || STORE_DATA[0]);

  if (!isOpen) return null;

  const categories = ['All', 'Fashion', 'Luxury', 'Beauty', 'Electronics', 'Sports', 'Home', 'Food'];

  const filtered = STORE_DATA.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category.toLowerCase() === activeCategory.toLowerCase();
    const matchQuery = s.name.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-4xl max-h-[85vh] rounded-3xl glass-panel border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden bg-[#0a0c12]"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-white uppercase tracking-wider">
                STORE DIRECTORY
              </h3>
              <span className="text-[10px] font-mono text-slate-400">180+ LUXURY BRANDS & EXPERIENCES</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass-panel hover:bg-slate-800 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Controls Bar */}
          <div className="p-6 border-b border-slate-800 space-y-4 bg-[#08090e]">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search brand, category, or level..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl glass-panel text-xs text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all ${
                    activeCategory === c
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'glass-panel text-slate-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Content */}
          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((store) => (
              <div
                key={store.id}
                onClick={() => setSelectedStore(store)}
                className={`p-4 rounded-2xl glass-panel border transition-all duration-300 cursor-pointer space-y-2 ${
                  selectedStore?.id === store.id
                    ? 'border-cyan-500/80 bg-slate-900/90 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                    : 'border-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-lg font-bold text-white uppercase">{store.name}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-cyan-400 text-[9px] font-mono border border-slate-800">
                    {store.level}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
                  <Tag className="w-3 h-3 text-cyan-400" />
                  <span>{store.category}</span>
                  <span className="text-slate-600">•</span>
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>{store.zone}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
