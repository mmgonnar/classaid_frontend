'use client';

import { useEffect, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Link from 'next/link';
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from '@/utils/constants';
import MainButton from './MainButton';
import { CTA } from '@/utils/enums';
import { cn } from '@/utils/functions';
import { usePathname } from 'next/navigation';
import ProfileDrawer from './drawers/ProfileDrawer';

function Navbar({ menuItems }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  const headerItems = menuItems.filter((item) => {
    if (isProtectedRoute) {
      return item.isDashboard;
    }
    if (isPublicRoute) {
      return item.isHeader;
    }
    return item.isHeader;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Burger */}
      {!isDesktop && (
        <button
          className="grid cursor-pointer grid-cols-1 grid-rows-1 p-2 sm:hidden"
          onClick={toggleMenu}
        >
          {isProtectedRoute ? (
            <AccountCircleIcon className="text-primary col-start-1 col-end-2 row-start-1 row-end-2 h-6 w-6" />
          ) : (
            <>
              <MenuOutlinedIcon
                className={`text-primary col-start-1 col-end-2 row-start-1 row-end-2 h-6 w-6 transition-all duration-100 ${isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-0 opacity-100'}`}
              />
              <CloseOutlinedIcon
                className={`text-primary col-start-1 col-end-2 row-start-1 row-end-2 h-6 w-6 rotate-180 transform transition-all duration-150 ${!isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`}
              />
            </>
          )}
        </button>
      )}

      <nav
        className={cn(
          'absolute top-10 left-0 z-50 flex w-full transform flex-col items-center gap-2 bg-white shadow-md transition-all duration-150',
          !isMenuOpen && !isDesktop && 'hidden',
          isProtectedRoute && !isDesktop && isMenuOpen && 'hidden',
          isDesktop && 'relative top-0 flex-row bg-transparent whitespace-nowrap shadow-none',
        )}
      >
        {headerItems.map((item) => (
          <Link
            key={item.text}
            href={item.href}
            className={cn(
              'w-full p-2 text-center hover:bg-gray-100',
              isProtectedRoute && 'flex items-center justify-center',
            )}
          >
            {isProtectedRoute ? (
              isDesktop ? (
                item.icon && <item.icon onClick={toggleMenu} className="text-primary h-5 w-5" />
              ) : (
                item.text
              )
            ) : item.isButton ? (
              <MainButton
                variant={isDesktop ? 'primary' : 'fullWidth'}
                text={CTA.CREATE_ACCOUNT}
                key={item.text}
                href={item.href}
                size="md"
              />
            ) : (
              item.text
            )}
          </Link>
        ))}
      </nav>
      {isProtectedRoute && (
        <ProfileDrawer
          isDesktop={isDesktop}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          className={cn(isProtectedRoute && !isDesktop && !isMenuOpen && 'hidden')}
        />
      )}
    </>
  );
}

export default Navbar;
