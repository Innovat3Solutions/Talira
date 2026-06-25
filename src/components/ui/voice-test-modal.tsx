"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useConversation, ConversationProvider } from "@elevenlabs/react";
import { X, Mic, MicOff, PhoneOff, Phone, Loader2, Check } from "lucide-react";
import Image from "next/image";

const AGENT_ID = "agent_4201kt4tf55tfk2byc3g33p0tpc3";

type Phase =
  | "idle"
  | "connecting"
  | "active"
  | "wrapup"
  | "submitting"
  | "done"
  | "error";
type Lang = "en" | "es";
type Lead = { name?: string; email?: string; phone?: string; website?: string };
type TranscriptLine = { role: "user" | "ai"; text: string };

const COPY: Record<Lang, Record<string, string>> = {
  en: {
    badge: "Live Voice Demo",
    title: "Talk to Talira",
    idleSub:
      "Pick a language, tap below, allow your microphone, and have a real conversation with our AI voice agent.",
    ready: "Ready when you are",
    connecting: "Connecting…",
    speaking: "Talira is speaking…",
    listening: "Listening — go ahead",
    errorStatus: "We hit a snag",
    start: "Start the call",
    tryAgain: "Try again",
    end: "End call",
    autoEnd: "The call ends automatically after a few minutes.",
    transcriptLabel: "Live Transcript",
    transcriptEmpty: "Your conversation will appear here…",
    micError:
      "We need microphone access to start the call. Please allow it and try again.",
    genericError: "Couldn't start the call. Please try again.",
    langLabel: "Call language",
    wrapTitle: "How was that?",
    wrapSub: "Let us know how it went and we'll take it from here.",
    enjoy: "Yes, I enjoyed this demo!",
    consent:
      "I'd like Talira's team to give me a call to show how this works for my business.",
    consentFine:
      "By checking this box, I authorize Innovat3 Solutions (Talira) to contact me by phone, SMS, and email about its services at the number and email I provided. Consent is not a condition of purchase. Message and data rates may apply.",
    prefLangLabel: "Preferred language for your callback",
    submit: "Get my callback",
    submitError: "Something went wrong sending your request. Please try again.",
    skip: "No thanks, just close",
    doneTitle: "You're all set!",
    doneSub: "Our team will reach out shortly. Talk soon!",
    close: "Close",
  },
  es: {
    badge: "Demo de voz en vivo",
    title: "Habla con Talira",
    idleSub:
      "Elige un idioma, toca abajo, permite el micrófono y ten una conversación real con nuestro agente de voz con IA.",
    ready: "Cuando quieras",
    connecting: "Conectando…",
    speaking: "Talira está hablando…",
    listening: "Te escucho — adelante",
    errorStatus: "Tuvimos un problema",
    start: "Iniciar la llamada",
    tryAgain: "Intentar de nuevo",
    end: "Finalizar llamada",
    autoEnd: "La llamada termina automáticamente después de unos minutos.",
    transcriptLabel: "Transcripción en vivo",
    transcriptEmpty: "Tu conversación aparecerá aquí…",
    micError:
      "Necesitamos acceso al micrófono para iniciar la llamada. Permítelo e inténtalo de nuevo.",
    genericError: "No se pudo iniciar la llamada. Inténtalo de nuevo.",
    langLabel: "Idioma de la llamada",
    wrapTitle: "¿Qué te pareció?",
    wrapSub: "Cuéntanos cómo te fue y nosotros nos encargamos del resto.",
    enjoy: "¡Sí, disfruté esta demostración!",
    consent:
      "Quiero que el equipo de Talira me llame para mostrarme cómo funciona esto en mi negocio.",
    consentFine:
      "Al marcar esta casilla, autorizo a Innovat3 Solutions (Talira) a contactarme por teléfono, SMS y correo electrónico sobre sus servicios al número y correo que proporcioné. El consentimiento no es condición de compra. Pueden aplicar tarifas de mensajes y datos.",
    prefLangLabel: "Idioma preferido para tu llamada",
    submit: "Quiero que me llamen",
    submitError: "Algo salió mal al enviar tu solicitud. Inténtalo de nuevo.",
    skip: "No gracias, cerrar",
    doneTitle: "¡Todo listo!",
    doneSub: "Nuestro equipo se comunicará contigo muy pronto. ¡Hablamos!",
    close: "Cerrar",
  },
};

export function VoiceTestModal({
  open,
  onClose,
  lead,
  agentId = AGENT_ID,
}: {
  open: boolean;
  onClose: () => void;
  lead?: Lead;
  agentId?: string;
}) {
  return (
    <ConversationProvider>
      <VoiceTestModalInner
        open={open}
        onClose={onClose}
        lead={lead}
        agentId={agentId}
      />
    </ConversationProvider>
  );
}

