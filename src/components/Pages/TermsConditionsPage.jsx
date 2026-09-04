import React from 'react';
import { ArrowLeft, FileText, Scale, ShieldAlert, Award, Compass } from 'lucide-react';

export default function TermsConditionsPage({ onNavigate }) {
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
            <Scale className="w-3.5 h-3.5 text-[#19A7FF]" />
            <span>NEXORA TERMS OF SERVICE & GUEST GOVERNANCE</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            TERMS & <span className="text-[#19A7FF]">CONDITIONS.</span>
          </h1>

          <p className="text-slate-400 text-xs sm:text-sm font-mono">
            EFFECTIVE DATE: SEPTEMBER 2026 • GOVERNING ALL DESTINATION SERVICES
          </p>
        </div>

        {/* Introduction Panel */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 space-y-4 bg-slate-900/40">
          <h3 className="font-editorial text-xl font-bold text-white uppercase flex items-center space-x-2">
            <FileText className="w-5 h-5 text-[#19A7FF]" />
            <span>AGREEMENT TO GUEST TERMS</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            By accessing or using the Nexora City Mall physical premises, 3D floor map navigation tools, e-commerce drop catalog, 
            or digital concierge services, you agree to be bound by these Terms & Conditions.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3 p-6 rounded-2xl glass-panel border border-slate-800/80">
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <span className="text-[#19A7FF] font-mono">01.</span>
              <span>DESTINATION ACCESS & GUEST CONDUCT</span>
            </h2>
            <p>
              Nexora is dedicated to maintaining an ultra-luxurious, safe, and serene atmosphere. All visitors are required 
              to conduct themselves respectfully. Commercial photography, unauthorized distribution, or disruptive behavior 
              within concourses and VIP lounges is strictly prohibited.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 p-6 rounded-2xl glass-panel border border-slate-800/80">
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <span className="text-[#19A7FF] font-mono">02.</span>
              <span>DINING & EVENT RESERVATIONS</span>
            </h2>
            <p>
              Reservations made through our Michelin Dining Concierge or Cultural Events RSVP portals are subject to boutique 
              cancellation windows. Guests failing to cancel within 2 hours of their scheduled dining time may incur standard 
              venue late fees.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 p-6 rounded-2xl glass-panel border border-slate-800/80">
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <span className="text-[#19A7FF] font-mono">03.</span>
              <span>E-COMMERCE & WHITE-GLOVE DELIVERY</span>
            </h2>
            <p>
              All flagship product orders purchased online are guaranteed authentic directly from certified brand boutiques. 
              White-glove same-day delivery applies exclusively to orders placed within designated city radii before 6:00 PM.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 p-6 rounded-2xl glass-panel border border-slate-800/80">
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <span className="text-[#19A7FF] font-mono">04.</span>
              <span>INTELLECTUAL PROPERTY & BRAND TRADEMARKS</span>
            </h2>
            <p>
              All trademarks, 3D architectural renders, logos, and digital assets rendered on the Nexora platform are protected 
              by international intellectual property laws. Reproduction without prior written authorization is strictly prohibited.
            </p>
          </div>
        </div>

        {/* Contact Footer Banner */}
        <div className="p-6 rounded-3xl glass-panel border border-[#19A7FF]/40 bg-[#07121C] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-editorial text-lg font-bold text-white uppercase">LEGAL ENQUIRIES</h4>
            <p className="text-xs font-mono text-slate-400">Contact our Legal Counsel team at legal@nexoramall.com</p>
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
