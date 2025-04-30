import MainButton, { ButtonSection } from '@/components/MainButton';
import CTASection from '@/components/sections/CTASection';
import Banner from '@/components/Banner';
import { CTA } from '@/utils/enums';

export default function Home() {
  return (
    <main className="">
      <Banner />
      <ButtonSection />
      <CTASection />
      <CTASection title="afdsadasd" subtitle="asdasdasds" buttonText={CTA.LEARN_MORE} />
    </main>
  );
}
