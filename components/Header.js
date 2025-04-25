'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { menuItems } from '../utils/constants';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerItems = menuItems.filter((item) => item.isHeader);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 flex w-full items-center justify-between bg-white p-6 sm:bg-transparent">
      <h1 className="text-bg-blue-800 text-xl font-bold">ClassAid</h1>

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
          {headerItems.map((item) =>
            item.isButton ? (
              <Link key={item.text} href={item.href} className="w-full">
                <button className="w-full rounded-full bg-blue-800 p-2 text-center text-sm font-medium text-white hover:bg-blue-900">
                  {item.text}
                </button>
              </Link>
            ) : (
              <Link
                key={item.text}
                href={item.href}
                className="w-full p-2 text-center hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {item.text}
              </Link>
            ),
          )}
        </nav>
      )}
      {/* Desktop */}
      <nav className="hidden items-center gap-6 sm:flex">
        {headerItems.map((item) =>
          item.isButton ? (
            <Link key={item.text} href={item.href}>
              <button className="bg-primary w-full rounded-full p-2 text-center text-sm font-medium text-white hover:bg-blue-900">
                {item.text}
              </button>
            </Link>
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

export default Header;
