"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mic, Phone, Sparkles } from "lucide-react";

// The conversation to animate
const conversation = [
  { role: "agent", text: "Hi! This is Sarah, your Talira AI assistant. How can I help you today?" },
  { role: "user", text: "Hi Sarah, I'm calling to see if I can reschedule my appointment for tomorrow." },
  { role: "agent", text: "I can certainly help with that. What time would work best for you?" },
  { role: "user", text: "Do you have anything available in the afternoon, maybe around 3 PM?" },
  { role: "agent", text: "Let me check... Yes, I have an opening at 1:30 PM and 3:30 PM tomorrow. Would you like me to lock one of those in for you?" },
  { role: "user", text: "Oh, 3:30 PM works perfectly. Yes, that's great. Thank you!" },
  { role: "agent", text: "You're all set! I've updated your appointment for 3:30 PM. We'll send a confirmation text shortly. Have a great day!" }
];

export function AnimatedTranscriptionTablet() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < conversation.length) {
      // Calculate delay based on whether it's the first message and text length
      const delay = currentIndex === 0 ? 1000 : conversation[currentIndex - 1].text.length * 30 + 1000;
      
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, conversation[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // Restart the loop after an 8 second pause
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 8000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  useEffect(() => {
    // Auto scroll to bottom
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, currentIndex]);

  return (
    <div className="relative w-full max-w-[900px] aspect-[10/12] sm:aspect-[4/3] md:aspect-[16/10] mx-auto flex items-center justify-center -mt-8 perspective-1000">
      
      {/* Decorative Glow behind tablet */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#F25C22]/10 blur-[100px] rounded-full pointer-events-none hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none hidden md:block" />

      {/* iPad Pro Casing (Dark) */}
      <motion.div 
        initial={{ rotateX: 20, rotateY: 0, y: 20, opacity: 0 }}
        animate={{ rotateX: 0, rotateY: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-full bg-zinc-950 rounded-3xl md:rounded-[2rem] p-2 sm:p-3 md:p-4 shadow-2xl ring-2 ring-zinc-800/50"
        style={{ transformStyle: 'preserve-3d' }}
      >
        
        {/* Camera Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-800 z-50 mt-[10px] md:mt-[12px]" />
        
        {/* Inner Bezel & Screen */}
        <div className="relative w-full h-full bg-white rounded-2xl md:rounded-[1.25rem] overflow-hidden flex shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] border border-zinc-200">
          
          {/* Sidebar (Tablet layout) */}
          <div className="w-[30%] max-w-[280px] h-full bg-zinc-50 border-r border-zinc-200 hidden md:flex flex-col relative z-20">
            <div className="p-6 border-b border-zinc-200 flex flex-col gap-8">
              <Image src="/talira_logo.png" alt="Talira Logo" width={240} height={80} className="h-12 w-auto object-contain object-left" />
              
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200/50 flex items-center justify-center text-emerald-600 shadow-sm relative z-10">
                    <Mic size={24} />
                  </div>
                  {/* Pulse Ring */}
                  {currentIndex < conversation.length && (
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-emerald-400 z-0"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-sm mb-1">Active Call Insight</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className={`${currentIndex < conversation.length ? 'animate-ping' : ''} absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75`}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-600 text-[11px] font-bold uppercase tracking-wider">
                      {currentIndex < conversation.length ? "Live Listening" : "Call Concluded"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-5 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">Caller Info</p>
                  <div className="w-full bg-white rounded-lg border border-zinc-200 p-3 shadow-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
                      <Phone size={14} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-700">Jane Doe</h4>
                      <span className="text-[11px] font-medium text-zinc-500">+1 (555) 019-2834</span>
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {currentIndex >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pt-2"
                    >
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">Intent Detected</p>
                      <div className="w-full bg-white rounded-lg border border-zinc-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <Sparkles size={12} className="text-[#F25C22]" />
                          <span className="text-xs font-bold text-zinc-800">Reschedule Appointment</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-snug">Checking CRM for availability tomorrow afternoon.</p>
                      </div>
                    </motion.div>
                  )}
                  {currentIndex >= 7 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pt-2"
                    >
                       <div className="w-full bg-emerald-50 rounded-lg border border-emerald-100 p-3 shadow-sm">
                        <span className="text-xs font-bold text-emerald-800">Action Completed</span>
                        <p className="text-[11px] text-emerald-600 leading-snug mt-1">Appointment moved to 3:30 PM. SMS confirmation sent.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 h-full flex flex-col bg-[#FDFDFD] relative">
            
            {/* Mobile/Compact Header */}
            <div className="md:hidden p-4 sm:p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50 absolute top-0 left-0 right-0 z-20 shadow-sm">
              <Image src="/talira_logo.png" alt="Talira Logo" width={192} height={64} className="h-10 sm:h-12 w-auto" />
              <div className="flex items-center gap-2 bg-emerald-100/50 px-2 py-1 rounded-full border border-emerald-200/50">
                <span className="relative flex h-2 w-2">
                  <span className={`${currentIndex < conversation.length ? 'animate-ping' : ''} absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75`}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-widest">Live</span>
              </div>
            </div>

            {/* Messages Container */}
            <div 
              ref={containerRef}
              className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6 scroll-smooth pt-20 md:pt-8 relative z-10"
            >
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-2 sm:gap-3 max-w-[90%] md:max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {msg.role === 'agent' && (
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-900 border border-zinc-800 flex-shrink-0 flex items-center justify-center shadow-md">
                          <Image src="/talira-icon.png" alt="Talira" width={24} height={24} className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                        </div>
                      )}
                      <div 
                        className={`p-3 md:p-5 rounded-2xl shadow-sm text-[13px] md:text-[15px] leading-relaxed relative ${
                          msg.role === 'user' 
                            ? 'bg-white border border-zinc-100 md:border-zinc-200 text-zinc-800 rounded-tr-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]' 
                            : 'bg-zinc-900 text-white rounded-tl-sm shadow-md'
                        }`}
                      >
                         {/* Brand Accent for AI */}
                         {msg.role === 'agent' && (
                           <div className="absolute top-0 right-0 w-1.5 md:w-2 h-full bg-[#F25C22] rounded-r-2xl" />
                         )}
                        <p className={msg.role === 'agent' ? "pr-2 md:pr-3" : ""}>{msg.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {currentIndex < conversation.length && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="flex justify-start"
                   >
                     <div className="flex gap-2 sm:gap-3 max-w-[85%] flex-row">
                       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-900 border border-zinc-800 flex-shrink-0 flex items-center justify-center shadow-md">
                          <Image src="/talira-icon.png" alt="Talira" width={24} height={24} className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                       </div>
                       <div className="bg-zinc-100 border border-zinc-200 text-zinc-500 rounded-2xl p-4 md:p-5 rounded-tl-sm flex items-center gap-1.5 h-[44px] md:h-[60px] shadow-sm">
                         <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                         <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                         <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                       </div>
                     </div>
                   </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Gradient Mask for smooth scrolling disappearance */}
            <div className="absolute top-0 left-0 right-0 h-10 md:h-6 bg-gradient-to-b from-[#FDFDFD] to-transparent z-10 pointer-events-none hidden md:block" />

          </div>

        </div>
      </motion.div>
      
      {/* Reflection / Floor Shadow */}
      <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] h-8 md:h-12 bg-black/15 blur-xl rounded-[100%] pointer-events-none" />
    </div>
  );
}
