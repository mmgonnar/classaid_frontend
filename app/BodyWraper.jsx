'use client';

import { PROTECTED_ROUTES } from '@/utils/constants';
import { usePathname } from 'next/navigation';

export default function BodyWrapper({ children }) {
  const pathname = usePathname();
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname?.startsWith(route));

  return <div className={isProtectedRoute ? 'overflow-hidden' : 'overflow-auto'}>{children}</div>;
}
