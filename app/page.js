import MainButton, { ButtonSection } from '@/components/MainButton';
import CTASection from '@/components/sections/CTASection';
import Banner from '@/components/Banner';
import { CTA } from '@/utils/enums';
import TextTemplate from '@/components/TextTemplate';
import FeaturesSection from '@/components/sections/FeaturesSection';

export default function Home() {
  return (
    <main className="">
      <Banner />

      <ButtonSection />

      <CTASection title="afdsadasd" subtitle="asdasdasds" buttonText={CTA.LEARN_MORE} />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
