'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Playfair_Display, Roboto_Flex } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  axes: ['wght'],
});

function PortfolioHoverText() {
  const text = 'Portfolio';
  const chars = text.split('');
  const containerRef = useRef<HTMLHeadingElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef<number>(0);

  const resetSpans = useCallback(() => {
    spansRef.current.forEach((span) => {
      if (span) span.style.fontVariationSettings = "'wght' 700";
    });
  }, []);

  useEffect(() => {
    if (!hovered) {
      cancelAnimationFrame(rafRef.current);
      resetSpans();
      return;
    }

    const animate = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const maxDist = rect.width * 0.7;

      spansRef.current.forEach((span) => {
        if (!span) return;
        const r = span.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mouseRef.current.x - cx;
        const dy = mouseRef.current.y - cy;
        const d = Math.sqrt(dx * dx + dy * dy);

        const t = Math.max(0, Math.min(1, 1 - d / maxDist));
        const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
        const wght = Math.round(200 + eased * 700);

        span.style.fontVariationSettings = `'wght' ${wght}`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hovered, resetSpans]);

  return (
    <h1
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }}
      className={`${robotoFlex.className} text-6xl sm:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-none cursor-default`}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          ref={(el) => { spansRef.current[i] = el; }}
          style={{
            fontVariationSettings: "'wght' 700",
            transition: 'font-variation-settings 0.55s ease-out',
            willChange: 'font-variation-settings',
          }}
          className="inline-block"
        >
          {char}
        </span>
      ))}
    </h1>
  );
}

export default function SelectedWorksHero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[80dvh] overflow-hidden sm-mb-0 mb-10">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-5 lg:gap-8 px-4 text-center">
        {/* Main title */}
        <PortfolioHoverText />

        {/* Year */}
        <p className={`${playfair.className} text-5xl sm:text-7xl lg:text-8xl text-white/90 italic font-light -mt-2 sm:-mt-4`}>
          2026
        </p>

        {/* Bottom text */}
        <div className="flex items-center gap-3 sm:gap-5 mt-3 sm:mt-8">
          <span className="text-[10px] sm:text-xs text-zinc-400 tracking-[0.3em] uppercase font-light">
            Informatics Engineering
          </span>
        </div>
      </div>
    </section>
  );
}
