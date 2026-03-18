import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Voice Agent Pricing South Florida | Talira & Innovat3 Solutions',
  description: 'Transparent, enterprise-grade Voice AI pricing packages for Miami, Fort Lauderdale, and West Palm Beach businesses. See the true cost of scaling with conversational AI.',
  keywords: 'Voice AI pricing packages, South Florida AI Automation cost, Talira AI subscription, custom voice agent pricing, Miami AI agency',
  openGraph: {
    title: 'AI Voice Agent Pricing South Florida | Talira',
    description: 'Transparent, enterprise-grade Voice AI pricing packages for Miami, Fort Lauderdale, and West Palm Beach businesses. See the true cost of scaling with conversational AI.',
    type: 'website',
  }
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
