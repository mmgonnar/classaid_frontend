'use client';

import { useEffect, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from '@/utils/constants';
import MainButton from '../MainButton';
import { CTA } from '@/utils/enums';
import { cn } from '@/utils/functions';
import { usePathname } from 'next/navigation';
import { getToken } from '@/utils/token';
import ProfileDrawer from '../testear/drawers/ProfileDrawer';

function Navbar({ menuItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const headerItems = menuItems.filter((item) => (isLoggedIn ? item.isHeader : item.isDashboard));
  const pathname = usePathname();

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      {/* Burger */}
      {!isDesktop && (
        <button
          className="grid cursor-pointer grid-cols-1 grid-rows-1 p-2 sm:hidden"
          onClick={toggleMenu}
        >
          <MenuOutlinedIcon
            className={`text-primary col-start-1 col-end-2 row-start-1 row-end-2 h-6 w-6 transition-all duration-100 ${isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-0 opacity-100'}`}
          />
          <CloseOutlinedIcon
            className={`text-primary col-start-1 col-end-2 row-start-1 row-end-2 h-6 w-6 rotate-180 transform transition-all duration-150 ${!isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`}
          />
        </button>
      )}

      <nav
        className={cn(
          'absolute top-10 left-0 z-50 flex w-full transform flex-col items-center gap-2 bg-white p-4 shadow-md transition-all duration-150',
          !isMenuOpen && !isDesktop && 'hidden',
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
            onClick={(e) => {
              if (item.text.toLowerCase() === 'profile') {
                e.preventDefault();
                toggleProfile();
              }
            }}
          >
            {isProtectedRoute ? (
              isDesktop ? (
                item.icon && <item.icon className="text-primary h-5 w-5" />
              ) : (
                item.text
              )
            ) : item.isButton ? (
              <MainButton
                variant={isDesktop ? 'primary' : 'fullWidth'}
                text={CTA.CREATE_ACCOUNT}
                key={item.text}
                href={item.href}
              />
            ) : (
              item.text
            )}
          </Link>
        ))}
      </nav>

      {/* <ProfileDrawer isOpen={isProfileOpen} onClose={toggleProfile}>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <AccountCircleOutlinedIcon className="text-primary h-12 w-12" />
            <div>
              <h3 className="font-semibold">Nombre del Usuario</h3>
              <p className="text-sm text-gray-500">usuario@email.com</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <button className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </ProfileDrawer> */}
    </>
  );
}

export default Navbar;
