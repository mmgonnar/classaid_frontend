import MainButton, { ButtonSection } from '@/components/MainButton';
import CTASection from '@/components/sections/CTASection';
import Banner from '@/components/Banner';
import { TextBlock } from '@/components/TextTemplate';
import FeaturesSection from '@/components/sections/FeaturesSection';

export default function Home() {
  return (
    <main className="">
      <Banner />

      <TextBlock />

      <FeaturesSection />
      <CTASection />
    </main>
  );
}
