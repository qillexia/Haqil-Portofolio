import { TOOLS_DATA } from '@/data';

export default function Tools() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      <p className="text-primary font-mono text-[10px] tracking-[0.25em] uppercase">Tools</p>

      <div className="flex flex-wrap gap-2">
        {TOOLS_DATA.map((tool, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1.5 rounded-lg bg-zinc-900/40 border border-zinc-800/30 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300 transition-colors duration-200 cursor-default"
          >
            {tool.name}
          </span>
        ))}
      </div>
    </section>
  );
}
