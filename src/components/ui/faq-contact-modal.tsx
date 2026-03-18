"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export function FAQContactModal({ industryName }: { industryName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => setIsSubmitted(false), 500); // reset after hidden
    }, 2500);
  };

  return (
    <>
      {/* Trigger Area */}
      <div className="mt-12 p-8 bg-zinc-950 rounded-3xl border border-zinc-800 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F25C22]/10 via-transparent to-transparent opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />
        <h4 className="text-2xl font-bold text-white mb-3 relative z-10">Still have questions?</h4>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto relative z-10">We can build custom Voice AI orchestration for virtually any complex {industryName.trim()} use-case.</p>
        <button 
          onClick={() => setIsOpen(true)}
          className="relative z-10 bg-white text-zinc-950 px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          Ask us here
        </button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden"
            >
              {isSubmitted ? (
                <div className="p-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Question Sent!</h3>
                  <p className="text-zinc-400 text-sm">Our engineering team will review it and reply to you shortly.</p>
                </div>
              ) : (
                <div className="p-6 md:p-8">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white tracking-tight">Ask away</h3>
                    <p className="text-sm text-zinc-400 mt-3 leading-relaxed">Drop your email and question below. We'll get right back to you with custom architecture advice.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="you@company.com" 
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F25C22] transition-colors focus:ring-1 focus:ring-[#F25C22] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Your Question</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder={`How would Talira handle ${industryName.trim().toLowerCase()} routing...`}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F25C22] transition-colors focus:ring-1 focus:ring-[#F25C22] text-sm resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-[#F25C22] text-white hover:bg-[#e0501b] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(242,92,34,0.4)] mt-4 active:scale-[0.98]"
                    >
                      <span>Send to Engineering</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
