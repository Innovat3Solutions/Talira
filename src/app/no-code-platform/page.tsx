import Link from "next/link";
import { BackgroundEffects, GradientOrb, MeshGradient } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import {
  Blocks,
  BookOpen,
  Sparkles,
  ArrowRight,
  Workflow,
  Check,
  PhoneCall,
  PhoneForwarded,
  CalendarCheck,
  Star,
  MessageSquare,
  UserCheck,
  Database,
  BellRing,
  Clock,
  Plug,
  Activity,
  Rocket,
  Headphones,
  ClipboardCheck,
} from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'No-Code AI Voice Agents, Built For You | Talira AI Miami',
  description: 'There is no code behind a Talira voice agent — just your knowledge base, your tools plugged in, and a workflow engine that tracks everything. Our South Florida team designs, builds, and integrates an AI agent that books appointments, follows up on leads, collects reviews, answers FAQs, and more.',
  openGraph: {
    title: 'No-Code AI Voice Agents, Built For You | Talira AI Miami',
    description: 'There is no code behind a Talira voice agent — just your knowledge base, your tools plugged in, and a workflow engine that tracks everything. Our team builds and integrates it for you.',
  }
};

// The AI's toolbox — the actions it can actually take on a call.
const tools = [
  {
    icon: CalendarCheck,
    name: "Schedule Appointments",
    desc: "Checks real-time availability and books confirmed slots right on the call — synced to Google Calendar, Calendly, or your CRM.",
  },
  {
    icon: PhoneForwarded,
    name: "Follow Up on Leads",
    desc: "Calls back, texts, and emails leads on a schedule until they convert. No lead ever goes cold or slips through the cracks.",
  },
  {
    icon: Star,
    name: "Collect Reviews",
    desc: "Reaches out to happy customers after the job and walks them straight to your Google review page to build your reputation.",
  },
  {
    icon: MessageSquare,
    name: "Answer FAQs",
    desc: "Pulls exact answers from your knowledge base — hours, pricing, policies, services — so callers get it right, every time.",
  },
  {
    icon: UserCheck,
    name: "Qualify & Route Leads",
    desc: "Scores callers by budget, intent, and timeline, then routes the hot ones to the right person the moment they're ready.",
  },
  {
    icon: PhoneCall,
    name: "Live Human Transfer",
    desc: "Knows when a call needs a person and hands off seamlessly — with the full context of the conversation passed along.",
  },
  {
    icon: Database,
    name: "Update Your CRM",
    desc: "Logs every call, writes notes, updates fields, and moves deals through your pipeline automatically — no manual data entry.",
  },
  {
    icon: BellRing,
    name: "Reminders & Confirmations",
    desc: "Sends appointment reminders and confirmations by text and email to cut no-shows and keep your calendar full.",
  },
];

// The workflow Talira keeps moving after the call connects.
const workflowSteps = [
  { icon: PhoneCall, label: "Call answered", detail: "Inbound or outbound — 24/7." },
  { icon: UserCheck, label: "Lead qualified", detail: "Budget, intent, and timeline captured." },
  { icon: CalendarCheck, label: "Appointment booked", detail: "Confirmed slot synced to your calendar." },
  { icon: Database, label: "CRM updated", detail: "Notes written, fields filled, deal moved." },
  { icon: PhoneForwarded, label: "Follow-up scheduled", detail: "Next touch queued automatically." },
  { icon: Star, label: "Review requested", detail: "Sent to happy customers after the job." },
];

// Example scenarios we build for.
const scenarios = [
  "Appointment setting",
  "Lead follow-up",
  "Review generation",
  "Customer support",
  "Order & status lookups",
  "New-patient intake",
  "Reactivation campaigns",
  "After-hours answering",
];

