"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Loader2,
  Check,
  HelpCircle,
} from "lucide-react";

const TOPICS = [
  "Book a demo / call",
  "Pricing & plans",
  "Integrations & setup",
  "Support / existing customer",
  "Other",
] as const;

type Topic = (typeof TOPICS)[number];
type Status = "idle" | "submitting" | "done" | "error";

export function ContactForm() {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [customTopic, setCustomTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const isOther = topic === "Other";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!topic) {
      setError("Please pick what your message is about.");
      return;
    }
    if (isOther && !customTopic.trim()) {
      setError("Please tell us what your message is about.");
      return;
    }
    setError(null);
    setStatus("submitting");

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      topicCategory: topic,
      topic: isOther ? customTopic.trim() : topic,
      question: question.trim(),
      source: "contact-page",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    const endpoint = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        // No CRM endpoint configured yet — keep the UX working and log it.
        console.warn(
          "[ContactForm] NEXT_PUBLIC_GHL_WEBHOOK_URL not set — message not sent:",
          payload
        );
      }
      setStatus("done");
    } catch {
      setError("Something went wrong sending your message. Please try again.");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="w-full bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] border border-zinc-100 p-8 md:p-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center ring-2 ring-green-200"
        >
          <Check className="w-10 h-10 text-green-500" strokeWidth={3} />
        </motion.div>
        <h3 className="mt-6 text-2xl font-bold text-zinc-900 tracking-tight">
          Message sent!
        </h3>
        <p className="mt-2 text-sm font-medium text-zinc-500 max-w-sm">
          Thanks for reaching out{name ? `, ${name.split(" ")[0]}` : ""} — our
          team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] border border-zinc-100 p-6 md:p-8 text-left relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F25C22]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-black tracking-tight mb-2">
          Send us a message
        </h3>
        <p className="text-sm font-medium text-zinc-500 mb-7">
          Pick what it's about and we'll route it to the right person.
        </p>

        {/* Topic selector (filtered questions + Other) */}
        <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-2 ml-1">
          What's this about?
        </label>
        <div className="flex flex-wrap gap-2 mb-5">
          {TOPICS.map((t) => {
            const selected = topic === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors cursor-pointer ${
                  selected
                    ? "bg-[#F25C22] text-white border-[#F25C22] shadow-sm shadow-[#F25C22]/30"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-[#F25C22] hover:text-[#F25C22]"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* "Other" free-text reveal */}
        <AnimatePresence initial={false}>
          {isOther && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">
                Tell us the topic
              </label>
              <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
                <HelpCircle className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3 shrink-0" />
                <input
                  type="text"
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="What would you like to talk about?"
                  className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">
              Name
            </label>
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
              <User className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3 shrink-0" />
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">
              Phone Number
            </label>
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
              <Phone className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3 shrink-0" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">
            Email
          </label>
          <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
            <Mail className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3 shrink-0" />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium"
            />
          </div>
        </div>

        {/* Question */}
        <div className="mt-4">
          <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">
            Your Question
          </label>
          <div className="flex items-start bg-white rounded-xl px-4 py-3 shadow-sm border border-zinc-200/80 focus-within:border-[#F25C22] transition-colors group">
            <MessageSquare className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3 mt-1 shrink-0" />
            <textarea
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Tell us what you'd like to know…"
              rows={4}
              className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium resize-none"
            />
          </div>
        </div>

        {error && (
          <p className="mt-3 text-sm font-medium text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full mt-6 flex items-center justify-center gap-2 bg-[#F25C22] text-white rounded-xl px-6 py-4 font-bold tracking-wide shadow-lg shadow-[#F25C22]/30 hover:bg-[#e04c10] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-wait"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
