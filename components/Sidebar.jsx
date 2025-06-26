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
    <aside className="flex h-full cursor-pointer flex-col items-center justify-between border-r-1 border-neutral-300 bg-white">
      <nav>
        <div className="gap:8 flex w-16 flex-col bg-white py-8 md:gap-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className={cn(
                path == item.href && 'bg-third',
                item.isButton
                  ? 'w-full'
                  : 'w-full transform-gpu p-2 text-center whitespace-nowrap transition-all duration-300 hover:scale-105 hover:bg-neutral-100',
              )}
            >
              {item.icon && <item.icon className="text-primary mr-1 h-5 w-5 cursor-pointer" />}
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
