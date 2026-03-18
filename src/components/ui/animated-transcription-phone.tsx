"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

export function AnimatedTranscriptionPhone() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < conversation.length) {
      const delay = currentIndex === 0 ? 1000 : conversation[currentIndex - 1].text.length * 30 + 1000;
      
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, conversation[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 8000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, currentIndex]);

  return (
    <div className="relative w-full flex items-center justify-center perspective-1000 pt-8 pb-12">
      
      {/* iPhone Pro Casing */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-[320px] h-[650px] bg-zinc-950 rounded-[3rem] p-2 shadow-2xl ring-1 ring-zinc-800/50 border-4 border-zinc-800 mx-auto"
      >
        
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-sm">
          {currentIndex < conversation.length ? (
             <div className="flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[9px] font-bold text-emerald-500 tracking-wider">0:14</span>
             </div>
          ) : (
             <div className="w-2 h-2 rounded-full bg-zinc-800" />
          )}
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
        </div>
        
        {/* Inner Screen */}
        <div className="relative w-full h-full bg-[#f8f9fa] rounded-[2.5rem] overflow-hidden flex flex-col pt-14">
          
          {/* Mobile Header Context */}
          <div className="px-5 pb-3 border-b border-zinc-200 flex flex-col items-center bg-white shadow-sm z-20">
             <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-2 shadow-sm border border-zinc-800">
               <Image src="/talira-icon.png" alt="Talira" width={24} height={24} className="w-6 h-6 object-contain" />
             </div>
             <h3 className="text-sm font-bold text-zinc-900">Talira AI Agent</h3>
             <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-0.5">
               {currentIndex < conversation.length ? "Active Call" : "Call Concluded"}
             </p>
          </div>

          {/* Messages Container */}
          <div 
            ref={containerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth relative z-10 bg-[#f8f9fa]"
          >
            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`p-3.5 rounded-2xl shadow-sm text-[13px] leading-relaxed max-w-[85%] relative ${
                      msg.role === 'user' 
                        ? 'bg-[#F25C22] text-white rounded-tr-sm' 
                        : 'bg-white border border-zinc-200 text-zinc-800 rounded-tl-sm'
                    }`}
                  >
                    <p>{msg.text}</p>
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
                   <div className="bg-white border border-zinc-200 rounded-2xl p-3.5 rounded-tl-sm flex items-center gap-1 h-[42px] shadow-sm">
                     <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                     <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                     <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                   </div>
                 </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </motion.div>
      
      {/* Floor Shadow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-6 bg-black/20 blur-xl rounded-[100%] pointer-events-none" />
    </div>
  );
}
