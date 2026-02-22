'use client';

import { SKILLS_DATA } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Skills() {
  return (
    <section className="px-4 flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Skills</h2>
        <div className="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {SKILLS_DATA.map((skill, idx) => (
          <SkillBar key={idx} skill={skill} delay={idx * 100} />
        ))}
      </div>
    </section>
  );
}

function SkillBar({ skill, delay }: { skill: { name: string; level: number; icon: string }; delay: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div ref={ref} className="flex flex-col gap-2 group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-zinc-500 group-hover:text-primary transition-colors duration-300" style={{ fontSize: '18px' }}>
            {skill.icon}
          </span>
          <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-zinc-600">{skill.level}%</span>
      </div>
      <div className="w-full h-1.5 bg-zinc-800/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDuration: '1000ms',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
