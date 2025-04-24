'use client';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Clic');
  };

  const menuItems = [
    { text: 'Pricing', href: '/pricing' },
    { text: 'Signin', href: '/signin' },
    { text: 'Create Account', href: '/register', isButton: true },
  ];

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-xl font-bold">ClassAid</h1>
      <div></div>

      {/* Burger */}
      <button className="cursor-pointer p-2 sm:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Movil */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 z-50 flex w-full flex-col items-center gap-4 bg-white p-4 shadow-lg sm:hidden">
          {menuItems.map((item) =>
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
