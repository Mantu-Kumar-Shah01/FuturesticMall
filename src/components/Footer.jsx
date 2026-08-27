import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#030408] text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-900">
          {/* Brand Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-lg tracking-[0.2em] font-extrabold text-white">
                  NEXORA
                </span>
                <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase -mt-1">
                  THE CITY MALL
                </span>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase">DISCOVER</h4>
              <ul className="space-y-1 text-slate-500 font-light text-[11px]">
                <li><a href="#discover" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Offices</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase">STORES</h4>
              <ul className="space-y-1 text-slate-500 font-light text-[11px]">
                <li><a href="#stores" className="hover:text-white">All Stores</a></li>
                <li><a href="#" className="hover:text-white">Brands</a></li>
                <li><a href="#stores" className="hover:text-white">Store Directory</a></li>
                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase">DINING</h4>
              <ul className="space-y-1 text-slate-500 font-light text-[11px]">
                <li><a href="#dining" className="hover:text-white">Restaurants</a></li>
                <li><a href="#dining" className="hover:text-white">Cafes</a></li>
                <li><a href="#dining" className="hover:text-white">Bars</a></li>
                <li><a href="#dining" className="hover:text-white">Food Guide</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase">EXPERIENCES</h4>
              <ul className="space-y-1 text-slate-500 font-light text-[11px]">
                <li><a href="#experiences" className="hover:text-white">Entertainment</a></li>
                <li><a href="#experiences" className="hover:text-white">Wellness</a></li>
                <li><a href="#experiences" className="hover:text-white">Lifestyle</a></li>
                <li><a href="#experiences" className="hover:text-white">Kids Zone</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase">STAY IN THE LOOP</h4>
            <p className="text-[11px] font-mono text-slate-500 font-light">
              Sign up for updates and exclusive offers.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl glass-panel text-xs text-white placeholder-slate-600 border border-slate-800 focus:outline-none focus:border-blue-500 pr-10"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Subscribed! Welcome to Nexora Circle.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-600 space-y-3 sm:space-y-0">
          <div>
            © 2026 NEXORA CITY MALL. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400">PRIVACY POLICY</a>
            <a href="#" className="hover:text-slate-400">TERMS & CONDITIONS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
