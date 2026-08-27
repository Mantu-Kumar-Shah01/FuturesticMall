import React from 'react';
import { ArrowRight } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'shop',
    title: 'SHOP',
    subtitle: 'Discover global luxury brands.',
    page: 'shop',
    image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=700&q=70',
  },
  {
    id: 'dine',
    title: 'DINE',
    subtitle: 'Taste something unforgettable.',
    page: 'dining',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=700&q=70',
  },
  {
    id: 'play',
    title: 'PLAY',
    subtitle: 'Gaming playstore & IMAX dome.',
    page: 'play',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=700&q=70',
  },
  {
    id: 'unwind',
    title: 'UNWIND',
    subtitle: 'Wellness spa & hydrotherapy pools.',
    page: 'unwind',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=70',
  },
];

export default function FeaturedExperiences({ onNavigate }) {
  return (
    <section id="experiences" className="py-24 bg-[#04060b] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            04 FEATURED EXPERIENCES
          </div>
          <span className="text-xs font-mono text-[#56D6FF] hidden sm:inline">CLICK CARDS TO OPEN PAGE VIEW</span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onNavigate && onNavigate(exp.page)}
              className="group relative h-80 rounded-2xl overflow-hidden glass-panel border border-slate-800 hover:border-[#19A7FF] hover:shadow-[0_0_30px_rgba(25,167,255,0.4)] transition-all duration-300 cursor-pointer flex flex-col justify-end p-6"
            >
              {/* Image */}
              <img
                src={exp.image}
                alt={exp.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-[#04060b]/40 to-transparent" />

              {/* Title & Subtitle */}
              <div className="relative z-10 space-y-1">
                <h3 className="font-editorial text-3xl font-extrabold text-white tracking-wide uppercase group-hover:text-[#19A7FF] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-slate-300 text-xs font-light">
                  {exp.subtitle}
                </p>
              </div>

              {/* Bottom Right Arrow Circle */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-slate-700 glass-panel flex items-center justify-center text-slate-300 group-hover:border-[#19A7FF] group-hover:text-[#19A7FF] group-hover:scale-110 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
