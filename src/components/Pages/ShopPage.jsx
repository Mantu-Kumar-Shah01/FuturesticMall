import React, { useState } from 'react';
import { ArrowLeft, Search, ShoppingBag, Heart, Filter } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../Ecommerce/ProductCatalog';

export default function ShopPage({ onNavigate, onAddToCart }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Fashion', 'Electronics', 'Luxury', 'Home'];

  const filtered = FEATURED_PRODUCTS.filter((p) => {
    const matchCat = category === 'All' || p.category.toLowerCase() === category.toLowerCase();
    const matchQuery = p.name.toLowerCase().includes(search.toLowerCase()) || p.store.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
        <button onClick={() => onNavigate('home')} className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] uppercase">
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-[11px] font-mono tracking-widest text-[#56D6FF] uppercase">E-COMMERCE LUXURY DROPS</div>
            <h1 className="font-editorial text-5xl font-extrabold uppercase tracking-tight">SHOP <span className="text-[#19A7FF]">FLAGSHIP PRODUCTS.</span></h1>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product or brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl glass-panel text-xs text-white border border-slate-800 focus:outline-none focus:border-[#19A7FF]"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all ${
                category === c
                  ? 'bg-[#19A7FF] text-black font-bold shadow-[0_0_15px_rgba(25,167,255,0.4)]'
                  : 'glass-panel text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filtered.map((prod) => (
            <div key={prod.id} className="group rounded-3xl overflow-hidden glass-panel border border-slate-800 hover:border-[#19A7FF]/50 transition-all p-5 space-y-4 flex flex-col justify-between">
              <div className="h-64 rounded-2xl overflow-hidden relative bg-slate-900">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[#56D6FF] text-[9px] font-mono font-bold uppercase border border-slate-700">{prod.stock}</span>
                <button className="absolute top-3 right-3 p-2 rounded-full glass-panel text-slate-400 hover:text-red-400 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span className="text-[#19A7FF] font-bold">{prod.store}</span>
                    <span>{prod.level}</span>
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-white uppercase group-hover:text-[#19A7FF] transition-colors">{prod.name}</h3>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">PRICE</div>
                    <div className="text-xl font-editorial font-bold text-white">${prod.price.toLocaleString()}</div>
                  </div>

                  <button
                    onClick={() => onAddToCart(prod)}
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(25,167,255,0.4)]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
