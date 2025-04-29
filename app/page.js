import MainButton, { ButtonSection } from '@/components/MainButton';
import CTASection from '@/components/sections/CTASection';
import { CTA } from '@/utils/enums';

export default function Home() {
  return (
    <main>
      <div className="font-main bg-secondary h-60 pt-30">Hello world!</div>
      <ButtonSection />
      <CTASection />
      <CTASection title="afdsadasd" subtitle="asdasdasds" buttonText={CTA.LEARN_MORE} />
    </main>
  );
}
