import React from 'react';
import MainButton from './buttons/MainButton';
import { CTA } from '@/utils/enums';
import browserScreen from '../img/browser_screen.png';
import Image from 'next/image';

function Title() {
  return (
    <section className="relative top-[-50px] bg-[linear-gradient(345deg,rgba(101,156,246,0.3),rgba(246,246,246,0.2))] pt-8 pb-60 md:pt-20 md:pb-50">
      {/* <div className="bg-[url(/img/classroom.jpg)]"></div> */}
      <div className="mx-auto pt-18 sm:px-6 sm:py-10">
        <div className="relative text-center">
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
            className="absolute left-1/2 h-[260%] -translate-x-1/2 transform object-contain md:top-[170px]"
            alt="Browser screen image"
          />
        </div>
      </div>
    </section>
  );
}

export default Title;
