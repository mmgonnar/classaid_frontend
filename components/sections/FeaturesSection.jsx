'use client';

import Image from 'next/image';
import { TextTemplate } from '../TextTemplate';
import phoneScreen from '../../img/phone_screen.png';

function FeaturesSection() {
  return (
    <section className="bg-third md:grid-rows-2fr] grid grid-cols-1 justify-items-center gap-x-2 pt-10 md:grid-cols-[1fr_auto_1fr]">
      <div className="w-fit text-balance md:w-auto md:justify-self-end">
        <TextTemplate align="right" />
      </div>
      <div className="w-fit text-balance md:w-auto md:justify-self-start">
        <TextTemplate align="left" />
      </div>
      <div className="w-fit text-balance md:w-auto md:justify-self-end">
        <TextTemplate align="right" />
      </div>
      <div className="w-fit text-balance md:w-auto md:justify-self-start">
        <TextTemplate align="left" />
      </div>

      <div className="w-[250px] md:col-start-2 md:row-span-2 md:row-start-1">
        <Image src={phoneScreen} alt="Phone screen example" className="object-contain" />
      </div>
    </section>
  );
}

export default FeaturesSection;
