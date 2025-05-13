'use client';

import MainButton from '../MainButton';
import BaseCard from './BaseCard';
import { pricingPlans } from '@/utils/constants';

console.log(pricingPlans);

function PricingCard({ props }) {
  return (
    <BaseCard>
      <h3
        className={`w-full rounded-t-xl border-b-2 px-3 pt-2 pb-1 text-xl font-semibold ${pricingPlans[props]?.style}`}
      >
        {pricingPlans[props]?.plan}
      </h3>
      <h3 className="divide-gray-200 pt-6 pb-4 text-4xl font-semibold text-gray-700 dark:text-white">
        ${pricingPlans[props]?.price}
      </h3>
      <div className="flex w-[90%] flex-col items-center gap-2 border-t-2 border-dotted border-neutral-400 p-6 text-center text-balance">
        <h3 className="text-base font-semibold text-gray-700 capitalize dark:text-white">
          Features
        </h3>
        <p className="dark:text-gray-base pb-8 text-sm text-gray-500">
          {pricingPlans[props]?.text}
        </p>
        <MainButton variant="secondary" text={pricingPlans[props]?.button} />
      </div>
    </BaseCard>
  );
}

export default PricingCard;

//CardWithBorder

//componente para border o selector
