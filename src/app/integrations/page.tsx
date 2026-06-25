import Link from "next/link";
import { BackgroundEffects, GradientOrb, MeshGradient } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import {
  Database,
  Calendar,
  Zap,
  Webhook,
  Plug,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  Network,
  Workflow,
  MessageSquare,
  Phone,
  Building2,
  Boxes,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Cable,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations | Talira AI Miami",
  description:
    "Connect Talira AI voice agents to your CRM, calendar, automation tools, telephony, and knowledge bases. Native integrations with Go High Level, HubSpot, Salesforce, Zapier, Twilio, and more — built by South Florida's leading AI automation consultancy.",
  openGraph: {
    title: "Integrations | Talira AI Miami",
    description:
      "Connect Talira AI voice agents to your CRM, calendar, automation tools, telephony, and knowledge bases. Native integrations with Go High Level, HubSpot, Salesforce, Zapier, Twilio, and more.",
  },
};

const categories = [
  {
    icon: Database,
    label: "CRM",
    title: "Sync every lead in real time",
    description:
      "Update contacts, deals, and pipeline stages the instant a conversation happens — no manual data entry.",
    chips: ["Go High Level", "HubSpot", "Salesforce"],
    accent: "from-orange-50 to-white",
  },
  {
    icon: Calendar,
    label: "Calendars",
    title: "Book appointments live on the call",
    description:
      "Agents check availability and lock in meetings against your real calendar while the caller is still on the line.",
    chips: ["Google Calendar", "Calendly", "Outlook"],
    accent: "from-amber-50 to-white",
  },
  {
    icon: Workflow,
    label: "Automation",
    title: "Trigger any workflow you can imagine",
    description:
      "Pipe structured call outcomes into thousands of downstream apps without writing a single line of glue code.",
    chips: ["Zapier", "Make.com", "n8n"],
    accent: "from-orange-50 to-white",
  },
  {
    icon: Phone,
    label: "Telephony",
    title: "Bring your own numbers & carriers",
    description:
      "Provision new lines or route through your existing infrastructure with carrier-grade reliability.",
    chips: ["Twilio", "SIP Trunking", "Phone Numbers"],
    accent: "from-amber-50 to-white",
  },
  {
    icon: BookOpen,
    label: "Knowledge Bases",
    title: "Ground answers in your own docs",
    description:
      "Connect PDFs, help centers, and websites so agents respond with accurate, on-brand information every time.",
    chips: ["PDF & Docs", "Website Crawl", "Notion"],
    accent: "from-orange-50 to-white",
  },
  {
    icon: MessageSquare,
    label: "Messaging",
    title: "Follow up across every channel",
    description:
      "Send instant recaps, confirmations, and alerts to the inbox your team already lives in after each call.",
    chips: ["Slack", "SMS", "Email"],
    accent: "from-amber-50 to-white",
  },
];

const steps = [
  {
    icon: Plug,
    title: "Connect your tools",
    description:
      "Authenticate your CRM, calendar, and automation accounts in a few clicks with secure OAuth — no engineering required.",
  },
  {
    icon: Network,
    title: "Map your data",
    description:
      "Tell Talira which fields to read and write. Our middleware aligns intents, contacts, and outcomes to your schema.",
  },
  {
    icon: Zap,
    title: "Go live",
    description:
      "Flip the switch and watch your agents update records, book meetings, and fire workflows automatically.",
  },
];

