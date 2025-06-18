'use client';
import BaseCard from '@/components/cards/BaseCard';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import MainButton from '@/components/MainButton';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import UserContext from '@/context/UserContext';

import { useContext } from 'react';

function Dashboard() {
  const { userData, loading } = useContext(UserContext);

  console.log(loading);
  if (loading || !userData) {
    return (
      <div className="bg-opacity-75 fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-300">
        <BouncyLoader className="h-20 w-20" />
      </div>
    );
  }
  return (
    // <UserProvider>
    <MainLayout>
      <div className="bg-secondary bg-opacity-90 grid h-full grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="flex flex-col p-4">
          <h1 className="text-primary pb-3 text-lg font-bold">Welcome, {userData?.name}! </h1>
          <div className="flex gap-6">
            <BaseCard border="lightGrey" className="bg-white">
              <div className="flex flex-col items-center p-6">
                <h1>asdsadad</h1>
                <h1>asdsadad</h1>
                <h1>asdsadad</h1>
              </div>
            </BaseCard>
            <BaseCard border="lightGrey" className="bg-white">
              <div className="flex flex-col items-center p-6">
                <h1>asdsadad</h1>
                <h1>asdsadad</h1>
                <h1>asdsadad</h1>
              </div>
            </BaseCard>
            <BaseCard border="lightGrey" className="bg-white">
              <div className="flex flex-col items-center p-6">
                <h1>asdsadad</h1>
                <h1>asdsadad</h1>
                <h1>asdsadad</h1>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </MainLayout>
    // </UserProvider>
  );
}

export default Dashboard;
