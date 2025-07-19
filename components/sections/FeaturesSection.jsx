'use client';

import Image from 'next/image';
import { TextTemplate } from '../TextTemplate';
import phoneScreen from '../../img/phone_screen.png';

function FeaturesSection() {
  return (
    <section className="bg-third md:grid-rows-2fr] grid grid-cols-1 justify-items-center gap-x-2 pt-10 md:grid-cols-[1fr_auto_1fr]">
      <div className="w-fit pb-4 text-balance md:w-auto md:justify-self-end">
        <TextTemplate
          title="Smart Grading"
          text="Automated grading tools with customizable rubrics and instant feedback"
          className=""
          align="right"
        />
      </div>
      <div className="w-fit pb-4 text-balance md:w-auto md:justify-self-start">
        <TextTemplate
          title="Attendance Tracking"
          text="Digital attendance with real-time reports and parent notifications"
          align="left"
        />
      </div>
      <div className="w-fit pb-4 text-balance md:w-auto md:justify-self-end">
        <TextTemplate
          title="Lesson Planning"
          text="Collaborative lesson plans with curriculum alignment and resource sharing"
          align="right"
        />
      </div>
      <div className="w-fit pb-4 text-balance md:w-auto md:justify-self-start">
        <TextTemplate
          title="Easy Control"
          text="Automated grading tools with customizable rubrics and instant feedback"
          align="left"
        />
      </div>

      <div className="w-[250px] md:col-start-2 md:row-span-2 md:row-start-1">
        <Image src={phoneScreen} alt="Phone screen example" className="object-contain" />
      </div>
    </section>
  );
}

export default FeaturesSection;
