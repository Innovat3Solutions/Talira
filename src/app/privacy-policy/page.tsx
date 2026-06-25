import Link from "next/link";
import { BackgroundEffects, GradientOrb, MeshGradient } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { ShieldCheck, ArrowRight, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Talira AI",
  description:
    "How Innovat3 Solutions, operator of Talira, collects, uses, and protects your personal information when you use our website and AI voice agent services.",
  openGraph: {
    title: "Privacy Policy | Talira AI",
    description:
      "How Innovat3 Solutions, operator of Talira, collects, uses, and protects your personal information.",
  },
};

const LAST_UPDATED = "June 25, 2026";

// Section anchors for the sticky table of contents.
const sections = [
  { id: "overview", title: "1. Overview" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Information" },
  { id: "call-recordings", title: "4. Call Recordings & Voice Data" },
  { id: "sharing", title: "5. How We Share Information" },
  { id: "cookies", title: "6. Cookies & Tracking" },
  { id: "retention", title: "7. Data Retention" },
  { id: "security", title: "8. Data Security" },
  { id: "your-rights", title: "9. Your Privacy Rights" },
  { id: "third-parties", title: "10. Third-Party Services" },
  { id: "children", title: "11. Children's Privacy" },
  { id: "changes", title: "12. Changes to This Policy" },
  { id: "contact", title: "13. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNavbar />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 flex flex-col items-center justify-center text-center px-4 w-full overflow-hidden bg-zinc-50">
          <MeshGradient intensity="medium" />
          <GradientOrb color="orange" size="xl" blur="strong" className="-top-10 -right-20 opacity-30" />
          <GradientOrb color="peach" size="lg" blur="strong" className="bottom-0 left-10 opacity-40" />

          <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center mt-6">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
              <ShieldCheck className="w-3 h-3 mr-2" />
              Privacy Policy
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.05]">
              Your privacy, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">protected.</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-medium">
              This policy explains how Talira — a product operated, designed, and powered by Innovat3 Solutions — handles the information you share with us.
            </p>

            <p className="mt-6 text-sm font-semibold text-zinc-500">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="relative bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sticky table of contents */}
              <aside className="lg:w-64 shrink-0">
                <div className="lg:sticky lg:top-28">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">On this page</p>
                  <nav className="flex flex-col gap-1 border-l border-zinc-200">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="text-sm font-medium text-zinc-500 hover:text-[#F25C22] hover:border-[#F25C22] border-l-2 border-transparent -ml-px pl-4 py-1.5 transition-colors"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Body */}
              <article className="flex-1 max-w-3xl">
                <div className="prose-legal space-y-12">
                  <Section id="overview" title="1. Overview">
                    <p>
                      Talira (&ldquo;Talira,&rdquo; the &ldquo;Service,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is owned and operated by{" "}
                      <strong>Innovat3 Solutions</strong>. Everything you see here — the platform, the AI voice agents, and the team behind them — is designed and powered by Innovat3 Solutions.
                    </p>
                    <p>
                      We respect your privacy and are committed to protecting your personal information. This Privacy Policy describes the information we collect when you visit our website, request a demo, or use our AI voice agent services, and how we use, share, and safeguard it.
                    </p>
                    <p>
                      By using our website or services, you agree to the practices described in this policy. If you do not agree, please do not use the Service.
                    </p>
                  </Section>

                  <Section id="information-we-collect" title="2. Information We Collect">
                    <p>We collect the following categories of information:</p>
                    <ul>
                      <li>
                        <strong>Information you provide.</strong> Your name, email address, phone number, company name, and any details you submit through our contact forms, demo requests, or onboarding process.
                      </li>
                      <li>
                        <strong>Call and conversation data.</strong> When you or your customers interact with a Talira AI voice agent, we process call audio, transcripts, and the outcomes of those conversations.
                      </li>
                      <li>
                        <strong>Usage and device data.</strong> IP address, browser type, device information, pages visited, and how you interact with our website — collected automatically through cookies and similar technologies.
                      </li>
                      <li>
                        <strong>Integration data.</strong> When you connect tools such as a calendar, CRM, or phone system, we access the data necessary to deliver the Service you requested.
                      </li>
                    </ul>
                  </Section>

                  <Section id="how-we-use" title="3. How We Use Information">
                    <p>We use the information we collect to:</p>
                    <ul>
                      <li>Provide, operate, and maintain the Talira platform and AI voice agents.</li>
                      <li>Build, configure, and continuously improve your agent and its workflows.</li>
                      <li>Respond to your inquiries, schedule demos, and provide customer support.</li>
                      <li>Send service updates, and — where permitted — marketing communications you can opt out of at any time.</li>
                      <li>Detect, prevent, and address fraud, abuse, and security issues.</li>
                      <li>Comply with our legal obligations and enforce our agreements.</li>
                    </ul>
                  </Section>

                  <Section id="call-recordings" title="4. Call Recordings & Voice Data">
                    <p>
                      Our Service involves AI-powered phone calls. Depending on your configuration and applicable law, calls handled by a Talira agent may be recorded and transcribed to operate the Service, improve agent performance, and maintain records of interactions.
                    </p>
                    <p>
                      <strong>You are responsible for ensuring that appropriate notice and consent are obtained</strong> from individuals on calls placed or received through your agent, in accordance with the call-recording and consent laws that apply in your jurisdiction. We provide tools to support compliance, but you remain the controller of the calls you run through your agent.
                    </p>
                  </Section>

                  <Section id="sharing" title="5. How We Share Information">
                    <p>We do not sell your personal information. We share information only in these circumstances:</p>
                    <ul>
                      <li>
                        <strong>Service providers.</strong> Trusted vendors who help us operate the Service — including telephony, speech, AI model, hosting, and analytics providers — under contractual confidentiality obligations.
                      </li>
                      <li>
                        <strong>Integrations you authorize.</strong> Systems you choose to connect, such as your calendar or CRM.
                      </li>
                      <li>
                        <strong>Legal requirements.</strong> When required by law, regulation, legal process, or to protect the rights, property, or safety of Innovat3 Solutions, our users, or the public.
                      </li>
                      <li>
                        <strong>Business transfers.</strong> In connection with a merger, acquisition, or sale of assets, subject to this policy.
                      </li>
                    </ul>
                  </Section>

                  <Section id="cookies" title="6. Cookies & Tracking">
                    <p>
                      We use cookies and similar technologies to operate our website, remember your preferences, and understand how the site is used. You can control cookies through your browser settings, though disabling them may affect some features.
                    </p>
                  </Section>

                  <Section id="retention" title="7. Data Retention">
                    <p>
                      We retain personal information for as long as needed to provide the Service, comply with our legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we delete or anonymize it.
                    </p>
                  </Section>

                  <Section id="security" title="8. Data Security">
                    <p>
                      We implement administrative, technical, and physical safeguards designed to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                    </p>
                  </Section>

                  <Section id="your-rights" title="9. Your Privacy Rights">
                    <p>
                      Depending on where you live, you may have the right to access, correct, delete, or restrict the use of your personal information, and to opt out of certain processing or marketing. To exercise these rights, contact us using the details below. We will respond in accordance with applicable law.
                    </p>
                  </Section>

                  <Section id="third-parties" title="10. Third-Party Services">
                    <p>
                      Our website and Service may link to or rely on third-party platforms. Their use of your information is governed by their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third parties.
                    </p>
                  </Section>

                  <Section id="children" title="11. Children's Privacy">
                    <p>
                      Our Service is intended for businesses and is not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us so we can remove it.
                    </p>
                  </Section>

                  <Section id="changes" title="12. Changes to This Policy">
                    <p>
                      We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date above. Material changes will be communicated where appropriate. Your continued use of the Service after changes take effect constitutes acceptance of the updated policy.
                    </p>
                  </Section>

                  <Section id="contact" title="13. Contact Us">
                    <p>
                      If you have questions about this Privacy Policy or how we handle your information, contact us:
                    </p>
                    <div className="not-prose mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                      <p className="text-sm font-bold text-zinc-900 mb-1">Innovat3 Solutions</p>
                      <p className="text-sm text-zinc-600 mb-4">Operator of Talira AI</p>
                      <a
                        href="mailto:contact@innovat3solutions.com"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#F25C22] hover:underline"
                      >
                        <Mail className="w-4 h-4" />
                        contact@innovat3solutions.com
                      </a>
                    </div>
                  </Section>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= CTA BAND ================= */}
        <section className="relative overflow-hidden bg-zinc-50 py-24 border-t border-zinc-100">
          <BackgroundEffects variant="cta" />
          <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Questions about your data? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">We&apos;re here.</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Read our Terms and Conditions, or reach out to the Innovat3 Solutions team directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/terms-and-conditions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#F25C22] rounded-full shadow-[0_10px_30px_rgba(242,92,34,0.35)] hover:bg-[#e04d15] transition-all hover:-translate-y-0.5"
              >
                Terms and Conditions
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:contact@innovat3solutions.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-zinc-700 bg-white border border-zinc-200 rounded-full shadow-sm hover:bg-zinc-50 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

// Reusable styled legal section with an anchor target.
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-4">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-zinc-600 [&_ul]:space-y-2.5 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:pl-1 [&_strong]:text-zinc-900 [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
