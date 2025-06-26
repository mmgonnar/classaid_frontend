'use client';
import { useContext } from 'react';
import BaseCard from '@/components/cards/BaseCard';
import ClassCard from '@/components/cards/ClassCard';
import Loading from '@/components/small components/Loading';
import PageTitle from '@/components/small components/PageTitle';
import UserContext from '@/context/UserContext';
import AddCard from '@/components/cards/AddCard';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import SectionTitleDash from '@/components/small components/SectionTitleDash';
import MainButton from '@/components/MainButton';
import ClassContext from '@/context/ClassContext';

function Dashboard() {
  const { userData, loading } = useContext(UserContext);
  const { classData, setClassData, handleCreateClass } = useContext(ClassContext);

  if (loading || !userData) {
    return <Loading />;
  }

  const handleAlgo = () => {
    console.log('zzzzzzzz');
  };

  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-[auto]">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-primary text-lg font-bold">Hello, {userData?.name}! </h1>
          </div>

          <PageTitle className="pb-2" />
          <SectionTitleDash title="Classes" href="/dashboard/classes" />
          <div className="grid w-[100%] grid-rows-4 items-center gap-2 pb-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 md:justify-center">
            <AddCard onAlgo={handleAlgo} />
            <ClassCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
