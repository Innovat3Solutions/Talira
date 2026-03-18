'use client';

import { useState } from 'react';
import { CheckCircleIcon, X, User, Mail, Phone as PhoneIcon, Globe, ArrowRight, Headset, Clock, MessageSquare, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PricingWithChart() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className="mx-auto max-w-5xl px-4">
				{/* Heading */}
				<div className="mx-auto mb-12 max-w-2xl text-center">
					<span className="inline-block bg-zinc-100 text-zinc-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
						Pricing
					</span>
					<h2 className="text-4xl font-bold tracking-tight lg:text-5xl text-zinc-900">
						Pricing that Scales with You
					</h2>
					<p className="text-zinc-500 mt-4 text-base">
						Simple, transparent pricing. Start free, upgrade when you're ready.
					</p>
				</div>

				{/* Pricing Cards */}
				<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

					{/* Discover AI */}
					<div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col">
						<div className="mb-6">
							<div className="flex items-center gap-2 mb-1">
								<h2 className="text-xl font-semibold text-zinc-900">Discover AI</h2>
								<span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Free Trial</span>
							</div>
							<p className="text-sm text-zinc-500">One-time free trial limited to a 5-minute live conversation using your business information as the knowledge base.</p>
						</div>

						<div className="mb-6">
							<span className="text-5xl font-bold text-zinc-900">$0</span>
						</div>

						<button
							onClick={() => setShowModal(true)}
							className="w-full py-3.5 px-6 rounded-xl border-2 border-zinc-900 text-zinc-900 font-semibold hover:bg-zinc-900 hover:text-white transition-all mb-8"
						>
							Start for Free
						</button>

						<div className="border-t border-zinc-100 pt-6">
							<p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">What you get:</p>
							<ul className="space-y-3">
								{[
									'Custom Voice Agent Generation',
									'Interactive Sandbox Demo',
									'Basic Conversational Mapping',
									'No Commitment Required',
								].map((item, index) => (
									<li key={index} className="flex items-center gap-3 text-sm text-zinc-600">
										<CheckCircleIcon className="h-5 w-5 text-zinc-400 shrink-0" />
										{item}
									</li>
								))}
                                
                                <li className="pt-3">
                                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Not Included:</p>
                                </li>
                                {[
									'CRM Integration',
									'Calendar Booking',
									'Live Deployment',
								].map((item, index) => (
									<li key={`not-${index}`} className="flex items-center gap-3 text-sm text-zinc-400 opacity-70">
										<X className="h-4 w-4 text-zinc-300 shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Growth Partner Plan */}
					<div className="bg-gradient-to-br from-[#F25C22] to-[#E04A15] rounded-3xl p-8 text-white shadow-xl shadow-orange-500/20 flex flex-col relative overflow-hidden">
						{/* Background decoration */}
						<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
						<div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

						<div className="relative z-10 flex flex-col h-full">
							<div className="flex items-center justify-between mb-6">
								<div>
									<h2 className="text-xl font-semibold mb-1">Growth Partner</h2>
									<p className="text-sm text-white/80 pr-2">Single agent processing calls into your CRM.</p>
								</div>
								<span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shrink-0">
									POPULAR
								</span>
							</div>

							<div className="mb-6">
								<div className="flex items-baseline gap-2">
									<span className="text-5xl font-bold">$497</span>
									<span className="text-white/80">/month</span>
								</div>
								<div className="mt-3">
								    <span className="bg-white/15 border border-white/20 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-md shadow-sm">
                                        +$1,500 One-Time Setup
                                    </span>
								</div>
							</div>

							<button
								onClick={() => setShowModal(true)}
								className="w-full py-3.5 px-6 rounded-xl bg-white text-[#F25C22] font-semibold hover:bg-white/90 transition-all mb-8 shadow-lg"
							>
								Deploy Agent
							</button>

							<div className="border-t border-white/20 pt-6 flex-1">
								<p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">What's included:</p>
								<ul className="space-y-3">
									{[
										'1 Dedicated Voice Agent',
										'Native CRM Data Sync',
										'Live Calendar Booking',
										'RAG Knowledge Base',
										'Live Call Handoff to Staff',
									].map((item, index) => (
										<li key={index} className="flex items-center gap-3 text-sm text-white/90">
											<CheckCircleIcon className="h-5 w-5 text-white shrink-0" />
											{item}
										</li>
									))}
                                    
                                <li className="pt-3">
                                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Not Included:</p>
                                </li>
                                {[
									'Multi-Agent Roles & Handoffs',
									'Custom Multi-Scenario Workflows',
								].map((item, index) => (
									<li key={`not-${index}`} className="flex items-center gap-3 text-sm text-white/60 opacity-80">
										<X className="h-4 w-4 text-white/40 shrink-0" />
										{item}
									</li>
								))}
								</ul>
							</div>
						</div>
					</div>
				</div>


			</div>

			{/* Modal */}
			<AnimatePresence>
				{showModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
						onClick={() => setShowModal(false)}
					>
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 20, scale: 0.95 }}
							transition={{ duration: 0.2 }}
							className="w-full max-w-lg bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 relative overflow-hidden"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Decorative glow */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-[#F25C22]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />

							<button
								onClick={() => setShowModal(false)}
								className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-red-100 hover:text-red-600 transition-colors z-20 cursor-pointer"
								type="button"
							>
								<X className="w-5 h-5" />
							</button>

							<div className="relative z-10">
								<h3 className="text-2xl font-bold text-black tracking-tight mb-2">Get Started</h3>
								<p className="text-sm font-medium text-zinc-500 mb-8">Fill out the form and we'll set up your AI voice agent.</p>

								<form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); setShowModal(false); }}>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{/* Name */}
										<div>
											<label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">Name</label>
											<div className="flex items-center bg-zinc-50 rounded-xl px-4 py-3 border border-zinc-200 focus-within:border-[#F25C22] transition-colors group">
												<User className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3" />
												<input required type="text" placeholder="John Doe" className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium" />
											</div>
										</div>

										{/* Business Email */}
										<div>
											<label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">Business Email</label>
											<div className="flex items-center bg-zinc-50 rounded-xl px-4 py-3 border border-zinc-200 focus-within:border-[#F25C22] transition-colors group">
												<Mail className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3" />
												<input required type="email" placeholder="john@company.com" className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium" />
											</div>
										</div>

										{/* Phone Number */}
										<div>
											<label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">Phone Number</label>
											<div className="flex items-center bg-zinc-50 rounded-xl px-4 py-3 border border-zinc-200 focus-within:border-[#F25C22] transition-colors group">
												<PhoneIcon className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3" />
												<input required type="tel" placeholder="+1 (555) 000-0000" className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium" />
											</div>
										</div>

										{/* Business Website */}
										<div>
											<label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1.5 ml-1">Business Website</label>
											<div className="flex items-center bg-zinc-50 rounded-xl px-4 py-3 border border-zinc-200 focus-within:border-[#F25C22] transition-colors group">
												<Globe className="w-4 h-4 text-zinc-400 group-focus-within:text-[#F25C22] mr-3" />
												<input type="url" placeholder="https://company.com" className="bg-transparent border-none outline-none w-full text-sm text-zinc-800 placeholder:text-zinc-400 font-medium" />
											</div>
										</div>
									</div>

									<button type="submit" className="w-full mt-6 flex items-center justify-center bg-[#F25C22] text-white rounded-xl px-6 py-4 font-bold tracking-wide shadow-lg shadow-[#F25C22]/30 hover:bg-[#e04c10] transition-colors group overflow-hidden relative">
										<span className="relative z-10 flex items-center gap-2">
											Submit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</span>
										<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
									</button>
								</form>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
