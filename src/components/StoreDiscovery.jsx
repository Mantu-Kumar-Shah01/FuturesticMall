import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Tag, Compass } from 'lucide-react';
import { STORE_DATA } from './3d/StoreFloorMap3D';

const CATEGORIES = ['All Stores', 'Fashion', 'Beauty', 'Electronics', 'Home', 'Sports', 'Luxury', 'Food'];

export default function StoreDiscovery({ onSelectStoreDetails }) {
  const [activeCategory, setActiveCategory] = useState('All Stores');
  const [selectedStore, setSelectedStore] = useState(STORE_DATA[0]);
  const [activeLevelTab, setActiveLevelTab] = useState('ALL');
  const [showAll, setShowAll] = useState(false);

  const filteredStores = STORE_DATA.filter((s) => {
    const matchCat = activeCategory === 'All Stores' || s.category.toLowerCase() === activeCategory.toLowerCase();
    let matchLevel = true;
    if (activeLevelTab === 'L1') matchLevel = s.level === 'Level 01';
    else if (activeLevelTab === 'L2') matchLevel = s.level === 'Level 02';
    else if (activeLevelTab === 'L3') matchLevel = s.level === 'Level 03';
    return matchCat && matchLevel;
  });

  // Limit to 2 rows (8 items on 4-column grid) by default for All Stores filter
  const displayStores =
    activeCategory === 'All Stores' && activeLevelTab === 'ALL' && !showAll ? filteredStores.slice(0, 8) : filteredStores;

  return (
    <section id="stores" className="py-2 sm:py-4 bg-[#04060b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full border-t border-slate-900/80 pt-6 sm:pt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
              02 EXPLORE STORES
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight break-normal">
              FIND YOUR <br />
              <span className="text-[#19A7FF]">FAVORITE STORE.</span>
            </h2>
            <p className="text-slate-400 text-xs font-light mt-2 max-w-md">
              Explore our interactive directory and discover top brands.
            </p>
          </div>

          <button
            onClick={() => onSelectStoreDetails(selectedStore)}
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-200 hover:text-[#19A7FF] transition-colors uppercase"
          >
            <span>VIEW ALL STORES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-6 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#19A7FF] text-black font-bold shadow-[0_0_20px_rgba(25,167,255,0.4)]'
                  : 'glass-panel text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Digital Blueprint Vector Floor Map Grid */}
        <div className="relative w-full min-h-[460px] h-auto rounded-3xl overflow-hidden glass-panel border border-slate-800 p-5 sm:p-8 flex flex-col justify-between bg-[#060810] space-y-6">
          {/* Blueprint Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#19a7ff12_1px,transparent_1px),linear-gradient(to_bottom,#19a7ff12_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          {/* Interactive Store Zone Grid Map */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 items-center">
            {displayStores.map((store) => {
              const isSelected = selectedStore?.id === store.id;
              return (
                <div
                  key={store.id}
                  onClick={() => {
                    setSelectedStore(store);
                    if (onSelectStoreDetails) {
                      onSelectStoreDetails(store);
                    }
                  }}
                  className={`p-4 sm:p-5 rounded-2xl glass-panel border transition-all duration-300 cursor-pointer space-y-2 relative overflow-hidden ${
                    isSelected
                      ? 'border-[#19A7FF] bg-[#07121C]/90 shadow-[0_0_25px_rgba(25,167,255,0.3)] scale-[1.02]'
                      : 'border-slate-800 hover:border-slate-600 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#56D6FF] uppercase">{store.level}</span>
                    <span className="w-2 h-2 rounded-full bg-[#19A7FF] animate-pulse" />
                  </div>
                  <h4 className="font-editorial text-base sm:text-lg font-bold text-white uppercase">{store.name}</h4>
                  <div className="text-[11px] font-mono text-slate-400">{store.category} & Lifestyle</div>
                </div>
              );
            })}
          </div>

          {/* View All Stores Action Button */}
          {activeCategory === 'All Stores' && activeLevelTab === 'ALL' && !showAll && filteredStores.length > 8 && (
            <div className="relative z-10 flex justify-center py-2">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3.5 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-extrabold text-xs font-mono tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(25,167,255,0.4)] hover:scale-105 flex items-center space-x-2 cursor-pointer"
              >
                <span>VIEW ALL ({filteredStores.length} STORES)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Level Stack Tabs (Far Right Bottom) */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800/80 pt-4">
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-slate-400">
              <Compass className="w-4 h-4 text-[#19A7FF] flex-none" />
              <span>INTERACTIVE MAP SYSTEM • TIER {activeLevelTab === 'ALL' ? 'ALL LEVELS' : `LEVEL 0${activeLevelTab.replace('L', '')}`}</span>
            </div>

            <div className="flex items-center space-x-2">
              {['ALL', 'L1', 'L2', 'L3'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setActiveLevelTab(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeLevelTab === lvl
                      ? 'bg-[#19A7FF] text-black shadow-[0_0_15px_rgba(25,167,255,0.5)]'
                      : 'glass-panel text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
