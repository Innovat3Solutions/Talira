"use client"

import { useState, useEffect } from "react"
import { Phone, Headset, Mic, PhoneOff, Volume2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const transcriptMessages = [
  { speaker: "agent", text: "Hi! Thanks for calling Talira. How can I help you today?" },
  { speaker: "customer", text: "Hi, I'd like to schedule an appointment for next week." },
  { speaker: "agent", text: "Of course! I can help with that. Let me check our availability..." },
  { speaker: "agent", text: "We have openings on Tuesday at 2 PM or Thursday at 10 AM. Which works better?" },
  { speaker: "customer", text: "Thursday at 10 AM sounds perfect." },
  { speaker: "agent", text: "Great! I've booked you for Thursday at 10 AM. You'll receive a confirmation shortly." },
]

export function TierSection() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [callDuration, setCallDuration] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Timer for call duration
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Show messages one by one
    let messageIndex = 0
    let currentTimeout: ReturnType<typeof setTimeout>
    let isMounted = true

    const showNextMessage = () => {
      if (!isMounted) return

      if (messageIndex < transcriptMessages.length) {
        setIsTyping(true)
        currentTimeout = setTimeout(() => {
          if (!isMounted) return
          setVisibleMessages((prev) => [...prev, messageIndex])
          setIsTyping(false)
          messageIndex++
          currentTimeout = setTimeout(showNextMessage, 2000)
        }, 1200)
      } else {
        // Reset and loop
        currentTimeout = setTimeout(() => {
          if (!isMounted) return
          setVisibleMessages([])
          messageIndex = 0
          currentTimeout = setTimeout(showNextMessage, 1000)
        }, 3000)
      }
    }

    currentTimeout = setTimeout(showNextMessage, 1000)
    
    return () => {
      isMounted = false
      clearTimeout(currentTimeout)
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-bold tracking-widest text-primary uppercase">Agent</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Voice AI that is in a <span className="text-primary">tier of its own</span></h2>
          <p className="text-lg text-muted-foreground">
            Deploy scalable voice agents ready to resolve over 50% of inbound volume and reach entirely custom outbound campaigns.
          </p>

          <div className="pt-6 space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold tracking-tight flex items-center gap-3">
                  Outbound calls
                  <Badge className="bg-primary text-primary-foreground border-0 shadow-sm">NEW!</Badge>
                </h4>
                <p className="text-muted-foreground mt-1">Generate high quality appointments to lower acquisition costs.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Headset className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold tracking-tight">Inbound calls</h4>
                <p className="text-muted-foreground mt-1">Fully automate tier 1 customer support handling and reduce overall costs quickly.</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all">
              Book a Demo
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 w-full max-w-[300px] mx-auto hidden md:block">
            {/* Phone Frame */}
            <div className="w-full h-[600px] rounded-[3rem] border-8 border-zinc-900 bg-zinc-900 shadow-2xl overflow-hidden relative">
              {/* Top notch / Dynamic Island */}
              <div className="absolute top-0 inset-x-0 h-8 flex justify-center z-30">
                <div className="w-28 h-7 bg-black rounded-b-2xl flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  <div className="w-10 h-3 rounded-full bg-zinc-800"></div>
                </div>
              </div>

              {/* Phone Screen Content */}
              <div className="w-full h-full bg-gradient-to-b from-zinc-50 to-white flex flex-col">

                {/* Call Header */}
                <div className="bg-[#F25C22] pt-10 pb-4 px-4 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden ring-2 ring-white/30">
                      <Image src="/talira-icon.png" alt="Talira AI" width={32} height={32} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Talira AI Agent</p>
                      <p className="text-[11px] text-white/80">Active call</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-white/90">{formatTime(callDuration)}</p>
                      <div className="flex gap-0.5 mt-1 justify-end">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 bg-white/80 rounded-full"
                            animate={{
                              height: [4, 12, 6, 16, 4][i % 5] + Math.random() * 8,
                            }}
                            transition={{
                              duration: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse",
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transcript Area */}
                <div className="flex-1 overflow-hidden px-3 py-4">
                  <div className="h-full overflow-y-auto space-y-3 scrollbar-hide">
                    <AnimatePresence>
                      {visibleMessages.map((index) => {
                        const msg = transcriptMessages[index]
                        if (!msg) return null;

                        const isAgent = msg.speaker === "agent"
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${isAgent ? 'justify-start' : 'justify-end'}`}
                          >
                            <div
                              className={`max-w-[85%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${
                                isAgent
                                  ? 'bg-zinc-100 text-zinc-800 rounded-tl-sm'
                                  : 'bg-[#F25C22] text-white rounded-tr-sm'
                              }`}
                            >
                              <p className={`text-[9px] font-semibold mb-0.5 ${isAgent ? 'text-[#F25C22]' : 'text-white/80'}`}>
                                {isAgent ? 'AI Agent' : 'Customer'}
                              </p>
                              {msg.text}
                            </div>
                          </motion.div>
                        )
                      })}
                    </AnimatePresence>

                    {/* Typing indicator */}
                    <AnimatePresence>
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex justify-start"
                        >
                          <div className="bg-zinc-100 px-4 py-2.5 rounded-2xl rounded-tl-sm flex gap-1">
                            <motion.span
                              className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                            />
                            <motion.span
                              className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
                            />
                            <motion.span
                              className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Live Transcription Label */}
                <div className="px-4 py-2 bg-zinc-50 border-t border-zinc-100">
                  <div className="flex items-center justify-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-medium text-zinc-500">Live Transcription</span>
                  </div>
                </div>

                {/* Call Controls */}
                <div className="bg-white border-t border-zinc-100 px-4 py-4 pb-6">
                  <div className="flex items-center justify-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors">
                      <Mic className="w-5 h-5" />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                      <PhoneOff className="w-6 h-6" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors">
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