function VoiceTestModalInner({
  open,
  onClose,
  lead,
  agentId,
}: {
  open: boolean;
  onClose: () => void;
  lead?: Lead;
  agentId: string;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [lang, setLang] = useState<Lang>("en");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const [enjoyed, setEnjoyed] = useState(false);
  const [consent, setConsent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const hadCallRef = useRef(false);

  const t = COPY[lang];

  useEffect(() => setIsMounted(true), []);

  const conversation = useConversation({
    onConnect: () => {
      hadCallRef.current = true;
      setPhase("active");
    },
    onDisconnect: () => {
      setElapsed(0);
      // If a call actually happened, move to the wrap-up / consent step.
      setPhase(hadCallRef.current ? "wrapup" : "idle");
    },
    onMessage: ({
      message,
      source,
    }: {
      message: string;
      source: "user" | "ai";
    }) => {
      if (!message) return;
      setTranscript((prev) => [...prev, { role: source, text: message }]);
    },
    onError: (message: string) => {
      setErrorMsg(typeof message === "string" ? message : t.genericError);
      setPhase("error");
    },
  });

  const { status, isSpeaking } = conversation;

  // Capture the conversation id once connected (for the CRM record)
  useEffect(() => {
    if (status === "connected") {
      try {
        const id = conversation.getId();
        if (id) setConversationId(id);
      } catch {
        /* ignore */
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // Elapsed call timer
  useEffect(() => {
    if (phase === "active") {
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  // Keep the transcript scrolled to the latest line
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcript]);

  const startCall = useCallback(async () => {
    setErrorMsg(null);
    setSubmitError(null);
    setTranscript([]);
    setEnjoyed(false);
    setConsent(false);
    hadCallRef.current = false;
    setPhase("connecting");
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      conversation.startSession({
        agentId,
        connectionType: "webrtc",
        overrides: { agent: { language: lang } },
      });
    } catch (err) {
      const isMicError =
        err instanceof DOMException &&
        (err.name === "NotAllowedError" || err.name === "NotFoundError");
      setErrorMsg(isMicError ? t.micError : t.genericError);
      setPhase("error");
    }
  }, [agentId, conversation, lang, t]);

  const endCall = useCallback(() => {
    conversation.endSession(); // onDisconnect moves us to wrap-up
  }, [conversation]);

  const submitLead = useCallback(async () => {
    setSubmitError(null);
    setPhase("submitting");

    const payload = {
      name: lead?.name || "",
      email: lead?.email || "",
      phone: lead?.phone || "",
      website: lead?.website || "",
      preferredLanguage: lang,
      enjoyedDemo: enjoyed,
      contactConsent: consent,
      consentText: t.consentFine,
      conversationId,
      transcript,
      source: "website-voice-demo",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    const endpoint = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        // No CRM endpoint configured yet — keep the UX working and log it.
        console.warn(
          "[VoiceTestModal] NEXT_PUBLIC_GHL_WEBHOOK_URL not set — lead not sent:",
          payload
        );
      }
      setPhase("done");
    } catch {
      setSubmitError(t.submitError);
      setPhase("wrapup");
    }
  }, [lead, lang, enjoyed, consent, conversationId, transcript, t]);

  const resetAll = useCallback(() => {
    setPhase("idle");
    setElapsed(0);
    setErrorMsg(null);
    setSubmitError(null);
    setTranscript([]);
    setEnjoyed(false);
    setConsent(false);
    setConversationId(null);
    hadCallRef.current = false;
  }, []);

  // Clean up the call when the modal closes
  const handleClose = useCallback(() => {
    if (status === "connected" || status === "connecting") {
      conversation.endSession();
    }
    resetAll();
    onClose();
  }, [conversation, status, onClose, resetAll]);

  // End the call if the component unmounts while connected
  useEffect(() => {
    return () => {
      if (
        conversation.status === "connected" ||
        conversation.status === "connecting"
      ) {
        conversation.endSession();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMounted || !open) return null;

  const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const seconds = String(elapsed % 60).padStart(2, "0");

  const statusLabel =
    phase === "connecting"
      ? t.connecting
      : phase === "active"
        ? isSpeaking
          ? t.speaking
          : t.listening
        : phase === "error"
          ? t.errorStatus
          : t.ready;

  const isPreCall = phase === "idle" || phase === "error";
  const isWrap = phase === "wrapup" || phase === "submitting";
  const showTranscript =
    phase === "active" || (isWrap && transcript.length > 0);
  const showLangToggle = isPreCall || isWrap;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="relative z-10 w-full max-w-md max-h-[92vh] overflow-y-auto bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] border border-white/80 p-8 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F25C22]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-red-100 hover:text-red-600 transition-colors z-20 cursor-pointer"
            type="button"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 text-[11px] font-bold uppercase tracking-wider text-[#F25C22] bg-[#F25C22]/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F25C22] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F25C22]" />
              </span>
              {t.badge}
            </span>

            {phase === "done" ? (
              /* ---------- Success ---------- */
              <>
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center ring-2 ring-green-200"
                >
                  <Check className="w-12 h-12 text-green-500" strokeWidth={3} />
                </motion.div>
                <h3 className="mt-6 text-2xl font-bold text-zinc-900 tracking-tight">
                  {t.doneTitle}
                </h3>
                <p className="mt-2 text-sm font-medium text-zinc-500 max-w-xs">
                  {t.doneSub}
                </p>
                <button
                  onClick={handleClose}
                  type="button"
                  className="mt-8 w-full flex items-center justify-center gap-2 bg-zinc-900 text-white rounded-xl px-6 py-4 font-bold tracking-wide hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  {t.close}
                </button>
              </>
            ) : (
              <>
                {/* Avatar */}
                <TaliraAvatar phase={phase} isSpeaking={isSpeaking} />

                <h3 className="mt-6 text-2xl font-bold text-zinc-900 tracking-tight">
                  {isWrap ? t.wrapTitle : t.title}
                </h3>
                <p className="mt-2 min-h-[2.5rem] text-sm font-medium text-zinc-500 max-w-xs">
                  {isWrap
                    ? t.wrapSub
                    : phase === "idle"
                      ? t.idleSub
                      : statusLabel}
                </p>

                {phase === "active" && (
                  <p className="mt-1 text-xs font-mono font-semibold text-zinc-400">
                    {minutes}:{seconds}
                  </p>
                )}

                {errorMsg && phase === "error" && (
                  <p className="mt-2 text-sm font-medium text-red-600 max-w-xs">
                    {errorMsg}
                  </p>
                )}

                {/* Language toggle */}
                {showLangToggle && (
                  <div className="mt-5 flex flex-col items-center">
                    <span className="mb-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      {isWrap ? t.prefLangLabel : t.langLabel}
                    </span>
                    <LangToggle lang={lang} onChange={setLang} />
                  </div>
                )}

                {/* Live transcript */}
                <AnimatePresence initial={false}>
                  {showTranscript && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-full overflow-hidden"
                    >
                      <div className="flex items-center gap-2 mb-2 px-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          {t.transcriptLabel}
                        </span>
                        <span className="flex-1 h-px bg-zinc-100" />
                      </div>
                      <div
                        ref={transcriptRef}
                        className="h-44 overflow-y-auto rounded-2xl bg-zinc-50 border border-zinc-100 p-3 text-left space-y-2 scroll-smooth"
                      >
                        {transcript.length === 0 ? (
                          <p className="text-xs text-zinc-400 text-center py-12">
                            {t.transcriptEmpty}
                          </p>
                        ) : (
                          transcript.map((line, i) => (
                            <div
                              key={i}
                              className={`flex ${line.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div
                                className={`max-w-[80%] rounded-2xl px-3 py-2 text-[13px] font-medium leading-snug ${
                                  line.role === "user"
                                    ? "bg-[#F25C22] text-white rounded-br-sm"
                                    : "bg-white text-zinc-700 border border-zinc-200 rounded-bl-sm"
                                }`}
                              >
                                {line.text}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Wrap-up consent block */}
                {isWrap && (
                  <div className="mt-6 w-full text-left space-y-3">
                    <CheckRow
                      checked={enjoyed}
                      onToggle={() => setEnjoyed((v) => !v)}
                      label={t.enjoy}
                    />
                    <CheckRow
                      checked={consent}
                      onToggle={() => setConsent((v) => !v)}
                      label={t.consent}
                    />
                    <p className="text-[10px] leading-snug text-zinc-400 px-1">
                      {t.consentFine}
                    </p>
                    {submitError && (
                      <p className="text-sm font-medium text-red-600">
                        {submitError}
                      </p>
                    )}
                  </div>
                )}

                {/* Action button(s) */}
                <div className="mt-6 w-full">
                  {phase === "active" ? (
                    <button
                      onClick={endCall}
                      type="button"
                      className="w-full flex items-center justify-center gap-2 bg-red-500 text-white rounded-xl px-6 py-4 font-bold tracking-wide shadow-lg shadow-red-500/30 hover:bg-red-600 transition-colors cursor-pointer"
                    >
                      <PhoneOff className="w-4 h-4" /> {t.end}
                    </button>
                  ) : phase === "connecting" ? (
                    <button
                      disabled
                      type="button"
                      className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white rounded-xl px-6 py-4 font-bold tracking-wide opacity-80 cursor-wait"
                    >
                      <Loader2 className="w-4 h-4 animate-spin" /> {t.connecting}
                    </button>
                  ) : isWrap ? (
                    <>
                      <button
                        onClick={submitLead}
                        type="button"
                        disabled={!consent || phase === "submitting"}
                        className="w-full flex items-center justify-center gap-2 bg-[#F25C22] text-white rounded-xl px-6 py-4 font-bold tracking-wide shadow-lg shadow-[#F25C22]/30 hover:bg-[#e04c10] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                      >
                        {phase === "submitting" ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Phone className="w-4 h-4" />
                        )}
                        {t.submit}
                      </button>
                      <button
                        onClick={handleClose}
                        type="button"
                        className="mt-2 w-full text-xs font-medium text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer py-2"
                      >
                        {t.skip}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={startCall}
                      type="button"
                      className="w-full flex items-center justify-center gap-2 bg-[#F25C22] text-white rounded-xl px-6 py-4 font-bold tracking-wide shadow-lg shadow-[#F25C22]/30 hover:bg-[#e04c10] transition-colors cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      {phase === "error" ? t.tryAgain : t.start}
                    </button>
                  )}
                </div>

                {!isWrap && (
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-medium text-zinc-400">
                    {phase === "active" ? (
                      <Mic className="w-3 h-3" />
                    ) : (
                      <MicOff className="w-3 h-3" />
                    )}
                    {t.autoEnd}
                  </p>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}

function LangToggle({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (l: Lang) => void;
}) {
  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
  ];
  return (
    <div className="relative inline-flex items-center p-1 bg-zinc-100 rounded-full">
      {options.map((opt) => {
        const isActive = lang === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className="relative z-10 px-5 py-1.5 text-xs font-bold rounded-full transition-colors cursor-pointer"
          >
            {isActive && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 bg-white rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${isActive ? "text-[#F25C22]" : "text-zinc-500"}`}
            >
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function CheckRow({
  checked,
  onToggle,
  label,
}: {
  checked: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-start gap-3 text-left group cursor-pointer"
    >
      <span
        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
          checked
            ? "bg-[#F25C22] border-[#F25C22]"
            : "bg-white border-zinc-300 group-hover:border-[#F25C22]"
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </span>
      <span className="text-[13px] font-medium text-zinc-700 leading-snug">
        {label}
      </span>
    </button>
  );
}

function TaliraAvatar({
  phase,
  isSpeaking,
}: {
  phase: Phase;
  isSpeaking: boolean;
}) {
  const active = phase === "active";
  const connecting = phase === "connecting";
  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      {/* Outer pulse rings while live */}
      {active && (
        <>
          <motion.span
            className="absolute rounded-full bg-[#F25C22]/20"
            initial={{ width: 88, height: 88, opacity: 0.5 }}
            animate={{ width: 132, height: 132, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="absolute rounded-full bg-[#F25C22]/20"
            initial={{ width: 88, height: 88, opacity: 0.5 }}
            animate={{ width: 132, height: 132, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
          />
        </>
      )}

      {/* Soft glow */}
      <div className="absolute w-24 h-24 rounded-full bg-[#F25C22]/20 blur-xl" />

      {/* Icon disc */}
      <motion.div
        className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center ring-2 ring-[#F25C22]/30 shadow-[0_8px_30px_rgba(242,92,34,0.35)]"
        animate={
          connecting
            ? { scale: [1, 1.05, 1] }
            : active
              ? isSpeaking
                ? { scale: [1, 1.08, 1.02, 1.08, 1], y: [0, -3, 0] }
                : { scale: [1, 1.03, 1], y: [0, -2, 0] }
              : { scale: 1, y: 0 }
        }
        transition={
          connecting
            ? { duration: 1, repeat: Infinity, ease: "easeInOut" }
            : active
              ? {
                  duration: isSpeaking ? 0.7 : 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : { duration: 0.4 }
        }
      >
        <Image
          src="/talira-icon.png"
          alt="Talira"
          width={56}
          height={56}
          className="w-14 h-14 object-contain"
          draggable={false}
          priority
        />
      </motion.div>
    </div>
  );
}
