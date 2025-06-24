'use client';
import Sidebar from '@/components/Sidebar';

function DashboardLayout({ children }) {
  return (
    <div className="bg-secondary bg-opacity-90 grid h-full grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="flex">{children}</div>
    </div>
  );
}

export default DashboardLayout;
