'use client';

import { CTA } from '@/utils/enums';
import MainButton from '../MainButton';

function PricingCard() {
  return (
    <div className="flex w-sm flex-col items-center space-y-3 rounded-xl border-2 border-neutral-400 dark:border-blue-300">
      <h3 className="w-full rounded-t-xl border-b-2 border-neutral-400 bg-neutral-100 px-3 pt-2 pb-1 text-xl font-semibold text-gray-500">
        Basic
      </h3>
      <h3 className="divide-gray-200 pt-6 pb-4 text-4xl font-semibold text-gray-700 dark:text-white">
        $10
      </h3>
      <div className="flex w-[90%] flex-col items-center gap-2 border-t-2 border-dotted border-neutral-400 p-6 text-center text-balance">
        <h3 className="text-base font-semibold text-gray-700 capitalize dark:text-white">
          Features
        </h3>
        <p className="dark:text-gray-base pb-8 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod.
        </p>
        <MainButton variant="secondary" text={CTA.TRY_NOW} />
      </div>
    </div>
  );
}

export default PricingCard;

//CardWithBorder
//prop true claro a oscuro
//componente para border o selector
