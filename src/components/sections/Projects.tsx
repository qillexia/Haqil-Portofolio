// components/sections/Projects.tsx
import { PROJECTS } from "@/data";
import GlassCard from "@/components/ui/GlassCard";

export default function Projects() {
  return (
    <section className="w-full max-w-6xl mb-32 scroll-mt-24" id="projects">
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight">Selected Works</h2>
        <p className="text-zinc-500">A curation of digital experiences built with precision.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {PROJECTS.map((project, idx) => (
          <GlassCard key={idx} className={project.colSpan === 2 ? "md:col-span-2" : ""}>
            {/* Logic Rendering Berdasarkan Tipe Project */}
            
            {/* Type: Image Card */}
            {project.type === "image-card" && (
              <>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 z-10"></div>
                {/* Khusus Project Zenith (Style berbeda di data asli) */}
                {project.colSpan === 1 ? (
                   <div className="absolute inset-0 bg-zinc-900/50 flex items-center justify-center p-8">
                      <div className="w-full h-4/5 bg-zinc-800 rounded-xl border border-zinc-700/50 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 overflow-hidden relative">
                         <img alt={project.title} className="w-full h-full object-cover opacity-80" src={project.image}/>
                      </div>
                   </div>
                ) : (
                  <img alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src={project.image}/>
                )}
                
                <div className={`absolute bottom-0 left-0 p-6 z-20 w-full ${project.colSpan === 2 ? 'p-8' : 'bg-linear-to-t from-black/90 to-transparent'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`${project.colSpan === 2 ? 'text-2xl' : 'text-lg'} font-bold text-white mb-1`}>{project.title}</h3>
                      <p className={`text-zinc-500 ${project.colSpan === 2 ? 'text-zinc-400 text-sm' : 'text-xs'}`}>{project.desc}</p>
                    </div>
                    {project.colSpan === 2 && (
                      <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span className="material-symbols-outlined text-white">arrow_outward</span>
                      </div>
                    )}
                  </div>
                </div>
                {project.colSpan === 2 && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-linear-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}
              </>
            )}

            {/* Type: Text Card */}
            {project.type === "text-card" && (
               <div className="flex flex-col justify-between h-full p-8 bg-zinc-900/30">
                 <div className="flex items-start justify-between">
                   <div className="p-3 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 text-white"><span className="material-symbols-outlined">dataset</span></div>
                   <span className="text-xs font-mono text-zinc-500 border border-zinc-800 rounded-full px-2 py-1">{project.version}</span>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                   <p className="text-zinc-400 text-sm leading-relaxed">{project.desc}</p>
                 </div>
                 <div className="absolute inset-0 border border-white/5 rounded-[2rem] group-hover:border-white/20 transition-colors duration-300 pointer-events-none"></div>
               </div>
            )}

            {/* Type: SaaS Card */}
            {project.type === "saas-card" && (
              <>
                <div className="absolute inset-0 bg-linear-to-br from-zinc-900 to-black"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-[10rem] font-bold text-white/5 select-none pointer-events-none">SaaS</h2>
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-zinc-400 text-sm">{project.desc}</p>
                    </div>
                    <div className="flex gap-2">
                      {project.tags?.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-zinc-400 bg-zinc-900/50">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

          </GlassCard>
        ))}
      </div>
    </section>
  );
}