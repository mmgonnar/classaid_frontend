'use client';
import MainButton from './buttons/MainButton';
import { CTA } from '@/utils/enums';
import browserScreen from '../img/browser_screen.png';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

function Title() {
  return (
    <section className="relative top-[-50px] pt-20 pb-60 md:pt-40 md:pb-50">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 bg-[url(/classroom.jpg)] bg-cover bg-center bg-no-repeat opacity-30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(345deg,rgba(101,156,246,0.3),rgba(246,246,246,0.2))]"></div>
      <div className="relative mx-auto pt-18 sm:px-6 sm:py-10">
        <div className="relative text-center">
          <h1 className="text-xl font-bold text-gray-900 sm:text-5xl">
            Simplify.
            <strong className="text-primary">
              {' '}
              <TypeAnimation
                sequence={['Teach.', 2500, 'Inspire.', 2500, 'Lead.', 2500]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', display: 'inline-block' }}
              />
            </strong>
            Empower.
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-900 md:text-lg/relaxed">
            Your digital ally to simplify your class management and transform teaching.
          </p>

          <div className="mt-4 flex justify-center gap-2 sm:mt-6">
            <MainButton size="sm" href="/pricing" variant="primary" text={CTA.MORE_INFO} />
            <MainButton size="sm" href="/register" variant="secondary" text={CTA.TRY_NOW} />
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
