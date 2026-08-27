import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 25 : 0;
  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-md h-full bg-[#070910] border-l border-slate-800 shadow-2xl flex flex-col justify-between p-6 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-[#19A7FF]/10 text-[#19A7FF] border border-[#19A7FF]/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial text-xl font-bold text-white uppercase">YOUR SHOPPING CART</h3>
                <span className="text-[10px] font-mono text-slate-400">{cartItems.length} LUXURY ITEMS</span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full glass-panel text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                <ShoppingBag className="w-12 h-12 text-slate-600" />
                <div className="font-editorial text-lg font-bold text-slate-300 uppercase">YOUR CART IS EMPTY</div>
                <p className="text-xs text-slate-500 font-light max-w-xs">
                  Discover exclusive luxury drops across our 180+ store directory and add items to your cart.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="p-4 rounded-2xl glass-panel border border-slate-800 flex space-x-4 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover bg-slate-900 flex-none" />
                  <div className="flex-1 space-y-1">
                    <div className="text-[10px] font-mono text-[#56D6FF] uppercase font-bold">{item.store}</div>
                    <h4 className="font-editorial text-sm font-bold text-white uppercase line-clamp-1">{item.name}</h4>
                    <div className="text-xs font-mono font-bold text-white">${item.price.toLocaleString()}</div>

                    <div className="flex items-center space-x-3 pt-1">
                      <div className="flex items-center space-x-2 glass-panel px-2 py-0.5 rounded-lg border border-slate-800">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="text-slate-400 hover:text-white">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono text-white font-bold">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="text-slate-400 hover:text-white">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button onClick={() => onRemoveItem(item.id)} className="text-slate-500 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && (
            <div className="border-t border-slate-800 pt-4 space-y-4">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>SUBTOTAL</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>WHITE-GLOVE SHIPPING</span>
                  <span>${shipping}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                  <span>TOTAL ESTIMATE</span>
                  <span className="text-[#19A7FF]">${total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full py-4 rounded-xl bg-[#19A7FF] hover:bg-[#19A7FF]/90 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(25,167,255,0.4)] flex items-center justify-center space-x-2"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
