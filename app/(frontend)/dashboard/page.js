'use client';
import BaseCard from '@/components/cards/BaseCard';
import ClassCard from '@/components/cards/ClassCard';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import MainLayout from '@/components/layouts/MainLayout';
import Sidebar from '@/components/Sidebar';
import AddComponent from '@/components/cards/AddCard';
import PageTitle from '@/components/small components/PageTitle';
import UserContext from '@/context/UserContext';

import { useContext } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

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
    <DashboardLayout>
      <div className="grid-row-[auto_auto] grid">
        <div className="flex flex-col">
          <h1 className="text-primary text-lg font-bold">Welcome, {userData?.name}! </h1>
          <PageTitle className="pb-2" />
          <p className="text-primary pb-2 text-sm">Classes</p>
          <div className="dashboard__container flex gap-2">
            <ClassCard />
            <AddComponent />
          </div>
        </div>
        <BaseCard border="lightGrey" className="w-[250px] bg-white p-2"></BaseCard>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
