'use client';
import BaseCard from '@/components/cards/BaseCard';
import ClassCard from '@/components/cards/ClassCard';
import DashboardContainer from '@/components/DashboardContainer';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import MainButton from '@/components/MainButton';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import Loading from '@/components/small components/Loading';
import PageTitle from '@/components/small components/PageTitle';
import ClassContext from '@/context/ClassContext';
import UserContext from '@/context/UserContext';

import { useContext } from 'react';

function Dashboard() {
  const { userData, loading } = useContext(UserContext);

  if (loading || !userData) {
    return <Loading />;
  }
  return (
    <MainLayout>
      <div className="bg-secondary bg-opacity-90 grid h-full grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="flex flex-col p-4">
          {/* <h1 className="text-primary pb-3 text-lg font-bold">Welcome, {userData?.name}! </h1> */}
          <PageTitle className="text-primary pb-2 text-base font-medium" />
          <div className="dashboard__container">
            <ClassCard></ClassCard>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
