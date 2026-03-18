"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function IndustryFaqAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const half = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, half);
  const rightCol = faqs.slice(half);

  const renderFaq = (faq: { question: string; answer: string }, index: number) => (
    <div 
      key={index} 
      className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:border-orange-200
        ${openFaq === index ? 'bg-[#FDF8F5] border-orange-200 shadow-md' : 'bg-white border-zinc-200'}
      `}
      onClick={() => setOpenFaq(openFaq === index ? null : index)}
    >
      <div className="flex justify-between items-center p-6 gap-4">
          <h3 className={`font-bold ${openFaq === index ? 'text-[#F25C22]' : 'text-zinc-900'}`}>
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
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start">
      <div className="space-y-4 md:space-y-6">
        {leftCol.map((faq, idx) => renderFaq(faq, idx))}
      </div>
      <div className="space-y-4 md:space-y-6">
        {rightCol.map((faq, idx) => renderFaq(faq, idx + leftCol.length))}
      </div>
    </div>
  );
}
