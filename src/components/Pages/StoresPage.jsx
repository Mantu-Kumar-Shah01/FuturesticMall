import React, { useState } from 'react';
import { ArrowLeft, Search, Tag, MapPin, ArrowRight } from 'lucide-react';
import { STORE_DATA } from '../3d/StoreFloorMap3D';

export default function StoresPage({ onNavigate, onOpenStoreModal }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Fashion', 'Luxury', 'Beauty', 'Electronics', 'Sports', 'Home', 'Food'];

  const filteredStores = STORE_DATA.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category.toLowerCase() === activeCategory.toLowerCase();
    const matchQuery = s.name.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 space-y-8 w-full">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] transition-colors uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-[11px] font-mono tracking-widest text-[#56D6FF] uppercase">
              STORE DIRECTORY — 180+ GLOBAL BRANDS
            </div>
            <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight break-words">
              FIND YOUR <span className="text-[#19A7FF]">BOUTIQUE.</span>
            </h1>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search store, brand or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl glass-panel text-xs text-white border border-slate-800 focus:outline-none focus:border-[#19A7FF]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all ${
                activeCategory === c
                  ? 'bg-[#19A7FF] text-black font-bold shadow-[0_0_15px_rgba(25,167,255,0.4)]'
                  : 'glass-panel text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              onClick={() => onOpenStoreModal(store)}
              className="p-6 rounded-3xl glass-panel border border-slate-800 hover:border-[#19A7FF]/60 transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-[#19A7FF]/10 text-[#56D6FF] border border-[#19A7FF]/30 text-[10px] font-mono uppercase font-bold">
                  {store.level}
                </span>
                <span className="text-[10px] font-mono text-slate-400">{store.zone}</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-editorial text-2xl font-bold text-white uppercase group-hover:text-[#19A7FF] transition-colors">
                  {store.name}
                </h3>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <Tag className="w-3.5 h-3.5 text-[#19A7FF]" />
                  <span>{store.category} & Lifestyle</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>STATUS: <strong className="text-emerald-400">OPEN NOW</strong></span>
                <ArrowRight className="w-4 h-4 text-[#19A7FF] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
