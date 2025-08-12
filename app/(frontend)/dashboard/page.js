'use client';
import BaseCard from '@/components/cards/BaseCard';
import ClassCards from '@/components/cards/ClassCards';
import PageTitle from '@/components/small components/PageTitle';
import UserContext from '@/context/UserContext';

import AddCardButton from '@/components/buttons/AddCardButton';
import GroupCards from '@/components/cards/GroupCards';
import KpiCards from '@/components/cards/KpiCards';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import AddClassModal from '@/components/modals/AddClassModal';
import Calendar from '@/components/small components/Calendar';
import Loading from '@/components/small components/Loading';
import SectionTitleDash from '@/components/small components/SectionTitleDash';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import { useContext, useState } from 'react';

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
      <div className="flex flex-col">
        <h1 className="text-primary pb-1 text-xl font-bold md:text-2xl">
          Welcome, {userData?.name}!{' '}
        </h1>
        <PageTitle className="pb-4" />
        <div className="pl-60px grid h-full grid-cols-1 gap-4 overflow-y-auto md:grid-cols-[1fr_auto]">
          <div>
            <KpiCards />
            <SectionTitleDash title="Classes" href="/dashboard/classes" />
            <BaseCard
              border="lightGrey"
              className="w-full items-center justify-center bg-white p-3 md:p-6"
              animation="none"
            >
              <div className="custom-md:grid-cols-4 custom-sm:grid-cols-2 grid w-[100%] items-center gap-2 md:justify-center">
                <AddCardButton
                  toggleModal={handleAddClassModal}
                  data-auto-animate-id="add-class-button"
                />
                <ClassCards />
              </div>
            </BaseCard>
            <SectionTitleDash title="Groups" href="/dashboard/groups" />
            <div className="w-[100%] items-center gap-2 pb-4 sm:grid-cols-1 md:justify-center">
              <GroupCards />
            </div>
          </div>
          <div className="">
            <BaseCard
              animation="none"
              border="lightGrey"
              className="mb-4 w-120 rounded-lg bg-white"
            >
              <Calendar />
            </BaseCard>
            <BaseCard
              animation="none"
              border="lightGrey"
              className="w-[100%] rounded-lg bg-white p-2"
            >
              {/* <Calendar /> */}

              <div className="flex w-full items-center justify-between p-2">
                <p className="text-primary text-sm font-semibold">Upcoming Tasks</p>
                <button className="flex cursor-pointer items-center gap-1">
                  <CalendarTodayRoundedIcon className="!text-[14px] text-neutral-500" />
                  <p className="text-xs text-neutral-600">Calendar</p>
                </button>
              </div>
              <div className="flex w-full flex-col gap-3">
                <div className="w-full rounded-sm outline-1 outline-neutral-200">
                  <div className="flex items-center justify-between gap-2 p-2">
                    <ErrorOutlineRoundedIcon className="!text-[16px] text-red-600" />

                    <div className="w-[70%] text-sm">
                      <p className="text-neutral-700">English evaluation</p>
                      <p className="text-xs text-neutral-400">Due today</p>
                    </div>
                    <div className="flex h-5 w-12 justify-center rounded-full bg-red-500 text-[12px] text-white">
                      high
                    </div>
                  </div>
                </div>
                <div className="w-full rounded-sm outline-1 outline-neutral-200">
                  <div className="flex items-center justify-between gap-2 p-2">
                    <QueryBuilderRoundedIcon className="!text-[16px] text-neutral-600" />

                    <div className="w-[70%] text-sm">
                      <p className="truncate text-neutral-800">Update grades</p>
                      <p className="text-xs text-neutral-400">Due today</p>
                    </div>

                    <div className="flex h-5 w-12 justify-center rounded-full bg-green-600 text-[12px] text-white">
                      low
                    </div>
                  </div>
                </div>
                <div className="w-full rounded-sm outline-1 outline-neutral-200">
                  <div className="flex items-center justify-between gap-2 p-2">
                    <QueryBuilderRoundedIcon className="!text-[16px] text-neutral-600" />

                    <div className="w-[70%] text-sm">
                      <p className="truncate text-neutral-800">Prepare English A1 evaluation</p>
                      <p className="text-xs text-neutral-400">Due today</p>
                    </div>
                    <div className="flex h-5 w-12 justify-center rounded-full bg-green-600 text-[12px] text-white">
                      low
                    </div>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
      <AddClassModal modalOpen={addClassModalOpen} toggleModal={handleAddClassModal} />
    </DashboardLayout>
  );
}

export default Dashboard;
