import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { STORE_DATA } from './3d/StoreFloorMap3D';

const BRANDS = [
  { name: 'ZARA', id: 'zara' },
  { name: 'H&M', id: 'hm' },
  { name: 'NIKE', id: 'nike' },
  { name: 'SEPHORA', id: 'sephora' },
  { name: 'ADIDAS', id: 'adidas' },
  { name: 'MICHAEL KORS', id: 'michaelkors' },
  { name: 'PUMA', id: 'puma' },
  { name: 'UNIQLO', id: 'uniqlo' },
];

export default function BrandShowcase({ onOpenStoreDirectory }) {
  const [activeBrand, setActiveBrand] = useState('ZARA');

  const handleBrandClick = (brand) => {
    setActiveBrand(brand.name);
    const matchedStore = STORE_DATA.find(
      (s) => s.name.toLowerCase().includes(brand.name.toLowerCase()) || brand.name.toLowerCase().includes(s.name.toLowerCase())
    );
    if (onOpenStoreDirectory) {
      onOpenStoreDirectory(matchedStore || null);
    }
  };

  return (
    <section className="py-2 sm:py-4 bg-[#04060b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full border-t border-slate-900/80 pt-6 sm:pt-10">
        <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-4 sm:mb-8">
          05 FEATURED BRANDS
        </div>

        {/* Brand Logos Row */}
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-6 border-b border-slate-800 gap-8">
          {BRANDS.map((brand) => {
            const isActive = activeBrand === brand.name;
            return (
              <div
                key={brand.name}
                onClick={() => handleBrandClick(brand)}
                className="relative flex flex-col items-center flex-none cursor-pointer group py-2"
              >
                <span
                  className={`font-editorial text-2xl font-extrabold tracking-widest uppercase transition-colors ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {brand.name}
                </span>
                {isActive && (
                  <div className="absolute -bottom-1 w-full h-[2px] bg-[#19A7FF] rounded-full shadow-[0_0_10px_rgba(25,167,255,0.8)]" />
                )}
              </div>
            );
          })}

          {/* Right Carousel Arrow */}
          <button
            onClick={() => {
              if (onOpenStoreDirectory) onOpenStoreDirectory();
            }}
            className="p-3 rounded-full border border-slate-800 text-slate-400 hover:text-white flex-none hover:border-[#19A7FF] transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Explore Link */}
        <div className="flex justify-end pt-4">
          <button
            onClick={() => {
              if (onOpenStoreDirectory) onOpenStoreDirectory();
            }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-[#19A7FF] hover:text-[#56D6FF] uppercase transition-colors cursor-pointer"
          >
            <span>EXPLORE ALL STORES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
