import MainLayout from '@/components/MainLayout';
import FAQSection from '@/components/sections/FAQSection';
import React from 'react';

function Pricing() {
  return (
    <div>
      <MainLayout>
        <h3 className="text-primary mx-auto my-5 text-center text-4xl font-bold">
          Find a plan that fits your goals
        </h3>
        <FAQSection />
      </MainLayout>
    </div>
  );
}

export default Pricing;
