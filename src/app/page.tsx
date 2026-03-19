"use client"

import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid"
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"
import { LogoCloud } from "@/components/ui/logo-cloud-3"
import { TierSection } from "@/components/blocks/tier-section"
import { LanguageMapSection } from "@/components/blocks/language-map-section"
import PricingWithChart from "@/components/blocks/pricing-with-chart"
import { Features as BenefitsSection } from "@/components/blocks/features-8"
import { SiteFooter } from "@/components/ui/site-footer"
import { SiteNavbar } from "@/components/ui/site-navbar"
import { InteractiveHeroForm } from "@/components/ui/interactive-hero-form"
import { AnimatedTranscriptionTablet } from "@/components/ui/animated-transcription-tablet"
import { AnimatedTranscriptionPhone } from "@/components/ui/animated-transcription-phone"
import { BackgroundEffects, FloatingOrbs, GradientOrb, MeshGradient } from "@/components/ui/background-effects"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { Calendar, Code, FileText, User, Clock } from "lucide-react"

// Feature icons for features-8
import Image from "next/image"

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
];

const timelineData = [
  {
    id: 1,
    title: "Customer Support",
    date: "24/7",
    content: "Handle tier-1 support queries, troubleshoot issues, and guide users to solutions instantly.",
    category: "Support",
    icon: User,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 94,
    industries: ["E-commerce", "SaaS", "Telecom"],
  },
  {
    id: 2,
    title: "Sales",
    date: "Active",
    content: "Qualify leads, answer pricing questions, and guide prospects through the sales funnel.",
    category: "Sales",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 92,
    industries: ["Real Estate", "Insurance", "B2B Services"],
  },
  {
    id: 3,
    title: "After Hours",
    date: "Always On",
    content: "Capture leads and assist callers outside of regular business hours, never missing an opportunity.",
    category: "Availability",
    icon: Clock,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 98,
    industries: ["Medical Clinics", "Plumbing", "Legal Services"],
  },
  {
    id: 4,
    title: "Follow-up Calls",
    date: "Proactive",
    content: "Automatically reach out to previous customers for feedback, renewals, or upselling.",
    category: "Outreach",
    icon: Calendar,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 89,
    industries: ["Auto Dealerships", "Fitness", "Dentistry"],
  },
  {
    id: 5,
    title: "Appointment Setting",
    date: "Automated",
    content: "Seamlessly schedule, reschedule, and cancel appointments with direct calendar integration.",
    category: "Scheduling",
    icon: Code,
    relatedIds: [4, 1],
    status: "completed" as const,
    energy: 96,
    industries: ["Salons", "Consulting", "Healthcare"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteNavbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 flex flex-col items-center justify-center text-center px-4 w-full overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Main radial gradient */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px]"
              style={{
                background: "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(255, 200, 170, 0.5) 0%, rgba(255, 230, 210, 0.3) 30%, transparent 60%)",
              }}
            />
            {/* Floating orbs */}
            <GradientOrb color="coral" size="xl" blur="strong" className="-top-32 -left-48 opacity-70" />
            <GradientOrb color="peach" size="xl" blur="strong" className="top-10 -right-56 opacity-60" />
            <GradientOrb color="amber" size="lg" blur="strong" className="top-[40%] left-[10%] opacity-40" />
            <GradientOrb color="orange" size="md" blur="strong" className="top-[60%] right-[15%] opacity-30" />
          </div>
          <FloatingOrbs className="z-0" />

          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-8">
            {/* Live Demo Badge */}
            <div className="inline-flex items-center justify-center px-3 py-1 mb-8 text-xs font-semibold text-white bg-zinc-900 rounded-full shadow-md">
              Live Demo
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold tracking-tight text-zinc-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
              <span className="block md:inline">Transform Your </span>
              <span className="flex justify-center md:inline-block min-h-[1.5em] md:min-h-0 my-1 md:my-0">
                <TypingAnimation />
              </span>
              <br className="hidden md:block" />
              <span className="block md:inline">
                Operations <br className="hidden md:block"/>
                with Scalable AI Voice Agents
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base text-zinc-600 mb-10 max-w-xl mx-auto leading-relaxed font-medium">
              We integrate AI voice agents directly into your business:<br className="hidden md:block"/>
              never miss a call again and convert more leads
            </p>

            {/* Input Form */}
            <div className="w-full max-w-4xl mx-auto mb-6 relative z-30">
              <InteractiveHeroForm />
            </div>

            {/* Disclaimer Text */}
            <p className="text-xs text-zinc-500 font-medium tracking-wide">
              Can't believe? <span className="text-zinc-800 font-bold border-b border-zinc-800 pb-[1px]">Try now a free test call</span> — The call will automatically end after 5 minutes
            </p>
          </div>

          {/* Animated Hero Device Graphics */}
          <div className="relative mt-16 md:mt-24 w-full max-w-5xl mx-auto px-4 lg:px-8 z-40">
            {/* Desktop Tablet View */}
            <div className="hidden md:block">
              <AnimatedTranscriptionTablet />
            </div>
            {/* Mobile iPhone View */}
            <div className="block md:hidden">
              <AnimatedTranscriptionPhone />
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
            <LogoCloud logos={logos} />
          </div>
        </section>

        {/* Voice AI Tier Section */}
        <BackgroundEffects variant="feature">
          <TierSection />
        </BackgroundEffects>

        {/* Language Map & Savings Section */}
        <section className="relative overflow-hidden">
          <GradientOrb color="amber" size="lg" blur="strong" className="top-20 -left-32 opacity-40" />
          <GradientOrb color="peach" size="md" blur="strong" className="bottom-10 -right-20 opacity-35" />
          <div className="relative z-10">
            <LanguageMapSection />
          </div>
        </section>

        {/* Bento Grid Features */}
        <section id="features" className="py-24 relative overflow-hidden">
          <MeshGradient intensity="light" />
          <div className="relative z-10">
            <FeaturesSectionWithBentoGrid />
          </div>
        </section>

        {/* Benefits Section */}
        <BackgroundEffects variant="section">
          <BenefitsSection />
        </BackgroundEffects>

        {/* Instances Timeline */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto relative overflow-hidden rounded-3xl bg-muted/30">
            <GradientOrb color="peach" size="xl" blur="strong" className="top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-50" />
            <GradientOrb color="coral" size="lg" blur="strong" className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3 opacity-40" />
            <div className="relative z-10">
              <RadialOrbitalTimeline timelineData={timelineData} />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <BackgroundEffects variant="cta" className="py-24">
          <PricingWithChart />
        </BackgroundEffects>

      </main>

      <SiteFooter />
    </div>
  )
}
