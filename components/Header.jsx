'use client';

import { useContext, useEffect, useState } from 'react';
import { cn } from '@/utils/functions';
import Logo from './Logo';
import { getToken } from '@/utils/token';
import SearchBar from './SearchBar';
import { PROTECTED_ROUTES } from '@/utils/constants';
import { usePathname } from 'next/navigation';
import BaseContext from '@/context/BaseContext';

function Header({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);

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
          'fixed top-0 z-4 w-full transition-all duration-100 md:p-0 md:px-6',
          'bg-white shadow-xs',
          'sm:bg-transparent sm:shadow-none',
          isScrolled && 'sm:bg-white sm:shadow-md',
          !isScrolled && 'shadow-lg',
          isProtectedRoute && 'border-b-1 border-neutral-300 shadow-none',
        )}
      >
        <div className="mx-auto flex h-[50px] w-full max-w-7xl items-center justify-between px-6 text-sm transition-all duration-100 md:p-0 md:px-6">
          <Logo className="mr-2 w-[110px]" />
          {isProtectedRoute && <SearchBar />}
          <div>{children}</div>
        </div>
      </header>
    </>
  );
}

export default Header;
