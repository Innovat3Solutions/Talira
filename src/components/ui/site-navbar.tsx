"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <div className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 ${scrolled ? 'top-2 sm:top-4' : 'top-4 sm:top-8'}`}>
      <header className={`bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg border border-zinc-200/50 dark:border-zinc-800/50 rounded-full flex items-center justify-between transition-all duration-300 ${scrolled ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-4 sm:px-6 h-14' : 'shadow-lg px-5 sm:px-8 h-16 sm:h-20'}`}>
        
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center">
            <Image 
              src="/talira_logo.png" 
              alt="Talira Logo" 
              width={140} 
              height={40} 
              className={`w-auto object-contain dark:invert transition-all duration-300 ${scrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-10'}`} 
              priority 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link href="/features" className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:text-[#F25C22] dark:text-zinc-300 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Features
          </Link>
          
          <div className="group relative">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-zinc-700 hover:text-[#F25C22] dark:text-zinc-300 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Industries <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 text-left z-50">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden py-2 flex flex-col mt-1 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white dark:before:border-b-zinc-900">
                <Link href="/industries/healthcare" className="px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-[#F25C22] transition-colors block">Healthcare</Link>
                <Link href="/industries/e-commerce" className="px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-[#F25C22] transition-colors block">E-commerce</Link>
                <Link href="/industries/call-center" className="px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-[#F25C22] transition-colors block">Call Center</Link>
                <Link href="/industries/real-estate" className="px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-[#F25C22] transition-colors block">Real Estate</Link>
                <Link href="/industries/services" className="px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-[#F25C22] transition-colors block">Services</Link>
                <Link href="/industries/restaurant" className="px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-[#F25C22] transition-colors block">Restaurant</Link>
                <Link href="/industries/legal" className="px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-[#F25C22] transition-colors block">Legal</Link>
                <Link href="/industries/car-dealership" className="px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-[#F25C22] transition-colors block">Car Dealership</Link>
                <Link href="/industries/debt-collection" className="px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-[#F25C22] transition-colors block">Debt Collection</Link>
              </div>
            </div>
          </div>
          
          <Link href="/pricing" className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:text-[#F25C22] dark:text-zinc-300 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Pricing
          </Link>
          <Link href="/about" className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:text-[#F25C22] dark:text-zinc-300 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
            About Us
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center shrink-0 gap-2 sm:gap-4">
          <Link href="/pricing" className={`bg-[#F25C22] text-white hover:bg-[#e04c10] rounded-full font-bold shadow-[0_4px_14px_rgba(242,92,34,0.3)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap ${scrolled ? 'px-4 py-1.5 text-xs sm:text-sm' : 'px-5 py-2 sm:px-6 sm:py-2.5 text-sm'}`}>
            Get Started
          </Link>
          
          <button 
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
              <Link href="/features" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-zinc-800 hover:text-[#F25C22] dark:text-zinc-200 dark:hover:text-white border-b border-zinc-100 dark:border-zinc-800 transition-colors">
                Features
              </Link>
              
              <div className="flex flex-col border-b border-zinc-100 dark:border-zinc-800">
                <button 
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="flex items-center justify-between px-4 py-3 text-base font-semibold text-zinc-800 dark:text-zinc-200"
                >
                  Industries 
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-180 text-[#F25C22]' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-zinc-50 dark:bg-zinc-900/50"
                    >
                      <div className="flex flex-col py-2 px-6 border-l w-full space-y-1">
                        <Link href="/industries/healthcare" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#F25C22]">Healthcare</Link>
                        <Link href="/industries/e-commerce" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#F25C22]">E-commerce</Link>
                        <Link href="/industries/call-center" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#F25C22]">Call Center</Link>
                        <Link href="/industries/real-estate" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#F25C22]">Real Estate</Link>
                        <Link href="/industries/services" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#F25C22]">Services</Link>
                        <Link href="/industries/restaurant" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#F25C22]">Restaurant</Link>
                        <Link href="/industries/legal" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#F25C22]">Legal</Link>
                        <Link href="/industries/car-dealership" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#F25C22]">Car Dealership</Link>
                        <Link href="/industries/debt-collection" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#F25C22]">Debt Collection</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-zinc-800 hover:text-[#F25C22] dark:text-zinc-200 dark:hover:text-white border-b border-zinc-100 dark:border-zinc-800 transition-colors">
                Pricing
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-zinc-800 hover:text-[#F25C22] dark:text-zinc-200 dark:hover:text-white transition-colors">
                About Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
