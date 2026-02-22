'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import GlassCard from '@/components/ui/GlassCard';

const TERMINAL_LINES = [
  { type: 'command', text: '$ neofetch' },
  { type: 'output', text: '  OS: Portfolio' },
  { type: 'output', text: '  Host: Haqil Abdillah' },
  { type: 'output', text: '  Uptime: Semester 3' },
  { type: 'output', text: '  Theme: Liquid Glass [Dark]' },
  { type: 'blank', text: '' },
  { type: 'command', text: '$ cat status.txt' },
  { type: 'output', text: '  Currently working on: Internet Of Things' },
  { type: 'blank', text: '' },
  { type: 'command', text: '$ echo $MOTTO' },
  { type: 'output', text: '  "Layar menyala, ide mengalir — dari nol hingga deploy, semua dimulai dari baris pertama."' },
];

function TypedText({ text, speed = 35, onDone }: { text: string; speed?: number; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState('');
  const idx = useRef(0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    idx.current = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      idx.current++;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) {
        clearInterval(interval);
        onDoneRef.current?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-2 h-4 bg-emerald-400 align-middle animate-blink ml-0.5" />
      )}
    </>
  );
}

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const handleTypingDone = useCallback(() => setTypingDone(true), []);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;

    // If the LAST SHOWN line is still being typed, wait for it to finish
    const prevLine = visibleLines > 0 ? TERMINAL_LINES[visibleLines - 1] : null;
    if (prevLine && (prevLine.type === 'command' || prevLine.type === 'output') && !typingDone) return;

    const delay = visibleLines === 0
      ? 400
      : TERMINAL_LINES[visibleLines].type === 'command'
        ? 300
        : TERMINAL_LINES[visibleLines].type === 'blank'
          ? 250
          : 120;

    const timeout = setTimeout(() => {
      setTypingDone(false);
      setVisibleLines((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [visibleLines, typingDone]);

  return (
    <section className="w-full max-w-3xl">
      <GlassCard className="p-0 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-900/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-zinc-500 font-mono ml-5">haqil@portfolio ~ </span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-1 min-h-[240px] sm:min-h-[280px]">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, idx) => {
            const isLatest = idx === visibleLines - 1;
            const animClass =
              line.type === 'blank'
                ? 'h-3'
                : 'animate-[termLineIn_0.35s_cubic-bezier(0.16,1,0.3,1)_both]';

            return (
              <div key={idx} className={animClass}>
                {line.type === 'command' && (
                  <span className="text-emerald-400">
                    {isLatest ? (
                      <TypedText
                        text={line.text}
                        speed={40}
                        onDone={handleTypingDone}
                      />
                    ) : (
                      line.text
                    )}
                  </span>
                )}
                {line.type === 'output' && (
                  <span className="text-zinc-400">
                    {isLatest ? (
                      <TypedText
                        text={line.text}
                        speed={18}
                        onDone={handleTypingDone}
                      />
                    ) : (
                      line.text
                    )}
                  </span>
                )}
              </div>
            );
          })}

          {/* Blinking cursor */}
          {visibleLines < TERMINAL_LINES.length && !TERMINAL_LINES.slice(0, visibleLines).some(
            (l, i) => (l.type === 'command' || l.type === 'output') && i === visibleLines - 1
          ) && (
            <div className="flex items-center gap-1 animate-[termLineIn_0.3s_ease_both]">
              <span className="text-emerald-400">$</span>
              <span className="w-2 h-4 bg-emerald-400 animate-blink"></span>
            </div>
          )}
          {visibleLines >= TERMINAL_LINES.length && (
            <div className="flex items-center gap-1 mt-5 animate-[termLineIn_0.3s_ease_both]">
              <span className="text-emerald-400">$ </span>
              <span className="w-2 h-4 bg-emerald-400 animate-blink"></span>
            </div>
          )}
        </div>
      </GlassCard>
    </section>
  );
}
