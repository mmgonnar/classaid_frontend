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
  title = 'An awesome catch line',
  text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
}) {
  return (
    <div className="m-auto flex flex-col p-6 py-10 text-center md:w-[70%] md:pt-70">
      <h1 className="text-primary mb-4 text-2xl font-bold">{title}</h1>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export { TextTemplate, TextBlock };
