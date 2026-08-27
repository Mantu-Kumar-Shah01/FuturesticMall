import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenStoreDirectory }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('discover');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'discover', label: 'Discover', href: '#discover' },
    { id: 'stores', label: 'Stores', href: '#stores' },
    { id: 'dining', label: 'Dining', href: '#dining' },
    { id: 'experiences', label: 'Experiences', href: '#experiences' },
    { id: 'events', label: 'Events', href: '#events' },
    { id: 'visit', label: 'Visit', href: '#visit' },
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
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg tracking-[0.2em] font-extrabold text-white group-hover:text-blue-400 transition-colors">
                NEXORA
              </span>
              <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                THE CITY MALL
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={`text-xs font-mono tracking-wider transition-colors duration-200 ${
                  activeTab === link.id ? 'text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-4 text-xs font-mono">
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <Search className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">Search</span>
            </button>

            <a
              href="#visit"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">Location</span>
            </a>

            {/* Menu Circle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:border-white hover:text-white transition-all"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[65px] z-40 bg-[#05070d]/95 backdrop-blur-xl px-8 py-10 flex flex-col justify-between lg:hidden border-b border-slate-800"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="font-editorial text-2xl font-bold tracking-widest text-slate-200 hover:text-blue-400 uppercase flex items-center justify-between border-b border-slate-800 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500" />
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStoreDirectory();
              }}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest uppercase text-center text-xs"
            >
              EXPLORE ALL STORES →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
