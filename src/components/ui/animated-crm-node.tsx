"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const crms = [
  { id: "ghl", name: "GoHighLevel", src: "/ghl-logo.png" },
  { id: "salesforce", name: "Salesforce", src: "/salesforce-logo.svg" },
  { id: "zoho", name: "Zoho", src: "/zoho-logo.svg" },
  { id: "hubspot", name: "HubSpot", src: "/hubspot-logo.png" },
];

export function AnimatedCRMNode({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % crms.length);
    }, 3000); // 3 seconds per logo
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("flex flex-col items-center gap-1.5 flex-1 max-w-[80px]", className)}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={crms[index].id}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-full flex items-center justify-center shadow-md border-[3px] border-white bg-white overflow-hidden"
          >
            <img src={crms[index].src} alt={crms[index].name} className="w-6 h-6 object-contain" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="h-4 relative w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={crms[index].name}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="absolute text-[9px] font-bold text-zinc-500 uppercase tracking-widest text-center whitespace-nowrap"
          >
            {crms[index].name}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
