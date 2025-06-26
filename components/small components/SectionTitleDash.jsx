'use client';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SectionTitleDash({ title = '', href = '' }) {
  const pathname = usePathname();

  const dashboardRoute = pathname === '/dashboard';
  return (
    <div className="flex justify-between">
      <p className="text-primary pb-2 text-sm">{title}</p>
      {dashboardRoute && (
        <Link href={href}>
          <p className="flex cursor-pointer pb-2 text-xs text-neutral-400">
            View All <ChevronRightRoundedIcon sx={{ fontSize: '1.3em' }} />
          </p>
        </Link>
      )}
    </div>
  );
}

export default SectionTitleDash;
