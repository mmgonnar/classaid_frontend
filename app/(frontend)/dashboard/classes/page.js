'use client';
import { useContext, useState } from 'react';
import ClassCards from '@/components/cards/ClassCards';
import Loading from '@/components/small components/Loading';
import PageTitle from '@/components/small components/PageTitle';
import UserContext from '@/context/UserContext';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import SectionTitleDash from '@/components/small components/SectionTitleDash';
// import ClassContext from '@/context/ClassContext';
import AddClassModal from '@/components/modals/AddClassModal';
import AddCardButton from '@/components/buttons/AddCardButton';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import KpiCard from '@/components/cards/KpiCard';
import ClassContext from '@/context/ClassContext';

function SubjectDashboard() {
  const { userData, loading } = useContext(UserContext);
  // const { classData } = useContext(ClassContext);
  const [modalOpen, setModalOpen] = useState(false);

  // const [parent] = useAutoAnimate({ duration: 300 });

  // const { classData, setClassData, handleCreateClass } = useContext(ClassContext);

  if (loading || !userData) {
    return <Loading />;
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-[auto]">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-primary text-lg font-bold">Hello, {userData?.name}! </h1>
          </div>
          <PageTitle className="pb-2" />
          <SectionTitleDash title="Classes overview" href="/dashboard/classes" />
          <div className="custom-sm:grid-cols-2 grid w-[100%] max-w-3xl items-center gap-2 pb-4 sm:grid-cols-2 md:grid-cols-3 md:justify-center">
            <KpiCard />
            <KpiCard />
            <KpiCard />
          </div>

          <div>
            <SectionTitleDash title="All Classes" href="/dashboard/classes" />
            <div className="custom-sm:grid-cols-2 grid w-[100%] items-center gap-2 pb-4 sm:grid-cols-2 md:grid-cols-4 md:justify-center">
              <AddCardButton
                onClick={toggleModal}
                data-auto-animate-id="add-class-button"
                // onAlgo={handleAlgo}
              />
              <ClassCards />
            </div>
          </div>
        </div>
      </div>

      <AddClassModal modalOpen={modalOpen} toggleModal={toggleModal} />
    </DashboardLayout>
  );
}

export default SubjectDashboard;
