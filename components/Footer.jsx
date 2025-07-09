'use client';
import Link from 'next/link';
import { menuItems, PROTECTED_ROUTES } from '../utils/constants';
import Weather from './Weather';
import { useEffect, useState } from 'react';
import { getToken } from '@/utils/token';
import { cn } from '@/utils/functions';
import { usePathname } from 'next/navigation';

function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));

  //estado boolean true or false >
  const footerItems = menuItems.filter((item) => item.isFooter);

  useEffect(() => {
    const token = getToken();

    setIsLoggedIn(!!token);
  }, []);
  //if is loading > null
  //else > true
  return (
    <footer
      className={cn(
        'z-30 max-h-54 w-full overflow-y-auto bg-neutral-700 p-6 pt-12 text-xs text-neutral-200',
        isProtectedRoute &&
          'text-primary sticky bottom-0 max-h-12 overflow-hidden rounded-xl rounded-b-none border-1 border-t border-r border-b-0 border-l border-neutral-300 bg-white p-1',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn('w-full border-t border-solid bg-amber-50', isProtectedRoute && 'hidden')}
        ></div>
        <div
          className={cn(
            'flex flex-col items-center gap-4 pt-6 md:flex-row md:justify-between',
            isProtectedRoute && 'pt-1 md:flex-col',
          )}
        >
          <div
            className={cn(
              'flex flex-col items-center gap-4 md:flex-row',
              isProtectedRoute && 'px-3 pt-1 sm:flex-row md:justify-between',
            )}
          >
            <p className="text-center">
              {' \u00A9'} {new Date().getFullYear()} | {'ClassAid'}
            </p>

            <ul
              className={cn('flex flex-wrap justify-center gap-2 md:gap-4', isProtectedRoute && '')}
            >
              {footerItems.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="block p-2 transition-colors hover:text-gray-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              'text-center text-neutral-500 md:text-right',
              isProtectedRoute && 'sm:hidden',
            )}
          >
            <p>
              Created by
              <Link
                href="https://github.com/mmgonnar"
                target="_blank"
                className="transition-colors hover:text-gray-300"
              >
                <strong className="font-medium"> Mariela González</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
