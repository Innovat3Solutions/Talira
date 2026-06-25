import Link from "next/link";
import { BackgroundEffects, GradientOrb, MeshGradient } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { Globe, Languages, Mic, Volume2, MessageSquare, ArrowRight, Sparkles, Repeat, Users, AudioLines, Headphones, Check } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Available Languages — 100+ Native AI Voices | Talira AI Miami',
  description: 'Talira AI voice agents speak 100+ languages with native-sounding voices, authentic regional accents, and seamless mid-call language switching. Serve every customer in their own language across South Florida and worldwide.',
  openGraph: {
    title: 'Available Languages — 100+ Native AI Voices | Talira AI Miami',
    description: 'Talira AI voice agents speak 100+ languages with native-sounding voices, authentic regional accents, and seamless mid-call language switching. Serve every customer in their own language across South Florida and worldwide.',
  }
};

const languages = [
  { name: "English", native: "English", region: "US · UK · AU" },
  { name: "Spanish", native: "Español", region: "Latin America" },
  { name: "Spanish", native: "Español", region: "Castilian" },
  { name: "French", native: "Français", region: "FR · CA" },
  { name: "German", native: "Deutsch", region: "DE · AT · CH" },
  { name: "Italian", native: "Italiano", region: "Italy" },
  { name: "Portuguese", native: "Português", region: "Brazil" },
  { name: "Portuguese", native: "Português", region: "Europe" },
  { name: "Dutch", native: "Nederlands", region: "NL · BE" },
  { name: "Mandarin", native: "中文", region: "China" },
  { name: "Japanese", native: "日本語", region: "Japan" },
  { name: "Korean", native: "한국어", region: "Korea" },
  { name: "Arabic", native: "العربية", region: "MSA · Gulf" },
  { name: "Hindi", native: "हिन्दी", region: "India" },
  { name: "Russian", native: "Русский", region: "Russia" },
  { name: "Polish", native: "Polski", region: "Poland" },
  { name: "Turkish", native: "Türkçe", region: "Türkiye" },
  { name: "Vietnamese", native: "Tiếng Việt", region: "Vietnam" },
  { name: "Thai", native: "ไทย", region: "Thailand" },
  { name: "Indonesian", native: "Bahasa Indonesia", region: "Indonesia" },
  { name: "Swedish", native: "Svenska", region: "Sweden" },
  { name: "Norwegian", native: "Norsk", region: "Norway" },
  { name: "Danish", native: "Dansk", region: "Denmark" },
  { name: "Greek", native: "Ελληνικά", region: "Greece" },
  { name: "Hebrew", native: "עברית", region: "Israel" },
  { name: "Filipino", native: "Filipino", region: "Philippines" },
  { name: "Ukrainian", native: "Українська", region: "Ukraine" },
  { name: "Romanian", native: "Română", region: "Romania" },
];

// Names used in the subtle hero ticker row.
const heroNames = [
  "English", "Español", "Français", "Deutsch", "中文", "日本語",
  "العربية", "Português", "한국어", "Italiano", "हिन्दी", "Русский", "Tiếng Việt",
];

// Heights to mimic a voice waveform
const waveBars = [18, 34, 52, 28, 64, 44, 80, 56, 40, 72, 30, 60, 46, 88, 38, 66, 26, 54, 70, 42, 58, 32, 76, 48];