export default function IntegrationsPage() {
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
              <Boxes className="w-3 h-3 mr-2" />
              Native Integrations
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-900 mb-8 max-w-5xl mx-auto leading-[1.05]">
              Connect Talira to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347] relative">
                Everything You Use.
                {/* Decorative underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" fill="none" stroke="#F25C22" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Talira plugs straight into your CRMs, calendars, automation platforms, telephony, and knowledge bases.
              Your voice agents don't just talk — they act inside the tools your business already runs on.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-2 bg-[#F25C22] text-white hover:bg-[#e04c10] rounded-full font-bold px-7 py-3.5 text-base shadow-[0_4px_14px_rgba(242,92,34,0.3)] transition-all transform hover:-translate-y-0.5"
              >
                Start Connecting
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-zinc-700 hover:text-[#F25C22] font-bold px-6 py-3.5 text-base rounded-full border border-zinc-200 bg-white hover:border-orange-200 transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* ================= INTEGRATION CATEGORIES GRID ================= */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                One Platform, <span className="text-[#F25C22]">Endless Connections</span>
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                From the first hello to the closed deal, Talira reads and writes to the systems that run your operation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.label}
                    className={`bg-gradient-to-b ${cat.accent} border border-zinc-200/80 shadow-lg shadow-zinc-200/40 rounded-[2rem] p-8 relative overflow-hidden group flex flex-col`}
                  >
                    <GradientOrb
                      color="peach"
                      size="md"
                      blur="strong"
                      className="-top-16 -right-16 opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                    />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-orange-100">
                          <Icon className="w-5 h-5 text-[#F25C22]" />
                        </div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                          {cat.label}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">{cat.title}</h3>
                      <p className="text-[15px] text-zinc-600 leading-relaxed mb-6">{cat.description}</p>

                      {/* Integration chips */}
                      <div className="mt-auto flex flex-wrap gap-2">
                        {cat.chips.map((chip) => (
                          <span
                            key={chip}
                            className="inline-flex items-center gap-1.5 bg-white border border-zinc-200 text-zinc-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F25C22]"></span>
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reassurance row */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-zinc-500">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 50+ native connectors
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No-code setup
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Real-time two-way sync
              </span>
            </div>
          </div>
        </section>

        {/* ================= CUSTOM WEBHOOKS / API ================= */}
        <section className="py-32 relative overflow-hidden bg-zinc-950 text-white border-t border-zinc-800">
          <BackgroundEffects variant="section" />

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left: copy */}
              <div className="lg:w-1/2">
                <span className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-[#F25C22] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
                  <Webhook className="w-3.5 h-3.5" /> Done For You
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                  Don't see your tool? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">
                    We'll wire it into your system.
                  </span>
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  If it has an API, we'll connect it. Our team designs, builds, and manages the entire integration for
                  you — no developers, no DIY, nothing to maintain. Just tell us what you use, and we'll make Talira work
                  inside your systems, end to end.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <Cable className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">We build it for you</h4>
                      <p className="text-sm text-zinc-400">
                        Tell us your stack and we map every workflow, then wire Talira into your CRM, calendar, and tools
                        — completely hands-off on your end.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <RefreshCw className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">We keep it in sync</h4>
                      <p className="text-sm text-zinc-400">
                        When your systems or processes change, our team updates the integration for you. You never touch
                        a config or maintain a thing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <ShieldCheck className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Signed & secure</h4>
                      <p className="text-sm text-zinc-400">
                        Every connection is encrypted, signed, and managed by us — ready for HIPAA & SOC2 workflows.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/pricing"
                  className="group mt-10 inline-flex items-center gap-2 bg-[#F25C22] text-white hover:bg-[#e04c10] rounded-full font-bold px-8 py-4 text-base shadow-[0_4px_14px_rgba(242,92,34,0.3)] transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Give us a call — we'll set it up
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Right: code editor visual */}
              <div className="lg:w-1/2 w-full">
                <div className="w-full bg-zinc-950 rounded-2xl border border-zinc-800 shadow-[0_0_50px_rgba(242,92,34,0.15)] overflow-hidden flex flex-col">
                  {/* Editor Header */}
                  <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>
                    <div className="text-xs font-mono text-zinc-400">POST /webhooks/talira</div>
                    <div className="w-12"></div>
                  </div>
                  {/* Editor Body */}
                  <div className="p-5 md:p-6 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
                    <span className="text-zinc-500">1</span> <span className="text-emerald-400">{"{"}</span>
                    <br />
                    <span className="text-zinc-500">2</span>   <span className="text-blue-400">"event"</span>
                    <span className="text-white">:</span> <span className="text-orange-300">"call.completed"</span>,
                    <br />
                    <span className="text-zinc-500">3</span>   <span className="text-blue-400">"agent"</span>
                    <span className="text-white">:</span> <span className="text-orange-300">"talira-reception"</span>,
                    <br />
                    <span className="text-zinc-500">4</span>   <span className="text-blue-400">"duration"</span>
                    <span className="text-white">:</span> <span className="text-[#F25C22]">124</span>,
                    <br />
                    <span className="text-zinc-500">5</span>   <span className="text-blue-400">"sync"</span>
                    <span className="text-white">:</span> <span className="text-emerald-400">{"{"}</span>
                    <br />
                    <span className="text-zinc-500">6</span>     <span className="text-blue-400">"crm"</span>
                    <span className="text-white">:</span> <span className="text-orange-300">"gohighlevel"</span>,
                    <br />
                    <span className="text-zinc-500">7</span>     <span className="text-blue-400">"action"</span>
                    <span className="text-white">:</span> <span className="text-orange-300">"upsert_contact"</span>,
                    <br />
                    <span className="text-zinc-500">8</span>     <span className="text-blue-400">"intent"</span>
                    <span className="text-white">:</span> <span className="text-orange-300">"book_appointment"</span>
                    <br />
                    <span className="text-zinc-500">9</span>   <span className="text-emerald-400">{"}"}</span>
                    <br />
                    <span className="text-zinc-500">10</span> <span className="text-emerald-400">{"}"}</span>
                  </div>
                  {/* Status bar */}
                  <div className="bg-zinc-900 border-t border-zinc-800 px-4 py-3 flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    200 OK — delivered in 86ms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="py-24 relative overflow-hidden bg-zinc-50">
          <MeshGradient intensity="light" />
          <GradientOrb color="peach" size="lg" blur="strong" className="top-0 -left-24 opacity-30" />

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
                <Sparkles className="w-3 h-3 mr-2" />
                Up & Running Fast
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                Live in <span className="text-[#F25C22]">Three Steps</span>
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                No engineering team required. Most clients connect their stack and launch the same afternoon.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="bg-white border border-zinc-200/80 shadow-lg shadow-zinc-200/40 rounded-[2rem] p-8 relative overflow-hidden flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-[#FDF8F5] rounded-2xl flex items-center justify-center border border-orange-100">
                        <Icon className="w-5 h-5 text-[#F25C22]" />
                      </div>
                      <span className="text-5xl font-bold text-zinc-100 tracking-tight leading-none">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-[15px] text-zinc-600 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA BAND ================= */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-zinc-950 border border-zinc-800 px-8 py-16 md:px-16 md:py-24 text-center">
              <BackgroundEffects variant="section" className="!absolute inset-0" />
              <GradientOrb color="coral" size="xl" blur="strong" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 mb-6 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full">
                  <Building2 className="w-3.5 h-3.5" /> Built in Miami
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.05]">
                  Ready to plug Talira into your stack?
                </h2>
                <p className="text-lg text-zinc-400 mb-10 max-w-2xl leading-relaxed">
                  Connect your CRM, calendar, and automation tools today and let your AI voice agents start working
                  inside the systems you already trust.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center gap-2 bg-[#F25C22] text-white hover:bg-[#e04c10] rounded-full font-bold px-8 py-4 text-base shadow-[0_4px_14px_rgba(242,92,34,0.3)] transition-all transform hover:-translate-y-0.5"
                  >
                    View Pricing
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-2 text-white hover:text-[#F25C22] font-bold px-7 py-4 text-base rounded-full border border-zinc-700 bg-zinc-900/60 hover:border-orange-500/50 transition-colors"
                  >
                    See All Features
                  </Link>
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
