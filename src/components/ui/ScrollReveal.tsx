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

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 700,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const directionStyles: Record<string, string> = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: '',
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : undefined,
      }}
      // Apply initial transform via className when not visible
      {...(!isVisible && {
        style: {
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          opacity: 0,
          transform: direction === 'up' ? 'translateY(2rem)' :
                     direction === 'down' ? 'translateY(-2rem)' :
                     direction === 'left' ? 'translateX(2rem)' :
                     direction === 'right' ? 'translateX(-2rem)' : 'none',
        },
      })}
    >
      {children}
    </div>
  );
}
