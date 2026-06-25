"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Blocks,
  Plug,
  PhoneCall,
  Globe,
  Sparkles,
  ChevronDown,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  FAQ data — grouped to match the site's solution pages ("tabs").    */
/* ------------------------------------------------------------------ */

type Category = {
  key: string;
  label: string;
  icon: React.ElementType;
};

const categories: Category[] = [
  { key: "all", label: "All Questions", icon: Sparkles },
  { key: "platform", label: "No-Code Platform", icon: Blocks },
  { key: "integrations", label: "Integrations", icon: Plug },
  { key: "phone", label: "Phone Numbers", icon: PhoneCall },
  { key: "languages", label: "Languages", icon: Globe },
];

type Faq = {
  category: string;
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  /* ---------- No-Code Platform ---------- */
  {
    category: "platform",
    question: "What exactly is Talira?",
    answer:
      "Talira is a done-for-you AI voice agent that answers and makes calls for your business 24/7. It books appointments, follows up on leads, collects reviews, answers FAQs, and routes callers — all in a natural, human-parity conversation. Our South Florida team designs, builds, and maintains the whole thing for you.",
  },
  {
    category: "platform",
    question: "Do I need to write any code or build the agent myself?",
    answer:
      "No. There's no code, no drag-and-drop builder, and no prompt engineering on your end. We map your workflow on a discovery call, assemble your knowledge base, wire in your tools, and launch it. You describe the workflow — we build the agent.",
  },
  {
    category: "platform",
    question: "Can the AI actually take actions, or does it just talk?",
    answer:
      "It takes real actions. On a call it can check live availability and book confirmed appointments, qualify and route leads, update your CRM, send confirmations by text and email, and transfer to a human with full context when needed.",
  },
  {
    category: "platform",
    question: "What happens after the call ends?",
    answer:
      "Most of the value happens after someone hangs up. Talira's workflow engine logs every call with a full transcript and outcome, then fires the right next step automatically — the booking lands on your calendar, the CRM updates, the follow-up goes out, and the review request sends at the right moment.",
  },
  {
    category: "platform",
    question: "How long does it take to get my agent live?",
    answer:
      "Most agents are up and running fast. After a short discovery call we build and integrate everything for you, take it live, then monitor real calls and keep refining the workflow over time.",
  },

  /* ---------- Integrations ---------- */
  {
    category: "integrations",
    question: "Which tools does Talira integrate with?",
    answer:
      "Calendars, CRMs, phone systems, knowledge bases, and review platforms — including GoHighLevel, Google Calendar, and Calendly. The agent plugs straight into the software you already run so it can take action, not just talk.",
  },
  {
    category: "integrations",
    question: "Can it sync my leads and update my CRM in real time?",
    answer:
      "Yes. Every call is logged with notes, fields are updated, and deals move through your pipeline automatically — no manual data entry. Lead information is captured and synced the moment it's collected on the call.",
  },
  {
    category: "integrations",
    question: "Can it book appointments live during the call?",
    answer:
      "Absolutely. The agent checks real-time availability and books confirmed slots right on the call, synced to Google Calendar, Calendly, or your CRM — with reminders and confirmations sent automatically to cut no-shows.",
  },
  {
    category: "integrations",
    question: "What if the tool I use isn't on your list?",
    answer:
      "If it has an API, we can almost certainly plug it in. Tell us what you run and we'll confirm during your discovery call.",
  },

  /* ---------- Phone Numbers ---------- */
  {
    category: "phone",
    question: "Can I get a new number, or use my existing one?",
    answer:
      "Both. We can provision a fresh local, toll-free, or international number, or connect the number you already use through forwarding or porting — so callers reach the same line they always have.",
  },
  {
    category: "phone",
    question: "Does the agent really answer 24/7?",
    answer:
      "Yes. Your AI agent picks up on the first ring, day or night, weekends and holidays included — so you never miss another lead to a missed call or an after-hours inquiry.",
  },
  {
    category: "phone",
    question: "Can it transfer a call to a real person?",
    answer:
      "It knows when a call needs a human and hands off in seconds with a warm transfer, passing along the full context of the conversation. You can set fallback rules and after-hours overflow handling too.",
  },
  {
    category: "phone",
    question: "Do you support SMS, voicemail, and call recording?",
    answer:
      "Yes — two-way SMS on the same number the agent answers, voicemail-to-text delivered to your inbox or CRM, and consent-aware recording with instant, searchable transcripts of every conversation.",
  },

  /* ---------- Languages ---------- */
  {
    category: "languages",
    question: "How many languages do you support?",
    answer:
      "Over 100 languages with native-sounding voices and regional variants — from English, Spanish, and French to Mandarin, Arabic, Hindi, and many more. You can service diverse markets without hiring specialized bilingual staff.",
  },
  {
    category: "languages",
    question: "Can one agent handle more than one language on the same line?",
    answer:
      "Yes. The agent can detect the caller's language and respond naturally, so a single number can serve a multilingual customer base.",
  },
  {
    category: "languages",
    question: "Do the voices actually sound natural?",
    answer:
      "They do. Voices use native accents and regional variants and operate with sub-second latency, so conversations feel fluid and human — not robotic.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function FaqExplorer() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const visibleFaqs = useMemo(() => {
    if (activeCategory === "all") return faqs;
    return faqs.filter((f) => f.category === activeCategory);
  }, [activeCategory]);

  const handleCategory = (key: string) => {
    setActiveCategory(key);
    setOpenIndex(0);
  };

  return (
    <section className="relative bg-[#FDFDFD] py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ===================== LEFT: FAQ ===================== */}
          <div className="lg:col-span-7">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => handleCategory(cat.key)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all ${
                      isActive
                        ? "bg-[#F25C22] text-white shadow-[0_8px_20px_rgba(242,92,34,0.3)]"
                        : "bg-white text-zinc-600 border border-zinc-200 hover:border-[#F25C22]/40 hover:text-zinc-900"
                    }`}
                  >
                    <cat.icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              {visibleFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={`${faq.category}-${faq.question}`}
                    className={`rounded-2xl border bg-white transition-colors ${
                      isOpen ? "border-[#F25C22]/40 shadow-[0_10px_30px_rgba(0,0,0,0.04)]" : "border-zinc-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-5 md:px-6"
                    >
                      <span className="text-base md:text-lg font-bold text-zinc-900 tracking-tight">
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isOpen ? "bg-[#F25C22] text-white rotate-180" : "bg-zinc-100 text-zinc-500"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 md:px-6 pb-6 text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===================== RIGHT: ABOUT + CONTACT + FORM ===================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-zinc-950 text-white rounded-[2rem] border border-zinc-800 shadow-[0_30px_80px_rgba(0,0,0,0.25)] overflow-hidden relative">
              {/* glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F25C22]/20 blur-[90px] rounded-full pointer-events-none" />

              <div className="relative z-10 p-7 md:p-8">
                {/* About */}
                <Image
                  src="/talira_logo.png"
                  alt="Talira Logo"
                  width={140}
                  height={40}
                  className="w-[120px] h-auto mb-5 brightness-0 invert"
                />
                <h3 className="text-xl font-bold tracking-tight mb-2">Talk to a real person</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  Talira is built and run by{" "}
                  <a
                    href="https://www.innovat3solutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F25C22] font-semibold hover:underline"
                  >
                    Innovat3 Solutions
                  </a>
                  , a South Florida AI &amp; automation agency. If your question isn&apos;t answered above,
                  send it over — a human from our team will get right back to you.
                </p>

                {/* Contact rows */}
                <div className="space-y-3 mb-7">
                  <a
                    href="mailto:innovat3solutions@gmail.com"
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F25C22] shrink-0">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                      innovat3solutions@gmail.com
                    </span>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F25C22] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium text-zinc-300">South Florida · Miami, FL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F25C22] shrink-0">
                      <Clock className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium text-zinc-300">
                      We typically reply within one business day
                    </span>
                  </div>
                </div>

                {/* Question form */}
                <div className="border-t border-white/10 pt-6">
                  <QuestionForm />
                </div>
              </div>
            </div>

            {/* Secondary CTA under the card */}
            <Link
              href="/pricing"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-zinc-700 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:bg-zinc-50 transition-all"
            >
              Prefer to talk? Book a call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Question form — client-side success state (matches site pattern). */
