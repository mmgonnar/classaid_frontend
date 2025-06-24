'use client';

import { routeNames } from '@/utils/constants';
import { cn } from '@/utils/functions';
import { usePathname } from 'next/navigation';

function PageTitle({ className = '' }) {
  const pathname = usePathname();
  const pageTitle = routeNames[pathname];
  return <p className={`text-sm text-neutral-600 ${className}`}>{pageTitle}</p>;
}

export default PageTitle;
