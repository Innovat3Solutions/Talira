import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { MeshGradient, GradientOrb } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { IndustryWorkflowGraphic } from "@/components/ui/industry-workflow-graphic";
import { FAQContactModal } from "@/components/ui/faq-contact-modal";
import { CheckCircle2, XCircle, ArrowRight, Activity, Users, ShieldAlert, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';
import { IndustryFaqAccordion } from "@/components/blocks/industry-faq-accordion";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) return {};
  
  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
  };
}

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
    slug,
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries[slug];

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col font-sans">
      <SiteNavbar />
      <main className="flex-1">
        
        {/* ================= HERO ================= */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center px-4 w-full bg-zinc-950 text-white overflow-hidden">
          <MeshGradient intensity="strong" />
          <GradientOrb color="orange" size="xl" blur="strong" className="absolute -top-20 right-1/4 opacity-40 animate-pulse" />
          <GradientOrb color="peach" size="lg" blur="strong" className="absolute bottom-10 left-1/4 opacity-30" />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center justify-center px-5 py-2 mb-8 text-[11px] md:text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white/5 border border-white/10 rounded-full shadow-sm">
              <Icon className="w-3.5 h-3.5 mr-2" /> {industry.name} AI Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.05]">
              {industry.heroHeadline.prefix}
              <span className="text-[#F25C22]">{industry.heroHeadline.highlight}</span>
              {industry.heroHeadline.suffix}
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              {industry.heroSubheadline}
            </p>

            {/* High Impact Stats Ribbon */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
               {industry.stats.map((stat, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-black text-white">
                      {stat.value}<span className="text-[#F25C22]">{stat.suffix}</span>
                    </span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold mt-2">{stat.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* ================= WORKFLOW GRAPHIC ================= */}
        <section className="py-20 bg-background px-4">
           <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight mb-4">Autonomous Architecture</h2>
              <p className="text-zinc-600 text-lg">See how the Talira AI Engine acts as your universal connector.</p>
           </div>
           <IndustryWorkflowGraphic slug={industry.slug} />
        </section>

        {/* ================= SCENARIOS (1 Agent vs 2 Agents) ================= */}
        <section className="py-24 bg-zinc-50 px-4">
           <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-4">Orchestration Scenarios</h2>
                 <p className="text-zinc-600 max-w-2xl mx-auto text-lg">See exactly how Talira voice agents integrate into your existing {industry.name} workflow.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* 1 Agent scenario */}
                 <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500">
                      <Users className="w-24 h-24" />
                    </div>
                    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-bold text-zinc-800 uppercase tracking-widest bg-zinc-100 rounded-full">
                       Single Agent Architecture
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-950 mb-4">{industry.scenarios.oneAgent.title}</h3>
                    <p className="text-zinc-600 leading-relaxed text-lg">{industry.scenarios.oneAgent.description}</p>
                 </div>

                 {/* 2 Agent scenario */}
                 <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden relative group text-white hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F25C22] to-orange-400" />
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                      <Activity className="w-24 h-24 text-[#F25C22]" />
                    </div>
                    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-bold text-white uppercase tracking-widest bg-[#F25C22]/20 border border-[#F25C22]/30 rounded-full">
                       Dual Agent Architecture
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{industry.scenarios.twoAgents.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">{industry.scenarios.twoAgents.description}</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ================= HANDOFF & CAPABILITIES MATRIX ================= */}
        <section className="py-24 bg-white px-4">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-8">
                 <div>
                    <div className="inline-flex items-center gap-2 text-[#F25C22] font-bold tracking-widest uppercase text-xs mb-4">
                       <ShieldAlert className="w-4 h-4" /> Live Intercepts
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-6">{industry.handoff.title}</h2>
                    <p className="text-lg text-zinc-600 leading-relaxed mb-8">{industry.handoff.description}</p>
                 </div>

                 <div className="space-y-6">
                    {industry.capabilities.map((cap, i) => (
                       <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 shadow-sm border border-orange-100">
                             <CheckCircle2 className="w-5 h-5 text-[#F25C22]" />
                          </div>
                          <div>
                             <h4 className="font-bold text-zinc-900 mb-1">{cap.title}</h4>
                             <p className="text-sm text-zinc-600 leading-relaxed">{cap.description}</p>
                          </div>
                       </div>
                    ))}
                 </div>
                 
                 <div className="pt-4">
                    <Link href="/pricing" className="inline-flex items-center font-bold text-[#F25C22] hover:text-orange-600 transition-colors group">
                       Deploy {industry.name} AI <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>

              {/* PROS & CONS VISUAL */}
              <div className="lg:col-span-7">
                 <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-10 border border-zinc-200 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-200/50 blur-[80px] rounded-full pointer-events-none" />
                    <h3 className="text-2xl font-bold text-zinc-950 mb-8 border-b border-zinc-200 pb-4 relative z-10">Automation Validity Check</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                       <div>
                          <h4 className="text-xs md:text-sm font-black uppercase text-green-600 tracking-widest mb-6 bg-green-100 inline-block px-3 py-1 rounded">Advantages</h4>
                          <ul className="space-y-4 text-sm font-medium text-zinc-700">
                             {industry.prosAndCons.pros.map((pro, i) => (
                               <li key={i} className="flex gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                  <span className="leading-snug">{pro}</span>
                               </li>
                             ))}
                          </ul>
                       </div>
                       
                       <div>
                          <h4 className="text-xs md:text-sm font-black uppercase text-red-500 tracking-widest mb-6 bg-red-100 inline-block px-3 py-1 rounded">Limitations</h4>
                          <ul className="space-y-4 text-sm font-medium text-zinc-700">
                             {industry.prosAndCons.cons.map((con, i) => (
                               <li key={i} className="flex gap-3">
                                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                  <span className="leading-snug">{con}</span>
                               </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </section>

        {/* ================= FAQs ================= */}
        <section className="py-24 bg-white px-4 border-t border-zinc-100 relative z-20">
           <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-4">Frequently Asked Questions</h2>
                 <p className="text-zinc-600 text-lg">Common inquiries regarding our {industry.name} AI solutions.</p>
              </div>

              <IndustryFaqAccordion faqs={industry.faqs || []} />

              {/* Interactive Contact Modal */}
              <FAQContactModal industryName={industry.name} />
           </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
