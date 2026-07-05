import { SKILLS_DATA } from '@/data';

export default function Skills() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      <p className="text-primary font-mono text-[10px] tracking-[0.25em] uppercase">Skills</p>

      <div className="flex flex-wrap gap-2">
        {SKILLS_DATA.map((skill, idx) => (
          <span
            key={idx}
            className="text-sm px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/50 text-zinc-300 hover:border-primary/30 hover:text-white transition-colors duration-200 cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
