'use client';

import { PROTECTED_ROUTES } from '@/utils/constants';
import { cn } from '@/utils/functions';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function BaseDrawer({ children, isMenuOpen, toggleMenu }) {
  const pathname = usePathname();
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));

  useEffect(() => {
    const handleKeyPress = (evt) => {
      if (evt.key === 'Escape' && isMenuOpen) {
        toggleMenu();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        onClick={toggleMenu}
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      ></div>
      <div
        className={cn(
          'fixed top-0 right-0 z-60 h-full w-[320px] transform gap-4 bg-white shadow-lg transition-all duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          !isProtectedRoute && 'h-[]',
        )}
      >
        {children}
        <button
          onClick={toggleMenu}
          className={cn(
            'absolute top-4 left-4 z-61 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white p-1 hover:bg-neutral-200 md:left-[-15%]',
            !isMenuOpen && 'hidden',
          )}
        >
          <CloseOutlinedIcon sx={{ fontSize: '1.3rem' }} className="text-primary" />
        </button>
      </div>
    </>
  );
}

export default BaseDrawer;
