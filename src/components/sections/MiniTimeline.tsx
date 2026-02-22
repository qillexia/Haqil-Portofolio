import GlassCard from '@/components/ui/GlassCard';
import { TIMELINE_DATA } from '@/data';

export default function MiniTimeline() {
  return (
    <section className="w-full max-w-3xl">
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <h2 className="text-2xl font-bold text-white tracking-tight">Journey</h2>
        <p className="text-zinc-500 text-l">Perjalanan singkat saya sejauh ini</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-zinc-700"></div>

        <div className="space-y-8">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative flex gap-3 sm:gap-6 items-start group">
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0 w-8 sm:w-12 flex justify-center">
                <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                  item.active 
                    ? 'bg-primary border-primary shadow-[0_0_12px_rgba(43,75,238,0.5)]' 
                    : 'bg-zinc-800 border-zinc-700 group-hover:border-primary/50'
                }`}></div>
              </div>

              {/* Content */}
              <GlassCard className="flex-1 p-4 sm:p-7 group-hover:border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-l font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-600 whitespace-nowrap flex-shrink-0">{item.year}</span>
                </div>
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
