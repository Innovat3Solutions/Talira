"use client"

import { useState } from "react"
import { Settings } from "lucide-react"

export function SavingsSection() {
  const [volume, setVolume] = useState(5000)
  const [duration, setDuration] = useState(40)
  const [sms, setSms] = useState(true)

  // Calculate savings (mock logic for demo purposes)
  const calculateSavings = () => {
    const baseSavings = (volume / 1000) * 1.2; // $1.2k per 1000 calls
    const durationMultiplier = duration / 20; 
    const total = Math.round(baseSavings * durationMultiplier);
    return total;
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background blobs */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 text-center max-w-4xl">
        <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Savings</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          <span className="text-primary">Automate Every Call</span> From Scheduling To <br className="hidden md:block"/> Support & Orders
        </h2>
        <p className="text-lg text-muted-foreground mb-16">
          Save over $1,200 a month per employee going with an automated system.
        </p>
        
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 text-left relative overflow-hidden">
          
          {/* Left Side - Result */}
          <div className="flex-1 flex flex-col justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight leading-tight mb-2">
                Automate all customer calls <br/>
                <span className="text-primary">from day 1 and beyond.</span>
              </h3>
            </div>
            
            <div className="mt-12 md:mt-24">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl text-muted-foreground">$</span>
                <span className="text-6xl md:text-8xl font-black tracking-tighter">{calculateSavings()}k</span>
                <span className="text-xl text-muted-foreground font-medium">/ month</span>
              </div>
              <p className="text-muted-foreground font-medium mt-2">Saved compared to a human</p>
            </div>
          </div>
          
          {/* Right Side - Calculator Controls */}
          <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 relative z-10">
            <div className="flex items-center gap-2 mb-8 font-medium">
              <Settings className="w-5 h-5 text-muted-foreground" />
              Settings
            </div>
            
            <div className="space-y-8">
              {/* Volume Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="font-semibold">AI calls volume</label>
                  <span className="text-muted-foreground">{volume.toLocaleString()} month</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100"
                  value={volume} 
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary" 
                />
              </div>

              {/* Duration Tabs */}
              <div className="space-y-4">
                <label className="font-semibold block">Average duration</label>
                <div className="flex p-1 bg-white rounded-lg border border-gray-200">
                   {[20, 30, 40].map((val) => (
                     <button
                        key={val}
                        onClick={() => setDuration(val)}
                        className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${duration === val ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-gray-50'}`}
                     >
                       {val} mins
                     </button>
                   ))}
                </div>
              </div>
              
              {/* SMS Toggle */}
              <div className="flex items-center justify-between pt-2">
                <label className="font-semibold">Add SMS confirmation</label>
                <button 
                  onClick={() => setSms(!sms)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${sms ? 'bg-primary' : 'bg-muted'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${sms ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              <div className="pt-4 mt-8 border-t border-border">
                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-3 rounded-xl font-bold transition-all">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
