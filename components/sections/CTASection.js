'use client';

import { CTA } from '@/utils/enums';
import MainButton from '../MainButton';

function CTASection({
  title = 'Are you ready to ease your class?',
  subtitle = "Let's get started!",
  buttonText = CTA.START_NOW,
}) {
  return (
    <section className="flex h-[180px] flex-col justify-between gap-5 bg-white p-6 px-10 sm:flex-row md:items-center md:px-18">
      <div>
        <h1 className="mb-2 text-2xl font-bold text-neutral-800">{title}</h1>
        <h2 className="text-gray-600">{subtitle}</h2>
      </div>
      <div className="flex items-center sm:self-stretch">
        <MainButton variant="primary" text={buttonText} />
      </div>
    </section>
  );
}

export default CTASection;
