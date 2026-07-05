'use client';

import { useEffect, useState } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

export default function Background() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const particleOptions: ISourceOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: isMobile ? 30 : 60,
    particles: {
      color: { value: ['#2b4bee', '#6366f1', '#ffffff'] },
      links: {
        color: '#6366f1',
        distance: 150,
        enable: !isMobile,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: isMobile ? 0.3 : 0.4,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      number: {
        density: { enable: true },
        value: isMobile ? 25 : 100,
      },
      opacity: {
        value: { min: 0.15, max: 0.5 },
      },
      size: {
        value: { min: 1.5, max: 4 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: !isMobile,
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
    detectRetina: !isMobile,
  };

  return (
    <>
      <div className="fixed inset-0 bg-mesh z-[-2]" />
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <ParticlesProvider init={async (engine: Engine) => { await loadSlim(engine); }}>
          <Particles id="tsparticles" options={particleOptions} />
        </ParticlesProvider>
      </div>
    </>
  );
}
