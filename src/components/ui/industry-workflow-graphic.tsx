"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PhoneCall, Terminal, CheckCircle2, ShieldAlert,
  Stethoscope, ShoppingCart, Database, Building2, Wrench, 
  Utensils, Scale, CarFront, Banknote, User
} from "lucide-react";
import { cn } from "@/lib/utils";

// 9 Unique Scenarios mapping to the Industry URLs
const scenarios: Record<string, any> = {
  "healthcare": {
    caller: "Patient",
    crm: "Epic EHR",
    icon: Stethoscope,
    userMsg: "I need to schedule a follow-up with Dr. Smith next Tuesday.",
    aiMsg: "I can help with that. Dr. Smith has an opening at 2:00 PM on Tuesday. Shall I book it?",
    actionMsg: "Appointment Confirmed: Dr. Smith @ 2:00 PM",
  },
  "e-commerce": {
    caller: "Customer",
    crm: "Shopify",
    icon: ShoppingCart,
    userMsg: "Where is my order? It was supposed to arrive today.",
    aiMsg: "Let me check. Your package #89283 is out for delivery and will arrive by 8 PM.",
    actionMsg: "WISMO Status Checked: Tracking #89283",
  },
  "call-center": {
    caller: "Inbound Lead",
    crm: "Five9 / CRM",
    icon: Database,
    userMsg: "I'm interested in upgrading my enterprise plan.",
    aiMsg: "Absolutely. Let me connect you directly with a senior account executive right now.",
    actionMsg: "Priority Lead Transferred (Sub-200ms)",
  },
  "real-estate": {
    caller: "Home Buyer",
    crm: "GoHighLevel",
    icon: Building2,
    userMsg: "I'd like to tour the property on Main Street.",
    aiMsg: "Great! I can schedule a private showing for tomorrow at 10 AM. Does that work?",
    actionMsg: "Showing Scheduled: 123 Main St",
  },
  "services": {
    caller: "Homeowner",
    crm: "ServiceTitan",
    icon: Wrench,
    userMsg: "My AC stopped working and it's 90 degrees out.",
    aiMsg: "I'm sorry to hear that. I'm dispatching an emergency technician to your address immediately.",
    actionMsg: "Emergency Ticket Created & Dispatched",
  },
  "restaurant": {
    caller: "Diner",
    crm: "Toast / Resy",
    icon: Utensils,
    userMsg: "Do you have a table for 4 tonight at 7:30?",
    aiMsg: "Yes, I have secured a table for 4 at 7:30 PM under your name. See you tonight!",
    actionMsg: "Reservation Confirmed: Table 12",
  },
  "legal": {
    caller: "New Client",
    crm: "Clio",
    icon: Scale,
    userMsg: "I was in a car accident and need an attorney.",
    aiMsg: "I can help. I'll take down some initial details and schedule a free consultation with our senior partner.",
    actionMsg: "Intake Form Generated & Consult Booked",
  },
  "car-dealership": {
    caller: "Car Buyer",
    crm: "Dealership DMS",
    icon: CarFront,
    userMsg: "Do you have the new 2026 SUV in black on the lot?",
    aiMsg: "I just checked our live inventory, and yes, we have two in stock. Would you like to schedule a test drive?",
    actionMsg: "Inventory Verified & Test Drive Lead Created",
  },
  "debt-collection": {
    caller: "Debtor",
    crm: "PCI Gateway",
    icon: Banknote,
    userMsg: "I want to pay off my remaining balance.",
    aiMsg: "Thank you. I have sent a secure SMS payment link to your device. Let me know when it's completed.",
    actionMsg: "Payment Processed Securely (PCI Compliant)",
  }
};

