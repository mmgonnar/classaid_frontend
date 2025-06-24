'use client';
import Sidebar from '@/components/Sidebar';
import MainLayout from './MainLayout';

function DashboardLayout({ children }) {
  return (
    <MainLayout>
      <div className="bg-secondary bg-opacity-90 grid h-full grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="flex flex-col p-4">{children}</div>
      </div>
    </MainLayout>
  );
}

export default DashboardLayout;
