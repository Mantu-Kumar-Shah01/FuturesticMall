import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Menu, X, ArrowUpRight, ShoppingBag } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenStoreDirectory, cartCount = 0, onOpenCart, currentPage = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'discover', label: 'Discover' },
    { id: 'stores', label: 'Stores' },
    { id: 'dining', label: 'Dining' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'events', label: 'Events' },
    { id: 'visit', label: 'Visit' },
    { id: 'shop', label: 'Shop Online' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#05070d]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 group text-left">
            <div className="w-7 h-7 rounded-lg bg-[#19A7FF] flex items-center justify-center font-bold text-black text-xs shadow-[0_0_15px_#19A7FF]">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg tracking-[0.2em] font-extrabold text-white group-hover:text-[#19A7FF] transition-colors">
                NEXORA
              </span>
              <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                THE CITY MALL
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-xs font-mono tracking-wider transition-colors duration-200 ${
                  currentPage === link.id ? 'text-[#19A7FF] font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-3 text-xs font-mono">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative px-3 py-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-slate-700 hover:border-[#19A7FF] transition-all flex items-center space-x-2"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#19A7FF]" />
              <span className="hidden sm:inline font-bold">Cart</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#19A7FF] text-black font-bold text-[10px] flex items-center justify-center shadow-[0_0_10px_#19A7FF]">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <Search className="w-4 h-4 text-[#19A7FF]" />
              <span className="hidden sm:inline">Search</span>
            </button>

            <button
              onClick={() => onNavigate('visit')}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#19A7FF]" />
              <span>Location</span>
            </button>

            {/* Mobile Menu Circle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:border-white hover:text-white transition-all glass-panel"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[65px] z-40 bg-[#05070d]/95 backdrop-blur-xl px-8 py-10 flex flex-col justify-between lg:hidden border-b border-slate-800"
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="font-editorial text-2xl font-bold tracking-widest text-slate-200 hover:text-[#19A7FF] uppercase flex items-center justify-between border-b border-slate-800 pb-3 text-left"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500" />
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('shop');
              }}
              className="w-full py-4 rounded-xl bg-[#19A7FF] text-black font-bold tracking-widest uppercase text-center text-xs shadow-[0_0_20px_rgba(25,167,255,0.4)]"
            >
              SHOP ONLINE STORE →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
