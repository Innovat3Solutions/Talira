"use client";

import { ArrowRight, Zap } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-zinc-950 text-white rounded-[2.5rem] md:rounded-[4rem] my-12 mx-4 sm:mx-8 shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[#F25C22]/15 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-x-0 top-0 h-full opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">
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

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a href="/pricing" className="bg-white text-zinc-950 hover:bg-[#F25C22] hover:text-white border border-transparent px-8 py-4 rounded-full text-sm sm:text-base font-bold shadow-lg transition-colors duration-300 flex items-center justify-center group">
             Compare Plans <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/features" className="bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-4 rounded-full text-sm sm:text-base font-bold transition-colors duration-300 flex items-center justify-center">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
