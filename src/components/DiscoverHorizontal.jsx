import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  {
    number: '01',
    title: 'FASHION',
    page: 'stores',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=70',
  },
  {
    number: '02',
    title: 'DINING',
    page: 'dining',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=70',
  },
  {
    number: '03',
    title: 'ENTERTAINMENT',
    page: 'events',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=70',
  },
  {
    number: '04',
    title: 'WELLNESS',
    page: 'experiences',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=70',
  },
  {
    number: '05',
    title: 'LIFESTYLE',
    page: 'shop',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=70',
  },
];

export default function DiscoverHorizontal({ onNavigate }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="discover" className="py-24 bg-[#04060b] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
            01 DISCOVER THE MALL
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
            MORE THAN A MALL. <br />
            <span className="text-[#19A7FF]">A DESTINATION.</span>
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-end space-y-4 max-w-sm">
          <p className="text-slate-400 text-xs font-light leading-relaxed md:text-right">
            A world of brands, experiences and moments that bring people together.
          </p>
          <button
            onClick={() => onNavigate && onNavigate('discover')}
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-200 hover:text-[#19A7FF] transition-colors uppercase"
          >
            <span>EXPLORE VISION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-4">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory"
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.number}
              onClick={() => onNavigate && onNavigate(cat.page)}
              className="snap-start flex-none w-[260px] sm:w-[310px] lg:w-[320px] group relative rounded-2xl overflow-hidden glass-panel border border-slate-800 hover:border-[#19A7FF] hover:shadow-[0_0_25px_rgba(25,167,255,0.3)] transition-all duration-500 cursor-pointer"
            >
              {/* Card Image */}
              <div className="h-[280px] sm:h-[340px] w-full overflow-hidden relative bg-slate-900">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-75 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-transparent" />

                {/* Title & Number */}
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <div className="text-sm font-mono font-bold text-slate-400">{cat.number}</div>
                  <h3 className="font-editorial text-2xl font-bold text-white tracking-wide uppercase group-hover:text-[#19A7FF] transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blue Progress Bar & Arrow Controls */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between pt-4">
        <div className="w-1/3 h-[2px] bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full w-1/4 bg-[#19A7FF] rounded-full" />
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleScroll('left')}
            className="p-2 rounded-full glass-panel text-slate-400 hover:text-white border border-slate-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2 rounded-full glass-panel text-slate-400 hover:text-white border border-slate-800"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
