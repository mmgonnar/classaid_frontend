'use client';
import { menuItems } from '@/utils/constants';
import { cn } from '@/utils/functions';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const path = usePathname();
  const sidebarItems = menuItems.filter((item) => item.isSidebar);

  return (
    <aside className="sticky top-0 flex h-full cursor-pointer flex-col items-center justify-between border-r-1 border-neutral-300 bg-white">
      <nav>
        <div className="flex flex-col gap-2 bg-white py-8 md:gap-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className={cn(
                'flex, flex-col',
                path == item.href && 'bg-third',
                item.isButton
                  ? 'w-full'
                  : 'w-full transform-gpu p-2 text-center whitespace-nowrap transition-all duration-300 hover:scale-105 hover:bg-neutral-100 md:p-3',
              )}
            >
              {item.icon && (
                <item.icon className="text-primary !m-0 mr-1 h-5 w-5 cursor-pointer !text-[32px] md:!text-[24px]" />
              )}
            </Link>
          ))}
        </div>
      </nav>
      <Link href="/" className="pb-10 text-neutral-600">
        <SettingsOutlinedIcon />
      </Link>
    </aside>
  );
}

export default Sidebar;
