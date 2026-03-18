"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { Phone, X, User, Mail, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";

export function InteractiveHeroForm({ 
  modalMode = false,
  text = "Try it today",
  title = "Let's talk",
  subtitle = "Tell us about your business and we'll show you how Talira can help.",
  type = "contact",
  accentColor = "black"
}: { 
  modalMode?: boolean,
  text?: string,
  title?: string,
  subtitle?: string,
  type?: "contact" | "deploy" | "blank",
  accentColor?: "black" | "orange"
} = {}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const thumbWidth = isMounted && window.innerWidth < 640 ? 48 : 56; // 3rem vs 3.5rem

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setSliderWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setSliderWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isUnlocked]);

  const x = useMotionValue(0);
  const controls = useAnimation();

  // Calculate max drag distance (with fallback for initial render)
  const maxDrag = Math.max(1, sliderWidth - thumbWidth);

  // Opacity of text decreases as we slide right
  const textOpacity = useTransform(x, [0, maxDrag], [1, 0]);

  // Background fill based on drag - only show fill when actually dragging
  const fillWidth = useTransform(x, [0, maxDrag], [0, sliderWidth]);
  const fillOpacity = useTransform(x, [0, maxDrag / 3], [0, 1]);

  const handleDragEnd = (e: any, info: any) => {
    // If dragged more than 70% of the way, consider it unlocked
    const threshold = (sliderWidth - thumbWidth) * 0.7;

    if (info.offset.x >= threshold) {
      setIsUnlocked(true);
    } else {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
    }
  };

  const handleCloseForm = () => {
    setIsUnlocked(false);
    // Reset slider position
    x.set(0);
    controls.set({ x: 0 });
  };

  if (isUnlocked) {
    const formContent = (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/80 p-6 md:p-8 text-left relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F25C22]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />

        <button
          onClick={handleCloseForm}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-red-100 hover:text-red-600 transition-colors z-20 cursor-pointer"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-black tracking-tight mb-2">{title}</h3>
          <p className="text-sm font-medium text-zinc-500 mb-8">{subtitle}</p>
          
          {type === "contact" && (
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Name */}
               <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">Name</label>
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
               
               {/* Business Website */}
               <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">Business Website</label>
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
                    <Globe className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3" />
                    <input type="url" placeholder="https://company.com" className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium" />
                  </div>
               </div>
            </div>
            
            <button type="submit" className="w-full mt-6 flex items-center justify-center bg-[#F25C22] text-white rounded-xl px-6 py-4 font-bold tracking-wide shadow-lg shadow-[#F25C22]/30 hover:bg-[#e04c10] transition-colors group overflow-hidden relative">
               <span className="relative z-10 flex items-center gap-2">
                 Schedule a Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
          )}

          {type === "deploy" && (
             <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                   <Globe className="w-10 h-10 text-[#F25C22]" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Deploy Agent Configurator</h4>
                <p className="text-zinc-500 text-sm max-w-sm mx-auto">This payload module is currently under construction. Check back soon for deployment access.</p>
             </div>
          )}

          {type === "blank" && (
             <div className="py-16 text-center">
                <p className="text-zinc-400">Placeholder Payload.</p>
             </div>
          )}
        </div>
      </motion.div>
    );

    if (modalMode) {
      if (!isMounted) return null;
      return createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            onClick={handleCloseForm}
          />
          <div className="relative z-10 w-full max-w-2xl">
            {formContent}
          </div>
        </div>,
        document.body
      );
    }

    return formContent;
  }

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center min-h-[60px] sm:min-h-[72px]">
      {/* Slider Button */}
      {isMounted && !isUnlocked && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full"
        >
          {/* Outer glow effect */}
          <div className="absolute -inset-2 bg-[#F25C22]/20 rounded-full blur-xl animate-pulse pointer-events-none" />

          <div
            ref={containerRef}
            className={`relative w-full h-[60px] sm:h-[72px] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.15),0_0_40px_rgba(242,92,34,0.3)] overflow-hidden flex items-center select-none ${accentColor === 'orange' ? 'bg-[#F25C22]' : 'bg-[#2A2A2A]'}`}
            style={{ touchAction: "none" }}
          >
             {/* Subtle pattern or gradient inside slider track */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />

             {/* Background fill based on drag */}
             <motion.div
               className={`absolute top-0 left-0 bottom-0 bg-gradient-to-r ${accentColor === 'orange' ? 'from-white/10 to-white/30' : 'from-[#F25C22]/20 to-[#F25C22]'}`}
               style={{
                 width: fillWidth,
                 opacity: fillOpacity
               }}
             />

             {/* Pulse ring behind thumb - enhanced glow */}
             <div className="absolute left-1.5 sm:left-2 w-12 h-12 sm:w-14 sm:h-14 bg-[#F25C22]/50 rounded-full animate-ping pointer-events-none z-10" />
             <div className="absolute left-1.5 sm:left-2 w-12 h-12 sm:w-14 sm:h-14 bg-[#F25C22]/30 rounded-full animate-pulse pointer-events-none z-10" style={{ animationDelay: '0.5s' }} />

             {/* Draggable Thumb with glow */}
             <motion.div
               drag="x"
               dragConstraints={containerRef}
               dragElastic={0.05}
               onDragEnd={handleDragEnd}
               animate={controls}
               style={{ x }}
               whileDrag={{ scale: 0.95 }}
               className="absolute left-1.5 sm:left-2 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(242,92,34,0.4)] cursor-grab active:cursor-grabbing z-20 overflow-hidden ring-2 ring-[#F25C22]/30"
             >
               <Image src="/talira-icon.png" alt="Talira" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" draggable={false} />
             </motion.div>

             {/* Static Text */}
             <motion.span
               style={{ opacity: textOpacity }}
               className="absolute inset-x-0 text-center text-white/90 text-[13px] sm:text-[15px] font-semibold tracking-wide pointer-events-none z-10 pl-12 sm:pl-14"
             >
               {text}
             </motion.span>
          </div>
        </motion.div>
      )}

      {/* Fallback button for SSR / before mount */}
      {!isMounted && !isUnlocked && (
         <div className={`relative w-full h-[60px] sm:h-[72px] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.15),0_0_40px_rgba(242,92,34,0.3)] overflow-hidden flex items-center ${accentColor === 'orange' ? 'bg-[#F25C22]' : 'bg-[#2A2A2A]'}`}>
            <div className="absolute left-1.5 sm:left-2 w-12 h-12 sm:w-14 sm:h-14 bg-[#F25C22]/50 rounded-full animate-ping pointer-events-none z-10" />
            <div className="absolute left-1.5 sm:left-2 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center z-20 overflow-hidden ring-2 ring-[#F25C22]/30 shadow-[0_4px_20px_rgba(242,92,34,0.4)]">
               <Image src="/talira-icon.png" alt="Talira" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <span className="absolute inset-x-0 text-center text-white/90 text-[13px] sm:text-[15px] font-semibold tracking-wide pointer-events-none z-10 pl-12 sm:pl-14">
              {text}
            </span>
         </div>
      )}

    </div>
  );
}
