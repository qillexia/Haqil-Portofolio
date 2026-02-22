'use client';

import { useState, useEffect } from 'react';

const QUOTES = [
  "Dari sensor hingga sistem, semua dirancang untuk solusi.",
  "Simplicity is the ultimate sophistication.",
  "Code is poetry, hardware is the canvas.",
  "Build things that matter.",
];

export default function AnimatedQuote() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const quote = QUOTES[currentQuote];

    if (isTyping) {
      if (displayText.length < quote.length) {
        const timeout = setTimeout(() => {
          setDisplayText(quote.slice(0, displayText.length + 1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        // Pause before erasing
        const timeout = setTimeout(() => setIsTyping(false), 2500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        // Move to next quote
        setCurrentQuote((prev) => (prev + 1) % QUOTES.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentQuote]);

  return (
    <section className="w-full max-w-4xl py-0 sm:py-30 mb-30">
      <div className="flex flex-col items-center text-center gap-4">
        <span className="material-symbols-outlined text-zinc-700" style={{ fontSize: '3rem' }}>format_quote</span>
        <p className="text-xl md:text-2xl font-light text-zinc-400 min-h-[2.5rem] tracking-wide">
          {displayText}
          <span className="inline-block w-[2px] h-6 bg-primary ml-1 animate-blink align-middle"></span>
        </p>
        <div className="flex items-center gap-2 mt-4">
          {QUOTES.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentQuote ? 'bg-primary w-4' : 'bg-zinc-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
