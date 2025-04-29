'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { menuItems } from '../utils/constants';
import MainButton from './MainButton';
import { CTA } from '@/utils/enums';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerItems = menuItems.filter((item) => item.isHeader);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 flex h-[50px] w-full items-center justify-between bg-white p-6 px-10 text-sm sm:bg-transparent md:px-10">
      <Link href="/">
        <h1 className="text-bg-blue-800 text-xl font-bold">ClassAid</h1>
      </Link>

      {/* Burger */}
      <button
        className="grid cursor-pointer grid-cols-1 grid-rows-1 p-2 sm:hidden"
        onClick={toggleMenu}
      >
        <Bars3Icon
          className={`text-primary col-start-1 col-end-2 row-start-1 row-end-2 h-6 w-6 transition-all duration-100 ${isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-0 opacity-100'}`}
        />
        <XMarkIcon
          className={`text-primary col-start-1 col-end-2 row-start-1 row-end-2 h-6 w-6 rotate-180 transform transition-all duration-150 ${!isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`}
        />
      </button>

      {/* Movil */}
      {isMenuOpen && (
        <nav className="e absolute top-16 left-0 z-50 flex w-full transform flex-col items-center gap-2 bg-white p-4 shadow-md transition-all duration-150">
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
        {headerItems.map((item) =>
          item.isButton ? (
            <MainButton
              variant="primary"
              text={CTA.CREATE_ACCOUNT}
              key={item.text}
              href={item.href}
            />
          ) : (
            <Link key={item.text} href={item.href} className="hover:text-blue-800">
              {item.text}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
//
export default Header;
