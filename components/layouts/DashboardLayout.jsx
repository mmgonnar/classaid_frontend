'use client';
import Sidebar from '@/components/Sidebar';
import MainLayout from './MainLayout';

function DashboardLayout({ children }) {
  return (
    <MainLayout allowMainScroll={false}>
      <div className="bg-secondary bg-opacity-90 grid h-full grid-cols-[auto_1fr]">
        <div className="flex h-full">
          <Sidebar />
        </div>
        <div className="h-full overflow-y-auto p-4">{children}</div>
      </div>
    </MainLayout>
  );
}

export default DashboardLayout;
