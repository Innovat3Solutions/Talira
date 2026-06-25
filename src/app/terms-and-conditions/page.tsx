import Link from "next/link";
import { BackgroundEffects, GradientOrb, MeshGradient } from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { FileText, ArrowRight, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Talira AI",
  description:
    "The terms governing your use of Talira, the AI voice agent platform operated, designed, and powered by Innovat3 Solutions.",
  openGraph: {
    title: "Terms and Conditions | Talira AI",
    description:
      "The terms governing your use of Talira, operated, designed, and powered by Innovat3 Solutions.",
  },
};

const LAST_UPDATED = "June 25, 2026";

// Section anchors for the sticky table of contents.
const sections = [
  { id: "agreement", title: "1. Agreement to Terms" },
  { id: "service", title: "2. The Service" },
  { id: "eligibility", title: "3. Eligibility & Accounts" },
  { id: "acceptable-use", title: "4. Acceptable Use" },
  { id: "telephony-compliance", title: "5. Calling & Compliance" },
  { id: "fees", title: "6. Fees & Payment" },
  { id: "customer-data", title: "7. Customer Data" },
  { id: "intellectual-property", title: "8. Intellectual Property" },
  { id: "third-party", title: "9. Third-Party Services" },
  { id: "disclaimers", title: "10. Disclaimers" },
  { id: "liability", title: "11. Limitation of Liability" },
  { id: "indemnification", title: "12. Indemnification" },
  { id: "termination", title: "13. Termination" },
  { id: "governing-law", title: "14. Governing Law" },
  { id: "changes", title: "15. Changes to These Terms" },
  { id: "contact", title: "16. Contact Us" },
];

