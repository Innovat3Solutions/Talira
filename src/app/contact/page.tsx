import Link from "next/link";
import { Metadata } from "next";
import {
  BackgroundEffects,
  GradientOrb,
  MeshGradient,
} from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { ContactForm } from "@/components/ui/contact-form";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  PhoneCall,
  Plug,
  Headphones,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Talira AI Miami",
  description:
    "Get in touch with Talira AI. Based in Miami, FL and serving South Florida, we build, deploy, and manage AI voice agents for your business. Ask us anything — book a demo, pricing, integrations, or support.",
  openGraph: {
    title: "Contact Us | Talira AI Miami",
    description:
      "Get in touch with Talira AI. Based in Miami, FL and serving South Florida, we build and manage AI voice agents for your business.",
  },
};

// TODO: replace these placeholders with real contact details.
const CONTACT = {
  email: "hello@innovat3solutions.com", // placeholder — update with real inbox
  phoneDisplay: "(305) 000-0000", // placeholder — Miami area code
  phoneHref: "tel:+13050000000", // placeholder
  location: "Miami, FL — South Florida",
  hours: "Mon–Fri, 9am–6pm ET",
};

const WHAT_WE_DO = [
  {
    icon: PhoneCall,
    title: "AI voice agents",
    description:
      "Human-sounding agents that answer, qualify, and book — so you never miss a call.",
  },
  {
    icon: Plug,
    title: "Done-for-you integrations",
    description:
      "We wire Talira into your CRM, calendar, and tools, and manage it end to end.",
  },
  {
    icon: Headphones,
    title: "Ongoing support",
    description:
      "A local South Florida team that keeps your agents tuned as your business grows.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNavbar />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-20 flex flex-col items-center justify-center text-center px-4 w-full overflow-hidden bg-zinc-50">
          <MeshGradient intensity="medium" />
          <GradientOrb color="orange" size="xl" blur="strong" className="-top-10 -right-20 opacity-30" />
          <GradientOrb color="peach" size="lg" blur="strong" className="bottom-0 left-10 opacity-40" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center mt-10">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
              <MessageCircle className="w-3 h-3 mr-2" />
              Contact Us
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.05]">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">
                talk.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Questions about Talira, a demo, pricing, or connecting it to your
              systems? We're a Miami-based team that builds and manages AI voice
              agents — ask us anything and a real person will get back to you.
            </p>
          </div>
        </section>

        {/* ================= CONTACT: INFO + FORM ================= */}
        <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
          <GradientOrb color="peach" size="lg" blur="strong" className="top-20 -left-24 opacity-20" />

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              {/* Left: where we are + how to reach us */}
              <div className="lg:col-span-2">
                <span className="inline-flex items-center gap-2 text-[#F25C22] text-xs font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Get in touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
                  Reach us directly
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-8">
                  Prefer to reach out the old-fashioned way? Here's where to find
                  us. We typically reply within one business day.
                </p>

                <div className="space-y-4">
                  <ContactRow
                    icon={Mail}
                    label="Email"
                    value={CONTACT.email}
                    href={`mailto:${CONTACT.email}`}
                  />
                  <ContactRow
                    icon={Phone}
                    label="Phone"
                    value={CONTACT.phoneDisplay}
                    href={CONTACT.phoneHref}
                  />
                  <ContactRow
                    icon={MapPin}
                    label="Location"
                    value={CONTACT.location}
                  />
                  <ContactRow
                    icon={Clock}
                    label="Hours"
                    value={CONTACT.hours}
                  />
                </div>

                {/* What we do */}
                <div className="mt-10 pt-8 border-t border-zinc-100">
                  <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-5">
                    What we do
                  </h3>
                  <div className="space-y-5">
                    {WHAT_WE_DO.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="flex gap-4">
                          <div className="w-11 h-11 bg-[#FDF8F5] border border-orange-100 rounded-xl flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-[#F25C22]" />
                          </div>
                          <div>
                            <h4 className="text-[15px] font-bold text-zinc-900 mb-0.5">
                              {item.title}
                            </h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right: the form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-20 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-zinc-950 border border-zinc-800 px-8 py-14 md:px-16 md:py-20 text-center">
              <BackgroundEffects variant="section" className="!absolute inset-0" />
              <GradientOrb color="coral" size="xl" blur="strong" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 max-w-2xl leading-[1.1]">
                  Rather hear it in action?
                </h2>
                <p className="text-lg text-zinc-400 mb-9 max-w-xl leading-relaxed">
                  Try a live demo with Talira or explore pricing — then we'll
                  build and manage the real thing for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/"
                    className="group inline-flex items-center gap-2 bg-[#F25C22] text-white hover:bg-[#e04c10] rounded-full font-bold px-8 py-4 text-base shadow-[0_4px_14px_rgba(242,92,34,0.3)] transition-all transform hover:-translate-y-0.5"
                  >
                    Try the live demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-white hover:text-[#F25C22] font-bold px-7 py-4 text-base rounded-full border border-zinc-700 bg-zinc-900/60 hover:border-orange-500/50 transition-colors"
                  >
                    View Pricing
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

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 group">
      <div className="w-11 h-11 bg-white border border-zinc-200 shadow-sm rounded-xl flex items-center justify-center shrink-0 group-hover:border-[#F25C22] transition-colors">
        <Icon className="w-5 h-5 text-[#F25C22]" />
      </div>
      <div>
        <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-[15px] font-semibold text-zinc-900 group-hover:text-[#F25C22] transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
