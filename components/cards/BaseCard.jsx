'use client';

function BaseCard({ children, border = 'gray', align = 'center' }) {
  const borders = {
    blue: 'border-primary',
    grey: 'border-neutral-500',
    lightGrey: 'border-neutral-300',
  };
  const alignment = {
    center: 'items-center',
    left: 'items-left',
    right: 'items-right',
  };
  return (
    <div
      className={`flex aspect-square max-w-sm flex-col items-center space-y-3 rounded-2xl border-2 bg-white transition-all duration-300 hover:z-10 hover:scale-[1.02] hover:shadow-md ${borders[border]} ${alignment[align]}`}
    >
      {children}
    </div>
  );
}

export default BaseCard;
