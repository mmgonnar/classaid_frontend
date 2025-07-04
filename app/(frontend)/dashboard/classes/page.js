'use client';
import { useContext, useState } from 'react';
import ClassCard from '@/components/cards/ClassCard';
import Loading from '@/components/small components/Loading';
import PageTitle from '@/components/small components/PageTitle';
import UserContext from '@/context/UserContext';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import SectionTitleDash from '@/components/small components/SectionTitleDash';
// import ClassContext from '@/context/ClassContext';
import AddClassModal from '@/components/modals/AddClassModal';
import AddCardButton from '@/components/buttons/AddCardButton';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Dashboard() {
  const { userData, loading } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);

  const [parent] = useAutoAnimate({ duration: 300 });

  // const { classData, setClassData, handleCreateClass } = useContext(ClassContext);

  if (loading || !userData) {
    return <Loading />;
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    console.log('Click');
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
          <div
            // ref={parent}
            className="custom-sm:grid-cols-2 grid w-[100%] items-center gap-2 pb-4 sm:grid-cols-2 md:grid-cols-4 md:justify-center"
          >
            <AddCardButton
              toggleModal={toggleModal}
              data-auto-animate-id="add-class-button"
              // onAlgo={handleAlgo}
            />
            <ClassCard />
          </div>
        </div>
      </div>

      <AddClassModal modalOpen={modalOpen} toggleModal={toggleModal} />
    </DashboardLayout>
  );
}

export default Dashboard;
