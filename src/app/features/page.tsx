import Image from "next/image";
import { BackgroundEffects, GradientOrb, MeshGradient } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { HeroIntegrationGraphic } from "@/components/ui/hero-integration-graphic";
import { AnimatedCRMNode } from "@/components/ui/animated-crm-node";
import { Database, FolderHeart, Zap, Calendar, MessageSquare, PhoneOutgoing, Network, ShieldCheck, Settings, Globe, Combine, Cpu } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Features & CRM Integrations | Talira AI Miami',
  description: 'Discover how Talira seamlessly integrates AI voice agents with your CRM, knowledge base, and automated workflows. The definitive AI automation consultancy in South Florida.',
  openGraph: {
    title: 'Platform Features & CRM Integrations | Talira AI Miami',
    description: 'Discover how Talira seamlessly integrates AI voice agents with your CRM, knowledge base, and automated workflows. The definitive AI automation consultancy in South Florida.',
  }
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <SiteNavbar />

      <main className="flex-1">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 flex flex-col items-center justify-center text-center px-4 w-full overflow-hidden bg-zinc-50">
          <MeshGradient intensity="medium" />
          <GradientOrb color="orange" size="xl" blur="strong" className="-top-10 -right-20 opacity-30" />
          <GradientOrb color="peach" size="lg" blur="strong" className="bottom-0 left-10 opacity-40" />
          
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center mt-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
              <SparklesIcon className="w-3 h-3 mr-2" />
              Advanced Voice AI Architecture
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-900 mb-8 max-w-5xl mx-auto leading-[1.05]">
              Seamless Integration. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347] relative">
                Infinite Scalability.
                {/* Decorative underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" fill="none" stroke="#F25C22" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Go beyond simple chatbots. Talira connects directly to your existing systems—Knowledge Bases, CRMs, and Calendars—bridging the gap between AI conversations and tangible business outcomes.
            </p>

            {/* Interactive Hero Graphic */}
            <HeroIntegrationGraphic />
          </div>
        </section>

        {/* ================= BENTO GRID CRM INTEGRATION ================= */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
             <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                 The Ultimate <span className="text-[#F25C22]">CRM Integration</span> Engine
               </h2>
               <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                 We don't just log calls. We manipulate objects, trigger workflows, and drive automation native to your existing platforms.
               </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[320px] md:auto-rows-[360px] gap-6">
                
                {/* Large Main Feature: Custom Webhooks */}
                <div className="lg:col-span-2 lg:row-span-2 bg-[#FDF8F5] border border-[#F5EBE1] rounded-[2rem] p-8 md:p-12 relative overflow-hidden group flex flex-col md:flex-row gap-8">
                  <GradientOrb color="orange" size="lg" blur="strong" className="-bottom-20 -right-20 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                  
                  {/* Text Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                     <span className="bg-[#F25C22] text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-6 shadow-sm">Developer First</span>
                     <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">Custom Webhooks</h3>
                     <p className="text-zinc-600 text-lg md:text-xl leading-relaxed max-w-md">
                       Don't see your platform? No problem. Fire granular JSON payloads to Zapier, Make.com, or directly to your server instantaneously post-call.
                     </p>
                  </div>
                  
                  {/* Code Editor Visual */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center mt-6 md:mt-0">
                     <div className="w-full bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
                        {/* Editor Header */}
                        <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                           <div className="flex gap-2">
                             <span className="w-3 h-3 rounded-full bg-red-500"></span>
                             <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                             <span className="w-3 h-3 rounded-full bg-green-500"></span>
                           </div>
                           <div className="text-xs font-mono text-zinc-400">payload.json</div>
                           <div className="w-12"></div> {/* Spacer for balance */}
                        </div>
                        {/* Editor Body */}
                        <div className="p-4 md:p-6 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
                           <span className="text-zinc-500">1</span> <span className="text-emerald-400">{"{"}</span><br/>
                           <span className="text-zinc-500">2</span>   <span className="text-blue-400">"event"</span><span className="text-white">:</span> <span className="text-orange-300">"call.completed"</span>,<br/>
                           <span className="text-zinc-500">3</span>   <span className="text-blue-400">"call_id"</span><span className="text-white">:</span> <span className="text-orange-300">"v_892nf829"</span>,<br/>
                           <span className="text-zinc-500">4</span>   <span className="text-blue-400">"duration"</span><span className="text-white">:</span> <span className="text-[#F25C22]">124</span>,<br/>
                           <span className="text-zinc-500">5</span>   <span className="text-blue-400">"extracted_data"</span><span className="text-white">:</span> <span className="text-emerald-400">{"{"}</span><br/>
                           <span className="text-zinc-500">6</span>     <span className="text-blue-400">"intent"</span><span className="text-white">:</span> <span className="text-orange-300">"book_appointment"</span>,<br/>
                           <span className="text-zinc-500">7</span>     <span className="text-blue-400">"customer_name"</span><span className="text-white">:</span> <span className="text-orange-300">"John Doe"</span><br/>
                           <span className="text-zinc-500">8</span>   <span className="text-emerald-400">{"}"}</span><br/>
                           <span className="text-zinc-500">9</span> <span className="text-emerald-400">{"}"}</span>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Middleware */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-[2rem] p-6 md:p-8 relative overflow-hidden transition-all hover:bg-zinc-100 flex flex-col">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 md:mb-6 border border-zinc-200 shrink-0 relative z-10">
                     <Network className="w-5 h-5 text-zinc-700" />
                   </div>
                   <h3 className="text-xl font-bold text-zinc-900 mb-2 relative z-10">Middleware API</h3>
                   <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed max-w-md relative z-10">
                     Our API layer sits perfectly between your Voice Agents and CRMs like Go High Level, HubSpot, and Salesforce. As leads talk, fields update.
                   </p>
                   {/* Simplified Connector Visual */}
                   <div className="mt-auto pt-4 flex justify-between items-center gap-3 relative z-10 w-full">
                      <div className="flex flex-col items-center gap-1.5 flex-1 max-w-[80px]">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-[2px] border-zinc-100 overflow-hidden">
                          <img src="/talira-icon.png" alt="Talira AI" className="w-6 h-6 object-contain" />
                        </div>
                        <div className="h-4 flex items-center justify-center">
                           <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest text-center whitespace-nowrap">Talira AI</span>
                        </div>
                      </div>
                      
                      <div className="flex-1 h-1 bg-gradient-to-r from-zinc-300 to-blue-300 rounded-full relative overflow-hidden -translate-y-2">
                        <div className="absolute inset-y-0 w-1/2 bg-blue-500 rounded-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                      
                      <AnimatedCRMNode />
                   </div>
                   {/* Decorative background element to add depth */}
                   <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                </div>

                {/* Security */}
                <div className="bg-white border border-zinc-200/80 shadow-lg shadow-zinc-200/40 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between group">
                   <div>
                     <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                       <ShieldCheck className="w-5 h-5 text-emerald-600" />
                     </div>
                     <h3 className="text-xl font-bold text-zinc-900 mb-3">Enterprise Grade</h3>
                     <p className="text-sm text-zinc-500 leading-relaxed">
                       All data traverses encrypted pathways. No audio recordings are permanently stored without consent, ensuring HIPAA & SOC2 readiness.
                     </p>
                   </div>
                   <div className="mt-4 flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-50 w-fit px-3 py-1.5 rounded-full">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Secure Data Transfer
                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* ================= DARK IMMERSIVE KNOWLEDGE BASE ================= */}
        <section className="py-32 relative overflow-hidden bg-zinc-950 text-white border-t border-zinc-800">
          <BackgroundEffects variant="section" />
          
          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="lg:w-1/2">
                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                   Train agents in <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">seconds, not weeks.</span>
                 </h2>
                 <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                   Turn your company's PDFs, SOPs, and public website into an instant vector knowledge base. Our chunking algorithm ensures the Voice AI retrieves context perfectly in under 200ms.
                 </p>

                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                         <FolderHeart className="w-5 h-5 text-[#F25C22]" />
                       </div>
                       <div>
                         <h4 className="text-lg font-bold text-white mb-1">Upload Documents</h4>
                         <p className="text-sm text-zinc-400">Drag and drop employee handbooks, pricing PDFs, and procedural charts.</p>
                       </div>
                    </div>
                    
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                         <Globe className="w-5 h-5 text-[#F25C22]" />
                       </div>
                       <div>
                         <h4 className="text-lg font-bold text-white mb-1">Crawl Entire Domains</h4>
                         <p className="text-sm text-zinc-400">Keep the AI synced with your public content automatically. If it's on your site, the agent knows it.</p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                         <Cpu className="w-5 h-5 text-[#F25C22]" />
                       </div>
                       <div>
                         <h4 className="text-lg font-bold text-white mb-1">RAG Context Engine</h4>
                         <p className="text-sm text-zinc-400">Retrieval-Augmented Generation ensures the agent never hallucinates unapproved data.</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* RAG Visualization */}
              <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                 <div className="w-full max-w-md bg-black rounded-[2.5rem] p-4 border border-zinc-800 shadow-[0_0_50px_rgba(242,92,34,0.15)] relative">
                    {/* Glow behind the UI */}
                    <div className="absolute inset-x-10 inset-y-10 bg-[#F25C22]/20 blur-3xl z-0 pointer-events-none" />
                    
                    <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800/80 p-6 relative z-10 flex flex-col gap-6">
                       <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 text-center">Data Ingestion Engine</h4>
                       
                       {/* Upload Simulation */}
                       <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 flex items-center gap-4">
                          <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center text-red-400 border border-red-900/50">
                            <span className="text-[10px] font-bold">PDF</span>
                          </div>
                          <div className="flex-1">
                             <div className="flex justify-between text-[11px] mb-2 font-bold">
                               <span className="text-zinc-300">Sales_SOP_2026.pdf</span>
                               <span className="text-[#F25C22]">Vectorizing...</span>
                             </div>
                             <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full bg-[#F25C22] w-[75%] rounded-full relative">
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite] -translate-x-full"></div>
                                </div>
                             </div>
                          </div>
                       </div>
                       
                       {/* Node Graph Abstract */}
                       <div className="h-40 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                          {/* Grid Background */}
                          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '16px 16px', opacity: 0.3 }} />
                          
                          {/* Central node */}
                          <div className="w-12 h-12 bg-black border-2 border-[#F25C22] rounded-full shadow-[0_0_15px_rgba(242,92,34,0.8)] flex items-center justify-center z-20">
                            <Network className="w-5 h-5 text-white" />
                          </div>
                          
                          {/* Floating connected dots */}
                          <div className="absolute w-2 h-2 rounded-full bg-emerald-400 top-[20%] left-[20%] shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                          <svg className="absolute inset-0 w-full h-full z-10" pointerEvents="none">
                            <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 2" />
                          </svg>

                          <div className="absolute w-3 h-3 rounded-full bg-blue-400 top-[70%] left-[15%] shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
                          <svg className="absolute inset-0 w-full h-full z-10" pointerEvents="none">
                            <line x1="15%" y1="70%" x2="50%" y2="50%" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 2" />
                          </svg>

                          <div className="absolute w-2 h-2 rounded-full bg-[#F25C22] top-[25%] right-[25%] shadow-[0_0_10px_rgba(242,92,34,0.8)]"></div>
                          <svg className="absolute inset-0 w-full h-full z-10" pointerEvents="none">
                            <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#F25C22" strokeWidth="1.5" />
                          </svg>
                          
                          <div className="absolute w-2.5 h-2.5 rounded-full bg-purple-400 top-[65%] right-[20%] shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>
                          <svg className="absolute inset-0 w-full h-full z-10" pointerEvents="none">
                            <line x1="80%" y1="65%" x2="50%" y2="50%" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 2" />
                          </svg>
                       </div>
                       
                       <div className="bg-emerald-900/20 border border-emerald-800/30 rounded-xl p-3 flex items-center justify-center text-emerald-400 text-xs font-bold gap-2">
                         <ShieldCheck className="w-4 h-4" /> Indexing Successfully Verified
                       </div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}

{/* Icon Component */ }
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a4.42 4.42 0 0 1 0-8.962L8.5 1.936A2 2 0 0 0 9.937.5l1.582-6.135a4.42 4.42 0 0 1 8.962 0L22.063.5a2 2 0 0 0 1.437 1.437l6.135 1.582a4.42 4.42 0 0 1 0 8.962l-6.135 1.582a2 2 0 0 0-1.437 1.437l-1.582 6.135a4.42 4.42 0 0 1-8.962 0z" />
    </svg>
  );
}
