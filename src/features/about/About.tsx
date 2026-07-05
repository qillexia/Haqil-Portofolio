import { ABOUT_TERMINAL_DATA } from "@/data";

export default function About() {
  const { hero, education } = ABOUT_TERMINAL_DATA;

  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-10 scroll-mt-24" id="about">
      {/* Intro */}
      <div className="flex flex-col gap-3">
        <p className="text-primary font-mono text-[10px] tracking-[0.25em] uppercase">{hero.command}</p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter leading-tight text-white">
          {hero.title}
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
          {hero.description}
        </p>
      </div>

      {/* Education — inline ringkas */}
      <div className="flex flex-col gap-1 text-sm text-zinc-400 border-l border-zinc-800 pl-4">
        <p>
          <span className="text-zinc-200 font-medium">{education.degree}</span>
          <span className="text-zinc-600"> — {education.school}</span>
        </p>
        <p className="text-xs text-zinc-600">{education.year}</p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {education.courses.map((c, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/50 text-zinc-400">{c}</span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="text-xs sm:text-sm text-zinc-600 italic leading-relaxed max-w-lg">
        &ldquo;{education.quote}&rdquo;
      </p>
    </section>
  );
}
