import Contact from '@/components/sections/Contact';
import ContactForm from '@/components/sections/ContactForm';
import FAQ from '@/components/sections/FAQ';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-20">
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <ContactForm />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <FAQ />
      </ScrollReveal>
    </div>
  );
}
