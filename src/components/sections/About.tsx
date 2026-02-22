import { ABOUT_TERMINAL_DATA } from "@/data";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  const { hero, codeSnippet, education } = ABOUT_TERMINAL_DATA;

  return (
    <main className="flex flex-col gap-16 w-full scroll-mt-24 font-space" id="about">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-6">
        <h4 className="text-primary font-mono text-sm tracking-widest uppercase">{hero.command}</h4>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white">{hero.title}</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-l md:text-xl text-zinc-400 font-light leading-relaxed">
            {hero.description}
          </p>
        </div>
      </section>
      

      {/* 2. Decorative Code Snippet */}
      <section className="px-0 sm:px-5">
        <GlassCard className="p-0 font-mono text-xs sm:text-sm bg-zinc-900/50 relative overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-900/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-[10px] sm:text-xs text-zinc-500 font-mono ml-3 truncate">~/about/profile.ts</span>
          </div>

          {/* Code Lines */}
          <div className="p-4 sm:p-6 space-y-1.5 sm:space-y-2 overflow-x-auto">
             {codeSnippet.lines.map((line, idx) => (
               <div key={idx} className="flex gap-2 sm:gap-4 whitespace-normal sm:whitespace-nowrap">
                 <span className="text-zinc-600 select-none w-5 sm:w-6 text-right flex-shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                 <p className={`${line.indent ? "pl-3 sm:pl-6" : ""}`}>
                   {line.key === "const" && <span className="text-purple-400">const </span>}
                   {line.key !== "const" && line.key !== "}" && <span className="text-blue-400">{line.key}</span>}
                   {line.value && <span className="text-zinc-400">: </span>}
                   {line.value && <span className="text-emerald-400">&quot;{line.value}&quot;</span>}
                   {line.text && <span className="text-zinc-200">{line.text}</span>}
                   {line.value && <span className="text-zinc-400">,</span>}
                 </p>
               </div>
             ))}
          </div>
        </GlassCard>
      </section>

      {/* 3. Technical Education Block */}
      <section className="px-4 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-white">Technical Education</h2>
          <div className="h-px flex-1 bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Kampus */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-primary mb-2">{education.school}</h3>
            <p className="text-zinc-400 text-sm">{education.degree}</p>
            <p className="text-zinc-500 text-xs mt-1">{education.year}</p>
          </div>

          {/* Kolom Kanan: Detail */}
          <div className="md:col-span-7 pl-0 md:pl-8 space-y-8">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-zinc-500 mb-3">Sector</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {education.courses.map((course, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="material-symbols-outlined text-primary text-xs mr-2">terminal</span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
            
            <GlassCard className="bg-primary/5 p-4 rounded-lg border border-primary/10">
              <p className="text-sm font-medium leading-relaxed italic text-zinc-400">
                "{education.quote}"
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

    </main>
  );
}