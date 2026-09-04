import React from 'react';
import { ShoppingBag, Star, Tag, Heart, ArrowRight } from 'lucide-react';

export const FEATURED_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'GUCCI OVERSIZED LEATHER JACKET',
    store: 'GUCCI MAISON',
    price: 3450,
    category: 'Fashion',
    level: 'Level 01',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=70',
    stock: '3 LEFT',
  },
  {
    id: 'prod-2',
    name: 'APPLE VISION PRO APEX EDITION',
    store: 'APPLE APEX',
    price: 3499,
    category: 'Electronics',
    level: 'Level 01',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=600&q=70',
    stock: 'IN STOCK',
  },
  {
    id: 'prod-3',
    name: 'ROLEX SUBMARINER DATE 41',
    store: 'ROLEX LAB',
    price: 14200,
    category: 'Luxury',
    level: 'Level 02',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=70',
    stock: 'LIMITED DROP',
  },
  {
    id: 'prod-4',
    name: 'BALENCIAGA TRIPLE S SNEAKERS',
    store: 'BALENCIAGA',
    price: 1150,
    category: 'Fashion',
    level: 'Level 02',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=70',
    stock: 'NEW RELEASE',
  },
  {
    id: 'prod-5',
    name: 'DYSON ZONE ACOUSTIC CANOPY',
    store: 'DYSON CONCEPT',
    price: 949,
    category: 'Home',
    level: 'Level 02',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=70',
    stock: 'IN STOCK',
  },
  {
    id: 'prod-6',
    name: 'SAINT LAURENT KATE CROSSBODY',
    store: 'SAINT LAURENT',
    price: 2190,
    category: 'Luxury',
    level: 'Level 01',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=70',
    stock: 'EXCLUSIVE',
  },
];

export default function ProductCatalog({ onAddToCart }) {
  return (
    <section id="shop" className="py-2 sm:py-4 bg-[#04060b] relative cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full border-t border-slate-900/80 pt-6 sm:pt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
              EXCLUSIVE E-COMMERCE DROPS
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight break-words">
              FEATURED <span className="text-[#19A7FF]">LUXURY PRODUCTS.</span>
            </h2>
          </div>

          <p className="text-slate-400 text-xs font-light max-w-sm">
            Shop flagship releases online with instant white-glove courier delivery straight from Nexora boutiques.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="group rounded-3xl overflow-hidden glass-panel border border-slate-800 hover:border-[#19A7FF]/50 transition-all duration-300 flex flex-col justify-between p-5 space-y-4"
            >
              {/* Product Image */}
              <div className="h-64 w-full rounded-2xl overflow-hidden relative bg-slate-900">
                <img
                  src={prod.image}
                  alt={prod.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-transparent" />

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[#56D6FF] text-[9px] font-mono font-bold tracking-widest uppercase border border-slate-700">
                  {prod.stock}
                </span>

                <button className="absolute top-3 right-3 p-2 rounded-full glass-panel text-slate-400 hover:text-red-400 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Product Specs */}
              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="text-[#19A7FF] font-bold">{prod.store}</span>
                    <span>{prod.level}</span>
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-white uppercase group-hover:text-[#19A7FF] transition-colors">
                    {prod.name}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">PRICE</div>
                    <div className="text-xl font-editorial font-bold text-white">${prod.price.toLocaleString()}</div>
                  </div>

                  <button
                    onClick={() => onAddToCart(prod)}
                    className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(25,167,255,0.4)] w-full sm:w-auto"
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
    </section>
  );
}
