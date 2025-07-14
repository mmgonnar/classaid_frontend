'use client';
import BaseCard from '@/components/cards/BaseCard';
import ClassCards from '@/components/cards/ClassCards';
import BouncyLoader from '@/components/loaders/BouncyLoader';
import PageTitle from '@/components/small components/PageTitle';
import UserContext from '@/context/UserContext';

import { useContext, useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import SectionTitleDash from '@/components/small components/SectionTitleDash';
import AddCardButton from '@/components/buttons/AddCardButton';
import AddClassModal from '@/components/modals/AddClassModal';
import Loading from '@/components/small components/Loading';
import GroupCards from '@/components/cards/GroupCards';

function Dashboard() {
  const { userData, loading } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [addClassModalOpen, setAddClassModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  if (loading || !userData) {
    return <Loading />;
  }

  const handleAddClassModal = () => {
    setAddClassModalOpen(!addClassModalOpen);
  };

  return (
    <DashboardLayout>
      <div className="pl-60px grid h-full gap-4 overflow-y-auto md:grid-cols-[1fr_250px]">
        <div className="flex flex-col">
          <h1 className="text-primary text-lg font-bold">Welcome, {userData?.name}! </h1>
          <PageTitle className="pb-2" />
          <SectionTitleDash title="Classes" href="/dashboard/classes" />
          <div className="custom-md:grid-cols-4 custom-sm:grid-cols-2 grid w-[100%] items-center gap-2 pb-4 md:justify-center">
            <AddCardButton
              toggleModal={handleAddClassModal}
              data-auto-animate-id="add-class-button"
            />
            <ClassCards />
          </div>
          <SectionTitleDash title="Groups" href="/dashboard/attendance" />
          <div className="w-[100%] items-center gap-2 pb-4 sm:grid-cols-1 md:justify-center">
            {/* <AddCardButton
              toggleModal={handleAddClassModal}
              data-auto-animate-id="add-class-button"
            />
            <ClassCards /> */}
            <GroupCards />
          </div>
        </div>
        <div className="w-[]">
          <BaseCard border="lightGrey" className="w-[100%] bg-white p-2">
            {/* <Calendar /> */}
            <div className="mb-3 flex h-[400px] w-full flex-nowrap items-center justify-center bg-neutral-200">
              Calendario aqui
            </div>
            <div className="mb-3 flex h-[210px] w-full items-center justify-center bg-neutral-200">
              No sé qué aqui
            </div>
          </BaseCard>
        </div>
      </div>
      <AddClassModal modalOpen={addClassModalOpen} toggleModal={handleAddClassModal} />
    </DashboardLayout>
  );
}

export default Dashboard;
