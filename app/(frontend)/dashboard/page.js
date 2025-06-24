'use client';
import BaseCard from '@/components/cards/BaseCard';
import ClassCard from '@/components/cards/ClassCard';
import DashboardContainer from '@/components/DashboardContainer';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import MainButton from '@/components/MainButton';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import AddComponent from '@/components/small components/AddComponent';
import PageTitle from '@/components/small components/PageTitle';
import UserContext from '@/context/UserContext';

import { useContext } from 'react';

function Dashboard() {
  const { userData, loading } = useContext(UserContext);

  if (loading || !userData) {
    return (
      <div className="bg-opacity-75 fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-300">
        <BouncyLoader className="h-20 w-20" />
      </div>
    );
  }
  return (
    <MainLayout>
      <div className="bg-secondary bg-opacity-90 grid h-full grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="flex flex-col p-4">
          <h1 className="text-primary pb-3 text-lg font-bold">Welcome, {userData?.name}! </h1>
          <PageTitle />
          <div className="dashboard__container flex gap-2">
            <ClassCard />
            <AddComponent />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
