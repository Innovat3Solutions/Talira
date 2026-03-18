"use client";

import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Info,
  User,
  Phone,
  Plus,
  Lock,
  Volume2,
  MessageSquare,
  MoreVertical,
  MicOff
} from "lucide-react";
import Image from "next/image";

export function FeaturesSectionWithBentoGrid() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <span className="bg-zinc-100 text-zinc-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Features</span>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold mt-6 mb-4 tracking-tight text-black">
          Our <span className="text-primary">fully managed</span> AI voice agents<br className="hidden md:block"/>handle your calls
        </h2>
        <p className="text-zinc-500 text-lg max-w-3xl mx-auto font-normal">
          AI voice agents automate routine calls by syncing with live calendars — ideal for<br className="hidden md:block"/> clinics, salons, dealerships, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Simultaneous calls */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-black mb-2">Simultaneous calls</h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8">Automate and optimize the management of outbound calls to increase your teams' efficiency and reach more customers.</p>
          <div className="mt-auto relative w-full flex-1 flex items-center justify-center">
            
            <div className="w-full max-w-[260px] bg-[#FDF8F5] rounded-[1.5rem] border border-[#F5EBE1] p-4 shadow-sm relative overflow-hidden flex flex-col min-h-[220px]">
              <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ChevronLeft className="w-4 h-4 text-zinc-600 -ml-0.5" />
                </div>
                <span className="text-[11px] font-bold text-black tracking-wide">Incoming calls</span>
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                  <Info className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div className="flex flex-col items-center mb-6 relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FCE1D4] to-[#F25C22] p-0.5 mb-3 shadow-[0_4px_12px_rgba(242,92,34,0.3)]">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden border-[3px] border-white">
                    <div className="w-full h-full bg-orange-50 flex items-center justify-center pt-3">
                       <User className="w-12 h-12 text-[#F25C22]" />
                    </div>
                  </div>
                </div>
                <h4 className="text-[13px] font-bold text-black">Demo AI agent</h4>
                <p className="text-[10px] text-[#F25C22] font-semibold mt-0.5">Autocalls representative</p>
              </div>
              
              <div className="relative w-[90%] mx-auto h-11 bg-[#F25C22] rounded-full flex items-center px-1 shadow-md group cursor-pointer mt-auto z-10">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm z-10">
                   <Phone className="w-3.5 h-3.5 text-[#F25C22] fill-current" />
                </div>
                <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold tracking-wide ml-4">Slide to answer</span>
                <ChevronsRight className="w-3.5 h-3.5 text-white/80 absolute right-4 transition-transform group-hover:translate-x-1" />
              </div>
              
              {/* Decorative radial gradients */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl opacity-60 pointer-events-none -mr-10 -mt-10"></div>
            </div>

          </div>
        </div>

        {/* Card 2: Knowledgebase */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-black mb-2">Knowledgebase</h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8">Upload any data for your flow like PDFs, images and even crawl full website contents.</p>
          <div className="mt-auto relative w-full flex-1 flex items-center justify-center">
            
            <div className="w-full max-w-[260px] flex flex-col gap-3">
               <div className="border border-dashed border-[#F5EBE1] bg-[#FDF8F5] rounded-[1.5rem] p-6 flex flex-col items-center justify-center text-center transition-colors hover:bg-orange-50/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] min-h-[160px]">
                  <div className="relative mb-5 w-16 h-12">
                     <div className="w-10 h-10 bg-zinc-800 rounded-lg absolute left-1 top-2 -rotate-6 shadow-sm opacity-60"></div>
                     <div className="w-10 h-10 bg-zinc-700 rounded-lg absolute left-3 top-1 -rotate-3 shadow-sm opacity-80"></div>
                     <div className="w-10 h-10 bg-zinc-900 rounded-lg absolute left-5 top-0 flex items-center justify-center shadow-lg border border-zinc-700">
                        <Plus className="w-4 h-4 text-white" />
                     </div>
                  </div>
                  <p className="text-xs font-bold text-black mb-3">Drag and drop files here</p>
                  <button className="bg-zinc-900 text-white text-[10px] font-semibold px-4 py-1.5 rounded-full hover:bg-black transition-colors">Choose file</button>
               </div>
               
               <div className="bg-white rounded-[1rem] border border-zinc-100 p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-center gap-3">
                  <div className="w-7 h-7 bg-red-50 rounded select-none flex items-center justify-center shrink-0">
                    <span className="text-[8px] font-bold text-red-500 tracking-tighter">PDF</span>
                  </div>
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[10px] font-bold text-black truncate">Internal_procedures.pdf</p>
                      <span className="text-[8px] font-bold text-zinc-500">60%</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-1 mb-1">
                      <div className="bg-[#F25C22] h-1 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-[8px] text-zinc-400 font-semibold tracking-wide">7.6 MB of 12.6 MB</p>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Card 3: Calendar Integration */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-black mb-2">Calendar Integration</h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8">Sync with Google Calendar, Outlook, or any calendar to book appointments in real-time during calls.</p>
          <div className="mt-auto relative w-full flex-1 flex items-center justify-center">

            <div className="w-full max-w-[260px] bg-[#FAF8F5] rounded-[1.5rem] border border-[#F5EBE1] p-3.5 flex flex-col min-h-[220px] shadow-sm">
              <div className="flex items-center justify-between mb-3 px-1">
                <h4 className="text-[11px] font-bold text-black">March 2025</h4>
                <div className="flex gap-1">
                  <div className="w-5 h-5 rounded bg-white flex items-center justify-center shadow-sm">
                    <ChevronLeft className="w-3 h-3 text-zinc-600" />
                  </div>
                  <div className="w-5 h-5 rounded bg-white flex items-center justify-center shadow-sm">
                    <ChevronRight className="w-3 h-3 text-zinc-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#F5EBE1] rounded-[1rem] p-2 mb-3 shadow-sm flex-1">
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <span key={i} className="text-[8px] font-bold text-zinc-400">{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {[...Array(31)].map((_, i) => (
                    <div
                      key={i}
                      className={`text-[9px] font-medium py-1 rounded ${
                        i === 14 ? 'bg-[#F25C22] text-white' :
                        i === 16 || i === 20 ? 'bg-orange-100 text-[#F25C22]' :
                        'text-zinc-600 hover:bg-zinc-50'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 px-1">
                <div className="w-2 h-2 rounded-full bg-[#F25C22]"></div>
                <span className="text-[9px] font-medium text-zinc-600">3 appointments booked today</span>
              </div>
            </div>

          </div>
        </div>

        {/* Card 4: CRM Dashboard (col-span-2) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col overflow-hidden">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold tracking-tight text-black mb-2">Built-in CRM Dashboard</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8">Track all your leads, conversations, and follow-up tasks in one place. Never lose a potential customer again.</p>
          </div>
          <div className="mt-auto relative w-full flex items-end justify-center pt-8">

            <div className="w-full max-w-lg h-[240px] bg-zinc-50 rounded-t-xl overflow-hidden border border-zinc-200 border-b-0 flex flex-col shadow-lg mx-auto translate-y-8 transition-transform">
              <div className="h-10 bg-white border-b border-zinc-200 flex items-center px-4 gap-4 shrink-0">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                <div className="flex gap-2 shrink-0 opacity-50 hidden sm:flex">
                   <ChevronLeft className="w-4 h-4 text-zinc-600" />
                   <ChevronRight className="w-4 h-4 text-zinc-600" />
                </div>
                <div className="flex-1 flex justify-center sm:justify-start lg:justify-center">
                  <div className="bg-zinc-100/80 rounded-md px-3 py-1 text-[10px] font-medium text-black flex items-center gap-2 w-full max-w-[280px] shadow-inner">
                    <Lock className="w-2.5 h-2.5 text-black" /> app.talira.ai/dashboard
                  </div>
                </div>
              </div>
              <div className="flex-1 flex w-full h-full overflow-hidden">
                <div className="w-[60px] sm:w-[90px] bg-zinc-900 h-full flex flex-col p-3 sm:p-4 gap-3 shrink-0">
                   <Image src="/talira_logo.png" alt="Talira Logo" width={80} height={24} className="h-4 sm:h-5 w-auto object-contain object-left mb-2" />
                   <div className="w-full h-1.5 bg-zinc-700 rounded-full shrink-0"></div>
                   <div className="w-3/4 h-1.5 bg-zinc-800 rounded-full shrink-0"></div>
                   <div className="w-full h-1.5 bg-zinc-800 rounded-full shrink-0"></div>
                   <div className="w-2/3 h-1.5 bg-zinc-800 rounded-full shrink-0"></div>
                   <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-auto shrink-0"></div>
                </div>
                <div className="flex-1 bg-white p-3 sm:p-5 flex flex-col gap-3 w-full overflow-hidden">
                   {/* Stats Row */}
                   <div className="flex gap-2 sm:gap-3">
                     <div className="flex-1 bg-orange-50 rounded-lg p-2 sm:p-3 border border-orange-100">
                       <p className="text-[8px] sm:text-[9px] text-zinc-500 font-medium">New Leads</p>
                       <p className="text-sm sm:text-lg font-bold text-[#F25C22]">247</p>
                     </div>
                     <div className="flex-1 bg-green-50 rounded-lg p-2 sm:p-3 border border-green-100">
                       <p className="text-[8px] sm:text-[9px] text-zinc-500 font-medium">Calls Today</p>
                       <p className="text-sm sm:text-lg font-bold text-[#10B981]">89</p>
                     </div>
                     <div className="flex-1 bg-blue-50 rounded-lg p-2 sm:p-3 border border-blue-100">
                       <p className="text-[8px] sm:text-[9px] text-zinc-500 font-medium">Booked</p>
                       <p className="text-sm sm:text-lg font-bold text-blue-600">34</p>
                     </div>
                   </div>
                   {/* Leads Table */}
                   <div className="flex-1 bg-zinc-50 rounded-lg border border-zinc-100 p-2 overflow-hidden">
                     <div className="flex items-center gap-2 pb-2 border-b border-zinc-100 mb-2">
                       <span className="text-[8px] font-bold text-zinc-400 flex-1">LEAD NAME</span>
                       <span className="text-[8px] font-bold text-zinc-400 w-16 text-center hidden sm:block">STATUS</span>
                       <span className="text-[8px] font-bold text-zinc-400 w-12 text-right">ACTION</span>
                     </div>
                     <div className="space-y-1.5">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                           <User className="w-3 h-3 text-blue-600" />
                         </div>
                         <span className="text-[9px] font-medium text-zinc-700 flex-1 truncate">Sarah Johnson</span>
                         <span className="text-[7px] font-bold text-white bg-[#10B981] px-1.5 py-0.5 rounded hidden sm:block">HOT</span>
                         <Phone className="w-3 h-3 text-[#F25C22]" />
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                           <User className="w-3 h-3 text-purple-600" />
                         </div>
                         <span className="text-[9px] font-medium text-zinc-700 flex-1 truncate">Michael Chen</span>
                         <span className="text-[7px] font-bold text-white bg-yellow-500 px-1.5 py-0.5 rounded hidden sm:block">WARM</span>
                         <Phone className="w-3 h-3 text-[#F25C22]" />
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                           <User className="w-3 h-3 text-orange-600" />
                         </div>
                         <span className="text-[9px] font-medium text-zinc-700 flex-1 truncate">Emily Davis</span>
                         <span className="text-[7px] font-bold text-white bg-[#10B981] px-1.5 py-0.5 rounded hidden sm:block">HOT</span>
                         <Phone className="w-3 h-3 text-[#F25C22]" />
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Card 5: Detailed reports */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-black mb-2">Detailed reports</h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8">Observe every detail of your call, like recordings, transcriptions and customised charts.</p>
          <div className="mt-auto relative w-full flex-1 flex items-center justify-center">
            
            <div className="w-full max-w-[280px] bg-[#FAF8F5] p-1.5 rounded-[1.5rem] border border-[#F5EBE1] shadow-sm">
               <div className="bg-white rounded-[1.2rem] shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-zinc-50 p-4">
                  <div className="flex justify-between items-center mb-5">
                     <h4 className="text-[11px] font-bold text-black">Call recording</h4>
                     <div className="w-1.5 h-1.5 rounded-full bg-[#F25C22]"></div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-5">
                     <div className="w-4 h-4 flex items-center justify-center shrink-0">
                        <MoreVertical className="w-3 h-3 text-black fill-current rotate-90 scale-x-75 scale-y-125 translate-x-[2px]" />
                        <MoreVertical className="w-3 h-3 text-black fill-current rotate-90 scale-x-75 scale-y-125 -translate-x-[2px]" />
                     </div>
                     <Volume2 className="w-3 h-3 text-black shrink-0" />
                     <div className="flex-1 flex items-center gap-1.5 mx-1 relative">
                        <div className="absolute -top-4 left-[35%] w-7 py-[2px] bg-[#F25C22] rounded-full flex items-center justify-center transform -translate-x-1/2 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:border-[3px] before:border-transparent before:border-t-[#F25C22]">
                          <span className="text-[7px] text-white font-bold leading-none">01:30</span>
                        </div>
                        <span className="text-[8px] font-bold text-[#F25C22]">4:25</span>
                        <div className="flex-1 h-1 bg-zinc-100 rounded-full relative">
                           <div className="absolute inset-y-0 left-0 w-[40%] bg-[#F25C22] rounded-full"></div>
                        </div>
                        <span className="text-[8px] font-bold text-zinc-400">27:32</span>
                     </div>
                     <button className="bg-zinc-900 text-white text-[8px] font-semibold px-2 py-1.5 rounded-[5px]">Download</button>
                  </div>
                  
                  <div className="flex gap-4 border-b border-zinc-100 mb-4 pb-2 relative">
                     <div className="flex items-center gap-1.5">
                       <div className="w-4 h-4 rounded-full bg-[#F25C22] flex items-center justify-center shadow-sm z-10">
                          <MessageSquare className="w-2.5 h-2.5 text-white fill-current mt-[1px]" />
                       </div>
                       <span className="text-[10px] font-bold text-black pt-0.5">Transcript</span>
                     </div>
                     <MoreVertical className="w-3 h-3 text-zinc-300 ml-auto mr-1" />
                     <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-orange-100 rounded-full">
                       <div className="w-16 h-full bg-[#F25C22] rounded-full"></div>
                     </div>
                  </div>
                  <p className="text-[8px] text-zinc-500 mb-4 font-medium px-1">Dialog transcript between the client and the assistant</p>
                  
                  <div className="flex flex-col gap-3 relative max-w-[200px] mx-auto">
                     <div className="flex justify-center mb-1">
                        <span className="bg-white border border-zinc-100 text-zinc-400 text-[7px] font-bold px-3 py-0.5 rounded-full shadow-sm">Today</span>
                     </div>
                     <div className="flex items-end gap-1.5 self-end mt-1">
                        <div className="bg-[#10B981] h-1.5 rounded-full w-14 mb-1 border border-[#0da371]"></div>
                        <div className="flex items-center gap-1.5 bg-white pl-1 pb-1">
                           <span className="text-[8px] font-bold text-black tracking-tight" style={{wordSpacing: '-0.1em'}}>AI Assistant</span>
                           <span className="text-[7px] text-zinc-400 font-bold ml-1">00:00</span>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-yellow-100 relative shadow-sm border border-zinc-200 overflow-hidden">
                           <User className="w-3 h-3 text-yellow-600 absolute top-[2px] left-[2px] opacity-70" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Card 6: Human transfers */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-black mb-2">Human transfers</h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8">Upload any data for your flow like PDFs, images and even crawl full website contents.</p>
          <div className="mt-auto relative w-full flex-1 flex items-center justify-center">
            
            <div className="w-full max-w-[240px] bg-[#FAF8F5] rounded-[1.5rem] border border-[#F5EBE1] p-3 shadow-sm pt-4">
               <div className="flex gap-2 mb-5 px-1">
                  <div className="w-5 h-5 rounded-full bg-zinc-200 mt-0.5 shrink-0 overflow-hidden relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-zinc-300">
                     <User className="w-4 h-4 text-zinc-400 absolute -bottom-0.5 left-[1px]" />
                  </div>
                  <div>
                     <p className="text-[9px] font-bold text-black mb-1.5 flex items-center gap-1 border-b border-transparent">Customer</p>
                     <div className="bg-[#10B981] text-white text-[10px] font-semibold py-1.5 px-3 rounded-lg rounded-tl-sm shadow-[0_2px_4px_rgba(16,185,129,0.2)]">
                        I want to speak with a consultant
                     </div>
                  </div>
               </div>
               
               <div className="bg-white rounded-2xl p-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-zinc-50">
                  <p className="text-[10px] font-bold text-black mb-3 px-1">My transfers</p>
                  <div className="space-y-2.5">
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center bg-white border border-zinc-100 shadow-sm relative overflow-hidden">
                           <div className="w-2.5 h-[1.5px] bg-[#E02633] absolute top-1/2 -translate-y-1/2"></div>
                           <div className="h-2.5 w-[1.5px] bg-[#E02633] absolute left-1/2 -translate-x-1/2"></div>
                        </div>
                        <div className="flex-1 h-3 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-md border border-zinc-50"></div>
                        <div className="w-8 h-3 bg-zinc-100 rounded-md"></div>
                     </div>
                     
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center bg-white border border-zinc-100 shadow-sm relative overflow-hidden">
                           <div className="w-2.5 h-[1.5px] bg-[#E02633] absolute top-1/2 -translate-y-1/2"></div>
                           <div className="h-2.5 w-[1.5px] bg-[#E02633] absolute left-1/2 -translate-x-1/2"></div>
                        </div>
                        <div className="flex-1 h-3 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-md border border-zinc-50 w-[70%]"></div>
                        <div className="w-0 flex-1"></div>
                     </div>
                     
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center bg-white border border-zinc-100 shadow-sm relative overflow-hidden">
                           <div className="w-2.5 h-[1.5px] bg-[#E02633] absolute top-1/2 -translate-y-1/2"></div>
                           <div className="h-2.5 w-[1.5px] bg-[#E02633] absolute left-1/2 -translate-x-1/2"></div>
                        </div>
                        <div className="flex-1 h-3 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-md border border-zinc-50"></div>
                        <div className="w-6 h-3 bg-zinc-100 rounded-md"></div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Card 7: Focus on what matters */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-black mb-2">Focus on what matters</h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8">Let AI handle repetitive tasks like phone calls so you and your team can focus on the most important tasks.</p>
          <div className="mt-auto relative w-full flex-1 flex items-center justify-center h-full min-h-[180px]">
            
            <div className="w-full max-w-[260px] bg-[#FAF8F5] p-2 rounded-[2rem] border border-[#F5EBE1] shadow-sm transform transition-transform hover:scale-105 duration-500">
                <div className="bg-white rounded-3xl p-4 shadow-[0_2px_16px_rgba(0,0,0,0.02)] border border-zinc-100 relative">
                  
                  <div className="flex items-center justify-between mb-5 bg-[#FAF8F5] p-[3px] rounded-full border border-zinc-100/50">
                     <div className="bg-white rounded-full px-3 py-1 shadow-sm text-[9px] font-bold text-black w-1/2 text-center">Incoming Calls</div>
                     <div className="text-[8px] font-bold text-zinc-400 px-3 py-1 w-1/2 text-center tracking-wide">Important only</div>
                  </div>
                  
                  <div className="flex flex-col items-center pb-2 relative z-10">
                     <div className="w-12 h-12 rounded-full bg-blue-50 overflow-hidden mb-2 shadow-inner border-[2px] border-white relative z-10">
                       {/* Placeholder avatar */}
                       <div className="w-full h-full flex flex-col justify-end items-center bg-gradient-to-b from-blue-100 to-purple-100 opacity-90">
                          <User className="w-8 h-8 text-black opacity-80 translate-y-2" />
                       </div>
                     </div>
                     <h4 className="font-bold text-[12px] text-black tracking-tight mb-[2px]">Sarah wilson</h4>
                     <p className="text-[9px] text-zinc-400 font-bold tracking-wide">Calling</p>
                     
                     <div className="flex items-center gap-4 mt-5 mb-1 relative z-10">
                        <button className="w-9 h-9 rounded-full bg-[#10B981] shadow-[0_4px_12px_rgba(16,185,129,0.4)] flex items-center justify-center hover:scale-110 transition-transform hover:bg-[#0da371]">
                           <Phone className="w-3.5 h-3.5 text-white fill-current" />
                        </button>
                        <button className="w-9 h-9 rounded-full bg-[#E02633] shadow-[0_4px_12px_rgba(224,38,51,0.4)] flex items-center justify-center hover:scale-110 transition-transform hover:bg-[#c41e28]">
                           <Phone className="w-3.5 h-3.5 text-white fill-current transform rotate-[135deg]" />
                        </button>
                     </div>
                  </div>
                  
                  {/* Decorator blurs */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-50/50 rounded-full blur-xl z-0"></div>
                </div>
            </div>

          </div>
        </div>

        {/* Card 8: Outbound campaigns */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col overflow-hidden relative">
          <h3 className="text-xl font-semibold tracking-tight text-black mb-2 relative z-10">Outbound campaigns</h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8 relative z-10">Import your leads from files or automate direct calling from tools like Hubspot or forms.</p>
          <div className="mt-auto relative w-full flex-1 flex items-end justify-center pt-10">
            
            <div className="w-[160px] h-[300px] bg-black rounded-t-[2rem] p-1.5 shadow-xl relative translate-y-[20px] transition-transform duration-500 group-hover:translate-y-[10px] mx-auto z-10">
               {/* Screen border styling */}
               <div className="w-full h-full rounded-t-[1.75rem] bg-gradient-to-br from-[#E02633] via-[#F25C22] to-[#FFB703] overflow-hidden relative flex flex-col items-center pt-6 pb-4">
                  
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-4 bg-black rounded-b-[0.7rem] w-20 mx-auto z-30"></div>
                  
                  <div className="relative z-20 flex flex-col items-center mt-6">
                     <p className="text-[7.5px] font-bold text-white/90 mb-0.5 tracking-wider">Autocalls AI - 00:01</p>
                     <h4 className="text-[12px] font-bold text-white tracking-wide">AI Voice Agent</h4>
                  </div>
                  
                  {/* Abstract soundwave lines background */}
                  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay flex flex-col justify-center gap-1.5 px-3">
                     <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-6 transform -rotate-12 scale-150 origin-bottom">
                       <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="white" strokeWidth="2.5" />
                     </svg>
                     <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-4 transform -rotate-6 scale-125">
                       <path d="M0,10 Q25,5 50,10 T100,10" fill="none" stroke="white" strokeWidth="2" />
                     </svg>
                     <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-8 transform rotate-6 scale-150 origin-top">
                       <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="white" strokeWidth="3" />
                     </svg>
                  </div>
                  
                  {/* Gradient shadow to bottom overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
                  
                  {/* Action Controls */}
                  <div className="mt-auto relative z-20 flex justify-center items-center gap-2.5 px-3 w-full pb-2">
                     <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shrink-0">
                       <Volume2 className="w-3.5 h-3.5 fill-current opacity-90" />
                     </div>
                     <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shrink-0">
                       <MicOff className="w-3.5 h-3.5 opacity-90" />
                     </div>
                     <div className="w-8 h-8 rounded-full bg-[#E02633] flex items-center justify-center text-white shadow-xl shadow-red-900/50 shrink-0 border border-white/10">
                       <Phone className="w-3.5 h-3.5 fill-current transform rotate-[135deg]" />
                     </div>
                  </div>
               </div>
            </div>

            {/* A subtle shadow base to ground the iPhone mockup */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-12 bg-orange-100/30 rounded-full blur-2xl z-0 pointer-events-none translate-y-6"></div>

          </div>
        </div>

      </div>
    </div>
  );
}
