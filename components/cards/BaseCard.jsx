'use client';

function BaseCard({
  children,
  border = 'gray',
  align = 'center',
  className = '',
  toggleModal,
  size = 'medium',
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

  const sizes = {
    // medium: 'max-w-sm',
    full: 'w-full',
  };
  return (
    <div
      className={`flex !w-[97%] flex-col items-center rounded-2xl border-2 transition-all duration-300 hover:z-10 hover:scale-[1.02] hover:shadow-md ${className} ${borders[border]} ${alignment[align]} ${sizes[size]}`}
      onClick={toggleModal}
    >
      {children}
    </div>
  );
}

export default BaseCard;
