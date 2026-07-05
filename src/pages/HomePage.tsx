import Hero from '@/features/home/Hero';
import AnimatedQuote from '@/features/home/AnimatedQuote';
import SelectedWorksHero from '@/features/home/SelectedWorksHero';

import MiniTimeline from '@/features/home/MiniTimeline';
import PersonalTouch from '@/features/home/PersonalTouch';
import AOSBox from '@/components/ui/AOSBox';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full gap-0">
      <SelectedWorksHero />

      <AOSBox data-aos="fade-up">
        <Hero />
      </AOSBox>

      <AOSBox data-aos="fade-up" data-aos-delay="100">
        <AnimatedQuote />
      </AOSBox>

      <AOSBox data-aos="fade-up" data-aos-delay="100">
        <MiniTimeline />
      </AOSBox>

      <AOSBox data-aos="fade-up" data-aos-delay="100">
        <PersonalTouch />
      </AOSBox>
    </div>
  );
}
