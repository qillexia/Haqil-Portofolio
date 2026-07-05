import About from '@/features/about/About';
import Skills from '@/features/about/Skills';
import Tools from '@/features/about/Tools';
import DownloadCV from '@/features/about/DownloadCV';
import AOSBox from '@/components/ui/AOSBox';

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-16">
      <AOSBox data-aos="fade-up">
        <About />
      </AOSBox>
      <AOSBox data-aos="fade-up" data-aos-delay="100">
        <Skills />
      </AOSBox>
      <AOSBox data-aos="fade-up" data-aos-delay="100">
        <Tools />
      </AOSBox>
      <AOSBox data-aos="fade-up" data-aos-delay="100">
        <DownloadCV />
      </AOSBox>
    </div>
  );
}