export default function NoCodePlatformPage() {
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
              <Sparkles className="w-3 h-3 mr-2" />
              Done-For-You Voice AI
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-900 mb-8 max-w-5xl mx-auto leading-[1.05]">
              No code behind it. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347] relative">
                Built for you.
                {/* Decorative underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" fill="none" stroke="#F25C22" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              There&apos;s no code behind a Talira agent — it&apos;s your knowledge base, your tools plugged in, and a workflow engine that tracks everything afterward. Our team designs and builds the whole thing for you, then plugs it straight into the systems you already use. If you can describe the workflow, we can build it.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#F25C22] rounded-full shadow-[0_10px_30px_rgba(242,92,34,0.35)] hover:bg-[#e04d15] transition-all hover:-translate-y-0.5"
              >
                Book a Build Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-zinc-700 bg-white border border-zinc-200 rounded-full shadow-sm hover:bg-zinc-50 transition-all"
              >
                Explore Features
              </Link>
            </div>

            {/* Scenario chips */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 max-w-3xl">
              {scenarios.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 bg-white border border-zinc-200/80 text-zinc-600 text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F25C22]" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ARCHITECTURE: NO CODE BEHIND IT ================= */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Text Column */}
              <div className="lg:w-1/2">
                <span className="inline-flex items-center gap-2 bg-[#FDF1EB] text-[#F25C22] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                  <Blocks className="w-3.5 h-3.5" /> How it actually works
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6 leading-tight">
                  No code. Just a system <span className="text-[#F25C22]">that works.</span>
                </h2>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  A Talira agent isn&apos;t a script or a chatbot tree you have to maintain. It&apos;s three things working together — and we assemble all of it for you.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#FDF1EB] rounded-xl flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900 mb-1">A knowledge base</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">We feed it everything about your business — hours, pricing, services, policies, and how you talk to customers — so it answers like your best employee.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#FDF1EB] rounded-xl flex items-center justify-center shrink-0">
                      <Plug className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900 mb-1">Your tools, plugged in</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">Calendar, CRM, phone system, review platform — we wire the agent into the software you already run so it can actually take action, not just talk.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#FDF1EB] rounded-xl flex items-center justify-center shrink-0">
                      <Workflow className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900 mb-1">A workflow engine</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">Every call, decision, and action is tracked and carried through — so the right follow-up always happens afterward, automatically.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture diagram */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-zinc-950 rounded-[2.5rem] border border-zinc-800 shadow-[0_30px_80px_rgba(0,0,0,0.35)] p-6 md:p-8 relative overflow-hidden">
                  <GradientOrb color="orange" size="lg" blur="strong" className="-bottom-24 -right-24 opacity-30" />
                  {/* Dotted grid */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.25 }} />

                  <div className="relative z-10 flex flex-col items-center gap-3">
                    {/* Layer 1: Knowledge base */}
                    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3.5 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4 text-[#F25C22]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Knowledge Base</p>
                        <p className="text-[11px] text-zinc-500">Hours · Pricing · Services · Policies · FAQs</p>
                      </div>
                    </div>

                    {/* connector */}
                    <div className="w-px h-5 bg-gradient-to-b from-[#F25C22]/70 to-zinc-700" />

                    {/* Layer 2: AI Agent (center) with integration chips */}
                    <div className="w-full bg-zinc-900 border-2 border-[#F25C22] rounded-2xl px-4 py-4 shadow-[0_0_30px_rgba(242,92,34,0.25)] relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F25C22]/15 border border-[#F25C22]/40 flex items-center justify-center shrink-0">
                          <Sparkles className="w-5 h-5 text-[#F25C22]" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">Talira AI Agent</p>
                          <p className="text-[11px] text-zinc-400">Understands · Decides · Takes action</p>
                        </div>
                        <span className="ml-auto flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                        </span>
                      </div>
                      {/* Integration chips plugging in */}
                      <div className="flex flex-wrap gap-2">
                        {[
                          { icon: CalendarCheck, label: "Calendar" },
                          { icon: Database, label: "CRM" },
                          { icon: PhoneCall, label: "Phone" },
                          { icon: Star, label: "Reviews" },
                        ].map((chip) => (
                          <span key={chip.label} className="inline-flex items-center gap-1.5 bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg">
                            <chip.icon className="w-3 h-3 text-[#F25C22]" />
                            {chip.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* connector */}
                    <div className="w-px h-5 bg-gradient-to-b from-zinc-700 to-[#F25C22]/70" />

                    {/* Layer 3: Workflow engine */}
                    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3.5 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4 text-[#F25C22]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Workflow Engine</p>
                        <p className="text-[11px] text-zinc-500">Tracks every step &amp; fires the follow-up</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= THE TOOLBOX (DARK CENTERPIECE) ================= */}
        <section className="py-32 relative overflow-hidden bg-zinc-950 text-white border-t border-zinc-800">
          <BackgroundEffects variant="section" />

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-[#F25C22] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                <Headphones className="w-3.5 h-3.5" /> The AI&apos;s Toolbox
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                The tools that make it <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">genuinely powerful.</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Talking is the easy part. Real value comes from what the agent can <em className="text-zinc-200 not-italic font-semibold">do</em>. Here are the actions we wire into your agent — and exactly how it earns its keep on every call.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-zinc-900 border border-zinc-800 rounded-[1.75rem] p-7 relative overflow-hidden group hover:border-[#F25C22]/40 transition-colors duration-300"
                >
                  <GradientOrb color="orange" size="md" blur="strong" className="-top-16 -right-16 opacity-0 group-hover:opacity-25 transition-opacity duration-700" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-[#F25C22]/40 transition-colors">
                      <tool.icon className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{tool.name}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
              <div className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full pl-4 pr-6 py-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#F25C22] text-white shrink-0">
                  <Plug className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm font-medium">Need a tool that isn&apos;t listed? If it has an API, we can plug it in.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WORKFLOW TRACKING BAND ================= */}
        <section className="py-24 relative overflow-hidden bg-zinc-50 border-t border-zinc-100">
          <GradientOrb color="peach" size="lg" blur="strong" className="-top-20 right-0 opacity-40" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Text */}
              <div className="lg:w-1/2">
                <span className="inline-flex items-center gap-2 bg-white border border-orange-100 text-[#F25C22] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest shadow-sm">
                  <Workflow className="w-3.5 h-3.5" /> The workflow, tracked
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6 leading-tight">
                  The call ends. <span className="text-[#F25C22]">The work keeps going.</span>
                </h2>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Most of the value happens <em className="not-italic font-semibold text-zinc-800">after</em> someone hangs up. Talira&apos;s workflow engine tracks every conversation and makes sure the next step always happens — the booking lands on the calendar, the CRM gets updated, the follow-up goes out, and the review request fires at the right moment. Nothing gets forgotten, because nothing depends on someone remembering.
                </p>
                <ul className="space-y-4">
                  {[
                    "Every call logged with a full transcript and outcome",
                    "Actions fire automatically — no manual follow-through",
                    "Full visibility into what the agent did and why",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#F25C22] text-white shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span className="text-zinc-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline visual */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-white rounded-[2rem] border border-zinc-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F25C22]" />
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Live Workflow · Auto-Tracked</span>
                  </div>

                  <div className="relative">
                    {/* vertical line */}
                    <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-200" />
                    <div className="space-y-5">
                      {workflowSteps.map((step, i) => (
                        <div key={step.label} className="flex items-start gap-4 relative">
                          <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${i === 0 ? "bg-[#F25C22] border-[#F25C22] text-white shadow-[0_6px_16px_rgba(242,92,34,0.3)]" : "bg-[#FDF1EB] border-orange-100 text-[#F25C22]"}`}>
                            <step.icon className="w-4 h-4" />
                          </div>
                          <div className="pt-1">
                            <p className="text-sm font-bold text-zinc-900">{step.label}</p>
                            <p className="text-xs text-zinc-500">{step.detail}</p>
                          </div>
                          {i < workflowSteps.length - 1 && (
                            <ClipboardCheck className="w-4 h-4 text-emerald-500 ml-auto mt-2.5 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= DONE-FOR-YOU PROCESS (DARK) ================= */}
        <section className="py-32 relative overflow-hidden bg-zinc-950 text-white border-t border-zinc-800">
          <BackgroundEffects variant="section" />

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-[#F25C22] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                <Rocket className="w-3.5 h-3.5" /> Done For You
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                You don&apos;t build it. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">We do.</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                No drag-and-drop. No prompt engineering. No DIY. Our team handles the entire build and keeps it running.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", icon: ClipboardCheck, title: "We map your workflow", desc: "On a discovery call we learn your business, how your calls go, and the systems you already use — then design the agent and the actions it needs to take." },
                { n: "02", icon: Plug, title: "We build & plug it in", desc: "We assemble your knowledge base, wire in your tools, and connect everything into your stack. There's no code for you to write or maintain." },
                { n: "03", icon: Activity, title: "We launch & optimize", desc: "We take it live, monitor real calls, and keep refining the workflow. You get the results; we handle the upkeep." },
              ].map((step) => (
                <div key={step.n} className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 relative overflow-hidden group hover:border-[#F25C22]/40 transition-colors">
                  <GradientOrb color="orange" size="md" blur="strong" className="-top-16 -right-16 opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                        <step.icon className="w-5 h-5 text-[#F25C22]" />
                      </div>
                      <span className="text-4xl font-bold text-zinc-800 tracking-tight">{step.n}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-zinc-400">
              {[
                { icon: Clock, label: "Up and running fast" },
                { icon: Headphones, label: "Ongoing support & tuning" },
                { icon: Check, label: "Built for any scenario" },
              ].map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-[#F25C22]" /> {item.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA BAND ================= */}
        <section className="relative overflow-hidden bg-zinc-50 py-28">
          <BackgroundEffects variant="cta" />
          <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
              <Sparkles className="w-3 h-3 mr-2" />
              Let&apos;s build yours
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Tell us the workflow. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">We&apos;ll build the agent.</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Book a call and we&apos;ll design an AI voice agent around your business — books appointments, follows up on leads, collects reviews, and answers every call. Built, integrated, and maintained by our South Florida team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#F25C22] rounded-full shadow-[0_10px_30px_rgba(242,92,34,0.35)] hover:bg-[#e04d15] transition-all hover:-translate-y-0.5"
              >
                Book a Build Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-zinc-700 bg-white border border-zinc-200 rounded-full shadow-sm hover:bg-zinc-50 transition-all"
              >
                See all features
              </Link>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
