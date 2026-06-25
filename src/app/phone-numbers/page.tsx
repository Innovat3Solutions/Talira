import { BackgroundEffects, GradientOrb, MeshGradient } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import {
  Phone,
  PhoneCall,
  PhoneForwarded,
  Globe,
  MapPin,
  Hash,
  ArrowRightLeft,
  ShieldCheck,
  ArrowRight,
  Voicemail,
  MessageSquare,
  Clock,
  Repeat,
  Zap,
  FileText,
  Wifi,
  SignalHigh,
  BatteryFull,
  MicOff,
  Volume2,
  LayoutGrid,
  UserPlus,
  Video,
  User,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Phone Numbers — Local, Toll-Free & Global | Talira AI Miami",
  description:
    "Provision local & toll-free phone numbers, port your existing line with zero downtime, and route calls to AI voice agents across 100+ countries. Talira — South Florida's AI automation consultancy.",
  openGraph: {
    title: "AI Phone Numbers — Local, Toll-Free & Global | Talira AI Miami",
    description:
      "Provision local & toll-free phone numbers, port your existing line with zero downtime, and route calls to AI voice agents across 100+ countries. Talira — South Florida's AI automation consultancy.",
  },
};

export default function PhoneNumbersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <SiteNavbar />

      <main className="flex-1">

        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 px-4 w-full overflow-hidden bg-zinc-50">
          <MeshGradient intensity="medium" />
          <GradientOrb color="orange" size="xl" blur="strong" className="-top-10 -right-20 opacity-30" />
          <GradientOrb color="peach" size="lg" blur="strong" className="bottom-0 left-10 opacity-40" />

          <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center mt-10">
            {/* Left: copy */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
                <Globe className="w-3 h-3 mr-2" />
                Global Phone Numbers
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-zinc-900 mb-8 leading-[1.05]">
                Get a Local Number <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347] relative">
                  in Minutes.
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" fill="none" stroke="#F25C22" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-xl leading-relaxed font-medium">
                Provision local & toll-free numbers, port your existing line with zero downtime, and route every call to a Talira AI voice agent—answered instantly, 24/7, anywhere in the world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F25C22] text-white font-bold rounded-full shadow-[0_8px_24px_rgba(242,92,34,0.35)] hover:bg-[#d94e18] transition-colors"
                >
                  Claim Your Number
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-zinc-700 font-bold rounded-full border border-zinc-300 bg-white hover:border-zinc-400 transition-colors"
                >
                  Explore Features
                </a>
              </div>
            </div>

            {/* Right: realistic animated iPhone — live AI call */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-phone-float">
                {/* Ambient glow behind the phone */}
                <div className="absolute -inset-10 bg-[#F25C22]/20 blur-[80px] rounded-full pointer-events-none" />
                <GradientOrb color="coral" size="lg" blur="strong" className="-top-10 -right-10 opacity-40" />

                {/* Titanium frame */}
                <div className="relative w-[268px] sm:w-[300px] rounded-[3.2rem] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-900 p-[3px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)]">
                  {/* Side buttons */}
                  <div className="absolute left-[-3px] top-[110px] w-[3px] h-7 rounded-l bg-zinc-700" />
                  <div className="absolute left-[-3px] top-[150px] w-[3px] h-12 rounded-l bg-zinc-700" />
                  <div className="absolute left-[-3px] top-[208px] w-[3px] h-12 rounded-l bg-zinc-700" />
                  <div className="absolute right-[-3px] top-[170px] w-[3px] h-16 rounded-r bg-zinc-700" />

                  {/* Black bezel */}
                  <div className="rounded-[3rem] bg-black p-[9px]">
                    {/* Screen */}
                    <div className="relative rounded-[2.5rem] overflow-hidden aspect-[9/19.5] bg-gradient-to-b from-zinc-900 via-[#1a0f0a] to-black">
                      {/* Wallpaper glow */}
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#F25C22]/25 blur-[70px] rounded-full pointer-events-none" />

                      {/* Status bar */}
                      <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-7 pt-3.5 text-white">
                        <span className="text-[13px] font-semibold tracking-tight">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <SignalHigh className="w-4 h-4" />
                          <Wifi className="w-4 h-4" />
                          <BatteryFull className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Dynamic Island */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 w-[92px] h-[26px] bg-black rounded-full flex items-center justify-between px-3 shadow-[inset_0_0_2px_rgba(255,255,255,0.15)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-status-blink" />
                        <span className="w-2 h-2 rounded-full bg-zinc-700 ring-1 ring-zinc-600" />
                      </div>

                      {/* Call UI */}
                      <div className="relative z-20 h-full flex flex-col items-center pt-[72px] pb-7 px-6 text-center">
                        {/* Status label */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">Call Active</span>
                        </div>

                        {/* Caller name + number */}
                        <h3 className="text-2xl font-bold text-white tracking-tight">Talira AI</h3>
                        <p className="text-[13px] text-zinc-400 font-mono mt-0.5">+1 (305) 555-0142</p>
                        <p className="text-[13px] text-zinc-500 mt-0.5">00:14</p>

                        {/* Avatar with ringing ripples */}
                        <div className="relative flex items-center justify-center my-5 w-24 h-24">
                          <span className="absolute inset-0 rounded-full bg-[#F25C22]/30 animate-ring-ripple" />
                          <span className="absolute inset-0 rounded-full bg-[#F25C22]/30 animate-ring-ripple" style={{ animationDelay: "1.2s" }} />
                          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#F25C22] to-[#ffb347] flex items-center justify-center shadow-[0_0_30px_rgba(242,92,34,0.55)] ring-2 ring-white/20">
                            <img src="/talira-icon.png" alt="Talira" className="w-12 h-12 object-contain" />
                          </div>
                        </div>

                        {/* Live caption pill */}
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm rounded-full px-3.5 py-1.5 mb-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[12px] text-zinc-200 font-medium">&ldquo;How can I help you today?&rdquo;</span>
                        </div>

                        {/* Live voice waveform */}
                        <div className="flex items-center justify-center gap-[5px] h-10 mb-auto">
                          {[20, 34, 14, 40, 26, 38, 18, 32, 24, 40, 16, 30, 22, 36].map((h, i) => (
                            <span
                              key={i}
                              className="w-[3px] rounded-full bg-gradient-to-t from-[#F25C22] to-[#ffb347] animate-voice-wave"
                              style={{ height: `${h}px`, animationDelay: `${(i % 7) * 0.11}s` }}
                            />
                          ))}
                        </div>

                        {/* In-call control grid */}
                        <div className="grid grid-cols-3 gap-x-6 gap-y-4 mb-6">
                          {[
                            { icon: MicOff, label: "mute" },
                            { icon: LayoutGrid, label: "keypad" },
                            { icon: Volume2, label: "speaker" },
                            { icon: UserPlus, label: "add" },
                            { icon: Video, label: "FaceTime" },
                            { icon: User, label: "contacts" },
                          ].map((c) => (
                            <div key={c.label} className="flex flex-col items-center gap-1.5">
                              <div className="w-[52px] h-[52px] rounded-full bg-white/10 border border-white/5 flex items-center justify-center backdrop-blur-sm">
                                <c.icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-[10px] text-zinc-400 font-medium">{c.label}</span>
                            </div>
                          ))}
                        </div>

                        {/* End call button */}
                        <div className="w-[60px] h-[60px] rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_28px_rgba(239,68,68,0.55)]">
                          <Phone className="w-6 h-6 text-white rotate-[135deg]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= NUMBER TYPES SECTION ================= */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                One Platform. <span className="text-[#F25C22]">Every Number.</span>
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Pick the line that matches your market—then let your AI agent answer it. Spin up new numbers on demand or scale across regions in a single click.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Local */}
              <div className="bg-[#FDF8F5] border border-[#F5EBE1] rounded-[2rem] p-8 relative overflow-hidden group">
                <GradientOrb color="orange" size="md" blur="strong" className="-bottom-16 -right-16 opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-100 mb-6">
                    <MapPin className="w-5 h-5 text-[#F25C22]" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Local Numbers</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Establish a trusted local presence in any area code. Customers see a familiar number and pick up—boosting answer rates and community trust.
                  </p>
                </div>
              </div>

              {/* Toll-free */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[2rem] p-8 relative overflow-hidden transition-all hover:bg-zinc-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-100 mb-6">
                  <Hash className="w-5 h-5 text-[#F25C22]" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Toll-Free (1-800)</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Project nationwide credibility with a memorable 1-800, 888, or 877 line. Free for your callers, fully managed and answered by AI on your behalf.
                </p>
              </div>

              {/* International */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[2rem] p-8 relative overflow-hidden transition-all hover:bg-zinc-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-100 mb-6">
                  <Globe className="w-5 h-5 text-[#F25C22]" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">International & Global</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Launch in 100+ countries with in-region numbers that feel native to every market. Expand globally without a single piece of new hardware.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PORTING SECTION (DARK) ================= */}
        <section className="py-32 relative overflow-hidden bg-zinc-950 text-white border-t border-zinc-800">
          <BackgroundEffects variant="section" />

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Left: copy + steps */}
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                  Keep your existing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">number.</span>
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  Already have a number your customers know by heart? Port it to Talira and keep it. Our team handles the carrier paperwork end to end—with zero downtime while we transfer.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <FileText className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">1. Submit Your Number</h4>
                      <p className="text-sm text-zinc-400">Tell us the line you want to bring over. We pull the carrier details and prep the port request for you.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <ArrowRightLeft className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">2. We Handle the Transfer</h4>
                      <p className="text-sm text-zinc-400">Our porting team coordinates with your current provider and schedules the cutover at a time that suits you.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <ShieldCheck className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">3. Go Live With Zero Downtime</h4>
                      <p className="text-sm text-zinc-400">Your number stays active the entire time. The moment the port completes, your AI agent starts answering.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: routing diagram visual */}
              <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                <div className="w-full max-w-md bg-black rounded-[2.5rem] p-4 border border-zinc-800 shadow-[0_0_50px_rgba(242,92,34,0.15)] relative">
                  <div className="absolute inset-x-10 inset-y-10 bg-[#F25C22]/20 blur-3xl z-0 pointer-events-none" />

                  <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800/80 p-6 relative z-10 flex flex-col gap-6">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 text-center">Call Routing Engine</h4>

                    {/* Routing node diagram */}
                    <div className="h-56 bg-zinc-950 rounded-xl border border-zinc-800 relative overflow-hidden flex items-center justify-between px-6">
                      {/* Grid Background */}
                      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "16px 16px", opacity: 0.3 }} />

                      {/* Connecting lines */}
                      <svg className="absolute inset-0 w-full h-full z-10" pointerEvents="none">
                        <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#F25C22" strokeWidth="1.5" />
                        <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="4 2" />
                      </svg>

                      {/* Caller node */}
                      <div className="relative z-20 flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-black border border-zinc-700 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-zinc-300" />
                        </div>
                        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Caller</span>
                      </div>

                      {/* Talira node (center) */}
                      <div className="relative z-20 flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-black border-2 border-[#F25C22] rounded-full shadow-[0_0_15px_rgba(242,92,34,0.8)] flex items-center justify-center">
                          <PhoneForwarded className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[9px] font-bold text-[#F25C22] uppercase tracking-widest">Talira AI</span>
                      </div>

                      {/* Your team node */}
                      <div className="relative z-20 flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-black border border-zinc-700 rounded-full flex items-center justify-center">
                          <PhoneCall className="w-5 h-5 text-emerald-400" />
                        </div>
                        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Your Team</span>
                      </div>
                    </div>

                    <div className="bg-emerald-900/20 border border-emerald-800/30 rounded-xl p-3 flex items-center justify-center text-emerald-400 text-xs font-bold gap-2">
                      <ShieldCheck className="w-4 h-4" /> Port Verified · Zero Downtime
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CAPABILITIES GRID ================= */}
        <section className="py-24 relative overflow-hidden bg-zinc-50">
          <MeshGradient intensity="light" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                Built-In <span className="text-[#F25C22]">Calling Superpowers</span>
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Every Talira number ships with the telephony features modern teams expect—configured, managed, and orchestrated by AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: PhoneForwarded,
                  title: "Smart Call Routing",
                  desc: "Direct callers to the right agent, queue, or department using intent, time of day, and caller history.",
                },
                {
                  icon: Repeat,
                  title: "Smart Forwarding",
                  desc: "Escalate to a human in seconds with warm transfers, fallback rules, and after-hours overflow handling.",
                },
                {
                  icon: Voicemail,
                  title: "Voicemail-to-Text",
                  desc: "Missed calls become clean, searchable transcripts delivered straight to your inbox or CRM.",
                },
                {
                  icon: MessageSquare,
                  title: "Two-Way SMS",
                  desc: "Send confirmations, links, and follow-ups by text on the same number your agent answers.",
                },
                {
                  icon: FileText,
                  title: "Recording & Transcripts",
                  desc: "Capture every conversation with consent-aware recording and instant, accurate transcriptions.",
                },
                {
                  icon: Clock,
                  title: "24/7 Answering",
                  desc: "Never miss another lead. Your AI agent picks up on the first ring, day or night, weekends included.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-white border border-zinc-200/80 shadow-lg shadow-zinc-200/40 rounded-[2rem] p-7 group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-[#FDF8F5] border border-[#F5EBE1] rounded-xl flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-[#F25C22]" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{f.title}</h3>
                  <p className="text-zinc-600 text-[15px] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= COVERAGE BAND ================= */}
        <section className="py-24 relative overflow-hidden bg-white border-t border-zinc-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-zinc-950 text-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
              <BackgroundEffects variant="section" className="absolute inset-0" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-zinc-900 border border-zinc-800 rounded-full">
                  <Globe className="w-3 h-3" />
                  Worldwide Coverage
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
                  Local presence in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">100+ countries.</span>
                </h2>
                <p className="text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                  From a single dashboard, give every region a number that feels native—then route it all to one intelligent voice agent.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {["North America", "Latin America", "Europe", "United Kingdom", "Asia-Pacific", "Middle East", "Africa", "Australia"].map(
                    (region) => (
                      <span
                        key={region}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-semibold text-zinc-200"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#F25C22]" />
                        {region}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA BAND ================= */}
        <section className="relative overflow-hidden bg-zinc-50">
          <BackgroundEffects variant="cta">
            <div className="container mx-auto px-4 max-w-4xl py-28 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-8 rounded-2xl bg-[#F25C22] shadow-[0_8px_24px_rgba(242,92,34,0.35)]">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.05]">
                Your new number is <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">one click away.</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Provision a local or toll-free line, port what you already have, and put an AI voice agent on the other end—today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F25C22] text-white font-bold rounded-full shadow-[0_8px_24px_rgba(242,92,34,0.35)] hover:bg-[#d94e18] transition-colors"
                >
                  Claim Your Number
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-zinc-700 font-bold rounded-full border border-zinc-300 bg-white hover:border-zinc-400 transition-colors"
                >
                  See the Platform
                </a>
              </div>
            </div>
          </BackgroundEffects>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
