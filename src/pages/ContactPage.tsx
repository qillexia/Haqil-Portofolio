import Contact from '@/features/contact/Contact';
import ContactForm from '@/features/contact/ContactForm';
import FAQ from '@/features/contact/FAQ';
import AOSBox from '@/components/ui/AOSBox';

export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-20">
      <AOSBox data-aos="fade-up">
        <Contact />
      </AOSBox>
      <AOSBox data-aos="fade-up" data-aos-delay="100">
        <ContactForm />
      </AOSBox>
      <AOSBox data-aos="fade-up" data-aos-delay="100">
        <FAQ />
      </AOSBox>
    </div>
  );
}