export default function AvailableLanguagesPage() {
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
              <Globe className="w-3 h-3 mr-2" />
              100+ Languages
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-900 mb-8 max-w-5xl mx-auto leading-[1.05]">
              Speak Every <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347] relative">
                Customer&apos;s Language.
                {/* Decorative underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" fill="none" stroke="#F25C22" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Talira&apos;s AI voice agents converse fluently in over 100 languages—with natural, native-sounding voices, authentic regional accents, and the ability to switch languages mid-call. No translators. No extra staff. Just effortless conversations in every customer&apos;s mother tongue.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/pricing"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F25C22] text-white font-bold rounded-full shadow-[0_10px_30px_rgba(242,92,34,0.35)] hover:bg-[#e04e18] transition-all hover:-translate-y-0.5"
              >
                Deploy in Any Language
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-800 font-bold rounded-full border border-zinc-200 shadow-sm hover:border-zinc-300 hover:bg-zinc-50 transition-all"
              >
                Explore Features
              </Link>
            </div>

            {/* Editorial language ticker — native names, no flags */}
            <div className="mt-14 max-w-3xl flex flex-wrap items-center justify-center gap-y-3">
              {heroNames.map((n, i) => (
                <span key={n} className="flex items-center text-sm md:text-[15px] font-medium text-zinc-400">
                  {i > 0 && <span className="mx-3 md:mx-4 w-1 h-1 rounded-full bg-zinc-300" />}
                  <span className="whitespace-nowrap">{n}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LANGUAGE GRID ================= */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-orange-50 border border-orange-100 rounded-full">
                <Languages className="w-3 h-3" />
                Global Coverage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                One Agent. <span className="text-[#F25C22]">Every Market.</span>
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                From Miami&apos;s bilingual neighborhoods to your international clients, Talira meets every caller where they are. Here&apos;s a sample of the languages we speak natively.
              </p>
            </div>

            {/* Editorial hairline matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-zinc-200/70 rounded-[1.5rem] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              {languages.map((lang, i) => (
                <div
                  key={`${lang.name}-${lang.region}-${i}`}
                  className="group border-b border-r border-zinc-200/70 px-5 py-5 md:px-6 md:py-6 transition-colors duration-300 hover:bg-[#FDF8F5]"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-[15px] md:text-base font-bold text-zinc-900 tracking-tight truncate">
                      {lang.name}
                    </p>
                    <span className="hidden md:block text-[9px] font-bold text-zinc-300 uppercase tracking-widest shrink-0 group-hover:text-[#F25C22]/60 transition-colors">
                      {lang.region}
                    </span>
                  </div>
                  <p
                    lang="und"
                    className="mt-1 text-sm text-zinc-400 group-hover:text-[#F25C22] transition-colors truncate"
                  >
                    {lang.native}
                  </p>
                </div>
              ))}
            </div>

            {/* + many more */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <div className="inline-flex items-center gap-3 bg-zinc-900 text-white rounded-full pl-5 pr-6 py-3 shadow-lg">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F25C22] text-sm font-bold">+</span>
                <span className="text-sm font-bold">100+ languages &amp; dialects total — and growing.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= NATURAL VOICE (DARK) ================= */}
        <section className="py-32 relative overflow-hidden bg-zinc-950 text-white border-t border-zinc-800">
          <BackgroundEffects variant="section" />

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-zinc-900 border border-zinc-800 rounded-full">
                  <AudioLines className="w-3 h-3" />
                  Human-Parity Voices
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                  Not translated. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">Truly spoken.</span>
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  Talira doesn&apos;t bolt a translation layer onto a robotic voice. Each language is rendered with native prosody, authentic regional accents, and natural intonation—so callers feel like they&apos;re talking to a local, not a machine.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <Mic className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Native Accents &amp; Dialects</h4>
                      <p className="text-sm text-zinc-400">Castilian or Latin American Spanish, Brazilian or European Portuguese—choose the dialect that fits your market.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <Volume2 className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Lifelike Prosody</h4>
                      <p className="text-sm text-zinc-400">Pauses, emphasis, and emotion are tuned per-language for conversations that feel genuinely human.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <Headphones className="w-5 h-5 text-[#F25C22]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Customizable Voice Personas</h4>
                      <p className="text-sm text-zinc-400">Match tone, gender, and energy to your brand across every language you operate in.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Voice Visualization */}
              <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                <div className="w-full max-w-md bg-black rounded-[2.5rem] p-4 border border-zinc-800 shadow-[0_0_50px_rgba(242,92,34,0.15)] relative">
                  {/* Glow */}
                  <div className="absolute inset-x-10 inset-y-10 bg-[#F25C22]/20 blur-3xl z-0 pointer-events-none" />

                  <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800/80 p-6 relative z-10 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Live Voice Engine</h4>
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Speaking
                      </span>
                    </div>

                    {/* Waveform */}
                    <div className="bg-zinc-950 rounded-2xl border border-zinc-800 px-4 py-6 flex items-center justify-center gap-1 h-32 overflow-hidden">
                      {waveBars.map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 rounded-full bg-gradient-to-t from-[#F25C22] to-[#ffb347] animate-pulse"
                          style={{ height: `${h}px`, animationDelay: `${(i % 6) * 0.12}s` }}
                        />
                      ))}
                    </div>

                    {/* Faux transcript */}
                    <div className="space-y-3">
                      <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-3">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F25C22]"></span>
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Español · Native voice</span>
                        </div>
                        <p className="text-sm text-zinc-200">&ldquo;Claro que sí, le agendo su cita ahora mismo.&rdquo;</p>
                      </div>
                      <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-3">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F25C22]"></span>
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Français · Native voice</span>
                        </div>
                        <p className="text-sm text-zinc-200">&ldquo;Bien sûr, je m&apos;occupe de votre réservation tout de suite.&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MID-CALL SWITCHING ================= */}
        <section className="py-24 relative overflow-hidden bg-zinc-50 border-t border-zinc-100">
          <GradientOrb color="peach" size="lg" blur="strong" className="-top-20 right-0 opacity-40" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              <div className="lg:w-1/2 w-full order-2 lg:order-1">
                {/* Conversation mockup */}
                <div className="bg-white rounded-[2rem] border border-zinc-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F25C22]"></span>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Live Call · Auto-Detecting Language</span>
                  </div>

                  <div className="space-y-4">
                    {/* User Spanish */}
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-zinc-100 rounded-2xl rounded-tr-sm px-4 py-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Caller · Español</span>
                        </div>
                        <p className="text-sm text-zinc-800">Hola, quería saber sobre sus precios.</p>
                      </div>
                    </div>
                    {/* Agent Spanish */}
                    <div className="flex justify-start">
                      <div className="max-w-[80%] bg-[#F25C22] text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-[0_8px_20px_rgba(242,92,34,0.25)]">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Talira · Español</span>
                        </div>
                        <p className="text-sm">¡Con gusto! Tenemos planes desde $497 al mes. ¿Le explico las opciones?</p>
                      </div>
                    </div>
                    {/* Switch indicator */}
                    <div className="flex items-center justify-center gap-2 py-1">
                      <span className="h-px flex-1 bg-zinc-200"></span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#F25C22] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">
                        <Repeat className="w-3 h-3" /> Caller switched to English
                      </span>
                      <span className="h-px flex-1 bg-zinc-200"></span>
                    </div>
                    {/* User English */}
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-zinc-100 rounded-2xl rounded-tr-sm px-4 py-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Caller · English</span>
                        </div>
                        <p className="text-sm text-zinc-800">Actually, can you continue in English?</p>
                      </div>
                    </div>
                    {/* Agent English */}
                    <div className="flex justify-start">
                      <div className="max-w-[80%] bg-[#F25C22] text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-[0_8px_20px_rgba(242,92,34,0.25)]">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Talira · English</span>
                        </div>
                        <p className="text-sm">Of course! Our plans start at $497/month. Want me to walk you through them?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-100 rounded-full shadow-sm">
                  <Repeat className="w-3 h-3" />
                  Mid-Call Switching
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                  Switches languages <span className="text-[#F25C22]">without missing a beat.</span>
                </h2>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Real conversations aren&apos;t monolingual. Talira automatically detects when a caller changes languages—or switches on request—and responds instantly in the new language, preserving full context the entire time.
                </p>
                <ul className="space-y-4">
                  {[
                    "Automatic language detection on the first words",
                    "Context carries seamlessly across the switch",
                    "Handles bilingual & code-switching callers naturally",
                    "Zero awkward pauses or hand-offs",
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

            </div>
          </div>
        </section>

        {/* ================= WHY IT MATTERS ================= */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                Why multilingual <span className="text-[#F25C22]">changes everything.</span>
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                In a global, multilingual market like South Florida, speaking your customer&apos;s language isn&apos;t a nice-to-have—it&apos;s the difference between a booked appointment and a hang-up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Reach More Customers", desc: "Capture leads you were losing to language barriers—every caller gets served in their own tongue." },
                { icon: Globe, title: "Native Experience", desc: "Authentic accents and prosody build instant trust and keep callers comfortable and engaged." },
                { icon: MessageSquare, title: "No Extra Agents", desc: "One AI replaces a multilingual call team. No hiring, scheduling, or training across languages." },
                { icon: Sparkles, title: "Instant Deployment", desc: "Add a new language in minutes—no retraining required. Go global as fast as you grow." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-[#FDF8F5] border border-[#F5EBE1] rounded-[2rem] p-8 relative overflow-hidden group transition-all hover:shadow-[0_16px_40px_rgba(242,92,34,0.1)] hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 border border-orange-100">
                    <card.icon className="w-5 h-5 text-[#F25C22]" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="relative overflow-hidden bg-zinc-50 py-24">
          <BackgroundEffects variant="cta">
            <div className="container mx-auto px-4 max-w-4xl text-center relative z-10 py-8">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
                <Globe className="w-3 h-3 mr-2" />
                Speak to the whole world
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Launch an agent that speaks{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">every language</span> your customers do.
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Deploy a native-sounding AI voice agent in 100+ languages today. Get started with Talira and never lose a lead to a language barrier again.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F25C22] text-white font-bold rounded-full shadow-[0_10px_30px_rgba(242,92,34,0.35)] hover:bg-[#e04e18] transition-all hover:-translate-y-0.5"
                >
                  View Pricing &amp; Deploy
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-800 font-bold rounded-full border border-zinc-200 shadow-sm hover:border-zinc-300 transition-all"
                >
                  See All Features
                </Link>
              </div>
            </div>
          </BackgroundEffects>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
