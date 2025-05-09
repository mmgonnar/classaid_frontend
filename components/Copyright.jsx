'use client';
import Link from 'next/link';

function Copyright({ variant = 'md' }) {
  const sizeVariants = {
    sm: 'text-xs md:text-sm',
    md: 'text-sm md:text-base',
    lg: 'text-base md:text-lg',
    xl: 'text-lg md:text-xl',
  };

  const textSizeClass = sizeVariants[variant] || sizeVariants['md'];

  return (
    <div
      className={`md:text-right' fixed bottom-0 left-1/2 flex w-[300px] -translate-x-1/2 transform items-center justify-center gap-2 pb-3 text-center text-neutral-500 md:left-50 md:w-[380px] md:flex-row md:gap-6 ${textSizeClass}`}
    >
      <p className="text-center">
        {' \u00A9'} {new Date().getFullYear()} | {'ClassAid'}
      </p>
      <p>
        Created by:
        <Link
          href="https://github.com/mmgonnar"
          target="_blank"
          className="transition-colors hover:text-gray-300"
        >
          <strong> Mariela González</strong>
        </Link>
      </p>
    </div>
  );
}

export default Copyright;
