import { HeartPulse, ShoppingBag, Headphones, Building2, Wrench, Utensils, Scale, Car, Banknote } from "lucide-react";

export type Industry = {
  id: string;
  slug: string;
  name: string;
  icon: any; // Lucide icon
  seoTitle: string;
  seoDescription: string;
  heroHeadline: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  heroSubheadline: string;
  scenarios: {
    oneAgent: { title: string; description: string };
    twoAgents: { title: string; description: string };
  };
  handoff: {
    title: string;
    description: string;
  };
  prosAndCons: {
    pros: string[];
    cons: string[]; // Limitations
  };
  capabilities: { title: string; description: string }[];
  stats: { label: string; value: string; suffix?: string }[];
  faqs: { question: string; answer: string }[];
};

export const industries: Record<string, Industry> = {
  "healthcare": {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    seoTitle: "AI Voice Agents for Healthcare & Clinics | Talira",
    seoDescription: "Automate patient scheduling, triage routing, and appointment reminders with HIPAA-compliant AI generative voice orchestration.",
    heroHeadline: {
      prefix: "HIPAA-Compliant ",
      highlight: "AI Voice Agents",
      suffix: " for Healthcare"
    },
    heroSubheadline: "Eliminate front-desk bottlenecks. Our AI handles 24/7 inbound scheduling and intelligent triage while your staff focuses fully on patient care.",
    scenarios: {
      oneAgent: {
        title: "The 24/7 Front Desk",
        description: "A single Agent acts as your primary receptionist, ingesting all inbound calls, answering clinic FAQs via a RAG knowledge base, and booking appointments directly into your health scheduling system."
      },
      twoAgents: {
        title: "Triage & Scheduling Orchestration",
        description: "Agent A screens symptoms and general details. If routine, Agent A books the calendar. If complex or flagged, it seamlessly hands off the conversation and CRM context to Agent B—a specialized clinical parsing module."
      }
    },
    handoff: {
      title: "Critical Care Routing",
      description: "Equipped with strict logic constraints, the AI identifies emergency keywords or severe symptoms instantly. It immediately bypasses generative responses, categorizes the urgency, and hot-transfers the patient to a live duty nurse."
    },
    prosAndCons: {
      pros: ["Zero missed patient calls overnight", "Instant appointment calendar syncing", "Reduces chronic staff burnout", "Polite, empathetic phrasing via LLMs"],
      cons: ["Cannot officially diagnose conditions", "Complex insurance or billing disputes require human review"]
    },
    capabilities: [
      { title: "Smart Scheduling", description: "Direct calendar/EHR integration for booking, rescheduling, or canceling appointments." },
      { title: "Symptom Logging", description: "Collects initial patient data securely to pre-populate charts before the visit." },
      { title: "Post-Op Follow-ups", description: "Outbound automated calls to check patient status 24 hours post-procedure." }
    ],
    stats: [
      { label: "Phone Abandonment", value: "0", suffix: "%" },
      { label: "Admin Hours Saved", value: "80", suffix: "+/mo" },
      { label: "Booking Accuracy", value: "99", suffix: "%" }
    ],
    faqs: [
      { question: "Is the AI HIPAA compliant?", answer: "Yes, our architecture uses strict, non-training HIPAA-compliant LLM endpoints. This ensures zero PHI (Protected Health Information) data retention or model training leaks, meeting all regulatory frameworks." },
      { question: "What if the patient mentions an emergency?", answer: "The AI possesses global override triggers. If words like 'chest pain' or 'bleeding' are detected, it instantly attempts a live-nurse transfer while logging the escalation locally." },
      { question: "Does it integrate with Epic or Athena?", answer: "Yes, our middleware enables writing scheduling data directly into major EHR backends via robust REST APIs, preventing double bookings." },
      { question: "Can the voice agent verify active insurance coverage?", answer: "Yes. Provided your practice management software has an accessible API, the agent cross-references patient policy numbers with known databases to verify active coverage status prior to booking." },
      { question: "Will the agent make outbound appointment reminder calls?", answer: "Absolutely. The agent can dial patients 24 or 48 hours before their scheduled block, confirm their status, answer pre-op questions, or reschedule them without any human intervention." },
      { question: "How does the AI handle elderly patients or thick accents?", answer: "Our core underlying models are trained on millions of hours of diverse speech, making them highly proficient at understanding heavy accents, stutters, and varying patient cadences securely." },
      { question: "Does the system support bilingual communities?", answer: "Yes, the agent can instantly detect a patient answering in Spanish (or 114+ other languages) and immediately pivot the conversation seamlessly into that exact native locale." },
      { question: "Who builds the medical logic flows?", answer: "Our engineering team handles the complete technical onboarding. We work with your clinic's existing triage matrices to build bulletproof constraints preventing any unauthorized medical advice." }
    ]
  },
  "e-commerce": {
    id: "e-commerce",
    slug: "e-commerce",
    name: "E-commerce",
    icon: ShoppingBag,
    seoTitle: "E-Commerce AI Voice Agents | Talira",
    seoDescription: "Resolve WISMO (Where is my order), process returns, and convert abandoned carts with generative B2C voice AI.",
    heroHeadline: {
      prefix: "24/7 ",
      highlight: "AI Customer Service",
      suffix: " for E-Commerce"
    },
    heroSubheadline: "Turn your customer service from a cost center into a retention engine. Resolve WISMO instantly and automate outbound recovery.",
    scenarios: {
      oneAgent: {
        title: "The Support Specialist",
        description: "Handles inbound volume exclusively. Queries your Shopify/WooCommerce backend to instantly provide order statuses, shipping updates, and basic return policy navigation."
      },
      twoAgents: {
        title: "Support & Outbound Recovery",
        description: "Agent A handles all inbound Tier 1 support. Agent B is configured aggressively for outbound sales—triggering personalized phone interactions for high-ticket abandoned carts 30 minutes after abandonment, offering dynamic voice-generated discount codes."
      }
    },
    handoff: {
      title: "Escalation to Live Agents",
      description: "If an anger-detection parameter is triggered via sentiment analysis, or a refund request exceeds the AI's authorized backend limit, the agent places the call on a soft hold and live-transfers alongside a generated transcript summary to a human manager."
    },
    prosAndCons: {
      pros: ["Wipes out WISMO ticket backlogs", "Scales instantly during Black Friday / Q4", "Recovers abandoned carts via proactive voice", "Eliminates language barriers (100+ languages)"],
      cons: ["Highly bespoke product advice may lack human nuance", "Requires distinct API endpoints for custom storefronts"]
    },
    capabilities: [
      { title: "Order Lookups", description: "Real-time query of order IDs to retrieve FedEx/UPS tracking data." },
      { title: "Automated Returns", description: "Processes RMA logic and emails return labels while on the call." },
      { title: "Cart Recovery", description: "Dialing protocol utilizing personalized product injection." }
    ],
    stats: [
      { label: "Support Ticket Deflection", value: "65", suffix: "%" },
      { label: "Cart Recovery Rate", value: "4.2", suffix: "x" },
      { label: "Average Handle Time", value: "<1", suffix: "m" }
    ],
    faqs: [
      { question: "Does it work seamlessly with Shopify?", answer: "Yes, out of the box we connect to Shopify's Admin API to read order statuses, process refunds, and generate dynamic discount codes during live calls." },
      { question: "Can it speak multiple languages?", answer: "Absolutely. The agent detects language dynamically and renders flawless voice dialects natively across 114+ global languages." },
      { question: "How does it handle complex manual returns?", answer: "If an item falls outside the standard 30-day window or is a bespoke custom order, the AI instantly routes the dispute transcript to manual review by your CX team." },
      { question: "Will the AI sound robotic to my shoppers?", answer: "No. We utilize ultra-realistic generative voice cloning capable of human-like pauses, contextual inflections, and emotional tone matching (such as empathy for delayed packages)." },
      { question: "How quickly can it process a WISMO request?", answer: "Instantaneously. The moment the caller provides their email or order number, the agent queries your warehouse or Shopify backend and reads back the exact FedEx/UPS tracking status." },
      { question: "Can it process live payments over the phone?", answer: "To maintain PCI compliance, the agent typically generates a secure Stripe checkout link and texts it directly to the caller's phone, remaining on the line to confirm success." },
      { question: "What if a customer asks a highly specific product question?", answer: "You can securely connect the AI to your product catalog and Zendesk help docs via a vector database, allowing it to accurately answer bespoke product questions dynamically." },
      { question: "Can the AI actively up-sell complementary items?", answer: "Yes. We configure the AI to recognize buying signals during routine support calls and inject natural cross-sell language intelligently based on current cart contents." }
    ]
  },
  "call-center": {
    id: "call-center",
    slug: "call-center",
    name: "Call Center / BPO",
    icon: Headphones,
    seoTitle: "AI Call Center Solutions | Talira",
    seoDescription: "Scale your contact center infinitely with AI orchestration, sub-200ms latency routing, and complex multi-agent setups.",
    heroHeadline: {
      prefix: "Infinite ",
      highlight: "Conversational AI",
      suffix: " for Call Centers"
    },
    heroSubheadline: "Eliminate hiring constraints and turnover. Dispatch a fleet of AI voice agents capable of handling 10,000 concurrent calls with identical sub-200ms latency.",
    scenarios: {
      oneAgent: {
        title: "The Tier-1 Deflector",
        description: "A single, massive capacity agent instance designed to intercept 100% of global inbound traffic, solving up to 70% of routine inquiries using RAG vector databases without ever ringing a human desk."
      },
      twoAgents: {
        title: "The Supervisor Architecture",
        description: "A front-line fleet of Agent A's handle massive outbound dialer batches. When a connected lead demonstrates high buying intent according to the LLM parameters, Agent A dynamically routes the live connection to Agent B (the closing/verification AI) or straight to a human closer."
      }
    },
    handoff: {
      title: "The Human Closer Bridge",
      description: "Agents are instructed to qualify leads against a strict BANT timeline. Once qualified, the AI says 'Let me patch you through to our senior specialist' and triggers a SIP transfer to the live sales floor, injecting the summary into the CRM concurrently."
    },
    prosAndCons: {
      pros: ["Zero hardware or seat-license costs per agent", "Handles infinite concurrent dialing instantly", "100% script compliance guaranteed", "Never gets fatigued or frustrated"],
      cons: ["Can lack improvisation for highly abstract objections", "Heavy CRM architecture required for safe deployment"]
    },
    capabilities: [
      { title: "Concurrent Orchestration", description: "10,000+ simultaneous connections with zero queue times." },
      { title: "Dynamic Objection Handling", description: "RAG-powered intelligence to pivot around 'not interested' seamlessly." },
      { title: "Call Dispositioning", description: "Logs outcomes instantly (Busy, DNC, Follow-up, Qualified)." }
    ],
    stats: [
      { label: "Concurrency Ceiling", value: "10k", suffix: "+" },
      { label: "Compliance Rate", value: "100", suffix: "%" },
      { label: "Cost Per Rep", value: "90", suffix: "% Less" }
    ],
    faqs: [
      { question: "What is the typical latency on a connection?", answer: "We tune our orchestrations on deeply optimized routing frameworks—achieving global responsiveness comfortably within the strict 200–400ms human-like conversational gap." },
      { question: "Can it really replace a human BPO floor?", answer: "We advise using AI to augment human floors by scrubbing out 80% of repetitive workflows and low-conversion dialing, elevating humans strictly to high-value closers." },
      { question: "Can it push data into Salesforce or Five9?", answer: "Yes, our proprietary middleware enables direct CRM API drops and advanced CTI workflows across all primary enterprise dialing platforms." },
      { question: "How fast can you scale concurrent lines?", answer: "Instantaneously. Unlike a physical BPO floor that requires hiring and hardware provisioning, our cloud infrastructure scales from 1 concurrent line to 10,000+ lines in literal seconds." },
      { question: "Does the agent break if the lead interrupts?", answer: "The architecture supports native 'barge-in' capabilities. If the caller interrupts or objects mid-sentence, the AI instantly stops speaking, processing the new audio context to pivot gracefully." },
      { question: "How do you map our existing objection handling scripts?", answer: "We digest your current static scripts into dynamic routing LLM logical trees, allowing the agent to flow naturally through objections while strictly adhering to compliance mandates." },
      { question: "Can the AI route a severely angry caller to a manager?", answer: "Yes, via live sentiment analysis. If the AI detects sustained high hostility, it triggers a live transfer to a Tier 2 human escalation desk alongside the generated transcript." },
      { question: "What kind of analytics tracking do we receive as admins?", answer: "Every call is recorded, transcribed, and summarized within your dashboard. You receive aggregate data on average handle time, frequent objections, positive sentiment rates, and DNC logs." }
    ]
  },
  "real-estate": {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate",
    icon: Building2,
    seoTitle: "AI Voice Agents for Real Estate | Talira",
    seoDescription: "Pre-qualify buyers, schedule property showings, and nurture cold databases automatically with real estate conversational AI.",
    heroHeadline: {
      prefix: "Automated ",
      highlight: "AI Inside Sales Agents",
      suffix: " for Real Estate"
    },
    heroSubheadline: "Stop letting Zillow leads go cold. Our AI agents contact new leads within 5 seconds, pre-qualify them, and book them directly into your showing calendar.",
    scenarios: {
      oneAgent: {
        title: "The ISA (Inside Sales Agent)",
        description: "Instantly dials fresh inbound web leads within seconds. The agent asks qualifying questions (timeline, budget, pre-approval status) and books them into Calendly or HighLevel."
      },
      twoAgents: {
        title: "Buyer / Seller Orchestration",
        description: "Agent A handles outbound cold calling to older database segments (e.g., expired listings). Upon detecting a homeowner looking to sell, it categorizes them as 'Hot Seller' and optionally connects them to Agent B, a specialized listing-pitch AI, or drops them onto the Broker's immediate pipeline."
      }
    },
    handoff: {
      title: "Live Tour Transfer",
      description: "If a lead wishes to view a highly-priced luxury property urgently, the AI recognizes the high-value intent trigger, holds the lead pleasantly, and live-dials the assigned Realtor's cell phone for a warm connection."
    },
    prosAndCons: {
      pros: ["Sub-5 second speed-to-lead dialing", "Reactivates dead leads passively", "Handles both English and Spanish demographics perfectly", "Pre-qualifies out the time-wasters"],
      cons: ["Cannot legally give specific financial advice", "Does not conduct the physical showing"]
    },
    capabilities: [
      { title: "Speed-to-Lead Dialing", description: "Webhook triggered outbound calls the moment a form is submitted." },
      { title: "Pre-Approval Filtering", description: "Asks structured questions to gauge real buying readiness." },
      { title: "Calendar Syncing", description: "Integrates directly with CRM to find open showing slots." }
    ],
    stats: [
      { label: "Speed to Lead", value: "5", suffix: "sec" },
      { label: "Showing Bookings", value: "3", suffix: "x" },
      { label: "Database Reactivation", value: "12", suffix: "%" }
    ],
    faqs: [
      { question: "Will it integrate with GoHighLevel or FollowUpBoss?", answer: "Yes. Our standard setups include complete 2-way sync with GoHighLevel pipelines and tagging, alongside native distinct integration capabilities for FollowUpBoss and kvCORE databases." },
      { question: "Can it perform cold calling to Expireds or FSBOs?", answer: "Yes, so long as your data adheres to DNC and local telemarketing compliance laws, the AI rapidly initiates outbound contact for high-density outreach operations." },
      { question: "What if it gives bad real estate advice?", answer: "We employ strict constraint framing. The AI is hardcoded to never provide financial, tax, or legal advice, safely redirecting those complex liabilities to the assigned broker." },
      { question: "Can the agent call new online leads during the night?", answer: "Yes. The AI agent operates 24/7/365. If a buyer submits a Zillow or Facebook lead form at 2:00 AM, the agent can follow up via call or SMS immediately to secure the first touchpoint." },
      { question: "Does it know properties that are currently on the market?", answer: "Through secure API access to your local MLS or CRM datasets, the agent can reference live availability, reliably confirming if a specific address is currently active or under contract." },
      { question: "How does the AI handle renters vs. buyers?", answer: "We build separate conversational trees. If a caller states they are looking to rent, the AI follows the rental pre-qualification track (credit score, income, move-in date) instead of the homebuyer track." },
      { question: "Can it warm-transfer a high value listing lead?", answer: "Yes. If an outbound call uncovers someone looking to list a million-dollar property, the agent recognizes the high-value intent trigger and live-transfers the call to your personal cell." },
      { question: "Will I sound like a scammer using an AI dialer?", answer: "Our models have been specifically tuned to sound identical to a polite, local Inside Sales Assistant. We prioritize extremely low latency to avoid the awkward pause associated with typical robocalls." }
    ]
  },
  "services": {
    id: "services",
    slug: "services",
    name: "Home Services",
    icon: Wrench,
    seoTitle: "AI Voice Agents for Service Contractors | Talira",
    seoDescription: "Automate dispatching, quotes, and inbound call reception for plumbing, HVAC, roofing, and general contracting businesses.",
    heroHeadline: {
      prefix: "24/7 ",
      highlight: "AI Dispatchers & Receptionists",
      suffix: " for Home Services"
    },
    heroSubheadline: "When you miss a call, they call the next guy. Implement an AI receptionist to capture leads, provide estimates, and schedule dispatch 24/7.",
    scenarios: {
      oneAgent: {
        title: "The 24/7 Dispatcher",
        description: "Answers all inbound calls when the office is busy or closed. Collects the customer's name, address, and issue, providing rough RAG-based estimates before booking a tech visit."
      },
      twoAgents: {
        title: "Inbound Capture & Outbound Review",
        description: "Agent A handles the inbound scheduling and emergency sorting. Agent B takes over after a job is completed—placing an outbound call to the customer the following day to verify satisfaction and politely ask for a Google Review."
      }
    },
    handoff: {
      title: "Emergency Leak/Outage Escalation",
      description: "The AI is trained to detect critical issues (e.g., 'pipe burst', 'no AC in 100 degrees'). It flags these as critical, sends an immediate SMS to the on-call technician, and routes the live call to their cell directly."
    },
    prosAndCons: {
      pros: ["Zero missed leads after-hours or on weekends", "Captures the job before they dial a competitor", "Automates the tedious Google Review extraction", "Consistent pricing estimates via rigid RAG"],
      cons: ["Cannot diagnose physical machine failures over the phone", "Complex multi-day quote generation requires human sizing"]
    },
    capabilities: [
      { title: "Service Scheduling", description: "Books directly into Housecall Pro, ServiceTitan, or standard calendars." },
      { title: "Review Generation", description: "Proactive dialing after service completion to push 5-star reviews." },
      { title: "Emergency Identification", description: "Bypasses standard logic to alert on-call crews immediately." }
    ],
    stats: [
      { label: "Missed Calls", value: "0", suffix: "" },
      { label: "Lead Capture Rate", value: "95", suffix: "%" },
      { label: "Review Volume", value: "4", suffix: "x" }
    ],
    faqs: [
      { question: "Does this connect to ServiceTitan or Housecall Pro?", answer: "Yes, robust middleware allows the Agent to check availability on your team's live field-boards and securely inject new work orders directly into the native platforms without manual entry." },
      { question: "Can the AI provide accurate pricing estimates?", answer: "By mapping your standard rates into its RAG vector database, the AI can confidently provide basic starting estimates, but will politely clarify that final cost strictly depends on the on-site physical inspection." },
      { question: "Will it know the technician's driving times?", answer: "While it does not run real-time dynamic GPS routing mid-call, it uses strict standardized block scheduling (e.g., 2-Hour Windows) ensuring reliable gap creation for local tech travel." },
      { question: "Can it handle my after-hours emergency calls properly?", answer: "Yes. The AI replaces traditional answering services. It collects the customer's crisis information completely autonomously 24/7/365, ensuring you never leak a hot lead to a competitor." },
      { question: "What if it is a catastrophic emergency like a burst pipe?", answer: "We implement 'live intercept' routing. If severe keywords are detected, the AI bypasses standard booking and places a high-priority SIP transfer directly to the on-call technician's cell phone." },
      { question: "How does the AI help me capture more 5-star reviews?", answer: "By triggering automated outbound 'satisfaction check' calls the morning after a job is completed, it proactively flags unhappy customers internally while pushing happy ones directly to your Google My Business link." },
      { question: "Can it communicate clearly with Spanish-speaking homeowners?", answer: "Yes, the agent boasts seamless real-time translation capabilities. If the caller answers 'hola', the AI immediately swaps dialect and tone into fluent, native Spanish to complete the booking." },
      { question: "Does the AI lock me into relying on it entirely?", answer: "No. You have complete control to toggle the AI on exclusively for overflow calls (when the line rings 3 times unanswered by your front desk) or for permanent after-hours duty." }
    ]
  },
  "restaurant": {
    id: "restaurant",
    slug: "restaurant",
    name: "Restaurant",
    icon: Utensils,
    seoTitle: "AI Voice Answering for Restaurants | Talira",
    seoDescription: "Handle massive inbound phone volume, automate reservations, and process takeout orders using conversational AI voice.",
    heroHeadline: {
      prefix: "Automated ",
      highlight: "AI Voice Ordering",
      suffix: " for Restaurants"
    },
    heroSubheadline: "Stop interrupting dinner service. Field 100% of 'are you open?' calls, process phone orders, and manage reservations via Voice AI.",
    scenarios: {
      oneAgent: {
        title: "The Digital Host",
        description: "Answers all calls instantly. Navigates the caller through a custom voice UX: 'To book a table say Reservation, to hear today's specials ask me, or to place an order say Takeout'."
      },
      twoAgents: {
        title: "Host & Takeout Specialist",
        description: "Agent A handles general inquiries (parking, hours, reservations). If the user wants to order food, they are internally handed off to Agent B—a structured AI tied directly into your POS (Point of Sale) API, configured to up-sell appetizers and process payments securely."
      }
    },
    handoff: {
      title: "Large Party / Event Transfer",
      description: "Routine reservations of 2-6 people are booked via OpenTable/Resy API. If the caller requests a party of 15+, or a private event, the AI categorizes the high-value request and alerts/transfers to the General Manager."
    },
    prosAndCons: {
      pros: ["Staff can focus entirely on in-house guests", "Perfect handling of busy Friday night call surges", "Automated and consistent up-selling of menu items", "Never puts the customer on hold"],
      cons: ["Highly complex, off-menu modifications can confuse AI", "POS integration requires modern, open-API systems (e.g., Toast, Square)"]
    },
    capabilities: [
      { title: "Reservation Sync", description: "Connects to Resy/OpenTable to book tables automatically." },
      { title: "Conversational Ordering", description: "Takes item details and pushes them as a ticket to the kitchen display." },
      { title: "Knowledge Retrieval", description: "Answers questions about allergens, parking, and daily specials." }
    ],
    stats: [
      { label: "Calls Handled", value: "100", suffix: "%" },
      { label: "Takeout Upsell Rate", value: "25", suffix: "%" },
      { label: "Lost Revenue Recovered", value: "$4k", suffix: "/mo" }
    ],
    faqs: [
      { question: "How does the AI know my daily specials?", answer: "You can update a simple Google Doc or CMS endpoint that the AI references in real-time, allowing the voice to instantly read back tonight's catch or soup of the day without any code updates." },
      { question: "Can it integrate with our Toast or Square POS?", answer: "Yes, providing your point of sale exposes robust API access. The AI calculates orders, modifies taxes correctly, and maps the entire payload directly to your Kitchen Display System." },
      { question: "Can frustrated callers still reach a human?", answer: "Always. The AI can offer a simple 'Press 0 or say Manager' command pathway at any moment, allowing immediate front-of-house escalation without holding." },
      { question: "How does it process payments for large takeout orders?", answer: "For maximum PCI compliance and security transparency, the AI generates a customized secure checkout link and texts it to the caller, waiting on the line until the transaction clears." },
      { question: "Can it handle a restaurant group with multiple locations?", answer: "Yes. The agent asks the caller which location they are trying to reach immediately, routing them logically based on different operational hours, menus, and booking links per site." },
      { question: "What if someone wants to book a huge 25-person party?", answer: "The AI recognizes large-party constraints configured by your GM. Instead of attempting an OpenTable injection, it politely categorizes it as an 'Event Request' and routes the call to the events manager." },
      { question: "Will it know the answers to complex allergy questions?", answer: "Allergen matrix documents are embedded deeply into the AI's RAG knowledge base. It can instantly cross-reference if the 'peanut sauce' shares a fryer with the 'calamari'." },
      { question: "Can it confirm existing reservations to prevent no-shows?", answer: "Absolutely. The agent can dial out at 2:00 PM every afternoon to confirm all 7:00 PM reservations, updating the booking platform dynamically if the party cancels or downsizes." }
    ]
  },
  "legal": {
    id: "legal",
    slug: "legal",
    name: "Legal Services",
    icon: Scale,
    seoTitle: "AI Voice Agents for Law Firms | Talira",
    seoDescription: "Automate client intake, pre-qualify cases, and handle routine legal inquiries securely with conversational AI orchestration.",
    heroHeadline: {
      prefix: "24/7 ",
      highlight: "AI Legal Intake Receptionists",
      suffix: " for Law Firms"
    },
    heroSubheadline: "Law firms bleed money on unqualified consults. Deploy an AI Intake Specialist to screen cases, gather initial facts, and book highly-qualified consultations.",
    scenarios: {
      oneAgent: {
        title: "The Intake Specialist",
        description: "Receives an inbound call, gently asks the core questions (Date of injury? Arrest date? Current representation?), and records the details into Clio or your legal CRM before scheduling a callback with an attorney."
      },
      twoAgents: {
        title: "Intake & Status Orchestration",
        description: "Agent A handles new business intake. Agent B acts as a virtual paralegal dedicated to existing clients, retrieving updates from the firm's secure portal (e.g., 'Has my court date changed?') and answering them intelligently without pulling lawyers away from billable hours."
      }
    },
    handoff: {
      title: "High-Value Case Detection",
      description: "To prevent malpractice or unauthorized legal advice, the AI is constrained strictly to data-gathering. If an extremely high-value or highly sensitive case trigger occurs (e.g., wrongful death), the AI immediately categorizes and securely routes the live call to a senior partner."
    },
    prosAndCons: {
      pros: ["Screens out unviable cases automatically", "Saves high-cost paralegal and attorney time", "Perfectly tracks and transcripts all initial intake statements", "Projects a massive, professional firm image 24/7"],
      cons: ["Absolutely prohibited from giving actual legal advice", "Sensitive emotional cases may benefit from human empathy"]
    },
    capabilities: [
      { title: "Fact Gathering", description: "Structured interrogatories disguised as a natural conversation." },
      { title: "CRM Sync", description: "Pushes full transcripts and summaries directly into legal case management software." },
      { title: "Conflict Check Prep", description: "Gathers opponent names early to expedite the firm's conflict checking." }
    ],
    stats: [
      { label: "Unqualified Rejection", value: "40", suffix: "%" },
      { label: "Paralegal Time Saved", value: "3", suffix: "hrs/day" },
      { label: "Intake Accuracy", value: "100", suffix: "%" }
    ],
    faqs: [
      { question: "Is this permitted by the Bar Association?", answer: "Yes, providing it operates exclusively as an administrative intake and scheduling tool. It is programmed rigidly never to dispense actual legal advice or represent an attorney's binding legal opinion." },
      { question: "Does it hook into Clio or PracticePanther?", answer: "Yes. Our advanced webhook infrastructures push intake summaries securely into Clio, PracticePanther, and Filevine, instantly generating new Matter records automatically." },
      { question: "Are the audio recordings and data secure?", answer: "We enforce high-compliance encryption standards on all LLM semantic processing, guaranteeing transcripts remain completely isolated and strictly confidential to your specific firm." },
      { question: "Can it securely take payments for initial consults?", answer: "Yes. The agent can trigger an encrypted SMS containing a bespoke Stripe or LawPay portal link, waiting on the line while the client confirms retaining the firm's services." },
      { question: "Can it screen out clearly unprofitable case types?", answer: "Absolutely. You provide the exact triage logic. If a personal injury lead reveals the statute of limitations has violently passed, the AI politely concludes the inquiry without wasting attorney bandwidth." },
      { question: "Does the AI sound empathetic for traumatic intakes?", answer: "Yes. We deploy highly realistic emotive voice framing. While the AI remains purely objective in fact-gathering, its tone maintains rigorous professional empathy required for sensitive legal intakes." },
      { question: "Can it perform aggressive outbound follow-ups on cold leads?", answer: "For mass torts or general inquiry backlogs, the AI dials leads meticulously, ensuring you capitalize immediately on marketing spend without burning out human paralegals calling dead numbers." },
      { question: "Will the AI know which specific partner to transfer the call to?", answer: "Yes, via dynamic conditional routing. If the intake specifies 'Medical Malpractice', the call is securely live-transferred exclusively to the head of the Med-Mal department." }
    ]
  },
  "car-dealership": {
    id: "car-dealership",
    slug: "car-dealership",
    name: "Car Dealership",
    icon: Car,
    seoTitle: "Automotive AI Voice Agents | Talira",
    seoDescription: "Deploy AI BDRs to handle service bay scheduling, inventory queries, and lease renewal outreach autonomously.",
    heroHeadline: {
      prefix: "Automated ",
      highlight: "AI BDC Agents",
      suffix: " for Car Dealerships"
    },
    heroSubheadline: "Automate your BDC. Answer inbound service scheduling, answer inventory queries in real-time, and relentlessly tackle outbound equity mining.",
    scenarios: {
      oneAgent: {
        title: "The Service Bay Scheduler",
        description: "Captures 100% of overflow service calls. Checks backend systems for available oil change or repair slots and books the customer instantly, reducing long hold times."
      },
      twoAgents: {
        title: "Service & Sales (Equity Mining)",
        description: "Agent A manages the service bay. Agent B is an aggressive, professional outbound dialer that contacts previous customers nearing the end of their lease or with high equity, offering them an upgrade calculation and booking a showroom appraisal."
      }
    },
    handoff: {
      title: "Showroom Sales Handoff",
      description: "When a customer asks about a highly specific trim package availability or begins negotiating price over the phone, the AI confirms vehicle availability and immediately transfers to the floor manager for closing."
    },
    prosAndCons: {
      pros: ["Dominates outbound lease-renewal databases", "Clears the service department phone backlog", "Provides exact VIN/inventory status instantly via API", "Never calls in sick on peak weekends"],
      cons: ["Cannot negotiate final out-the-door pricing on its own", "Requires integration with complex Dealer Management Systems (DMS)"]
    },
    capabilities: [
      { title: "Equity Mining", description: "Outbound AI dialing to existing databases using soft-credit data." },
      { title: "Service Booking", description: "Direct scheduling for standard maintenance routines." },
      { title: "Inventory Query", description: "Real-time checking if a specific Make/Model/Trim is on the lot." }
    ],
    stats: [
      { label: "Service Bookings", value: "35", suffix: "% ↑" },
      { label: "Showroom Appointments", value: "2.5", suffix: "x" },
      { label: "Hold Time", value: "0", suffix: "sec" }
    ],
    faqs: [
      { question: "Can it plug into Reynolds and Reynolds or CDK Global?", answer: "These legacy DMSs have complex proprietary gating. However, assuming API endpoint availability from your software distributor, our custom middleware safely achieves secure transactional read/writing." },
      { question: "How does it handle blind trade-in evaluations?", answer: "It connects dynamically to Kelley Blue Book (KBB) or related wholesale APIs to provide the customer an approximate range, effectively leveraging that data to book a firm in-dealership appraisal." },
      { question: "Is it truly capable of mass outbound lease-renewal calls?", answer: "Yes, this is a distinct core BDC strength. Agent orchestration scales incredibly to dial hundreds of aging 36-month leases simultaneously, transferring hot prospects directly to human sales experts." },
      { question: "Can the AI inform buyers about unexpected manufacturer recalls?", answer: "By integrating with NHTSA or manufacturer APIs, the voice agent checks the incoming caller's registered VIN and proactively surfaces necessary recall maintenance alongside routine service booking." },
      { question: "Will the agent confirm showroom appointments so salespeople aren't ghosted?", answer: "Yes. The outbound dialer triggers automated, polite check-in calls 4 hours prior to the showroom appointment, actively rescheduling the customer if they admit they are running drastically behind." },
      { question: "Does the AI ever negotiate the final vehicle out-the-door price?", answer: "Never. The AI is strictly barred from finalizing financial numbers beyond quoting standard MSRP. Its explicit goal is moving the prospect emotionally to meet the physical F&I manager." },
      { question: "Can it communicate organically with Spanish-speaking demographic groups?", answer: "Perfectly. The underlying semantic router instantly detects Spanish phrasing and seamlessly morphs the dialogue, accent, and terminology to serve massive bilingual regional markets effortlessly." },
      { question: "How does it handle finance pre-qualifications autonomously?", answer: "The AI redirects the caller to securely complete a soft-credit pull application delivered via instant SMS, actively confirming on the call once the backend approves the preliminary checking tier." }
    ]
  },
  "debt-collection": {
    id: "debt-collection",
    slug: "debt-collection",
    name: "Debt Collection",
    icon: Banknote,
    seoTitle: "AI Voice Agents for Debt Collection | Talira",
    seoDescription: "Scale financial recovery efforts legally and politely with infinite AI outbound dialers capable of payment processing.",
    heroHeadline: {
      prefix: "FDCPA-Compliant ",
      highlight: "AI Debt Collection Agents",
      suffix: " for Financial Recovery"
    },
    heroSubheadline: "Dial thousands of accounts per minute. A polite, infinitely patient, strictly compliant AI voice fleet designed to negotiate and capture payments.",
    scenarios: {
      oneAgent: {
        title: "The Polite Reminder",
        description: "An outbound dialing agent specialized in early-stage delinquency (30-60 days). Focuses on soft reminders, navigating objections, and sending secure payment gateway links via SMS while on the call."
      },
      twoAgents: {
        title: "Reminders & Hard Negotiations",
        description: "Agent A handles early-stage volume. Agent B is trained on complex settlement matrices, authorized to negotiate discount percentages on deep delinquency, transferring the user to a secure IVR or live agent to run the transaction."
      }
    },
    handoff: {
      title: "Dispute & Hardship Routing",
      description: "If an individual requests validation of the debt legally, or claims severe financial hardship/bankruptcy, the AI immediately tags the CRM record with compliance holds, halts generative output, and assigns the case to a superior human auditor."
    },
    prosAndCons: {
      pros: ["100% adherence to FDCPA compliance scripts", "Removes emotion and anger from contentious calls", "Executes infinite daily dial attempts consistently", "Seamless integration with Stripe/authorizations"],
      cons: ["Highly regulated space requires extreme technical care", "Cannot read physical court documents sent by debtors"]
    },
    capabilities: [
      { title: "Mass Outbound Dialing", description: "Simultaneous multithreaded contacting of delinquent accounts." },
      { title: "Objection Handling", description: "Strictly follows predefined flowcharts for common delay tactics." },
      { title: "SMS Gateway Pushing", description: "Dispatches secure payment links to the user's phone in real-time." }
    ],
    stats: [
      { label: "Promise-to-Pay (PTP)", value: "40", suffix: "% ↑" },
      { label: "Compliance Breaches", value: "0", suffix: "" },
      { label: "Collection Cost", value: "85", suffix: "% ↓" }
    ],
    faqs: [
      { question: "Does the AI guarantee 100% FDCPA compliance?", answer: "Yes. By removing human frustration and rigorously mandating strict logic paths via RAG, the script physically limits what the AI can legally execute or promise—eliminating emotion-driven litigation liability." },
      { question: "Can it take live payment authorization over the phone?", answer: "To maintain immaculate PCI scope, we program the AI to securely push a unique payment portal link via SMS, or perform a warm transfer of the debtor directly to an encrypted touch-tone IVR system mid-call." },
      { question: "What happens exactly if the consumer asserts bankruptcy?", answer: "Conditioned logical triggers cause the AI to immediately halt collections on keywords such as 'bankrupt' or 'attorney representing me', dropping the line legally and freezing the CRM account for manual review." },
      { question: "Can the AI perform complex skip-tracing operations?", answer: "While it does not actively scour the internet mid-call, it integrates flawlessly with your primary skip-tracing databases to dynamically dial the three most likely active cell phone numbers synchronously." },
      { question: "Does it leave FDCPA-compliant voicemails automatically?", answer: "Yes. When encountering an answering machine, the AI waits for the beep computationally and delivers a pre-approved, strictly ambiguous 'limited content' message avoiding third-party disclosure violations." },
      { question: "How does the agent handle intensely hostile or emotional debtors?", answer: "Unlike human collectors who suffer empathy fatigue or retaliate angrily, the AI remains radically objective and infinitely patient, continuously returning the hostile subject back to the financial negotiation cleanly." },
      { question: "Can the orchestration translate and negotiate in foreign dialects?", answer: "Yes. The semantic engine natively translates all rigorous legal collection phrasing into robust Spanish, Tagalog, or 110+ other languages while permanently maintaining the structural compliance boundaries." },
      { question: "What is the maximum simultaneous dialing volume?", answer: "Infinite. The cloud-native SIP trunking backend permits 10,000+ localized concurrent outbound calls within the approved legal daily calling window, massively scaling gross recovery yields without physical floors." }
    ]
  }
};
