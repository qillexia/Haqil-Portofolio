'use client';

import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
}

const TRANSFORMS: Record<string, string> = {
  up: 'translateY(2rem)',
  down: 'translateY(-2rem)',
  left: 'translateX(2rem)',
  right: 'translateX(-2rem)',
  none: 'none',
};

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 700,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`will-change-[transform,opacity] ${className}`}
      style={{
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0,0,0)' : TRANSFORMS[direction],
      }}
    >
      {children}
    </div>
  );
}
