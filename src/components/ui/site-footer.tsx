"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Mail, ArrowRight, Zap } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full bg-transparent px-4 sm:px-8 pb-8 pt-12 sm:pt-24 clear-both relative z-20">
      <div className="relative overflow-hidden bg-zinc-950 text-white rounded-[2.5rem] md:rounded-[4rem] shadow-2xl pointer-events-auto">
        {/* Background glow for CTA */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-[#F25C22]/15 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-x-0 top-0 h-full opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* --- CTA SECTION --- */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-[11px] font-extrabold text-[#F25C22] uppercase tracking-widest bg-white/5 border border-white/10 rounded-full shadow-sm">
            <Zap className="w-3.5 h-3.5 mr-2" /> Start Scaling Today
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.05]">
            Ready to deploy your <br className="hidden md:block"/>
            <span className="text-[#F25C22]">AI Workforce?</span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop losing leads to missed calls and off-hours inquiries. Talira provides 24/7, human-parity conversational agents tailored to your business operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
            <a href="/pricing" className="bg-white text-zinc-950 hover:bg-[#F25C22] hover:text-white border border-transparent px-8 py-4 rounded-full text-sm sm:text-base font-bold shadow-lg transition-colors duration-300 flex items-center justify-center group">
               Compare Plans <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/features" className="bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-4 rounded-full text-sm sm:text-base font-bold transition-colors duration-300 flex items-center justify-center">
              Explore Features
            </a>
          </div>
        </div>

        {/* --- FOOTER SECTION --- */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl pb-8">
           <div className="border-t border-white/10 pt-12 md:pt-16 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
                 
                 {/* Left Column: Logo and Description */}
                 <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-10">
                    <Image 
                      src="/talira_logo.png" 
                      alt="Talira Logo" 
                      width={180} 
                      height={60} 
                      className="w-[140px] h-auto mb-6 brightness-0 invert" 
                    />
                    <p className="text-zinc-400 text-[12px] leading-[1.8] mb-8 font-medium">
                      Create no-code AI phone call agents to automate incoming and outgoing calls. Talira is the fully featured platform to deploy in 100+ languages without coding skills.
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex gap-3">
                       <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-[#F25C22] flex items-center justify-center hover:bg-[#F25C22] hover:text-white transition-colors duration-300">
                         <Linkedin className="w-4 h-4 fill-current" />
                       </a>
                       <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-[#F25C22] flex items-center justify-center hover:bg-[#F25C22] hover:text-white transition-colors duration-300">
                         <Facebook className="w-4 h-4 fill-current" />
                       </a>
                       <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-[#F25C22] flex items-center justify-center hover:bg-[#F25C22] hover:text-white transition-colors duration-300">
                         <Mail className="w-4 h-4 fill-current" />
                       </a>
                    </div>
                 </div>
                 
                 {/* Right Columns: Links */}
                 <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 pl-0 lg:pl-6 pt-2">
                    {/* Column 1 */}
                    <div>
                      <h4 className="text-white font-bold mb-6 text-[13px] tracking-tight">Solution</h4>
                      <ul className="space-y-4 text-[13px] font-medium text-zinc-400">
                        <li><Link href="#" className="hover:text-white transition-colors block">Try for free</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Integrations</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Phone numbers</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Available languages</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">AI call center</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">No-code Platform</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Frequently asked questions</Link></li>
                      </ul>
                    </div>
                    
                    {/* Column 2 */}
                    <div>
                      <h4 className="text-white font-bold mb-6 text-[13px] tracking-tight">Platform</h4>
                      <ul className="space-y-4 text-[13px] font-medium text-zinc-400">
                        <li><Link href="/features" className="hover:text-white transition-colors block">Features</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors block">About Us</Link></li>
                        <li><Link href="/pricing" className="hover:text-white transition-colors block">Pricing</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">White label</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Sign up now</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Log in</Link></li>
                      </ul>
                    </div>
                    
                    {/* Column 3 */}
                    <div>
                      <h4 className="text-white font-bold mb-6 text-[13px] tracking-tight">Resources</h4>
                      <ul className="space-y-4 text-[13px] font-medium text-zinc-400">
                        <li><Link href="#" className="hover:text-white transition-colors block">Contact</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Blog</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Documentation</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Status</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Changelog</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors block">Terms and conditions</Link></li>
                      </ul>
                    </div>
                    
                    {/* Column 4 */}
                    <div>
                      <h4 className="text-white font-bold mb-6 text-[13px] tracking-tight">Industries</h4>
                      <ul className="space-y-4 text-[13px] font-medium text-zinc-400">
                        <li><Link href="/industries/healthcare" className="hover:text-white transition-colors block">Healthcare</Link></li>
                        <li><Link href="/industries/e-commerce" className="hover:text-white transition-colors block">E-commerce</Link></li>
                        <li><Link href="/industries/call-center" className="hover:text-white transition-colors block">Call center</Link></li>
                        <li><Link href="/industries/real-estate" className="hover:text-white transition-colors block">Real estate</Link></li>
                        <li><Link href="/industries/services" className="hover:text-white transition-colors block">Services</Link></li>
                        <li><Link href="/industries/restaurant" className="hover:text-white transition-colors block">Restaurant</Link></li>
                        <li><Link href="/industries/legal" className="hover:text-white transition-colors block">Legal</Link></li>
                        <li><Link href="/industries/car-dealership" className="hover:text-white transition-colors block">Car Dealership</Link></li>
                        <li><Link href="/industries/debt-collection" className="hover:text-white transition-colors block">Debt Collection</Link></li>
                      </ul>
                    </div>
                 </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 mt-4 whitespace-normal text-center md:text-left">
                <div className="text-[11px] text-zinc-500 font-medium tracking-wide mb-4 md:mb-0">
                  Copyright © 2026 All rights reserved. 
                </div>
                <div className="text-[11px] text-zinc-500 font-medium tracking-wide">
                  Designed & Powered by{" "}
                  <a
                    href="https://www.innovat3solutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F25C22] hover:underline"
                  >
                    Innovat3 Solutions
                  </a>
                </div>
              </div>

           </div>
        </div>
      </div>
    </footer>
  );
}
