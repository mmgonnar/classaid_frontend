// app/BodyWrapper.jsx
'use client';

import { PROTECTED_ROUTES } from '@/utils/constants';
import { usePathname } from 'next/navigation';

export default function BodyWrapper({ children }) {
  const pathname = usePathname();

  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);

  return <body className={isProtectedRoute ? 'overflow-hidden' : 'overflow-auto'}>{children}</body>;
}
