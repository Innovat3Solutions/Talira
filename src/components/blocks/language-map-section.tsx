"use client"

import React, { useState, useEffect } from "react"
import { Volume2, ChevronDown, Play, Settings, Globe2 } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import InteractiveGlobe from "./interactive-globe"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇧🇷" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
]

const flagMarkers = [
  { id: 1, flag: "🇺🇸", x: "22%", y: "42%", label: "United States" },
  { id: 2, flag: "🇨🇦", x: "28%", y: "28%", label: "Canada" },
  { id: 3, flag: "🇬🇧", x: "46%", y: "32%", label: "United Kingdom" },
  { id: 4, flag: "🇪🇺", x: "52%", y: "38%", label: "European Union" },
  { id: 5, flag: "🇧🇷", x: "32%", y: "65%", label: "Brazil" },
  { id: 6, flag: "🇯🇵", x: "82%", y: "40%", label: "Japan" },
  { id: 7, flag: "🇦🇺", x: "82%", y: "70%", label: "Australia" },
  { id: 8, flag: "🇮🇳", x: "68%", y: "48%", label: "India" },
]

export function LanguageMapSection() {
  const [currentLangIndex, setCurrentLangIndex] = useState(0)
  const [volume, setVolume] = useState(5000)
  const [duration, setDuration] = useState(40)

  // Auto-cycle through languages every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % languages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const calculateSavings = () => {
    const baseSavings = (volume / 1000) * 1.2
    const durationMultiplier = duration / 20
    return Math.round(baseSavings * durationMultiplier)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,237,213,0.3) 0%, rgba(254,215,170,0.5) 30%, rgba(251,146,60,0.4) 60%, rgba(234,88,12,0.5) 100%)'
          }}
        />
        {/* Cloud-like overlays */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[400px] bg-white/30 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-orange-200/40 blur-[80px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-2xl shadow-orange-900/10 border border-white/80 overflow-hidden">

          {/* Header */}
          <div className="text-center pt-12 pb-8 px-4">
            <span className="inline-block bg-zinc-100 text-zinc-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Language lists
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
              <span className="text-primary">40+ languages</span> to choose from
            </h2>
            <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
              Talira supports 40+ languages and accents with hundreds of natural-sounding voices — or you can clone your own. Perfect for a global audience.
            </p>
          </div>

          {/* Map Container */}
          <div className="relative px-4 md:px-12 pb-8">
            <div className="relative w-full aspect-[1.2/1] md:aspect-[2/1] min-h-[350px] md:min-h-[400px] max-h-[600px]">

              {/* 3D Interactive Globe */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <InteractiveGlobe 
                  size={600}
                  dotColor="rgba(242, 92, 34, ALPHA)"
                  arcColor="rgba(242, 92, 34, 0.4)"
                  markerColor="rgba(242, 92, 34, 1)"
                  markers={[
                    { lat: 37.78, lng: -122.42, label: "🇺🇸 US" },
                    { lat: 51.51, lng: -0.13, label: "🇬🇧 UK" },
                    { lat: 35.68, lng: 139.69, label: "🇯🇵 Japan" },
                    { lat: -33.87, lng: 151.21, label: "🇦🇺 Australia" },
                    { lat: -23.55, lng: -46.63, label: "🇧🇷 Brazil" },
                    { lat: 28.61, lng: 77.21, label: "🇮🇳 India" },
                    { lat: 48.85, lng: 2.35, label: "🇪🇺 Europe" },
                    { lat: 45.42, lng: -75.69, label: "🇨🇦 Canada" },
                  ]}
                />
              </div>

              {/* Desktop Floating Overlays */}
              <div className="absolute inset-0 pointer-events-none hidden lg:block z-20">
                <div className="absolute bottom-8 left-8 w-72 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-zinc-100 p-5 pointer-events-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="w-4 h-4 text-zinc-600" />
                    <span className="text-sm font-bold text-zinc-900">Cost Calculator</span>
                  </div>

                  {/* Savings Display */}
                  <div className="mb-4 pb-4 border-b border-zinc-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl text-zinc-400">$</span>
                      <span className="text-4xl font-black tracking-tighter text-zinc-900">{calculateSavings()}k</span>
                      <span className="text-sm text-zinc-400 font-medium">/ month</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">Saved compared to human agents</p>
                  </div>

                  {/* Volume Slider */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-zinc-700">Call volume</span>
                      <span className="text-zinc-500">{volume.toLocaleString()}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#F25C22]"
                    />
                  </div>

                  {/* Duration Tabs */}
                  <div className="flex p-1 bg-zinc-100 rounded-lg">
                    {[20, 30, 40].map((val) => (
                      <button
                        key={val}
                        onClick={() => setDuration(val)}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${
                          duration === val
                            ? 'bg-[#F25C22] text-white shadow-sm'
                            : 'text-zinc-500 hover:text-zinc-700'
                        }`}
                      >
                        {val} min
                      </button>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 w-64 bg-white rounded-2xl shadow-xl border border-zinc-100 p-5 pointer-events-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe2 className="w-4 h-4 text-[#F25C22]" />
                    <span className="text-sm font-bold text-zinc-900">Supported Languages</span>
                    <span className="ml-auto text-xs font-bold bg-orange-100 text-[#F25C22] px-2 py-0.5 rounded-full">40+</span>
                  </div>

                  {/* Animated Display */}
                  <div className="relative h-14 bg-zinc-50 border border-zinc-100 rounded-xl overflow-hidden shadow-inner">
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={currentLangIndex}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                        className="absolute inset-0 flex items-center px-4 gap-3"
                      >
                        <span className="text-2xl drop-shadow-sm">{languages[currentLangIndex].flag}</span>
                        <span className="text-base font-semibold text-zinc-800">{languages[currentLangIndex].name}</span>
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Fade overlay for smooth entry/exit */}
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-b from-zinc-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-t from-zinc-50 to-transparent z-10 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Cards Stack (Below Globe) */}
            <div className="flex flex-col md:flex-row gap-4 lg:hidden w-full max-w-3xl mx-auto relative z-20 mt-4">
                
                {/* Mobile Savings Calculator Card */}
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-zinc-100 p-5 md:p-6 pointer-events-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="w-4 h-4 text-zinc-600" />
                    <span className="text-sm font-bold text-zinc-900">Cost Calculator</span>
                  </div>

                  <div className="mb-4 pb-4 border-b border-zinc-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl text-zinc-400">$</span>
                      <span className="text-4xl font-black tracking-tighter text-zinc-900">{calculateSavings()}k</span>
                      <span className="text-sm text-zinc-400 font-medium">/ month</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">Saved compared to human agents</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-zinc-700">Call volume</span>
                      <span className="text-zinc-500">{volume.toLocaleString()}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#F25C22]"
                    />
                  </div>

                  <div className="flex p-1 bg-zinc-100 rounded-lg">
                    {[20, 30, 40].map((val) => (
                      <button
                        key={val}
                        onClick={() => setDuration(val)}
                        className={`flex-1 py-2 text-xs font-medium rounded-md transition-all ${
                          duration === val
                            ? 'bg-[#F25C22] text-white shadow-sm'
                            : 'text-zinc-500 hover:text-zinc-700'
                        }`}
                      >
                        {val} min
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Supported Languages Card */}
                <div className="flex-1 bg-white rounded-2xl shadow-xl border border-zinc-100 p-5 md:p-6 pointer-events-auto">
                  <div className="flex items-center gap-2 mb-6">
                    <Globe2 className="w-5 h-5 text-[#F25C22]" />
                    <span className="text-sm font-bold text-zinc-900">Supported Languages</span>
                    <span className="ml-auto text-xs font-bold bg-orange-100 text-[#F25C22] px-3 py-1 rounded-full">40+</span>
                  </div>

                  <div className="relative h-20 bg-zinc-50 border border-zinc-100 rounded-xl overflow-hidden shadow-inner">
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={currentLangIndex}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                        className="absolute inset-0 flex items-center justify-center gap-4"
                      >
                        <span className="text-3xl drop-shadow-sm">{languages[currentLangIndex].flag}</span>
                        <span className="text-xl font-bold text-zinc-800 tracking-wide">{languages[currentLangIndex].name}</span>
                      </motion.div>
                    </AnimatePresence>
                    
                    <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-zinc-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-zinc-50 to-transparent z-10 pointer-events-none" />
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
