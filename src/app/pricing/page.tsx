"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { InteractiveHeroForm } from "@/components/ui/interactive-hero-form";
import { BackgroundEffects, MeshGradient, GradientOrb } from "@/components/ui/background-effects";
import { Check, X, HelpCircle, Zap, ShieldCheck, Headphones, TrendingUp, DollarSign, ArrowRight, ChevronDown } from "lucide-react";

const pricingTiers = [
  {
    name: "Discover AI",
    price: "$0",
    period: "",
    description: "One-time free trial limited to a 5-minute live conversation using your business information as the knowledge base.",
    setupFee: "Free Trial",
    features: [
      "Custom Voice Agent Generation",
      "Interactive Sandbox Demo",
      "Basic Conversational Mapping",
      "No Commitment Required",
    ],
    notIncluded: [
      "CRM Integration",
      "Calendar Booking",
      "Live Deployment",
    ],
    buttonText: "Start for Free",
    popular: false,
  },
  {
    name: "Growth Partner",
    price: "$497",
    period: "/mo",
    description: "Single agent processing calls directly into your CRM, calendar, and human pipelines.",
    setupFee: "$1,500 One-Time Setup",
    features: [
      "1 Dedicated Voice Agent",
      "Native CRM Data Sync",
      "Live Calendar Booking",
      "RAG Knowledge Base (Your Business Info)",
      "Live Call Handoff to Staff",
    ],
    notIncluded: [
      "Multi-Agent Roles & Handoffs",
      "Custom Multi-Scenario Workflows",
    ],
    buttonText: "Deploy Agent",
    popular: true,
  },
  {
    name: "Innovation",
    price: "Custom",
    period: " Pricing",
    description: "Advanced orchestration with multiple agents, distinct roles, and complex handoffs.",
    setupFee: "White-Glove Implementation",
    features: [
      "Multiple AI Agents & Roles",
      "Complex Agent-to-Agent Handoffs",
      "Dynamic Inter-Pipeline Categorization",
      "Custom Voice Scenarios & Logic",
      "Priority Sub-200ms Latency Routing",
      "24/7 Slack Channel Support",
    ],
    notIncluded: [],
    buttonText: "Get in Contact With Us",
    popular: false,
  }
];

