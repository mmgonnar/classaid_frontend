'use client';
import BaseCard from '@/components/cards/BaseCard';
import ClassCard from '@/components/cards/ClassCard';
import DashboardContainer from '@/components/DashboardContainer';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import MainButton from '@/components/MainButton';
import MainLayout from '@/components/layouts/MainLayout';
import Sidebar from '@/components/Sidebar';
import Loading from '@/components/small components/Loading';
import PageTitle from '@/components/small components/PageTitle';
import ClassContext from '@/context/ClassContext';
import UserContext from '@/context/UserContext';

import { useContext } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

function Dashboard() {
  const { userData, loading } = useContext(UserContext);

  if (loading || !userData) {
    return <Loading />;
  }
  return (
    <MainLayout>
      <DashboardLayout></DashboardLayout>
    </MainLayout>
  );
}

export default Dashboard;
