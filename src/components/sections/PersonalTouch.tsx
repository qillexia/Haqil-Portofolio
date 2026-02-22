import GlassCard from '@/components/ui/GlassCard';
import { PERSONAL_DATA } from '@/data';

export default function PersonalTouch() {
  return (
    <section className="w-full max-w-4xl">
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <h2 className="text-2xl font-bold text-white tracking-tight">Beyond Code</h2>
        <p className="text-zinc-500 text-sm">Sedikit hal tentang saya di luar coding</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PERSONAL_DATA.map((item, idx) => (
          <GlassCard key={idx} className="p-5 flex flex-col gap-3 group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <span className="material-symbols-outlined text-xl text-zinc-500 group-hover:text-primary transition-colors duration-300">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white">{item.label}</h3>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">{item.value}</p>
            {item.tags && (
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
