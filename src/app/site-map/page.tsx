import Link from "next/link";
import { Metadata } from "next";
import {
  GradientOrb,
  MeshGradient,
} from "@/components/ui/background-effects";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { industries } from "@/data/industries";
import {
  Home,
  Layers,
  Building2,
  BookOpen,
  ArrowUpRight,
  Map,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap | Talira AI Miami",
  description:
    "Browse every page on the Talira AI website — product, industries, pricing, resources, and legal — all in one place.",
};

type LinkItem = { label: string; href: string };
type LinkGroup = { title: string; icon: React.ElementType; links: LinkItem[] };

const industryLinks: LinkItem[] = Object.entries(industries).map(
  ([slug, industry]) => ({
    label: industry.name,
    href: `/industries/${slug}`,
  })
);

const GROUPS: LinkGroup[] = [
  {
    title: "Main",
    icon: Home,
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Product",
    icon: Layers,
    links: [
      { label: "Integrations", href: "/integrations" },
      { label: "No-code Platform", href: "/no-code-platform" },
      { label: "Phone Numbers", href: "/phone-numbers" },
      { label: "Available Languages", href: "/available-languages" },
    ],
  },
  {
    title: "Industries",
    icon: Building2,
    links: industryLinks,
  },
  {
    title: "Resources & Legal",
    icon: BookOpen,
    links: [
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNavbar />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative pt-24 pb-14 lg:pt-36 lg:pb-16 flex flex-col items-center justify-center text-center px-4 w-full overflow-hidden bg-zinc-50">
          <MeshGradient intensity="medium" />
          <GradientOrb color="orange" size="xl" blur="strong" className="-top-10 -right-20 opacity-30" />
          <GradientOrb color="peach" size="lg" blur="strong" className="bottom-0 left-10 opacity-40" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center mt-10">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold text-[#F25C22] uppercase tracking-widest bg-white border border-orange-200 rounded-full shadow-[0_4px_14px_rgba(242,92,34,0.1)]">
              <Map className="w-3 h-3 mr-2" />
              Sitemap
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.05]">
              Everything,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C22] to-[#ffb347]">
                in one place.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Every page on the Talira site, organized by section. Looking for
              something specific? It's all right here.
            </p>
          </div>
        </section>

        {/* ================= LINK GRID ================= */}
        <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
          <GradientOrb color="peach" size="lg" blur="strong" className="top-20 -left-24 opacity-20" />

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GROUPS.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="bg-white border border-zinc-200/80 shadow-lg shadow-zinc-200/40 rounded-[2rem] p-7 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-[#FDF8F5] border border-orange-100 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#F25C22]" />
                      </div>
                      <h2 className="text-base font-bold text-zinc-900 tracking-tight">
                        {group.title}
                      </h2>
                    </div>
                    <ul className="space-y-1">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 -mx-3 text-[15px] font-medium text-zinc-600 hover:text-[#F25C22] hover:bg-[#FDF8F5] transition-colors"
                          >
                            {link.label}
                            <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-[#F25C22] transition-colors shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <p className="mt-10 text-center text-sm text-zinc-400 font-medium">
              Looking for the machine-readable version?{" "}
              <a
                href="/sitemap.xml"
                className="text-[#F25C22] hover:underline font-semibold"
              >
                View the XML sitemap
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
