import PricingCard from '@/components/cards/PricingCard';
import MainLayout from '@/components/MainLayout';
import FAQSection from '@/components/sections/FAQSection';
import React from 'react';

function Pricing() {
  return (
    <div>
      <MainLayout>
        <h3 className="text-primary px-auto my-15 text-center text-3xl font-bold">
          Find a plan that fits your goals
        </h3>
        <div className="mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-center">
          <PricingCard props="basic" />
          <PricingCard props="plus" />
          <PricingCard props="pro" />
        </div>

        <h3 className="text-primary mx-auto my-5 text-center text-4xl font-bold">FAQ</h3>
        <FAQSection />
      </MainLayout>
    </div>
  );
}

export default Pricing;
