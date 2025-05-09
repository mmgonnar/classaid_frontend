'use client';

function TextTemplate({
  align = 'center',
  text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
}) {
  const alignment = {
    center: 'text-center md:text-justify',
    left: 'text-center md:text-left',
    right: 'text-center md:text-right',
    justify: 'text-center md:text-justify',
  };
  return (
    <div className={`${alignment[align]} w-[280px] px-4 py-6`}>
      <h4 className="text-primary text-base font-semibold md:text-xl">Cool feature here</h4>
      <p className="text-sm text-gray-600 md:text-base">{text}</p>
    </div>
  );
}

function TextBlock({
  title = 'Awesome catch line',
  text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
}) {
  return (
    <div className="m-auto flex max-w-4xl flex-col p-3 py-10 pt-10 text-center text-balance md:w-[70%] md:pt-30">
      <h1 className="text-primary mb-4 text-3xl font-bold">{title}</h1>
      <p className="text-balance text-gray-600">{text}</p>
    </div>
  );
}

export { TextTemplate, TextBlock };
