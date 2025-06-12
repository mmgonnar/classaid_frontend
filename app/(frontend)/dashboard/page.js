'use client';
import MainButton from '@/components/MainButton';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import { CTA } from '@/utils/enums';

function Dashboard() {
  return (
    <MainLayout>
      <div className="bg-secondary bg-opacity-90 grid h-full grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="flex flex-col p-6">
          <h1>Hola</h1>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
