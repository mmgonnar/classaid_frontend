'use client';
import ClassCards from '@/components/cards/ClassCards';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import Loading from '@/components/small components/Loading';
import PageTitle from '@/components/small components/PageTitle';
import SectionTitleDash from '@/components/small components/SectionTitleDash';
import UserContext from '@/context/UserContext';
import { useContext, useState } from 'react';
import AddCardButton from '@/components/buttons/AddCardButton';
import KpiCards from '@/components/cards/KpiCards';
import AddClassModal from '@/components/modals/AddClassModal';

function SubjectDashboard() {
  const { userData, loading } = useContext(UserContext);
  const [addClassModalOpen, setAddClassModalOpen] = useState(false);

  if (loading || !userData) {
    return <Loading />;
  }

  const handleAddClassModal = () => {
    setAddClassModalOpen(!addClassModalOpen);
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
          <KpiCards />
          <div className="custom-sm:grid-cols-2 grid w-[100%] max-w-3xl items-center gap-2 pb-4 sm:grid-cols-2 md:grid-cols-3 md:justify-center"></div>

          <div>
            <SectionTitleDash title="All Classes" href="/dashboard/classes" />
            <div className="custom-sm:grid-cols-2 grid w-[100%] items-center gap-2 pb-4 sm:grid-cols-2 md:grid-cols-4 md:justify-center">
              <AddCardButton
                toggleModal={handleAddClassModal}
                data-auto-animate-id="add-class-button"
              />
              <ClassCards />
            </div>
          </div>
        </div>
      </div>

      <AddClassModal modalOpen={addClassModalOpen} toggleModal={handleAddClassModal} />
    </DashboardLayout>
  );
}

export default SubjectDashboard;
