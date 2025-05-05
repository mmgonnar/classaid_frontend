import CTASection from '@/components/sections/CTASection';
import Banner from '@/components/Banner';
import { TextBlock } from '@/components/TextTemplate';
import FeaturesSection from '@/components/sections/FeaturesSection';

function Landing() {
  return (
    <>
      <Banner />
      <TextBlock />
      <FeaturesSection />
      <CTASection />
    </>
  );
}

export default Landing;
