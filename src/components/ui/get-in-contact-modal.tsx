"use client";

import { motion } from "framer-motion";
import { User, Mail, Globe, Phone, Briefcase, ArrowRight, X } from "lucide-react";

interface GetInContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetInContactModal({ isOpen, onClose }: GetInContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/80 p-6 md:p-8 text-left relative overflow-hidden z-10"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F25C22]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-red-100 hover:text-red-600 transition-colors z-20 cursor-pointer"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-black tracking-tight mb-2">Get in Contact With Us</h3>
          <p className="text-sm font-medium text-zinc-500 mb-8">Discuss custom implementation and find out how Talira can scale your operations.</p>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Contact form submitted!"); onClose(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* First & Last Name */}
               <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">First & Last Name</label>
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
                    <User className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3" />
                    <input required type="text" placeholder="John Doe" className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium" />
                  </div>
               </div>
               
               {/* Business Email */}
               <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">Business Email</label>
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
                    <Mail className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3" />
                    <input required type="email" placeholder="john@company.com" className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium" />
                  </div>
               </div>
               
               {/* Phone Number */}
               <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">Phone Number</label>
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
                    <Phone className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3" />
                    <input required type="tel" placeholder="+1 (555) 000-0000" className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium" />
                  </div>
               </div>
               
               {/* Business Niche */}
               <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">Business Niche</label>
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
                    <Briefcase className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3" />
                    <input required type="text" placeholder="e.g. Real Estate, Call Center" className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium" />
                  </div>
               </div>
            </div>
            
            <button type="submit" className="w-full mt-6 flex items-center justify-center bg-zinc-950 text-white rounded-xl px-6 py-4 font-bold tracking-wide shadow-lg hover:bg-zinc-800 transition-colors group overflow-hidden relative">
               <span className="relative z-10 flex items-center gap-2">
                 Submit Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
