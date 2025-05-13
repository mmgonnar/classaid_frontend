'use client';

function BaseCard({ children, border = 'gray', align = 'center' }) {
  const borders = {
    blue: 'border-primary',
    gray: 'border-neutral-400',
  };
  const alignment = {
    center: 'items-center',
    left: 'items-left',
    right: 'items-right',
  };
  return (
    <div
      className={`flex w-sm flex-col items-center space-y-3 rounded-2xl border-2 ${borders[border]} ${alignment[align]}`}
    >
      {children}
    </div>
  );
}

export default BaseCard;
