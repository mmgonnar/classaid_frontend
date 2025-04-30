'use client';

function TextTemplate({
  align = 'center',
  text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
}) {
  const alignment = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };
  return (
    <div className={`${alignment[align]} w-xs p-6`}>
      <h4 className="text-primary text-base font-semibold md:text-xl">Cool feature here</h4>
      <p className="text-sm text-gray-600 md:text-base">{text}</p>
    </div>
  );
}

export default TextTemplate;
