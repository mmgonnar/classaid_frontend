'use client';
import BaseCard from '@/components/cards/BaseCard';
import ClassCard from '@/components/cards/ClassCard';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import PageTitle from '@/components/small components/PageTitle';
import UserContext from '@/context/UserContext';

import { useContext } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import SectionTitleDash from '@/components/small components/SectionTitleDash';
import AddCardButton from '@/components/buttons/AddCardButton';

function Dashboard() {
  const { userData, loading } = useContext(UserContext);

  if (loading || !userData) {
    return (
      <div className="bg-opacity-75 fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-300">
        <BouncyLoader className="h-20 w-20" />
      </div>
    );
  }

  const handleClick = () => {
    console.log('🚀 ~ page.js:25 ~ handleClick ~ handleClick:', handleClick);
  };
  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-[1fr_250px]">
        <div className="flex flex-col">
          <h1 className="text-primary text-lg font-bold">Welcome, {userData?.name}! </h1>
          <PageTitle className="pb-2" />
          <SectionTitleDash title="Classes" href="/dashboard/classes" />
          <div className="custom-md:grid-cols-4 custom-sm:grid-cols-2 grid w-[100%] items-center gap-2 pb-4 md:justify-center">
            <AddCardButton onClick={handleClick} />
            <ClassCard />
          </div>
          <p className="text-primary pb-2 text-sm">Attendance</p>
        </div>
        <div className="w-[]">
          <BaseCard border="lightGrey" className="w-[100%] bg-white p-2">
            <div className="mb-3 flex h-[400px] w-full flex-nowrap items-center justify-center bg-neutral-200">
              Calendario aqui
            </div>
            <div className="mb-3 flex h-[210px] w-full items-center justify-center bg-neutral-200">
              No sé qué aqui
            </div>
          </BaseCard>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
