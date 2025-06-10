'use client';
import { menuItems } from '@/utils/constants';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Link from 'next/link';

function Sidebar() {
  const sidebarItems = menuItems.filter((item) => item.isSidebar);
  return (
    <aside className="flex h-full cursor-pointer flex-col items-center justify-between border-r-1 border-neutral-300">
      <nav>
        <div className="flex w-16 flex-col gap-2 bg-white py-8">
          {sidebarItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className={item.isButton ? 'w-full' : 'w-full p-2 text-center whitespace-nowrap'}
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
