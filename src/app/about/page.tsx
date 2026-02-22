import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Tools from '@/components/sections/Tools';
import DownloadCV from '@/components/sections/DownloadCV';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-20">
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <Skills />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <Tools />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <DownloadCV />
      </ScrollReveal>
    </div>
  );
}
