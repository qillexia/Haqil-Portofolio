import Projects from '@/components/sections/Projects';
import Certificates from '@/components/sections/Certificates';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-20">
      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col gap-4">
          <p className="text-primary font-mono text-xs tracking-widest uppercase">$ ls ~/archive</p>
          <h1 className="text-4xl md:text-4xl font-bold tracking-tighter text-white leading-tight">Projects &<br className="hidden sm:block" /> Certifications</h1>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
            Dokumentasi perjalanan — dari project yang dibangun hingga sertifikat yang diraih. Setiap karya adalah satu langkah lebih dekat.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-transparent mt-2"></div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <Certificates />
      </ScrollReveal>
    </div>
  );
}
