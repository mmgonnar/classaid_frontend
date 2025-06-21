'use client';

import { routeNames } from '@/utils/constants';
import { usePathname } from 'next/navigation';

function PageTitle() {
  const pathname = usePathname();
  const pageTitle = routeNames[pathname];
  return <p>{pageTitle}</p>;
}

export default PageTitle;
