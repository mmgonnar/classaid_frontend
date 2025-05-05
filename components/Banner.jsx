import React from 'react';
import MainButton from './MainButton';
import { CTA } from '@/utils/enums';
import browserScreen from '../img/browser_screen.png';
import Image from 'next/image';

function Title() {
  return (
    <section
      className="pt-5 pb-60 md:pt-20 md:pb-50"
      style={{
        background: 'linear-gradient(45deg, rgba(101, 156, 246, 0.9), rgba(246, 246, 246, 0.7))',
        maskImage: 'linear-gradient(to bottom, black 70%, transparent 95%)',
      }}
    >
      <div className="mx-auto w-screen max-w-screen-xl pt-18 sm:px-6 sm:py-10 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-prose text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            Simplify.
            <strong className="text-primary"> Teach </strong>. Empower.
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 md:text-lg/relaxed">
            Your digital ally to simplify your class management and transform teaching
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <MainButton variant="primary" text={CTA.MORE_INFO} />
            <MainButton variant="secondary" text={CTA.TRY_FREE} />
          </div>
          <Image
            src={browserScreen}
            className="md: absolute top-[220px] left-1/2 w-full max-w-6xl -translate-x-1/2 transform object-contain"
            alt="Browser screen image"
          />
        </div>
      </div>
    </section>
  );
}

export default Title;
