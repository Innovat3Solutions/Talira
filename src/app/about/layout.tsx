import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voice AI Agents South Florida | About Talira & Innovat3 Solutions',
  description: 'Talira, powered by Innovat3 Solutions in Miami, builds advanced CRM platforms with integrated voice AI agents to automate and scale your business operations.',
  openGraph: {
    title: 'Voice AI Agents South Florida | About Talira & Innovat3 Solutions',
    description: 'Talira, powered by Innovat3 Solutions in Miami, builds advanced CRM platforms with integrated voice AI agents to automate and scale your business operations.',
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
