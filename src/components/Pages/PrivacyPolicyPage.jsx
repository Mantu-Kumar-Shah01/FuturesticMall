import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigate }) {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#04060b] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 space-y-10 w-full">
        {/* Navigation Back */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-[#19A7FF] transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        {/* Page Header */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-[#19A7FF]/40 text-[10px] font-mono font-bold text-[#56D6FF] uppercase tracking-widest bg-[#07121C]/80 w-fit">
            <ShieldCheck className="w-3.5 h-3.5 text-[#19A7FF]" />
            <span>NEXORA LEGAL & PRIVACY DISCLOSURES</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            PRIVACY <span className="text-[#19A7FF]">POLICY.</span>
          </h1>

          <p className="text-slate-400 text-xs sm:text-sm font-mono">
            LAST UPDATED: SEPTEMBER 2026 • EFFECTIVE WORLDWIDE
          </p>
        </div>

        {/* Introduction Panel */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 space-y-4 bg-slate-900/40">
          <h3 className="font-editorial text-xl font-bold text-white uppercase flex items-center space-x-2">
            <Lock className="w-5 h-5 text-[#19A7FF]" />
            <span>OUR COMMITMENT TO YOUR PRIVACY</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            At Nexora City Mall, we treat the privacy and security of our guests with the utmost distinction. 
            This Privacy Policy details how we collect, safeguard, and utilize data across our physical luxury destination, 
            interactive 3D floor map navigation systems, e-commerce drops, and mobile visitor tools.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3 p-6 rounded-2xl glass-panel border border-slate-800/80">
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <span className="text-[#19A7FF] font-mono">01.</span>
              <span>DATA COLLECTION & VISITOR ANALYTICS</span>
            </h2>
            <p>
              We collect information that you voluntarily provide to us when reserving fine dining tables, purchasing 
              flagship e-commerce items, booking smart valet parking, or subscribing to the Nexora VIP Circle.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400 font-mono text-xs pt-2">
              <li>Contact details: Name, email address, phone number for reservations and courier delivery.</li>
              <li>Spatial navigation preferences: Tier level filtering and saved boutique floor destinations.</li>
              <li>Transaction data: Secure payment tokenization for online boutique purchases.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 p-6 rounded-2xl glass-panel border border-slate-800/80">
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <span className="text-[#19A7FF] font-mono">02.</span>
              <span>SMART VALET & PARKING NAVIGATION</span>
            </h2>
            <p>
              When utilizing our Smart Visitor Parking tools, license plate data and parking bay telemetry are processed strictly 
              for real-time bay allocation, ticketless entry, and security protocols within Nexora multi-level parking decks.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 p-6 rounded-2xl glass-panel border border-slate-800/80">
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <span className="text-[#19A7FF] font-mono">03.</span>
              <span>BOUTIQUE AFFILIATES & THIRD PARTIES</span>
            </h2>
            <p>
              Nexora does not sell, rent, or trade guest personal information to external advertisers. Data is shared exclusively 
              with verified luxury brand flagships (e.g. Nike, Apple, Gucci) and Michelin dining partners solely to fulfill guest 
              reservations or order fulfillment.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 p-6 rounded-2xl glass-panel border border-slate-800/80">
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <span className="text-[#19A7FF] font-mono">04.</span>
              <span>SECURITY PROTOCOLS & DATA RIGHTS</span>
            </h2>
            <p>
              All guest communications are encrypted end-to-end using TLS 1.3 encryption. Guests retain the absolute right to 
              request access to, modification of, or complete erasure of their personal data from the Nexora registry at any time.
            </p>
          </div>
        </div>

        {/* Contact Footer Banner */}
        <div className="p-6 rounded-3xl glass-panel border border-[#19A7FF]/40 bg-[#07121C] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-editorial text-lg font-bold text-white uppercase">HAVE PRIVACY QUESTIONS?</h4>
            <p className="text-xs font-mono text-slate-400">Contact our Data Protection Office at privacy@nexoramall.com</p>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-bold text-xs uppercase font-mono tracking-widest transition-all cursor-pointer whitespace-nowrap"
          >
            RETURN TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}
