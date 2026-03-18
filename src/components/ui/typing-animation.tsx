"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const words = [
  "Customer Support",
  "Sales",
  "After Hours",
  "Appointment",
  "Follow-up Calls",
];

export function TypingAnimation({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0); // Start at 0 so it types the first word
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(timeout);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000); // pause at the end of word
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 70); // Tweak typing speed here

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <span className={cn("text-primary inline-flex items-center whitespace-nowrap", className)}>
      <span>{words[index].substring(0, subIndex)}</span>
      <span
        className={cn(
          "inline-block w-[3px] h-[0.9em] ml-1 bg-primary rounded-full transition-opacity duration-100 shrink-0",
          blink ? "opacity-100" : "opacity-0"
        )}
      />
    </span>
  );
}
