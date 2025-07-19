'use client';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import BaseCard from './cards/BaseCard';

function TextTemplate({
  title = 'Feature Here',
  align = 'center',
  text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  className = '',
}) {
  const alignment = {
    center: 'text-center md:text-justify',
    left: 'text-center md:text-left',
    right: 'text-center md:text-right',
    justify: 'text-center md:text-justify',
  };
  return (
    <div className={`${alignment[align]} w-[280px]`}>
      <h4 className="text-primary text-base font-semibold md:text-xl">{title}</h4>
      <p className="text-sm text-balance text-gray-600 md:text-base">{text}</p>
    </div>
  );
}

function TextBlock({
  title = 'Why Teachers Choose ClassAid',
  text = 'Built by educators, for educators. We understand the challenges of modern teaching and designed ClassAid to be the solution you have been waiting for.',
}) {
  return (
    <>
      <div className="py- p- m-auto flex max-w-4xl flex-col pt-10 text-center text-balance md:w-[70%] md:pt-30">
        <h1 className="text-primary mb-4 text-3xl font-bold">{title}</h1>
        <p className="text-balance text-gray-600">{text}</p>
        <div className="m-auto grid items-center justify-center gap-6 py-8 md:grid-cols-[1fr_auto]">
          <div className="w-70">
            <h2 className="text-primary w-full pb-6 text-xl font-bold md:text-left">
              Save 10+ Hours Per Week
            </h2>
            <div className="flex w-full gap-1 pb-3">
              <CheckCircleOutlineRoundedIcon className="text-cyan-500" />
              <div className="w-80 text-left">
                <h3 className="text-primary pb-1 text-sm font-medium">
                  Automated Administrative Tasks
                </h3>
                <p className="text-sm text-neutral-600">
                  Let AI handle routine grading, attendance calculations, and report generation
                </p>
              </div>
            </div>
            <div className="flex w-full gap-1 pb-3">
              <CheckCircleOutlineRoundedIcon className="text-cyan-500" />
              <div className="w-80 text-left">
                <h3 className="text-primary pb-1 text-sm font-medium">Intuitive Interface</h3>
                <p className="w-full text-sm text-neutral-600">
                  Clean, simple design that requires minimal training to master
                </p>
              </div>
            </div>
            <div className="flex w-full gap-1 pb-3">
              <CheckCircleOutlineRoundedIcon className="text-cyan-500" />
              <div className="w-full text-left">
                <h3 className="text-primary pb-1 text-sm font-medium">Real-time Collaboration</h3>
                <p className="w-full text-sm text-neutral-600">
                  Clean, simple design that requires minimal training to master
                </p>
              </div>
            </div>
          </div>
          <BaseCard
            border="lightGrey"
            className="bg-secondary m-auto flex w-auto items-center justify-center p-4 shadow-md md:h-auto"
          >
            <div className="flex w-full flex-col">
              <h2 className="text-md w-full pb-3 text-left font-medium">Trusted by Educators</h2>
              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <div className="col-start-1 row-start-1 flex flex-col justify-center">
                  <p className="text-primary text-2xl font-bold">10k</p>
                  <p className="text-xs text-neutral-500">Active teachers</p>
                </div>
                <div className="col-start-1 row-start-2 flex flex-col justify-center">
                  <p className="text-primary text-2xl font-bold">98%</p>
                  <p className="text-xs text-neutral-500">Satisfaction Rate</p>
                </div>
                <div className="col-start-2 row-start-1 flex flex-col justify-center">
                  <p className="text-primary text-2xl font-bold">1M+</p>
                  <p className="text-xs text-neutral-500">Active students</p>
                </div>
                <div className="col-start-2 row-start-2 flex w-full flex-col justify-center">
                  <p className="text-primary text-2xl font-bold">2</p>
                  <p className="w-full text-xs text-neutral-500">Countries</p>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </>
  );
}

export { TextTemplate, TextBlock };
