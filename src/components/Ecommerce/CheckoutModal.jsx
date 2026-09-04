import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, CreditCard, Lock, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartItems, onClearCart }) {
  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [formData, setFormData] = useState({ name: '', email: '', address: '', city: '', zip: '', card: '•••• •••• •••• 4242' });

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + 25;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setStep('success');
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#19A7FF', '#56D6FF', '#ffffff'],
    });
    setTimeout(() => {
      onClearCart();
      setStep('form');
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-slate-700/80 shadow-2xl bg-[#070910] p-5 sm:p-8 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-[#19A7FF]/10 text-[#19A7FF] border border-[#19A7FF]/30">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white uppercase">SECURE CHECKOUT</h3>
                <span className="text-[10px] font-mono text-slate-400">NEXORA CONCIERGE PAY</span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full glass-panel text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {step === 'success' ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="font-editorial text-2xl font-bold text-white uppercase">
                ORDER #NX-{Math.floor(100000 + Math.random() * 900000)} CONFIRMED!
              </h4>
              <p className="text-xs font-mono text-slate-300 max-w-md mx-auto">
                Thank you, {formData.name || 'Valued Customer'}. Your order for ${totalAmount.toLocaleString()} has been placed and assigned to Nexora VIP Courier Express.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-[#56D6FF] uppercase font-bold">1. SHIPPING ADDRESS</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-2.5 rounded-xl glass-panel text-xs text-white border border-slate-800 focus:outline-none focus:border-[#19A7FF]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-2.5 rounded-xl glass-panel text-xs text-white border border-slate-800 focus:outline-none focus:border-[#19A7FF]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Street Address (e.g. 100 Apex Boulevard)"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-panel text-xs text-white border border-slate-800 focus:outline-none focus:border-[#19A7FF]"
                />
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-[10px] font-mono text-[#56D6FF] uppercase font-bold flex items-center justify-between">
                  <span>2. PAYMENT METHOD</span>
                  <span className="text-slate-400">ENCRYPTED 256-BIT</span>
                </div>
                <div className="p-3 rounded-xl glass-panel border border-[#19A7FF]/40 flex items-center justify-between text-xs font-mono text-white">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4 text-[#19A7FF]" />
                    <span>NEXORA VIP EXPRESS CARD</span>
                  </div>
                  <span className="text-slate-400">{formData.card}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">TOTAL DUE NOW</div>
                  <div className="text-xl font-editorial font-bold text-white">${totalAmount.toLocaleString()}</div>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(25,167,255,0.4)]"
                >
                  PLACE ORDER →
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