const faqs = [
  {
    question: "How does the Voice AI Pricing work for South Florida businesses?",
    answer: "Our pricing is broken down into a flat monthly SaaS fee to maintain the server infrastructure, LLM costs, and telecom routing, plus a one-time setup fee. The setup fee covers our engineering team building a custom-tailored logical flow integrating into your specific business CRM."
  },
  {
    question: "Do I have to pay per minute or per call?",
    answer: "Our tiers include generous minute allocations designed to cover 95% of businesses. If you exceed the tier limit, overages are billed at a flat, transparent per-minute rate. You will never be surprised by your bill."
  },
  {
    question: "Which CRMs do you natively integrate with?",
    answer: "We offer native, real-time data integrations for Salesforce, GoHighLevel (GHL), HubSpot, and Zoho. If you use a custom backend, our Growth and Enterprise tiers include custom webhook pipelines to connect to literally any system you use."
  },
  {
    question: "Can the AI Agent actually book appointments on my calendar?",
    answer: "Yes. The AI connects directly to your calendar (Google, Outlook, Calendly, etc.), checks real-time availability during the conversation, and books the appointment instantly while on the phone with the prospect."
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-zinc-900 overflow-x-hidden font-sans relative">
      {/* Unified Top Background */}
      <div className="absolute top-0 left-0 right-0 w-full h-[1200px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-transparent to-transparent opacity-60" />
        <MeshGradient intensity="light" />
        <GradientOrb color="orange" size="xl" blur="strong" className="-top-10 right-0 opacity-20" />
        <GradientOrb color="orange" size="lg" blur="strong" className="top-[600px] -left-32 opacity-15" />
        {/* Smooth fade out to main bg */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#FDFDFD] to-transparent z-10" />
      </div>

      {/* Navigation */}
      <div className="relative z-50">
        <SiteNavbar />
      </div>

      <main className="flex-1 pt-16 relative z-10">
        
        {/* ================= HERO ================= */}
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 flex flex-col items-center justify-center text-center px-4 w-full overflow-visible">
          
          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-[11px] font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-sm">
              <DollarSign className="w-3.5 h-3.5 mr-1" /> Transparent Economics
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-6 leading-[1.05]">
              AI Voice Automation Pricing <br className="hidden md:block"/>
              <span className="text-[#F25C22]">Built for Scale.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Eliminate payroll bloat, sick days, and missed calls. Invest in an autonomous workforce that delivers 10x the output at a fraction of the cost.
            </p>
          </div>
        </section>

        {/* ================= PRICING TIERS ================= */}
        <section className="py-12 -mt-20 relative z-20 px-4">
           <div className="container mx-auto max-w-6xl">
              <div className="flex overflow-x-auto pb-12 -mx-4 px-4 snap-x snap-mandatory md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                 {pricingTiers.map((tier, idx) => (
                    <div 
                      key={idx} 
                      className={`relative bg-white rounded-3xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 group shrink-0 w-[85vw] sm:w-[400px] md:w-auto snap-center
                        ${tier.popular 
                          ? 'border-[2px] border-[#F25C22] shadow-[0_20px_50px_rgba(242,92,34,0.15)] scale-100 md:scale-105 z-10' 
                          : 'border border-zinc-200 shadow-xl'
                        }
                      `}
                    >
                       {tier.popular && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F25C22] to-orange-400 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                             Most Selected
                          </div>
                       )}
                       
                       <h3 className="text-2xl font-bold text-zinc-900 mb-2">{tier.name}</h3>
                       <p className="text-sm text-zinc-500 mb-6 h-10">{tier.description}</p>
                       
                       <div className="mb-6 pb-6 border-b border-zinc-100">
                          <div className="flex items-end gap-1 mb-1">
                             <span className="text-4xl font-black tracking-tighter text-zinc-900">{tier.price}</span>
                             <span className="text-zinc-500 mb-1">{tier.period}</span>
                          </div>
                          <span className="text-[11px] font-bold text-[#F25C22] bg-orange-50 px-2 py-1 rounded-md">{tier.setupFee}</span>
                       </div>
                       
                       <div className="flex-1 space-y-4 mb-8">
                          <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">What's Included</p>
                          <ul className="space-y-3">
                             {tier.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3">
                                   <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                                      <Check className="w-3 h-3 text-emerald-600" />
                                   </div>
                                   <span className="text-sm text-zinc-600 leading-tight">{feature}</span>
                                </li>
                             ))}
                          </ul>
                          
                          {tier.notIncluded.length > 0 && (
                             <>
                                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 pt-4 mt-4 border-t border-zinc-100">Not Included</p>
                                <ul className="space-y-3">
                                   {tier.notIncluded.map((feature, fnIdx) => (
                                      <li key={fnIdx} className="flex items-start gap-3 opacity-60">
                                         <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <X className="w-3 h-3 text-zinc-400" />
                                         </div>
                                         <span className="text-sm text-zinc-500 leading-tight">{feature}</span>
                                      </li>
                                   ))}
                                </ul>
                             </>
                          )}
                       </div>
                       
                       <div className="w-full mt-auto">
                         <InteractiveHeroForm 
                           modalMode={true} 
                           accentColor={tier.name === "Growth Partner" ? "orange" : "black"}
                           type={tier.name === "Growth Partner" ? "deploy" : "contact"}
                           text={tier.buttonText}
                           title={
                             tier.name === "Discover AI" ? "Start your Free Trial" :
                             tier.name === "Growth Partner" ? "Deploy Your Agent" : "Engineering Consultation"
                           }
                           subtitle={
                             tier.name === "Discover AI" ? "Tell us about your business and we'll set up your 5-minute sandbox." :
                             tier.name === "Growth Partner" ? "Configure your dedicated voice agent payload." : "Drop your specifications below and our architects will reach out."
                           }
                         />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ================= ROI VISUALIZATION ================= */}
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
           <BackgroundEffects variant="section" />
           <div className="container mx-auto max-w-5xl relative z-10 px-4">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">The True Cost of a Call</h2>
                 <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Compare the monthly operational efficiency of deploying a Talira Voice Agent against hiring a traditional local SDR.</p>
              </div>
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
                 <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative z-10">
                    
                    {/* The Human Cost */}
                    <div className="flex-1 flex flex-col justify-end">
                       <h3 className="text-xl font-bold mb-6 text-zinc-300">Human SDR (Miami Avg.)</h3>
                       <div className="space-y-4">
                          <div className="flex justify-between text-sm text-zinc-500">
                             <span>Base Salary / Mo</span>
                             <span>$4,000</span>
                          </div>
                          <div className="flex justify-between text-sm text-zinc-500">
                             <span>Taxes & Benefits</span>
                             <span>$1,200</span>
                          </div>
                          <div className="flex justify-between text-sm text-zinc-500">
                             <span>Software/CRM Seats</span>
                             <span>$200</span>
                          </div>
                          <div className="flex justify-between text-sm text-zinc-500">
                             <span>Availability</span>
                             <span className="text-red-400 font-bold text-xs bg-red-950/30 px-2 py-0.5 rounded">40 Hrs/Wk</span>
                          </div>
                          <div className="w-full h-px bg-zinc-800 my-4" />
                          <div className="flex justify-between items-end">
                             <span className="text-sm font-bold text-zinc-300">Avg. Total Cost</span>
                             <span className="text-3xl font-black text-zinc-400">$5,400<span className="text-sm font-normal text-zinc-600">/mo</span></span>
                          </div>
                       </div>
                       
                       {/* Bar visual */}
                       <div className="w-full h-8 bg-zinc-800 rounded-full mt-6 overflow-hidden">
                          <div className="h-full bg-zinc-600 w-full rounded-full"></div>
                       </div>
                    </div>
                    
                    {/* The AI Cost */}
                    <div className="flex-1 flex flex-col justify-end relative">
                       {/* Glow effect */}
                       <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F25C22]/10 blur-[80px] pointer-events-none" />
                       
                       <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                         Talira Voice Agent <Zap className="w-4 h-4 text-[#F25C22]" />
                       </h3>
                       <div className="space-y-4">
                          <div className="flex justify-between text-sm text-zinc-400">
                             <span>SaaS Subscription</span>
                             <span className="text-white">$497</span>
                          </div>
                          <div className="flex justify-between text-sm text-zinc-400">
                             <span>Taxes & Benefits</span>
                             <span className="text-emerald-400">$0</span>
                          </div>
                          <div className="flex justify-between text-sm text-zinc-400">
                             <span>Software Integration</span>
                             <span className="text-emerald-400">Included</span>
                          </div>
                          <div className="flex justify-between text-sm text-zinc-400">
                             <span>Availability</span>
                             <span className="text-emerald-400 font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/50">24/7/365</span>
                          </div>
                          <div className="w-full h-px bg-zinc-700 my-4" />
                          <div className="flex justify-between items-end">
                             <span className="text-sm font-bold text-white">Avg. Total Cost</span>
                             <span className="text-4xl font-black text-[#F25C22]">$497<span className="text-sm font-normal text-orange-400/50">/mo</span></span>
                          </div>
                       </div>
                       
                       {/* Bar visual */}
                       <div className="w-full h-8 bg-zinc-800 rounded-full mt-6 overflow-hidden relative">
                          <div className="h-full bg-gradient-to-r from-[#F25C22] to-orange-400 w-[18%] rounded-full shadow-[0_0_15px_rgba(242,92,34,0.5)]"></div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Savings Badge */}
                 <div className="absolute top-0 right-8 bg-[#F25C22] text-white px-6 py-3 rounded-b-2xl font-black text-xs md:text-sm tracking-widest uppercase shadow-[0_10px_30px_rgba(242,92,34,0.3)] border-b-2 border-x border-[#ffb347]/30 transform translate-y-0">
                    Save $58,800+ Annually
                 </div>
              </div>
           </div>
        </section>

        {/* ================= SEO FAQ SECTION ================= */}
        <section className="py-24 px-4 bg-white relative">
           <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Frequently Asked Questions</h2>
                 <p className="text-zinc-500">Everything you need to know about our pricing and implementation process.</p>
              </div>
              
              <div className="space-y-4">
                 {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:border-orange-200
                        ${openFaq === index ? 'bg-[#FDF8F5] border-orange-200 shadow-md' : 'bg-white border-zinc-200'}
                      `}
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                       <div className="flex justify-between items-center p-6">
                          <h3 className={`font-bold pr-8 ${openFaq === index ? 'text-[#F25C22]' : 'text-zinc-900'}`}>
                            {faq.question}
                          </h3>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaq === index ? 'bg-[#F25C22] text-white rotate-180' : 'bg-zinc-100 text-zinc-500'}`}>
                             <ChevronDown className="w-4 h-4" />
                          </div>
                       </div>
                       
                       <div 
                         className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}
                       >
                         <p className="text-zinc-600 leading-relaxed pt-2 border-t border-orange-100/50">
                           {faq.answer}
                         </p>
                       </div>
                    </div>
                 ))}
              </div>
              
              <div className="mt-12 text-center">
                 <p className="text-sm font-medium text-zinc-500 mb-4">Still have questions?</p>
                 <a href="mailto:contact@innovat3solutions.com" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 px-6 py-3 rounded-full transition-colors">
                    Talk to our engineering team <ArrowRight className="w-4 h-4" />
                 </a>
              </div>
           </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