export default function TermsAndConditionsPage() {
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
              <FileText className="w-3 h-3 mr-2" />
              Terms and Conditions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.05]">
              The rules of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">road.</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-medium">
              These terms govern your use of Talira — a product operated, designed, and powered by Innovat3 Solutions. Please read them carefully.
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
                  <Section id="agreement" title="1. Agreement to Terms">
                    <p>
                      These Terms and Conditions (&ldquo;Terms&rdquo;) form a legal agreement between you and{" "}
                      <strong>Innovat3 Solutions</strong> (&ldquo;Innovat3 Solutions,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), the operator of the Talira AI voice agent platform (&ldquo;Talira&rdquo; or the &ldquo;Service&rdquo;). The Service — including the platform, the AI voice agents, and the team behind them — is designed and powered by Innovat3 Solutions.
                    </p>
                    <p>
                      By accessing our website, requesting a demo, or using the Service, you agree to be bound by these Terms and our{" "}
                      <Link href="/privacy-policy" className="text-[#F25C22] font-semibold hover:underline">Privacy Policy</Link>. If you do not agree, do not use the Service.
                    </p>
                  </Section>

                  <Section id="service" title="2. The Service">
                    <p>
                      Talira provides done-for-you AI voice agents that handle inbound and outbound phone calls — booking appointments, qualifying and following up on leads, answering questions, collecting reviews, and integrating with the tools you already use. Our team designs, builds, integrates, and maintains the agent on your behalf.
                    </p>
                    <p>
                      We may modify, enhance, or discontinue features of the Service at any time. We will make reasonable efforts to notify you of material changes that affect your use.
                    </p>
                  </Section>

                  <Section id="eligibility" title="3. Eligibility & Accounts">
                    <p>
                      You must be at least 18 years old and able to form a binding contract to use the Service. If you use the Service on behalf of a business, you represent that you are authorized to bind that business to these Terms.
                    </p>
                    <p>
                      You are responsible for maintaining the confidentiality of any account credentials and for all activity that occurs under your account.
                    </p>
                  </Section>

                  <Section id="acceptable-use" title="4. Acceptable Use">
                    <p>You agree not to use the Service to:</p>
                    <ul>
                      <li>Violate any applicable law, regulation, or third-party right.</li>
                      <li>Make calls or send communications that are unlawful, deceptive, harassing, or fraudulent.</li>
                      <li>Transmit spam, malware, or other harmful content.</li>
                      <li>Attempt to gain unauthorized access to the Service or its systems.</li>
                      <li>Reverse engineer, resell, or misuse the Service except as expressly permitted.</li>
                      <li>Impersonate any person or entity, or misrepresent your identity or affiliation in a manner intended to deceive.</li>
                    </ul>
                  </Section>

                  <Section id="telephony-compliance" title="5. Calling & Compliance">
                    <p>
                      You are solely responsible for ensuring that calls and messages placed or received through your agent comply with all applicable laws — including those governing telemarketing, automated dialing, call recording, consent, and do-not-call requirements (such as the TCPA and applicable state and international laws).
                    </p>
                    <p>
                      <strong>You are responsible for obtaining all necessary consents</strong> from individuals contacted through or interacting with your agent, including any consent required to record or transcribe calls. We provide the platform; you control the content, recipients, and purpose of the calls you run through it.
                    </p>
                  </Section>

                  <Section id="fees" title="6. Fees & Payment">
                    <p>
                      Fees for the Service are described in your order, plan, or written agreement with us. Unless stated otherwise, fees are billed in advance, are non-refundable except as required by law, and may exclude usage-based charges such as telephony and third-party costs.
                    </p>
                    <p>
                      We may update pricing on a going-forward basis with reasonable notice. Failure to pay may result in suspension or termination of the Service.
                    </p>
                  </Section>

                  <Section id="customer-data" title="7. Customer Data">
                    <p>
                      You retain ownership of the data you provide and the data generated by your customers&apos; interactions with your agent (&ldquo;Customer Data&rdquo;). You grant us a limited license to process Customer Data solely to provide, maintain, and improve the Service, as described in our{" "}
                      <Link href="/privacy-policy" className="text-[#F25C22] font-semibold hover:underline">Privacy Policy</Link>.
                    </p>
                    <p>
                      You represent that you have all rights and consents necessary to provide Customer Data to us and to allow us to process it for these purposes.
                    </p>
                  </Section>

                  <Section id="intellectual-property" title="8. Intellectual Property">
                    <p>
                      The Service, the Talira platform, and all related software, designs, branding, and content are owned by Innovat3 Solutions and its licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable right to use the Service in accordance with these Terms.
                    </p>
                    <p>
                      &ldquo;Talira,&rdquo; &ldquo;Innovat3 Solutions,&rdquo; and related logos are marks of Innovat3 Solutions. You may not use them without our prior written permission.
                    </p>
                  </Section>

                  <Section id="third-party" title="9. Third-Party Services">
                    <p>
                      The Service integrates with third-party platforms such as telephony providers, AI models, calendars, and CRMs. Your use of those services is subject to their own terms, and we are not responsible for their availability, performance, or practices.
                    </p>
                  </Section>

                  <Section id="disclaimers" title="10. Disclaimers">
                    <p>
                      The Service is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. AI-generated responses may contain errors, and we do not warrant that the Service will be uninterrupted, error-free, or that it will meet every requirement.
                    </p>
                  </Section>

                  <Section id="liability" title="11. Limitation of Liability">
                    <p>
                      To the maximum extent permitted by law, Innovat3 Solutions and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or goodwill, arising out of or related to your use of the Service.
                    </p>
                    <p>
                      Our total liability for any claim arising out of or relating to these Terms or the Service will not exceed the amount you paid us for the Service in the twelve (12) months preceding the event giving rise to the claim.
                    </p>
                  </Section>

                  <Section id="indemnification" title="12. Indemnification">
                    <p>
                      You agree to indemnify and hold harmless Innovat3 Solutions, its affiliates, and their personnel from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising out of your use of the Service, your Customer Data, your calls or communications, or your violation of these Terms or applicable law.
                    </p>
                  </Section>

                  <Section id="termination" title="13. Termination">
                    <p>
                      You may stop using the Service at any time. We may suspend or terminate your access if you breach these Terms, fail to pay, or use the Service in a way that creates legal or security risk. Upon termination, your right to use the Service ends, though provisions that by their nature should survive will continue to apply.
                    </p>
                  </Section>

                  <Section id="governing-law" title="14. Governing Law">
                    <p>
                      These Terms are governed by the laws of the State of Florida, United States, without regard to its conflict-of-laws principles. You agree to the exclusive jurisdiction of the state and federal courts located in Florida for any dispute arising out of or relating to these Terms or the Service.
                    </p>
                  </Section>

                  <Section id="changes" title="15. Changes to These Terms">
                    <p>
                      We may update these Terms from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date above. Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms.
                    </p>
                  </Section>

                  <Section id="contact" title="16. Contact Us">
                    <p>If you have questions about these Terms, contact us:</p>
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
              Want the full picture? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">Read our Privacy Policy.</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-xl mx-auto leading-relaxed">
              See how Innovat3 Solutions handles your data, or reach out to our team with any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#F25C22] rounded-full shadow-[0_10px_30px_rgba(242,92,34,0.35)] hover:bg-[#e04d15] transition-all hover:-translate-y-0.5"
              >
                Privacy Policy
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
