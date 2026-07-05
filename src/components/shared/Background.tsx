'use client';

import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

const particleOptions: ISourceOptions = {
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
  detectRetina: true,
};

export default function Background() {
  return (
    <>
      {/* Base mesh gradient */}
      <div className="fixed inset-0 bg-mesh z-[-2]" />

      {/* tsParticles network — floating connected dots */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <ParticlesProvider init={async (engine: Engine) => { await loadSlim(engine); }}>
          <Particles id="tsparticles" options={particleOptions} />
        </ParticlesProvider>
      </div>
    </>
  );
}