export function IndustryWorkflowGraphic({ slug }: { slug: string }) {
  const data = scenarios[slug] || scenarios["call-center"];
  const CrmIcon = data.icon;
  
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  
  // Progression loop: 0 = Ringing (2s), 1 = Call Live / Transcribing (4s), 2 = Action Executed / Resolved (3s)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === 0) {
      timer = setTimeout(() => setPhase(1), 2000);
    } else if (phase === 1) {
      timer = setTimeout(() => setPhase(2), 4000);
    } else if (phase === 2) {
      timer = setTimeout(() => setPhase(0), 4000); // Loop back
    }
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      {/* Outer Mac-like Glass Window */}
      <div className="w-full bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Window Header */}
        <div className="h-12 bg-zinc-900/50 border-b border-zinc-800 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-zinc-500" />
            <span className="text-xs font-medium text-zinc-500">Live Agent Orchestration</span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[400px]">
          
          {/* Column 1: Inbound Call App */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/50" />
            
            <motion.div 
              className={cn(
                "w-24 h-24 rounded-full flex flex-col items-center justify-center relative z-10 transition-colors duration-500",
                phase === 0 ? "bg-amber-500/10 border-amber-500/30" : "bg-green-500/10 border-green-500/30"
              )}
              initial={false}
              animate={{ 
                boxShadow: phase === 0 
                  ? ["0 0 0px rgba(245, 158, 11, 0)", "0 0 30px rgba(245, 158, 11, 0.4)", "0 0 0px rgba(245, 158, 11, 0)"] 
                  : "0 0 20px rgba(34, 197, 94, 0.2)"
              }}
              transition={phase === 0 ? { duration: 1.5, repeat: Infinity } : {}}
            >
              <div className="absolute inset-0 rounded-full border border-current opacity-50" />
              <User className={cn("w-10 h-10 mb-1", phase === 0 ? "text-amber-500" : "text-green-500")} />
            </motion.div>
            
            <div className="text-center mt-6 relative z-10">
              <h3 className="text-white font-semibold text-lg">{data.caller}</h3>
              <p className={cn(
                "text-sm font-medium mt-1 uppercase tracking-widest",
                phase === 0 ? "text-amber-500" : "text-green-500"
              )}>
                {phase === 0 ? "Calling..." : "Call Connected"}
              </p>
            </div>
          </div>

          {/* Column 2: Talira Engine CPU & Waveforms */}
          <div className="p-6 md:border-r border-zinc-800 bg-zinc-900/20 relative flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img src="/talira-icon.png" alt="Talira" className="w-8 h-8 object-contain" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white block">Talira Engine</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Sub-200ms Latency</span>
              </div>
            </div>

            {/* Waveform Visualizer */}
            <div className="h-16 flex items-center gap-1 justify-center my-auto">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className={cn("w-1.5 rounded-full", phase === 1 ? "bg-[#F25C22]" : "bg-zinc-800")}
                  animate={{ 
                    height: phase === 1 ? ["10%", "100%", "30%", "80%", "20%"] : "10%" 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Live Transcription Box */}
            <div className="mt-auto h-[120px] bg-zinc-950 rounded-xl border border-zinc-800 p-4 relative overflow-hidden">
               <div className="flex items-center gap-2 mb-3">
                 <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                 <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Live Transcript</span>
               </div>
               
               <AnimatePresence mode="popLayout">
                 {phase >= 1 && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="mb-2"
                   >
                     <p className="text-xs text-zinc-300 font-mono">
                       <span className="text-zinc-500 mr-2">Usr:</span>
                       {data.userMsg}
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>
               
               <AnimatePresence mode="popLayout">
                 {phase >= 1 && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1 }}
                   >
                     <p className="text-xs text-[#F25C22] font-mono">
                       <span className="text-zinc-500 mr-2">A.I:</span>
                       {data.aiMsg}
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>

          {/* Column 3: Destination CRM / API */}
          <div className="p-6 bg-zinc-900/40 flex flex-col justify-center relative">
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-3">
                <CrmIcon className="w-8 h-8 text-zinc-400" />
              </div>
              <h3 className="text-zinc-300 font-bold">{data.crm}</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">API Destination</p>
            </div>

            {/* Action Popup */}
            <div className="h-[80px] w-full flex items-center justify-center">
              <AnimatePresence>
                {phase === 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    className="w-full bg-green-500/10 border border-green-500/30 rounded-xl p-3 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-1">Action Executed</p>
                      <p className="text-[11px] text-green-400/80 leading-tight">{data.actionMsg}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
