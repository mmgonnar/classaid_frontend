'use client';

import Image from 'next/image';
import { TextTemplate } from '../TextTemplate';
import phoneScreen from '../../img/phone_screen.png';

function FeaturesSection() {
  return (
    <section className="bg-third grid grid-cols-1 justify-items-center gap-x-2 px-6 pt-10 md:grid-cols-[1fr_auto_1fr] md:grid-rows-[auto_2fr]">
      <div className="w-full md:w-auto md:justify-self-end">
        <TextTemplate align="right" />
      </div>
      <div className="w-full md:w-auto md:justify-self-start">
        <TextTemplate align="left" />
      </div>
      <div className="w-full md:w-auto md:justify-self-end">
        <TextTemplate align="right" />
      </div>
      <div className="w-full md:w-auto md:justify-self-start">
        <TextTemplate align="left" />
      </div>

      <div className="w-[250px] md:col-start-2 md:row-span-2 md:row-start-1">
        <Image src={phoneScreen} alt="Phone screen example" className="object-contain" />
      </div>
    </section>
  );
}

export default FeaturesSection;
