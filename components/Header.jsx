'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { menuItems, PROTECTED_ROUTES, PUBLIC_ROUTES } from '../utils/constants';
import MainButton from './MainButton';
import { CTA } from '@/utils/enums';
import { cn } from '@/utils/functions';
import Logo from './Logo';
import { getToken } from '@/utils/token';
import { usePathname } from 'next/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const headerItems = menuItems.filter((item) => item.isHeader);
  const dashboardItems = menuItems.filter((item) => item.isDashboard);

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto flex h-[50px] w-full max-w-7xl items-center justify-between p-6 text-sm transition-all duration-100 md:place-content-evenly md:p-0 md:px-6',
        'bg-white shadow-xs',
        'sm:bg-transparent sm:shadow-none',
        isScrolled && 'sm:bg-white sm:shadow-md',
        !isScrolled && 'shadow-lg',
      )}
    >
      <Logo className="w-[120px]" />

      {/* Burger */}
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

      {/* Movil */}
      {isMenuOpen && !isLoggedIn && (
        <nav className="absolute top-10 left-0 z-50 flex w-full transform flex-col items-center gap-2 bg-white p-4 shadow-md transition-all duration-150">
          {headerItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className={item.isButton ? 'w-full' : 'w-full p-2 text-center hover:bg-gray-100'}
            >
              {item.isButton ? (
                <MainButton
                  variant="fullWidth"
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
      )}

      {/* Desktop */}
      {!isLoggedIn && (
        <nav className="hidden items-center gap-6 sm:flex">
          {headerItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className={
                item.isButton
                  ? 'w-full'
                  : 'w-full p-2 text-center whitespace-nowrap hover:bg-gray-100'
              }
            >
              {item.isButton ? (
                <MainButton
                  variant="primary"
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
      )}
      {/* Dashboard Mobil */}
      {isLoggedIn && isMenuOpen && (
        <nav className="absolute top-10 left-0 z-50 flex w-full transform flex-col items-center gap-2 bg-white p-4 shadow-md transition-all duration-150">
          {dashboardItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className={item.isButton ? 'w-full' : 'w-full p-2 text-center hover:bg-gray-100'}
            >
              {item.isButton ? (
                <MainButton
                  variant="fullWidth"
                  text={CTA.PROFILE}
                  key={item.text}
                  href={item.href}
                />
              ) : (
                item.text
              )}
            </Link>
          ))}
        </nav>
      )}
      {/* Dashboard Desktop */}
      {isLoggedIn && (
        <nav className="hidden items-center gap-3 sm:flex">
          {dashboardItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className={item.isButton ? 'w-full' : 'w-full p-2 text-center whitespace-nowrap'}
            >
              {item.icon && <item.icon className="text-primary mr-1 h-5 w-5" />}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
