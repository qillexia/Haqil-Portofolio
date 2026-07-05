'use client';

import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

import { useEffect, useState, useMemo } from 'react';

export default function Background() {
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    // Mengecek apakah device benar-benar memiliki kursor (laptop/desktop)
    const checkHover = () => {
      setIsHoverable(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    };
    checkHover();
  }, []);

  const particleOptions: ISourceOptions = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      color: { value: ['#2b4bee', '#6366f1', '#ffffff'] },
      links: {
        color: '#6366f1',
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      number: {
        density: { enable: true },
        value: 220,
      },
      opacity: {
        value: { min: 0.15, max: 0.5 },
      },
      size: {
        value: { min: 1.5, max: 4 },
      },
    },
    ...(isHoverable && {
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 0.5 },
          },
        },
      },
    }),
    detectRetina: true,
  }), [isHoverable]);
  return (
    <>
      {/* Base mesh gradient */}
      <div className="fixed top-0 left-0 w-full h-[100svh] bg-mesh z-[-2]" />

      {/* tsParticles network — floating connected dots */}
      <div className="fixed top-0 left-0 w-full h-[100svh] z-[-1] pointer-events-none">
        <ParticlesProvider init={async (engine: Engine) => { await loadSlim(engine); }}>
          <Particles key={isHoverable ? 'hover' : 'no-hover'} id="tsparticles" options={particleOptions} />
        </ParticlesProvider>
      </div>
    </>
  );
}