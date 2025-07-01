'use client';

function BaseCard({
  children,
  border = 'gray',
  align = 'center',
  className = '',
  handleOpenModal,
}) {
  const borders = {
    blue: 'border-primary',
    grey: 'border-neutral-500',
    lightGrey: 'border-neutral-200',
  };
  const alignment = {
    center: 'items-center',
    left: 'items-left',
    right: 'items-right',
  };
  return (
    <div
      className={`flex max-w-sm flex-col items-center rounded-2xl border-2 transition-all duration-300 hover:z-10 hover:scale-[1.02] hover:shadow-md ${className} ${borders[border]} ${alignment[align]}`}
      onClick={handleOpenModal}
    >
      {children}
    </div>
  );
}

export default BaseCard;
