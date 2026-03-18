"use client";

import Image from "next/image";
import { BackgroundEffects, GradientOrb, MeshGradient } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { MapPin, Users, Lightbulb, Workflow, Cpu, BriefcaseBusiness, MoveRight, ArrowRight, Binary, Combine, Globe, Activity, Headphones, Layers, Server, Zap } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "The Core Agency",
    date: "Established",
    content: "Innovat3 Solutions leads the South Florida tech scene with robust software engineering and high-performance SEO architecture.",
    category: "Infrastructure",
    icon: BriefcaseBusiness,
    relatedIds: [2],
    status: "completed" as const,
    energy: 94,
    industries: [],
  },
  {
    id: 2,
    title: "The Voice Revolution",
    date: "Expansion",
    content: "Talira was born from a specific need: bridging the massive tech gap between local service businesses and scalable AI telecommunications.",
    category: "AI",
    icon: Binary,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 98,
    industries: [],
  },
  {
    id: 3,
    title: "Native CRM Creation",
    date: "Current Focus",
    content: "We aren't just deploying bots. We are engineering a proprietary CRM that acts as the command center for your entire AI Voice Agent fleet.",
    category: "Platform",
    icon: Workflow,
    relatedIds: [2],
    status: "in-progress" as const,
    energy: 100,
    industries: [],
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-zinc-900 overflow-x-hidden font-sans">
      {/* Navigation */}
      <SiteNavbar />

      <main className="flex-1">
        
        {/* ================= HERO: EYE-CATCHING & SEO DRIVEN ================= */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center px-4 w-full bg-zinc-50 overflow-hidden">
          <MeshGradient intensity="light" />
          <GradientOrb color="orange" size="xl" blur="strong" className="absolute -top-20 right-1/4 opacity-40 animate-pulse" />
          <GradientOrb color="peach" size="lg" blur="strong" className="absolute bottom-10 left-1/4 opacity-30" />
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center justify-center px-5 py-2 mb-8 text-[11px] md:text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300">
              <MapPin className="w-3.5 h-3.5 mr-2" /> Premier AI Automation Agency Based Inside South Florida
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-950 mb-8 max-w-4xl mx-auto leading-[1.05]">
              Redefining operations with <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-orange-400">
                Conversational AI.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              We are a full-stack AI orchestration firm building proprietary voice networks. We bridge the gap between traditional business constraints and enterprise-grade generative logic, making your customer workflows inherently scalable and fiercely efficient.
            </p>

            {/* SEO-driven Pill Cloud */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-2">
               <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-zinc-200 shadow-sm hover:border-[#F25C22]/30 transition-colors">
                  <Cpu className="w-4 h-4 text-[#F25C22]" />
                  <span className="text-xs md:text-sm font-bold text-zinc-800">Voice AI Orchestration</span>
               </div>
               <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-zinc-200 shadow-sm hover:border-[#F25C22]/30 transition-colors">
                  <Workflow className="w-4 h-4 text-[#F25C22]" />
                  <span className="text-xs md:text-sm font-bold text-zinc-800">CRM Interoperability</span>
               </div>
               <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-zinc-200 shadow-sm hover:border-[#F25C22]/30 transition-colors">
                  <BriefcaseBusiness className="w-4 h-4 text-[#F25C22]" />
                  <span className="text-xs md:text-sm font-bold text-zinc-800">B2B Workflow Automation</span>
               </div>
            </div>
          </div>
        </section>

        {/* ================= THE ENGINE: WHAT IT DOES & HOW WE USE IT ================= */}
        <section className="py-24 relative overflow-hidden bg-zinc-950 text-white rounded-[2.5rem] md:rounded-[4rem] mx-4 md:mx-8 shadow-2xl">
           <BackgroundEffects variant="section" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#F25C22]/10 via-transparent to-transparent pointer-events-none" />
           
           <div className="container mx-auto px-6 relative z-10 max-w-6xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                 {/* Left: What the Voice AI Does */}
                 <div>
                    <h2 className="text-sm font-bold tracking-widest text-[#F25C22] uppercase mb-4">The Capability</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What Our Voice AI Does</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                      We deploy conversational agents that act entirely like elite human staff, but scale infinitely. They never sleep, never drop calls, and never deviate from procedure.
                    </p>
                    
                    <div className="space-y-8">
                       <div className="flex gap-4">
                          <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                             <Headphones className="w-4 h-4 text-[#F25C22]" />
                          </div>
                          <div>
                             <h4 className="text-lg font-bold text-white mb-2">Human-Parity Conversations</h4>
                             <p className="text-sm text-zinc-400 leading-relaxed">
                               The AI handles complex interruptions, non-linear tangential questions, and emotional nuances, all operating with sub-second latency to ensure perfect conversational fluidity.
                             </p>
                          </div>
                       </div>
                       
                       <div className="flex gap-4">
                          <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                             <Activity className="w-4 h-4 text-[#F25C22]" />
                          </div>
                          <div>
                             <h4 className="text-lg font-bold text-white mb-2">Autonomous Operations</h4>
                             <p className="text-sm text-zinc-400 leading-relaxed">
                               Beyond just talking, the agent securely captures lead information, schedules appointments via live calendar-sync, and routes specialized inquiries to the correct department.
                             </p>
                          </div>
                       </div>
                       
                       <div className="flex gap-4">
                          <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                             <Globe className="w-4 h-4 text-[#F25C22]" />
                          </div>
                          <div>
                             <h4 className="text-lg font-bold text-white mb-2">Omnilingual Support</h4>
                             <p className="text-sm text-zinc-400 leading-relaxed">
                               Natively understands and speaks over 100 languages, allowing you to instantly service diverse markets without hiring specialized bilingual staff.
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Right: How We Utilize It (The Architecture) */}
                 <div>
                    <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-4">The Architecture</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How We Orchestrate It</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                      We don't rely on a single point of failure or an out-of-the-box gimmick. Talira is built on a proprietary orchestration layer.
                    </p>
                    
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700" />
                       
                       <ul className="space-y-6 relative z-10">
                          <li className="flex gap-5">
                             <Layers className="w-6 h-6 text-emerald-400 shrink-0" />
                             <div>
                                <h4 className="text-base font-bold text-white mb-2">Dynamic Model Selection</h4>
                                <p className="text-sm text-zinc-400">
                                  We utilize a routing matrix of the world's leading Large Language Models and voice synthesis network arrays, ensuring the processing logic perfectly aligns with the complexity of the call.
                                </p>
                             </div>
                          </li>
                          <li className="flex gap-5">
                             <Server className="w-6 h-6 text-emerald-400 shrink-0" />
                             <div>
                                <h4 className="text-base font-bold text-white mb-2">Enterprise Backbone</h4>
                                <p className="text-sm text-zinc-400">
                                  The voice logic sits directly on top of robust, enterprise-grade CRM infrastructure ecosystems. This middleware approach allows native real-time data syncs without latency.
                                </p>
                             </div>
                          </li>
                          <li className="flex gap-5">
                             <Zap className="w-6 h-6 text-emerald-400 shrink-0" />
                             <div>
                                <h4 className="text-base font-bold text-white mb-2">Custom Logic Injectors</h4>
                                <p className="text-sm text-zinc-400">
                                  We pipe in unique, specialized system instructions tailor-made for your exact workflows. The orchestration layer guarantees your business rules are adhered to flawlessly.
                                </p>
                             </div>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
              
           </div>
        </section>

        {/* ================= THE PARTNERSHIP (CLEAN REVISION) ================= */}
        <section className="py-24 relative overflow-hidden bg-[#FDFDFD]">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* Text Focus */}
              <div className="lg:w-1/2">
                <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-800 text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-6">The Partnership</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                  Powered by Miami's Premier Agency <br/>
                  <span className="text-[#F25C22]">Innovat3 Solutions.</span>
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#F25C22] to-orange-300 mb-8 rounded-full" />
                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  We're not SEO architects; we're a full-stack engineering team dedicated to building solutions for small to medium-sized businesses. We bridge the gap between traditional operations and powerful modern technology to make your business wildly more efficient, and Talira's conversational AI is just one aspect of that mission.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white border border-zinc-100 p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="w-2 h-2 rounded-full bg-[#F25C22]" />
                       <h4 className="font-bold text-zinc-900 text-sm">We Provide The AI</h4>
                    </div>
                    <p className="text-[13px] text-zinc-500 font-medium">Fine-tuned orchestration operating with sub-200ms conversational latency.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="w-2 h-2 rounded-full bg-zinc-900" />
                       <h4 className="font-bold text-zinc-900 text-sm">They Provide The Base</h4>
                    </div>
                    <p className="text-[13px] text-zinc-500 font-medium">Hosting, compliance, scalability, and robust web & marketing integration.</p>
                  </div>
                </div>
              </div>

              {/* Clean Partnership Visual */}
              <div className="lg:w-1/2 w-full">
                 <div className="w-full rounded-[2.5rem] bg-zinc-900 p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center gap-8">
                    {/* Glowing Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[#F25C22]/10 blur-[80px] pointer-events-none" />
                    
                    <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center shadow-lg relative z-10 transition-transform hover:-translate-y-1 duration-500">
                       <Image src="/talira_logo.png" alt="Talira Voice AI" width={200} height={60} className="w-auto h-10 mb-4 object-contain brightness-0 invert opacity-90 drop-shadow-sm" unoptimized />
                       <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center">Logic & Automation Engine</span>
                    </div>
                    
                    <div className="flex items-center justify-center w-full relative z-10">
                       <div className="h-10 w-px bg-gradient-to-b from-white/10 via-white/40 to-white/10 absolute" />
                       <Combine className="w-8 h-8 text-[#F25C22] bg-zinc-900 rounded-full p-1 border border-zinc-800 z-10" />
                    </div>
                    
                    <div className="w-full bg-black/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center shadow-lg relative z-10 transition-transform hover:-translate-y-1 duration-500">
                       <Image src="/innovate-logo-white-transparent.png" alt="Innovat3 Infrastructure" width={200} height={60} className="w-auto h-9 mb-4 object-contain opacity-90 drop-shadow-sm" unoptimized />
                       <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">Enterprise Infrastructure</span>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= RADIAL TIMELINE / PLATFORM CREATION ================= */}
        <section className="py-24 px-4 md:px-8 bg-zinc-50 border-t border-zinc-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Our Evolution & <span className="text-[#F25C22]">Native CRM</span></h2>
               <p className="text-zinc-600 max-w-2xl mx-auto text-lg leading-relaxed">From rigorous web engineering to deep AI workflows, see how we are building the definitive operational framework for South Florida businesses.</p>
            </div>
            
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-zinc-200 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
              <GradientOrb color="orange" size="xl" blur="strong" className="top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-30 pointer-events-none" />
              <GradientOrb color="peach" size="lg" blur="strong" className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3 opacity-20 pointer-events-none" />
              <div className="relative z-10 px-8 py-16">
                <RadialOrbitalTimeline timelineData={timelineData} />
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
