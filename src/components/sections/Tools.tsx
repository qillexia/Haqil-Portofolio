import { TOOLS_DATA } from '@/data';
import GlassCard from '@/components/ui/GlassCard';

export default function Tools() {
  return (
    <section className="px-4 flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Tools</h2>
        <div className="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {TOOLS_DATA.map((tool, idx) => (
          <GlassCard key={idx} className="p-4 flex items-center gap-3 rounded-xl group cursor-default">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
              <span className="material-symbols-outlined text-zinc-500 group-hover:text-primary transition-colors duration-300" style={{ fontSize: '18px' }}>
                {tool.icon}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-zinc-300 truncate">{tool.name}</p>
              <p className="text-[10px] text-zinc-600">{tool.category}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
