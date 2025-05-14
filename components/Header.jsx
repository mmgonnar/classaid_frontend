'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { menuItems } from '../utils/constants';
import MainButton from './MainButton';
import { CTA } from '@/utils/enums';
import { cn } from '@/utils/functions';
import Logo from './Logo';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerItems = menuItems.filter((item) => item.isHeader);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        'sticky top-0 z-50 mx-auto flex h-[50px] w-full items-center justify-between p-6 text-sm transition-all duration-100 md:place-content-evenly md:p-0',
        'bg-white shadow-xs',
        'sm:bg-transparent sm:shadow-none',
        isScrolled && 'sm:bg-white sm:shadow-md',
        !isScrolled && 'shadow-lg',
      )}
    >
      <Logo />

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
      {isMenuOpen && (
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
    </header>
  );
}
//
export default Header;
