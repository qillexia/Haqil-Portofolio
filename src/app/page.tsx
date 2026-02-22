'use client';

import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import AnimatedQuote from '@/components/sections/AnimatedQuote';
import TerminalWidget from '@/components/sections/TerminalWidget';
import MiniTimeline from '@/components/sections/MiniTimeline';
import PersonalTouch from '@/components/sections/PersonalTouch';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Home() {
  
  // Efek Mouse Hover
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        // Logika visual tambahan jika diperlukan
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-20">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <AnimatedQuote />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <TerminalWidget />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <MiniTimeline />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <PersonalTouch />
      </ScrollReveal>
    </div>
  );
}