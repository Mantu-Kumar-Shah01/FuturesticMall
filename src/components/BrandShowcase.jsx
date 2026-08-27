import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const BRANDS = [
  { name: 'ZARA', active: true },
  { name: 'H&M', active: false },
  { name: 'NIKE', active: false },
  { name: 'SEPHORA', active: false },
  { name: 'ADIDAS', active: false },
  { name: 'MICHAEL KORS', active: false },
  { name: 'PUMA', active: false },
  { name: 'UNIQLO', active: false },
];

export default function BrandShowcase({ onOpenStoreDirectory }) {
  return (
    <section className="py-20 bg-[#04060b] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-8">
          05 FEATURED BRANDS
        </div>

        {/* Brand Logos Row */}
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-6 border-b border-slate-800 gap-8">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="relative flex flex-col items-center flex-none cursor-pointer group">
              <span className={`font-editorial text-2xl font-extrabold tracking-widest uppercase transition-colors ${
                brand.active ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              }`}>
                {brand.name}
              </span>
              {brand.active && (
                <div className="absolute -bottom-6 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </div>
          ))}

          {/* Right Carousel Arrow */}
          <button className="p-3 rounded-full border border-slate-800 text-slate-400 hover:text-white flex-none">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Explore Link */}
        <div className="flex justify-end pt-4">
          <button
            onClick={onOpenStoreDirectory}
            className="inline-flex items-center space-x-2 text-xs font-mono text-blue-400 hover:text-blue-300 uppercase"
          >
            <span>EXPLORE ALL STORES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
