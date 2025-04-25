'use client';
import Link from 'next/link';
import { useState } from 'react';

import BurgerIcon from '../../icons/burger.svg';
import CloseIcon from '../../icons/close.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
//import { Bars3Icon } from '@heroicons/react/24/outline';
//import { MenuBook } from '@mui/icons-material';
//import { HomeIcon } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Clic');
  };

  const menuItems = [
    { text: 'Pricing', href: '/pricing' },
    { text: 'Sign In', href: '/signin' },
    { text: 'Create Account', href: '/register', isButton: true },
  ];

  return (
    <header className="flex w-full items-center justify-between bg-white p-6 sm:bg-transparent">
      <h1 className="text-bg-blue-800 text-xl font-bold">ClassAid</h1>
      <div></div>

      {/* Burger */}
      <button
        className="grid cursor-pointer grid-cols-1 grid-rows-1 p-2 sm:hidden"
        onClick={toggleMenu}
      >
        <Bars3Icon
          className={`text-primary col-start-1 col-end-2 row-start-1 row-end-2 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-0 opacity-100'}`}
        />
        <XMarkIcon
          className={`text-primary col-start-1 col-end-2 row-start-1 row-end-2 h-6 w-6 rotate-180 transform transition-all duration-300 ${!isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`}
        />

        {/* {isMenuOpen ? (
          <XMarkIcon
            className={`text-primary h-6 w-6 rotate-180 transform transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`}
          />
        ) : (
          <Bars3Icon
            className={`text-primary h-6 w-6 transition-all duration-300 ${!isMenuOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`}
          />
        )} */}
        {/*  */}
      </button>

      {/* Movil */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 z-50 flex w-full flex-col items-center gap-2 bg-white p-4 shadow-md sm:hidden">
          {menuItems.map((item) =>
            item.isButton ? (
              <Link key={item.text} href={item.href} className="w-full">
                <button className="bg-primary w-full rounded-full p-2 text-center text-sm font-medium text-white hover:bg-blue-900">
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
        {menuItems.map((item) =>
          item.isButton ? (
            <Link key={item.text} href={item.href}>
              <button className="rounded-full bg-blue-800 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900">
                {item.text}
              </button>
            </Link>
          ) : (
            <Link key={item.text} href={item.href} className="hover:text-blue-800">
              {item.text}
            </Link>
          ),
        )}

        {/* <Link href="/" className="">
          Pricing
        </Link>
        <Link href="/" className="">
          Sign In
        </Link> */}
      </nav>
    </header>
  );
}

export default Header;
