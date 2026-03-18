"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Database, Combine, Calendar, PhoneOutgoing, Zap, MessageSquare, Briefcase, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

// Types for the integration nodes
type IntegrationNode = {
  id: string;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  color: string;
  bgColor: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  delay: number;
};

const nodes: IntegrationNode[] = [
  {
    id: "crm",
    icon: <Database className="w-4 h-4 text-[#F25C22]" />,
    label: "CRMs",
    sublabel: "HubSpot, GHL",
    color: "text-[#F25C22]",
    bgColor: "bg-orange-100",
    x: 10,
    y: 20,
    delay: 0.2,
  },
  {
    id: "kb",
    icon: <Combine className="w-4 h-4 text-zinc-900 dark:text-white" />,
    label: "Knowledge",
    sublabel: "PDFs, Sites",
    color: "text-zinc-900 dark:text-white",
    bgColor: "bg-zinc-200 dark:bg-zinc-800",
    x: 90,
    y: 20,
    delay: 0.4,
  },
  {
    id: "cal",
    icon: <Calendar className="w-4 h-4 text-blue-600" />,
    label: "Calendars",
    sublabel: "Cal.com, G-Cal",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    x: 80,
    y: 85,
    delay: 0.6,
  },
  {
    id: "webhooks",
    icon: <Zap className="w-4 h-4 text-emerald-600" />,
    label: "Workflows",
    sublabel: "Zapier, Make",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    x: 20,
    y: 85,
    delay: 0.8,
  },
];

export function HeroIntegrationGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[380px] mt-8 mb-4 flex items-center justify-center p-4 sm:p-8"
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #000 2px, transparent 2.5px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Central Hub (Talira AI) */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-20 flex flex-col items-center justify-center cursor-pointer group"
        onMouseEnter={() => setActiveNode("center")}
        onMouseLeave={() => setActiveNode(null)}
      >
        <div className="absolute inset-0 bg-[#F25C22] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
        
        {/* Core Pulsing Rings */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[-30px] rounded-full border border-[#F25C22]/30"
        />
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[-60px] rounded-full border border-[#F25C22]/20 hidden sm:block"
        />

        <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white dark:bg-zinc-950 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl flex items-center justify-center z-10 overflow-hidden group-hover:shadow-[0_0_40px_rgba(242,92,34,0.15)] transition-all duration-500 transform group-hover:-translate-y-1">
          {/* Glass glare */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent dark:from-white/5 pointer-events-none" />
          
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-inner overflow-hidden border border-zinc-100">
               <img src="/talira-icon.png" alt="Talira Core" className="w-7 h-7 object-contain" />
            </div>
            <span className="font-black text-[10px] tracking-wider text-zinc-900 dark:text-white uppercase">Talira Core</span>
          </div>
        </div>
      </motion.div>

      {/* SVG Connection Lines */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none">
        {nodes.map((node) => (
          <g key={`line-${node.id}`}>
            {/* Base subtle line */}
            <motion.line
              x1="50%"
              y1="50%"
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-200 dark:text-zinc-800"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: node.delay }}
            />
            {/* Animated active pulse line */}
            <motion.line
              x1="50%"
              y1="50%"
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="url(#gradient-orange)"
              strokeWidth="3"
              strokeDasharray="10 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                activeNode === node.id || activeNode === "center"
                  ? { pathLength: 1, opacity: 1, strokeDashoffset: [0, -20] }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={
                activeNode === node.id || activeNode === "center"
                  ? { 
                      pathLength: { duration: 0.4 },
                      opacity: { duration: 0.4 },
                      strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" } 
                    }
                  : { duration: 0.3 }
              }
            />
          </g>
        ))}

        <defs>
          <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F25C22" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffb347" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Orbiting Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute z-30"
          style={{ left: `${node.x}%`, top: `${node.y}%`, x: '-50%', y: '-50%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: node.delay + 0.3, type: "spring" }}
        >
          {/* Floating animation wrapper */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
            className="relative"
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* The Node Card */}
            <div 
              className={cn(
                "relative group cursor-pointer bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all duration-300",
                activeNode === node.id ? "scale-110 z-40 border-[#F25C22]/50 shadow-[0_0_30px_rgba(242,92,34,0.1)]" : "hover:scale-105",
                activeNode && activeNode !== node.id && activeNode !== "center" ? "opacity-40" : "opacity-100"
              )}
            >
              <div className="flex items-center gap-2">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", node.bgColor)}>
                  {node.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{node.label}</span>
                  <span className="text-[9px] text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap">{node.sublabel}</span>
                </div>
              </div>

              {/* Data packet visual that appears on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={activeNode === node.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[9px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap pointer-events-none"
              >
                Syncing Data...
                {/* Arrow pointer */}
                <svg className="absolute w-2 h-2 text-zinc-900 dark:text-white bottom-[-4px] left-1/2 -translate-x-1/2 rotate-45" fill="currentColor" viewBox="0 0 24 24"><path d="M24 24H0V0h24v24z"/></svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}

    </div>
  );
}
