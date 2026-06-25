import Link from "next/link";
import { Metadata } from "next";
import { BackgroundEffects, GradientOrb, MeshGradient } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { FaqExplorer } from "@/components/ui/faq-explorer";
import { HelpCircle, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Talira AI Miami",
  description:
    "Answers about Talira's no-code AI voice agents — how they work, the tools they integrate with, phone numbers, 100+ languages, and getting started. Still stuck? Ask our South Florida team directly.",
  openGraph: {
    title: "Frequently Asked Questions | Talira AI Miami",
    description:
      "Everything you need to know about Talira's done-for-you AI voice agents — platform, integrations, phone numbers, and languages. Plus a direct line to our team.",
  },
};

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-zinc-900 overflow-x-hidden">
      <SiteNavbar />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 flex flex-col items-center justify-center text-center px-4 w-full bg-zinc-50 overflow-hidden">
          <MeshGradient intensity="light" />
          <GradientOrb color="orange" size="xl" blur="strong" className="-top-16 right-1/4 opacity-30" />
          <GradientOrb color="peach" size="lg" blur="strong" className="bottom-0 left-1/4 opacity-30" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
              <HelpCircle className="w-3.5 h-3.5 mr-2" />
              Help Center
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-zinc-950 mb-6 leading-[1.05]">
              Questions?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-orange-400">
                We&apos;ve got answers.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Everything you need to know about Talira&apos;s no-code AI voice agents — the platform,
              integrations, phone numbers, and the 100+ languages we speak. Can&apos;t find it? Our team
              is one message away.
            </p>
          </div>
        </section>

        {/* ================= FAQ + CONTACT ================= */}
        <FaqExplorer />

        {/* ================= FINAL CTA ================= */}
        <section className="relative overflow-hidden bg-zinc-50 py-24 border-t border-zinc-100">
          <BackgroundEffects variant="cta" />
          <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
              <Sparkles className="w-3 h-3 mr-2" />
              Ready when you are
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Still weighing it up?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">
                Let&apos;s talk it through.
              </span>
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Book a quick call and we&apos;ll map out exactly how a Talira voice agent would work for
              your business — no pressure, no code, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#F25C22] rounded-full shadow-[0_10px_30px_rgba(242,92,34,0.35)] hover:bg-[#e04d15] transition-all hover:-translate-y-0.5"
              >
                Book a call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-zinc-700 bg-white border border-zinc-200 rounded-full shadow-sm hover:bg-zinc-50 transition-all"
              >
                Explore features
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
