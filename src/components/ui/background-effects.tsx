"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientOrbProps {
  className?: string
  color?: "orange" | "peach" | "coral" | "amber"
  size?: "sm" | "md" | "lg" | "xl"
  blur?: "soft" | "medium" | "strong"
}

const colorMap = {
  orange: "bg-gradient-to-br from-orange-400/40 via-orange-300/30 to-orange-200/20",
  peach: "bg-gradient-to-br from-orange-200/50 via-orange-100/40 to-amber-50/30",
  coral: "bg-gradient-to-br from-[#F25C22]/30 via-orange-300/25 to-orange-100/15",
  amber: "bg-gradient-to-br from-amber-300/35 via-amber-200/25 to-yellow-100/15",
}

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
  xl: "w-[500px] h-[500px]",
}

const blurMap = {
  soft: "blur-[60px]",
  medium: "blur-[80px]",
  strong: "blur-[120px]",
}

export function GradientOrb({
  className,
  color = "peach",
  size = "lg",
  blur = "medium",
}: GradientOrbProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full pointer-events-none",
        colorMap[color],
        sizeMap[size],
        blurMap[blur],
        className
      )}
    />
  )
}

interface BackgroundEffectsProps {
  variant?: "hero" | "section" | "cta" | "feature"
  className?: string
  children?: ReactNode
}

export function BackgroundEffects({
  variant = "section",
  className,
  children,
}: BackgroundEffectsProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Background gradient layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {variant === "hero" && (
          <>
            {/* Top center large peach gradient */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px]"
              style={{
                background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 220, 200, 0.6) 0%, rgba(255, 245, 235, 0.3) 40%, transparent 70%)",
              }}
            />
            {/* Left orb */}
            <GradientOrb
              color="coral"
              size="xl"
              blur="strong"
              className="-top-20 -left-40"
            />
            {/* Right orb */}
            <GradientOrb
              color="peach"
              size="xl"
              blur="strong"
              className="top-20 -right-40"
            />
            {/* Center accent */}
            <GradientOrb
              color="orange"
              size="lg"
              blur="strong"
              className="top-[30%] left-1/2 -translate-x-1/2"
            />
          </>
        )}

        {variant === "section" && (
          <>
            {/* Subtle side orbs */}
            <GradientOrb
              color="peach"
              size="lg"
              blur="strong"
              className="-top-20 -left-48"
            />
            <GradientOrb
              color="coral"
              size="md"
              blur="strong"
              className="bottom-0 -right-32"
            />
          </>
        )}

        {variant === "cta" && (
          <>
            {/* Warm gradient wash */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(255, 235, 220, 0.5) 0%, rgba(255, 250, 245, 0.3) 50%, rgba(255, 240, 225, 0.4) 100%)",
              }}
            />
            {/* Central orb */}
            <GradientOrb
              color="coral"
              size="xl"
              blur="strong"
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            {/* Top accent */}
            <GradientOrb
              color="amber"
              size="md"
              blur="medium"
              className="-top-10 left-1/4"
            />
          </>
        )}

        {variant === "feature" && (
          <>
            {/* Asymmetric orbs for visual interest */}
            <GradientOrb
              color="peach"
              size="xl"
              blur="strong"
              className="top-0 right-0 translate-x-1/2 -translate-y-1/2"
            />
            <GradientOrb
              color="coral"
              size="lg"
              blur="strong"
              className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Floating animated orbs for extra visual polish
export function FloatingOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Slow floating orbs */}
      <div
        className="absolute w-64 h-64 rounded-full blur-[100px] bg-gradient-to-br from-orange-200/30 to-amber-100/20 animate-float-slow"
        style={{ top: '10%', left: '5%' }}
      />
      <div
        className="absolute w-80 h-80 rounded-full blur-[120px] bg-gradient-to-br from-[#F25C22]/20 to-orange-200/15 animate-float-slower"
        style={{ top: '60%', right: '10%' }}
      />
      <div
        className="absolute w-48 h-48 rounded-full blur-[80px] bg-gradient-to-br from-amber-300/25 to-orange-100/20 animate-float-medium"
        style={{ bottom: '20%', left: '15%' }}
      />
    </div>
  )
}

// Mesh gradient background
export function MeshGradient({
  className,
  intensity = "medium"
}: {
  className?: string
  intensity?: "light" | "medium" | "strong"
}) {
  const opacityMap = {
    light: 0.15,
    medium: 0.25,
    strong: 0.4,
  }

  const opacity = opacityMap[intensity]

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        background: `
          radial-gradient(at 0% 0%, rgba(255, 200, 150, ${opacity}) 0%, transparent 50%),
          radial-gradient(at 100% 0%, rgba(255, 180, 130, ${opacity * 0.8}) 0%, transparent 50%),
          radial-gradient(at 100% 100%, rgba(255, 220, 180, ${opacity * 0.6}) 0%, transparent 50%),
          radial-gradient(at 0% 100%, rgba(255, 190, 140, ${opacity * 0.7}) 0%, transparent 50%)
        `,
      }}
    />
  )
}
