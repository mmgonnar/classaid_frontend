'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/utils/functions';
import Logo from './Logo';

function Header({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 mx-auto flex h-[50px] w-full max-w-7xl items-center justify-between p-6 text-sm transition-all duration-100 md:p-0 md:px-6',
          'bg-white shadow-xs',
          'sm:bg-transparent sm:shadow-none',
          isScrolled && 'sm:bg-white sm:shadow-md',
          !isScrolled && 'shadow-lg',
        )}
      >
        <Logo className="w-[110px]" />
        <div>{children}</div>
      </header>
    </>
  );
}

export default Header;
