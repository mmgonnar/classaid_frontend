'use client';

import { routeNames } from '@/utils/constants';
import { cn } from '@/utils/functions';
import { usePathname } from 'next/navigation';

function PageTitle({ className = '' }) {
  const pathname = usePathname();
  const pageTitle = routeNames[pathname];
  return <p className={`text-xs text-neutral-500 ${className}`}>{pageTitle}</p>;
}

export default PageTitle;