/* ------------------------------------------------------------------ */

function QuestionForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-6">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_30px_rgba(34,197,94,0.25)]">
          <Sparkles className="w-7 h-7" />
        </div>
        <h4 className="text-lg font-bold text-white mb-1">Question sent!</h4>
        <p className="text-sm text-zinc-400">
          Thanks — we&apos;ll get back to you shortly with an answer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">
        Still have a question?
      </p>

      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus-within:border-[#F25C22] transition-colors">
          <User className="w-4 h-4 text-zinc-500 mr-3 shrink-0" />
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="bg-transparent border-none outline-none w-full text-sm text-white placeholder-zinc-600"
          />
        </div>
        <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus-within:border-[#F25C22] transition-colors">
          <Mail className="w-4 h-4 text-zinc-500 mr-3 shrink-0" />
          <input
            required
            type="email"
            name="email"
            placeholder="you@company.com"
            className="bg-transparent border-none outline-none w-full text-sm text-white placeholder-zinc-600"
          />
        </div>
        <textarea
          required
          name="message"
          rows={3}
          placeholder="What would you like to know?"
          className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-[#F25C22] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#F25C22] text-white hover:bg-[#e04d15] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_24px_rgba(242,92,34,0.4)] active:scale-[0.98]"
      >
        <span>Send your question</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
