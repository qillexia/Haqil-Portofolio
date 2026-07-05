import { PROJECTS } from "@/data";

export default function Projects() {
  return (
    <section className="w-full flex flex-col gap-8" id="projects">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Last Projects</h2>
        <div className="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl overflow-hidden transition-all duration-300 glass-card"
          >
            {/* Image */}
            {project.image ? (
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={project.title}
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </div>
            ) : (
              <div className="relative h-48 overflow-hidden bg-zinc-900/50 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-zinc-700">
                  <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>code_blocks</span>
                  <span className="text-xs font-mono">source code</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
              </div>
            )}

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>

                {/* Arrow icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <span className="material-symbols-outlined text-zinc-400" style={{ fontSize: '16px' }}>
                    arrow_outward
                  </span>
                </div>
              </div>

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-500 border border-zinc-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Top highlight line on hover */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
