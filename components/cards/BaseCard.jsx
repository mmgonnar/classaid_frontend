'use client';

function BaseCard({
  children,
  border = 'gray',
  align = 'center',
  className = '',
  toggleModal,
  size = 'medium',
  animation = 'scale',
}) {
  const borders = {
    blue: 'border-primary',
    grey: 'border-neutral-500',
    lightGrey: 'border-neutral-200',
    none: 'border-none',
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

  const animations = {
    scale: 'transition-all duration-300 hover:z-10 hover:scale-[1.02]',
    none: '',
  };
  return (
    <div
      className={`flex w-full flex-col items-center rounded-2xl border-1 ${className} ${borders[border]} ${alignment[align]} ${sizes[size]} ${animations[animation]}`}
      onClick={toggleModal}
    >
      {children}
    </div>
  );
}

export default BaseCard;
