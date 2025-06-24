import CTASection from '@/components/sections/CTASection';
import Banner from '@/components/Banner';
import { TextBlock } from '@/components/TextTemplate';
import FeaturesSection from '@/components/sections/FeaturesSection';
import MainLayout from '@/components/layouts/MainLayout';

function Landing() {
  return (
    <MainLayout>
      <Banner />
      <TextBlock />
      <FeaturesSection />
      <CTASection />
    </MainLayout>
  );
}

export default Landing;
